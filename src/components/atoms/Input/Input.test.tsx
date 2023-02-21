import renderer from 'react-test-renderer';
import { useForm } from 'react-hook-form';
import ThemeProvider from 'theme/ThemeContext';
import Input from './Input';

const SnapshotInput = () => {
  const { register } = useForm();
  return (
    <ThemeProvider>
      <form action=''>
        <Input
          input='login'
          type='text'
          placeholder='login'
          register={register}
        />
      </form>
    </ThemeProvider>
  );
};

describe('Input', () => {
  it('renders correctly', () => {
    const snapshot = renderer.create(<SnapshotInput />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
