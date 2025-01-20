import React from 'react';
import SideNav from './SideNav';

const SecuritySettings = ({ securitySettings, setSecuritySettings }) => {
  return (
    <div className="flex flex-col md:flex-row font-noto">
      {/* Sidebar */}
      <SideNav />
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Security Settings</h2>
      <div>
        <label className="block">Two-Factor Authentication: </label>
        <input
          type="checkbox"
          checked={securitySettings.twoFactor}
          onChange={() => setSecuritySettings({ ...securitySettings, twoFactor: !securitySettings.twoFactor })}
          className="mr-2"
        />
      </div>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Change Password</button>
    </section>
    </div>
  );
};

export default SecuritySettings;
