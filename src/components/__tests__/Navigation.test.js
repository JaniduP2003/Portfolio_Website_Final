import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

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
  },
});

// Test component that simulates the scrollToSection functionality
const TestNavigationComponent = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
      <div id="about">About Section</div>
      <div id="skills">Skills Section</div>
      <div id="projects">Projects Section</div>
      <div id="contact">Contact Section</div>
    </div>
  );
};

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={testTheme}>
      {component}
    </ThemeProvider>
  );
};

describe('Navigation Functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('scrollToSection function scrolls to correct element', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;

    renderWithTheme(<TestNavigationComponent />);
    
    const aboutButton = screen.getByText('About');
    fireEvent.click(aboutButton);
    
    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  test('all navigation buttons trigger scroll', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;

    renderWithTheme(<TestNavigationComponent />);
    
    const buttons = ['About', 'Skills', 'Projects', 'Contact'];
    
    buttons.forEach(buttonText => {
      const button = screen.getByText(buttonText);
      fireEvent.click(button);
    });
    
    expect(mockScrollIntoView).toHaveBeenCalledTimes(4);
  });

  test('target sections exist for navigation', () => {
    renderWithTheme(<TestNavigationComponent />);
    
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('skills')).toBeInTheDocument();
    expect(document.getElementById('projects')).toBeInTheDocument();
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  test('scrollIntoView is called with correct parameters', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;

    renderWithTheme(<TestNavigationComponent />);
    
    const skillsButton = screen.getByText('Skills');
    fireEvent.click(skillsButton);
    
    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  test('handles non-existent section gracefully', () => {
    const TestComponentWithInvalidSection = () => {
      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

      return (
        <div>
          <button onClick={() => scrollToSection('nonexistent')}>
            Invalid Section
          </button>
        </div>
      );
    };

    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;

    renderWithTheme(<TestComponentWithInvalidSection />);
    
    const invalidButton = screen.getByText('Invalid Section');
    fireEvent.click(invalidButton);
    
    // Should not call scrollIntoView for non-existent element
    expect(mockScrollIntoView).not.toHaveBeenCalled();
  });
});

describe('Smooth Scrolling Behavior', () => {
  test('scroll behavior is set to smooth', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;

    renderWithTheme(<TestNavigationComponent />);
    
    const aboutButton = screen.getByText('About');
    fireEvent.click(aboutButton);
    
    expect(mockScrollIntoView).toHaveBeenCalledWith(
      expect.objectContaining({
        behavior: 'smooth'
      })
    );
  });

  test('scroll block is set to start', () => {
    const mockScrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;

    renderWithTheme(<TestNavigationComponent />);
    
    const projectsButton = screen.getByText('Projects');
    fireEvent.click(projectsButton);
    
    expect(mockScrollIntoView).toHaveBeenCalledWith(
      expect.objectContaining({
        block: 'start'
      })
    );
  });
});
