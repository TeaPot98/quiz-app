import { useState } from 'react'
import {
  Box,
} from '@mui/material'
import PriceButton from "./PriceButton"

const PricePicker = ({ onChange, price }) => {
  const styles = {
    container: {
      display: 'flex',
      gap: '1.2rem'
    },
    lastPrice: {
      width: '60px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      fontSize: '0.6rem',
      gap: '2px'
    },
    pointer: {
      height: '13px',
      width: '1px',
      backgroundColor: 'black'
    }
  }

  const handleClick = (p) => {
    onChange(p)
  }
  
  return (
    <Box sx={styles.container}>
      <PriceButton isActive={price === 1} onClick={handleClick} value={1}>$1</PriceButton>
      <PriceButton isActive={price === 5} onClick={handleClick} value={5}>$5</PriceButton>
      <PriceButton isActive={price === 9} onClick={handleClick} value={9}>$9</PriceButton>
      <Box sx={styles.lastPrice}>
        <PriceButton isActive={price === 13.21} onClick={handleClick} value={13.21}>$13.21</PriceButton>
        <div style={styles.pointer}></div>
        <span>MOST POPULAR CHOICE*</span>
      </Box>
    </Box>
  )
}

export default PricePicker