import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <div>
      <Helmet>
        <h2>Registration</h2>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;
