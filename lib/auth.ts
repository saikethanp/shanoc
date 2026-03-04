'use client';

// Mock authentication logic for now
// In the future, this will be replaced with Firebase Auth

export const login = async (email: string, password: string): Promise<boolean> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  if (email === 'student@example.com' && password === 'password123') {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
    }
    return true;
  }
  return false;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
  }
};

export const isAuthenticated = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  return false;
};
