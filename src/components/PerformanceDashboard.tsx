import React from 'react';
import { AptitudeTest } from '../types';
import { BarChart3, TrendingUp, Target, Award, Brain, Clock, Star, Users } from 'lucide-react';

interface PerformanceDashboardProps {
  tests: AptitudeTest[];
  onClose: () => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ tests, onClose }) => {
  if (tests.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center">
        <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Test Results Yet</h3>
        <p className="text-gray-600">Take an aptitude test to see your performance dashboard.</p>
      </div>
    );
  }

  const latestTest = tests[0];
  const averageScore = tests.reduce((sum, test) => sum + test.totalScore, 0) / tests.length;
  
  // Calculate improvement trend
  const improvement = tests.length > 1 ? latestTest.totalScore - tests[1].totalScore : 0;

  // Get domain distribution
  const domainCounts = tests.reduce((acc, test) => {
    acc[test.domain] = (acc[test.domain] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  // Calculate section strengths and weaknesses
  const sectionScores: { [key: string]: number[] } = {};
  tests.forEach(test => {
    Object.entries(test.sections).forEach(([section, data]) => {
      if (!sectionScores[section]) sectionScores[section] = [];
      sectionScores[section].push(data.score);
    });
  });

  const sectionAverages = Object.entries(sectionScores).map(([section, scores]) => ({
    section,
    average: scores.reduce((sum, score) => sum + score, 0) / scores.length
  })).sort((a, b) => b.average - a.average);

  const strongestAreas = sectionAverages.slice(0, 3);
  const weakestAreas = sectionAverages.slice(-3).reverse();

  // Mock percentile data (in real app, this would come from backend)
  const percentile = Math.min(95, Math.max(5, Math.round(latestTest.totalScore + Math.random() * 20)));

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Latest Score</p>
              <p className="text-3xl font-bold">{latestTest.totalScore.toFixed(1)}%</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Average Score</p>
              <p className="text-3xl font-bold">{averageScore.toFixed(1)}%</p>
            </div>
            <Target className="w-8 h-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Percentile</p>
              <p className="text-3xl font-bold">{percentile}th</p>
            </div>
            <Users className="w-8 h-8 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Tests Taken</p>
              <p className="text-3xl font-bold">{tests.length}</p>
            </div>
            <Award className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Performance Trend */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
            Performance Trend
          </h3>
          {improvement !== 0 && (
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
              improvement > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              <TrendingUp className={`w-4 h-4 ${improvement > 0 ? 'text-green-600' : 'text-red-600 rotate-180'}`} />
              <span className="text-sm font-medium">
                {improvement > 0 ? '+' : ''}{improvement.toFixed(1)}% from last test
              </span>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Score History */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Score History</h4>
            <div className="space-y-3">
              {tests.slice(0, 5).map((test, index) => (
                <div key={test.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900 capitalize">{test.domain}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(test.completedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-blue-600">{test.totalScore.toFixed(1)}%</p>
                    {index === 0 && <span className="text-xs text-green-600 font-medium">Latest</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Domain Distribution */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Test Distribution by Domain</h4>
            <div className="space-y-3">
              {Object.entries(domainCounts).map(([domain, count]) => (
                <div key={domain} className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 capitalize">{domain}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(count / tests.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600 w-8">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strengths and Weaknesses */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Strongest Areas */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
          <h3 className="text-xl font-semibold text-green-900 mb-6 flex items-center">
            <Star className="w-6 h-6 text-green-600 mr-3" />
            Your Strongest Areas
          </h3>
          <div className="space-y-4">
            {strongestAreas.map((area, index) => (
              <div key={area.section} className="flex items-center justify-between p-4 bg-white rounded-xl border border-green-200">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    index === 0 ? 'bg-green-600 text-white' : 
                    index === 1 ? 'bg-green-500 text-white' : 'bg-green-400 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900 capitalize">{area.section}</span>
                </div>
                <span className="font-bold text-green-600 text-lg">{area.average.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
          <h3 className="text-xl font-semibold text-orange-900 mb-6 flex items-center">
            <Target className="w-6 h-6 text-orange-600 mr-3" />
            Areas for Improvement
          </h3>
          <div className="space-y-4">
            {weakestAreas.map((area, index) => (
              <div key={area.section} className="flex items-center justify-between p-4 bg-white rounded-xl border border-orange-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-gray-900 capitalize">{area.section}</span>
                </div>
                <span className="font-bold text-orange-600 text-lg">{area.average.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Brain className="w-6 h-6 text-blue-600 mr-3" />
          Personalized Recommendations
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-600 mb-2">Focus Areas</h4>
            <p className="text-sm text-gray-700">
              Concentrate on improving your {weakestAreas[0]?.section} skills through targeted practice.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-600 mb-2">Leverage Strengths</h4>
            <p className="text-sm text-gray-700">
              Your {strongestAreas[0]?.section} skills are excellent. Consider careers that utilize this strength.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-600 mb-2">Next Steps</h4>
            <p className="text-sm text-gray-700">
              Take tests in different domains to explore more career options and build a comprehensive profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;