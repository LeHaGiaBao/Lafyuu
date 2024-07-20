/* eslint-disable react/react-in-jsx-scope */
import {memo} from 'react';
import IcoMoon, {IconProps} from 'react-icomoon';
import {Svg, Path} from 'react-native-svg';
import iconSet from './selection.json';

function Icon(props: IconProps) {
  return (
    <IcoMoon
      native
      SvgComponent={Svg}
      PathComponent={Path}
      iconSet={iconSet}
      {...props}
    />
  );
}

export default memo(Icon);
