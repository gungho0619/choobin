import { SVGAttributes } from 'react';

export const CustomizationIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32 17C32 25.2843 25.2843 32 17 32M32 17C32 8.71573 25.2843 2 17 2M32 17H2C2 25.2843 8.71573 32 17 32M17 32C17 32 23.6667 27 23.6667 17M17 32C17 32 10.3333 27 10.3333 17C10.3333 7 17 2 17 2M17 2C17 2 20.7037 4.77778 22.59 10.3333M17 2C12.5575 2 8.56607 3.93125 5.81947 7"
        stroke={props.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint_linear" x1="17" y1="2" x2="17" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5297DB"/>
          <stop offset="1" stopColor="#6D62D6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
