import React from 'react'
import { ThreeCircles } from 'react-loader-spinner';

export default function Loading() {
    
  return <ThreeCircles
    visible={true}
    height="100"
    width="100%"
    color="#DA0A22"
    innerCircleColor="#FFD43B"
    middleCircleColor="#303841"
    ariaLabel="three-circles-loading"
    wrapperStyle={{}}
    wrapperClass="flex items-center justify-center bg-[#00000047] h-screen z-30"
    />;
}
