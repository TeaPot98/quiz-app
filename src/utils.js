export const findZodiacSign = (day, mon) => {
  const month = new Date(Date.parse(mon +" 1, 2012")).getMonth() + 1
  console.log('Your month is', month)
  const zodiacSigns = {
    'capricorn':'Capricorn',
    'aquarius':'Aquarius',
    'pisces':'Pisces',
    'aries':'Aries',
    'taurus':'Taurus',
    'gemini':'Gemini',
    'cancer':'Cancer',
    'leo':'Leo',
    'virgo':'Virgo',
    'libra':'Libra',
    'scorpio':'Scorpio',
    'sagittarius':'Sagittarius'
  }

  if((Number(month) === 1 && Number(day) <= 19) || (Number(month) === 12 && Number(day) >=22)) {
    return zodiacSigns.capricorn;
  } else if ((Number(month) === 1 && Number(day) >= 20) || (Number(month) === 2 && Number(day) <= 18)) {
    return zodiacSigns.aquarius;
  } else if((Number(month) === 2 && Number(day) >= 19) || (Number(month) === 3 && Number(day) <= 20)) {
    return zodiacSigns.pisces;
  } else if((Number(month) === 3 && Number(day) >= 21) || (Number(month) === 4 && Number(day) <= 19)) {
    return zodiacSigns.aries;
  } else if((Number(month) === 4 && Number(day) >= 20) || (Number(month) === 5 && Number(day) <= 20)) {
    return zodiacSigns.taurus;
  } else if((Number(month) === 5 && Number(day) >= 21) || (Number(month) === 6 && Number(day) <= 20)) {
    return zodiacSigns.gemini;
  } else if((Number(month) === 6 && Number(day) >= 21) || (Number(month) === 7 && Number(day) <= 22)) {
    return zodiacSigns.cancer;
  } else if((Number(month) === 7 && Number(day) >= 23) || (Number(month) === 8 && Number(day) <= 22)) {
    return zodiacSigns.leo;
  } else if((Number(month) === 8 && Number(day) >= 23) || (Number(month) === 9 && Number(day) <= 22)) {
    return zodiacSigns.virgo;
  } else if((Number(month) === 9 && Number(day) >= 23) || (Number(month) === 10 && Number(day) <= 22)) {
    return zodiacSigns.libra;
  } else if((Number(month) === 10 && Number(day) >= 23) || (Number(month) === 11 && Number(day) <= 21)) {
    return zodiacSigns.scorpio;
  } else if((Number(month) === 11 && Number(day) >= 22) || (Number(month) === 12 && Number(day) <= 21)) {
    return zodiacSigns.sagittarius;
  }
}