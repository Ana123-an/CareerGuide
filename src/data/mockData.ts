import { College, Question } from '../types';

export const mockColleges: College[] = [
  // Engineering Colleges - India
  {
    id: '1',
    name: 'Indian Institute of Technology Delhi',
    location: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    type: 'engineering',
    ranking: 1,
    tuitionFees: 200000,
    housingFees: 50000,
    totalFees: 250000,
    established: 1961,
    accreditation: ['NBA', 'NAAC A++'],
    courses: [
      {
        id: '1',
        name: 'Computer Science Engineering',
        duration: '4 years',
        fees: 200000,
        eligibility: { minCGPA: 9.0, entranceExams: ['JEE Advanced'] },
        placements: { averagePackage: 1800000, topCompanies: ['Google', 'Microsoft', 'Amazon'], placementRate: 95 }
      }
    ],
    facilities: ['Library', 'Hostel', 'Sports Complex', 'Research Labs'],
    scholarships: ['Merit Based', 'Need Based', 'Government Scholarships'],
    eligibilityCriteria: { minCGPA: 9.0, entranceExams: ['JEE Advanced'], otherRequirements: ['Must qualify JEE Main'] },
    placements: { averagePackage: 1800000, topCompanies: ['Google', 'Microsoft', 'Amazon', 'Apple'], placementRate: 95 },
    images: ['https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg'],
    description: 'Premier engineering institute with world-class faculty and infrastructure.'
  },
  {
    id: '2',
    name: 'Indian Institute of Technology Bombay',
    location: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    type: 'engineering',
    ranking: 2,
    tuitionFees: 210000,
    housingFees: 55000,
    totalFees: 265000,
    established: 1958,
    accreditation: ['NBA', 'NAAC A++'],
    courses: [
      {
        id: '2',
        name: 'Electrical Engineering',
        duration: '4 years',
        fees: 210000,
        eligibility: { minCGPA: 8.8, entranceExams: ['JEE Advanced'] },
        placements: { averagePackage: 1650000, topCompanies: ['Intel', 'Qualcomm', 'NVIDIA'], placementRate: 93 }
      }
    ],
    facilities: ['Library', 'Hostel', 'Sports Complex', 'Research Labs', 'Innovation Hub'],
    scholarships: ['Merit Based', 'Need Based', 'Industry Scholarships'],
    eligibilityCriteria: { minCGPA: 8.8, entranceExams: ['JEE Advanced'], otherRequirements: ['Must qualify JEE Main'] },
    placements: { averagePackage: 1650000, topCompanies: ['Intel', 'Qualcomm', 'NVIDIA', 'Samsung'], placementRate: 93 },
    images: ['https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg'],
    description: 'Leading technical institute known for innovation and research excellence.'
  },
  {
    id: '3',
    name: 'Indian Institute of Technology Madras',
    location: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'engineering',
    ranking: 3,
    tuitionFees: 205000,
    housingFees: 52000,
    totalFees: 257000,
    established: 1959,
    accreditation: ['NBA', 'NAAC A++'],
    courses: [
      {
        id: '3',
        name: 'Mechanical Engineering',
        duration: '4 years',
        fees: 205000,
        eligibility: { minCGPA: 8.5, entranceExams: ['JEE Advanced'] },
        placements: { averagePackage: 1400000, topCompanies: ['Tata Motors', 'Mahindra', 'L&T'], placementRate: 90 }
      }
    ],
    facilities: ['Library', 'Hostel', 'Sports Complex', 'Research Labs'],
    scholarships: ['Merit Based', 'Need Based', 'Alumni Scholarships'],
    eligibilityCriteria: { minCGPA: 8.5, entranceExams: ['JEE Advanced'], otherRequirements: ['Must qualify JEE Main'] },
    placements: { averagePackage: 1400000, topCompanies: ['Tata Motors', 'Mahindra', 'L&T', 'Bosch'], placementRate: 90 },
    images: ['https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg'],
    description: 'Renowned for mechanical and aerospace engineering programs.'
  },
  {
    id: '4',
    name: 'National Institute of Technology Trichy',
    location: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'engineering',
    ranking: 8,
    tuitionFees: 150000,
    housingFees: 40000,
    totalFees: 190000,
    established: 1964,
    accreditation: ['NBA', 'NAAC A'],
    courses: [
      {
        id: '4',
        name: 'Computer Science Engineering',
        duration: '4 years',
        fees: 150000,
        eligibility: { minCGPA: 8.0, entranceExams: ['JEE Main'] },
        placements: { averagePackage: 1200000, topCompanies: ['TCS', 'Infosys', 'Wipro'], placementRate: 88 }
      }
    ],
    facilities: ['Library', 'Hostel', 'Sports Complex', 'Labs'],
    scholarships: ['Merit Based', 'Need Based'],
    eligibilityCriteria: { minCGPA: 8.0, entranceExams: ['JEE Main'], otherRequirements: [] },
    placements: { averagePackage: 1200000, topCompanies: ['TCS', 'Infosys', 'Wipro', 'Cognizant'], placementRate: 88 },
    images: ['https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg'],
    description: 'Top NIT with excellent placement record and industry connections.'
  },
  {
    id: '5',
    name: 'Birla Institute of Technology and Science Pilani',
    location: 'Pilani',
    state: 'Rajasthan',
    country: 'India',
    type: 'engineering',
    ranking: 15,
    tuitionFees: 400000,
    housingFees: 80000,
    totalFees: 480000,
    established: 1964,
    accreditation: ['NBA', 'NAAC A'],
    courses: [
      {
        id: '5',
        name: 'Computer Science Engineering',
        duration: '4 years',
        fees: 400000,
        eligibility: { minCGPA: 8.5, entranceExams: ['BITSAT'] },
        placements: { averagePackage: 1500000, topCompanies: ['Microsoft', 'Google', 'Amazon'], placementRate: 92 }
      }
    ],
    facilities: ['Library', 'Hostel', 'Sports Complex', 'Innovation Labs'],
    scholarships: ['Merit Based', 'Need Based'],
    eligibilityCriteria: { minCGPA: 8.5, entranceExams: ['BITSAT'], otherRequirements: [] },
    placements: { averagePackage: 1500000, topCompanies: ['Microsoft', 'Google', 'Amazon', 'Adobe'], placementRate: 92 },
    images: ['https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg'],
    description: 'Premier private engineering institute with strong industry partnerships.'
  },

  // Engineering Colleges - USA
  {
    id: '6',
    name: 'Massachusetts Institute of Technology',
    location: 'Cambridge',
    state: 'Massachusetts',
    country: 'USA',
    type: 'engineering',
    ranking: 1,
    tuitionFees: 5500000,
    housingFees: 1500000,
    totalFees: 7000000,
    established: 1861,
    accreditation: ['ABET', 'NEASC'],
    courses: [
      {
        id: '6',
        name: 'Computer Science',
        duration: '4 years',
        fees: 5500000,
        eligibility: { minCGPA: 9.5, entranceExams: ['SAT', 'ACT'] },
        placements: { averagePackage: 15000000, topCompanies: ['Google', 'Facebook', 'Tesla'], placementRate: 98 }
      }
    ],
    facilities: ['Research Labs', 'Innovation Centers', 'Sports Complex'],
    scholarships: ['Need Based', 'Merit Based', 'International Scholarships'],
    eligibilityCriteria: { minCGPA: 9.5, entranceExams: ['SAT', 'ACT'], otherRequirements: ['TOEFL/IELTS for international students'] },
    placements: { averagePackage: 15000000, topCompanies: ['Google', 'Facebook', 'Tesla', 'SpaceX'], placementRate: 98 },
    images: ['https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg'],
    description: 'World-renowned institute for science, technology, and innovation.'
  },
  {
    id: '7',
    name: 'Stanford University',
    location: 'Stanford',
    state: 'California',
    country: 'USA',
    type: 'engineering',
    ranking: 2,
    tuitionFees: 5800000,
    housingFees: 1800000,
    totalFees: 7600000,
    established: 1885,
    accreditation: ['ABET', 'WASC'],
    courses: [
      {
        id: '7',
        name: 'Computer Science',
        duration: '4 years',
        fees: 5800000,
        eligibility: { minCGPA: 9.7, entranceExams: ['SAT', 'ACT'] },
        placements: { averagePackage: 16000000, topCompanies: ['Apple', 'Google', 'Facebook', 'Tesla'], placementRate: 97 }
      }
    ],
    facilities: ['Research Labs', 'Innovation Centers', 'Sports Complex', 'Entrepreneurship Hub'],
    scholarships: ['Need Based', 'Merit Based', 'International Scholarships'],
    eligibilityCriteria: { minCGPA: 9.7, entranceExams: ['SAT', 'ACT'], otherRequirements: ['TOEFL/IELTS for international students'] },
    placements: { averagePackage: 16000000, topCompanies: ['Apple', 'Google', 'Facebook', 'Tesla'], placementRate: 97 },
    images: ['https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg'],
    description: 'Leading university in Silicon Valley known for innovation and entrepreneurship.'
  },

  // Medical Colleges - India
  {
    id: '8',
    name: 'All India Institute of Medical Sciences Delhi',
    location: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    type: 'medical',
    ranking: 1,
    tuitionFees: 5000,
    housingFees: 25000,
    totalFees: 30000,
    established: 1956,
    accreditation: ['MCI', 'NAAC A++'],
    courses: [
      {
        id: '8',
        name: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
        duration: '5.5 years',
        fees: 5000,
        eligibility: { minCGPA: 9.5, entranceExams: ['NEET'] },
        placements: { averagePackage: 1200000, topCompanies: ['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare'], placementRate: 100 }
      }
    ],
    facilities: ['Hospital', 'Research Labs', 'Library', 'Hostel', 'Simulation Center'],
    scholarships: ['Merit Based', 'Government Scholarships', 'Research Scholarships'],
    eligibilityCriteria: { minCGPA: 9.5, entranceExams: ['NEET'], otherRequirements: ['Must be 17+ years old'] },
    placements: { averagePackage: 1200000, topCompanies: ['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'AIIMS'], placementRate: 100 },
    images: ['https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg'],
    description: 'Premier medical institute providing world-class medical education and healthcare.'
  },
  {
    id: '9',
    name: 'Christian Medical College Vellore',
    location: 'Vellore',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'medical',
    ranking: 2,
    tuitionFees: 150000,
    housingFees: 40000,
    totalFees: 190000,
    established: 1900,
    accreditation: ['MCI', 'NAAC A'],
    courses: [
      {
        id: '9',
        name: 'MBBS',
        duration: '5.5 years',
        fees: 150000,
        eligibility: { minCGPA: 9.0, entranceExams: ['NEET'] },
        placements: { averagePackage: 1000000, topCompanies: ['CMC Vellore', 'Apollo', 'Fortis'], placementRate: 98 }
      }
    ],
    facilities: ['Multi-specialty Hospital', 'Research Centers', 'Library', 'Hostel'],
    scholarships: ['Merit Based', 'Need Based', 'Minority Scholarships'],
    eligibilityCriteria: { minCGPA: 9.0, entranceExams: ['NEET'], otherRequirements: ['Christian preference for some seats'] },
    placements: { averagePackage: 1000000, topCompanies: ['CMC Vellore', 'Apollo', 'Fortis', 'JIPMER'], placementRate: 98 },
    images: ['https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'],
    description: 'Renowned medical college with excellent clinical training and research facilities.'
  },
  {
    id: '10',
    name: 'King George Medical University',
    location: 'Lucknow',
    state: 'Uttar Pradesh',
    country: 'India',
    type: 'medical',
    ranking: 5,
    tuitionFees: 80000,
    housingFees: 30000,
    totalFees: 110000,
    established: 1905,
    accreditation: ['MCI', 'NAAC A'],
    courses: [
      {
        id: '10',
        name: 'MBBS',
        duration: '5.5 years',
        fees: 80000,
        eligibility: { minCGPA: 8.5, entranceExams: ['NEET'] },
        placements: { averagePackage: 800000, topCompanies: ['Government Hospitals', 'Private Hospitals'], placementRate: 95 }
      }
    ],
    facilities: ['Teaching Hospital', 'Research Labs', 'Library', 'Hostel'],
    scholarships: ['Merit Based', 'Government Scholarships'],
    eligibilityCriteria: { minCGPA: 8.5, entranceExams: ['NEET'], otherRequirements: [] },
    placements: { averagePackage: 800000, topCompanies: ['Government Hospitals', 'Private Hospitals', 'NGOs'], placementRate: 95 },
    images: ['https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'],
    description: 'Historic medical university with strong government hospital network.'
  },

  // Medical Colleges - USA
  {
    id: '11',
    name: 'Harvard Medical School',
    location: 'Boston',
    state: 'Massachusetts',
    country: 'USA',
    type: 'medical',
    ranking: 1,
    tuitionFees: 6500000,
    housingFees: 2000000,
    totalFees: 8500000,
    established: 1782,
    accreditation: ['LCME', 'NEASC'],
    courses: [
      {
        id: '11',
        name: 'Doctor of Medicine (MD)',
        duration: '4 years',
        fees: 6500000,
        eligibility: { minCGPA: 9.8, entranceExams: ['MCAT'] },
        placements: { averagePackage: 25000000, topCompanies: ['Massachusetts General Hospital', 'Johns Hopkins', 'Mayo Clinic'], placementRate: 100 }
      }
    ],
    facilities: ['Teaching Hospital', 'Research Centers', 'Simulation Labs', 'Library'],
    scholarships: ['Need Based', 'Merit Based', 'Research Fellowships'],
    eligibilityCriteria: { minCGPA: 9.8, entranceExams: ['MCAT'], otherRequirements: ['Bachelor\'s degree required'] },
    placements: { averagePackage: 25000000, topCompanies: ['Massachusetts General Hospital', 'Johns Hopkins', 'Mayo Clinic', 'Cleveland Clinic'], placementRate: 100 },
    images: ['https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg'],
    description: 'World\'s leading medical school with cutting-edge research and clinical training.'
  },

  // Commerce Colleges - India
  {
    id: '12',
    name: 'Shri Ram College of Commerce',
    location: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    type: 'commerce',
    ranking: 1,
    tuitionFees: 50000,
    housingFees: 80000,
    totalFees: 130000,
    established: 1926,
    accreditation: ['UGC', 'NAAC A++'],
    courses: [
      {
        id: '12',
        name: 'Bachelor of Commerce (Honours)',
        duration: '3 years',
        fees: 50000,
        eligibility: { minCGPA: 8.5, entranceExams: ['CUET'] },
        placements: { averagePackage: 800000, topCompanies: ['Deloitte', 'EY', 'KPMG', 'PwC'], placementRate: 85 }
      }
    ],
    facilities: ['Library', 'Computer Labs', 'Auditorium', 'Sports Complex'],
    scholarships: ['Merit Based', 'Need Based', 'Government Scholarships'],
    eligibilityCriteria: { minCGPA: 8.5, entranceExams: ['CUET'], otherRequirements: ['Commerce background preferred'] },
    placements: { averagePackage: 800000, topCompanies: ['Deloitte', 'EY', 'KPMG', 'PwC'], placementRate: 85 },
    images: ['https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'],
    description: 'Premier commerce college known for academic excellence and industry connections.'
  },
  {
    id: '13',
    name: 'Lady Shri Ram College for Women',
    location: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    type: 'commerce',
    ranking: 2,
    tuitionFees: 45000,
    housingFees: 75000,
    totalFees: 120000,
    established: 1956,
    accreditation: ['UGC', 'NAAC A++'],
    courses: [
      {
        id: '13',
        name: 'Bachelor of Commerce (Honours)',
        duration: '3 years',
        fees: 45000,
        eligibility: { minCGPA: 8.3, entranceExams: ['CUET'] },
        placements: { averagePackage: 750000, topCompanies: ['Deloitte', 'EY', 'KPMG', 'Accenture'], placementRate: 82 }
      }
    ],
    facilities: ['Library', 'Computer Labs', 'Auditorium', 'Sports Complex'],
    scholarships: ['Merit Based', 'Need Based', 'Women Empowerment Scholarships'],
    eligibilityCriteria: { minCGPA: 8.3, entranceExams: ['CUET'], otherRequirements: ['Only for women candidates'] },
    placements: { averagePackage: 750000, topCompanies: ['Deloitte', 'EY', 'KPMG', 'Accenture'], placementRate: 82 },
    images: ['https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'],
    description: 'Leading women\'s college known for empowering women in commerce and business.'
  },
  {
    id: '14',
    name: 'Loyola College Chennai',
    location: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    type: 'commerce',
    ranking: 8,
    tuitionFees: 60000,
    housingFees: 50000,
    totalFees: 110000,
    established: 1925,
    accreditation: ['UGC', 'NAAC A++'],
    courses: [
      {
        id: '14',
        name: 'Bachelor of Commerce',
        duration: '3 years',
        fees: 60000,
        eligibility: { minCGPA: 7.5, entranceExams: ['State Entrance'] },
        placements: { averagePackage: 600000, topCompanies: ['TCS', 'Infosys', 'Local Banks'], placementRate: 75 }
      }
    ],
    facilities: ['Library', 'Computer Labs', 'Chapel', 'Sports Ground'],
    scholarships: ['Merit Based', 'Need Based', 'Minority Scholarships'],
    eligibilityCriteria: { minCGPA: 7.5, entranceExams: ['State Entrance'], otherRequirements: [] },
    placements: { averagePackage: 600000, topCompanies: ['TCS', 'Infosys', 'Local Banks', 'Startups'], placementRate: 75 },
    images: ['https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'],
    description: 'Prestigious autonomous college with strong alumni network in South India.'
  },

  // Commerce Colleges - UK
  {
    id: '15',
    name: 'London School of Economics',
    location: 'London',
    state: 'England',
    country: 'UK',
    type: 'commerce',
    ranking: 1,
    tuitionFees: 2500000,
    housingFees: 1200000,
    totalFees: 3700000,
    established: 1895,
    accreditation: ['QAA', 'AACSB'],
    courses: [
      {
        id: '15',
        name: 'Bachelor of Science in Economics',
        duration: '3 years',
        fees: 2500000,
        eligibility: { minCGPA: 9.0, entranceExams: ['A-Levels', 'SAT'] },
        placements: { averagePackage: 4500000, topCompanies: ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley'], placementRate: 92 }
      }
    ],
    facilities: ['Library', 'Research Centers', 'Student Union', 'Career Services'],
    scholarships: ['Need Based', 'Merit Based', 'International Scholarships'],
    eligibilityCriteria: { minCGPA: 9.0, entranceExams: ['A-Levels', 'SAT'], otherRequirements: ['IELTS/TOEFL for international students'] },
    placements: { averagePackage: 4500000, topCompanies: ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley', 'McKinsey'], placementRate: 92 },
    images: ['https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg'],
    description: 'World-leading social science university with strong economics and finance programs.'
  },

  // Management Colleges - India
  {
    id: '16',
    name: 'Indian Institute of Management Ahmedabad',
    location: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
    type: 'management',
    ranking: 1,
    tuitionFees: 2500000,
    housingFees: 200000,
    totalFees: 2700000,
    established: 1961,
    accreditation: ['AACSB', 'EQUIS'],
    courses: [
      {
        id: '16',
        name: 'Post Graduate Programme in Management',
        duration: '2 years',
        fees: 2500000,
        eligibility: { minCGPA: 7.0, entranceExams: ['CAT'] },
        placements: { averagePackage: 3500000, topCompanies: ['McKinsey', 'BCG', 'Bain'], placementRate: 100 }
      }
    ],
    facilities: ['Library', 'Hostel', 'Case Study Rooms', 'Auditorium'],
    scholarships: ['Merit Based', 'Diversity Scholarships'],
    eligibilityCriteria: { minCGPA: 7.0, entranceExams: ['CAT'], otherRequirements: ['Work experience preferred'] },
    placements: { averagePackage: 3500000, topCompanies: ['McKinsey', 'BCG', 'Bain', 'Goldman Sachs'], placementRate: 100 },
    images: ['https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg'],
    description: 'Leading management institute producing top business leaders.'
  },
  {
    id: '17',
    name: 'Indian Institute of Management Bangalore',
    location: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    type: 'management',
    ranking: 2,
    tuitionFees: 2400000,
    housingFees: 180000,
    totalFees: 2580000,
    established: 1973,
    accreditation: ['AACSB', 'EQUIS'],
    courses: [
      {
        id: '17',
        name: 'Post Graduate Programme in Management',
        duration: '2 years',
        fees: 2400000,
        eligibility: { minCGPA: 7.0, entranceExams: ['CAT'] },
        placements: { averagePackage: 3200000, topCompanies: ['Consulting Firms', 'Investment Banks'], placementRate: 100 }
      }
    ],
    facilities: ['Library', 'Hostel', 'Innovation Lab', 'Sports Complex'],
    scholarships: ['Merit Based', 'Need Based'],
    eligibilityCriteria: { minCGPA: 7.0, entranceExams: ['CAT'], otherRequirements: ['Work experience preferred'] },
    placements: { averagePackage: 3200000, topCompanies: ['Consulting Firms', 'Investment Banks', 'Tech Companies'], placementRate: 100 },
    images: ['https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg'],
    description: 'Premier management school known for innovation and entrepreneurship.'
  },

  // Management Colleges - USA
  {
    id: '18',
    name: 'Harvard Business School',
    location: 'Boston',
    state: 'Massachusetts',
    country: 'USA',
    type: 'management',
    ranking: 1,
    tuitionFees: 7500000,
    housingFees: 2200000,
    totalFees: 9700000,
    established: 1908,
    accreditation: ['AACSB', 'NEASC'],
    courses: [
      {
        id: '18',
        name: 'Master of Business Administration (MBA)',
        duration: '2 years',
        fees: 7500000,
        eligibility: { minCGPA: 8.5, entranceExams: ['GMAT', 'GRE'] },
        placements: { averagePackage: 18000000, topCompanies: ['McKinsey', 'BCG', 'Bain', 'Goldman Sachs'], placementRate: 100 }
      }
    ],
    facilities: ['Library', 'Case Study Rooms', 'Innovation Labs', 'Career Center'],
    scholarships: ['Need Based', 'Merit Based', 'Diversity Scholarships'],
    eligibilityCriteria: { minCGPA: 8.5, entranceExams: ['GMAT', 'GRE'], otherRequirements: ['Work experience required'] },
    placements: { averagePackage: 18000000, topCompanies: ['McKinsey', 'BCG', 'Bain', 'Goldman Sachs'], placementRate: 100 },
    images: ['https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg'],
    description: 'World\'s most prestigious business school with unparalleled network and opportunities.'
  },

  // Arts Colleges - India
  {
    id: '19',
    name: 'Jawaharlal Nehru University',
    location: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    type: 'arts',
    ranking: 1,
    tuitionFees: 25000,
    housingFees: 15000,
    totalFees: 40000,
    established: 1969,
    accreditation: ['UGC', 'NAAC A++'],
    courses: [
      {
        id: '19',
        name: 'Bachelor of Arts (Honours)',
        duration: '3 years',
        fees: 25000,
        eligibility: { minCGPA: 7.5, entranceExams: ['CUET'] },
        placements: { averagePackage: 500000, topCompanies: ['Media Houses', 'NGOs', 'Government', 'Publishing'], placementRate: 70 }
      }
    ],
    facilities: ['Library', 'Language Labs', 'Cultural Centers', 'Hostels'],
    scholarships: ['Merit Based', 'Need Based', 'Minority Scholarships'],
    eligibilityCriteria: { minCGPA: 7.5, entranceExams: ['CUET'], otherRequirements: ['Arts background preferred'] },
    placements: { averagePackage: 500000, topCompanies: ['Media Houses', 'NGOs', 'Government', 'Publishing'], placementRate: 70 },
    images: ['https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg'],
    description: 'Premier university for liberal arts and social sciences education.'
  },
  {
    id: '20',
    name: 'St. Stephens College',
    location: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    type: 'arts',
    ranking: 3,
    tuitionFees: 35000,
    housingFees: 60000,
    totalFees: 95000,
    established: 1881,
    accreditation: ['UGC', 'NAAC A'],
    courses: [
      {
        id: '20',
        name: 'Bachelor of Arts (Honours)',
        duration: '3 years',
        fees: 35000,
        eligibility: { minCGPA: 8.0, entranceExams: ['CUET'] },
        placements: { averagePackage: 600000, topCompanies: ['Civil Services', 'Media', 'Academia'], placementRate: 75 }
      }
    ],
    facilities: ['Historic Library', 'Chapel', 'Debating Society', 'Sports Ground'],
    scholarships: ['Merit Based', 'Need Based', 'Alumni Scholarships'],
    eligibilityCriteria: { minCGPA: 8.0, entranceExams: ['CUET'], otherRequirements: ['Interview required'] },
    placements: { averagePackage: 600000, topCompanies: ['Civil Services', 'Media', 'Academia', 'Think Tanks'], placementRate: 75 },
    images: ['https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg'],
    description: 'Historic college known for producing civil servants and intellectuals.'
  },

  // Arts Colleges - USA
  {
    id: '21',
    name: 'Yale University',
    location: 'New Haven',
    state: 'Connecticut',
    country: 'USA',
    type: 'arts',
    ranking: 1,
    tuitionFees: 6000000,
    housingFees: 1800000,
    totalFees: 7800000,
    established: 1701,
    accreditation: ['NEASC', 'Middle States'],
    courses: [
      {
        id: '21',
        name: 'Bachelor of Arts',
        duration: '4 years',
        fees: 6000000,
        eligibility: { minCGPA: 9.5, entranceExams: ['SAT', 'ACT'] },
        placements: { averagePackage: 8000000, topCompanies: ['Goldman Sachs', 'McKinsey', 'Google', 'Media Companies'], placementRate: 95 }
      }
    ],
    facilities: ['Library', 'Art Museums', 'Theater', 'Research Centers'],
    scholarships: ['Need Based', 'Merit Based', 'International Scholarships'],
    eligibilityCriteria: { minCGPA: 9.5, entranceExams: ['SAT', 'ACT'], otherRequirements: ['TOEFL/IELTS for international students'] },
    placements: { averagePackage: 8000000, topCompanies: ['Goldman Sachs', 'McKinsey', 'Google', 'Media Companies'], placementRate: 95 },
    images: ['https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg'],
    description: 'Ivy League university renowned for liberal arts education and academic excellence.'
  },

  // Law Colleges - India
  {
    id: '22',
    name: 'National Law School of India University',
    location: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    type: 'law',
    ranking: 1,
    tuitionFees: 300000,
    housingFees: 100000,
    totalFees: 400000,
    established: 1987,
    accreditation: ['BCI', 'NAAC A++'],
    courses: [
      {
        id: '22',
        name: 'Bachelor of Arts, Bachelor of Laws (BA LLB)',
        duration: '5 years',
        fees: 300000,
        eligibility: { minCGPA: 8.0, entranceExams: ['CLAT'] },
        placements: { averagePackage: 1500000, topCompanies: ['Supreme Court', 'High Courts', 'Corporate Law Firms'], placementRate: 95 }
      }
    ],
    facilities: ['Moot Court', 'Library', 'Legal Aid Clinic', 'Hostels'],
    scholarships: ['Merit Based', 'Need Based', 'Government Scholarships'],
    eligibilityCriteria: { minCGPA: 8.0, entranceExams: ['CLAT'], otherRequirements: ['Must be under 20 years for 5-year course'] },
    placements: { averagePackage: 1500000, topCompanies: ['Supreme Court', 'High Courts', 'Corporate Law Firms', 'Legal Consultancies'], placementRate: 95 },
    images: ['https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg'],
    description: 'Premier law school known for producing top legal professionals and judges.'
  },
  {
    id: '23',
    name: 'Rajiv Gandhi School of Intellectual Property Law',
    location: 'Kharagpur',
    state: 'West Bengal',
    country: 'India',
    type: 'law',
    ranking: 5,
    tuitionFees: 250000,
    housingFees: 80000,
    totalFees: 330000,
    established: 2006,
    accreditation: ['BCI', 'NAAC A'],
    courses: [
      {
        id: '23',
        name: 'Bachelor of Laws (LLB)',
        duration: '3 years',
        fees: 250000,
        eligibility: { minCGPA: 7.5, entranceExams: ['CLAT'] },
        placements: { averagePackage: 1200000, topCompanies: ['IP Law Firms', 'Corporate Legal Departments'], placementRate: 90 }
      }
    ],
    facilities: ['Moot Court', 'IP Research Center', 'Library', 'Hostels'],
    scholarships: ['Merit Based', 'Research Scholarships'],
    eligibilityCriteria: { minCGPA: 7.5, entranceExams: ['CLAT'], otherRequirements: ['Graduate degree required for LLB'] },
    placements: { averagePackage: 1200000, topCompanies: ['IP Law Firms', 'Corporate Legal Departments', 'Government'], placementRate: 90 },
    images: ['https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg'],
    description: 'Specialized law school focusing on intellectual property and technology law.'
  },

  // Law Colleges - USA
  {
    id: '24',
    name: 'Harvard Law School',
    location: 'Cambridge',
    state: 'Massachusetts',
    country: 'USA',
    type: 'law',
    ranking: 1,
    tuitionFees: 7000000,
    housingFees: 2000000,
    totalFees: 9000000,
    established: 1817,
    accreditation: ['ABA', 'NEASC'],
    courses: [
      {
        id: '24',
        name: 'Juris Doctor (JD)',
        duration: '3 years',
        fees: 7000000,
        eligibility: { minCGPA: 9.5, entranceExams: ['LSAT'] },
        placements: { averagePackage: 22000000, topCompanies: ['Supreme Court', 'Top Law Firms', 'Government'], placementRate: 98 }
      }
    ],
    facilities: ['Moot Court', 'Law Library', 'Legal Clinics', 'Research Centers'],
    scholarships: ['Need Based', 'Merit Based', 'Public Interest Scholarships'],
    eligibilityCriteria: { minCGPA: 9.5, entranceExams: ['LSAT'], otherRequirements: ['Bachelor\'s degree required'] },
    placements: { averagePackage: 22000000, topCompanies: ['Supreme Court', 'Top Law Firms', 'Government', 'International Organizations'], placementRate: 98 },
    images: ['https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg'],
    description: 'World\'s most prestigious law school with unparalleled legal education.'
  },

  // Science Colleges - India
  {
    id: '25',
    name: 'Indian Institute of Science',
    location: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    type: 'science',
    ranking: 1,
    tuitionFees: 100000,
    housingFees: 50000,
    totalFees: 150000,
    established: 1909,
    accreditation: ['UGC', 'NAAC A++'],
    courses: [
      {
        id: '25',
        name: 'Bachelor of Science (Research)',
        duration: '4 years',
        fees: 100000,
        eligibility: { minCGPA: 9.0, entranceExams: ['KVPY', 'JEE Advanced'] },
        placements: { averagePackage: 1200000, topCompanies: ['Research Institutes', 'Pharma Companies', 'Tech Companies'], placementRate: 88 }
      }
    ],
    facilities: ['Research Labs', 'Library', 'Hostels', 'Innovation Centers'],
    scholarships: ['Merit Based', 'Research Scholarships', 'Government Scholarships'],
    eligibilityCriteria: { minCGPA: 9.0, entranceExams: ['KVPY', 'JEE Advanced'], otherRequirements: ['Strong science background required'] },
    placements: { averagePackage: 1200000, topCompanies: ['Research Institutes', 'Pharma Companies', 'Tech Companies', 'ISRO'], placementRate: 88 },
    images: ['https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'],
    description: 'Leading institute for scientific research and higher education in sciences.'
  },
  {
    id: '26',
    name: 'Tata Institute of Fundamental Research',
    location: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    type: 'science',
    ranking: 2,
    tuitionFees: 80000,
    housingFees: 40000,
    totalFees: 120000,
    established: 1945,
    accreditation: ['UGC', 'NAAC A++'],
    courses: [
      {
        id: '26',
        name: 'Integrated PhD in Sciences',
        duration: '5 years',
        fees: 80000,
        eligibility: { minCGPA: 9.0, entranceExams: ['JEST', 'GATE'] },
        placements: { averagePackage: 1000000, topCompanies: ['Research Institutes', 'Universities', 'Government Labs'], placementRate: 85 }
      }
    ],
    facilities: ['Advanced Research Labs', 'Library', 'Hostels', 'Supercomputing Facility'],
    scholarships: ['Research Fellowships', 'Government Scholarships'],
    eligibilityCriteria: { minCGPA: 9.0, entranceExams: ['JEST', 'GATE'], otherRequirements: ['Strong physics/math background'] },
    placements: { averagePackage: 1000000, topCompanies: ['Research Institutes', 'Universities', 'Government Labs', 'International Labs'], placementRate: 85 },
    images: ['https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'],
    description: 'Premier research institute for fundamental sciences and mathematics.'
  },

  // Science Colleges - USA
  {
    id: '27',
    name: 'California Institute of Technology',
    location: 'Pasadena',
    state: 'California',
    country: 'USA',
    type: 'science',
    ranking: 1,
    tuitionFees: 5900000,
    housingFees: 1700000,
    totalFees: 7600000,
    established: 1891,
    accreditation: ['WASC', 'ABET'],
    courses: [
      {
        id: '27',
        name: 'Bachelor of Science',
        duration: '4 years',
        fees: 5900000,
        eligibility: { minCGPA: 9.8, entranceExams: ['SAT', 'ACT'] },
        placements: { averagePackage: 14000000, topCompanies: ['NASA', 'SpaceX', 'Google', 'Research Institutes'], placementRate: 95 }
      }
    ],
    facilities: ['Research Labs', 'Observatory', 'Library', 'Innovation Centers'],
    scholarships: ['Need Based', 'Merit Based', 'Research Scholarships'],
    eligibilityCriteria: { minCGPA: 9.8, entranceExams: ['SAT', 'ACT'], otherRequirements: ['Exceptional science and math background'] },
    placements: { averagePackage: 14000000, topCompanies: ['NASA', 'SpaceX', 'Google', 'Research Institutes'], placementRate: 95 },
    images: ['https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg'],
    description: 'World-renowned institute for science and technology research and education.'
  }
];

// Domain-specific questions for aptitude tests
export const mockQuestions: Question[] = [
  // Engineering Questions - Mathematics
  {
    id: 'eng1',
    domain: 'engineering',
    section: 'mathematics',
    question: 'If f(x) = x² + 2x + 1, what is f(3)?',
    options: ['12', '16', '18', '20'],
    correctAnswer: 1
  },
  {
    id: 'eng2',
    domain: 'engineering',
    section: 'mathematics',
    question: 'What is the derivative of x³ + 2x² + 5x + 1?',
    options: ['3x² + 4x + 5', '3x² + 2x + 5', 'x² + 4x + 5', '3x² + 4x + 1'],
    correctAnswer: 0
  },
  {
    id: 'eng3',
    domain: 'engineering',
    section: 'mathematics',
    question: 'Solve for x: 2x + 5 = 15',
    options: ['5', '10', '7.5', '2.5'],
    correctAnswer: 0
  },
  {
    id: 'eng4',
    domain: 'engineering',
    section: 'mathematics',
    question: 'What is the value of log₂(8)?',
    options: ['2', '3', '4', '8'],
    correctAnswer: 1
  },
  {
    id: 'eng5',
    domain: 'engineering',
    section: 'mathematics',
    question: 'If sin(θ) = 3/5, what is cos(θ)?',
    options: ['4/5', '3/4', '5/4', '5/3'],
    correctAnswer: 0
  },
  {
    id: 'eng6',
    domain: 'engineering',
    section: 'mathematics',
    question: 'What is the integral of 2x dx?',
    options: ['x² + C', '2x² + C', 'x²/2 + C', '2x + C'],
    correctAnswer: 0
  },
  {
    id: 'eng7',
    domain: 'engineering',
    section: 'mathematics',
    question: 'Find the determinant of matrix [[2,3],[1,4]]',
    options: ['5', '8', '11', '14'],
    correctAnswer: 0
  },
  {
    id: 'eng8',
    domain: 'engineering',
    section: 'mathematics',
    question: 'What is the sum of first 10 natural numbers?',
    options: ['45', '50', '55', '60'],
    correctAnswer: 2
  },
  {
    id: 'eng9',
    domain: 'engineering',
    section: 'mathematics',
    question: 'If a = 3 and b = 4, what is √(a² + b²)?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 0
  },

  // Engineering Questions - Physics
  {
    id: 'eng10',
    domain: 'engineering',
    section: 'physics',
    question: 'What is the unit of electric current?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 1
  },
  {
    id: 'eng11',
    domain: 'engineering',
    section: 'physics',
    question: 'What is the acceleration due to gravity on Earth?',
    options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '9.6 m/s²'],
    correctAnswer: 0
  },
  {
    id: 'eng12',
    domain: 'engineering',
    section: 'physics',
    question: 'Which law states that force equals mass times acceleration?',
    options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Gravitation'],
    correctAnswer: 1
  },
  {
    id: 'eng13',
    domain: 'engineering',
    section: 'physics',
    question: 'What is the speed of light in vacuum?',
    options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'],
    correctAnswer: 0
  },
  {
    id: 'eng14',
    domain: 'engineering',
    section: 'physics',
    question: 'What is the formula for kinetic energy?',
    options: ['mgh', '½mv²', 'mc²', 'F = ma'],
    correctAnswer: 1
  },
  {
    id: 'eng15',
    domain: 'engineering',
    section: 'physics',
    question: 'What is the unit of power?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctAnswer: 2
  },
  {
    id: 'eng16',
    domain: 'engineering',
    section: 'physics',
    question: 'What is Ohm\'s law?',
    options: ['V = IR', 'P = VI', 'E = mc²', 'F = ma'],
    correctAnswer: 0
  },
  {
    id: 'eng17',
    domain: 'engineering',
    section: 'physics',
    question: 'What is the frequency of AC supply in India?',
    options: ['50 Hz', '60 Hz', '40 Hz', '100 Hz'],
    correctAnswer: 0
  },
  {
    id: 'eng18',
    domain: 'engineering',
    section: 'physics',
    question: 'What is the principle behind transformers?',
    options: ['Electromagnetic induction', 'Photoelectric effect', 'Thermionic emission', 'Piezoelectric effect'],
    correctAnswer: 0
  },

  // Engineering Questions - Logical Reasoning
  {
    id: 'eng19',
    domain: 'engineering',
    section: 'logical',
    question: 'Complete the series: 2, 6, 12, 20, ?',
    options: ['28', '30', '32', '36'],
    correctAnswer: 1
  },
  {
    id: 'eng20',
    domain: 'engineering',
    section: 'logical',
    question: 'If A = 1, B = 2, C = 3, what is the value of CAB?',
    options: ['312', '321', '123', '132'],
    correctAnswer: 0
  },
  {
    id: 'eng21',
    domain: 'engineering',
    section: 'logical',
    question: 'Which number comes next: 1, 4, 9, 16, ?',
    options: ['20', '25', '24', '36'],
    correctAnswer: 1
  },
  {
    id: 'eng22',
    domain: 'engineering',
    section: 'logical',
    question: 'If all roses are flowers and some flowers are red, then:',
    options: ['All roses are red', 'Some roses may be red', 'No roses are red', 'All flowers are roses'],
    correctAnswer: 1
  },
  {
    id: 'eng23',
    domain: 'engineering',
    section: 'logical',
    question: 'Find the odd one out: 2, 4, 6, 9, 8',
    options: ['2', '4', '6', '9'],
    correctAnswer: 3
  },
  {
    id: 'eng24',
    domain: 'engineering',
    section: 'logical',
    question: 'If CODING is written as DPEJOH, how is FLOWER written?',
    options: ['GMPXFS', 'GMPWER', 'FLOWER', 'GKPVDS'],
    correctAnswer: 0
  },
  {
    id: 'eng25',
    domain: 'engineering',
    section: 'logical',
    question: 'What comes next in the pattern: A, C, F, J, ?',
    options: ['M', 'N', 'O', 'P'],
    correctAnswer: 2
  },
  {
    id: 'eng26',
    domain: 'engineering',
    section: 'logical',
    question: 'If 3 + 3 = 18, 4 + 4 = 32, then 5 + 5 = ?',
    options: ['50', '55', '60', '10'],
    correctAnswer: 0
  },
  {
    id: 'eng27',
    domain: 'engineering',
    section: 'logical',
    question: 'In a certain code, COMPUTER is written as RFUVQNPC. How is MEDICINE written?',
    options: ['EOJDEJFM', 'NFEJDJOF', 'MFEJDJOF', 'NFEJDMOF'],
    correctAnswer: 1
  },

  // Medical Questions - Biology
  {
    id: 'med1',
    domain: 'medical',
    section: 'biology',
    question: 'Which organ produces insulin in the human body?',
    options: ['Liver', 'Pancreas', 'Kidney', 'Heart'],
    correctAnswer: 1
  },
  {
    id: 'med2',
    domain: 'medical',
    section: 'biology',
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Endoplasmic Reticulum'],
    correctAnswer: 2
  },
  {
    id: 'med3',
    domain: 'medical',
    section: 'biology',
    question: 'How many chambers does a human heart have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2
  },
  {
    id: 'med4',
    domain: 'medical',
    section: 'biology',
    question: 'What is the basic unit of life?',
    options: ['Tissue', 'Organ', 'Cell', 'Organism'],
    correctAnswer: 2
  },
  {
    id: 'med5',
    domain: 'medical',
    section: 'biology',
    question: 'Which blood group is known as universal donor?',
    options: ['A', 'B', 'AB', 'O'],
    correctAnswer: 3
  },
  {
    id: 'med6',
    domain: 'medical',
    section: 'biology',
    question: 'What is the largest organ in human body?',
    options: ['Liver', 'Brain', 'Skin', 'Lungs'],
    correctAnswer: 2
  },
  {
    id: 'med7',
    domain: 'medical',
    section: 'biology',
    question: 'Which vitamin is produced when skin is exposed to sunlight?',
    options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
    correctAnswer: 3
  },
  {
    id: 'med8',
    domain: 'medical',
    section: 'biology',
    question: 'What is the normal human body temperature?',
    options: ['96.8°F', '97.8°F', '98.6°F', '99.6°F'],
    correctAnswer: 2
  },
  {
    id: 'med9',
    domain: 'medical',
    section: 'biology',
    question: 'Which part of the brain controls balance?',
    options: ['Cerebrum', 'Cerebellum', 'Medulla', 'Pons'],
    correctAnswer: 1
  },

  // Medical Questions - Chemistry
  {
    id: 'med10',
    domain: 'medical',
    section: 'chemistry',
    question: 'What is the chemical formula for glucose?',
    options: ['C6H12O6', 'C12H22O11', 'C2H6O', 'CH4'],
    correctAnswer: 0
  },
  {
    id: 'med11',
    domain: 'medical',
    section: 'chemistry',
    question: 'What is the atomic number of carbon?',
    options: ['4', '6', '8', '12'],
    correctAnswer: 1
  },
  {
    id: 'med12',
    domain: 'medical',
    section: 'chemistry',
    question: 'Which gas is most abundant in Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 2
  },
  {
    id: 'med13',
    domain: 'medical',
    section: 'chemistry',
    question: 'What is the pH of pure water?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1
  },
  {
    id: 'med14',
    domain: 'medical',
    section: 'chemistry',
    question: 'What is the chemical symbol for sodium?',
    options: ['S', 'So', 'Na', 'N'],
    correctAnswer: 2
  },
  {
    id: 'med15',
    domain: 'medical',
    section: 'chemistry',
    question: 'Which acid is found in the stomach?',
    options: ['Sulfuric acid', 'Nitric acid', 'Hydrochloric acid', 'Acetic acid'],
    correctAnswer: 2
  },
  {
    id: 'med16',
    domain: 'medical',
    section: 'chemistry',
    question: 'What is the molecular formula of water?',
    options: ['H2O', 'H2O2', 'HO', 'H3O'],
    correctAnswer: 0
  },
  {
    id: 'med17',
    domain: 'medical',
    section: 'chemistry',
    question: 'Which element has the highest electronegativity?',
    options: ['Oxygen', 'Fluorine', 'Chlorine', 'Nitrogen'],
    correctAnswer: 1
  },
  {
    id: 'med18',
    domain: 'medical',
    section: 'chemistry',
    question: 'What is the valency of carbon?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2
  },

  // Medical Questions - Physics
  {
    id: 'med19',
    domain: 'medical',
    section: 'physics',
    question: 'What type of lens is used to correct myopia?',
    options: ['Convex', 'Concave', 'Bifocal', 'Cylindrical'],
    correctAnswer: 1
  },
  {
    id: 'med20',
    domain: 'medical',
    section: 'physics',
    question: 'What is the speed of light in vacuum?',
    options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'],
    correctAnswer: 0
  },
  {
    id: 'med21',
    domain: 'medical',
    section: 'physics',
    question: 'Which type of radiation has the highest penetrating power?',
    options: ['Alpha', 'Beta', 'Gamma', 'X-ray'],
    correctAnswer: 2
  },
  {
    id: 'med22',
    domain: 'medical',
    section: 'physics',
    question: 'What is the unit of frequency?',
    options: ['Hertz', 'Watt', 'Joule', 'Newton'],
    correctAnswer: 0
  },
  {
    id: 'med23',
    domain: 'medical',
    section: 'physics',
    question: 'What is the principle of ultrasound?',
    options: ['Reflection of sound waves', 'Refraction of light', 'Electromagnetic induction', 'Photoelectric effect'],
    correctAnswer: 0
  },
  {
    id: 'med24',
    domain: 'medical',
    section: 'physics',
    question: 'What is the normal range of human hearing?',
    options: ['20 Hz to 20 kHz', '10 Hz to 10 kHz', '30 Hz to 30 kHz', '40 Hz to 40 kHz'],
    correctAnswer: 0
  },
  {
    id: 'med25',
    domain: 'medical',
    section: 'physics',
    question: 'Which instrument is used to measure blood pressure?',
    options: ['Stethoscope', 'Sphygmomanometer', 'Thermometer', 'Otoscope'],
    correctAnswer: 1
  },
  {
    id: 'med26',
    domain: 'medical',
    section: 'physics',
    question: 'What is the wavelength range of visible light?',
    options: ['400-700 nm', '300-600 nm', '500-800 nm', '200-500 nm'],
    correctAnswer: 0
  },
  {
    id: 'med27',
    domain: 'medical',
    section: 'physics',
    question: 'What is the principle behind MRI?',
    options: ['X-rays', 'Magnetic resonance', 'Ultrasound', 'Radioactivity'],
    correctAnswer: 1
  },

  // Commerce Questions - Economics
  {
    id: 'com1',
    domain: 'commerce',
    section: 'economics',
    question: 'What does GDP stand for?',
    options: ['Gross Domestic Product', 'General Development Plan', 'Global Distribution Point', 'Government Development Policy'],
    correctAnswer: 0
  },
  {
    id: 'com2',
    domain: 'commerce',
    section: 'economics',
    question: 'What is inflation?',
    options: ['Decrease in prices', 'Increase in prices', 'Stable prices', 'Currency devaluation'],
    correctAnswer: 1
  },
  {
    id: 'com3',
    domain: 'commerce',
    section: 'economics',
    question: 'Who is known as the father of modern economics?',
    options: ['Karl Marx', 'Adam Smith', 'John Keynes', 'Milton Friedman'],
    correctAnswer: 1
  },
  {
    id: 'com4',
    domain: 'commerce',
    section: 'economics',
    question: 'What is the law of demand?',
    options: ['Price and demand are directly related', 'Price and demand are inversely related', 'Price has no effect on demand', 'Demand is always constant'],
    correctAnswer: 1
  },
  {
    id: 'com5',
    domain: 'commerce',
    section: 'economics',
    question: 'What is fiscal policy?',
    options: ['Government spending and taxation', 'Money supply control', 'Exchange rate management', 'Trade regulations'],
    correctAnswer: 0
  },
  {
    id: 'com6',
    domain: 'commerce',
    section: 'economics',
    question: 'What is the central bank of India?',
    options: ['State Bank of India', 'Reserve Bank of India', 'Bank of India', 'Punjab National Bank'],
    correctAnswer: 1
  },
  {
    id: 'com7',
    domain: 'commerce',
    section: 'economics',
    question: 'What is opportunity cost?',
    options: ['Cost of production', 'Cost of next best alternative', 'Total cost', 'Fixed cost'],
    correctAnswer: 1
  },
  {
    id: 'com8',
    domain: 'commerce',
    section: 'economics',
    question: 'What is perfect competition?',
    options: ['Many sellers, differentiated products', 'One seller, unique product', 'Many sellers, identical products', 'Few sellers, similar products'],
    correctAnswer: 2
  },
  {
    id: 'com9',
    domain: 'commerce',
    section: 'economics',
    question: 'What is elasticity of demand?',
    options: ['Responsiveness of demand to price changes', 'Total demand in market', 'Maximum demand possible', 'Minimum demand required'],
    correctAnswer: 0
  },

  // Commerce Questions - Accounting
  {
    id: 'com10',
    domain: 'commerce',
    section: 'accounting',
    question: 'In accounting, what is the fundamental equation?',
    options: ['Assets = Liabilities + Equity', 'Revenue = Expenses + Profit', 'Cash = Assets - Liabilities', 'Profit = Revenue - Costs'],
    correctAnswer: 0
  },
  {
    id: 'com11',
    domain: 'commerce',
    section: 'accounting',
    question: 'What is depreciation?',
    options: ['Increase in asset value', 'Decrease in asset value over time', 'Asset purchase', 'Asset sale'],
    correctAnswer: 1
  },
  {
    id: 'com12',
    domain: 'commerce',
    section: 'accounting',
    question: 'Which side of the balance sheet shows what the company owns?',
    options: ['Liabilities', 'Assets', 'Equity', 'Revenue'],
    correctAnswer: 1
  },
  {
    id: 'com13',
    domain: 'commerce',
    section: 'accounting',
    question: 'What is double entry bookkeeping?',
    options: ['Recording transactions twice', 'Every debit has a corresponding credit', 'Using two books', 'Checking entries twice'],
    correctAnswer: 1
  },
  {
    id: 'com14',
    domain: 'commerce',
    section: 'accounting',
    question: 'What is working capital?',
    options: ['Fixed assets', 'Current assets - Current liabilities', 'Total capital', 'Share capital'],
    correctAnswer: 1
  },
  {
    id: 'com15',
    domain: 'commerce',
    section: 'accounting',
    question: 'What is the purpose of trial balance?',
    options: ['To calculate profit', 'To check arithmetic accuracy', 'To prepare budget', 'To analyze performance'],
    correctAnswer: 1
  },
  {
    id: 'com16',
    domain: 'commerce',
    section: 'accounting',
    question: 'What is goodwill in accounting?',
    options: ['Physical asset', 'Intangible asset', 'Liability', 'Expense'],
    correctAnswer: 1
  },
  {
    id: 'com17',
    domain: 'commerce',
    section: 'accounting',
    question: 'What is the matching principle?',
    options: ['Match assets with liabilities', 'Match revenues with related expenses', 'Match debits with credits', 'Match cash with profits'],
    correctAnswer: 1
  },
  {
    id: 'com18',
    domain: 'commerce',
    section: 'accounting',
    question: 'What is cash flow statement?',
    options: ['Statement of profit', 'Statement of cash receipts and payments', 'Statement of assets', 'Statement of liabilities'],
    correctAnswer: 1
  },

  // Commerce Questions - Business
  {
    id: 'com19',
    domain: 'commerce',
    section: 'business',
    question: 'What is the primary goal of marketing?',
    options: ['Increase costs', 'Satisfy customer needs', 'Reduce production', 'Eliminate competition'],
    correctAnswer: 1
  },
  {
    id: 'com20',
    domain: 'commerce',
    section: 'business',
    question: 'What does SWOT analysis stand for?',
    options: ['Strengths, Weaknesses, Opportunities, Threats', 'Sales, Workforce, Operations, Technology', 'Strategy, Work, Objectives, Targets', 'Systems, Workflow, Organization, Tactics'],
    correctAnswer: 0
  },
  {
    id: 'com21',
    domain: 'commerce',
    section: 'business',
    question: 'What is a monopoly?',
    options: ['Many sellers, one buyer', 'One seller, many buyers', 'Many sellers, many buyers', 'Few sellers, few buyers'],
    correctAnswer: 1
  },
  {
    id: 'com22',
    domain: 'commerce',
    section: 'business',
    question: 'What are the 4 Ps of marketing?',
    options: ['Product, Price, Place, Promotion', 'People, Process, Physical, Performance', 'Plan, Prepare, Present, Perform', 'Profit, Purpose, People, Planet'],
    correctAnswer: 0
  },
  {
    id: 'com23',
    domain: 'commerce',
    section: 'business',
    question: 'What is entrepreneurship?',
    options: ['Working for others', 'Starting and running a business', 'Buying shares', 'Managing employees'],
    correctAnswer: 1
  },
  {
    id: 'com24',
    domain: 'commerce',
    section: 'business',
    question: 'What is market segmentation?',
    options: ['Dividing market into distinct groups', 'Combining all markets', 'Eliminating competition', 'Reducing prices'],
    correctAnswer: 0
  },
  {
    id: 'com25',
    domain: 'commerce',
    section: 'business',
    question: 'What is brand equity?',
    options: ['Physical assets of brand', 'Value added by brand name', 'Cost of branding', 'Number of brands'],
    correctAnswer: 1
  },
  {
    id: 'com26',
    domain: 'commerce',
    section: 'business',
    question: 'What is supply chain management?',
    options: ['Managing suppliers only', 'Managing entire flow from raw materials to customers', 'Managing inventory only', 'Managing transportation only'],
    correctAnswer: 1
  },
  {
    id: 'com27',
    domain: 'commerce',
    section: 'business',
    question: 'What is corporate social responsibility?',
    options: ['Maximizing profits only', 'Contributing to society and environment', 'Reducing costs', 'Increasing market share'],
    correctAnswer: 1
  },

  // Arts Questions - Literature
  {
    id: 'art1',
    domain: 'arts',
    section: 'literature',
    question: 'Who wrote the novel "Pride and Prejudice"?',
    options: ['Charlotte Brontë', 'Jane Austen', 'Emily Dickinson', 'Virginia Woolf'],
    correctAnswer: 1
  },
  {
    id: 'art2',
    domain: 'arts',
    section: 'literature',
    question: 'Which Shakespeare play features the character Hamlet?',
    options: ['Macbeth', 'Romeo and Juliet', 'Hamlet', 'Othello'],
    correctAnswer: 2
  },
  {
    id: 'art3',
    domain: 'arts',
    section: 'literature',
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
    correctAnswer: 0
  },
  {
    id: 'art4',
    domain: 'arts',
    section: 'literature',
    question: 'What is the first book in the Harry Potter series?',
    options: ['Chamber of Secrets', 'Philosopher\'s Stone', 'Prisoner of Azkaban', 'Goblet of Fire'],
    correctAnswer: 1
  },
  {
    id: 'art5',
    domain: 'arts',
    section: 'literature',
    question: 'Who wrote "1984"?',
    options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'Kurt Vonnegut'],
    correctAnswer: 1
  },
  {
    id: 'art6',
    domain: 'arts',
    section: 'literature',
    question: 'What is the opening line of "A Tale of Two Cities"?',
    options: ['Call me Ishmael', 'It was the best of times', 'In the beginning', 'Once upon a time'],
    correctAnswer: 1
  },
  {
    id: 'art7',
    domain: 'arts',
    section: 'literature',
    question: 'Who wrote "The Great Gatsby"?',
    options: ['Ernest Hemingway', 'F. Scott Fitzgerald', 'John Steinbeck', 'William Faulkner'],
    correctAnswer: 1
  },
  {
    id: 'art8',
    domain: 'arts',
    section: 'literature',
    question: 'What literary device is used in "The pen is mightier than the sword"?',
    options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
    correctAnswer: 0
  },
  {
    id: 'art9',
    domain: 'arts',
    section: 'literature',
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Christopher Marlowe', 'William Shakespeare', 'Ben Jonson', 'John Webster'],
    correctAnswer: 1
  },

  // Arts Questions - History
  {
    id: 'art10',
    domain: 'arts',
    section: 'history',
    question: 'In which year did World War II end?',
    options: ['1944', '1945', '1946', '1947'],
    correctAnswer: 1
  },
  {
    id: 'art11',
    domain: 'arts',
    section: 'history',
    question: 'Who was the first President of the United States?',
    options: ['Thomas Jefferson', 'John Adams', 'George Washington', 'Benjamin Franklin'],
    correctAnswer: 2
  },
  {
    id: 'art12',
    domain: 'arts',
    section: 'history',
    question: 'When did India gain independence?',
    options: ['1945', '1946', '1947', '1948'],
    correctAnswer: 2
  },
  {
    id: 'art13',
    domain: 'arts',
    section: 'history',
    question: 'Who was known as the Iron Lady?',
    options: ['Margaret Thatcher', 'Indira Gandhi', 'Golda Meir', 'Angela Merkel'],
    correctAnswer: 0
  },
  {
    id: 'art14',
    domain: 'arts',
    section: 'history',
    question: 'Which empire was ruled by Julius Caesar?',
    options: ['Greek Empire', 'Roman Empire', 'Persian Empire', 'Ottoman Empire'],
    correctAnswer: 1
  },
  {
    id: 'art15',
    domain: 'arts',
    section: 'history',
    question: 'When did the Berlin Wall fall?',
    options: ['1987', '1988', '1989', '1990'],
    correctAnswer: 2
  },
  {
    id: 'art16',
    domain: 'arts',
    section: 'history',
    question: 'Who led the Indian independence movement?',
    options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Subhas Chandra Bose', 'Sardar Patel'],
    correctAnswer: 1
  },
  {
    id: 'art17',
    domain: 'arts',
    section: 'history',
    question: 'Which war was fought between 1914-1918?',
    options: ['World War I', 'World War II', 'Cold War', 'Vietnam War'],
    correctAnswer: 0
  },
  {
    id: 'art18',
    domain: 'arts',
    section: 'history',
    question: 'Who discovered America?',
    options: ['Vasco da Gama', 'Christopher Columbus', 'Ferdinand Magellan', 'Marco Polo'],
    correctAnswer: 1
  },

  // Arts Questions - Geography
  {
    id: 'art19',
    domain: 'arts',
    section: 'geography',
    question: 'Which is the longest river in the world?',
    options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correctAnswer: 1
  },
  {
    id: 'art20',
    domain: 'arts',
    section: 'geography',
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correctAnswer: 2
  },
  {
    id: 'art21',
    domain: 'arts',
    section: 'geography',
    question: 'Which continent has the most countries?',
    options: ['Asia', 'Africa', 'Europe', 'South America'],
    correctAnswer: 1
  },
  {
    id: 'art22',
    domain: 'arts',
    section: 'geography',
    question: 'What is the highest mountain in the world?',
    options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
    correctAnswer: 1
  },
  {
    id: 'art23',
    domain: 'arts',
    section: 'geography',
    question: 'Which is the largest ocean?',
    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
    correctAnswer: 2
  },
  {
    id: 'art24',
    domain: 'arts',
    section: 'geography',
    question: 'What is the smallest country in the world?',
    options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
    correctAnswer: 1
  },
  {
    id: 'art25',
    domain: 'arts',
    section: 'geography',
    question: 'Which desert is the largest in the world?',
    options: ['Sahara', 'Gobi', 'Kalahari', 'Antarctica'],
    correctAnswer: 3
  },
  {
    id: 'art26',
    domain: 'arts',
    section: 'geography',
    question: 'What is the capital of Canada?',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
    correctAnswer: 2
  },
  {
    id: 'art27',
    domain: 'arts',
    section: 'geography',
    question: 'Which line divides the Earth into Northern and Southern hemispheres?',
    options: ['Prime Meridian', 'Equator', 'Tropic of Cancer', 'Tropic of Capricorn'],
    correctAnswer: 1
  },

  // Law Questions - Legal Studies
  {
    id: 'law1',
    domain: 'law',
    section: 'legal',
    question: 'What does "habeas corpus" mean?',
    options: ['Have the body', 'Know the law', 'Speak the truth', 'Follow justice'],
    correctAnswer: 0
  },
  {
    id: 'law2',
    domain: 'law',
    section: 'legal',
    question: 'What is the highest court in India?',
    options: ['High Court', 'District Court', 'Supreme Court', 'Sessions Court'],
    correctAnswer: 2
  },
  {
    id: 'law3',
    domain: 'law',
    section: 'legal',
    question: 'What does "pro bono" mean in legal terms?',
    options: ['For the public good', 'For money', 'For the court', 'For the client'],
    correctAnswer: 0
  },
  {
    id: 'law4',
    domain: 'law',
    section: 'legal',
    question: 'What is jurisprudence?',
    options: ['Study of law', 'Practice of law', 'Making of law', 'Breaking of law'],
    correctAnswer: 0
  },
  {
    id: 'law5',
    domain: 'law',
    section: 'legal',
    question: 'What is tort law?',
    options: ['Criminal law', 'Civil wrongs', 'Constitutional law', 'Administrative law'],
    correctAnswer: 1
  },
  {
    id: 'law6',
    domain: 'law',
    section: 'legal',
    question: 'What is the principle of "stare decisis"?',
    options: ['Let the decision stand', 'Hear both sides', 'Innocent until proven guilty', 'Equal before law'],
    correctAnswer: 0
  },
  {
    id: 'law7',
    domain: 'law',
    section: 'legal',
    question: 'What is a writ?',
    options: ['A legal document', 'A court order', 'A law book', 'A legal procedure'],
    correctAnswer: 1
  },
  {
    id: 'law8',
    domain: 'law',
    section: 'legal',
    question: 'What is the difference between civil and criminal law?',
    options: ['No difference', 'Civil deals with disputes, criminal with crimes', 'Civil is for rich, criminal for poor', 'Civil is state law, criminal is federal'],
    correctAnswer: 1
  },
  {
    id: 'law9',
    domain: 'law',
    section: 'legal',
    question: 'What is "mens rea"?',
    options: ['Guilty mind', 'Guilty act', 'Legal procedure', 'Court hearing'],
    correctAnswer: 0
  },

  // Law Questions - Constitution
  {
    id: 'law10',
    domain: 'law',
    section: 'constitution',
    question: 'How many fundamental rights are guaranteed by the Indian Constitution?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1
  },
  {
    id: 'law11',
    domain: 'law',
    section: 'constitution',
    question: 'Who is known as the father of the Indian Constitution?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'B.R. Ambedkar', 'Sardar Patel'],
    correctAnswer: 2
  },
  {
    id: 'law12',
    domain: 'law',
    section: 'constitution',
    question: 'In which year was the Indian Constitution adopted?',
    options: ['1947', '1948', '1949', '1950'],
    correctAnswer: 2
  },
  {
    id: 'law13',
    domain: 'law',
    section: 'constitution',
    question: 'What is the Preamble?',
    options: ['Introduction to Constitution', 'List of rights', 'Government structure', 'Amendment procedure'],
    correctAnswer: 0
  },
  {
    id: 'law14',
    domain: 'law',
    section: 'constitution',
    question: 'How many schedules are there in the Indian Constitution?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2
  },
  {
    id: 'law15',
    domain: 'law',
    section: 'constitution',
    question: 'What is the term of office for the President of India?',
    options: ['4 years', '5 years', '6 years', '7 years'],
    correctAnswer: 1
  },
  {
    id: 'law16',
    domain: 'law',
    section: 'constitution',
    question: 'Which article deals with Right to Education?',
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 25'],
    correctAnswer: 2
  },
  {
    id: 'law17',
    domain: 'law',
    section: 'constitution',
    question: 'What is federalism?',
    options: ['Single government', 'Division of powers between center and states', 'Military rule', 'Religious government'],
    correctAnswer: 1
  },
  {
    id: 'law18',
    domain: 'law',
    section: 'constitution',
    question: 'Who appoints the Chief Justice of India?',
    options: ['Prime Minister', 'President', 'Parliament', 'Supreme Court'],
    correctAnswer: 1
  },

  // Law Questions - Reasoning
  {
    id: 'law19',
    domain: 'law',
    section: 'reasoning',
    question: 'If all roses are flowers and some flowers are red, then:',
    options: ['All roses are red', 'Some roses may be red', 'No roses are red', 'All flowers are roses'],
    correctAnswer: 1
  },
  {
    id: 'law20',
    domain: 'law',
    section: 'reasoning',
    question: 'In a court case, what is the burden of proof?',
    options: ['On the defendant', 'On the plaintiff', 'On the judge', 'On the jury'],
    correctAnswer: 1
  },
  {
    id: 'law21',
    domain: 'law',
    section: 'reasoning',
    question: 'What is the principle of "innocent until proven guilty"?',
    options: ['Presumption of innocence', 'Presumption of guilt', 'Burden of proof', 'Due process'],
    correctAnswer: 0
  },
  {
    id: 'law22',
    domain: 'law',
    section: 'reasoning',
    question: 'What is logical reasoning in law?',
    options: ['Emotional arguments', 'Systematic thinking based on evidence', 'Personal opinions', 'Random guessing'],
    correctAnswer: 1
  },
  {
    id: 'law23',
    domain: 'law',
    section: 'reasoning',
    question: 'If A implies B, and B implies C, then:',
    options: ['A implies C', 'C implies A', 'A equals C', 'No relationship'],
    correctAnswer: 0
  },
  {
    id: 'law24',
    domain: 'law',
    section: 'reasoning',
    question: 'What is deductive reasoning?',
    options: ['General to specific', 'Specific to general', 'Random thinking', 'Emotional reasoning'],
    correctAnswer: 0
  },
  {
    id: 'law25',
    domain: 'law',
    section: 'reasoning',
    question: 'In legal reasoning, what is precedent?',
    options: ['New law', 'Previous court decisions', 'Personal opinion', 'Government policy'],
    correctAnswer: 1
  },
  {
    id: 'law26',
    domain: 'law',
    section: 'reasoning',
    question: 'What is analogical reasoning?',
    options: ['Comparing similar cases', 'Opposite reasoning', 'Mathematical calculation', 'Emotional appeal'],
    correctAnswer: 0
  },
  {
    id: 'law27',
    domain: 'law',
    section: 'reasoning',
    question: 'What is the purpose of legal reasoning?',
    options: ['To confuse people', 'To reach logical conclusions', 'To delay justice', 'To increase costs'],
    correctAnswer: 1
  },

  // Science Questions - Chemistry
  {
    id: 'sci1',
    domain: 'science',
    section: 'chemistry',
    question: 'What is the atomic number of carbon?',
    options: ['4', '6', '8', '12'],
    correctAnswer: 1
  },
  {
    id: 'sci2',
    domain: 'science',
    section: 'chemistry',
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2
  },
  {
    id: 'sci3',
    domain: 'science',
    section: 'chemistry',
    question: 'What is the pH of pure water?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1
  },
  {
    id: 'sci4',
    domain: 'science',
    section: 'chemistry',
    question: 'What is the molecular formula of methane?',
    options: ['CH4', 'C2H6', 'C3H8', 'C4H10'],
    correctAnswer: 0
  },
  {
    id: 'sci5',
    domain: 'science',
    section: 'chemistry',
    question: 'Which gas is produced when metals react with acids?',
    options: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Nitrogen'],
    correctAnswer: 1
  },
  {
    id: 'sci6',
    domain: 'science',
    section: 'chemistry',
    question: 'What is the valency of oxygen?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1
  },
  {
    id: 'sci7',
    domain: 'science',
    section: 'chemistry',
    question: 'Which element is known as the king of chemicals?',
    options: ['Hydrochloric acid', 'Sulfuric acid', 'Nitric acid', 'Acetic acid'],
    correctAnswer: 1
  },
  {
    id: 'sci8',
    domain: 'science',
    section: 'chemistry',
    question: 'What is the process of conversion of solid directly to gas?',
    options: ['Melting', 'Boiling', 'Sublimation', 'Condensation'],
    correctAnswer: 2
  },
  {
    id: 'sci9',
    domain: 'science',
    section: 'chemistry',
    question: 'Which law states that mass is neither created nor destroyed?',
    options: ['Law of conservation of mass', 'Law of conservation of energy', 'Boyle\'s law', 'Charles\' law'],
    correctAnswer: 0
  },

  // Science Questions - Biology
  {
    id: 'sci10',
    domain: 'science',
    section: 'biology',
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Endoplasmic Reticulum'],
    correctAnswer: 2
  },
  {
    id: 'sci11',
    domain: 'science',
    section: 'biology',
    question: 'What is the process by which plants make food?',
    options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Digestion'],
    correctAnswer: 1
  },
  {
    id: 'sci12',
    domain: 'science',
    section: 'biology',
    question: 'What is DNA?',
    options: ['Deoxyribonucleic acid', 'Ribonucleic acid', 'Protein', 'Carbohydrate'],
    correctAnswer: 0
  },
  {
    id: 'sci13',
    domain: 'science',
    section: 'biology',
    question: 'Which organ system is responsible for transporting blood?',
    options: ['Respiratory system', 'Digestive system', 'Circulatory system', 'Nervous system'],
    correctAnswer: 2
  },
  {
    id: 'sci14',
    domain: 'science',
    section: 'biology',
    question: 'What is the study of heredity called?',
    options: ['Ecology', 'Genetics', 'Anatomy', 'Physiology'],
    correctAnswer: 1
  },
  {
    id: 'sci15',
    domain: 'science',
    section: 'biology',
    question: 'Which scientist proposed the theory of evolution?',
    options: ['Gregor Mendel', 'Charles Darwin', 'Louis Pasteur', 'Alexander Fleming'],
    correctAnswer: 1
  },
  {
    id: 'sci16',
    domain: 'science',
    section: 'biology',
    question: 'What is the basic unit of classification?',
    options: ['Kingdom', 'Phylum', 'Species', 'Genus'],
    correctAnswer: 2
  },
  {
    id: 'sci17',
    domain: 'science',
    section: 'biology',
    question: 'Which type of blood cells fight infection?',
    options: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'],
    correctAnswer: 1
  },
  {
    id: 'sci18',
    domain: 'science',
    section: 'biology',
    question: 'What is the largest organ in the human body?',
    options: ['Liver', 'Brain', 'Skin', 'Lungs'],
    correctAnswer: 2
  },

  // Science Questions - Physics
  {
    id: 'sci19',
    domain: 'science',
    section: 'physics',
    question: 'What is the speed of light in vacuum?',
    options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'],
    correctAnswer: 0
  },
  {
    id: 'sci20',
    domain: 'science',
    section: 'physics',
    question: 'What is the unit of force?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctAnswer: 1
  },
  {
    id: 'sci21',
    domain: 'science',
    section: 'physics',
    question: 'What is the formula for kinetic energy?',
    options: ['mgh', '½mv²', 'mc²', 'F = ma'],
    correctAnswer: 1
  },
  {
    id: 'sci22',
    domain: 'science',
    section: 'physics',
    question: 'Who proposed the theory of relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
    correctAnswer: 1
  },
  {
    id: 'sci23',
    domain: 'science',
    section: 'physics',
    question: 'What is the acceleration due to gravity?',
    options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '9.6 m/s²'],
    correctAnswer: 0
  },
  {
    id: 'sci24',
    domain: 'science',
    section: 'physics',
    question: 'What is the unit of electric current?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 1
  },
  {
    id: 'sci25',
    domain: 'science',
    section: 'physics',
    question: 'What is the principle of conservation of energy?',
    options: ['Energy can be created', 'Energy can be destroyed', 'Energy cannot be created or destroyed', 'Energy is constant'],
    correctAnswer: 2
  },
  {
    id: 'sci26',
    domain: 'science',
    section: 'physics',
    question: 'What is the frequency of AC supply in India?',
    options: ['50 Hz', '60 Hz', '40 Hz', '100 Hz'],
    correctAnswer: 0
  },
  {
    id: 'sci27',
    domain: 'science',
    section: 'physics',
    question: 'What is the SI unit of temperature?',
    options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'],
    correctAnswer: 2
  }
];