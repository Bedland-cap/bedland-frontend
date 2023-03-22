import Typography from 'components/atoms/Typography/Typography';
import IconButton from 'components/atoms/IconButton/IconButton';
import { PropsWithChildren, useContext } from 'react';

import { ThemeContext } from 'theme/ThemeContext';
import { defaultWidgetProps, WidgetProps } from './Widget.types';
import * as Styled from './Widget.styled';
import variantToSize from './Widget.utils';

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
