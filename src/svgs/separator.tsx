import React from 'react';
import { Props } from './types';

const Separator: React.FC<Props> = props => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 82 647'
      {...props}
    >
      <path stroke='#333A40' d='M81 1L1 646' />
    </svg>
  );
};

export default Separator;
