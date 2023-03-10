import { CSSProperties, PropsWithChildren, useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import { ColorNames, TypographyName } from 'theme/theme.types';

const variantToElement = {
  pageTitle: 'h2',
  sectionTitle: 'h2',
  sidebarItem: 'span',
  paragraph: 'p',
  caption: 'p',
  widgetTitle: 'h5',
  cardTitle: 'h3',
  messageItem: 'h4',
  error: 'p',
  subHeader: 'h6',
  header5: 'h5',
  logout: 'p',
  notificationItem:'h4'
} as const;

export type TypographyProps = {
  variant?: TypographyName;
  color?: ColorNames;
  style?: CSSProperties;
};

const defaultProps: TypographyProps = {
  variant: 'paragraph',
  color: 'default',
  style: {},
};

const Typography = ({ variant, style, color, children }: PropsWithChildren<TypographyProps>) => {
  const { palette, typography } = useContext(ThemeContext);
  const Element = variantToElement[variant ?? 'paragraph'];

  const colorStyles: CSSProperties = {
    color: color ? palette[color] : 'none',
  };

  return (
    <Element
      style={{
        ...typography[variant ?? 'paragraph'],
        ...colorStyles,
        ...style,
      }}
    >
      {children}
    </Element>
  );
};

Typography.defaultProps = defaultProps;

export default Typography;
