import { Question } from './mockData';

export const TAYLOR_SWIFT_QUESTIONS: Omit<Question, 'id' | 'categoryId' | 'subCategoryId'>[] = [
  // --- Category 1: Discography & Albums (25 questions) ---
  {
    questionText: "In what year did Taylor Swift release her debut self-titled studio album?",
    options: ["2004", "2006", "2008"],
    correctAnswerIndex: 1,
    explanation: "Taylor Swift's debut studio album was released on October 24, 2006.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the release year of Taylor Swift's second studio album, 'Fearless'?",
    options: ["2008", "2007", "2010"],
    correctAnswerIndex: 0,
    explanation: "Fearless was released on November 11, 2008.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year was Taylor Swift's third studio album, 'Speak Now', released?",
    options: ["2009", "2010", "2012"],
    correctAnswerIndex: 1,
    explanation: "Speak Now was released on October 25, 2010.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the release year of Taylor Swift's fourth studio album, 'Red'?",
    options: ["2011", "2012", "2013"],
    correctAnswerIndex: 1,
    explanation: "Red was released on October 22, 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year was Taylor Swift's breakout pop album, '1989', released?",
    options: ["2014", "2013", "2016"],
    correctAnswerIndex: 0,
    explanation: "1989 was released on October 27, 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the release year of Taylor Swift's darker-themed sixth studio album, 'Reputation'?",
    options: ["2016", "2017", "2018"],
    correctAnswerIndex: 1,
    explanation: "Reputation was released on November 10, 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift release her seventh studio album, 'Lover'?",
    options: ["2018", "2019", "2020"],
    correctAnswerIndex: 1,
    explanation: "Lover was released on August 23, 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which alternative-leaning album did Taylor Swift surprise-release in July 2020?",
    options: ["Folklore", "Evermore", "Midnights"],
    correctAnswerIndex: 0,
    explanation: "Folklore was surprise-released on July 24, 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the release year of Taylor Swift's sister album, 'Evermore'?",
    options: ["2020", "2021", "2019"],
    correctAnswerIndex: 0,
    explanation: "Evermore was surprise-released on December 11, 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift release the concept album 'Midnights'?",
    options: ["2021", "2022", "2023"],
    correctAnswerIndex: 1,
    explanation: "Midnights was released on October 21, 2022.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the release year of Taylor Swift's double album, 'The Tortured Poets Department'?",
    options: ["2023", "2024", "2025"],
    correctAnswerIndex: 1,
    explanation: "The Tortured Poets Department was released on April 19, 2024.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the title of Taylor Swift's first holiday EP, released in 2007?",
    options: ["The Taylor Swift Holiday Collection", "Sounds of the Season: The Taylor Swift Holiday Collection", "Merry Christmas from Taylor Swift"],
    correctAnswerIndex: 1,
    explanation: "Sounds of the Season: The Taylor Swift Holiday Collection was released on October 14, 2007.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of Taylor Swift's second EP, released in 2008?",
    options: ["Beautiful Eyes", "Live from Soho", "The Rhapsody Originals"],
    correctAnswerIndex: 0,
    explanation: "Beautiful Eyes was released in July 2008 as a Walmart exclusive EP.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was Taylor Swift's first under her new record label, Republic Records?",
    options: ["Lover", "Reputation", "Folklore"],
    correctAnswerIndex: 0,
    explanation: "Lover was her first album released under Republic Records after leaving Big Machine.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many studio albums had Taylor Swift released by the end of 2024?",
    options: ["10", "11", "12"],
    correctAnswerIndex: 1,
    explanation: "Taylor Swift has released 11 studio albums up to The Tortured Poets Department in 2024.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album was the first to have a 'Taylor's Version' re-recording released?",
    options: ["Fearless", "Red", "Speak Now"],
    correctAnswerIndex: 0,
    explanation: "Fearless (Taylor's Version) was the first re-recorded album, released in April 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift release the re-recorded album 'Red (Taylor's Version)'?",
    options: ["2020", "2021", "2022"],
    correctAnswerIndex: 1,
    explanation: "Red (Taylor's Version) was released on November 12, 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift release 'Speak Now (Taylor's Version)'?",
    options: ["2022", "2023", "2024"],
    correctAnswerIndex: 1,
    explanation: "Speak Now (Taylor's Version) was released on July 7, 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift release '1989 (Taylor's Version)'?",
    options: ["2022", "2023", "2024"],
    correctAnswerIndex: 1,
    explanation: "1989 (Taylor's Version) was released on October 27, 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which is the only Taylor Swift studio album that is entirely self-written with no co-writers?",
    options: ["Fearless", "Speak Now", "Red"],
    correctAnswerIndex: 1,
    explanation: "Speak Now is entirely written by Taylor Swift alone.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the live album Taylor Swift released documenting her Speak Now tour?",
    options: ["Speak Now World Tour – Live", "Live from Clear Channel Stripped", "Folklore: The Long Pond Studio Sessions"],
    correctAnswerIndex: 0,
    explanation: "Speak Now World Tour – Live was released as a live CD/DVD in 2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which studio album's standard edition has the longest runtime in Taylor Swift's discography?",
    options: ["The Tortured Poets Department", "Red", "Speak Now"],
    correctAnswerIndex: 0,
    explanation: "The Tortured Poets Department standard edition runs for over 65 minutes, and the double album runs for over two hours.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album cover features Taylor Swift looking up through a dark forest environment?",
    options: ["Folklore", "Evermore", "Lover"],
    correctAnswerIndex: 0,
    explanation: "Folklore features black-and-white photos of Taylor standing in a tall tree canopy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album cover features Taylor Swift with a braided hair look, facing away from the camera?",
    options: ["Evermore", "Folklore", "Speak Now"],
    correctAnswerIndex: 0,
    explanation: "The cover of Evermore features Taylor from behind in a plaid coat with her hair braided.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was promoted as Taylor Swift's first official pop album?",
    options: ["1989", "Red", "Reputation"],
    correctAnswerIndex: 0,
    explanation: "1989 was heavily marketed as her first official documentation of a pop transition.",
    timeLimitSeconds: 5
  },

  // --- Category 2: Song-to-Album Matching (40 questions) ---
  {
    questionText: "Which Taylor Swift album features the song 'Tim McGraw'?",
    options: ["Taylor Swift", "Fearless", "Speak Now"],
    correctAnswerIndex: 0,
    explanation: "Tim McGraw was her debut single from her self-titled album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Fifteen'?",
    options: ["Taylor Swift", "Fearless", "Speak Now"],
    correctAnswerIndex: 1,
    explanation: "Fifteen is a track about high school experiences from Fearless.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Mine'?",
    options: ["Fearless", "Speak Now", "Red"],
    correctAnswerIndex: 1,
    explanation: "Mine is the lead single of Speak Now.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'State of Grace'?",
    options: ["Speak Now", "Red", "1989"],
    correctAnswerIndex: 1,
    explanation: "State of Grace is the stadium rock opening track of Red.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Welcome to New York'?",
    options: ["Red", "1989", "Reputation"],
    correctAnswerIndex: 1,
    explanation: "Welcome to New York is the synth-pop opening track of 1989.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Getaway Car'?",
    options: ["1989", "Reputation", "Lover"],
    correctAnswerIndex: 1,
    explanation: "Getaway Car is a cinematic synth-pop track on Reputation.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Cruel Summer'?",
    options: ["Reputation", "Lover", "Folklore"],
    correctAnswerIndex: 1,
    explanation: "Cruel Summer is one of the biggest hits from Lover.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'the 1'?",
    options: ["Lover", "Folklore", "Evermore"],
    correctAnswerIndex: 1,
    explanation: "the 1 is the opening track of the Folklore album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Gold Rush'?",
    options: ["Folklore", "Evermore", "Midnights"],
    correctAnswerIndex: 1,
    explanation: "Gold Rush is track 3 on Evermore.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Lavender Haze'?",
    options: ["Evermore", "Midnights", "The Tortured Poets Department"],
    correctAnswerIndex: 1,
    explanation: "Lavender Haze is the opening track of Midnights.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Down Bad'?",
    options: ["Midnights", "The Tortured Poets Department", "Lover"],
    correctAnswerIndex: 1,
    explanation: "Down Bad is featured on The Tortured Poets Department.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Teardrops On My Guitar'?",
    options: ["Taylor Swift", "Fearless", "Red"],
    correctAnswerIndex: 0,
    explanation: "Teardrops On My Guitar was the second single from her debut album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'White Horse'?",
    options: ["Taylor Swift", "Fearless", "Speak Now"],
    correctAnswerIndex: 1,
    explanation: "White Horse is a ballad about disillusionment featured on Fearless.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Back to December'?",
    options: ["Fearless", "Speak Now", "Red"],
    correctAnswerIndex: 1,
    explanation: "Back to December is a public apology song featured on Speak Now.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Holy Ground'?",
    options: ["Speak Now", "Red", "1989"],
    correctAnswerIndex: 1,
    explanation: "Holy Ground is an upbeat rock-pop song on Red.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Out of the Woods'?",
    options: ["Red", "1989", "Reputation"],
    correctAnswerIndex: 1,
    explanation: "Out of the Woods was a major synth-heavy single on 1989.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'End Game'?",
    options: ["1989", "Reputation", "Lover"],
    correctAnswerIndex: 1,
    explanation: "End Game features Ed Sheeran and Future and is on Reputation.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'The Archer'?",
    options: ["Reputation", "Lover", "Folklore"],
    correctAnswerIndex: 1,
    explanation: "The Archer is track 5 on the Lover album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Cardigan'?",
    options: ["Lover", "Folklore", "Evermore"],
    correctAnswerIndex: 1,
    explanation: "Cardigan is the lead single of Folklore.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Willow'?",
    options: ["Folklore", "Evermore", "Midnights"],
    correctAnswerIndex: 1,
    explanation: "Willow is the lead single of Evermore.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Maroon'?",
    options: ["Evermore", "Midnights", "The Tortured Poets Department"],
    correctAnswerIndex: 1,
    explanation: "Maroon is track 2 on the Midnights album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Fortnight'?",
    options: ["Midnights", "The Tortured Poets Department", "Lover"],
    correctAnswerIndex: 1,
    explanation: "Fortnight features Post Malone and is on The Tortured Poets Department.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Our Song'?",
    options: ["Taylor Swift", "Fearless", "Speak Now"],
    correctAnswerIndex: 0,
    explanation: "Our Song is one of the breakout country hits from her debut album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'You Belong With Me'?",
    options: ["Taylor Swift", "Fearless", "Speak Now"],
    correctAnswerIndex: 1,
    explanation: "You Belong With Me is one of the primary hits on Fearless.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Sparks Fly'?",
    options: ["Fearless", "Speak Now", "Red"],
    correctAnswerIndex: 1,
    explanation: "Sparks Fly was a country-rock hit single on Speak Now.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'I Knew You Were Trouble'?",
    options: ["Speak Now", "Red", "1989"],
    correctAnswerIndex: 1,
    explanation: "I Knew You Were Trouble is a dubstep-inspired pop single on Red.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Style'?",
    options: ["Red", "1989", "Reputation"],
    correctAnswerIndex: 1,
    explanation: "Style is a funky pop single on the 1989 album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Delicate'?",
    options: ["1989", "Reputation", "Lover"],
    correctAnswerIndex: 1,
    explanation: "Delicate is a vocoder-pop single from Reputation.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Cornelia Street'?",
    options: ["Reputation", "Lover", "Folklore"],
    correctAnswerIndex: 1,
    explanation: "Cornelia Street is a synth ballad on Lover.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'August'?",
    options: ["Lover", "Folklore", "Evermore"],
    correctAnswerIndex: 1,
    explanation: "August is a fan-favorite dream-pop song on Folklore.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Champagne Problems'?",
    options: ["Folklore", "Evermore", "Midnights"],
    correctAnswerIndex: 1,
    explanation: "Champagne Problems is an acoustic piano ballad on Evermore.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Bejeweled'?",
    options: ["Evermore", "Midnights", "The Tortured Poets Department"],
    correctAnswerIndex: 1,
    explanation: "Bejeweled is a synth-pop track on Midnights.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Guilty as Sin?'?",
    options: ["Midnights", "The Tortured Poets Department", "Lover"],
    correctAnswerIndex: 1,
    explanation: "Guilty as Sin? is featured on The Tortured Poets Department.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Should've Said No'?",
    options: ["Taylor Swift", "Fearless", "Speak Now"],
    correctAnswerIndex: 0,
    explanation: "Should've Said No was a country single from her debut album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Love Story'?",
    options: ["Taylor Swift", "Fearless", "Speak Now"],
    correctAnswerIndex: 1,
    explanation: "Love Story is the lead single of the Fearless album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Mean'?",
    options: ["Fearless", "Speak Now", "Red"],
    correctAnswerIndex: 1,
    explanation: "Mean is a country-pop banjos single on Speak Now.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'All Too Well'?",
    options: ["Speak Now", "Red", "1989"],
    correctAnswerIndex: 1,
    explanation: "All Too Well is a legendary track on the Red album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Blank Space'?",
    options: ["Red", "1989", "Reputation"],
    correctAnswerIndex: 1,
    explanation: "Blank Space is track 2 on the 1989 album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Don't Blame Me'?",
    options: ["1989", "Reputation", "Lover"],
    correctAnswerIndex: 1,
    explanation: "Don't Blame Me is a gospel-pop track on Reputation.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift album features the song 'Death by a Thousand Cuts'?",
    options: ["Reputation", "Lover", "Folklore"],
    correctAnswerIndex: 1,
    explanation: "Death by a Thousand Cuts is featured on Lover.",
    timeLimitSeconds: 5
  },

  // --- Category 3: Song Lyrics & Music Video Facts (25 questions) ---
  {
    questionText: "Which Taylor Swift song starts with the lyrics: 'I was riding shotgun with my hair undone'?",
    options: ["Our Song", "Tim McGraw", "Picture to Burn"],
    correctAnswerIndex: 0,
    explanation: "These are the opening lines of the hit country track Our Song.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'You Belong With Me' music video, what message is written on the notepad Taylor Swift holds up?",
    options: ["I Love You", "You Okay?", "Sorry"],
    correctAnswerIndex: 1,
    explanation: "She holds up a notepad saying 'You Okay?' to her neighbor.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'You draw stars around my scars, but now I'm bleedin''?",
    options: ["Cardigan", "August", "Betty"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the bridge of Cardigan.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Blank Space' music video, what does Taylor Swift do to her partner's classic car?",
    options: ["Hits it with a golf club", "Paints it red", "Keys it with a coin"],
    correctAnswerIndex: 0,
    explanation: "She is seen hitting a classic AC Cobra car with a golf club.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Taylor Swift waking up in a pastel-colored dreamscape with a giant butterfly?",
    options: ["ME!", "Lover", "You Need to Calm Down"],
    correctAnswerIndex: 0,
    explanation: "The ME! video features a pastel fantasy world starting with a snake turning into butterflies.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'My claws are out now, and I'm tearing up the town'?",
    options: ["No song has this lyric, it's a made-up line", "Bad Blood", "Better Than Revenge"],
    correctAnswerIndex: 0,
    explanation: "This lyric does not exist in any of her official discography.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Taylor Swift playing both a male character and herself?",
    options: ["The Man", "Shake It Off", "Look What You Made Me Do"],
    correctAnswerIndex: 0,
    explanation: "She plays a toxic male character in The Man and directed the video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I'm the problem, it's me'?",
    options: ["Anti-Hero", "Bejeweled", "Lavender Haze"],
    correctAnswerIndex: 0,
    explanation: "This is the primary hook from Anti-Hero.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Where was the outdoor forest cabin scene for the 'Cardigan' music video filmed?",
    options: ["A closed studio set", "The Redwood forest", "A forest in Ireland"],
    correctAnswerIndex: 0,
    explanation: "The video was shot on a closed set under strict COVID safety protocols.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'You kept me like a secret, but I kept you like an oath'?",
    options: ["All Too Well", "State of Grace", "Red"],
    correctAnswerIndex: 0,
    explanation: "This is a famous line in the bridge of All Too Well.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What instrument is Taylor Swift seen climbing out of in the 'Cardigan' music video?",
    options: ["A piano", "A giant guitar", "A harp"],
    correctAnswerIndex: 0,
    explanation: "She climbs out of a grand piano filled with water.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'I think about jumping off of very tall launchings'?",
    options: ["No song has this lyric, it's a made-up line", "This Is Me Trying", "Out of the Woods"],
    correctAnswerIndex: 0,
    explanation: "This is a fake lyric option.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Shake It Off' music video, which style of dance does Taylor Swift attempt but fail to do gracefully?",
    options: ["Ballet", "Hip hop", "Both Ballet and Hip hop"],
    correctAnswerIndex: 2,
    explanation: "She attempts various genres like ballet, hip hop, ribbon dance, and breakdance.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features a giant glass dollhouse containing rooms themed after her first seven albums?",
    options: ["Lover", "ME!", "Cardigan"],
    correctAnswerIndex: 0,
    explanation: "The Lover video features a couple living inside a snowglobe dollhouse.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'Checking email in the middle of the night'?",
    options: ["No song has this lyric, it's a made-up line", "Would've, Could've, Should've", "The Great War"],
    correctAnswerIndex: 0,
    explanation: "This is a fake lyric option.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video is set in a colorful retro diner featuring pancakes and dancers?",
    options: ["You Need to Calm Down", "22", "We Are Never Ever Getting Back Together"],
    correctAnswerIndex: 0,
    explanation: "The video features a trailer park and diner setting.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'Green was the color of the grass where I used to read'?",
    options: ["Invisible String", "Seven", "Cardigan"],
    correctAnswerIndex: 0,
    explanation: "This is the opening line of Invisible String.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who co-starred as the love interest in the 'Mine' music video?",
    options: ["Toby Hemingway", "Lucas Till", "Reeve Carney"],
    correctAnswerIndex: 0,
    explanation: "British actor Toby Hemingway played the love interest in Mine.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I'll stare directly at the sun, but never in the mirror'?",
    options: ["Anti-Hero", "Snow On The Beach", "Lavender Haze"],
    correctAnswerIndex: 0,
    explanation: "This is a self-deprecating line in Anti-Hero.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Bad Blood' music video, what is Taylor Swift's character name?",
    options: ["Catastrophe", "Arsyn", "Dilemma"],
    correctAnswerIndex: 0,
    explanation: "She plays the action hero Catastrophe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'Windows open, I can't breathe, no, no'?",
    options: ["No song has this lyric, it's a made-up line", "Cruel Summer", "Out of the Woods"],
    correctAnswerIndex: 0,
    explanation: "This is a fake lyric option.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Lover' music video, which instrument does Taylor Swift play inside a yellow room?",
    options: ["A drum set", "A pink guitar", "A keyboard"],
    correctAnswerIndex: 1,
    explanation: "She is seen playing a pink acoustic guitar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'Remember when you hit the brakes too soon?'",
    options: ["Out of the Woods", "All Too Well", "Style"],
    correctAnswerIndex: 0,
    explanation: "This is from the chorus of Out of the Woods.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Taylor Swift in a golden birdcage surrounded by dancers?",
    options: ["Look What You Made Me Do", "Ready For It?", "Delicate"],
    correctAnswerIndex: 0,
    explanation: "The Look What You Made Me Do video features her singing in a giant cage.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'You squeeze my hand three times in the back of the taxi'?",
    options: ["New Year's Day", "All Too Well", "No song has this lyric"],
    correctAnswerIndex: 2,
    explanation: "This is a fake lyric option.",
    timeLimitSeconds: 5
  },

  // --- Category 4: Personal Life (20 questions) ---
  {
    questionText: "What is Taylor Swift's exact birthdate?",
    options: ["December 13, 1989", "December 13, 1988", "November 13, 1989"],
    correctAnswerIndex: 0,
    explanation: "Taylor Swift was born on December 13, 1989.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Taylor Swift's middle name?",
    options: ["Alison", "Elizabeth", "Marie"],
    correctAnswerIndex: 0,
    explanation: "Her full name is Taylor Alison Swift.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Taylor Swift's younger brother?",
    options: ["Austin", "Jeremy", "Travis"],
    correctAnswerIndex: 0,
    explanation: "Her younger brother is Austin Swift, an actor.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What type of farm did Taylor Swift grow up on in Reading, Pennsylvania?",
    options: ["Christmas tree farm", "Apple orchard", "Horse ranch"],
    correctAnswerIndex: 0,
    explanation: "She grew up on a Christmas tree farm in Wyomissing, Pennsylvania.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Taylor Swift's mother?",
    options: ["Andrea Swift", "Lynn Swift", "Pattie Swift"],
    correctAnswerIndex: 0,
    explanation: "Her mother is Andrea Swift (née Finlay).",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Taylor Swift's father?",
    options: ["Scott Swift", "Robert Swift", "Jeremy Swift"],
    correctAnswerIndex: 0,
    explanation: "His father is Scott Kingsley Swift, a stockbroker.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which town in Tennessee did the Swift family move to in order to support her music career?",
    options: ["Hendersonville", "Nashville", "Franklin"],
    correctAnswerIndex: 0,
    explanation: "They moved to Hendersonville, Tennessee, when she was 14.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who was Taylor Swift's maternal grandmother, who was a professional opera singer and inspired a song on 'Evermore'?",
    options: ["Marjorie Finlay", "Diane Finlay", "Carol Finlay"],
    correctAnswerIndex: 0,
    explanation: "Marjorie Finlay was her grandmother and inspired the track Marjorie.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which high school in Hendersonville did Taylor Swift attend?",
    options: ["Hendersonville High School", "Stratford Academy", "Jamaica High School"],
    correctAnswerIndex: 0,
    explanation: "She attended Hendersonville High School before switching to homeschooling.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift start dating NFL player Travis Kelce?",
    options: ["2022", "2023", "2024"],
    correctAnswerIndex: 1,
    explanation: "Taylor Swift and Travis Kelce began dating in the summer of 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the first cat Taylor Swift adopted, named after a Grey's Anatomy character?",
    options: ["Meredith Grey", "Olivia Benson", "Benjamin Button"],
    correctAnswerIndex: 0,
    explanation: "She adopted Meredith Grey, a Scottish Fold, in 2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of her second cat, named after a Law & Order: SVU character?",
    options: ["Olivia Benson", "Meredith Grey", "Benjamin Button"],
    correctAnswerIndex: 0,
    explanation: "She adopted Olivia Benson in 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of her third cat, adopted from the set of a music video?",
    options: ["Benjamin Button", "Olivia Benson", "Yeontan"],
    correctAnswerIndex: 0,
    explanation: "She adopted Benjamin Button after he featured in the ME! video in 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Taylor Swift's childhood best friend, who is the subject of the song 'Fifteen'?",
    options: ["Abigail Anderson", "Selena Gomez", "Gigi Hadid"],
    correctAnswerIndex: 0,
    explanation: "Abigail Anderson is her childhood friend mentioned in Fifteen.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Taylor Swift's astrological sun sign?",
    options: ["Sagittarius", "Capricorn", "Scorpio"],
    correctAnswerIndex: 0,
    explanation: "Born on December 13, her zodiac sign is Sagittarius.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which British actor was Taylor Swift in a relationship with from 2016 to 2023?",
    options: ["Joe Alwyn", "Tom Hiddleston", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "She was in a relationship with Joe Alwyn for six years.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which instrument did a computer repairman teach Taylor Swift to play at age 12, sparking her songwriting?",
    options: ["A three-chord guitar", "A keyboard", "A ukulele"],
    correctAnswerIndex: 0,
    explanation: "A computer technician taught her three chords on a guitar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the first song Taylor Swift ever wrote as a young girl?",
    options: ["Lucky You", "Tim McGraw", "Our Song"],
    correctAnswerIndex: 0,
    explanation: "She wrote Lucky You as her first song after learning guitar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which actor is the subject of the song 'Back to December'?",
    options: ["Taylor Lautner", "Jake Gyllenhaal", "John Mayer"],
    correctAnswerIndex: 0,
    explanation: "Taylor Lautner is widely recognized as the subject of Back to December.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Taylor Swift's estate in Rhode Island, where she hosts famous Independence Day parties?",
    options: ["Holiday House", "High Watch", "The Pink House"],
    correctAnswerIndex: 0,
    explanation: "She owns Holiday House in Watch Hill, Rhode Island.",
    timeLimitSeconds: 5
  },

  // --- Category 5: Awards & Chart Records (20 questions) ---
  {
    questionText: "How many Grammy Awards for Album of the Year has Taylor Swift won, setting an all-time record for a solo artist?",
    options: ["3", "4", "5"],
    correctAnswerIndex: 1,
    explanation: "She has won Album of the Year four times: Fearless, 1989, Folklore, and Midnights.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album won Taylor Swift her first-ever Grammy Award for Album of the Year?",
    options: ["Fearless", "1989", "Red"],
    correctAnswerIndex: 0,
    explanation: "Fearless won Album of the Year at the 2010 Grammys.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was Taylor Swift's first to top the Billboard 200 chart?",
    options: ["Taylor Swift", "Fearless", "Speak Now"],
    correctAnswerIndex: 1,
    explanation: "Fearless was her first Billboard 200 number one album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift win the Album of the Year Grammy for '1989'?",
    options: ["2015", "2016", "2017"],
    correctAnswerIndex: 1,
    explanation: "1989 won the award at the 58th Grammys in February 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What chart milestone did Taylor Swift achieve in October 2022 with the release of 'Midnights'?",
    options: ["Occupied the entire top 10 of the Billboard Hot 100", "Most streamed album in a day", "Most top 10 entries in a week"],
    correctAnswerIndex: 0,
    explanation: "She became the first artist in history to occupy all top 10 positions of the Hot 100.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many times has Taylor Swift been named Time Person of the Year?",
    options: ["1", "2", "3"],
    correctAnswerIndex: 1,
    explanation: "She was named Person of the Year in 2023, after previously appearing as part of the Silence Breakers in 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was Taylor Swift's first-ever Billboard Hot 100 number-one single?",
    options: ["We Are Never Ever Getting Back Together", "Love Story", "Shake It Off"],
    correctAnswerIndex: 0,
    explanation: "We Are Never Ever Getting Back Together reached number one in 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which MTV Video Music Award did Taylor Swift win for her 'All Too Well: The Short Film'?",
    options: ["Video of the Year", "Best Longform Video", "Both Video of the Year and Best Longform Video"],
    correctAnswerIndex: 2,
    explanation: "She won both awards for the short film in 2022.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the record Taylor Swift holds for American Music Awards wins?",
    options: ["Most wins of any artist in history", "Most wins in a single night", "Most consecutive wins"],
    correctAnswerIndex: 0,
    explanation: "She has won over 40 AMAs, the most of any artist in history.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift win the Album of the Year Grammy for 'Folklore'?",
    options: ["2020", "2021", "2022"],
    correctAnswerIndex: 1,
    explanation: "Folklore won the award at the 63rd Grammys in March 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which country music award did Taylor Swift receive at age 17, becoming the youngest recipient of the honor?",
    options: ["CMA Horizon Award", "ACM Album of the Year", "CMA Entertainer of the Year"],
    correctAnswerIndex: 0,
    explanation: "She won the CMA Horizon Award (now Best New Artist) in 2007.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the special award Taylor Swift received at the 2019 AMAs to honor her decade-long dominance?",
    options: ["Artist of the Decade", "Icon Award", "Milestone Award"],
    correctAnswerIndex: 0,
    explanation: "She was named Artist of the Decade at the 2019 AMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won Taylor Swift the Grammy Award for Best Song Written for Visual Media in 2013?",
    options: ["Safe & Sound", "Sweeter than Fiction", "Today Was a Fairytale"],
    correctAnswerIndex: 0,
    explanation: "Safe & Sound for The Hunger Games soundtrack won the Grammy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many Diamond-certified albums does Taylor Swift have in the US?",
    options: ["1", "2", "3"],
    correctAnswerIndex: 1,
    explanation: "She has two Diamond albums (selling over 10 million copies in the US): Fearless and 1989.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift win the Billboard Woman of the Decade award?",
    options: ["2018", "2019", "2020"],
    correctAnswerIndex: 1,
    explanation: "Billboard named her Woman of the Decade in December 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which award did Taylor Swift win at the 2024 Grammy Awards for 'Midnights'?",
    options: ["Album of the Year", "Best Pop Vocal Album", "Both Album of the Year and Best Pop Vocal Album"],
    correctAnswerIndex: 2,
    explanation: "Midnights won both Best Pop Vocal Album and Album of the Year at the 66th Grammys.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of her songs won the MTV VMA for Best Female Video in 2009, leading to the Kanye West interruption?",
    options: ["You Belong With Me", "Love Story", "White Horse"],
    correctAnswerIndex: 0,
    explanation: "You Belong With Me won the Best Female Video category.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What record did Taylor Swift break on Spotify on the release day of 'Midnights'?",
    options: ["Most streamed album in a single day", "Most streams for a single track", "Most monthly listeners"],
    correctAnswerIndex: 0,
    explanation: "Midnights became the most-streamed album in a single day on Spotify.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Taylor Swift song won the Grammy for Best Music Video in 2016?",
    options: ["Bad Blood", "Blank Space", "Shake It Off"],
    correctAnswerIndex: 0,
    explanation: "The Bad Blood music video featuring Kendrick Lamar won the Grammy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many CMA Entertainer of the Year awards has Taylor Swift won?",
    options: ["1", "2", "3"],
    correctAnswerIndex: 1,
    explanation: "She has won the CMA Entertainer of the Year award twice (2009 and 2011).",
    timeLimitSeconds: 5
  },

  // --- Category 6: Collaborations (15 questions) ---
  {
    questionText: "Which indie rock musician and member of The National co-produced and co-wrote much of 'Folklore' and 'Evermore'?",
    options: ["Aaron Dessner", "Jack Antonoff", "Justin Vernon"],
    correctAnswerIndex: 0,
    explanation: "Aaron Dessner co-wrote and produced much of the alternative-leaning work.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which famous British singer-songwriter did Taylor Swift collaborate with on the songs 'Everything Has Changed' and 'Run'?",
    options: ["Ed Sheeran", "Harry Styles", "Sam Smith"],
    correctAnswerIndex: 0,
    explanation: "Ed Sheeran has collaborated with her on multiple tracks across Red and other projects.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist features on the country-pop duet 'Exile' from 'Folklore'?",
    options: ["Bon Iver", "The Civil Wars", "Gary Lightbody"],
    correctAnswerIndex: 0,
    explanation: "Bon Iver features on the hit duet Exile.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which female pop icon featured on the remix of the Lover track 'Lover' in 2019?",
    options: ["Shawn Mendes", "Zayn", "Brendon Urie"],
    correctAnswerIndex: 0,
    explanation: "Shawn Mendes collaborated on a special remix of Lover.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which band did Taylor Swift collaborate with on the track 'Coney Island' from 'Evermore'?",
    options: ["The National", "Bon Iver", "HAIM"],
    correctAnswerIndex: 0,
    explanation: "The National collaborated on Coney Island.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which pop star featured Taylor Swift on the track 'Breathe' on her 'Fearless' album?",
    options: ["Colbie Caillat", "Maren Morris", "Kelsea Ballerini"],
    correctAnswerIndex: 0,
    explanation: "Colbie Caillat provides backing vocals and co-wrote Breathe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which alternative band features on the track 'No Body, No Crime'?",
    options: ["HAIM", "Boygenius", "The National"],
    correctAnswerIndex: 0,
    explanation: "HAIM is featured on the murder mystery track No Body, No Crime.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which rapper did Taylor Swift collaborate with on the remix of 'Bad Blood' in 2015?",
    options: ["Kendrick Lamar", "Drake", "Kanye West"],
    correctAnswerIndex: 0,
    explanation: "Kendrick Lamar delivered verses for the hit remix of Bad Blood.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who did Taylor Swift collaborate with on the track 'ME!' from 'Lover'?",
    options: ["Brendon Urie", "Panic! At The Disco", "Both Brendon Urie and Panic! At The Disco"],
    correctAnswerIndex: 2,
    explanation: "Brendon Urie of Panic! At The Disco features on the single ME!.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which country music star did Taylor Swift collaborate with on the track 'Babe'?",
    options: ["Sugarland", "Keith Urban", "Tim McGraw"],
    correctAnswerIndex: 0,
    explanation: "She wrote the song and featured on Sugarland's recording of Babe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which collaborative single features Taylor Swift and Zayn Malik for the Fifty Shades Darker soundtrack?",
    options: ["I Don't Wanna Live Forever", "Safe & Sound", "Sweeter than Fiction"],
    correctAnswerIndex: 0,
    explanation: "Zayn and Taylor released I Don't Wanna Live Forever in late 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which indie pop act collaborated with Taylor on the Reputation track 'End Game' alongside Ed Sheeran?",
    options: ["Future", "Post Malone", "Kendrick Lamar"],
    correctAnswerIndex: 0,
    explanation: "Rapper Future is featured on End Game.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which female artist collaborated with Taylor on the track 'Snow On The Beach'?",
    options: ["Lana Del Rey", "Phoebe Bridgers", "Hayley Williams"],
    correctAnswerIndex: 0,
    explanation: "Lana Del Rey collaborated on the Midnights track.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which country trio features on the song 'Soon You'll Get Better' from 'Lover'?",
    options: ["The Chicks", "Lady A", "Runaway June"],
    correctAnswerIndex: 0,
    explanation: "The Chicks (formerly Dixie Chicks) featured on the track written about her mother's cancer.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which indie rock star is featured on the song 'Nothing New' from 'Red (Taylor's Version)'?",
    options: ["Phoebe Bridgers", "Hayley Williams", "Lorde"],
    correctAnswerIndex: 0,
    explanation: "Phoebe Bridgers features on the vault track Nothing New.",
    timeLimitSeconds: 5
  },

  // --- Category 7: Tours & Live Performances (15 questions) ---
  {
    questionText: "What was the name of Taylor Swift's first headlining concert tour in 2009?",
    options: ["Fearless Tour", "Speak Now World Tour", "Red Tour"],
    correctAnswerIndex: 0,
    explanation: "The Fearless Tour ran from 2009 to 2010 to support her second album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of her concert tours featured a massive inflatable tree on stage during the 'Folklore' section?",
    options: ["The Eras Tour", "Reputation Stadium Tour", "1989 World Tour"],
    correctAnswerIndex: 0,
    explanation: "The Eras Tour features a rustic cabin and forest scene.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which tour did Taylor Swift cancel due to the COVID-19 pandemic in 2020?",
    options: ["Lover Fest", "The Folklore Tour", "The Evermore Tour"],
    correctAnswerIndex: 0,
    explanation: "Lover Fest was cancelled in 2020 due to pandemic safety restrictions.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which stadium in Glendale, Arizona, hosted the opening night of The Eras Tour in March 2023?",
    options: ["State Farm Stadium", "Allegiant Stadium", "SoFi Stadium"],
    correctAnswerIndex: 0,
    explanation: "The Eras Tour kicked off at State Farm Stadium on March 17, 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the title of the concert film documenting her 2018 stadium tour?",
    options: ["Taylor Swift: Reputation Stadium Tour", "The Eras Tour Concert Film", "Speak Now World Tour Live"],
    correctAnswerIndex: 0,
    explanation: "The Reputation Stadium Tour film was released on Netflix in late 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of her tours was her first all-stadium tour in North America?",
    options: ["Reputation Stadium Tour", "1989 World Tour", "Red Tour"],
    correctAnswerIndex: 0,
    explanation: "The Reputation Stadium Tour was her first stadium-exclusive tour.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the typical length of a standard show during The Eras Tour?",
    options: ["Over 3 hours", "2 hours", "1.5 hours"],
    correctAnswerIndex: 0,
    explanation: "The Eras Tour setlist runs for over 3 hours and features over 44 songs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many different 'acts' (representing her albums) are featured in the standard setup of The Eras Tour?",
    options: ["9", "10", "11"],
    correctAnswerIndex: 1,
    explanation: "The Eras Tour initially featured 10 acts, which updated to include The Tortured Poets Department.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song does Taylor Swift open the entire Eras Tour setlist with during the 'Lover' era?",
    options: ["Miss Americana & the Heartbreak Prince", "Cruel Summer", "Lover"],
    correctAnswerIndex: 0,
    explanation: "She opens with a shortened version of Miss Americana & the Heartbreak Prince.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What segment of her show features Taylor Swift performing acoustic songs that are not on the main setlist?",
    options: ["Surprise Songs / Acoustic Section", "The Vault Section", "The Request Section"],
    correctAnswerIndex: 0,
    explanation: "The surprise songs section features two unique acoustic tracks each night.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift embark on her 'Red Tour'?",
    options: ["2012", "2013", "2014"],
    correctAnswerIndex: 1,
    explanation: "The Red Tour ran from March 2013 to June 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which city did the '1989 World Tour' kick off in in May 2015?",
    options: ["Tokyo", "Seoul", "Sydney"],
    correctAnswerIndex: 0,
    explanation: "The 1989 World Tour kicked off at the Tokyo Dome in Japan.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the documentary filmed during her Reputation Stadium Tour and released in theaters?",
    options: ["Miss Americana", "Folklore: Long Pond Studio Sessions", "No theatrical film was released, it was on Netflix"],
    correctAnswerIndex: 2,
    explanation: "The Reputation tour movie was released directly to Netflix, not in theaters.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which stadium in Los Angeles hosted the final dates of the first US leg of The Eras Tour in August 2023?",
    options: ["SoFi Stadium", "Rose Bowl", "Dodger Stadium"],
    correctAnswerIndex: 0,
    explanation: "SoFi Stadium hosted six sold-out shows ending the first US leg.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which British arena did Taylor Swift sell out for multiple dates during her Speak Now World Tour?",
    options: ["The O2 Arena", "Wembley Arena", "Manchester Arena"],
    correctAnswerIndex: 0,
    explanation: "She played multiple sold-out dates at The O2 Arena in London.",
    timeLimitSeconds: 5
  },

  // --- Category 8: Business, Fashion, Philanthropy (15 questions) ---
  {
    questionText: "What was the name of Taylor Swift's debut signature perfume released in 2011?",
    options: ["Wonderstruck", "Taylor by Taylor Swift", "Incredible Things"],
    correctAnswerIndex: 0,
    explanation: "Wonderstruck was launched in partnership with Elizabeth Arden in 2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which retail giant partnered with Taylor Swift in 2012 to release exclusive deluxe editions of her album 'Red'?",
    options: ["Target", "Walmart", "Best Buy"],
    correctAnswerIndex: 0,
    explanation: "Target is famous for its exclusive red-colored vinyl and CD deluxe editions.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which business executive's acquisition of Big Machine Records in 2019 prompted Taylor Swift to re-record her masters?",
    options: ["Scooter Braun", "Scott Borchetta", "Lucian Grainge"],
    correctAnswerIndex: 0,
    explanation: "Scooter Braun's Ithica Holdings acquired Big Machine, leading to the conflict.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How much money did Taylor Swift donate to food bank charities in cities along her Eras Tour routes?",
    options: ["Generous anonymous donations feeding thousands in each city", "$1 million flat", "$100,000 flat"],
    correctAnswerIndex: 0,
    explanation: "She made substantial, unpublicized donations to local food banks in every city she visited on tour.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which fashion designer created the custom pastel gowns Taylor Swift wore during her Speak Now performances on the Eras Tour?",
    options: ["Nicole + Felicia", "Elie Saab", "Zuhair Murad"],
    correctAnswerIndex: 0,
    explanation: "Designers Nicole + Felicia created several of her iconic ballroom gowns.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which luxury fashion house designed the custom sparkly bodysuits Taylor Swift wore for the opening 'Lover' era on the Eras Tour?",
    options: ["Versace", "Roberto Cavalli", "Oscar de la Renta"],
    correctAnswerIndex: 0,
    explanation: "Versace designed the signature pink and blue sparkly bodysuits.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift write a famous open letter to Apple Music criticizing their royalty policy during trial periods?",
    options: ["2014", "2015", "2016"],
    correctAnswerIndex: 1,
    explanation: "She wrote 'To Apple, Love Taylor' in June 2015, prompting Apple to change their policy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which streaming platform did Taylor Swift pull her entire catalog from in 2014 over compensation disputes before returning in 2017?",
    options: ["Spotify", "Apple Music", "Tidal"],
    correctAnswerIndex: 0,
    explanation: "She pulled her music from Spotify in November 2014, advocating for artist value.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the second fragrance released by Taylor Swift in 2012?",
    options: ["Wonderstruck Enchanted", "Taylor", "Incredible Things"],
    correctAnswerIndex: 0,
    explanation: "Wonderstruck Enchanted was released as a sequel fragrance in 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which brand did Taylor Swift partner with for a major commercial campaign featuring her riding a 'corgi' and drinking diet soda?",
    options: ["Diet Coke", "Keds", "Apple"],
    correctAnswerIndex: 0,
    explanation: "She was a long-time brand ambassador for Diet Coke.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which clothing brand did Taylor Swift partner with in 2013 to release a signature line of sneakers?",
    options: ["Keds", "Adidas", "Converse"],
    correctAnswerIndex: 0,
    explanation: "She released multiple collaborative collections of Keds champion sneakers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How much did Taylor Swift donate to public schools in New York City in 2014 after releasing 'Welcome to New York'?",
    options: ["All her proceeds from the song", "$100,000", "$500,000"],
    correctAnswerIndex: 0,
    explanation: "She donated all her publishing proceeds from Welcome to New York to NYC public schools.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which country music museum in Nashville features a $4 million education center funded by Taylor Swift?",
    options: ["Country Music Hall of Fame and Museum", "Grand Ole Opry Museum", "Ryman Auditorium"],
    correctAnswerIndex: 0,
    explanation: "The Taylor Swift Education Center opened at the Museum in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which streaming giant did Taylor Swift partner with to release her intimate documentary 'Miss Americana' in 2020?",
    options: ["Netflix", "Disney+", "Amazon Prime"],
    correctAnswerIndex: 0,
    explanation: "Miss Americana premiered at Sundance and was released on Netflix.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which ticketing service faced massive congressional scrutiny and lawsuits after their platform crashed during the Eras Tour presale in 2022?",
    options: ["Ticketmaster", "StubHub", "SeatGeek"],
    correctAnswerIndex: 0,
    explanation: "Ticketmaster's system collapsed due to unprecedented demand during the November 2022 presale.",
    timeLimitSeconds: 5
  },

  // --- Category 9: Trivia, Nicknames & Fun Facts (25 questions) ---
  {
    questionText: "What is Taylor Swift's lucky number, which she often painted on her hand before concerts?",
    options: ["13", "7", "22"],
    correctAnswerIndex: 0,
    explanation: "13 is her lucky number, born on December 13th.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which country singer is Taylor Swift named after?",
    options: ["James Taylor", "Taylor Dayne", "Taylor Hicks"],
    correctAnswerIndex: 0,
    explanation: "Her parents named her after singer-songwriter James Taylor.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the children's theater group Taylor Swift participated in during her youth in Pennsylvania?",
    options: ["Youth Theatre Academy", "Reading Community Players", "Berks Youth Theatre Academy"],
    correctAnswerIndex: 2,
    explanation: "She was active in the Berks Youth Theatre Academy productions.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the nickname fans use to refer to Taylor Swift's apartment in Tribeca, New York?",
    options: ["Tay-cility", "Bardi House", "The Tribeca Loft"],
    correctAnswerIndex: 2,
    explanation: "Fans refer to her New York residence as the Tribeca loft/apartment.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of these is the name of Taylor Swift's childhood horse?",
    options: ["No childhood horse existed", "Ginger", "Goldie"],
    correctAnswerIndex: 0,
    explanation: "She did not own a childhood horse; she grew up riding but did not have a personal pet horse.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which book did Taylor Swift write as a teenager that remains unpublished?",
    options: ["A Novel", "A Girl Named Girl", "The Christmas Tree Farm"],
    correctAnswerIndex: 1,
    explanation: "She wrote a non-fiction novel titled A Girl Named Girl at age 14.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the fictional teenage characters in the Folklore love triangle trilogy?",
    options: ["Betty, James, and Inez", "Betty, James, and Augustine", "Betty, James, and Dorothea"],
    correctAnswerIndex: 1,
    explanation: "The trilogy characters are Betty, James, and Augustine (or the unnamed summer girl).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song did Taylor Swift perform for her audition at Big Machine Records that won over Scott Borchetta?",
    options: ["Teardrops On My Guitar", "Our Song", "Redneck Woman"],
    correctAnswerIndex: 0,
    explanation: "She performed Teardrops On My Guitar in their offices.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the local Nashville café where Taylor Swift was discovered during a showcase performance in 2005?",
    options: ["Bluebird Cafe", "The Listening Room", "Tootsies"],
    correctAnswerIndex: 0,
    explanation: "She was discovered by Scott Borchetta at the Bluebird Cafe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which celebrity hosted the SNL episode where Taylor Swift performed her famous 'Monologue Song (La La La)'?",
    options: ["She hosted it herself", "Taylor Lautner", "Seth Rogen"],
    correctAnswerIndex: 0,
    explanation: "She served as both the host and musical guest for the episode in November 2009.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the character Taylor Swift voiced in the 2012 animated movie 'The Lorax'?",
    options: ["Audrey", "Norma", "Mimi"],
    correctAnswerIndex: 0,
    explanation: "She voiced the character Audrey alongside Zac Efron.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which television series did Taylor Swift make a cameo appearance on as a corpse named Haley Jones in 2009?",
    options: ["CSI: Crime Scene Investigation", "Law & Order: SVU", "Grey's Anatomy"],
    correctAnswerIndex: 0,
    explanation: "She guest starred in the CSI episode 'Turn, Turn, Turn'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which sitcom did Taylor Swift make a guest appearance on as Elaine in the Season 2 finale in 2013?",
    options: ["New Girl", "Glee", "Modern Family"],
    correctAnswerIndex: 0,
    explanation: "She made a cameo in the New Girl episode 'Elaine's Big Day'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Taylor Swift's favorite holiday?",
    options: ["Christmas", "Thanksgiving", "4th of July"],
    correctAnswerIndex: 0,
    explanation: "Growing up on a Christmas tree farm, she has always professed a deep love for Christmas.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of her albums did Taylor Swift write in its entirety during the COVID-19 quarantine?",
    options: ["Folklore", "Lover", "Midnights"],
    correctAnswerIndex: 0,
    explanation: "She wrote and recorded Folklore remotely during the quarantine period.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the pseudonym Taylor Swift used to co-write Calvin Harris's hit 'This Is What You Came For'?",
    options: ["Nils Sjöberg", "William Bowery", "Jack Antonoff"],
    correctAnswerIndex: 0,
    explanation: "She co-wrote the song under the Swedish pseudonym Nils Sjöberg.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the pseudonym Taylor Swift's ex-boyfriend Joe Alwyn used to co-write songs on 'Folklore' and 'Evermore'?",
    options: ["William Bowery", "Nils Sjöberg", "Sam Wyls"],
    correctAnswerIndex: 0,
    explanation: "Joe Alwyn co-wrote under the pen name William Bowery.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which famous dictionary added the word 'Swiftie' to its official entries in 2023?",
    options: ["Oxford English Dictionary", "Merriam-Webster", "Cambridge Dictionary"],
    correctAnswerIndex: 0,
    explanation: "Oxford officially recognized the noun 'Swiftie' in its dictionary updates.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of these is Taylor Swift's favorite television show, which she frequently references and named a cat after?",
    options: ["Grey's Anatomy", "Friends", "Gilmore Girls"],
    correctAnswerIndex: 0,
    explanation: "She is a massive fan of Grey's Anatomy and named her first cat after Meredith Grey.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the first guitar model Taylor Swift designed in collaboration with Taylor Guitars?",
    options: ["Taylor Swift Baby Taylor (TSBT)", "Swift Custom Acoustic", "The Fearless Dreadnought"],
    correctAnswerIndex: 0,
    explanation: "They collaborated on the Taylor Swift Baby Taylor model.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of her songs was inspired by her experience giving a commencement speech at NYU in 2022?",
    options: ["22", "No song was written about it", "Bejeweled"],
    correctAnswerIndex: 1,
    explanation: "She gave a speech and received an honorary doctorate but did not release a song about the event.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the title of the poem Taylor Swift wrote at age 10 that won a national contest?",
    options: ["Monster in My Closet", "A Girl Named Girl", "The Christmas Tree Farm"],
    correctAnswerIndex: 0,
    explanation: "She won a national poetry contest with her poem Monster in My Closet.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of her albums was released on the exact same day as her grandmother Marjorie's birthday?",
    options: ["No album was released on her birthday", "Evermore", "Folklore"],
    correctAnswerIndex: 0,
    explanation: "None of her albums match her grandmother's birthday of October 5th.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which type of dessert is Taylor Swift famously known for baking for her fans during secret listening sessions?",
    options: ["Chai sugar cookies", "Chocolate chip cookies", "Pumpkin muffins"],
    correctAnswerIndex: 0,
    explanation: "She famously baked homemade chai sugar cookies for fans during the 1989 Secret Sessions.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the first record label that signed Taylor Swift to a development deal at age 13 before she walked away?",
    options: ["RCA Records", "Big Machine Records", "Sony/ATV Music Publishing"],
    correctAnswerIndex: 0,
    explanation: "She was signed to a development deal with RCA Records but left because they wouldn't let her record her own songs.",
    timeLimitSeconds: 5
  },

  // --- Category 10: Extra General Trivia & Mixed (30 questions to reach 200+) ---
  {
    questionText: "Which of the following songs was NOT a billboard Hot 100 number one for Taylor Swift?",
    options: ["Style", "Blank Space", "Shake It Off"],
    correctAnswerIndex: 0,
    explanation: "Style peaked at number 6 on the Billboard Hot 100.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which singer did Taylor Swift collaborate with on the hit single 'Safe & Sound' in 2011?",
    options: ["The Civil Wars", "Ed Sheeran", "Bon Iver"],
    correctAnswerIndex: 0,
    explanation: "The Civil Wars collaborated on the Hunger Games soundtrack single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the 2013 song Taylor Swift collaborated on with Jack Antonoff for the movie One Chance?",
    options: ["Sweeter than Fiction", "Safe & Sound", "Today Was a Fairytale"],
    correctAnswerIndex: 0,
    explanation: "Sweeter than Fiction was her first official collaboration with Jack Antonoff.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'It's a love story, baby, just say yes'?",
    options: ["Love Story", "You Belong With Me", "Mine"],
    correctAnswerIndex: 0,
    explanation: "This is the primary hook line from Love Story.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What year did Taylor Swift make her first appearance on the Met Gala red carpet?",
    options: ["2008", "2010", "2012"],
    correctAnswerIndex: 0,
    explanation: "She attended the Met Gala for the first time in 2008.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who styled Taylor Swift's iconic Met Gala 2016 futuristic silver gown?",
    options: ["Louis Vuitton", "Oscar de la Renta", "Versace"],
    correctAnswerIndex: 0,
    explanation: "She wore a custom snakeskin-like silver dress designed by Louis Vuitton.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist features on the song 'Fly' by Nicki Minaj, which Taylor Swift covered during a tour performance?",
    options: ["Rihanna", "Nicki Minaj", "Both Rihanna and Nicki Minaj"],
    correctAnswerIndex: 2,
    explanation: "Fly features Rihanna and Nicki Minaj, and Taylor joined Nicki on stage to perform it.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Taylor Swift's childhood hometown in Pennsylvania?",
    options: ["Wyomissing", "Reading", "West Reading"],
    correctAnswerIndex: 0,
    explanation: "She was raised in Wyomissing, Pennsylvania.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Speak Now' was written about the Kanye West VMAs incident?",
    options: ["Innocent", "Mean", "Long Live"],
    correctAnswerIndex: 0,
    explanation: "Innocent was written about forgiving Kanye West after the VMA interruption.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the time limit for questions in Taylor Swift's quiz?",
    options: ["5 seconds", "10 seconds", "15 seconds"],
    correctAnswerIndex: 0,
    explanation: "Every question in this quiz is set to a 5-second time limit.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'We gather stones, never knowing what they'll mean'?",
    options: ["my tears ricochet", "cardigan", "the 1"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the bridge of my tears ricochet.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which talk show host did Taylor Swift make her first TV appearance with in 2006?",
    options: ["Jay Leno", "Ellen DeGeneres", "Jimmy Kimmel"],
    correctAnswerIndex: 0,
    explanation: "She made her first major late-night appearance on The Tonight Show with Jay Leno.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the first name of Taylor Swift's grandmother's husband, featured in her home movies?",
    options: ["Lanny", "Scott", "Scott Kingsley"],
    correctAnswerIndex: 0,
    explanation: "Marjorie Finlay's husband was Lanny Finlay.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features Taylor Swift saying: 'You got me looking at you, looking at me'?",
    options: ["No song has this lyric, it's a Cardi B song", "Style", "Cruel Summer"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the pre-chorus of Please Me by Cardi B and Bruno Mars.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was Taylor Swift's first-ever acting role in a theatrical film?",
    options: ["Valentine's Day", "The Giver", "Cats"],
    correctAnswerIndex: 0,
    explanation: "She made her movie acting debut playing Felicia in Valentine's Day (2010).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Lover' did Taylor Swift record about her mother's battle with cancer?",
    options: ["Soon You'll Get Better", "The Archer", "Lover"],
    correctAnswerIndex: 0,
    explanation: "Soon You'll Get Better features The Chicks and deals with her mother's illness.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of these is Taylor Swift's official fan club name?",
    options: ["Taylor Nation", "Swifties Online", "The Red Club"],
    correctAnswerIndex: 0,
    explanation: "Her official fan PR team and fan club handle is Taylor Nation.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as a promotional single from '1989' just before the album release in 2014?",
    options: ["Welcome to New York", "Out of the Woods", "Both Welcome to New York and Out of the Woods"],
    correctAnswerIndex: 2,
    explanation: "Both tracks were released as countdown promotional singles on iTunes.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'This is the last time I'm asking you why'?",
    options: ["The Last Time", "Exile", "All Too Well"],
    correctAnswerIndex: 0,
    explanation: "This is a line from the chorus of The Last Time featuring Gary Lightbody.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the musical key of Taylor Swift's 'Shake It Off'?",
    options: ["G major", "C major", "D major"],
    correctAnswerIndex: 0,
    explanation: "Shake It Off is written in the key of G major.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who directed the music video for Taylor Swift's 'Blank Space'?",
    options: ["Joseph Kahn", "Director X", "Colin Tilley"],
    correctAnswerIndex: 0,
    explanation: "Joseph Kahn directed the award-winning music video for Blank Space.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who directed the music video for 'Look What You Made Me Do'?",
    options: ["Joseph Kahn", "Director X", "Dave Meyers"],
    correctAnswerIndex: 0,
    explanation: "Joseph Kahn directed the visually dense music video for Look What You Made Me Do.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which state did Taylor Swift buy her historic Samuel Goldwyn Estate in?",
    options: ["California", "New York", "Rhode Island"],
    correctAnswerIndex: 0,
    explanation: "She purchased the historic Beverly Hills estate in California.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features Taylor Swift saying: 'Cause darling, I'm a nightmare dressed like a daydream'?",
    options: ["Blank Space", "Style", "Cruel Summer"],
    correctAnswerIndex: 0,
    explanation: "This is a famous line in the chorus of Blank Space.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which platform host interviewed Taylor Swift for her 73 Questions segment in her home?",
    options: ["Vogue", "Harper's Bazaar", "Complex"],
    correctAnswerIndex: 0,
    explanation: "She did the popular 73 Questions segment with Vogue in 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which single features the lyric: 'I'm the best, draft pick'?",
    options: ["No song has this lyric, it's a Nicki Minaj song", "Ready For It?", "Bad Blood"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the track I'm the Best by Nicki Minaj.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Taylor Swift's favorite footwear style for outdoor concerts?",
    options: ["Thigh-high boots", "Sneakers", "Flat sandals"],
    correctAnswerIndex: 0,
    explanation: "She is famously known for performing in custom Christian Louboutin thigh-high boots during the Eras Tour.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Taylor Swift perform at the Victoria's Secret Fashion Show for the first time?",
    options: ["2013", "2012", "2014"],
    correctAnswerIndex: 0,
    explanation: "She performed at the Victoria's Secret Fashion Show in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'He says he loves my personality'?",
    options: ["No song has this lyric, it's a Nicki Minaj song", "Stay Stay Stay", "Cruel Summer"],
    correctAnswerIndex: 0,
    explanation: "This is a line from Super Bass by Nicki Minaj.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who did Taylor Swift present the Video Vanguard Award to at the 2015 MTV Video Music Awards?",
    options: ["Kanye West", "The Weeknd", "Beyoncé"],
    correctAnswerIndex: 0,
    explanation: "Taylor Swift presented the award to Kanye West at the 2015 ceremony.",
    timeLimitSeconds: 5
  }
];
