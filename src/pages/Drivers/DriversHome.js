import { useState, useEffect } from 'react';
import { DriversHomeDesktop } from './DriversHomeDesktop';
import { DriversHomeMobile } from './DriversHomeMobile';

export const DriversHome = () => {
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
    isMobile ? <DriversHomeMobile /> : <DriversHomeDesktop /> 
  )
}

