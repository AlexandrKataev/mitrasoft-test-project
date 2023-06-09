import { FC, SVGProps } from 'react';

export const ItemIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={'16px'}
      fill={'#dbdddf'}
      {...props}
      viewBox="0 0 37 37"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="18.5" cy="18.5" r="18.5" />
    </svg>
  );
};
