import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    <div className="relative sm:flex p-4 bg-[#13131a] min-h-screen">
      {/* Sidebar */}
      <div className="sm:w-1/6 hidden sm:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-screen-xl mx-auto sm:pl-5">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
