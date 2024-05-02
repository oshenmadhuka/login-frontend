import { render, screen } from '@testing-library/react';
import App from './App';

// Mock URL.createObjectURL
window.URL.createObjectURL = function() {};

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.queryByText((content, element) => {
    // Custom matcher to find text with case-insensitivity and trimmed whitespace
    const normalizedText = element.textContent.trim().toLowerCase();
    return normalizedText.includes('learn react'); // Using includes for flexibility
  });

  expect(linkElement).toBeInTheDocument();
});
