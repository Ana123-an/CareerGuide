import React, { useState } from 'react';
import { College } from '../types';
import { MapPin, DollarSign, Star, Users, Award, ChevronRight, Heart } from 'lucide-react';

interface CollegeCardProps {
  college: College;
  onSelect: (college: College) => void;
  onAddToCompare?: () => void;
  isInCompareList?: boolean;
  compareListFull?: boolean;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ 
  college, 
  onSelect, 
  onAddToCompare,
  isInCompareList = false,
  compareListFull = false
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-blue-300 transform hover:scale-105 hover-lift animate-fadeInUp">
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-shimmer rounded-t-2xl" />
        )}
        <img
          src={college.images[0]}
          alt={college.name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-bounce-custom">
            Rank #{college.ranking}
          </div>
        </div>
        
        <div className="absolute top-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium capitalize shadow-lg">
            {college.type}
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute bottom-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
            isLiked 
              ? 'bg-red-500 text-white shadow-lg' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {college.name}
            </h3>
            <div className="flex items-center text-gray-600 mb-2 transform group-hover:translate-x-1 transition-transform duration-300">
              <MapPin className="w-4 h-4 mr-1 text-blue-500" />
              <span className="text-sm">{college.location}, {college.state}</span>
            </div>
            <p className="text-gray-600 text-sm">Est. {college.established}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 transform hover:scale-105 transition-all duration-300 hover-glow">
            <div className="flex items-center mb-1">
              <DollarSign className="w-4 h-4 text-blue-600 mr-1" />
              <span className="text-sm font-medium text-blue-900">Total Fees</span>
            </div>
            <p className="text-lg font-bold text-blue-700">{formatCurrency(college.totalFees)}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 transform hover:scale-105 transition-all duration-300 hover-glow">
            <div className="flex items-center mb-1">
              <Users className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-sm font-medium text-green-900">Placement Rate</span>
            </div>
            <p className="text-lg font-bold text-green-700">{college.placements.placementRate}%</p>
          </div>
        </div>

        <div className="mb-4 transform group-hover:translate-x-1 transition-transform duration-300">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-500 mr-1 animate-pulse-custom" />
            <span className="text-sm font-medium text-gray-700">Top Companies</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {college.placements.topCompanies.slice(0, 3).map((company, index) => (
              <span 
                key={index} 
                className={`text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 animate-fadeInUp stagger-${index + 1}`}
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 transform group-hover:translate-x-1 transition-transform duration-300">
          <div className="flex items-center mb-2">
            <Award className="w-4 h-4 text-purple-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Accreditation</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {college.accreditation.map((acc, index) => (
              <span 
                key={index} 
                className={`text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full hover:bg-purple-200 transition-all duration-300 transform hover:scale-105 animate-fadeInUp stagger-${index + 1}`}
              >
                {acc}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onSelect(college)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 group ripple"
        >
          <span>View Details</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {onAddToCompare && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCompare();
            }}
            disabled={isInCompareList || compareListFull}
            className={`w-full mt-3 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 ${
              isInCompareList 
                ? 'bg-green-100 text-green-800 cursor-default' 
                : compareListFull
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 ripple'
            }`}
          >
            {isInCompareList ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Added to Compare</span>
              </>
            ) : compareListFull ? (
              <span>Compare List Full</span>
            ) : (
              <>
                <Star className="w-4 h-4" />
                <span>Add to Compare</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CollegeCard;