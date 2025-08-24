import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import AboutSection from '../AboutSection';

// Create a test theme similar to the one in App.js
const testTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#0f0134',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
});

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={testTheme}>
      {component}
    </ThemeProvider>
  );
};

describe('AboutSection Component', () => {
  beforeEach(() => {
    renderWithTheme(<AboutSection />);
  });

  test('renders without crashing', () => {
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  test('has correct section id for navigation', () => {
    const aboutSection = document.getElementById('about');
    expect(aboutSection).toBeInTheDocument();
  });

  test('renders main heading', () => {
    const heading = screen.getByRole('heading', { name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders profile information correctly', () => {
    expect(screen.getByText('Janidu Pabasara')).toBeInTheDocument();
    expect(screen.getByText('Computer Science Student')).toBeInTheDocument();
    expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
    expect(screen.getByText('janidupeiris2003@gmail.com')).toBeInTheDocument();
  });

  test('renders avatar with correct initials', () => {
    expect(screen.getByText('JP')).toBeInTheDocument();
  });

  test('renders all statistics', () => {
    const expectedStats = [
      { label: 'Years of Study', value: '3+' },
      { label: 'Projects Completed', value: '15+' },
      { label: 'Technologies Learned', value: '20+' },
      { label: 'Coffee Cups', value: '∞' },
    ];

    expectedStats.forEach(stat => {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
      expect(screen.getByText(stat.value)).toBeInTheDocument();
    });
  });

  test('renders bio section with story heading', () => {
    expect(screen.getByText('My Story')).toBeInTheDocument();
  });

  test('renders complete bio content', () => {
    const bioTexts = [
      /I'm a passionate Computer Science student/,
      /Currently pursuing my degree/,
      /When I'm not coding/
    ];

    bioTexts.forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('renders interests and hobbies section', () => {
    expect(screen.getByText('Interests & Hobbies')).toBeInTheDocument();
    
    const interests = [
      'Web Development', 'Machine Learning', 'Mobile Apps', 'UI/UX Design',
      'Open Source', 'Gaming', 'Music', 'Photography', 'Travel', 'Reading'
    ];
    
    interests.forEach(interest => {
      expect(screen.getByText(interest)).toBeInTheDocument();
    });
  });

  test('interest chips are rendered as interactive elements', () => {
    const webDevChip = screen.getByText('Web Development');
    expect(webDevChip).toBeInTheDocument();
    
    // Check if it's rendered within a chip component
    const chipElement = webDevChip.closest('[class*="MuiChip"], [class*="Chip"]');
    expect(chipElement).toBeInTheDocument();
  });

  test('uses proper Material-UI components', () => {
    // Check for Container
    const containers = document.querySelectorAll('[class*="MuiContainer"]');
    expect(containers.length).toBeGreaterThan(0);

    // Check for Grid
    const grids = document.querySelectorAll('[class*="MuiGrid"]');
    expect(grids.length).toBeGreaterThan(0);

    // Check for Cards
    const cards = document.querySelectorAll('[class*="MuiCard"]');
    expect(cards.length).toBeGreaterThan(0);
  });

  test('has proper semantic structure', () => {
    // Check for section element
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'about');

    // Check for proper heading levels
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toBeInTheDocument();

    const h5Elements = screen.getAllByRole('heading', { level: 5 });
    expect(h5Elements.length).toBeGreaterThan(0);
  });

  test('contact information is displayed with icons', () => {
    // Check for location and email text
    expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
    expect(screen.getByText('janidupeiris2003@gmail.com')).toBeInTheDocument();
  });
});

describe('AboutSection Accessibility', () => {
  beforeEach(() => {
    renderWithTheme(<AboutSection />);
  });

  test('has proper heading hierarchy', () => {
    const h2 = screen.getByRole('heading', { level: 2, name: /about me/i });
    expect(h2).toBeInTheDocument();

    const h4 = screen.getByRole('heading', { level: 4, name: /interests & hobbies/i });
    expect(h4).toBeInTheDocument();
  });

  test('statistics have proper structure for screen readers', () => {
    // Each stat should have both label and value visible
    expect(screen.getByText('Years of Study')).toBeInTheDocument();
    expect(screen.getByText('3+')).toBeInTheDocument();
  });

  test('profile section has proper structure', () => {
    // Name should be in a heading
    const nameHeading = screen.getByRole('heading', { name: /janidu pabasara/i });
    expect(nameHeading).toBeInTheDocument();
  });
});
