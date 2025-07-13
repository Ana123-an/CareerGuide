// Mock Firebase configuration for standalone app
// This file provides the same interface as Firebase but uses local storage

export const auth = {
  currentUser: null,
  onAuthStateChanged: (callback: (user: any) => void) => {
    // Check local storage for user
    const user = localStorage.getItem('currentUser');
    callback(user ? JSON.parse(user) : null);
    return () => {}; // unsubscribe function
  }
};

export const db = {
  // Mock Firestore interface
  collection: (name: string) => ({
    add: (data: any) => Promise.resolve({ id: Math.random().toString(36) }),
    get: () => Promise.resolve({ docs: [] }),
    where: () => ({ get: () => Promise.resolve({ docs: [] }) })
  })
};

export default {};