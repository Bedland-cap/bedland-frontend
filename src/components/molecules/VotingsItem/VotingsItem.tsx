import Icon from 'components/atoms/Icon/Icon';
import IconButton from 'components/atoms/IconButton/IconButton';
import Typography from 'components/atoms/Typography/Typography';
import { useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import * as Styled from './VotingsItem.styled';
import { dateDiffinDays, addLeadingZero, switchVariant } from './VotingsItem.utils';

export type VotingsItemProps = {
  deadlineDate: Date;
};

const VotingsItem = ({ deadlineDate }: VotingsItemProps) => {
  const { palette } = useContext(ThemeContext);

  const newDeadlineDate = new Date(deadlineDate);
  const curDate = new Date();

  const dataForm = `${addLeadingZero(
    newDeadlineDate.getMonth() + 1,
  )}/${newDeadlineDate.getFullYear()}`;

  return (
    <Styled.VotingsItemContainer palette={palette}>
      <Icon name='document' color='inputGrey' size={20} isActive={false} />
      <Typography
        variant='header4'
        style={{
          marginLeft: '1.188rem',
          flex: 1,
          fontWeight: dateDiffinDays(curDate, newDeadlineDate) < 0 ? '400' : '600',
        }}
        color='inputGrey'
      >
        Resolution {dataForm}
      </Typography>
      <Typography
        variant='header4'
        color='inputGrey'
        style={{ fontWeight: dateDiffinDays(curDate, newDeadlineDate) < 0 ? '400' : '600' }}
      >
        {switchVariant(curDate, newDeadlineDate)}
      </Typography>
      <Styled.IconWrapper>
        <IconButton icon='arrowRight' color='inputGrey' size={20} onClick={() => null} />
      </Styled.IconWrapper>
    </Styled.VotingsItemContainer>
  );
};

export default VotingsItem;
