import React, { useState } from 'react';
import { Brain, CheckCircle, ArrowRight, BarChart3, Users, Lightbulb, Target } from 'lucide-react';

interface PersonalityQuestion {
  id: string;
  question: string;
  options: { text: string; traits: { [key: string]: number } }[];
}

interface PersonalityTestProps {
  onComplete: (results: PersonalityResults) => void;
  onClose: () => void;
}

interface PersonalityResults {
  traits: { [key: string]: number };
  primaryType: string;
  description: string;
  careerSuggestions: string[];
  workEnvironment: string[];
}

const PersonalityTest: React.FC<PersonalityTestProps> = ({ onComplete, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions: PersonalityQuestion[] = [
    {
      id: '1',
      question: 'In a group project, you typically:',
      options: [
        { text: 'Take charge and organize the team', traits: { extroversion: 3, leadership: 2 } },
        { text: 'Contribute ideas but let others lead', traits: { introversion: 1, creativity: 2 } },
        { text: 'Focus on detailed research and analysis', traits: { analytical: 3, introversion: 2 } },
        { text: 'Ensure everyone gets along and participates', traits: { empathy: 3, extroversion: 1 } }
      ]
    },
    {
      id: '2',
      question: 'When solving problems, you prefer to:',
      options: [
        { text: 'Use proven methods and systematic approaches', traits: { analytical: 3, structured: 2 } },
        { text: 'Brainstorm creative and innovative solutions', traits: { creativity: 3, openness: 2 } },
        { text: 'Consider how it affects people involved', traits: { empathy: 3, social: 2 } },
        { text: 'Find the most efficient and practical solution', traits: { practical: 3, analytical: 1 } }
      ]
    },
    {
      id: '3',
      question: 'Your ideal work environment is:',
      options: [
        { text: 'Quiet and organized with minimal distractions', traits: { introversion: 3, structured: 2 } },
        { text: 'Dynamic and collaborative with lots of interaction', traits: { extroversion: 3, social: 2 } },
        { text: 'Flexible and creative with room for innovation', traits: { creativity: 3, openness: 2 } },
        { text: 'Results-oriented with clear goals and metrics', traits: { analytical: 2, practical: 3 } }
      ]
    },
    {
      id: '4',
      question: 'When learning something new, you:',
      options: [
        { text: 'Read extensively and research thoroughly', traits: { analytical: 3, introversion: 1 } },
        { text: 'Learn by doing and experimenting', traits: { practical: 3, openness: 2 } },
        { text: 'Discuss and learn from others', traits: { social: 3, extroversion: 2 } },
        { text: 'Find creative ways to apply the knowledge', traits: { creativity: 3, openness: 1 } }
      ]
    },
    {
      id: '5',
      question: 'In your free time, you enjoy:',
      options: [
        { text: 'Reading, writing, or pursuing solo hobbies', traits: { introversion: 3, creativity: 1 } },
        { text: 'Socializing and meeting new people', traits: { extroversion: 3, social: 2 } },
        { text: 'Building, creating, or hands-on projects', traits: { practical: 3, creativity: 2 } },
        { text: 'Analyzing trends, data, or complex topics', traits: { analytical: 3, introversion: 1 } }
      ]
    },
    {
      id: '6',
      question: 'When making decisions, you primarily consider:',
      options: [
        { text: 'Logical analysis and factual evidence', traits: { analytical: 3, structured: 1 } },
        { text: 'Potential impact on people and relationships', traits: { empathy: 3, social: 2 } },
        { text: 'Creative possibilities and future potential', traits: { creativity: 3, openness: 2 } },
        { text: 'Practical outcomes and efficiency', traits: { practical: 3, structured: 2 } }
      ]
    },
    {
      id: '7',
      question: 'Your communication style is typically:',
      options: [
        { text: 'Direct and to the point', traits: { practical: 2, leadership: 2 } },
        { text: 'Thoughtful and well-researched', traits: { analytical: 3, introversion: 1 } },
        { text: 'Enthusiastic and engaging', traits: { extroversion: 3, social: 1 } },
        { text: 'Empathetic and considerate', traits: { empathy: 3, social: 2 } }
      ]
    },
    {
      id: '8',
      question: 'You feel most energized when:',
      options: [
        { text: 'Working independently on challenging problems', traits: { introversion: 3, analytical: 2 } },
        { text: 'Collaborating with a diverse team', traits: { extroversion: 3, social: 2 } },
        { text: 'Creating something new and original', traits: { creativity: 3, openness: 2 } },
        { text: 'Achieving concrete, measurable results', traits: { practical: 3, structured: 1 } }
      ]
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: optionIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(answers[questions[currentQuestion + 1]?.id] ?? null);
    } else {
      calculateResults();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(answers[questions[currentQuestion - 1]?.id] ?? null);
    }
  };

  const calculateResults = () => {
    const traits: { [key: string]: number } = {
      extroversion: 0,
      introversion: 0,
      analytical: 0,
      creativity: 0,
      practical: 0,
      empathy: 0,
      social: 0,
      leadership: 0,
      structured: 0,
      openness: 0
    };

    // Calculate trait scores
    questions.forEach((question, index) => {
      const answerIndex = answers[question.id];
      if (answerIndex !== undefined) {
        const selectedOption = question.options[answerIndex];
        Object.entries(selectedOption.traits).forEach(([trait, score]) => {
          traits[trait] += score;
        });
      }
    });

    // Determine primary personality type
    let primaryType = '';
    let description = '';
    let careerSuggestions: string[] = [];
    let workEnvironment: string[] = [];

    if (traits.analytical >= 15) {
      primaryType = 'Analytical Thinker';
      description = 'You excel at logical reasoning, data analysis, and systematic problem-solving. You prefer structured environments and evidence-based decisions.';
      careerSuggestions = ['Data Scientist', 'Research Analyst', 'Software Engineer', 'Financial Analyst', 'Scientist', 'Consultant'];
      workEnvironment = ['Quiet workspace', 'Access to data and tools', 'Clear objectives', 'Minimal interruptions'];
    } else if (traits.creativity >= 15) {
      primaryType = 'Creative Innovator';
      description = 'You thrive on innovation, artistic expression, and finding unique solutions. You prefer flexible environments that encourage experimentation.';
      careerSuggestions = ['Graphic Designer', 'Marketing Creative', 'Architect', 'Writer', 'Product Designer', 'Entrepreneur'];
      workEnvironment = ['Flexible schedule', 'Creative freedom', 'Collaborative spaces', 'Access to creative tools'];
    } else if (traits.social >= 12 || traits.empathy >= 12) {
      primaryType = 'People-Oriented Leader';
      description = 'You excel at understanding and working with people. You prefer collaborative environments and roles that involve helping others.';
      careerSuggestions = ['Human Resources', 'Teacher', 'Counselor', 'Sales Manager', 'Social Worker', 'Team Lead'];
      workEnvironment = ['Team collaboration', 'People interaction', 'Mentoring opportunities', 'Social impact'];
    } else if (traits.practical >= 15) {
      primaryType = 'Practical Problem Solver';
      description = 'You focus on efficient, real-world solutions and tangible results. You prefer hands-on work and clear, achievable goals.';
      careerSuggestions = ['Project Manager', 'Operations Manager', 'Engineer', 'Business Analyst', 'Entrepreneur', 'Consultant'];
      workEnvironment = ['Goal-oriented culture', 'Hands-on projects', 'Clear metrics', 'Results-focused'];
    } else {
      primaryType = 'Balanced Contributor';
      description = 'You have a well-rounded personality with strengths across multiple areas. You can adapt to various roles and environments.';
      careerSuggestions = ['Management Trainee', 'Business Development', 'Consultant', 'Product Manager', 'Coordinator', 'Analyst'];
      workEnvironment = ['Varied responsibilities', 'Cross-functional teams', 'Learning opportunities', 'Balanced workload'];
    }

    const results: PersonalityResults = {
      traits,
      primaryType,
      description,
      careerSuggestions,
      workEnvironment
    };

    onComplete(results);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Personality Assessment</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-300"
            >
              ✕
            </button>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-purple-100 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                    selectedAnswer === index
                      ? 'border-purple-500 bg-purple-50 shadow-lg scale-102'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={index}
                    checked={selectedAnswer === index}
                    onChange={() => handleAnswer(index)}
                    className="sr-only"
                  />
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
                      selectedAnswer === index
                        ? 'border-purple-500 bg-purple-500 scale-110'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-gray-900">{option.text}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              Previous
            </button>
            <button
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              <span>{currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;