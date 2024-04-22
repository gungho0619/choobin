import { SVGAttributes } from 'react';

export const CloseIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 1L1 21M1.00002 1L21 21" stroke="#ECFDFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
