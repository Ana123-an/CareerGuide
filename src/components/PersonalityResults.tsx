import React from 'react';
import { Brain, Target, Users, Briefcase, X, BarChart3, Star, TrendingUp } from 'lucide-react';

interface PersonalityResults {
  traits: { [key: string]: number };
  primaryType: string;
  description: string;
  careerSuggestions: string[];
  workEnvironment: string[];
}

interface PersonalityResultsProps {
  results: PersonalityResults;
  onClose: () => void;
}

const PersonalityResults: React.FC<PersonalityResultsProps> = ({ results, onClose }) => {
  const getTraitColor = (value: number) => {
    if (value >= 15) return 'bg-green-500';
    if (value >= 10) return 'bg-yellow-500';
    if (value >= 5) return 'bg-orange-500';
    return 'bg-gray-300';
  };

  const getTraitLabel = (trait: string) => {
    const labels: { [key: string]: string } = {
      extroversion: 'Extroversion',
      introversion: 'Introversion',
      analytical: 'Analytical',
      creativity: 'Creativity',
      practical: 'Practical',
      empathy: 'Empathy',
      social: 'Social',
      leadership: 'Leadership',
      structured: 'Structured',
      openness: 'Openness'
    };
    return labels[trait] || trait;
  };

  const topTraits = Object.entries(results.traits)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Your Personality Profile</h2>
              <p className="text-purple-100 text-lg">{results.primaryType}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Personality Description */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Your Personality Type</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{results.description}</p>
              </div>

              {/* Top Traits */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Your Strongest Traits</h3>
                </div>
                <div className="space-y-3">
                  {topTraits.map(([trait, value]) => (
                    <div key={trait} className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{getTraitLabel(trait)}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${getTraitColor(value)}`}
                            style={{ width: `${Math.min((value / 20) * 100, 100)}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600 w-8">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Suggestions */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Recommended Careers</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {results.careerSuggestions.map((career, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-3 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{career}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Environment */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Ideal Work Environment</h3>
                </div>
                <div className="space-y-2">
                  {results.workEnvironment.map((env, index) => (
                    <div key={index} className="flex items-center">
                      <Target className="w-4 h-4 text-orange-600 mr-3" />
                      <span className="text-gray-700">{env}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
              Next Steps for Your Career Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-600 mb-2">Explore Colleges</h4>
                <p className="text-sm text-gray-700">
                  Look for programs that align with your personality type and career interests.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-green-200">
                <h4 className="font-semibold text-green-600 mb-2">Develop Skills</h4>
                <p className="text-sm text-gray-700">
                  Focus on building skills that complement your natural strengths and traits.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-purple-200">
                <h4 className="font-semibold text-purple-600 mb-2">Gain Experience</h4>
                <p className="text-sm text-gray-700">
                  Seek internships and projects in your recommended career areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityResults;