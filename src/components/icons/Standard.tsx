import { SVGAttributes } from 'react';

export const StandardIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17 2C8.71573 2 2 8.71573 2 17C2 25.2843 8.71573 32 17 32C25.2843 32 32 25.2843 32 17C32 12.5575 30.0687 8.56607 27 5.81947M10.3333 23.6667L23.6667 10.3333M15.3333 12C15.3333 13.8409 13.8409 15.3333 12 15.3333C10.1591 15.3333 8.66667 13.8409 8.66667 12C8.66667 10.1591 10.1591 8.66667 12 8.66667C13.8409 8.66667 15.3333 10.1591 15.3333 12ZM25.3333 22C25.3333 23.8409 23.8409 25.3333 22 25.3333C20.1591 25.3333 18.6667 23.8409 18.6667 22C18.6667 20.1591 20.1591 18.6667 22 18.6667C23.8409 18.6667 25.3333 20.1591 25.3333 22Z"
        stroke={props.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint_linear" x1="17" y1="2" x2="17" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5297DB"/>
          <stop offset="1" stopColor="#6D62D6"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
