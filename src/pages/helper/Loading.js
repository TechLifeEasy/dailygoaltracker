import React from 'react';

export default function Loading() {
  return (

    <div class="flex items-center justify-center absolute w-full h-screen ">
      <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span class="visually-hidden">*</span>
      </div>
    </div>

  );
}
