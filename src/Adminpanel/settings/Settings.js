import React, { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "User Name",
    email: "user@example.com",
    password: "",
    confirmPassword: "",
    notifications: true,
  });

  const [generalSettings, setGeneralSettings] = useState({
    siteTitle: "My LMS",
    siteDescription: "An example Learning Management System",
  });

  const [courseSettings, setCourseSettings] = useState({
    maxCourseSize: 30,
    allowGuestAccess: false,
  });

  const handleChange = (e, setter) => {
    const { name, value, type, checked } = e.target;
    setter((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the settings
    console.log("Profile updated:", profile);
    console.log("General settings updated:", generalSettings);
    console.log("Course settings updated:", courseSettings);
  };

  return (
    <main className="flex-1 bg-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <form onSubmit={handleSubmit}>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={(e) => handleChange(e, setProfile)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={(e) => handleChange(e, setProfile)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={(e) => handleChange(e, setProfile)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={profile.confirmPassword}
              onChange={(e) => handleChange(e, setProfile)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Notifications</label>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={profile.notifications}
              onChange={(e) => handleChange(e, setProfile)}
              className="mr-2"
            />
            <label htmlFor="notifications">Enable Notifications</label>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">General Settings</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="siteTitle">
              Site Title
            </label>
            <input
              type="text"
              id="siteTitle"
              name="siteTitle"
              value={generalSettings.siteTitle}
              onChange={(e) => handleChange(e, setGeneralSettings)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="siteDescription">
              Site Description
            </label>
            <textarea
              id="siteDescription"
              name="siteDescription"
              value={generalSettings.siteDescription}
              onChange={(e) => handleChange(e, setGeneralSettings)}
              className="w-full px-3 py-2 border rounded"
            ></textarea>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Course Settings</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="maxCourseSize">
              Max Course Size
            </label>
            <input
              type="number"
              id="maxCourseSize"
              name="maxCourseSize"
              value={courseSettings.maxCourseSize}
              onChange={(e) => handleChange(e, setCourseSettings)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Allow Guest Access</label>
            <input
              type="checkbox"
              id="allowGuestAccess"
              name="allowGuestAccess"
              checked={courseSettings.allowGuestAccess}
              onChange={(e) => handleChange(e, setCourseSettings)}
              className="mr-2"
            />
            <label htmlFor="allowGuestAccess">Enable Guest Access</label>
          </div>
        </section>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
};

export default Settings;
