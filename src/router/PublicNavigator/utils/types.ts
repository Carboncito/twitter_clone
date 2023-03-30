import { ReactNode } from 'react';

export interface HederProps {
  withHeader?: boolean;
  withBackButton?: boolean;
  title?: string;
  rightComponent?: () => ReactNode;
}
