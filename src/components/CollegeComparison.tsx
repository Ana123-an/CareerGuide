import React, { useState } from 'react';
import { College } from '../types';
import { X, DollarSign, Star, Users, MapPin, Award, CheckCircle, XCircle } from 'lucide-react';

interface CollegeComparisonProps {
  colleges: College[];
  onClose: () => void;
}

const CollegeComparison: React.FC<CollegeComparisonProps> = ({ colleges, onClose }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getComparisonValue = (college: College, metric: string) => {
    switch (metric) {
      case 'ranking':
        return college.ranking;
      case 'fees':
        return college.totalFees;
      case 'placement':
        return college.placements.placementRate;
      case 'package':
        return college.placements.averagePackage;
      default:
        return 0;
    }
  };

  const getBestCollege = (metric: string) => {
    if (metric === 'ranking' || metric === 'fees') {
      return colleges.reduce((best, current) => 
        getComparisonValue(current, metric) < getComparisonValue(best, metric) ? current : best
      );
    } else {
      return colleges.reduce((best, current) => 
        getComparisonValue(current, metric) > getComparisonValue(best, metric) ? current : best
      );
    }
  };

  const comparisonMetrics = [
    { key: 'ranking', label: 'Ranking', icon: Star, format: (val: number) => `#${val}` },
    { key: 'fees', label: 'Total Fees', icon: DollarSign, format: (val: number) => formatCurrency(val) },
    { key: 'placement', label: 'Placement Rate', icon: Users, format: (val: number) => `${val}%` },
    { key: 'package', label: 'Avg Package', icon: Award, format: (val: number) => formatCurrency(val) }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">College Comparison</h2>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-8 max-h-[80vh] overflow-y-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Criteria</th>
                  {colleges.map((college, index) => (
                    <th key={index} className="text-center py-4 px-6 min-w-[250px]">
                      <div className="space-y-2">
                        <img
                          src={college.images[0]}
                          alt={college.name}
                          className="w-16 h-16 rounded-xl mx-auto object-cover"
                        />
                        <h3 className="font-bold text-gray-900 text-sm">{college.name}</h3>
                        <p className="text-xs text-gray-600">{college.location}, {college.state}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonMetrics.map((metric) => {
                  const Icon = metric.icon;
                  const bestCollege = getBestCollege(metric.key);
                  
                  return (
                    <tr key={metric.key} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-blue-600" />
                          <span className="font-medium text-gray-900">{metric.label}</span>
                        </div>
                      </td>
                      {colleges.map((college, index) => {
                        const value = getComparisonValue(college, metric.key);
                        const isBest = college.id === bestCollege.id;
                        
                        return (
                          <td key={index} className="py-4 px-6 text-center">
                            <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-xl ${
                              isBest 
                                ? 'bg-green-100 text-green-800 font-bold' 
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {isBest && <CheckCircle className="w-4 h-4" />}
                              <span>{metric.format(value)}</span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

                {/* Additional comparison rows */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Location</span>
                    </div>
                  </td>
                  {colleges.map((college, index) => (
                    <td key={index} className="py-4 px-6 text-center">
                      <span className="text-gray-700">{college.location}, {college.state}</span>
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Accreditation</span>
                    </div>
                  </td>
                  {colleges.map((college, index) => (
                    <td key={index} className="py-4 px-6 text-center">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {college.accreditation.map((acc, accIndex) => (
                          <span key={accIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {acc}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Top Companies</span>
                    </div>
                  </td>
                  {colleges.map((college, index) => (
                    <td key={index} className="py-4 px-6 text-center">
                      <div className="space-y-1">
                        {college.placements.topCompanies.slice(0, 3).map((company, compIndex) => (
                          <div key={compIndex} className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">
                            {company}
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Facilities</span>
                    </div>
                  </td>
                  {colleges.map((college, index) => (
                    <td key={index} className="py-4 px-6 text-center">
                      <div className="space-y-1">
                        {college.facilities.slice(0, 4).map((facility, facIndex) => (
                          <div key={facIndex} className="text-sm text-gray-700 bg-green-50 px-2 py-1 rounded">
                            {facility}
                          </div>
                        ))}
                        {college.facilities.length > 4 && (
                          <div className="text-xs text-gray-500">
                            +{college.facilities.length - 4} more
                          </div>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Recommendation</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl">
                <h4 className="font-semibold text-green-600 mb-2">Best Value for Money</h4>
                <p className="text-gray-700">
                  {getBestCollege('fees').name} offers the lowest fees at {formatCurrency(getBestCollege('fees').totalFees)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <h4 className="font-semibold text-blue-600 mb-2">Best Placements</h4>
                <p className="text-gray-700">
                  {getBestCollege('placement').name} has the highest placement rate at {getBestCollege('placement').placements.placementRate}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeComparison;