import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { currentUser, userRole } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && userRole !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  // if (role && userRole !== role) {
  //   return <Navigate to="/" replace />; // redirect if wrong role
  // }

  return children;
};

export default ProtectedRoute;