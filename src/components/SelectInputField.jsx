import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'

const SelectInputField = ({ label, value, onChange, dataList }) => {
  const styles = {
    container: {
      my: '0.4rem',
      width: '90%',
    },
  }
  
  return (
    <FormControl sx={styles.container} size="small" fullWidth>
      <InputLabel id={`${label.toLowerCase()}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label.toLowerCase()}-label`}
        id={`${label.toLowerCase()}-select`}
        value={value}
        label={label}
        onChange={onChange}
      >
        {dataList.map(i => 
          <MenuItem key={i} value={i}>{i}</MenuItem>
        )}
      </Select>
    </FormControl>
  )
}

export default SelectInputField