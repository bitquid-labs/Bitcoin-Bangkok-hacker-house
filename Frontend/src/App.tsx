import React, { Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { appRoutes } from "./constants/route";
import MainLayout from "views/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
        {/* Same as */}
        <Routes>
          {appRoutes.map((item) => (
            <Route
              key={item.key}
              path={item.path}
              element={
                <Suspense fallback={null}>
                  {item.element && <item.element />}
                </Suspense>
              }
            />
          ))}
          <Route path="/" element={<Navigate to={"/stake"} />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
