import React, { useState, useEffect } from 'react';
import { Question, AptitudeTest as AptitudeTestType } from '../types';
import { mockQuestions } from '../data/mockData';
import CareerRoadmap from '../components/CareerRoadmap';
import PersonalityTest from '../components/PersonalityTest';
import PersonalityResults from '../components/PersonalityResults';
import PerformanceDashboard from '../components/PerformanceDashboard';
import { Clock, CheckCircle, XCircle, Award, BarChart, Brain, Zap, Target, Stethoscope, Calculator, BookOpen, Scale, Microscope, ArrowRight } from 'lucide-react';

const AptitudeTest: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<'engineering' | 'medical' | 'commerce' | 'arts' | 'law' | 'science' | null>(null);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [testResult, setTestResult] = useState<AptitudeTestType | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [showPersonalityTest, setShowPersonalityTest] = useState(false);
  const [personalityResults, setPersonalityResults] = useState<any>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [userTests, setUserTests] = useState<AptitudeTestType[]>([]);

  const domainSections = {
    engineering: ['mathematics', 'physics', 'logical'],
    medical: ['biology', 'chemistry', 'physics'],
    commerce: ['economics', 'accounting', 'business'],
    arts: ['literature', 'history', 'geography'],
    law: ['legal', 'constitution', 'reasoning'],
    science: ['chemistry', 'biology', 'physics']
  };

  const domainIcons = {
    engineering: Zap,
    medical: Stethoscope,
    commerce: Calculator,
    arts: BookOpen,
    law: Scale,
    science: Microscope
  };

  const domainColors = {
    engineering: { bg: 'from-blue-500 to-blue-600', light: 'from-blue-50 to-blue-100' },
    medical: { bg: 'from-red-500 to-red-600', light: 'from-red-50 to-red-100' },
    commerce: { bg: 'from-green-500 to-green-600', light: 'from-green-50 to-green-100' },
    arts: { bg: 'from-purple-500 to-purple-600', light: 'from-purple-50 to-purple-100' },
    law: { bg: 'from-yellow-500 to-yellow-600', light: 'from-yellow-50 to-yellow-100' },
    science: { bg: 'from-teal-500 to-teal-600', light: 'from-teal-50 to-teal-100' }
  };

  const sectionQuestions = selectedDomain && currentSection 
    ? mockQuestions.filter(q => q.domain === selectedDomain && q.section === currentSection)
    : [];
  const currentQuestion = sectionQuestions[currentQuestionIndex];

  const sectionTimeLimit = 15 * 60; // 15 minutes per section

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTestStarted && timeLeft > 0 && !isTestCompleted) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTestStarted) {
      handleSectionComplete();
    }

    return () => clearInterval(interval);
  }, [isTestStarted, timeLeft, isTestCompleted]);

  const startSection = (section: string) => {
    setCurrentSection(section);
    setCurrentQuestionIndex(0);
    setTimeLeft(sectionTimeLimit);
    setIsTestStarted(true);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < sectionQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(answers[sectionQuestions[currentQuestionIndex + 1]?.id] ?? null);
    } else {
      handleSectionComplete();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(answers[sectionQuestions[currentQuestionIndex - 1]?.id] ?? null);
    }
  };

  const handleSectionComplete = () => {
    setIsTestStarted(false);
    
    if (!selectedDomain) return;
    
    const sections = domainSections[selectedDomain];
    const currentSectionIndex = sections.indexOf(currentSection!);
    
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSection(sections[currentSectionIndex + 1]);
    } else {
      completeTest();
    }
  };

  const completeTest = () => {
    if (!selectedDomain) return;

    const calculateSectionScore = (section: string) => {
      const sectionQuestions = mockQuestions.filter(q => q.domain === selectedDomain && q.section === section);
      let correctAnswers = 0;
      
      sectionQuestions.forEach(question => {
        if (answers[question.id] === question.correctAnswer) {
          correctAnswers++;
        }
      });
      
      return sectionQuestions.length > 0 ? (correctAnswers / sectionQuestions.length) * 100 : 0;
    };

    const sections = domainSections[selectedDomain];
    const sectionScores: { [key: string]: any } = {};
    let totalScore = 0;

    sections.forEach(section => {
      const score = calculateSectionScore(section);
      sectionScores[section] = {
        questions: mockQuestions.filter(q => q.domain === selectedDomain && q.section === section),
        score: score,
        timeSpent: sectionTimeLimit
      };
      totalScore += score;
    });

    totalScore = totalScore / sections.length;

    const result: AptitudeTestType = {
      id: Math.random().toString(36).substr(2, 9),
      studentId: 'current-user',
      domain: selectedDomain,
      sections: sectionScores,
      totalScore: totalScore,
      completedAt: new Date().toISOString()
    };

    setTestResult(result);
    setIsTestCompleted(true);
    setUserTests(prev => [result, ...prev]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Average';
    return 'Needs Improvement';
  };

  const handlePersonalityComplete = (results: any) => {
    setPersonalityResults(results);
    setShowPersonalityTest(false);
  };

  // Test completion screen
  if (isTestCompleted && testResult) {
    const sections = selectedDomain ? domainSections[selectedDomain] : [];
    const domainColor = selectedDomain ? domainColors[selectedDomain] : domainColors.engineering;

    return (
      <div className="max-w-4xl mx-auto animate-fadeInUp">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full transform translate-x-32 -translate-y-32 opacity-50" />
          
          <div className="text-center mb-8 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-custom">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInDown">
              {selectedDomain?.charAt(0).toUpperCase() + selectedDomain?.slice(1)} Test Completed!
            </h1>
            <p className="text-gray-600 text-lg animate-fadeInUp stagger-1">Here are your results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8 relative z-10">
            <div className={`bg-gradient-to-r ${domainColor.bg} text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 animate-fadeInLeft`}>
              <div className="flex items-center mb-6">
                <BarChart className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-semibold">Overall Score</h2>
              </div>
              <div className="text-5xl font-bold mb-4">{testResult.totalScore.toFixed(1)}%</div>
              <p className="text-blue-100 text-lg">{getScoreLabel(testResult.totalScore)}</p>
            </div>

            <div className="space-y-4 animate-fadeInRight">
              {sections.map((section, index) => {
                const sectionData = testResult.sections[section];
                if (!sectionData) return null;

                return (
                  <div key={section} className={`bg-gradient-to-r ${domainColor.light} rounded-2xl p-4 transform hover:scale-105 transition-all duration-300`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900 capitalize">{section}</h3>
                      <span className={`font-bold text-lg ${getScoreColor(sectionData.score)}`}>
                        {sectionData.score.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${domainColor.bg} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${sectionData.score}%`, animationDelay: `${index * 0.3}s` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center relative z-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowRoadmap(true)}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl font-medium hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 ripple"
              >
                View Career Roadmap
              </button>
              <button
                onClick={() => setShowPersonalityTest(true)}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 ripple"
              >
                Take Personality Test
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 ripple"
              >
                Take Another Test
              </button>
            </div>
          </div>
        </div>

        {/* Modals */}
        {showRoadmap && (
          <CareerRoadmap 
            testResult={testResult} 
            onClose={() => setShowRoadmap(false)} 
          />
        )}
      </div>
    );
  }

  // Active test screen
  if (isTestStarted && currentSection && currentQuestion && selectedDomain) {
    const domainColor = domainColors[selectedDomain];

    return (
      <div className="max-w-4xl mx-auto animate-fadeInUp">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <div className="animate-fadeInLeft">
              <h1 className="text-3xl font-bold text-gray-900 capitalize">
                {selectedDomain} - {currentSection} Section
              </h1>
              <p className="text-gray-600 text-lg">
                Question {currentQuestionIndex + 1} of {sectionQuestions.length}
              </p>
            </div>
            <div className={`flex items-center space-x-3 text-xl font-medium px-6 py-3 rounded-2xl animate-fadeInRight ${
              timeLeft < 300 ? 'text-red-600 bg-red-50 animate-pulse-custom' : 'text-blue-600 bg-blue-50'
            }`}>
              <Clock className="w-6 h-6" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
              <div 
                className={`bg-gradient-to-r ${domainColor.bg} h-3 rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${((currentQuestionIndex + 1) / sectionQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8 animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <label
                  key={index}
                  className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 shadow-lg scale-102'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  } animate-fadeInUp stagger-${index + 1}`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={index}
                    checked={selectedAnswer === index}
                    onChange={() => handleAnswer(index)}
                    className="sr-only"
                  />
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500 scale-110'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-3 h-3 bg-white rounded-full animate-scaleIn" />
                      )}
                    </div>
                    <span className="text-gray-900 text-lg">{option}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              Previous
            </button>
            <button
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 bg-gradient-to-r ${domainColor.bg} text-white rounded-2xl font-medium hover:shadow-xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 ripple`}
            >
              {currentQuestionIndex === sectionQuestions.length - 1 ? 'Complete Section' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Section selection screen
  if (currentSection && !isTestStarted && selectedDomain) {
    const domainColor = domainColors[selectedDomain];

    return (
      <div className="max-w-2xl mx-auto animate-scaleIn">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50" />
          
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize animate-fadeInDown">
              {currentSection} Section
            </h1>
            <p className="text-gray-600 text-lg animate-fadeInUp stagger-1">
              Ready to start the {currentSection} section? You'll have 15 minutes to complete {sectionQuestions.length} questions.
            </p>
          </div>

          <div className={`bg-gradient-to-r ${domainColor.light} rounded-2xl p-8 mb-8 relative z-10 animate-fadeInUp stagger-2`}>
            <h3 className="font-semibold text-blue-900 mb-4 text-lg">Instructions:</h3>
            <ul className="text-blue-800 space-y-2">
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                You have 15 minutes to complete this section
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                You can navigate between questions using Previous/Next buttons
              </li>
              <li className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Make sure to answer all questions before time runs out
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                Once you complete this section, you'll move to the next one
              </li>
            </ul>
          </div>

          <div className="flex justify-center space-x-6 relative z-10 animate-fadeInUp stagger-3">
            <button
              onClick={() => setCurrentSection(null)}
              className="px-8 py-3 bg-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
            >
              Back
            </button>
            <button
              onClick={() => startSection(currentSection)}
              className={`px-8 py-4 bg-gradient-to-r ${domainColor.bg} text-white rounded-2xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 animate-glow ripple`}
            >
              Start Section
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Domain selection screen
  if (!selectedDomain) {
    const domains = [
      { key: 'engineering', name: 'Engineering', description: 'Mathematics, Physics, and Logical Reasoning' },
      { key: 'medical', name: 'Medical', description: 'Biology, Chemistry, and Physics' },
      { key: 'commerce', name: 'Commerce', description: 'Economics, Accounting, and Business Studies' },
      { key: 'arts', name: 'Arts & Humanities', description: 'Literature, History, and Geography' },
      { key: 'law', name: 'Law', description: 'Legal Studies, Constitution, and Reasoning' },
      { key: 'science', name: 'Pure Sciences', description: 'Chemistry, Biology, and Physics' }
    ];

    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fadeInDown">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Choose Your Domain</h1>
          <p className="text-xl text-gray-600">
            Select your field of interest to take a specialized aptitude test
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {domains.map((domain, index) => {
            const Icon = domainIcons[domain.key as keyof typeof domainIcons];
            const colors = domainColors[domain.key as keyof typeof domainColors];
            
            return (
              <div 
                key={domain.key}
                className={`group bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift animate-fadeInUp stagger-${index + 1} cursor-pointer`}
                onClick={() => setSelectedDomain(domain.key as any)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{domain.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {domain.description}
                </p>
                <div className="text-sm text-gray-500 mb-6 space-y-1">
                  <p>• 3 Sections</p>
                  <p>• 15 Minutes per section</p>
                  <p>• Multiple Choice Questions</p>
                </div>
                <button className={`w-full bg-gradient-to-r ${colors.bg} text-white py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ripple`}>
                  Start {domain.name} Test
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200 animate-fadeInUp stagger-4">
          <h3 className="font-semibold text-yellow-900 mb-4 text-lg flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Important Notes:
          </h3>
          <ul className="text-yellow-800 space-y-2">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Each domain has specialized questions relevant to that field
            </li>
            <li className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Each section has a 15-minute time limit
            </li>
            <li className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Complete all sections to get your comprehensive score
            </li>
            <li className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Your results will help match you with relevant colleges
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // Section selection for chosen domain
  if (selectedDomain && !currentSection) {
    const sections = domainSections[selectedDomain];
    const domainColor = domainColors[selectedDomain];
    const DomainIcon = domainIcons[selectedDomain];

    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fadeInDown">
          <div className={`mx-auto w-20 h-20 bg-gradient-to-r ${domainColor.bg} rounded-full flex items-center justify-center mb-6 animate-bounce-custom`}>
            <DomainIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
            {selectedDomain} Aptitude Test
          </h1>
          <p className="text-xl text-gray-600">
            Complete all {sections.length} sections to get your comprehensive score
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sections.map((section, index) => (
            <div 
              key={section}
              className={`group bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift animate-fadeInUp stagger-${index + 1} cursor-pointer`}
              onClick={() => setCurrentSection(section)}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${domainColor.bg} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">{section}</h3>
              <div className="text-sm text-gray-500 mb-6 space-y-1">
                <p>• {mockQuestions.filter(q => q.domain === selectedDomain && q.section === section).length} Questions</p>
                <p>• 15 Minutes</p>
                <p>• Multiple Choice</p>
              </div>
              <button className={`w-full bg-gradient-to-r ${domainColor.bg} text-white py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ripple`}>
                Start {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => setShowDashboard(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View Performance Dashboard
            </button>
          </div>
          <button
            onClick={() => setSelectedDomain(null)}
            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
          >
            Choose Different Domain
          </button>
        </div>
      </div>
    );
  }

  // Render modals
  if (showPersonalityTest) {
    return (
      <PersonalityTest 
        onComplete={handlePersonalityComplete}
        onClose={() => setShowPersonalityTest(false)}
      />
    );
  }

  if (personalityResults) {
    return (
      <PersonalityResults 
        results={personalityResults}
        onClose={() => setPersonalityResults(null)}
      />
    );
  }

  if (showDashboard) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Performance Dashboard</h1>
          <button
            onClick={() => setShowDashboard(false)}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
          >
            Back to Tests
          </button>
        </div>
        <PerformanceDashboard 
          tests={userTests}
          onClose={() => setShowDashboard(false)}
        />
      </div>
    );
  }

  return null;
};

export default AptitudeTest;