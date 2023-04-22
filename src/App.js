import { useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import Signin from "./components/Pages/Signin";
import Account from "./components/Pages/Account";
import Signup from "./components/Pages/Signup";
import TesterPage from "./components/Pages/TesterPage";
import Calendar from "./components/Calendar";
import ProtectedRoute from "./components/ProtectedRoute";
import Menu from "./components/Menu";
import "./styles/globals.css";
import FileStore from "./components/FileStore";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthContextProvider>
          <Menu></Menu>
          
          <Routes>
            <Route path="/" element={<Signin />} />
            {/* <Route path="/register" element={<Signup />} /> */}
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="calendar"
              element={
                <ProtectedRoute>
                  <Calendar />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
