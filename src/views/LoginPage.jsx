import LoginForm from '../components/Forms/LoginForm';
import Title from './components/Title';
import FormContainer from './components/Forms/FormContainer';

const LoginPage = () => {
  return (
    <FormContainer>
      <Title text={'Sign In'} />
      <LoginForm />
    </FormContainer>
  );
};

export default LoginPage;
