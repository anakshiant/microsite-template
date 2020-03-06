import React, { Suspense } from 'react';

const LazyLoadContainer: React.FC = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div>
          <h1>loading...</h1>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default LazyLoadContainer;
