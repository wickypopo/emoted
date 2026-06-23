import { Route, Routes } from "react-router-dom";
import Onboarding from "./pages/onboarding/Onboarding";
import Profile from "./pages/Profile/Profile";
import { useState } from "react";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Keyboard />
    </>
  );
}

export default App;
