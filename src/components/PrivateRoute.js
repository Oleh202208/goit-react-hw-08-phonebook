import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggenId, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggenId && isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
