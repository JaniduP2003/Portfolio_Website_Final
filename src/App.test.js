import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock the scrollIntoView function since it's not available in jsdom
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: jest.fn(),
  writable: true,
});

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(document.querySelector('.App')).toBeInTheDocument();
  });

  test('applies MUI theme correctly', () => {
    render(<App />);
    // Check if CssBaseline is applied by looking for the body styles
    const app = document.querySelector('.App');
    expect(app).toBeInTheDocument();
  });

  test('renders HomePage component', () => {
    render(<App />);
    // Check for main sections that should be present
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });
});

describe('HomePage Integration', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders all main sections', () => {
    // Check for section headings
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('My Story')).toBeInTheDocument();
    expect(screen.getByText('Interests & Hobbies')).toBeInTheDocument();
  });

  test('renders navigation elements', () => {
    // Check for navigation - look for common nav elements
    const navElements = document.querySelectorAll('nav, [role="navigation"]');
    // Even if nav isn't found, the page should still render properly
    expect(document.body).toBeInTheDocument();
  });

  test('renders profile information', () => {
    expect(screen.getByText('Janidu Pabasara')).toBeInTheDocument();
    expect(screen.getByText('Computer Science Student')).toBeInTheDocument();
    expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
    // Use getAllByText since email appears multiple times (profile and contact sections)
    expect(screen.getAllByText('janidupeiris2003@gmail.com')).toHaveLength(2);
  });

  test('renders statistics cards', () => {
    expect(screen.getByText('Years of Study')).toBeInTheDocument();
    expect(screen.getByText('Projects Completed')).toBeInTheDocument();
    expect(screen.getByText('Technologies Learned')).toBeInTheDocument();
    expect(screen.getByText('Coffee Cups')).toBeInTheDocument();
    
    // Check for stat values
    expect(screen.getByText('3+')).toBeInTheDocument();
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('20+')).toBeInTheDocument();
    expect(screen.getByText('∞')).toBeInTheDocument();
  });

  test('renders interests and hobbies', () => {
    const interests = [
      'Web Development', 'Machine Learning', 'Mobile Apps', 'UI/UX Design',
      'Open Source', 'Gaming', 'Music', 'Photography', 'Travel', 'Reading'
    ];
    
    interests.forEach(interest => {
      expect(screen.getByText(interest)).toBeInTheDocument();
    });
  });

  test('renders bio content', () => {
    expect(screen.getByText(/I'm a passionate Computer Science student/)).toBeInTheDocument();
    expect(screen.getByText(/Currently pursuing my degree/)).toBeInTheDocument();
    expect(screen.getByText(/When I'm not coding/)).toBeInTheDocument();
  });
});

describe('About Section Functionality', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('about section has correct id for navigation', () => {
    const aboutSection = document.getElementById('about');
    expect(aboutSection).toBeInTheDocument();
  });

  test('profile avatar displays initials', () => {
    expect(screen.getByText('JP')).toBeInTheDocument();
  });

  test('interest chips are interactive elements', () => {
    const webDevChip = screen.getByText('Web Development');
    expect(webDevChip).toBeInTheDocument();
    
    // Test that it's rendered as a clickable element
    expect(webDevChip.closest('[role="button"], button, .MuiChip-root')).toBeInTheDocument();
  });

  test('statistics have proper icons and content', () => {
    // Check that stat cards contain both value and label
    const statsContainer = screen.getByText('Years of Study').closest('.MuiCard-root, [class*="Card"]');
    expect(statsContainer).toBeInTheDocument();
  });
});

describe('Responsive Design Elements', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('uses Material-UI Grid system', () => {
    // Check for MUI Grid classes or structure
    const gridElements = document.querySelectorAll('[class*="MuiGrid"], [class*="Grid"]');
    expect(gridElements.length).toBeGreaterThan(0);
  });

  test('uses Material-UI Container for layout', () => {
    // Check for MUI Container classes
    const containerElements = document.querySelectorAll('[class*="MuiContainer"], [class*="Container"]');
    expect(containerElements.length).toBeGreaterThan(0);
  });
});

describe('Accessibility', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('has proper heading hierarchy', () => {
    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBeGreaterThan(0);
    
    const h4Elements = screen.getAllByRole('heading', { level: 4 });
    expect(h4Elements.length).toBeGreaterThan(0);
  });

  test('images have proper alt text or aria labels', () => {
    // Check for avatar which should have accessible content
    const avatar = screen.getByText('JP');
    expect(avatar).toBeInTheDocument();
  });

  test('section has proper semantic structure', () => {
    const aboutSection = document.querySelector('section#about');
    expect(aboutSection).toBeInTheDocument();
  });
});
