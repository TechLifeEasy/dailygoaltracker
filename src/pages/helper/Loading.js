import React from 'react';

export default function Loading() {
  return (

    <div className="flex items-center justify-center absolute w-full h-screen ">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden">*</span>
      </div>
    </div>

  );
}
