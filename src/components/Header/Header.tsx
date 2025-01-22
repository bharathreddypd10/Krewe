import  './Header.css';
import { useAppNavigation } from '../../Utils/navigationHelper';
const Header = () => {
    const { navigateTo } = useAppNavigation();
  return (
    <header className='header'>
        <div className='container-fluid'>
            <div className='container'>
                <div className='outer-container'>
                    <div className='inner-container-1'>
                        <h3>Krewe</h3>
                    </div>
                    <div>
                        <div className='inner-container-2'>
                            <button onClick={() => navigateTo('/general/login/email')}>Sign In</button>
                            <button onClick={() => navigateTo('/general/register/email/tenant')}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
