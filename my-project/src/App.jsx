import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import home from "./assets/home4.jpg";

// Pages
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen" style={{
          backgroundImage: `url(${home})`,
          backgroundSize: 'auto 73%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Protected Routes */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <div className="min-h-screen flex items-center justify-center">
                      <h1 className="text-2xl font-bold">User Dashboard - Coming Soon</h1>
                    </div>
                  </ProtectedRoute>
                } 
              />
              
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute adminOnly>
                    <div className="min-h-screen flex items-center justify-center">
                      <h1 className="text-2xl font-bold">Admin Dashboard - Coming Soon</h1>
                    </div>
                  </ProtectedRoute>
                } 
              />

              {/* Public Routes */}
              <Route 
                path="/therapists" 
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-2xl font-bold">Therapists - Coming Soon</h1>
                  </div>
                } 
              />
              
              <Route 
                path="/courses" 
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-2xl font-bold">Courses - Coming Soon</h1>
                  </div>
                } 
              />
              
              <Route 
                path="/blog" 
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-2xl font-bold">Blog - Coming Soon</h1>
                  </div>
                } 
              />
              
              <Route 
                path="/contact" 
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-2xl font-bold">Contact - Coming Soon</h1>
                  </div>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;