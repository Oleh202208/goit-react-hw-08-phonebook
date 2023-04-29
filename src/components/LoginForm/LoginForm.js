import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import {
  LogInForm,
  LoginTitle,
  Label,
  Input,
  Button,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const { email, password } = form.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <LogInForm onSubmit={handleSubmit} autoComplete="off">
      <LoginTitle>Authorization</LoginTitle>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>

      <Label>
        Password
        <Input type="password" name="password" />
      </Label>

      <Button type="submit">Log In</Button>
    </LogInForm>
  );
};
