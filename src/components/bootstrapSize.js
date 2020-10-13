import { useState, useLayoutEffect } from 'react';

const useBootstrapSize = () => {

  function getViewport() {
    // https://stackoverflow.com/a/8876069
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    if (width <= 576) return 'xs'
    if (width <= 768) return 'sm'
    if (width <= 992) return 'md'
    if (width <= 1200) return 'lg'
    return 'xl'
  }

  const [windowSize, setWindowSize] = useState('')
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(getViewport())
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [])

  return windowSize
}

export default useBootstrapSize
