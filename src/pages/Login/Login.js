import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <div>
      <Helmet>
        <h2>Login</h2>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default Login;
