import { SVGAttributes } from 'react';

export const LaunchpadIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32 17V7H20.3333C17.5719 7 15.3333 9.23858 15.3333 12C15.3333 14.7614 17.5719 17 20.3333 17H27M20.3333 12V12.0167M17 2H5.33333C3.49238 2 2 3.49238 2 5.33333V18.6667C2 20.5076 3.49238 22 5.33333 22H8.66667M23.6667 2H28.6667C30.5076 2 32 3.49238 32 5.33333V18.6667C32 20.5076 30.5076 22 28.6667 22H15.3333"
        stroke={props.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint_linear" x1="17" y1="2" x2="17" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5297DB"/>
          <stop offset="1" stopColor="#6D62D6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
