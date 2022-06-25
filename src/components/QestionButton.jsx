import Button from './Button'

const QuestionButton = ({ children, onClick = () => {}, isSelected = false, href }) => {
  const styles = {
    questionButton: {
      width: '90%',
      display: 'flex',
      my: '1rem',
      mx: 'auto',
      borderRadius: '10px',
      "&:hover": {
        backgroundColor: isSelected ? '#066FDE' : '#EFF2FD'
      },
      "&:active": {
        outline: isSelected && '5px solid #dee5f9'
      },
      transition: 'background-color 0.15s ease 0s'
    }
  }
  
  return (
    <Button 
      onClick={onClick}
      sx={styles.questionButton}
      secondaryColor={!isSelected}
      href={href}
    >
      {children}
    </Button>
  )
}

export default QuestionButton