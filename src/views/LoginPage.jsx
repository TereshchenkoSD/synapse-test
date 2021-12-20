import LoginForm from '../components/Forms/LoginForm';
import Title from '../components/Title';
import FormContainer from '../components/Forms/FormContainer';

const LoginPage = ({ getCurrentUser }) => {
  return (
    <FormContainer>
      <Title text={'Sign In'} />
      <LoginForm getCurrentUser={getCurrentUser} />
    </FormContainer>
  );
};

export default LoginPage;
