import { Skeleton } from '@nextui-org/react';
import React from 'react'

const CardSkeleton = () => {
  return (
    <Skeleton>
      <div className="w-full h-60 rounded-none border-b border-neutral-700"></div>
    </Skeleton>
  );
};

export default CardSkeleton