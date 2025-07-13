// Mock useColleges hook - Uses local services
import { useState, useEffect } from 'react';
import { College } from '../types';
import { getColleges, getCollegesByType } from '../services/collegeService';

export const useColleges = (type?: string) => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let fetchedColleges: College[];
        
        if (type) {
          fetchedColleges = await getCollegesByType(type);
        } else {
          fetchedColleges = await getColleges();
        }
        
        setColleges(fetchedColleges);
      } catch (err) {
        setError('Failed to fetch colleges');
        console.error('Error fetching colleges:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, [type]);

  const refetch = async () => {
    await fetchColleges();
  };

  return { colleges, loading, error, refetch };
};