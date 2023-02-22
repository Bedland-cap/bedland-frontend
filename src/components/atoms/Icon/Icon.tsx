import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import { ColorNames, PaletteType, Theme } from 'theme/theme.types';
import { getIcon, IconItem, IconName } from './icons.utils';

export type IconProps = {
  name: IconName;
  color: ColorNames;
  size: number;
  isActive: boolean;
  activeColor: ColorNames;
};

const Icon = ({
  name,
  size = 16,
  color = 'default',
  isActive = false,
  activeColor = 'primaryLight',
}: PropsWithChildren<IconProps>) => {
  const icon: IconItem = getIcon(name);
  const { palette }: Theme = useContext(ThemeContext);

  const getFillColor = (isPathFill: boolean | undefined) => {
    if (isPathFill) {
      return isActive
        ? palette[activeColor as keyof PaletteType]
        : palette[color as keyof PaletteType];
    }
    return undefined;
  };

  return (
    <svg
      viewBox={icon.viewBox}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
    >
      <mask id={`mask-${name}`} fill={icon.mask?.fill}>
        {icon.mask
          ? icon.mask.path.map((p) => (
              <path fillRule='evenodd' clipRule='evenodd' d={p.d} key={`path-${p.id}`} />
            ))
          : null}
      </mask>
      {icon.path.map((p) => (
        <path
          key={`path-${p.id}`}
          d={p.d}
          stroke={
            isActive
              ? palette[activeColor as keyof PaletteType]
              : palette[color as keyof PaletteType]
          }
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={p.strokeWidth}
          fill={getFillColor(p.isPathFill)}
          mask={p.isMask ? `url(#mask-${name})` : undefined}
        />
      ))}
    </svg>
  );
};

export default Icon;
