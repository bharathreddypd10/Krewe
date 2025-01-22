import { Link,useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import SignIn from '../../Pages/Signin/Signin';
import Signup from '../../Pages/Signup/Signup';
import './FormHeader.css';

const FormHeader = () => {
  const location = useLocation();

  const [formType, setFormType] = useState('');

  useEffect(() => {
    if (location.pathname === '/general/register/email/tenant') {
      setFormType('signup');
    } else if (location.pathname === '/general/login/email') {
      setFormType('signin');
    }
  }, [location.pathname]);

  const renderForm = () => {
    if (formType==='signup') {
      return <Signup />;
    } else if (formType==='signin') {
      return <SignIn />;
    }
    return null;
  };
  return (
    <div className="form-header-container">
      <h2 className="form-header-title">
      {formType === 'signin'
          ? 'Sign in to your account'
          : 'Create your account'}
        </h2>
      <div className="form-header-content">
        <p className="form-header-subtext">
        {formType === 'signin' ? (
            <>Or <Link to="/general/register/email/tenant">sign up</Link> if you don't already have an account.</>
          ) : (
            <>Or <Link to="/general/login/email">sign in</Link> if you already have an account.</>
          )}
        </p>
        <div className="form-header-tabs">
          <div className="form-header-tab">
            <Link to="/general/register/email/tenant" className="form-header-tab-link form-header-tab-active">
              <div className="inner-tab">
                <div>Email</div>
              </div>
            </Link>
            <Link to="/general/register/phone/tenant" className="form-header-tab-link">
              <div className="inner-tab">
                <div>Phone</div>
              </div>
            </Link>
          </div>
        </div>
        {renderForm()}
      </div>
    </div>
  );
};

export default FormHeader;
