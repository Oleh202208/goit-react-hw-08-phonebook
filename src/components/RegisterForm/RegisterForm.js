import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import {
  RegisterTitle,
  RegForm,
  Label,
  Input,
  Button,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <RegForm onSubmit={handleSubmit} autoComplete="off">
      <RegisterTitle>Registration</RegisterTitle>
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>

      <Button type="submit">Register</Button>
    </RegForm>
  );
};
