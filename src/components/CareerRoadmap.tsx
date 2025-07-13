import React, { useState } from 'react';
import { AptitudeTest } from '../types';
import { BookOpen, Target, Briefcase, DollarSign, Clock, Star, TrendingUp, Award, Users, MapPin } from 'lucide-react';

interface CareerRoadmapProps {
  testResult: AptitudeTest;
  onClose: () => void;
}

const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ testResult, onClose }) => {
  const [activeTab, setActiveTab] = useState('courses');

  const getDomainRoadmap = (domain: string) => {
    const roadmaps = {
      engineering: {
        courses: [
          { name: 'Data Structures & Algorithms', type: 'online', duration: '3 months', provider: 'Coursera', cost: 'Free' },
          { name: 'Full Stack Web Development', type: 'online', duration: '6 months', provider: 'freeCodeCamp', cost: 'Free' },
          { name: 'Machine Learning Specialization', type: 'online', duration: '4 months', provider: 'Stanford Online', cost: '₹4,000/month' },
          { name: 'System Design', type: 'online', duration: '2 months', provider: 'Educative', cost: '₹2,500/month' }
        ],
        skills: [
          'Programming Languages (Python, Java, JavaScript)',
          'Database Management (SQL, NoSQL)',
          'Cloud Computing (AWS, Azure)',
          'Version Control (Git)',
          'Problem Solving & Analytical Thinking',
          'Software Architecture'
        ],
        internships: [
          { company: 'Google', role: 'Software Engineering Intern', duration: '3 months', stipend: '₹80,000/month' },
          { company: 'Microsoft', role: 'Product Development Intern', duration: '6 months', stipend: '₹75,000/month' },
          { company: 'Startups', role: 'Full Stack Developer', duration: '3-6 months', stipend: '₹25,000-50,000/month' },
          { company: 'TCS/Infosys', role: 'Trainee Developer', duration: '6 months', stipend: '₹15,000-25,000/month' }
        ],
        careers: [
          { role: 'Software Engineer', experience: 'Entry Level', salary: '₹6-12 LPA', growth: 'High' },
          { role: 'Data Scientist', experience: 'Mid Level', salary: '₹12-25 LPA', growth: 'Very High' },
          { role: 'Product Manager', experience: 'Senior Level', salary: '₹25-50 LPA', growth: 'High' },
          { role: 'Tech Lead/Architect', experience: 'Senior Level', salary: '₹30-60 LPA', growth: 'High' }
        ]
      },
      medical: {
        courses: [
          { name: 'Basic Life Support (BLS)', type: 'offline', duration: '1 day', provider: 'Red Cross', cost: '₹2,000' },
          { name: 'Medical Terminology', type: 'online', duration: '2 months', provider: 'Coursera', cost: 'Free' },
          { name: 'Anatomy & Physiology', type: 'online', duration: '4 months', provider: 'Khan Academy', cost: 'Free' },
          { name: 'Clinical Research', type: 'online', duration: '3 months', provider: 'IIPH', cost: '₹15,000' }
        ],
        skills: [
          'Medical Knowledge & Terminology',
          'Patient Care & Communication',
          'Critical Thinking & Decision Making',
          'Attention to Detail',
          'Empathy & Emotional Intelligence',
          'Research & Analysis'
        ],
        internships: [
          { company: 'AIIMS', role: 'Medical Intern', duration: '12 months', stipend: '₹25,000/month' },
          { company: 'Apollo Hospitals', role: 'Clinical Intern', duration: '6 months', stipend: '₹20,000/month' },
          { company: 'Pharma Companies', role: 'Research Intern', duration: '3-6 months', stipend: '₹15,000-30,000/month' },
          { company: 'NGOs', role: 'Community Health Intern', duration: '3 months', stipend: '₹10,000/month' }
        ],
        careers: [
          { role: 'Junior Doctor', experience: 'Entry Level', salary: '₹8-15 LPA', growth: 'High' },
          { role: 'Specialist Doctor', experience: 'Mid Level', salary: '₹20-40 LPA', growth: 'Very High' },
          { role: 'Consultant', experience: 'Senior Level', salary: '₹50-100 LPA', growth: 'High' },
          { role: 'Medical Director', experience: 'Senior Level', salary: '₹80-150 LPA', growth: 'High' }
        ]
      },
      commerce: {
        courses: [
          { name: 'Financial Modeling', type: 'online', duration: '2 months', provider: 'Wharton Online', cost: '₹8,000' },
          { name: 'Digital Marketing', type: 'online', duration: '3 months', provider: 'Google', cost: 'Free' },
          { name: 'Data Analytics', type: 'online', duration: '4 months', provider: 'IBM', cost: '₹12,000' },
          { name: 'CFA Level 1', type: 'online', duration: '6 months', provider: 'CFA Institute', cost: '₹80,000' }
        ],
        skills: [
          'Financial Analysis & Modeling',
          'Market Research & Analysis',
          'Communication & Presentation',
          'Excel & Data Analysis Tools',
          'Business Strategy',
          'Customer Relationship Management'
        ],
        internships: [
          { company: 'Goldman Sachs', role: 'Investment Banking Intern', duration: '3 months', stipend: '₹60,000/month' },
          { company: 'Deloitte', role: 'Consulting Intern', duration: '6 months', stipend: '₹40,000/month' },
          { company: 'Startups', role: 'Business Development Intern', duration: '3-6 months', stipend: '₹20,000-35,000/month' },
          { company: 'Banks', role: 'Credit Analysis Intern', duration: '6 months', stipend: '₹15,000-25,000/month' }
        ],
        careers: [
          { role: 'Financial Analyst', experience: 'Entry Level', salary: '₹5-10 LPA', growth: 'High' },
          { role: 'Investment Banker', experience: 'Mid Level', salary: '₹15-30 LPA', growth: 'Very High' },
          { role: 'Finance Manager', experience: 'Senior Level', salary: '₹25-45 LPA', growth: 'High' },
          { role: 'CFO', experience: 'Senior Level', salary: '₹50-100 LPA', growth: 'High' }
        ]
      }
    };

    return roadmaps[domain as keyof typeof roadmaps] || roadmaps.engineering;
  };

  const roadmap = getDomainRoadmap(testResult.domain);

  const tabs = [
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'skills', label: 'Skills', icon: Target },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'careers', label: 'Career Paths', icon: TrendingUp }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Your Personalized Career Roadmap</h2>
              <p className="text-blue-100 text-lg capitalize">
                Based on your {testResult.domain} aptitude test results
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-300"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex border-b">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Courses</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {roadmap.courses.map((course, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-gray-900 text-lg">{course.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        course.type === 'online' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {course.type}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        <span>Provider: {course.provider}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>Cost: {course.cost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills to Develop</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {roadmap.skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'internships' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Internship Opportunities</h3>
              <div className="space-y-4">
                {roadmap.internships.map((internship, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{internship.role}</h4>
                        <p className="text-gray-600">{internship.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600 text-lg">{internship.stipend}</p>
                        <p className="text-sm text-gray-600">{internship.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'careers' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Progression Path</h3>
              <div className="space-y-4">
                {roadmap.careers.map((career, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{career.role}</h4>
                        <p className="text-gray-600">{career.experience}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-purple-600 text-lg">{career.salary}</p>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-sm text-green-600">{career.growth} Growth</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;