export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const years = Array.from({length: 90}, (x, i) => 2022 - i)

export const days = Array.from({length: 31}, (x, i) => i + 1)

export const yourProfile = {
  'relationship-status': {
    id: '93df9b5d-1d86-4e7b-8447-e936a81ff960',
    group: 'Personal Profile',
    order: 1/10,
    path: 'relationship-status',
    type: 'quiz-simple',
    text: [
      'So we can get to know you better, tell us about your relationship status.'
    ],
    answers: [
      {
        id : 'b95958cd-c114-47c3-ae57-61d946ec9a32',
        text: 'Single',
        nextPath: 'goal-single',
      },
      {
        id : 'add0c945-2e6c-4ace-a205-f34ed341c6cd',
        text: 'In a relationship',
        nextPath: 'goal-inrelationship',
      },
    ]
  },
  'goal-single': {
    id: '5773b7a5-1d0b-4954-8166-5c827996c747',
    group: 'Personal Profile',
    order: 2/10,
    path: 'goal-single',
    type: 'quiz-simple',
    text: [
      'What is your goal?'
    ],
    answers: [
      {
        id : '4a94530c-a829-47c7-b629-eb1d2833983f',
        text: 'Find my perfect partner',
        nextPath: 'profile-goal-setup',
      },
      {
        id : '78942944-cf26-4ada-858d-f2b7d64c75c2',
        text: 'Understand myself better',
        nextPath: 'profile-goal-setup',
      },
      {
        id : '188cd02b-f55b-40d7-991a-301e09e8a7aa',
        text: 'Both',
        nextPath: 'profile-goal-setup',
      },
    ]
  },
  'goal-inrelationship': {
    id: '58472ee0-073c-4836-a87c-b5afa0289f1c',
    group: 'Personal Profile',
    order: 2/10,
    path: 'goal-inrelationship',
    type: 'quiz-simple',
    text: [
      'What is your goal?'
    ],
    answers: [
      {
        id : 'bde78e09-7e16-4bec-a9e9-f8437d1bf946',
        text: 'Fix relationship problems',
        nextPath: 'profile-goal-setup',
      },
      {
        id : 'f3db99a2-b5b2-4c4b-a7e1-77817e58ee65',
        text: 'Increase relationship satisfaction',
        nextPath: 'profile-goal-setup',
      },
      {
        id : '87b1dced-b87f-4061-a21d-b860fb3342a2',
        text: 'Both',
        nextPath: 'profile-goal-setup',
      },
    ]
  },
  'profile-goal-setup': {
    id: '67a9fefa-c8f0-45a0-86a6-4e21a2c55d57',
    group: 'Personal Profile',
    order: 2/10,
    path: 'profile-goal-setup',
    type: 'transition-simple',
    text: [
      'Great! You just set your first goal!',
      'Let\'s keep going so we can get to know you better.'
    ],
    nextPath: 'gender'
  },
  'gender': {
    id: '63a05934-8d76-4107-81d4-6681bbfaa144',
    group: 'Personal Profile',
    order: 3/10,
    path: 'gender',
    type: 'quiz-simple',
    text: [
      'What’s your gender?',
      'This highlights the duality of your masculine and feminine energies.'
    ],
    answers: [
      {
        id : '25820276-e69d-46bc-a9e7-3d9e741c0d7a',
        text: 'Male',
        nextPath: 'profile-parent',
      },
      {
        id : '7eed4027-8b6a-44d0-b46f-425b103c88c2',
        text: 'Female',
        nextPath: 'profile-parent',
      },
    ]
  },
  'profile-parent': {
    id: '395a68d0-7b04-463a-a831-76d72199afd9',
    group: 'Personal Profile',
    order: 4/10,
    path: 'profile-parent',
    type: 'quiz-simple',
    text: [
      'Are you a parent?'
    ],
    answers: [
      {
        id : '9c23f0ef-af70-4863-a08e-3d123565ca9b',
        text: 'Yes',
        nextPath: 'profile-astrology-knowledge',
      },
      {
        id : '44a825d1-aa60-4062-b39d-a6364c12388a',
        text: 'No',
        nextPath: 'profile-astrology-knowledge',
      },
    ]
  },
  'profile-astrology-knowledge': {
    id: '52d9e3c3-8118-4bdb-8f29-2940ea45e318',
    group: 'Personal Profile',
    order: 5/10,
    path: 'profile-astrology-knowledge',
    type: 'quiz-simple',
    text: [
      'How\'s your astrology knowledge?'
    ],
    answers: [
      {
        id : '0dedaa1e-7b3b-4d30-8f68-584fa7ced94f',
        text: 'An expert',
        nextPath: 'profile-hyperpersonalized',
      },
      {
        id : 'dc7be3b8-fb5c-4823-b12e-da25dce61892',
        text: 'Curious',
        nextPath: 'profile-hyperpersonalized',
      },
      {
        id : '76251626-2674-4fd6-8fea-ee6946b8867c',
        text: 'A beginner',
        nextPath: 'profile-hyperpersonalized',
      },
    ]
  },
  'profile-hyperpersonalized': {
    id: 'caf0f32c-6032-40fa-81e7-769e469b2441',
    group: 'Personal Profile',
    order: 5/10,
    path: 'profile-hyperpersonalized',
    type: 'transition-simple',
  },
  'date-of-birth': {
    id: '53dd1904-d7c4-4ffa-8e57-4d80f83b0c54',
    group: 'Personal Profile',
    order: 6/10,
    path: 'date-of-birth',
    type: 'quiz-date',
    text: [
      'What\'s your date of birth?'
    ],
    nextPath: 'profile-time-of-birth-question',
  },
  'profile-time-of-birth-question': {
    id: '9b6f1891-2256-48f6-95ef-81006860e3e1',
    group: 'Personal Profile',
    order: 7/10,
    path: 'profile-time-of-birth-question',
    type: 'quiz-simple',
    text: [
      'Do you know your time of birth?'
    ],
    answers: [
      {
        id : 'b3325f75-c158-4e46-aaa9-2babeec92a3f',
        text: 'Yes',
        nextPath: 'time-of-birth',
      },
      {
        id : '9d590689-153d-49ef-94b6-8685f220d575',
        text: 'No',
        nextPath: 'no-time-of-birth',
      },
    ]
  },
  'time-of-birth': {
    id: 'c6a72e4e-3ee3-4332-a29c-accb42ed9ce2',
    group: 'Personal Profile',
    order: 8/10,
    path: 'time-of-birth',
    type: 'quiz-time',
    text: [
      'At what time were you born?',
      'We use NASA data to identify the exact position of the planets in the sky at the time of your birth.'
    ],
    nextPath: 'place-of-birth',
  },
  'no-time-of-birth': {
    id: '9d95c8db-15ea-40de-bd6d-b16949665136',
    group: 'Personal Profile',
    order: 8/10,
    path: 'no-time-of-birth',
    type: 'transition-simple',
    text: [
      'No problem! You can still find plenty of great insights without knowing your exact birth time.',
      'Tip: If you find out later, you can adjust this in your profile settings.'
    ],
    nextPath: 'place-of-birth'
  },
  'place-of-birth': {
    id: 'ff3c63c8-5c54-4fdd-a449-0c8005d80d1e',
    group: 'Personal Profile',
    order: 9/10,
    path: 'place-of-birth',
    type: 'quiz-place',
    text: [
      'Where were you born?',
      'This determines the time zone at the place of your birth.'
    ],
    nextPath: 'profile-connecting-database'
  },
  'profile-connecting-database': {
    id: '3be269e7-320e-48c1-9fdc-bd9c687593fe',
    group: 'Personal Profile',
    order: 9/10,
    path: 'profile-connecting-database',
    type: 'transition-loading',
    text: [
      'We\'ve helped 4,342,403* other men with their Sun in Aries (zodia !!!) to improve their relationship and we can\'t wait to help you too!',
      'Connecting to database...'
    ],
    nextPath: 'profile-problem'
  }
}