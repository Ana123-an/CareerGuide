import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CareerRoadmapSection from '../components/CareerRoadmapSection';
import { Zap, Stethoscope, Calculator, BookOpen, Scale, Microscope, ArrowLeft } from 'lucide-react';

const CareerRoadmap: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const domains = [
    { key: 'engineering', name: 'Engineering', icon: Zap, color: 'blue', description: 'Technology, Innovation, and Problem Solving' },
    { key: 'medical', name: 'Medical & Healthcare', icon: Stethoscope, color: 'red', description: 'Healthcare, Medicine, and Life Sciences' },
    { key: 'commerce', name: 'Commerce & Finance', icon: Calculator, color: 'green', description: 'Business, Finance, and Economics' },
    { key: 'arts', name: 'Arts & Humanities', icon: BookOpen, color: 'purple', description: 'Literature, History, and Creative Arts' },
    { key: 'law', name: 'Law & Legal Studies', icon: Scale, color: 'yellow', description: 'Legal Practice, Justice, and Governance' },
    { key: 'science', name: 'Pure Sciences', icon: Microscope, color: 'teal', description: 'Research, Discovery, and Scientific Innovation' }
  ];

  if (selectedDomain) {
    return (
      <div>
        <div className="mb-6">
          <button
            onClick={() => setSelectedDomain(null)}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Domains</span>
          </button>
        </div>
        <CareerRoadmapSection domain={selectedDomain} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fadeInDown">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Career Roadmap</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore comprehensive career paths across different domains. Discover the skills, education, 
          and opportunities that await you in your chosen field.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <div
              key={domain.key}
              onClick={() => setSelectedDomain(domain.key)}
              className={`group bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover-lift animate-fadeInUp stagger-${index + 1} cursor-pointer`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-${domain.color}-600 to-${domain.color}-700 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {domain.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {domain.description}
              </p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="font-medium">Explore Career Paths</span>
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 animate-fadeInUp stagger-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Use Our Career Roadmap?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Information</h3>
            <p className="text-gray-600">Detailed insights into skills, education, and career progression for each path.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Salary Insights</h3>
            <p className="text-gray-600">Real salary ranges and growth potential for different career levels.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Actionable Steps</h3>
            <p className="text-gray-600">Clear next steps and practical advice to start your career journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;