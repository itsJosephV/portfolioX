import { Skeleton } from '@nextui-org/react';
import React from 'react'

const CardSkeleton = () => {
  return (
    <Skeleton>
      <div className="h-60"></div>
    </Skeleton>
  );
};

export default CardSkeleton