import { useState, useEffect } from 'react';
import { CircuitsHomeDesktop } from './CircuitsHomeDesktop';
import { CircuitsHomeMobile } from './CircuitsHomeMobile';

export const CircuitsHome = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const viewPortWidth = window.innerWidth;
    
    if (viewPortWidth <= 1100) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 1100 ? true : false);
    })
  }, [])

  return (
    isMobile ? <CircuitsHomeMobile /> : <CircuitsHomeDesktop /> 
  )
}

