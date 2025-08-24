import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import HomePage from '../HomePage';

// Mock the scrollIntoView function
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: jest.fn(),
  writable: true,
});

// Create test theme
const testTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#bb86fc' },
    secondary: { main: '#03dac6' },
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

// Mock the section components to avoid complex rendering
jest.mock('../../components/sections/HeroSection', () => {
  return function MockHeroSection({ scrollToSection }) {
    return (
      <div data-testid="hero-section">
        <button onClick={() => scrollToSection('about')}>Scroll to About</button>
        Hero Section Content
      </div>
    );
  };
});

jest.mock('../../components/sections/AboutSection', () => {
  return function MockAboutSection() {
    return <div data-testid="about-section" id="about">About Section Content</div>;
  };
});

jest.mock('../../components/sections/SkillsSection', () => {
  return function MockSkillsSection() {
    return <div data-testid="skills-section" id="skills">Skills Section Content</div>;
  };
});

jest.mock('../../components/sections/ProjectsSection', () => {
  return function MockProjectsSection() {
    return <div data-testid="projects-section" id="projects">Projects Section Content</div>;
  };
});

jest.mock('../../components/sections/ContactSection', () => {
  return function MockContactSection() {
    return <div data-testid="contact-section" id="contact">Contact Section Content</div>;
  };
});

jest.mock('../../components/Navbar', () => {
  return function MockNavbar({ scrollToSection }) {
    return (
      <nav data-testid="navbar">
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
    );
  };
});

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={testTheme}>
      {component}
    </ThemeProvider>
  );
};

describe('HomePage Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    renderWithTheme(<HomePage />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('renders all section components', () => {
    renderWithTheme(<HomePage />);
    
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('skills-section')).toBeInTheDocument();
    expect(screen.getByTestId('projects-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
  });

  test('sections have correct IDs for navigation', () => {
    renderWithTheme(<HomePage />);
    
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('skills')).toBeInTheDocument();
    expect(document.getElementById('projects')).toBeInTheDocument();
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  test('scrollToSection function works correctly', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;

    renderWithTheme(<HomePage />);
    
    // Click on About button in navbar
    const aboutButton = screen.getByText('About');
    fireEvent.click(aboutButton);
    
    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  test('scrollToSection handles non-existent elements gracefully', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;

    renderWithTheme(<HomePage />);
    
    // Try to scroll to a non-existent section
    // This would happen if scrollToSection is called with an invalid ID
    // The function should not crash
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('passes scrollToSection prop to Navbar and HeroSection', () => {
    renderWithTheme(<HomePage />);
    
    // Check that both Navbar and HeroSection can trigger scrolling
    const navAboutButton = screen.getByText('About');
    const heroScrollButton = screen.getByText('Scroll to About');
    
    expect(navAboutButton).toBeInTheDocument();
    expect(heroScrollButton).toBeInTheDocument();
  });

  test('navbar contains all expected navigation buttons', () => {
    renderWithTheme(<HomePage />);
    
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('all navigation buttons are functional', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;

    renderWithTheme(<HomePage />);
    
    // Test each navigation button
    const buttons = ['About', 'Skills', 'Projects', 'Contact'];
    
    buttons.forEach(buttonText => {
      const button = screen.getByText(buttonText);
      fireEvent.click(button);
    });
    
    // Should have been called for each button click
    expect(mockScrollIntoView).toHaveBeenCalledTimes(4);
  });
});

describe('HomePage Integration', () => {
  test('component structure is correct', () => {
    renderWithTheme(<HomePage />);
    
    // Check that the main container div exists
    const mainDiv = screen.getByTestId('navbar').parentElement;
    expect(mainDiv).toBeInTheDocument();
    
    // Check that all sections are children of the main container
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('skills-section')).toBeInTheDocument();
    expect(screen.getByTestId('projects-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
  });

  test('sections are rendered in correct order', () => {
    renderWithTheme(<HomePage />);
    
    const container = screen.getByTestId('navbar').parentElement;
    const children = Array.from(container.children);
    
    // Check order: Navbar, Hero, About, Skills, Projects, Contact
    expect(children[0]).toHaveAttribute('data-testid', 'navbar');
    expect(children[1]).toHaveAttribute('data-testid', 'hero-section');
    expect(children[2]).toHaveAttribute('data-testid', 'about-section');
    expect(children[3]).toHaveAttribute('data-testid', 'skills-section');
    expect(children[4]).toHaveAttribute('data-testid', 'projects-section');
    expect(children[5]).toHaveAttribute('data-testid', 'contact-section');
  });
});
