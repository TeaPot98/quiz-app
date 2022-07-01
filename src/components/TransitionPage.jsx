import {
  Box, 
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

// import startImage from '../assets/start-logo.png'
import comet from '../assets/comet.svg'
import clock from '../assets/clock.svg'
import key from '../assets/key.svg'
import magnifyingGlass from '../assets/magnifying-glass.svg'
import sun from '../assets/sun.svg'
import umbrella from '../assets/umbrella.svg'
import arrow from '../assets/arrow.svg'
import compass from '../assets/compass.svg'
import clouds from '../assets/clouds.svg'
import heart from '../assets/heart.svg'
import head from '../assets/head.svg'
import both from '../assets/both.svg'
import Button from './Button'
import UserReview from './UserReview'
// import '../animations.css'

const TransitionPage = ({ content }) => {
  // let contentImage = startImage
  const navigate = useNavigate()
  const theme = useTheme()
  const styles = {
    container: {
      textAlign: 'center',
    },
    image: {
      width: '300px'
    },
    title: {
      fontWeight: 500,
      my: '0.5rem',
      mx: '3rem'
    },
    text: {
      my: '0.5rem',
      mx: '3rem'
    },
    smallText: {
      fontSize: '0.75rem',
      my: '1rem',
      mx: '3rem'
    },
    orangeText: {
      color: theme.palette.secondary.orange,
      fontWeight: 500,
    },
    greenText: {
      color: theme.palette.secondary.green,
      fontWeight: 500,
    },
    blueText: {
      color: theme.palette.primary.main,
      fontWeight: 500,
    }
  }
  let transitionImage = comet

  switch (content.path) {
    case 'profile-goal-setup':
      transitionImage = comet
      break
    case 'no-time-of-birth':
      transitionImage = clock
      break
    case 'traits-started-unhappy':
    case 'traits-started-happens':
    case 'traits-started-compatible':
    case 'relationship-covered':
    case 'relationship-better':
    case 'relationship-wonder':
      transitionImage = key
      break
    case 'tailoring':
    case 'patterns-started':
      transitionImage = magnifyingGlass
      break
    case 'traits-data':
    case 'well-done':
      transitionImage = sun
      break
    case 'traits-data-umbrella':
    case 'not-alone':
      transitionImage = umbrella
      break
    case 'patterns-zodiac-archery':
      transitionImage = arrow
      break
    case 'patterns-zodiac-compass':
      transitionImage = compass
      break
    case 'patterns-zodiac-clouds':
      transitionImage = clouds
      break
    case 'patterns-heart':
      transitionImage = heart
      break
    case 'patterns-head':
      transitionImage = head
      break
    case 'patterns-both':
      transitionImage = both
      break
    default:
      break
  }

  const renderTransitionText = () => {
    switch (content.path) {
      case 'traits-started-unhappy':
      case 'traits-started-happens':
      case 'traits-started-compatible':
        return (
          <>
            <Typography sx={styles.title} >{content.text[0]}</Typography>
            <Typography sx={styles.text}>Now, we need some information about your <span style={styles.orangeText}>Personality Traits</span> to dig deeper!</Typography>
          </>
        )
      case 'relationship-covered':
      case 'relationship-better':
      case 'relationship-wonder':
        return (
          <>
            <Typography sx={styles.title} >{content.text[0]}</Typography>
            <Typography sx={styles.text}>Now, we need some information about <span style={styles.orangeText}>Your Partner's Profile</span> to craft the astrological synastry blueprint between you and your partner.</Typography>
          </>
        )
      case 'tailoring':
        return (
          <>
            <Typography sx={styles.title}>Almost there! Now let's begin tailoring your plan by understanding your <span style={styles.greenText}>Relationship & Personality Pattern</span>.</Typography>
            <Typography sx={styles.text} >{content.text[1]}</Typography>
          </>
        )
      case 'patterns-started':
        return (
          <>
            <Typography sx={styles.title}>Almost there! Now let's tailor your plan by understanding the <span style={styles.greenText}>Relationship Pattern</span>.</Typography>
            <Typography sx={styles.text} >{content.text[1]}</Typography>
          </>
        )
      case 'traits-data-umbrella':
        return (
          <>
            <Typography sx={styles.title}>You’re not alone. A lot of <span style={styles.blueText}>Virgo</span> people find it difficult to control emotions due to their zodiac sign traits. Don’t worry, we know how to address that!</Typography>
          </>
        )
      case 'traits-data':
        return (
          <>
            <Typography sx={styles.title}>All right! You keep your emotions in check <span style={styles.blueText}>Virgo</span> but sometimes people might want you to show more passion. We can give you some insights about that!</Typography>
          </>
        )
      case 'well-done':
        return (
          <>
            <Typography sx={styles.title}>Well done! Based on our data only the top 79% of <span style={styles.blueText}>Virgo</span> find it easy to communicate with their <span style={styles.blueText}>Taurus</span> partner.</Typography>
          </>
        )
      case 'not-alone':
        return (
          <>
            <Typography sx={styles.title}>You’re not alone. Based on our data 79% of <span style={styles.blueText}>Virgo</span> find it difficult to communicate with their <span style={styles.blueText}>Taurus</span> partner. We can help you improve this.</Typography>
          </>
        )
      case 'strengthen-emotional-connection':
          return (
            <>
              <Typography sx={styles.title}>Hint helps to <span style={styles.blueText}>strengthen emotional and sexual connection*</span></Typography>
              <UserReview userName="Sarah">"It's been a great relief finding the right words to say and changing my perspective on my relationship with myself and my partner."</UserReview>
              <Typography sx={styles.smallText}>*78% of users who use Hint and adopt astrological guidance can expect to see positive changes every week.</Typography>
            </>
          )
      case 'patterns-zodiac-archery':
        return (
          <>
            <Typography sx={styles.title}>You’ve come to the right place, <span style={styles.blueText}>Virgo</span>!</Typography>
            <Typography sx={styles.text} >{content.text[1]}</Typography>
          </>
        )
      case 'patterns-zodiac-compass':
        return (
          <>
            <Typography sx={styles.title}><span style={styles.blueText}>Virgo</span>, here’s the thing...
You can do this!</Typography>
            <Typography sx={styles.text} >{content.text[1]}</Typography>
          </>
        )
      case 'patterns-zodiac-clouds':
        return (
          <>
            <Typography sx={styles.title}>It’s totally normal to feel nervous, <span style={styles.blueText}>Virgo</span>.</Typography>
            <Typography sx={styles.text} >{content.text[1]}</Typography>
          </>
        )
      case 'patterns-heart':
        return (
          <>
            <Typography sx={styles.title}>Based on our data, 38% of <span style={styles.blueText}>Virgo</span> people also make decisions with their heart. But don't worry, we'll consider that while creating your guidance plan.</Typography>
          </>
        )
      case 'patterns-head':
        return (
          <>
            <Typography sx={styles.title}>Based on our data, 40% of <span style={styles.blueText}>Virgo</span> people also make decisions with their head. But don't worry, we'll consider that while creating your guidance plan.</Typography>
          </>
        )
      case 'patterns-both':
        return (
          <>
            <Typography sx={styles.title}>Wonderful! Based on our data, only the top 22% of <span style={styles.blueText}>Virgo</span> people make decisions with their heart and head. Using both in equal measure is the key to feeling harmonious in your relationships.</Typography>
          </>
        )
      default:
        return (
          <>
            <Typography sx={styles.title}>{content.text[0]}</Typography>
            {content.text.map((t, i) => 
            i > 0 && <Typography key={t} sx={styles.text} >{t}</Typography>
            )}
          </>
        )
    }
  }
      
  return (
    <Box sx={styles.container}>
      {/* <img style={styles.image} src={contentImage} alt="horoscope" /> */}
      <object type="image/svg+xml" data={transitionImage}>svg-animation</object>
      {renderTransitionText()}
      <Button secondaryColor onClick={() => navigate(-1)}>Back</Button>
      <Button onClick={() => navigate(`/${content.nextPath}`)}>Next</Button>
    </Box>
  )
}

export default TransitionPage