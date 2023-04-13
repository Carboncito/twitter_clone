import { ViewProps as RNViewProps } from 'react-native';

type ViewFlexPosition = 'flex-start' | 'flex-end' | 'center';
type ViewSpace = 'space-between' | 'space-around' | 'space-evenly';

export interface ViewProps extends RNViewProps {
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;

  flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  justifyContent?: ViewFlexPosition | ViewSpace;
  alignItems?: ViewFlexPosition | 'stretch' | 'baseline';

  width?: number | string;
  relative?: boolean;
  absolute?: boolean;
}
