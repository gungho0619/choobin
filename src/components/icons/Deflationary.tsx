import { SVGAttributes } from 'react';

export const DeflationaryIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32 17C32 25.2843 25.2843 32 17 32C8.71573 32 2 25.2843 2 17C2 8.71573 8.71573 2 17 2M17 2V17M17 2C21.7121 2 25.9167 4.17278 28.6667 7.57111M17 17L27.5924 27.5924M17 17H8.66667"
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
