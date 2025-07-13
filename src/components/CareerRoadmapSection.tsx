import React, { useState } from 'react';
import { BookOpen, Target, Briefcase, TrendingUp, MapPin, Clock, DollarSign, Star, Users, Award, ChevronRight, ArrowRight } from 'lucide-react';

interface CareerPath {
  title: string;
  description: string;
  skills: string[];
  education: string[];
  experience: string;
  salary: string;
  growth: string;
  companies: string[];
}

interface CareerRoadmapSectionProps {
  domain: string;
}

const CareerRoadmapSection: React.FC<CareerRoadmapSectionProps> = ({ domain }) => {
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);

  const careerPaths: { [key: string]: CareerPath[] } = {
    engineering: [
      {
        title: 'Software Engineer',
        description: 'Design, develop, and maintain software applications and systems.',
        skills: ['Programming Languages', 'Data Structures', 'Algorithms', 'System Design', 'Database Management'],
        education: ['B.Tech/B.E. in Computer Science', 'Online Coding Bootcamps', 'Certification Courses'],
        experience: 'Entry Level: 0-2 years',
        salary: '₹6-15 LPA',
        growth: 'High - Can become Tech Lead, Architect, or CTO',
        companies: ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Startups']
      },
      {
        title: 'Data Scientist',
        description: 'Analyze complex data to help organizations make informed decisions.',
        skills: ['Python/R', 'Machine Learning', 'Statistics', 'Data Visualization', 'SQL'],
        education: ['B.Tech + Data Science Certification', 'M.Tech in Data Science', 'Online Courses'],
        experience: 'Entry Level: 1-3 years',
        salary: '₹8-25 LPA',
        growth: 'Very High - Lead Data Scientist, Chief Data Officer',
        companies: ['Netflix', 'Uber', 'Flipkart', 'Analytics Companies', 'Consulting Firms']
      },
      {
        title: 'Mechanical Engineer',
        description: 'Design and develop mechanical systems, machines, and manufacturing processes.',
        skills: ['CAD Software', 'Thermodynamics', 'Manufacturing Processes', 'Project Management'],
        education: ['B.Tech/B.E. in Mechanical Engineering', 'Specialized Certifications'],
        experience: 'Entry Level: 0-2 years',
        salary: '₹4-12 LPA',
        growth: 'High - Design Engineer, Project Manager, Plant Head',
        companies: ['Tata Motors', 'Mahindra', 'L&T', 'Bosch', 'Manufacturing Companies']
      },
      {
        title: 'Civil Engineer',
        description: 'Plan, design, and oversee construction of infrastructure projects.',
        skills: ['Structural Design', 'Project Management', 'AutoCAD', 'Construction Management'],
        education: ['B.Tech/B.E. in Civil Engineering', 'Project Management Certification'],
        experience: 'Entry Level: 0-2 years',
        salary: '₹3-10 LPA',
        growth: 'High - Project Manager, Consultant, Government Jobs',
        companies: ['L&T', 'DLF', 'Government Departments', 'Construction Companies']
      },
      {
        title: 'Electronics Engineer',
        description: 'Design and develop electronic systems, circuits, and devices.',
        skills: ['Circuit Design', 'Embedded Systems', 'VLSI', 'Signal Processing'],
        education: ['B.Tech/B.E. in Electronics', 'Embedded Systems Courses'],
        experience: 'Entry Level: 0-2 years',
        salary: '₹5-18 LPA',
        growth: 'High - Design Engineer, R&D Head, Product Manager',
        companies: ['Intel', 'Qualcomm', 'Samsung', 'ISRO', 'Electronics Companies']
      },
      {
        title: 'Product Manager',
        description: 'Lead product development from conception to launch and beyond.',
        skills: ['Product Strategy', 'Market Research', 'Analytics', 'Communication', 'Technical Understanding'],
        education: ['Engineering Degree + MBA', 'Product Management Courses'],
        experience: 'Mid Level: 3-5 years',
        salary: '₹15-40 LPA',
        growth: 'Very High - VP Product, Chief Product Officer',
        companies: ['Google', 'Facebook', 'Amazon', 'Flipkart', 'Tech Startups']
      }
    ],
    medical: [
      {
        title: 'General Physician',
        description: 'Provide primary healthcare and treat common medical conditions.',
        skills: ['Clinical Diagnosis', 'Patient Care', 'Medical Knowledge', 'Communication'],
        education: ['MBBS', 'MD in General Medicine', 'Continuous Medical Education'],
        experience: 'Entry Level: After MBBS + Internship',
        salary: '₹8-20 LPA',
        growth: 'High - Specialist, Consultant, Hospital Administrator',
        companies: ['Hospitals', 'Clinics', 'Government Health Services', 'Private Practice']
      },
      {
        title: 'Surgeon',
        description: 'Perform surgical procedures to treat diseases, injuries, and deformities.',
        skills: ['Surgical Techniques', 'Precision', 'Decision Making', 'Stamina'],
        education: ['MBBS + MS/MCh', 'Surgical Residency', 'Fellowship Programs'],
        experience: 'Specialist Level: 8-10 years total training',
        salary: '₹20-80 LPA',
        growth: 'Very High - Senior Consultant, Department Head',
        companies: ['Multi-specialty Hospitals', 'Surgical Centers', 'Private Practice']
      },
      {
        title: 'Pharmacist',
        description: 'Dispense medications and provide pharmaceutical care to patients.',
        skills: ['Drug Knowledge', 'Patient Counseling', 'Pharmacy Management', 'Regulatory Compliance'],
        education: ['B.Pharm/D.Pharm', 'M.Pharm for specialization'],
        experience: 'Entry Level: After graduation',
        salary: '₹3-12 LPA',
        growth: 'High - Hospital Pharmacist, Pharmaceutical Industry, Drug Inspector',
        companies: ['Hospitals', 'Retail Pharmacies', 'Pharmaceutical Companies', 'Government']
      },
      {
        title: 'Medical Research Scientist',
        description: 'Conduct research to develop new treatments and medical technologies.',
        skills: ['Research Methodology', 'Data Analysis', 'Laboratory Techniques', 'Scientific Writing'],
        education: ['MBBS/B.Sc + M.Sc/PhD', 'Research Experience'],
        experience: 'Research Level: PhD + Postdoc',
        salary: '₹6-25 LPA',
        growth: 'High - Principal Investigator, Research Director',
        companies: ['Pharmaceutical Companies', 'Research Institutes', 'Universities', 'Government Labs']
      },
      {
        title: 'Physiotherapist',
        description: 'Help patients recover from injuries and improve physical function.',
        skills: ['Anatomy Knowledge', 'Therapeutic Techniques', 'Patient Assessment', 'Rehabilitation'],
        education: ['BPT (Bachelor of Physiotherapy)', 'MPT for specialization'],
        experience: 'Entry Level: After BPT',
        salary: '₹3-15 LPA',
        growth: 'High - Senior Physiotherapist, Clinic Owner, Sports Physiotherapist',
        companies: ['Hospitals', 'Rehabilitation Centers', 'Sports Teams', 'Private Practice']
      },
      {
        title: 'Healthcare Administrator',
        description: 'Manage healthcare facilities and coordinate medical services.',
        skills: ['Healthcare Management', 'Finance', 'Operations', 'Leadership', 'Regulatory Knowledge'],
        education: ['Medical Degree + MBA/MHA', 'Healthcare Management Courses'],
        experience: 'Mid Level: 3-5 years in healthcare',
        salary: '₹8-30 LPA',
        growth: 'Very High - Hospital CEO, Healthcare Consultant',
        companies: ['Hospitals', 'Healthcare Chains', 'Insurance Companies', 'Government Health Departments']
      }
    ],
    commerce: [
      {
        title: 'Chartered Accountant',
        description: 'Provide accounting, auditing, taxation, and financial advisory services.',
        skills: ['Accounting', 'Taxation', 'Auditing', 'Financial Analysis', 'Regulatory Compliance'],
        education: ['B.Com + CA Course', 'Articleship Training'],
        experience: 'Professional Level: 3-5 years including training',
        salary: '₹8-50 LPA',
        growth: 'Very High - Partner in CA firm, CFO, Financial Consultant',
        companies: ['CA Firms', 'Corporations', 'Banks', 'Government', 'Consulting Firms']
      },
      {
        title: 'Investment Banker',
        description: 'Help companies and governments raise capital and provide financial advisory.',
        skills: ['Financial Modeling', 'Valuation', 'Market Analysis', 'Communication', 'Excel/PowerPoint'],
        education: ['B.Com/BBA + MBA Finance', 'CFA Certification'],
        experience: 'Entry Level: MBA graduates',
        salary: '₹12-40 LPA',
        growth: 'Very High - VP, Managing Director, Fund Manager',
        companies: ['Goldman Sachs', 'Morgan Stanley', 'JP Morgan', 'Indian Investment Banks']
      },
      {
        title: 'Digital Marketing Manager',
        description: 'Develop and execute online marketing strategies to promote products/services.',
        skills: ['SEO/SEM', 'Social Media Marketing', 'Content Marketing', 'Analytics', 'Campaign Management'],
        education: ['Any Graduate + Digital Marketing Courses', 'MBA Marketing'],
        experience: 'Entry Level: 0-2 years',
        salary: '₹4-20 LPA',
        growth: 'High - Marketing Director, Chief Marketing Officer',
        companies: ['E-commerce Companies', 'Digital Agencies', 'Startups', 'Corporate Marketing Teams']
      },
      {
        title: 'Financial Analyst',
        description: 'Analyze financial data to help organizations make investment decisions.',
        skills: ['Financial Analysis', 'Excel', 'Financial Modeling', 'Research', 'Presentation'],
        education: ['B.Com/BBA Finance', 'CFA/FRM Certification'],
        experience: 'Entry Level: Fresh graduates',
        salary: '₹5-18 LPA',
        growth: 'High - Senior Analyst, Portfolio Manager, Research Head',
        companies: ['Banks', 'Mutual Funds', 'Insurance Companies', 'Corporate Finance Teams']
      },
      {
        title: 'Business Analyst',
        description: 'Analyze business processes and recommend improvements for efficiency.',
        skills: ['Data Analysis', 'Process Mapping', 'Requirements Gathering', 'SQL', 'Business Intelligence'],
        education: ['Any Graduate + Analytics Courses', 'MBA'],
        experience: 'Entry Level: 0-2 years',
        salary: '₹6-22 LPA',
        growth: 'High - Senior Business Analyst, Product Manager, Consultant',
        companies: ['Consulting Firms', 'IT Companies', 'Banks', 'E-commerce', 'Startups']
      },
      {
        title: 'Entrepreneur',
        description: 'Start and run your own business venture.',
        skills: ['Leadership', 'Innovation', 'Risk Management', 'Networking', 'Financial Management'],
        education: ['Any Graduate + Business Courses', 'MBA (optional)', 'Industry Experience'],
        experience: 'Variable: Can start anytime',
        salary: 'Variable: ₹0 to Unlimited',
        growth: 'Unlimited - Scale business, Multiple ventures, Angel Investor',
        companies: ['Own Startup', 'Franchise Business', 'Consulting', 'E-commerce']
      }
    ],
    arts: [
      {
        title: 'Content Writer',
        description: 'Create engaging written content for various media and platforms.',
        skills: ['Writing', 'Research', 'SEO', 'Content Strategy', 'Editing'],
        education: ['BA English/Journalism', 'Content Writing Courses', 'Portfolio Development'],
        experience: 'Entry Level: 0-1 years',
        salary: '₹3-12 LPA',
        growth: 'High - Content Manager, Editor, Content Strategist',
        companies: ['Digital Agencies', 'Media Companies', 'Startups', 'Freelance']
      },
      {
        title: 'Graphic Designer',
        description: 'Create visual concepts to communicate ideas and inspire audiences.',
        skills: ['Adobe Creative Suite', 'Typography', 'Color Theory', 'Branding', 'UI/UX Design'],
        education: ['BFA/BDes', 'Design Courses', 'Portfolio Development'],
        experience: 'Entry Level: Portfolio-based',
        salary: '₹3-15 LPA',
        growth: 'High - Art Director, Creative Director, Design Consultant',
        companies: ['Design Studios', 'Advertising Agencies', 'Tech Companies', 'Freelance']
      },
      {
        title: 'Journalist',
        description: 'Research, write, and report news and current events.',
        skills: ['Writing', 'Research', 'Interviewing', 'Ethics', 'Digital Media'],
        education: ['BA Journalism/Mass Communication', 'Internships at Media Houses'],
        experience: 'Entry Level: Internships + 0-2 years',
        salary: '₹3-15 LPA',
        growth: 'High - Senior Reporter, Editor, News Anchor',
        companies: ['Newspapers', 'TV Channels', 'Online Media', 'Magazines']
      },
      {
        title: 'Museum Curator',
        description: 'Manage and organize museum collections and exhibitions.',
        skills: ['Art History', 'Research', 'Exhibition Planning', 'Conservation', 'Public Speaking'],
        education: ['BA/MA in Art History/Museum Studies', 'Specialized Courses'],
        experience: 'Entry Level: Internships + 1-3 years',
        salary: '₹4-12 LPA',
        growth: 'High - Chief Curator, Museum Director, Art Consultant',
        companies: ['Museums', 'Art Galleries', 'Cultural Institutions', 'Government']
      },
      {
        title: 'Social Worker',
        description: 'Help individuals, families, and communities solve problems and improve lives.',
        skills: ['Counseling', 'Community Outreach', 'Case Management', 'Advocacy', 'Communication'],
        education: ['BA/MA Social Work', 'Psychology Courses', 'Field Experience'],
        experience: 'Entry Level: Field work experience',
        salary: '₹2-8 LPA',
        growth: 'High - Program Director, NGO Head, Policy Advisor',
        companies: ['NGOs', 'Government', 'Healthcare', 'Educational Institutions']
      },
      {
        title: 'Film Director',
        description: 'Oversee the creative aspects of film production.',
        skills: ['Storytelling', 'Leadership', 'Technical Knowledge', 'Creativity', 'Project Management'],
        education: ['Film School', 'Mass Communication', 'Practical Experience'],
        experience: 'Variable: Assistant Director + Portfolio',
        salary: '₹5-50 LPA (highly variable)',
        growth: 'High - Established Director, Producer, Studio Head',
        companies: ['Film Production Houses', 'TV Channels', 'OTT Platforms', 'Independent Films']
      }
    ],
    law: [
      {
        title: 'Corporate Lawyer',
        description: 'Provide legal advice to corporations on business matters.',
        skills: ['Contract Law', 'Corporate Law', 'Negotiation', 'Research', 'Communication'],
        education: ['LLB/BA LLB', 'LLM in Corporate Law', 'Internships'],
        experience: 'Entry Level: After LLB + Internships',
        salary: '₹6-30 LPA',
        growth: 'Very High - Partner, General Counsel, Legal Head',
        companies: ['Law Firms', 'Corporate Legal Departments', 'Consulting Firms']
      },
      {
        title: 'Criminal Lawyer',
        description: 'Defend or prosecute individuals accused of criminal offenses.',
        skills: ['Criminal Law', 'Court Procedures', 'Investigation', 'Advocacy', 'Ethics'],
        education: ['LLB/BA LLB', 'Criminal Law Specialization', 'Court Practice'],
        experience: 'Entry Level: Junior Associate + Court Experience',
        salary: '₹4-25 LPA',
        growth: 'High - Senior Advocate, Public Prosecutor, Judge',
        companies: ['Law Firms', 'Government', 'Public Prosecutor Office', 'Private Practice']
      },
      {
        title: 'Legal Consultant',
        description: 'Provide specialized legal advice to businesses and individuals.',
        skills: ['Legal Research', 'Advisory Skills', 'Specialized Knowledge', 'Client Management'],
        education: ['LLB + Specialization', 'Industry Experience', 'Continuous Learning'],
        experience: 'Mid Level: 3-5 years experience',
        salary: '₹8-40 LPA',
        growth: 'High - Senior Consultant, Legal Advisor, Compliance Head',
        companies: ['Consulting Firms', 'Corporations', 'Government', 'Independent Practice']
      },
      {
        title: 'Judge',
        description: 'Preside over court proceedings and make legal decisions.',
        skills: ['Legal Knowledge', 'Impartiality', 'Decision Making', 'Ethics', 'Communication'],
        education: ['LLB + Judicial Services Exam', 'Legal Practice Experience'],
        experience: 'Senior Level: Extensive legal practice or judicial services',
        salary: '₹15-50 LPA (Government Scale)',
        growth: 'High - High Court Judge, Supreme Court Judge',
        companies: ['Judiciary', 'Government', 'Tribunals']
      },
      {
        title: 'Legal Journalist',
        description: 'Report on legal matters and court proceedings for media.',
        skills: ['Legal Knowledge', 'Writing', 'Research', 'Media Skills', 'Ethics'],
        education: ['LLB + Journalism', 'Mass Communication', 'Legal Reporting Experience'],
        experience: 'Entry Level: Journalism + Legal Knowledge',
        salary: '₹4-15 LPA',
        growth: 'High - Legal Editor, Media House Legal Head, Legal Analyst',
        companies: ['Media Houses', 'Legal Publications', 'Online Platforms', 'Freelance']
      },
      {
        title: 'Human Rights Lawyer',
        description: 'Advocate for human rights and social justice causes.',
        skills: ['Human Rights Law', 'Advocacy', 'Research', 'Public Speaking', 'Social Awareness'],
        education: ['LLB + Human Rights Courses', 'NGO Experience', 'International Law'],
        experience: 'Entry Level: NGO work + Legal Practice',
        salary: '₹3-20 LPA',
        growth: 'High - Senior Advocate, NGO Head, International Organizations',
        companies: ['NGOs', 'Human Rights Organizations', 'International Bodies', 'Government']
      }
    ],
    science: [
      {
        title: 'Research Scientist',
        description: 'Conduct scientific research to advance knowledge in specific fields.',
        skills: ['Research Methodology', 'Data Analysis', 'Laboratory Techniques', 'Scientific Writing', 'Critical Thinking'],
        education: ['B.Sc + M.Sc + PhD', 'Research Experience', 'Publications'],
        experience: 'Research Level: PhD + Postdoc',
        salary: '₹6-25 LPA',
        growth: 'High - Principal Scientist, Research Director, Professor',
        companies: ['Research Institutes', 'Universities', 'Government Labs', 'Private R&D']
      },
      {
        title: 'Biotechnologist',
        description: 'Apply biological systems and organisms to develop products and technologies.',
        skills: ['Molecular Biology', 'Genetic Engineering', 'Bioinformatics', 'Laboratory Skills', 'Data Analysis'],
        education: ['B.Sc/B.Tech Biotechnology', 'M.Sc/M.Tech', 'Industry Experience'],
        experience: 'Entry Level: After graduation',
        salary: '₹4-18 LPA',
        growth: 'High - Senior Scientist, R&D Head, Biotech Entrepreneur',
        companies: ['Biotech Companies', 'Pharmaceutical Companies', 'Research Institutes', 'Startups']
      },
      {
        title: 'Environmental Scientist',
        description: 'Study environmental problems and develop solutions for environmental protection.',
        skills: ['Environmental Science', 'Data Collection', 'GIS', 'Environmental Law', 'Field Research'],
        education: ['B.Sc Environmental Science', 'M.Sc', 'Environmental Certifications'],
        experience: 'Entry Level: Field experience preferred',
        salary: '₹3-15 LPA',
        growth: 'High - Environmental Consultant, Policy Advisor, NGO Head',
        companies: ['Environmental Consultancies', 'Government', 'NGOs', 'Industries']
      },
      {
        title: 'Data Scientist (Science)',
        description: 'Apply statistical and computational methods to analyze scientific data.',
        skills: ['Statistics', 'Programming (Python/R)', 'Machine Learning', 'Data Visualization', 'Domain Knowledge'],
        education: ['B.Sc + Data Science Courses', 'M.Sc Statistics/Computer Science'],
        experience: 'Entry Level: Programming + Statistics background',
        salary: '₹8-30 LPA',
        growth: 'Very High - Lead Data Scientist, Chief Data Officer',
        companies: ['Tech Companies', 'Research Institutes', 'Healthcare', 'Finance']
      },
      {
        title: 'Quality Control Analyst',
        description: 'Test products and materials to ensure they meet quality standards.',
        skills: ['Analytical Chemistry', 'Quality Systems', 'Laboratory Techniques', 'Documentation', 'Attention to Detail'],
        education: ['B.Sc Chemistry/Microbiology', 'Quality Certifications'],
        experience: 'Entry Level: Laboratory experience',
        salary: '₹3-12 LPA',
        growth: 'High - QC Manager, Quality Head, Regulatory Affairs',
        companies: ['Pharmaceutical Companies', 'Food Industry', 'Chemical Companies', 'Manufacturing']
      },
      {
        title: 'Science Teacher/Professor',
        description: 'Educate students in various scientific disciplines.',
        skills: ['Subject Expertise', 'Teaching', 'Communication', 'Curriculum Development', 'Research'],
        education: ['B.Sc + B.Ed', 'M.Sc + PhD for college level', 'Teaching Experience'],
        experience: 'Entry Level: Teaching certification',
        salary: '₹3-20 LPA',
        growth: 'High - Principal, Professor, Education Administrator',
        companies: ['Schools', 'Colleges', 'Universities', 'Coaching Institutes']
      }
    ]
  };

  const currentPaths = careerPaths[domain] || [];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
          {domain} Career Roadmap
        </h1>
        <p className="text-xl text-gray-600">
          Explore diverse career paths and plan your professional journey
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Career Paths List */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Career Options</h2>
          <div className="space-y-4">
            {currentPaths.map((path, index) => (
              <div
                key={index}
                onClick={() => setSelectedPath(path)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedPath?.title === path.title
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{path.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{path.salary}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Details */}
        <div className="lg:col-span-2">
          {selectedPath ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedPath.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{selectedPath.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center mb-4">
                      <Target className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Required Skills</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedPath.skills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <Star className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Education Path</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedPath.education.map((edu, index) => (
                        <div key={index} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-gray-700">{edu}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-6 h-6 text-purple-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Career Info</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-purple-600 mr-2" />
                        <span className="text-gray-700">{selectedPath.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-purple-600 mr-2" />
                        <span className="text-gray-700">{selectedPath.salary}</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-purple-600 mr-2" />
                        <span className="text-gray-700">{selectedPath.growth}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Top Companies</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedPath.companies.map((company, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  Next Steps to Get Started
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-600 mb-2">1. Education</h4>
                    <p className="text-sm text-gray-700">
                      Complete the required educational qualifications and certifications.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-600 mb-2">2. Skills</h4>
                    <p className="text-sm text-gray-700">
                      Develop the key skills through courses, projects, and practice.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-purple-200">
                    <h4 className="font-semibold text-purple-600 mb-2">3. Experience</h4>
                    <p className="text-sm text-gray-700">
                      Gain practical experience through internships and entry-level positions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Select a Career Path</h3>
              <p className="text-gray-600 text-lg">
                Choose a career option from the left to see detailed information about the path, 
                required skills, education, and growth opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmapSection;