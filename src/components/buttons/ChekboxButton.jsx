import Button from "./Button"
import CheckIcon from '@mui/icons-material/Check';

const CheckboxButton = ({ children, isChecked, onClick }) => {
  const styles = {
    button: {
      borderRadius: '10px',
      position: 'relative',
      my: '0.4rem',
      width: '90%'
    },
    icon: {
      padding: '5px',
      position: 'absolute',
      backgroundColor: 'white',
      borderRadius: '15px',
      right: '20px',
      color: theme => isChecked ? theme.palette.primary.main : 'white',
      fontSize: '1rem',
      transition: 'color 0.15s ease-in-out '
    }
  }
  
  return (
    <Button
      sx={styles.button}
      onClick={onClick}
      secondaryColor={!isChecked}
      fullWidth
      checkbox
    >
      {children}
      <CheckIcon sx={styles.icon} />
    </Button>
  )
}

export default CheckboxButton