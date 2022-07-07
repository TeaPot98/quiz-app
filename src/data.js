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

export const questions = {
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
  },
  'profile-problem': {
    id: '1a2fa4dc-f6de-41f8-893c-5a750a5a81fb',
    group: 'Personal Profile',
    order: 10/10.1,
    path: 'profile-problem',
    type: 'quiz-simple',
    text: [],
    answers: [
      {
        id : 'd8fcca2e-4f1e-4a33-8249-849aa64524be',
        text: 'I was unhappy with how things were going in my relationship',
        nextPath: 'traits-started-unhappy',
      },
      {
        id : '7c58d57f-64f1-4e2a-8a23-4e48d53a44a8',
        text: 'I was unhappy with parts of my relationship, but some things were working well',
        nextPath: 'traits-started-unhappy',
      },
      {
        id : 'b3785027-01e6-4dc9-b48b-f9efd282e9ef',
        text: 'I was generally happy in my relationship',
        nextPath: 'traits-started-happens',
      },
      {
        id : 'dcc576cd-d9a5-465b-897a-aa4e1a8e7b90',
        text: 'I\'ve never been in a relationship',
        nextPath: 'traits-started-compatible',
      },
    ],
  },
  'profile-problem-relationship': {
    id: 'f3a033fa-68c5-414f-80ab-1bf11c27aabb',
    group: 'Personal Profile',
    order: 10/10.1,
    path: 'profile-problem-relationship',
    type: 'quiz-simple',
    text: [],
    answers: [
      {
        id : '5c6648af-ff85-4a8b-804d-d3c48acc1bf7',
        text: 'I\'m very unhappy with how my things are going in my relationship',
        nextPath: 'relationship-covered',
      },
      {
        id : '2226c471-f767-4e61-a2b2-bc2935e60711',
        text: 'I\'m very unhappy with parts of my relationship, but some things are working well',
        nextPath: 'relationship-better',
      },
      {
        id : 'd8a028fa-b42f-449d-b7ce-e78993c7dbb0',
        text: 'I\'m generally happy in my relationship',
        nextPath: 'relationship-wonder',
      },
    ],
  },
  'traits-started-unhappy': {
    id: 'db998ef0-39bd-4fbe-8b10-3af09162da7a',
    group: 'Personal Profile',
    order: 10/10,
    path: 'traits-started-unhappy',
    type: 'transition-simple',
    text: [
      'To find out what works for us, we often need to understand what doesn\'t. We’ll give you insights on how to build a happy and lasting relationship with your new partner.',
      'Now, we need some information about your Personality Traits to dig deeper!'
    ],
    nextPath: 'traits-statement-one'
  },
  'traits-started-happens': {
    id: '1be9277a-0d1d-4e55-8ac6-0dcdbdb05c0d',
    group: 'Personal Profile',
    order: 10/10,
    path: 'traits-started-happens',
    type: 'transition-simple',
    text: [
      'Sometimes that happens and you need to move on! We\'ll give you insights on how to build a long lasting relationship with your next partner.',
      'Now, we need some information about your Personality Traits to dig deeper!'
    ],
    nextPath: 'traits-statement-one'
  },
  'traits-started-compatible': {
    id: '820dde14-afdb-4f2e-8e33-5acbe4aa3bd8',
    group: 'Personal Profile',
    order: 10/10,
    path: 'traits-started-compatible',
    type: 'transition-simple',
    text: [
      'Well, exciting times ahead! We\'ll give you insights about your most compatible partner.',
      'Now, we need some information about your Personality Traits to dig deeper!'
    ],
    nextPath: 'traits-statement-one'
  },
  'relationship-covered': {
    id: '52c4ae7d-df61-41af-bae0-70c6c38bf1e9',
    group: 'Personal Profile',
    order: 10/10,
    path: 'relationship-covered',
    type: 'transition-simple',
    text: [
      'We’ve got you covered! We’ll start with small, personalized insights into you and your partner’s personality traits.',
      'Now, we need some information about Your Partner’s Profile to create the astrological synastry blueprint between you and your partner.'
    ],
    nextPath: 'partner-date-of-birth'
  },
  'relationship-better': {
    id: 'a3299215-1939-4cce-9deb-40cd14c6df78',
    group: 'Personal Profile',
    order: 10/10,
    path: 'relationship-better',
    type: 'transition-simple',
    text: [
      'You’re probably doing better than you think! We’ll help you identify how to improve and stick with it.',
      'Now, we need some information about Your Partner’s Profile to create the astrological synastry blueprint between you and your partner.'
    ],
    nextPath: 'partner-date-of-birth'
  },
  'relationship-wonder': {
    id: 'a3ec3fc0-48d1-44b6-8842-6c873fdf1d7c',
    group: 'Personal Profile',
    order: 10/10,
    path: 'relationship-wonder',
    type: 'transition-simple',
    text: [
      'Wonderful! Let\'s find out what\'s working (and what isn’t) and go from there.',
      'Now, we need some information about Your Partner’s Profile to create the astrological synastry blueprint between you and your partner.'
    ],
    nextPath: 'partner-date-of-birth'
  },
  'partner-date-of-birth': {
    id: 'c07e90ad-fa58-48b6-bf8e-82d88b772780',
    group: 'Partner Profile',
    order: 1/4,
    path: 'partner-date-of-birth',
    type: 'quiz-date',
    text: [
      'What is your partner\'s date of birth?',
      'Their date of birth is essential information to build your partner\'s personal astrological blueprint.'
    ],
    nextPath: 'partner-time-of-birth',
  },
  'partner-time-of-birth': {
    id: '50e8dcc5-8077-4161-a3a1-c2b90245cd26',
    group: 'Partner Profile',
    order: 2/4,
    path: 'partner-time-of-birth',
    type: 'quiz-simple',
    text: [
      'Do you know what time your partner was born?'
    ],
    answers: [
      {
        id : '0342e676-beec-455b-b0c8-e42751dfe69d',
        text: 'Yes',
        nextPath: 'partner-time-of-birth-true',
      },
      {
        id : '1f6fa051-2153-4f26-837c-ac76e92da899',
        text: 'No',
        nextPath: 'partner-time-of-birth-false',
      },
    ]
  },
  'partner-time-of-birth-true': {
    id: 'e81c91cc-38ce-4c26-8eee-c9bb5817455d',
    group: 'Partner Profile',
    order: 3/4,
    path: 'partner-time-of-birth-true',
    type: 'quiz-time',
    text: [
      'At what time war your partner born?',
      'We use NASA data to identify the exact position of the planets in the sky at the time of your partner\'s birth.'
    ],
    nextPath: 'partner-place-of-birth',
  },
  'partner-time-of-birth-false': {
    id: '37209f3a-1b5e-436e-9702-82a8b611cdfe',
    group: 'Partner Profile',
    order: 3/4,
    path: 'partner-time-of-birth-false',
    type: 'transition-simple',
    text: [
      'No problem! You can still find plenty of great insights without knowing the exact birth time of your partner.',
      'Tip: If you find out later, you can adjust this in your partner\'s profile.'
    ],
    nextPath: 'partner-place-of-birth'
  },
  'partner-place-of-birth': {
    id: '3fa1ffe0-89bd-4841-9bcb-5a106ca4abd4',
    group: 'Partner Profile',
    order: 4/4.1,
    path: 'partner-place-of-birth',
    type: 'quiz-place',
    text: [
      'Where was your partner born?',
      'If you don’t know the exact place of birth just type in the country of birth.'
    ],
    nextPath: 'tailoring'
  },
  'tailoring': {
    id: '6b8a00d8-e2d5-469e-bc0e-c1e352c28245',
    group: 'Partner Profile',
    order: 4/4,
    path: 'tailoring',
    type: 'transition-simple',
    text: [
      'Almost there! Now let\'s begin tailoring your plan by understanding your Relationship & Personality Pattern.',
      'Please take your time when answering. Each response is used to craft the guidance plan for you and your partner.'
    ],
    nextPath: 'issue-together'
  },
  'traits-statement-one': {
    id: '4d3861e4-a0cd-45bc-a10f-b4f10cdaf981',
    group: 'Personality Traits',
    order: 1/9,
    path: 'traits-statement-one',
    type: 'quiz-simple',
    text: [
      'Do you relate to the statement below? “I really dislike being alone as much as I hate to admit it.”'
    ],
    answers: [
      {
        id : 'b3450b72-370e-4754-96a2-97ffece5e2ad',
        text: 'Yes',
        nextPath: 'traits-question-one',
      },
      {
        id : '086ff5ca-3813-43d7-b115-4b624443d745',
        text: 'No',
        nextPath: 'traits-question-one',
      },
    ]
  },
  'traits-question-one': {
    id: '28098869-0d0a-433e-a83b-73be80a772ff',
    group: 'Personality Traits',
    order: 2/9,
    path: 'traits-question-one',
    type: 'quiz-simple',
    text: [
      'Do you tend to notice what’s wrong more than what’s right?'
    ],
    answers: [
      {
        id : '22520c6b-ae9f-4e05-a990-b5f3b86a8867',
        text: 'Very frequently',
        nextPath: 'traits-question-two',
      },
      {
        id : '7c34e026-b221-4e34-871e-d4f07db4e73e',
        text: 'Frequently',
        nextPath: 'traits-question-two',
      },
      {
        id : '5e68643d-3398-44d7-97ca-a78c109298a1',
        text: 'Occasionally',
        nextPath: 'traits-question-two',
      },
      {
        id : 'c9c2b44e-1950-4cb0-add4-a20ce5c69fa8',
        text: 'Rarely',
        nextPath: 'traits-question-two',
      },
      {
        id : 'b286a50c-9551-48fa-993b-813db62a0932',
        text: 'Never',
        nextPath: 'traits-question-two',
      },
    ]
  },
  'traits-question-two': {
    id: 'd0c33f6d-f5a3-40bf-9de0-04ca6e456834',
    group: 'Personality Traits',
    order: 3/9,
    path: 'traits-question-two',
    type: 'quiz-simple',
    text: [
      'Are you sensitive to criticism?'
    ],
    answers: [
      {
        id : 'c37775f6-f0e4-4686-bbf6-bbeac38cdeda',
        text: 'Yes',
        nextPath: 'traits-tend-to-overthink',
      },
      {
        id : '45f3d309-0490-4fb7-a2e9-8ae5072c6cf3',
        text: 'Sometimes',
        nextPath: 'traits-tend-to-overthink',
      },
      {
        id : '8b0bca85-d67f-40e5-82a2-7d456c069bef',
        text: 'Rarely',
        nextPath: 'traits-tend-to-overthink',
      },
      {
        id : '18431d82-875f-484b-8367-f36f20e277d9',
        text: 'Not at all',
        nextPath: 'traits-tend-to-overthink',
      },
    ]
  },
  'traits-tend-to-overthink': {
    id: '11efff93-0353-4077-941c-3b8292064928',
    group: 'Personality Traits',
    order: 4/9,
    path: 'traits-tend-to-overthink',
    type: 'quiz-simple',
    text: [
      'Do you tend to overthink?'
    ],
    answers: [
      {
        id : '9601f859-5583-4208-b15e-51e66f5f7c07',
        text: 'Yes',
        nextPath: 'traits-important-to-you',
      },
      {
        id : '2ce94798-16d5-4615-b8d7-67d599bba93a',
        text: 'No',
        nextPath: 'traits-important-to-you',
      },
    ]
  },
  'traits-important-to-you': {
    id: '297637db-037f-47e8-962d-a81a73992192',
    group: 'Personality Traits',
    order: 5/9,
    path: 'traits-important-to-you',
    type: 'quiz-simple',
    text: [
      'What is most important to you?'
    ],
    answers: [
      {
        id : '922d59ec-22b1-463a-bb8c-84d156fb88f3',
        text: 'Success',
        nextPath: 'traits-emotional',
      },
      {
        id : '07baf07f-f6f5-449b-8d56-7e9fbe3ffa1e',
        text: 'Romance',
        nextPath: 'traits-emotional',
      },
      {
        id : '8a717b63-1ace-4bc4-9840-8989baa16ce3',
        text: 'Stability',
        nextPath: 'traits-emotional',
      },
      {
        id : '4c03d330-50c0-4715-9b59-5a623e398144',
        text: 'Freedom',
        nextPath: 'traits-emotional',
      },
    ]
  },
  'traits-emotional': {
    id: '0f2fecf9-d558-4b5a-82c9-a5ff351c6844',
    group: 'Personality Traits',
    order: 6/9,
    path: 'traits-emotional',
    type: 'quiz-simple',
    text: [
      'Is emotional control tricky for you?'
    ],
    answers: [
      {
        id : '038fcd89-338b-440c-b747-c2ae64f203a0',
        text: 'Yes',
        nextPath: 'traits-data-umbrella',
      },
      {
        id : '027703c1-d75d-4592-a633-494d7fc6fa1a',
        text: 'Sometimes',
        nextPath: 'traits-data-umbrella',
      },
      {
        id : '3d333495-a6e7-48ae-a81a-1a251f49a2c5',
        text: 'Rarely',
        nextPath: 'traits-data',
      },
      {
        id : '88465f5d-afe9-4e81-9eb4-10026e013afd',
        text: 'Not at all',
        nextPath: 'traits-data',
      },
    ]
  },
  'traits-data-umbrella': {
    id: '50ec300e-fb99-4353-96a1-cd9cbdf23dda',
    group: 'Personality Traits',
    order: 6/9,
    path: 'traits-data-umbrella',
    type: 'transition-simple',
    text: [
      'You’re not alone. A lot of Virgo people find it difficult to control emotions due to their zodiac sign traits. Don’t worry, we know how to address that!'
    ],
    nextPath: 'traits-attitude-to-job'
  },
  'traits-data': {
    id: 'c3da9b08-1ff1-4fcd-8006-eeb0d0925bdb',
    group: 'Personality Traits',
    order: 6/9,
    path: 'traits-data',
    type: 'transition-simple',
    text: [
      'You keep your emotions in check Virgo, but sometimes people might want you to show more passion. We can give you some insights about that!'
    ],
    nextPath: 'traits-attitude-to-job'
  },
  'traits-attitude-to-job': {
    id: 'af7a8c4f-e7f5-4579-8d0a-175f19bd94d3',
    group: 'Personality Traits',
    order: 7/9,
    path: 'traits-attitude-to-job',
    type: 'quiz-simple',
    text: [
      'Do you love your job?'
    ],
    answers: [
      {
        id : 'd0848298-5bab-4a11-bdfc-f84bf5f2f55a',
        text: 'Yes! I do something I love',
        nextPath: 'traits-what-you-want',
      },
      {
        id : 'fa7e95c9-50c5-48f3-ac0c-f6c4b415fb56',
        text: 'I\'m not working',
        nextPath: 'traits-what-you-want',
      },
      {
        id : '81fbed2f-7f9f-407e-ae86-a04675353641',
        text: 'I hate my job',
        nextPath: 'traits-what-you-want',
      },
      {
        id : '42b348e3-7930-4112-ab01-60d8b1e565ea',
        text: 'It\'s okay, it pays the bills',
        nextPath: 'traits-what-you-want',
      },
      {
        id : 'c3f85a90-5645-4d43-a4ff-9289e4061fc5',
        text: 'I\'m underpaid',
        nextPath: 'traits-what-you-want',
      },
      {
        id : '5c86415c-2969-4fcc-b3dc-f0a40e743c9c',
        text: 'I have stopped growing professionally',
        nextPath: 'traits-what-you-want',
      },
    ]
  },
  'traits-what-you-want': {
    id: '7c598f47-8b30-48d5-a163-a6e1a3b04938',
    group: 'Personality Traits',
    order: 8/9,
    path: 'traits-what-you-want',
    type: 'quiz-simple',
    text: [
      'Do you tend to overthink?'
    ],
    answers: [
      {
        id : '6ec9d1b8-4c7c-4cfc-b669-ed81f98a2b89',
        text: 'Yes',
        nextPath: 'traits-relaxing',
      },
      {
        id : '4dd794cd-f286-4fce-b5c0-2082b4c7f516',
        text: 'No',
        nextPath: 'traits-relaxing',
      },
      {
        id : '5d07d891-cbf3-4d20-adb9-0409d1a0693f',
        text: 'Not sure',
        nextPath: 'traits-relaxing',
      },
    ]
  },
  'traits-relaxing': {
    id: 'b69644e0-4b13-44b7-8025-1d1bd57ad675',
    group: 'Personality Traits',
    order: 9/9.1,
    path: 'traits-relaxing',
    type: 'quiz-simple',
    text: [
      'Do you have trouble relaxing?'
    ],
    answers: [
      {
        id : '8ccce78b-52b3-4645-80fa-8ed6cbeebab1',
        text: 'Yes',
        nextPath: 'patterns-started',
      },
      {
        id : '9bdab9d7-09cc-4595-9b73-9a8d63ffe4c3',
        text: 'Sometimes',
        nextPath: 'patterns-started',
      },
      {
        id : 'f17e48b1-2740-4867-a5ac-6c8550242aac',
        text: 'Rarely',
        nextPath: 'patterns-started',
      },
      {
        id : '232bae49-62c3-41a0-925d-a726d395df39',
        text: 'Not at all',
        nextPath: 'patterns-started',
      },
    ]
  },
  'patterns-started': {
    id: 'bebd41ba-a5af-4f9d-8ebf-301864d13f4a',
    group: 'Personality Traits',
    order: 9/9,
    path: 'patterns-started',
    type: 'transition-simple',
    text: [
      'Almost there! Now let\'s tailor your plan by understanding the Relationship Pattern.',
      'Please take your time when answering. Each response is used to craft your guidance plan.'
    ],
    nextPath: 'patterns-statement-one'
  },
  'issue-together': {
    id: 'bfe9b8f8-aa6e-486c-9b65-f02a4e1487f7',
    group: 'Relationship & Personality Pattern',
    order: 1/12,
    path: 'issue-together',
    type: 'quiz-simple',
    text: [
      'Do you agree with the statement below? “My partner and I can talk about any issue together”'
    ],
    answers: [
      {
        id : '09072ab0-3cef-4dce-9255-8be27a2fa26c',
        text: 'Strongly agree',
        nextPath: 'currently-affecting',
      },
      {
        id : 'a824da78-cdeb-46f6-9dcc-757237028619',
        text: 'Agree',
        nextPath: 'currently-affecting',
      },
      {
        id : 'a580b489-4f84-475c-87ee-cc46bc87d8c3',
        text: 'Neutral',
        nextPath: 'currently-affecting',
      },
      {
        id : '3dbdc4fe-36cb-47e0-b48e-1a7622cbefcc',
        text: 'Disagree',
        nextPath: 'currently-affecting',
      },
      {
        id : 'f3e16b7a-3c37-4865-9e6c-8a642a89b798',
        text: 'Strongly disagree',
        nextPath: 'currently-affecting',
      },
    ]
  },
  'currently-affecting': {
    id: '56268126-0cf3-42bf-99cf-ccbe9fd3aafd',
    group: 'Relationship & Personality Pattern',
    order: 2/12,
    path: 'currently-affecting',
    type: 'quiz-multiple',
    text: [
      'Are any of these factors currently affecting your relationship?'
    ],
    answers: [
      {
        id : '2b78b290-31d6-4eed-a17a-259923eda5bf',
        text: 'Infidelity',
      },
      {
        id : '4961fd15-7d51-4dd8-9e68-4ff5046c9d45',
        text: 'Depression',
      },
      {
        id : '9de4f43b-ff7b-4e50-a266-bdd7b1053c35',
        text: 'Low sexual desire',
      },
      {
        id : '5563c58d-8182-4c59-aba5-c9309b5450c7',
        text: 'Poor body image',
      },
      {
        id : 'b07ee694-4fa9-433c-884a-c92e269c8f4d',
        text: 'Postpartum depression',
      },
      {
        id : '8830a89d-74f7-4887-b702-394ece4363f3',
        text: 'Anxiety',
      },
      {
        id : '4b362e08-5cb4-4b7d-ace1-863e4fb0d386',
        text: 'Parenting issues',
      },
      {
        id : 'ec270999-d497-4e36-97fe-5e4df64066fd',
        text: 'Blended family issues',
      },
      {
        id : 'ad1ac7cf-c100-49eb-8609-9a33bfb6eaa4',
        text: 'Divorce is on the table',
      },
      {
        id : '8f33de40-df8a-4fd4-86bc-fb7bfb566489',
        text: 'None of these',
      },
    ],
    nextPath: 'partner-priority'
  },
  'partner-priority': {
    id: '7c5d5820-27d2-4a07-a47b-2fe3678f1847',
    group: 'Relationship & Personality Pattern',
    order: 3/12,
    path: 'partner-priority',
    type: 'quiz-simple',
    text: [
      'Do you agree with the statement below? “My partner and I make sex a priority in our relationship”'
    ],
    answers: [
      {
        id : 'ad90368e-c1ff-4c6f-abd6-53a8335d3365',
        text: 'Strongly agree',
        nextPath: 'satisfied',
      },
      {
        id : 'a9ca1f00-c656-49ed-8383-204a7ed0f1d8',
        text: 'Agree',
        nextPath: 'satisfied',
      },
      {
        id : '36c34adc-e722-49c9-8092-78fea4837e18',
        text: 'Neutral',
        nextPath: 'satisfied',
      },
      {
        id : '41ecd470-5dd0-4539-bfeb-0010248bc1b8',
        text: 'Disagree',
        nextPath: 'satisfied',
      },
      {
        id : '43c0ca66-6fd7-4e70-8836-a6ea058012af',
        text: 'Strongly disagree',
        nextPath: 'satisfied',
      },
    ]
  },
  'satisfied': {
    id: '21d94b53-6d3f-42f4-9c19-d3d6753aceea',
    group: 'Relationship & Personality Pattern',
    order: 4/12,
    path: 'satisfied',
    type: 'quiz-simple',
    text: [
      'Are you satisfied with how you and your partner communicate?'
    ],
    answers: [
      {
        id : '684f120c-00ec-4666-9aea-27c9e386d35d',
        text: 'Yes',
        nextPath: 'well-done',
      },
      {
        id : 'eac48ae0-1497-42cf-95f2-a40571094907',
        text: 'No',
        nextPath: 'not-alone',
      },
    ]
  },
  'well-done': {
    id: 'd1a957ab-58b3-4159-89f3-14927189361d',
    group: 'Relationship & Personality Pattern',
    order: 4/12,
    path: 'well-done',
    type: 'transition-simple',
    text: [
      'Well done! Based on our data only the top 34% of Aries find it easy to communicate with their Taurus partner.'
    ],
    nextPath: 'emotional-connection'
  },
  'not-alone': {
    id: '8b1839c9-9d70-48f6-a030-ae7b0e973e6c',
    group: 'Relationship & Personality Pattern',
    order: 4/12,
    path: 'not-alone',
    type: 'transition-simple',
    text: [
      'You’re not alone. Based on our data 70% of Aries find it difficult to communicate with their Taurus partner. We can help you improve this.'
    ],
    nextPath: 'emotional-connection'
  },
  'emotional-connection': {
    id: '8fc48232-7507-42be-8c8e-2d4a914ce001',
    group: 'Relationship & Personality Pattern',
    order: 5/12,
    path: 'emotional-connection',
    type: 'quiz-simple',
    text: [
      'Do you agree with the statement below? “Strengthening our emotional connection is a priority for both my partner and me”'
    ],
    answers: [
      {
        id : '7fcb3fbf-e1fe-4894-8350-48522f57f8f1',
        text: 'Strongly agree',
        nextPath: 'strengthen-emotional-connection',
      },
      {
        id : '2db49a0b-ec27-4c0f-9193-283f743d61c4',
        text: 'Agree',
        nextPath: 'strengthen-emotional-connection',
      },
      {
        id : 'd12a6668-4f8f-4b30-8ff5-d80e8ed1f8fc',
        text: 'Neutral',
        nextPath: 'strengthen-emotional-connection',
      },
      {
        id : '9f6ef578-8f7e-4cbb-bebd-3627e0f383ed',
        text: 'Disagree',
        nextPath: 'strengthen-emotional-connection',
      },
      {
        id : 'c05241a2-1e48-456b-8dd9-3961d5f1797a',
        text: 'Strongly disagree',
        nextPath: 'strengthen-emotional-connection',
      },
    ]
  },
  'strengthen-emotional-connection': {
    id: '39e59e12-edcd-4318-8569-786f09a7ce6b',
    group: 'Relationship & Personality Pattern',
    order: 5/12,
    path: 'strengthen-emotional-connection',
    type: 'transition-simple',
    text: [
      'Hint helps to strengthen emotional and sexual connection*',
      '"It\'s been a great relief finding the right words to say and changing my perspective on my relationship with myself and my partner."',
      'Sarah',
      '*78% of users who use Hint and adopt astrological guidance can expect to see positive changes every week.'
    ],
    nextPath: 'partner-detail-oriented-or-big-picture'
  },
  'partner-detail-oriented-or-big-picture': {
    id: 'c8d175b4-c8cc-4284-aa1e-08210f3b9fc6',
    group: 'Relationship & Personality Pattern',
    order: 6/12,
    path: 'partner-detail-oriented-or-big-picture',
    type: 'quiz-simple',
    text: [
      'Would you describe your partner as a detail-oriented or big-picture person?'
    ],
    answers: [
      {
        id : 'c1f87438-80e7-4c83-a303-6de8f270bd01',
        text: 'Detail-oriented',
        nextPath: 'partner-introvert-or-extrovert',
      },
      {
        id : '78a1a670-0e1d-4672-b92d-5264a4120830',
        text: 'Big-picture',
        nextPath: 'partner-introvert-or-extrovert',
      },
      {
        id : '8bf9431c-3e41-41e7-ae05-d02b5b32ff13',
        text: 'A bit of both',
        nextPath: 'partner-introvert-or-extrovert',
      },
    ]
  },
  'partner-introvert-or-extrovert': {
    id: '2f8bcab3-e334-4068-b172-f3e2274ab9f1',
    group: 'Relationship & Personality Pattern',
    order: 7/12,
    path: 'partner-introvert-or-extrovert',
    type: 'quiz-simple',
    text: [
      'Is your partner an introvert or extrovert?'
    ],
    answers: [
      {
        id : 'e10a9f83-de70-476f-844d-8f9e1d0de796',
        text: 'Extrovert',
        nextPath: 'partner-get-irritated',
      },
      {
        id : '8ef1a662-7817-4a47-9b44-409386543971',
        text: 'Introvert',
        nextPath: 'partner-get-irritated',
      },
      {
        id : '388038e8-4783-45d3-bedd-2ea8e29d6d92',
        text: 'A bit both',
        nextPath: 'partner-get-irritated',
      },
    ]
  },
  'partner-get-irritated': {
    id: '3531d70a-699f-464c-9ce3-19359f83680a',
    group: 'Relationship & Personality Pattern',
    order: 8/12,
    path: 'partner-get-irritated',
    type: 'quiz-simple',
    text: [
      'Does your partner get angry or irritated easily?'
    ],
    answers: [
      {
        id : 'ecf5c322-df24-4f5e-a33b-529c96ab2d41',
        text: 'Yes',
        nextPath: 'conflict',
      },
      {
        id : '3d6b47f7-432b-404e-8144-7f70b2158483',
        text: 'Sometimes',
        nextPath: 'conflict',
      },
      {
        id : '560dbf09-33a7-4ec4-99e9-4bcb58913a7d',
        text: 'Rarely',
        nextPath: 'conflict',
      },
      {
        id : '3103dc9f-5f4c-483c-b00f-78d9ade9e654',
        text: 'Not at all',
        nextPath: 'conflict',
      },
    ]
  },
  'conflict': {
    id: '3531d70a-699f-464c-9ce3-19359f83680a',
    group: 'Relationship & Personality Pattern',
    order: 9/12,
    path: 'conflict',
    type: 'quiz-simple',
    text: [
      'Are you satisfied with the way you and your partner deal with conflict?'
    ],
    answers: [
      {
        id : 'ecf5c322-df24-4f5e-a33b-529c96ab2d41',
        text: 'Yes, I prefer to be honest and direct',
        nextPath: 'patterns-question-three',
      },
      {
        id : '3d6b47f7-432b-404e-8144-7f70b2158483',
        text: 'Depends on the situation and the person',
        nextPath: 'patterns-question-three',
      },
      {
        id : '560dbf09-33a7-4ec4-99e9-4bcb58913a7d',
        text: 'No, I don\'t want to get hurt or hurt another person',
        nextPath: 'patterns-question-three',
      },
      {
        id : '3103dc9f-5f4c-483c-b00f-78d9ade9e654',
        text: 'No, it makes me nervous',
        nextPath: 'patterns-question-three',
      },
    ]
  },
  'patterns-question-three': {
    id: 'fb4bc266-411f-45a5-bc28-66f69c6acac7',
    group: 'Relationship & Personality Pattern',
    order: 10/12,
    path: 'patterns-question-three',
    type: 'quiz-simple',
    text: [
      'When you think about your relationship goals, you feel...?'
    ],
    answers: [
      {
        id : '003cdbf7-b883-4814-bd28-5fa82f5e94d5',
        text: 'Optimistic! They are totally doable, with some guidance.',
        nextPath: 'patterns-zodiac-archery',
      },
      {
        id : '45250c19-0d83-415e-8156-7bd5854ae14b',
        text: 'Cautious. I\'ve  struggled before, but I\'m hopeful',
        nextPath: 'patterns-zodiac-compass',
      },
      {
        id : '9119fc2f-49d7-40b1-9e38-749571859f70',
        text: 'I\'m feeling a little anxious, honestly',
        nextPath: 'patterns-zodiac-clouds',
      },
    ]
  },
  'patterns-zodiac-archery': {
    id: 'e10562f8-2301-449f-b4df-92c9929c2671',
    group: 'Relationship & Personality Pattern',
    order: 10/12,
    path: 'patterns-zodiac-archery',
    type: 'transition-simple',
    text: [
      'You’ve come to the right place, Virgo!',
      'Knowing that your goal is already doable puts you ahead. Let’s keep going so we can build a guidance plan based on your astrological blueprint.'
    ],
    nextPath: 'patterns-statement-one-relationship'
  },
  'patterns-zodiac-compass': {
    id: '9434c5cc-367b-47d7-b015-cba058064793',
    group: 'Relationship & Personality Pattern',
    order: 10/12,
    path: 'patterns-zodiac-compass',
    type: 'transition-simple',
    text: [
      'Virgo, here’s the thing... You can do this!',
      'We\'ll start with small insights so it doesn\'t feel too overwhelming. Let\'s keep going and build a guidance plan based on your astrological blueprint.'
    ],
    nextPath: 'patterns-statement-one-relationship'
  },
  'patterns-zodiac-clouds': {
    id: 'ceccbf4e-33be-4f68-9695-54ecfe975e53',
    group: 'Relationship & Personality Pattern',
    order: 10/12,
    path: 'patterns-zodiac-clouds',
    type: 'transition-simple',
    text: [
      'It’s totally normal to feel nervous, Virgo.',
      'But we know you can do this. Let\'s keep going and build a guidance plan based on your astrological blueprint.'
    ],
    nextPath: 'patterns-statement-one-relationship'
  },
  'patterns-statement-one-relationship': {
    id: '1834c806-4e78-4843-b7e7-e874b8436c73',
    group: 'Relationship & Personality Pattern',
    order: 11/12,
    path: 'patterns-statement-one-relationship',
    type: 'quiz-simple',
    text: [
      'Do you agree with the statement below? “My partner makes me feel really appreciated.”'
    ],
    answers: [
      {
        id : '5ad30596-9b48-4719-baef-2579fe27d996',
        text: 'Strongly agree',
        nextPath: 'patterns-question-head-or-heart',
      },
      {
        id : 'f7f4458b-bf03-4204-906f-b8985aced020',
        text: 'Agree',
        nextPath: 'patterns-question-head-or-heart',
      },
      {
        id : '67550a39-0a5e-479a-bdb3-9c441b748aac',
        text: 'Neutral',
        nextPath: 'patterns-question-head-or-heart',
      },
      {
        id : '74b4e06f-1013-4814-ab7a-6e9e6606f1b1',
        text: 'Disagree',
        nextPath: 'patterns-question-head-or-heart',
      },
      {
        id : '610f6907-e735-4e2f-97d9-eb665e89da23',
        text: 'Strongly disagree',
        nextPath: 'patterns-question-head-or-heart',
      },
    ]
  },
  'patterns-question-head-or-heart': {
    id: '88fe9d9c-8a49-43ac-bec5-cc57b0450bf9',
    group: 'Relationship & Personality Pattern',
    order: 12/12.1,
    path: 'patterns-question-head-or-heart',
    type: 'quiz-simple',
    text: [
      'Do you make decisions with your head or your heart?'
    ],
    answers: [
      {
        id : 'f827a34d-b9d0-41f8-b71d-b7a18f095b4f',
        text: 'Heart',
        nextPath: 'patterns-heart',
      },
      {
        id : '3a89e2a6-dacc-48e8-9b82-f2165d1ab092',
        text: 'Head',
        nextPath: 'patterns-head',
      },
      {
        id : '33bc4479-44b8-473b-84fc-52d78ba2a587',
        text: 'Both',
        nextPath: 'patterns-both',
      },
    ]
  },
  'patterns-heart': {
    id: 'ea14f2de-a1b6-44d8-9b24-bbdc26c62f32',
    group: 'Relationship & Personality Pattern',
    order: 12/12,
    path: 'patterns-heart',
    type: 'transition-simple',
    text: [
      'Based on our data, 38% of Virgo people also make decisions with their heart. But don\'t worry, we\'ll consider that while creating your guidance plan.'
    ],
    nextPath: 'patterns-question-about-us'
  },
  'patterns-head': {
    id: '21f7c8fa-0537-4ea3-9627-d4ec7234bf1f',
    group: 'Relationship & Personality Pattern',
    order: 12/12,
    path: 'patterns-head',
    type: 'transition-simple',
    text: [
      'Based on our data, 40% of Virgo people also make decisions with their head. But don\'t worry, we\'ll consider that while creating your guidance plan.'
    ],
    nextPath: 'patterns-question-about-us'
  },
  'patterns-both': {
    id: '5208e2a8-5589-4a2e-b135-179d24efd32b',
    group: 'Relationship & Personality Pattern',
    order: 12/12,
    path: 'patterns-both',
    type: 'transition-simple',
    text: [
      'Wonderful! Based on our data, only the top 22% of Virgo people make decisions with their heart and head. Using both in equal measure is the key to feeling harmonious in your relationships.'
    ],
    nextPath: 'patterns-question-about-us'
  },
  'patterns-question-about-us': {
    id: '346f64a4-d95c-4872-98b3-5ad9c9f5707c',
    group: 'Relationship & Personality Pattern',
    order: 12/12,
    path: 'patterns-question-about-us',
    type: 'quiz-simple',
    text: [
      'Where did you hear about us?'
    ],
    answers: [
      {
        id : 'ef30c5c1-b854-4b59-b421-7bc02de4e850',
        text: 'Facebook',
        nextPath: 'loading',
      },
      {
        id : 'c0fd0431-ff7e-4efe-83de-92c1a77a80f4',
        text: 'TV',
        nextPath: 'loading',
      },
      {
        id : '6c7ee88f-38de-4792-84da-cacd82bffbae',
        text: 'Search Engine (Google, Bing. etc.)',
        nextPath: 'loading',
      },
      {
        id : '1f88a969-d16c-42e2-876f-5a5abf092ea9',
        text: 'Blog Post or Website Review',
        nextPath: 'loading',
      },
      {
        id : '53fb3d98-0d63-46ab-9ed3-b51d28834685',
        text: 'Podcast',
        nextPath: 'loading',
      },
      {
        id : 'a36123dc-6df4-4055-95ab-8475623ee95c',
        text: 'Friend or Family',
        nextPath: 'loading',
      },
      {
        id : '2fcf1230-5811-4cbf-8f0c-9c67fb7b86c7',
        text: 'Direct Mail or Package Insert',
        nextPath: 'loading',
      },
      {
        id : 'ca02211a-3aee-4d32-85c0-45b97e049cef',
        text: 'Influencer',
        nextPath: 'loading',
      },
      {
        id : 'e4e882e7-e26e-4dea-8791-0259bbcd202f',
        text: 'Poster or Billboard',
        nextPath: 'loading',
      },
      {
        id : 'acdb81e1-120a-4f83-91de-4af6be608419',
        text: 'Pinterest',
        nextPath: 'loading',
      },
      {
        id : 'f24f262c-20d1-4428-9135-449e0c5bf911',
        text: 'Radio',
        nextPath: 'loading',
      },
      {
        id : 'bb82d372-bf75-4369-afd9-8c3e644c57aa',
        text: 'Online TV or Streaming TV',
        nextPath: 'loading',
      },
      {
        id : '40d23b0d-f684-45b8-b66b-946413ea4f1b',
        text: 'Newspaper or Magazine',
        nextPath: 'loading',
      },
      {
        id : '1e0175a0-567b-4c35-a67d-535f9a192bc4',
        text: 'Youtube',
        nextPath: 'loading',
      },
      {
        id : '5a75631a-87ca-46ac-83fa-2d582a2e7afb',
        text: 'Instagram',
        nextPath: 'loading',
      },
      {
        id : 'd9489950-a1bc-4f1e-9249-49610a241d0d',
        text: 'Other',
        nextPath: 'loading',
      },
    ]
  },
  'patterns-statement-one': {
    id: '636a0fce-e42b-4669-83a9-2263555a7017',
    group: 'Relationship & Personality Pattern',
    order: 1/12,
    path: 'patterns-statement-one',
    type: 'quiz-simple',
    text: [
      'Let\'s answer a few more questions about you. Do you agree with the statement below? “When I am in a relationship, sex is a priority.“'
    ],
    answers: [
      {
        id : '84d10ef7-e9ad-42b1-8ae0-a510155d4327',
        text: 'Strongly agree',
        nextPath: 'patterns-comfortable-around-people',
      },
      {
        id : '4752410e-5585-4bec-a8c6-c2236688ca98',
        text: 'Agree',
        nextPath: 'patterns-comfortable-around-people',
      },
      {
        id : 'ce1ef699-f891-4b70-8409-d81f2e61f5ef',
        text: 'Neutral',
        nextPath: 'patterns-comfortable-around-people',
      },
      {
        id : '173ebefd-38f4-402d-a374-3b7d1803a4b5',
        text: 'Disagree',
        nextPath: 'patterns-comfortable-around-people',
      },
      {
        id : '0db8b76a-8b9c-414d-9eb4-be11495c7b53',
        text: 'Strongly disagree',
        nextPath: 'patterns-comfortable-around-people',
      },
    ]
  },
  'patterns-comfortable-around-people': {
    id: '6f670ddd-d0fe-4438-b42b-9760d68387ce',
    group: 'Relationship & Personality Pattern',
    order: 2/12,
    path: 'patterns-comfortable-around-people',
    type: 'quiz-simple',
    text: [
      'Do you agree with the statement below? “I feel comfortable around people I barely know.”'
    ],
    answers: [
      {
        id : '90891336-5176-4a2d-b815-14e2245f2ba7',
        text: 'Strongly agree',
        nextPath: 'patterns-not-good-enough',
      },
      {
        id : '5c3a8106-18c8-42b3-8293-dd611ae8e538',
        text: 'Agree',
        nextPath: 'patterns-not-good-enough',
      },
      {
        id : '5e802ca2-30eb-4201-bdb3-c78331a12f9c',
        text: 'Neutral',
        nextPath: 'patterns-not-good-enough',
      },
      {
        id : '16e24da4-85aa-4b2a-9508-39e2733af6cd',
        text: 'Disagree',
        nextPath: 'patterns-not-good-enough',
      },
      {
        id : 'ad13d7d9-b15e-4ebc-a5ff-1c6d2605abf3',
        text: 'Strongly disagree',
        nextPath: 'patterns-not-good-enough',
      },
    ]
  },
  'patterns-not-good-enough': {
    id: '39cfc407-256b-427a-9bea-8ff3293c454b',
    group: 'Relationship & Personality Pattern',
    order: 3/12,
    path: 'patterns-not-good-enough',
    type: 'quiz-simple',
    text: [
      'Do you often worry that you’re not good enough?'
    ],
    answers: [
      {
        id : '5cf673c1-f667-4091-91fe-00f48dbce09d',
        text: 'Yes',
        nextPath: 'patterns-get-angry',
      },
      {
        id : 'e7c64613-26c9-4941-94a6-6fdbb3dbd1fe',
        text: 'Sometimes',
        nextPath: 'patterns-get-angry',
      },
      {
        id : '03018724-3a94-49ce-9be6-b887b326f9bf',
        text: 'Rarely',
        nextPath: 'patterns-get-angry',
      },
      {
        id : 'f1a238aa-c39e-4c99-a428-c962af3b28f4',
        text: 'Not at all',
        nextPath: 'patterns-get-angry',
      },
    ]
  },
  'patterns-get-angry': {
    id: 'e2043680-299c-4439-b8f5-d4ef7ffb8baf',
    group: 'Relationship & Personality Pattern',
    order: 4/12,
    path: 'patterns-get-angry',
    type: 'quiz-simple',
    text: [
      'Do you easily get angry or irritated?'
    ],
    answers: [
      {
        id : 'bd967f59-fef4-44ba-aece-d09c2b05e569',
        text: 'Yes',
        nextPath: 'patterns-share-inner-self',
      },
      {
        id : 'e34208a3-49ab-41a2-9626-371cd5b46946',
        text: 'Sometimes',
        nextPath: 'patterns-share-inner-self',
      },
      {
        id : 'dcaef7c3-05d3-4dce-adc6-efd705fd0d93',
        text: 'Rarely',
        nextPath: 'patterns-share-inner-self',
      },
      {
        id : '426cb6ab-6843-48a3-a6fa-906edb832e07',
        text: 'Not at all',
        nextPath: 'patterns-share-inner-self',
      },
    ]
  },
  'patterns-share-inner-self': {
    id: '92d56a1a-b7a8-4eb2-9613-d244fb65e469',
    group: 'Relationship & Personality Pattern',
    order: 5/12,
    path: 'patterns-share-inner-self',
    type: 'quiz-simple',
    text: [
      'Do you share your inner self with people you like?'
    ],
    answers: [
      {
        id : '3b7b8e25-f88d-45ce-9d86-d42028777dbe',
        text: 'Yes',
        nextPath: 'patterns-details-about-people',
      },
      {
        id : '9d3863cd-d086-451c-9108-b7df438ea91a',
        text: 'No',
        nextPath: 'patterns-details-about-people',
      },
      {
        id : '29a6eee9-b8d1-4c47-a71a-bbedcbe35999',
        text: 'Not sure',
        nextPath: 'patterns-details-about-people',
      },
    ]
  },
  'patterns-details-about-people': {
    id: 'fc5e630e-52a0-46aa-b4fd-87513b0e79a6',
    group: 'Relationship & Personality Pattern',
    order: 6/12,
    path: 'patterns-details-about-people',
    type: 'quiz-simple',
    text: [
      'Do you remember small details about the people who are important to you?'
    ],
    answers: [
      {
        id : '1cbc1380-0ee3-46f5-a4b7-5150eb50c002',
        text: 'Yes',
        nextPath: 'patterns-ideal-date',
      },
      {
        id : 'fecd4e27-9e82-429d-99df-34b9f216f44f',
        text: 'Sometimes',
        nextPath: 'patterns-ideal-date',
      },
      {
        id : '566a3080-595e-4cf9-8072-856422624f24',
        text: 'Rarely',
        nextPath: 'patterns-ideal-date',
      },
      {
        id : '496f84a7-cf5f-4b3f-89f7-d295ce4858f9',
        text: 'Not at all',
        nextPath: 'patterns-ideal-date',
      },
    ]
  },
  'patterns-ideal-date': {
    id: 'b4299966-18f3-4771-a2a7-c6e213fe6d04',
    group: 'Relationship & Personality Pattern',
    order: 7/12,
    path: 'patterns-ideal-date',
    type: 'quiz-simple',
    text: [
      'What is your ideal date?'
    ],
    answers: [
      {
        id : 'dea5ce70-cfb8-4772-8ec0-97fbb57a5307',
        text: 'Dinner at a fancy restaurant',
        nextPath: 'patterns-future-partner',
      },
      {
        id : 'bc545bb0-ca6b-4a7a-8b93-3f2e200f3011',
        text: 'A hike in nature',
        nextPath: 'patterns-future-partner',
      },
      {
        id : '413dc672-e565-4b7f-8e30-ae3cc67fd15d',
        text: 'Talking under the start',
        nextPath: 'patterns-future-partner',
      },
      {
        id : 'fa49abb5-3b76-40cf-badd-7d1b158a57a2',
        text: 'A walk in the park',
        nextPath: 'patterns-future-partner',
      },
      {
        id : 'f4091034-f8de-4a4a-9ec4-5985cc0f2e74',
        text: 'Skydiving',
        nextPath: 'patterns-future-partner',
      },
    ]
  },
  'patterns-future-partner': {
    id: '006bc12b-78c2-4c41-9ca0-4886a23fb93f',
    group: 'Relationship & Personality Pattern',
    order: 8/12,
    path: 'patterns-future-partner',
    type: 'quiz-simple',
    text: [
      'Would you describe your future partner as detail-oriented or a big-picture person?'
    ],
    answers: [
      {
        id : 'a4c05e3a-ca8d-4672-810f-d66213dbc368',
        text: 'Detail-oriented',
        nextPath: 'patterns-ideal-partner',
      },
      {
        id : '7716b66b-ce6f-4c2a-925d-a4cd36c6f39a',
        text: 'Big-picture',
        nextPath: 'patterns-ideal-partner',
      },
      {
        id : '16321605-d01b-40e5-bc72-955c68b862ce',
        text: 'A bit of both',
        nextPath: 'patterns-ideal-partner',
      },
    ]
  },
  'patterns-ideal-partner': {
    id: '66d58af5-eb9c-4244-8c02-dcb7044acae8',
    group: 'Relationship & Personality Pattern',
    order: 9/12,
    path: 'patterns-ideal-partner',
    type: 'quiz-simple',
    text: [
      'Is your ideal partner an introvert or extrovert?'
    ],
    answers: [
      {
        id : '2c572646-113e-4557-930f-5c710a4b9d1a',
        text: 'Extrovert',
        nextPath: 'patterns-question-three-relationship',
      },
      {
        id : 'ce7bd925-11f4-4078-a3d5-e16caf2e9c08',
        text: 'Introvert',
        nextPath: 'patterns-question-three-relationship',
      },
      {
        id : '391dbb8e-8c73-44ca-bb30-54757c67114a',
        text: 'A bit of both',
        nextPath: 'patterns-question-three-relationship',
      },
    ]
  },
  'patterns-question-three-relationship': {
    id: '13b0129b-8444-4ef7-90d7-648f541bd631',
    group: 'Relationship & Personality Pattern',
    order: 10/12,
    path: 'patterns-question-three-relationship',
    type: 'quiz-simple',
    text: [
      'When you think about your relationship goals, you feel...?'
    ],
    answers: [
      {
        id : '9b1ae0ac-8a5d-4700-be99-038cab95ad2a',
        text: 'Optimistic! They are totally doable, with some guidance.',
        nextPath: 'patterns-zodiac-archery-relationship',
      },
      {
        id : '41db6d3a-1cbe-48ae-9e06-61cf1aeef447',
        text: 'Cautious. I\'ve  struggled before, but I\'m hopeful',
        nextPath: 'patterns-zodiac-compass-relationship',
      },
      {
        id : '50983ffa-eb22-448f-9528-0f818affe0c6',
        text: 'I\'m feeling a little anxious, honestly',
        nextPath: 'patterns-zodiac-clouds-relationship',
      },
    ]
  },
  'patterns-zodiac-archery-relationship': {
    id: '6f2ebb8b-83cc-4c25-84aa-d9325c614a0e',
    group: 'Relationship & Personality Pattern',
    order: 10/12,
    path: 'patterns-zodiac-archery',
    type: 'transition-simple',
    text: [
      'You’ve come to the right place, Virgo!',
      'Knowing that your goal is already doable puts you ahead. Let’s keep going so we can build a guidance plan based on your astrological blueprint.'
    ],
    nextPath: 'patterns-question-one'
  },
  'patterns-zodiac-compass-relationship': {
    id: 'c65886eb-e323-4168-bee5-6014c58929d7',
    group: 'Relationship & Personality Pattern',
    order: 10/12,
    path: 'patterns-zodiac-compass',
    type: 'transition-simple',
    text: [
      'Virgo, here’s the thing... You can do this!',
      'We\'ll start with small insights so it doesn\'t feel too overwhelming. Let\'s keep going and build a guidance plan based on your astrological blueprint.'
    ],
    nextPath: 'patterns-question-one'
  },
  'patterns-zodiac-clouds-relationship': {
    id: '99e87a58-d66a-42aa-a70e-72e0e8d2df5d',
    group: 'Relationship & Personality Pattern',
    order: 10/12,
    path: 'patterns-zodiac-clouds',
    type: 'transition-simple',
    text: [
      'It’s totally normal to feel nervous, Virgo.',
      'But we know you can do this. Let\'s keep going and build a guidance plan based on your astrological blueprint.'
    ],
    nextPath: 'patterns-question-one'
  },
  'patterns-question-one': {
    id: '768f8542-9f0c-4f57-9c6c-ef51aad11975',
    group: 'Relationship & Personality Pattern',
    order: 11/12,
    path: 'patterns-question-one',
    type: 'quiz-simple',
    text: [
      'Do you find it easy to communicate with other people?'
    ],
    answers: [
      {
        id : 'd29a739d-9de4-4159-85df-b4a0a9fbbd43',
        text: 'Yes',
        nextPath: 'patterns-question-head-or-heart',
      },
      {
        id : '8c741b59-bcd8-4819-9276-8bf7c855f963',
        text: 'No',
        nextPath: 'patterns-question-head-or-heart',
      },
    ]
  },
  'email': {
    id: 'a20d57b5-920a-4bc7-a940-7b2672085d59',
    group: 'Final',
    order: 1/2,
    path: 'email',
    type: 'quiz-email',
    text: [
      'Enter your email to see how you can improve your relationship'
    ],
    nextPath: 'finisher'
  }
}