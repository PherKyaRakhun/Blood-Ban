import { Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
import Home from "./pages/HomePage.jsx";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute.jsx";
import PublicRoute from "./components/Routes/PublicRoute.jsx";
import Donar from "./pages/Dashboard/donar.jsx";
import Hospitals from "./pages/Dashboard/Hospitals.jsx";
import OrganizationPage from "./pages/Dashboard/OrganizationPage.jsx";
import Consumer from "./pages/Dashboard/Consumer.jsx";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/organization"
          element={
            <ProtectedRoute>
              <OrganizationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoute>
              <Consumer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              {/* <Navigate to="/login" /> */}
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
