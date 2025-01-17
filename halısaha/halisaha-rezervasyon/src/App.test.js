import { render, screen } from '@testing-library/react';
import App from './App';/* Tailwind CSS Base Styles */
@tailwind base;

/* Tailwind CSS Component Styles */
@tailwind components;

/* Tailwind CSS Utility Classes */
@tailwind utilities;

/* Global Custom Styles (isteğe bağlı) */

/* Örnek: Body için varsayılan stiller */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

/* Örnek: H1 başlıklar için özel stil */
h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #007BFF;
}

/* Ek özel global CSS kuralları buraya eklenebilir */


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
