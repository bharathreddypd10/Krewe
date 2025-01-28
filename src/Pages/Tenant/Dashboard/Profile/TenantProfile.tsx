import './TenantProfile.css';

const TenantProfile = () => {
  return (
    <div className="container">
      <div id="page" className="page">
        <main id="page-content" className="page-content">
          <div id="appShell" className="app-shell">
            <div className="main-content">
              {/* Sidebar */}
              <aside id="sidebar-left" className="sidebar">
                <div className="app-rail">
                  {/* Sidebar Top */}
                  <div className="app-bar-lead"></div>
                  {/* Sidebar Links */}
                  <div className="app-bar-default">
                    <a className="app-rail-anchor" href="/tenant/dashboard/profile">
                      <div className="app-rail-wrapper selected">
                        <div className="app-rail-label">
                          <span className="app-rail-text">Profile</span>
                        </div>
                      </div>
                    </a>
                    <a className="app-rail-anchor" href="/tenant/dashboard/group">
                      <div className="app-rail-wrapper">
                        <div className="app-rail-label">
                          <span className="app-rail-text">My Krewe</span>
                        </div>
                      </div>
                    </a>
                    <a className="app-rail-anchor" href="/tenant/dashboard/saved_searches">
                      <div className="app-rail-wrapper">
                        <div className="app-rail-label">
                          <span className="app-rail-text">Saved Filters</span>
                        </div>
                      </div>
                    </a>
                    <a className="app-rail-anchor" href="/tenant/dashboard/applications">
                      <div className="app-rail-wrapper">
                        <div className="app-rail-label">
                          <span className="app-rail-text">Applications</span>
                        </div>
                      </div>
                    </a>
                    <a className="app-rail-anchor" href="/tenant/dashboard/contracts">
                      <div className="app-rail-wrapper">
                        <div className="app-rail-label">
                          <span className="app-rail-text">Contracts</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* Sidebar Bottom */}
                  <div className="app-bar-trail">
                    <a className="app-rail-anchor" href="/tenant/dashboard/update_password">
                      <div className="app-rail-wrapper">
                        <div className="app-rail-label">Update Password</div>
                      </div>
                    </a>
                  </div>
                </div>
              </aside>
              {/* Main Content */}
              <div id="page" className="page">
                <main id="page-content" className="page-content">
                  <div className="profile-container">
                    <h2 className="profile-title">Your Tenant Profile</h2>
                    <div className="profile-avatar">
                      <figure className="avatar">
                        <img
                          className="avatar-image"
                          // src="https://kgrepiesjdtnqseqlxvd.supabase.co/storage/v1/object/public/avatars/3abeb00b-31d9-4c15-9ecb-a0513ee41f2c/avatar_1737099208981"
                          src="#"
                          alt="Profile"
                        />
                      </figure>
                    </div>
                    {/* Upload Picture */}
                    <form action="?/upload_avatar" method="post" className="upload-form">
                      <div className="form-control">
                        <label htmlFor="image" className="label">
                          Picture
                        </label>
                        <input type="file" name="image" accept="image/png, image/jpeg" />
                      </div>
                      <button type="submit" className="btn">
                        Upload Picture
                      </button>
                    </form>
                    {/* Update Profile */}
                    <form action="?/update_profile" method="post" className="update-form">
                      <div className="form-row">
                        <div className="form-control">
                          <label htmlFor="first_name" className="label">
                            First Name
                          </label>
                          <input type="text" name="first_name" className="input" />
                        </div>
                        <div className="form-control">
                          <label htmlFor="last_name" className="label">
                            Last Name
                          </label>
                          <input type="text" name="last_name" className="input" />
                        </div>
                      </div>
                      <button type="submit" className="btn">
                        Update Profile
                      </button>
                    </form>
                    {/* Action Buttons */}
                    <div className="action-buttons">
                      <p><button className="btn">Connect Bank</button></p>
                      <p><button className="btn">Get Verified</button></p>   
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TenantProfile
