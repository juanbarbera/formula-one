import { useState, useEffect } from 'react';
import { CarsHomeDesktop } from './CarsHomeDesktop';
import { CarsHomeMobile } from './CarsHomeMobile';

export const CarsHome = () => {
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
    isMobile ? <CarsHomeMobile /> : <CarsHomeDesktop /> 
  )
}

