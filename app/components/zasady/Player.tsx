"use client";

export const Player = ({ source }: { source: string }) => {
  return (
    <audio controls className='mt-10'>
      <source src={source} type='audio/mpeg' />
    </audio>
  );
};
