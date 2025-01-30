import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header/Header'
import { MemoryRouter } from 'react-router-dom';
describe('Header', () => {
    vi.mock('../../src/Custom Hooks/useAuth', () => ({
        default:vi.fn(
            () => ({
                isLoggedIn: true,
                isTenant: true,
                logout: vi.fn(),
            })
        ),
    }));
    it('should render listings,Krewe and profile button when tenant is logged in', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
  
        );
        expect(screen.getByText('Krewe', { selector: 'button' })).toBeInTheDocument();
        expect(screen.getByText('listings', { selector: 'button' })).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'profile'})).toBeInTheDocument();
        expect(screen.getByText('Account', { selector:'li' })).toBeInTheDocument();
        expect(screen.getByText('Sign Out', { selector:'li' })).toBeInTheDocument();
    });
});