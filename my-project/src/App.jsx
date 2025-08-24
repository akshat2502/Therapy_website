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
import Admin from './pages/admin/AdminDashboard';
import Contact from './pages/Contact';
import FaqSection from './pages/Faq';
import Booking from './pages/Booking';
import Resources from './pages/Blogs';

function App() {
  
  return (
    <AuthProvider>
      <Router>
        {/* <div className="flex flex-col min-h-screen" style={{
          backgroundImage: `url(${home})`,
          backgroundSize: 'auto 73%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}> */}
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
                    <Admin />
                    </div>
                  </ProtectedRoute>
                } 
              />

              {/* Public Routes */}
              <Route 
                path="/booking" 
                element={<Booking />} 
              />
              
              <Route 
                path="/courses" 
                // element={} 
              />
              
              <Route 
                path="/blog" 
                element={<Resources />} 
              />
              
              <Route 
                path="/contact" 
                element={<Contact />} 
              />
              <Route 
                path="/faq" 
                element={<FaqSection />} 
              />
            </Routes>
          </main>
          <Footer />
        {/* </div> */}
      </Router>
    </AuthProvider>
  );
}

export default App;