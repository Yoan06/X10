declare module 'react-transition-group' {
  import { ComponentType, ReactElement } from 'react';

  export interface TransitionProps {
    in?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    appear?: boolean;
    enter?: boolean;
    exit?: boolean;
    timeout: number | { enter?: number; exit?: number };
    classNames?: string | {
      appear?: string;
      appearActive?: string;
      appearDone?: string;
      enter?: string;
      enterActive?: string;
      enterDone?: string;
      exit?: string;
      exitActive?: string;
      exitDone?: string;
    };
    children: ReactElement;
  }

  export interface TransitionGroupProps {
    component?: ComponentType<any> | string;
    children?: ReactElement | ReactElement[];
  }

  export const TransitionGroup: ComponentType<TransitionGroupProps>;
  export const CSSTransition: ComponentType<TransitionProps>;
} 