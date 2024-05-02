import { render, screen } from '@testing-library/react';
import App from './App';

// Mock URL.createObjectURL
window.URL.createObjectURL = function() {};

test('renders learn react link', () => {
  render(<App />);
  
  // Check for specific text within a paragraph element
  const paragraphElement = screen.getByText('If you are already a member you can login with your email address and password');
  expect(paragraphElement).toBeInTheDocument();
});
