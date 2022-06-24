const ProgressBar = ({ color, completed, index}) => {
  const styles = {
    container: {
      height: 6,
      width: '100%',
      backgroundColor: "#e5eafa",
      // borderRadius: 50,
      marginTop: 20,
      marginBottom: 15,
      position: 'relative',
    },
    fillBar: {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: color,
      borderRadius: 'inherit',
      textAlign: 'right'
    },
    label: {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    },
    endCircle: {
      backgroundColor: completed !== 100 ? '#e5eafa' : color,
      width: 20,
      height: 20,
      borderRadius: 10,
      position: 'absolute',
      right: 0,
      top: -7,
    }
  }
  
  return (
    <div style={styles.container}>
      <div style={styles.fillBar}>
        {/* <span style={styles.label}>{`${completed}%`}</span> */}
      </div>
      <div style={styles.endCircle}>{index}</div>
    </div>
  )
}

export default ProgressBar