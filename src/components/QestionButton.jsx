import Button from './Button'

const QuestionButton = ({ children, onClick = () => {}, isSelected = false }) => {
  const styles = {
    questionButton: {
      width: '90%',
      display: 'flex',
      my: '0.9rem',
      mx: 'auto',
      borderRadius: '10px',
      "&:hover": {
        backgroundColor: theme => isSelected ? theme.palette.button.main : theme.palette.button.secondary
      },
      "&:active": {
        outline: theme => isSelected && `5px solid ${theme.palette.button.outline}`
      },
      transition: 'background-color 0.15s ease'
    }
  }
  
  return (
    <Button 
      onClick={onClick}
      sx={styles.questionButton}
      secondaryColor={!isSelected}
      // href={href}
    >
      {children}
    </Button>
  )
}

export default QuestionButton