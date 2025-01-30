import  './Header.css';
import { useAppNavigation } from '../../Utils/navigationHelper';
import useAuth from '../../Custom Hooks/useAuth';
const Header = () => {
  const {isLoggedIn,isTenant,logout} = useAuth();
  const { navigateTo } = useAppNavigation();
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="default-container">
          <div className="left-container">
            <div className="left-button-container">
              {!isTenant&& (
                <button>property managers</button>
              )
              }
              <button>listings</button>
            </div>
          </div>
          <div className="middle-container">
            <button>Krewe</button>
          </div>
          <div className="right-container">
            <div className="right-button-container">
              {
                isLoggedIn ? (
                  <div className="profile-dropdown">
                  <button className="profile-button">
                    <img
                      src="/path-to-profile-pic.jpg"
                      alt="profile"
                      // alt={`${user?.firstName?.[0] || ""}${user?.lastName?.[0] || ""}`}
                      className="profile-pic"
                    />
                  </button>
                  <div className="dropdown-menu">
                    <ul>
                      <li onClick={() => navigateTo("/tenant/dashboard/profile")}>Account</li>
                      <li onClick={()=> {logout(); navigateTo("/general/login/email");}}>Sign Out</li>
                    </ul>
                  </div>
                </div>
                ) : (
                  <>
                  <button onClick={() => navigateTo("/general/login/email")}>
                    Sign In
                  </button>
                  <button
                    onClick={() =>
                      navigateTo("/general/register/email/tenant")
                    }
                  >
                    Sign Up
                  </button>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
