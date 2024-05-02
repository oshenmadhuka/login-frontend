import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mock URL.createObjectURL
window.URL.createObjectURL = function() {};

test('renders learn react link', async () => {
  render(<App />);
  
  // Wait for the element to appear
  await waitFor(() => {
    const linkElement = screen.queryByText((content, element) => {
      const normalizedText = element.textContent.trim().toLowerCase();
      return normalizedText.includes('learn react');
    });
    
    expect(linkElement).toBeInTheDocument();
  });
});
