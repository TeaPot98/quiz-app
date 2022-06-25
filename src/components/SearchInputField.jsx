import {
  TextField
} from '@mui/material'

const SearchInputField = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
    />
  )
}

export default SearchInputField