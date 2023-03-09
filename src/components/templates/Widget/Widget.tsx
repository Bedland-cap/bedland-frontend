import Typography from 'components/atoms/Typography/Typography';
import IconButton from 'components/atoms/IconButton/IconButton';
import { PropsWithChildren, useContext } from 'react';

import { ThemeContext } from 'theme/ThemeContext';
import { defaultWidgetProps, WidgetProps, WidgetSize } from './Widget.types';
import * as Styled from './Widget.styled';

const variantToSize: WidgetSize = {
  notifications: {
    minWidth: '31.375rem',
    minHeight: '22.125rem',
  },
  payments: {
    minWidth: '30.875rem',
    minHeight: '22.125rem',
  },
  contacts: {
    minWidth: '24.875rem',
    minHeight: '25rem',
  },
  votings: {
    minWidth: '37.5rem',
    minHeight: '25rem',
  },
} as const;

const Widget = ({
  variant,
  title,
  mode = 'dark',
  isArrowButton = false,
  onClick,
  children,
}: PropsWithChildren<WidgetProps>) => {
  const { palette } = useContext(ThemeContext);

  return (
    <Styled.WidgetElement
      palette={palette}
      mode={mode}
      minHeight={variantToSize[variant].minHeight}
      minWidth={variantToSize[variant].minWidth}
    >
      <Styled.WidgetHeader mode={mode} palette={palette}>
        <Typography
          variant='widgetTitle'
          color={mode === 'light' ? 'primaryDark' : 'widgetBackground'}
        >
          {title}
        </Typography>
        {isArrowButton ? (
          <IconButton
            icon='arrowRight'
            color={mode === 'light' ? 'primaryDark' : 'widgetBackground'}
            size={24}
            onClick={onClick}
          />
        ) : null}
      </Styled.WidgetHeader>
      {children}
    </Styled.WidgetElement>
  );
};

Widget.defaultProps = defaultWidgetProps;

export default Widget;
