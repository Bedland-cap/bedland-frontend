import { ChildBox } from 'components/templates/MainBody/MainBody.styled';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const nav = useNavigate();

  return (
    <ChildBox backgroundColor='#f5f6f8'>
      <button
        type='button'
        style={{ width: '50px', height: '50px' }}
        onClick={() => nav('/')}
      >
        Go Back to Login Page
      </button>
    </ChildBox>
  );
};

export default DashboardPage;
