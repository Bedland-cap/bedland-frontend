import { CSSProperties, PropsWithChildren, useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import { ColorNames, TypographyName } from 'theme/theme.types';

const variantToElement = {
  header1: 'h1',
  header2: 'h2',
  subtitles: 'h2',
  header3: 'h3',
  header4: 'h4',
  header5: 'h5',
  subHeader: 'h5',
  paragraph: 'p',
  dataInputsAndTooltips: 'p',
  unerlined: 'p',
  captions: 'p',
} as const;

export type TypographyProps = {
  variant?: TypographyName;
  color?: ColorNames;
  style?: CSSProperties;
};

const defaultProps: TypographyProps = {
  variant: 'paragraph',
  color: 'text',
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
