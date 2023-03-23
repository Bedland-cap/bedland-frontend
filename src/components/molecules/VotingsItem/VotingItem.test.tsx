import { renderWithProviders } from 'utils/test.utils';
import Badge from 'components/atoms/Badge/Badge';
import VotingsItem, { VotingsItemProps } from './VotingsItem';
import { addLeadingZero, dateDiffinDays, switchVariant } from './VotingsItem.utils';

describe('VotingsItem', () => {
  const item = ({ deadlineDate }: VotingsItemProps) =>
    renderWithProviders(<VotingsItem deadlineDate={deadlineDate} />, {});

  it('should renders correctly VotingsItem', () => {
    expect(
      item({
        deadlineDate: new Date(),
      }),
    ).toMatchSnapshot();
  });
  it('dateDiffinDays should calculate correctly positive difference between two dates', () => {
    const result = dateDiffinDays(new Date(2023, 3, 19), new Date(2023, 3, 21));
    expect(result).toEqual(2);
  });
  it('dateDiffinDays should calculate correctly negative difference between two dates', () => {
    const result = dateDiffinDays(new Date(2023, 3, 21), new Date(2023, 3, 19));
    expect(result).toEqual(-2);
  });

  it('addLeadingZero should add 0 at the beginning when result is less than 10 ', () => {
    const result = addLeadingZero(new Date(2023, 3, 5).getMonth() + 1);
    expect(result).toEqual('04');
  });
  it('addLeadingZero shouldnt add 0 at the beginning when result is bigger than 10 ', () => {
    const result = addLeadingZero(new Date(2023, 10, 5).getMonth() + 1);
    expect(result).toEqual('11');
  });
  it('switch variant switches correctly variants', () => {
    const result = switchVariant(new Date(2023, 10, 5), new Date(2023, 10, 6));
    expect(result).toEqual(
      <Badge variant='danger'>
        {dateDiffinDays(new Date(2023, 10, 5), new Date(2023, 10, 6))} left
      </Badge>,
    );
  });
});
