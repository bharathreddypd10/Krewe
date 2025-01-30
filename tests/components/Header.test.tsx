import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header/Header';
import AuthProvider from '../../src/context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
    it('should render property managers,listings,Krewe,signin,signup buttons when tenant is not logged in', () => {
        render(
          <AuthProvider>
            <BrowserRouter>
              <Header />
            </BrowserRouter>
          </AuthProvider>
        );
        expect(screen.getByText('Krewe', { selector: 'button' })).toBeInTheDocument();
        expect(screen.getByText('property managers', { selector: 'button' })).toBeInTheDocument();
        expect(screen.getByText('listings', { selector: 'button' })).toBeInTheDocument();
        expect(screen.getByText('Sign In', { selector: 'button' })).toBeInTheDocument();
        expect(screen.getByText('Sign Up', { selector: 'button' })).toBeInTheDocument();
    });
    
});