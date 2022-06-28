import { useEffect, useState } from 'react'

import { Box } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const MovingArrow = () => {
  const firstMargin = 3
  const secondMargin = 6
  const [margin, setMargin] = useState(firstMargin)
  const styles = {
    container: {
      height: '70px',
    },
    arrowIcon: {
      transform: 'rotate(90deg)',
      mt: margin,
      transition: 'margin 1.5s ease'
    },
  }
 
  useEffect(() => {
    const interval = setInterval(() => {
      // switchMargin()
      if (margin === firstMargin) {
        setMargin(secondMargin)
      } else {
        setMargin(firstMargin)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [margin])
  
  
  return (
    <Box sx={styles.container}>
      <ArrowForwardIosIcon sx={styles.arrowIcon} />
    </Box>
  )
}

export default MovingArrow