import { Question } from './mockData';

export const CARDI_B_QUESTIONS: Omit<Question, 'id' | 'categoryId' | 'subCategoryId'>[] = [
  // --- Category 1: Discography & Albums (25 questions) ---
  {
    questionText: "What was the name of Cardi B's debut studio album released in 2018?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music", "Privacy Settings"],
    correctAnswerIndex: 0,
    explanation: "Invasion of Privacy was Cardi B's debut studio album released on April 6, 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Cardi B release her first mixtape, 'Gangsta Bitch Music, Vol. 1'?",
    options: ["2015", "2016", "2017"],
    correctAnswerIndex: 1,
    explanation: "Gangsta Bitch Music, Vol. 1 was released on March 7, 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Cardi B release 'Gangsta Bitch Music, Vol. 2'?",
    options: ["2016", "2017", "2018"],
    correctAnswerIndex: 1,
    explanation: "Gangsta Bitch Music, Vol. 2 was released on January 20, 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as the lead single from 'Invasion of Privacy' in 2017?",
    options: ["Bodak Yellow", "Bartier Cardi", "Be Careful"],
    correctAnswerIndex: 0,
    explanation: "Bodak Yellow was released as the album's lead single in June 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which compilation album did Cardi B participate in with KSR Group in 2016?",
    options: ["Underestimated: The Album", "The KSR Takeover", "Gangsta Group Volume 1"],
    correctAnswerIndex: 0,
    explanation: "Cardi B collaborated on the album Underestimated: The Album in 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many tracks are on the standard edition of 'Invasion of Privacy'?",
    options: ["11", "13", "15"],
    correctAnswerIndex: 1,
    explanation: "The standard edition of Invasion of Privacy contains 13 tracks.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which record label released Cardi B's debut studio album?",
    options: ["Atlantic Records", "Def Jam Recordings", "Epic Records"],
    correctAnswerIndex: 0,
    explanation: "Cardi B signed with Atlantic Records, who released Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as the second single from 'Invasion of Privacy'?",
    options: ["Bartier Cardi", "I Like It", "Be Careful"],
    correctAnswerIndex: 0,
    explanation: "Bartier Cardi featuring 21 Savage was released as the second single in December 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the opening track on the album 'Invasion of Privacy'?",
    options: ["Get Up 10", "Drip", "Bickenhead"],
    correctAnswerIndex: 0,
    explanation: "Get Up 10 is the introductory track on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the closing track on the standard edition of 'Invasion of Privacy'?",
    options: ["I Do", "Thru Your Phone", "She Bad"],
    correctAnswerIndex: 0,
    explanation: "I Do featuring SZA is the final track on the album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Invasion of Privacy' samples Project Pat's song 'Chickenhead'?",
    options: ["Bickenhead", "Get Up 10", "Money Bag"],
    correctAnswerIndex: 0,
    explanation: "Bickenhead is a feminist flip of Project Pat's 2001 classic Chickenhead.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what month of 2018 was 'Invasion of Privacy' released?",
    options: ["March", "April", "May"],
    correctAnswerIndex: 1,
    explanation: "The album was officially released on April 6, 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the cover art of Cardi B sitting in the back of a car drinking a bottle of beer?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "The cover of Vol. 1 features Cardi B in the backseat of a car.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features Cardi B sitting on a bed in front of a blue background for its cover art?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Invasion of Privacy"],
    correctAnswerIndex: 0,
    explanation: "The cover of Vol. 2 features Cardi B sitting on a mattress against a blue wall.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as the third single from 'Invasion of Privacy' in March 2018?",
    options: ["Be Careful", "Drip", "I Like It"],
    correctAnswerIndex: 0,
    explanation: "Be Careful was released as the third single on March 29, 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as the fourth single from 'Invasion of Privacy'?",
    options: ["I Like It", "Ring", "Drip"],
    correctAnswerIndex: 0,
    explanation: "I Like It was released as the album's fourth single in May 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as the fifth single from 'Invasion of Privacy'?",
    options: ["Ring", "I Do", "She Bad"],
    correctAnswerIndex: 0,
    explanation: "Ring featuring Kehlani was released as the fifth single in August 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was Cardi B's first commercially available single on a major label?",
    options: ["Bodak Yellow", "Cheap Ass Weave", "Stripper Hoe"],
    correctAnswerIndex: 0,
    explanation: "Bodak Yellow was her major-label debut single in 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who produced Cardi B's breakout single 'Bodak Yellow'?",
    options: ["J. White Did It", "Murda Beatz", "Metro Boomin"],
    correctAnswerIndex: 0,
    explanation: "J. White Did It produced the chart-topping track Bodak Yellow.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song on 'Invasion of Privacy' co-features Chance the Rapper?",
    options: ["Best Life", "Get Up 10", "Drip"],
    correctAnswerIndex: 0,
    explanation: "Chance the Rapper is featured on the song Best Life.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who was the executive producer of 'Invasion of Privacy' alongside Brooklyn Johnny?",
    options: ["Cardi B", "Offset", "Quality Control"],
    correctAnswerIndex: 0,
    explanation: "Cardi B herself executive produced the album alongside Brooklyn Johnny.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist features on the song 'Drip' on 'Invasion of Privacy'?",
    options: ["Migos", "21 Savage", "YG"],
    correctAnswerIndex: 0,
    explanation: "The rap group Migos features on the track Drip.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which singer features on the track 'Ring'?",
    options: ["Kehlani", "SZA", "H.E.R."],
    correctAnswerIndex: 0,
    explanation: "R&B singer Kehlani provides the hook for the song Ring.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist is featured on the song 'She Bad'?",
    options: ["YG", "21 Savage", "Lil Yachty"],
    correctAnswerIndex: 0,
    explanation: "YG is the featured artist on She Bad.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What color is Cardi B's hair on the standard cover art of 'Invasion of Privacy'?",
    options: ["Yellow", "Blue", "Pink"],
    correctAnswerIndex: 0,
    explanation: "She sports a short, bright yellow retro hairstyle on the album cover.",
    timeLimitSeconds: 5
  },

  // --- Category 2: Song-to-Album Matching (40 questions) ---
  {
    questionText: "Which album or mixtape features the song 'Foreva'?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Invasion of Privacy"],
    correctAnswerIndex: 0,
    explanation: "Foreva is one of the breakout tracks on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album or mixtape features the song 'Lick' featuring Offset?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Invasion of Privacy"],
    correctAnswerIndex: 0,
    explanation: "Lick was released on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album or mixtape features the song 'Washpoppin'?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Invasion of Privacy"],
    correctAnswerIndex: 0,
    explanation: "Washpoppin is track 4 on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album or mixtape features the song 'Red Barz'?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Invasion of Privacy"],
    correctAnswerIndex: 0,
    explanation: "Red Barz is a freestyle featured on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the hit song 'I Like It'?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "I Like It is the smash hit fourth single from Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Get Up 10'?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2"],
    correctAnswerIndex: 0,
    explanation: "Get Up 10 is the opening song of Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Bickenhead'?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2"],
    correctAnswerIndex: 0,
    explanation: "Bickenhead is track 2 on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Drip' featuring Migos?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Drip featuring Migos is track 3 on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Money Bag'?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2"],
    correctAnswerIndex: 0,
    explanation: "Money Bag is track 7 on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Best Life' featuring Chance the Rapper?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Best Life is track 6 on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Bartier Cardi'?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1"],
    correctAnswerIndex: 0,
    explanation: "Bartier Cardi is the second track on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Be Careful'?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Be Careful is track 8 on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Ring' featuring Kehlani?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2"],
    correctAnswerIndex: 0,
    explanation: "Ring is track 10 on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Thru Your Phone'?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Thru Your Phone is track 11 on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'She Bad' featuring YG?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2"],
    correctAnswerIndex: 0,
    explanation: "She Bad is track 12 on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'I Do' featuring SZA?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "I Do is track 13 on Invasion of Privacy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Trick'?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Trick is track 10 on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Leavela at Temple'?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Leavela at Temple is featured on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Cheap Ass Weave'?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Cheap Ass Weave is track 8 on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Stripper Hoe'?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Stripper Hoe is track 3 on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Her Carter'?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Her Carter is track 9 on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Pull Up'?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Pull Up is track 3 on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Rollin'?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Rollin is track 8 on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Back It Up'?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Back It Up is track 9 on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Hustle'?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Hustle is track 10 on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In which project is the song 'Bronx Season' included?",
    options: ["Underestimated: The Album", "Gangsta Bitch Music, Vol. 1", "Invasion of Privacy"],
    correctAnswerIndex: 0,
    explanation: "Bronx Season is included on the compilation Underestimated: The Album and Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Selfish'?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Selfish is track 7 on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'What a Girl Likes'?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "What a Girl Likes is track 11 on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Pop Off'?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Pop Off is track 6 on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Never Give Up'?",
    options: ["Gangsta Bitch Music, Vol. 2", "Gangsta Bitch Music, Vol. 1", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Never Give Up is track 5 on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which project features the song 'Intro (Gangsta Bitch)'?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Invasion of Privacy"],
    correctAnswerIndex: 0,
    explanation: "Intro is the first track on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which project features the song 'Outro' featuring DJ Self?",
    options: ["Gangsta Bitch Music, Vol. 1", "Gangsta Bitch Music, Vol. 2", "Invasion of Privacy"],
    correctAnswerIndex: 0,
    explanation: "Outro featuring DJ Self is the final track on Gangsta Bitch Music, Vol. 1.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which standalone single released in late 2018 was NOT on the standard 'Invasion of Privacy'?",
    options: ["Money", "Press", "Up"],
    correctAnswerIndex: 0,
    explanation: "Money was released in October 2018 as a standalone single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which standalone single released in 2019 features cover art of Cardi B in a courtroom?",
    options: ["Press", "Money", "WAP"],
    correctAnswerIndex: 0,
    explanation: "Press was released in May 2019 with courtroom-themed imagery.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which massive 2020 single was released as a standalone collaborative hit?",
    options: ["WAP", "Up", "Hot Shit"],
    correctAnswerIndex: 0,
    explanation: "WAP featuring Megan Thee Stallion was released in August 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which 2021 solo single features the famous hook 'If it's up, then it's up, then it's up, then it's stuck'?",
    options: ["Up", "Press", "Money"],
    correctAnswerIndex: 0,
    explanation: "Up was released in February 2021 as a solo single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which 2022 single features Ye and Lil Durk?",
    options: ["Hot Shit", "Bongos", "Enough (Miami)"],
    correctAnswerIndex: 0,
    explanation: "Hot Shit was released in July 2022 featuring Ye and Lil Durk.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which 2023 single marked a reunion with Megan Thee Stallion?",
    options: ["Bongos", "WAP", "Hot Shit"],
    correctAnswerIndex: 0,
    explanation: "Bongos was released in September 2023 as a collaboration with Megan Thee Stallion.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which 2024 single features the subtitle '(Miami)'?",
    options: ["Enough (Miami)", "Like What", "Hot Shit"],
    correctAnswerIndex: 0,
    explanation: "Enough (Miami) was released as a single in March 2024.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which 2024 single features a sample of Missy Elliott's 'She's a Bitch'?",
    options: ["Like What (Freestyle)", "Enough (Miami)", "Bongos"],
    correctAnswerIndex: 0,
    explanation: "Like What (Freestyle) samples Missy Elliott's 1999 track She's a Bitch.",
    timeLimitSeconds: 5
  },

  // --- Category 3: Song Lyrics & Music Video Facts (25 questions) ---
  {
    questionText: "Which song contains the lyric: 'I don't dance now, I make money moves'?",
    options: ["Bodak Yellow", "Bartier Cardi", "Money"],
    correctAnswerIndex: 0,
    explanation: "This is the iconic opening hook line from Bodak Yellow.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Where was the music video for 'Bodak Yellow' filmed?",
    options: ["Dubai", "New York City", "Miami"],
    correctAnswerIndex: 0,
    explanation: "The music video for Bodak Yellow was filmed in Dubai and features cheetahs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'Cardi in a Bentley, Biebs on the plate'?",
    options: ["Bartier Cardi", "Drip", "She Bad"],
    correctAnswerIndex: 0,
    explanation: "This lyric appears in Cardi's fast-paced verses in Bartier Cardi.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'I Like It' music video, which tropical city setting is visually recreated?",
    options: ["Havana / Miami style", "Rio de Janeiro", "San Juan"],
    correctAnswerIndex: 0,
    explanation: "The video features bright Caribbean aesthetics filmed in Little Havana, Miami.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'Tell me where your mind is, lay back on my spine'?",
    options: ["Ring", "Be Careful", "I Do"],
    correctAnswerIndex: 0,
    explanation: "This is a lyric from the hook of the song Ring featuring Kehlani.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Cardi B walking through a wedding inside a church in the middle of a desert?",
    options: ["Be Careful", "Ring", "Press"],
    correctAnswerIndex: 0,
    explanation: "The video for Be Careful features a wedding and funeral in a desert church.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I wanna get married, like the Currys, Steph and Ayesha'?",
    options: ["Best Life", "Drip", "Bartier Cardi"],
    correctAnswerIndex: 1,
    explanation: "This line is from Cardi's verse in Drip.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'WAP' music video, which type of exotic big cats are seen walking around the mansion rooms?",
    options: ["Leopards and tigers", "Lions and cougars", "Panthers and cheetahs"],
    correctAnswerIndex: 0,
    explanation: "Leopards and tigers appear in the stylized rooms of the WAP mansion.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which celebrity makes a surprise cameo appearance walking down the hallway in the 'WAP' music video?",
    options: ["Kylie Jenner", "Kim Kardashian", "Kendall Jenner"],
    correctAnswerIndex: 0,
    explanation: "Kylie Jenner makes a cameo walking down the hallway in the video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'Lookin' like a bag of money, wrap me in Chanel'?",
    options: ["Money Bag", "Money", "Press"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the chorus of Money Bag.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Cardi B playing a futuristic conductor surrounded by telephones in a blue space?",
    options: ["Ring", "Thru Your Phone", "Press"],
    correctAnswerIndex: 0,
    explanation: "The video for Ring features Cardi wrapped in phone cords in a futuristic setting.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'I run this land, I rule this land'?",
    options: ["Get Up 10", "Bodak Yellow", "Foreva"],
    correctAnswerIndex: 0,
    explanation: "This is a line from the intro track Get Up 10.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the music video for 'Up', what does Cardi B say goodbye to on a headstone?",
    options: ["2020", "Her old self", "The haters"],
    correctAnswerIndex: 0,
    explanation: "The video opens in a cemetery with a headstone reading 'RIP 2020'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'I get money, I'm a star, I'm a boss'?",
    options: ["Foreva", "Cheap Ass Weave", "Washpoppin"],
    correctAnswerIndex: 0,
    explanation: "This is from Cardi's early signature mixtape track Foreva.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video is set in a courtroom where Cardi B stands trial before a jury?",
    options: ["Press", "Money", "Up"],
    correctAnswerIndex: 0,
    explanation: "The music video for Press features courtroom and prison scenes.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'I can't believe you did this to me, after all we went through'?",
    options: ["Thru Your Phone", "Be Careful", "Ring"],
    correctAnswerIndex: 0,
    explanation: "This line is from the pre-chorus of Thru Your Phone.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Bongos' music video, what beachside accessory serves as a major prop?",
    options: ["Colorful lounge chairs", "Giant sandcastles", "Surfboards"],
    correctAnswerIndex: 0,
    explanation: "The video features Cardi and Megan on colorful beach chairs and in extravagant beach setups.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'Bitch, I'm a star, but I'm still in the street'?",
    options: ["Enough (Miami)", "Like What", "Hot Shit"],
    correctAnswerIndex: 0,
    explanation: "This is a key lyric from the 2024 single Enough (Miami).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I like texts from my exes when they want second chances'?",
    options: ["I Like It", "Be Careful", "I Do"],
    correctAnswerIndex: 0,
    explanation: "This is the opening line of Cardi B's verse in I Like It.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the music video for 'Money', what museum-like exhibit is Cardi B displayed inside?",
    options: ["A glass case", "A gold frame", "A velvet cage"],
    correctAnswerIndex: 0,
    explanation: "She is displayed inside a glass showcase cabinet in the video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I do what I like, I do what I want'?",
    options: ["I Do", "She Bad", "Best Life"],
    correctAnswerIndex: 0,
    explanation: "This is part of the hook of the track I Do.",
    timeLimitSeconds: 5
  },
  {
    questionText: "The 'Bartier Cardi' music video features a cameo from which famous boyfriend of Cardi B?",
    options: ["Offset", "21 Savage", "Travis Scott"],
    correctAnswerIndex: 0,
    explanation: "Offset appears in the back of a limousine with Cardi in the video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'I gotta run to the money, I gotta get it'?",
    options: ["Lick", "Red Barz", "Pull Up"],
    correctAnswerIndex: 0,
    explanation: "This is the central hook of Lick from Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Cardi B performing choreography on top of a giant skyscraper ledge?",
    options: ["Hot Shit", "Up", "Bongos"],
    correctAnswerIndex: 0,
    explanation: "The Hot Shit video features gravity-defying CGI choreography on a skyscraper wall.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I'ma block you on everything, then I'ma unblock you'?",
    options: ["Thru Your Phone", "Ring", "Be Careful"],
    correctAnswerIndex: 0,
    explanation: "This is a line describing a toxic relationship in Thru Your Phone.",
    timeLimitSeconds: 5
  },

  // --- Category 4: Personal Life (20 questions) ---
  {
    questionText: "What is Cardi B's birthdate?",
    options: ["October 11, 1992", "October 21, 1992", "September 11, 1992"],
    correctAnswerIndex: 0,
    explanation: "Cardi B was born on October 11, 1992, in Washington Heights, Manhattan.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Cardi B's real full name?",
    options: ["Belcalis Marlenis Almánzar", "Hennessy Carolina Almánzar", "Kiari Cephus Almánzar"],
    correctAnswerIndex: 0,
    explanation: "Her birth name is Belcalis Marlenis Almánzar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which borough of New York City was Cardi B primarily raised in?",
    options: ["The Bronx", "Brooklyn", "Queens"],
    correctAnswerIndex: 0,
    explanation: "Cardi B was raised in the Highbridge neighborhood of the South Bronx.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Cardi B's sister?",
    options: ["Hennessy Carolina", "Corona Clara", "Stella Rose"],
    correctAnswerIndex: 0,
    explanation: "Her younger sister's name is Hennessy Carolina Almánzar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the nationality/origin of Cardi B's father?",
    options: ["Dominican", "Trinidadian", "Puerto Rican"],
    correctAnswerIndex: 0,
    explanation: "Her father is Dominican and her mother is Trinidadian.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Cardi B's husband, whom she married in 2017?",
    options: ["Offset", "Quavo", "Takeoff"],
    correctAnswerIndex: 0,
    explanation: "She married Kiari Cephus, known professionally as Offset of the Migos.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Cardi B secretly marry Offset?",
    options: ["2017", "2018", "2016"],
    correctAnswerIndex: 0,
    explanation: "They secretly married in their bedroom in September 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Cardi B's daughter born in 2018?",
    options: ["Kulture Kiari Cephus", "Wave Set Cephus", "Stormi Cephus"],
    correctAnswerIndex: 0,
    explanation: "Her first child is a daughter named Kulture Kiari Cephus.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Cardi B's son born in 2021?",
    options: ["Wave Set Cephus", "Kulture Kiari Cephus", "Sir Cephus"],
    correctAnswerIndex: 0,
    explanation: "Her second child with Offset is a son named Wave Set Cephus.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was Cardi B's occupation before finding fame on social media and TV?",
    options: ["Exotic dancer / Stripper", "Dental assistant", "Sales associate"],
    correctAnswerIndex: 0,
    explanation: "Cardi B worked as an exotic dancer starting at age 19 to escape poverty and domestic violence.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which supermarket did Cardi B work at as a cashier in Lower Manhattan during her youth?",
    options: ["Amish Market", "Trader Joe's", "Whole Foods"],
    correctAnswerIndex: 0,
    explanation: "She worked at the Amish Market in Tribeca before being fired and transitioning to stripping.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which college did Cardi B attend before dropping out to pursue her career?",
    options: ["Borough of Manhattan Community College", "Bronx Community College", "Hunter College"],
    correctAnswerIndex: 0,
    explanation: "She attended Borough of Manhattan Community College (BMCC).",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Cardi B announce she was pregnant with her first child during a performance on Saturday Night Live?",
    options: ["2018", "2019", "2017"],
    correctAnswerIndex: 0,
    explanation: "She revealed her baby bump during her SNL performance in April 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the birth year of Cardi B's sister, Hennessy?",
    options: ["1995", "1997", "1993"],
    correctAnswerIndex: 0,
    explanation: "Hennessy Carolina was born on December 22, 1995.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which neighborhood in the Bronx is Cardi B's father's family from?",
    options: ["Highbridge", "Concourse", "Riverdale"],
    correctAnswerIndex: 0,
    explanation: "She grew up in Highbridge and spent much time at her paternal grandmother's home in Washington Heights.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What gang association did Cardi B admit to being part of during her teenage years?",
    options: ["Bloods", "Crips", "Latin Kings"],
    correctAnswerIndex: 0,
    explanation: "Cardi B has spoken openly about being associated with the Bloods gang since age 16.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Cardi B's astrological sun sign?",
    options: ["Libra", "Scorpio", "Virgo"],
    correctAnswerIndex: 0,
    explanation: "Born on October 11, Cardi B's zodiac sign is Libra.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many children does Cardi B have with Offset?",
    options: ["2", "3", "1"],
    correctAnswerIndex: 0,
    explanation: "Cardi B has 2 children with Offset: Kulture and Wave.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the reality TV show where Cardi B's sister Hennessy appeared alongside her?",
    options: ["Love & Hip Hop: New York", "Black Ink Crew", "The Real Housewives"],
    correctAnswerIndex: 0,
    explanation: "Hennessy Carolina made guest appearances on Love & Hip Hop: New York.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the middle name of Cardi B's husband Offset, which inspired Kulture's middle name?",
    options: ["Kiari", "Kendrell", "Marcus"],
    correctAnswerIndex: 0,
    explanation: "Offset's real name is Kiari Kendrell Cephus.",
    timeLimitSeconds: 5
  },

  // --- Category 5: Awards & Chart Records (20 questions) ---
  {
    questionText: "Which historic Grammy Award did Cardi B win in 2019?",
    options: ["Best Rap Album", "Best New Artist", "Album of the Year"],
    correctAnswerIndex: 0,
    explanation: "She won Best Rap Album for Invasion of Privacy, becoming the first solo female artist to do so.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many Billboard Hot 100 number-one singles did Cardi B achieve from 'Invasion of Privacy'?",
    options: ["2", "3", "1"],
    correctAnswerIndex: 0,
    explanation: "She had 2 number ones from the album: Bodak Yellow and I Like It.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Cardi B became the first female rapper to achieve how many Diamond-certified singles?",
    options: ["3", "1", "2"],
    correctAnswerIndex: 0,
    explanation: "She became the first female rapper to have three Diamond certified songs by the RIAA.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was Cardi B's first-ever Billboard Hot 100 number one?",
    options: ["Bodak Yellow", "I Like It", "Finesse Remix"],
    correctAnswerIndex: 0,
    explanation: "Bodak Yellow reached number one in September 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song became the first Spanish/English bilingual song to top the Hot 100 since Macarena?",
    options: ["I Like It", "Despacito", "Mi Gente"],
    correctAnswerIndex: 0,
    explanation: "I Like It featuring Bad Bunny and J Balvin reached number one in 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many total American Music Awards (AMAs) did Cardi B win in 2018?",
    options: ["3", "1", "5"],
    correctAnswerIndex: 0,
    explanation: "Cardi B took home 3 awards at the 2018 American Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which publication named 'Invasion of Privacy' the single best album of 2018?",
    options: ["Rolling Stone", "Billboard", "Pitchfork"],
    correctAnswerIndex: 0,
    explanation: "Rolling Stone ranked Invasion of Privacy at number one on their list of 50 Best Albums of 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Billboard Music Award did Cardi B win in 2019 for Top Rap Female Artist?",
    options: ["Top Rap Female Artist", "Top Artist", "Top Billboard 200 Album"],
    correctAnswerIndex: 0,
    explanation: "She won Top Rap Female Artist at the 2019 BBMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What record did 'Bodak Yellow' set for a solo female rap song in 2017?",
    options: ["First solo female rap number one since 1998", "Longest running female rap song", "Most streams in a single week"],
    correctAnswerIndex: 0,
    explanation: "It was the first solo female rap song to hit number one since Lauryn Hill's Doo Wop (That Thing) in 1998.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many total ASCAP Rhythm & Soul Music Awards has Cardi B won?",
    options: ["Over 10", "Under 5", "Zero"],
    correctAnswerIndex: 0,
    explanation: "Cardi B has won over 10 ASCAP Rhythm & Soul Awards throughout her chart run.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won Cardi B the MTV Video Music Award for Best Collaboration in 2021?",
    options: ["WAP", "Up", "Wild Side"],
    correctAnswerIndex: 0,
    explanation: "WAP won Best Collaboration at the 2021 MTV Video Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many total Billboard Music Awards has Cardi B won?",
    options: ["8", "3", "15"],
    correctAnswerIndex: 0,
    explanation: "She has won 8 Billboard Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Cardi B win Billboard's Woman of the Year award?",
    options: ["2020", "2018", "2022"],
    correctAnswerIndex: 0,
    explanation: "Cardi B was named Woman of the Year by Billboard in December 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which award did Cardi B win at the BET Awards in 2018 for Album of the Year?",
    options: ["Invasion of Privacy", "Gangsta Bitch Music", "Underestimated"],
    correctAnswerIndex: 0,
    explanation: "Invasion of Privacy won Album of the Year at the 2018 BET Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which collaborative single with Maroon 5 gave Cardi B another Hot 100 number one?",
    options: ["Girls Like You", "Sugar", "Payphone"],
    correctAnswerIndex: 0,
    explanation: "The remix of Maroon 5's Girls Like You featuring Cardi B spent 7 weeks at number one.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many Grammy nominations did Cardi B receive for the 2019 ceremony?",
    options: ["5", "3", "8"],
    correctAnswerIndex: 0,
    explanation: "Cardi B received 5 Grammy nominations at the 61st Annual Grammy Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was nominated for Record of the Year at the 2019 Grammy Awards?",
    options: ["I Like It", "Bodak Yellow", "Be Careful"],
    correctAnswerIndex: 0,
    explanation: "I Like It was nominated for Record of the Year at the 61st Grammys.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What chart history milestone did Cardi B achieve with 'Up' in 2021?",
    options: ["First female rapper with multiple solo Hot 100 number ones", "Longest charting solo rap song", "Highest debut for a solo female rap song"],
    correctAnswerIndex: 0,
    explanation: "Up reached number one, making her the first female rapper with multiple solo number-one hits.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track won Cardi B her first MTV Video Music Award for Song of Summer in 2018?",
    options: ["I Like It", "Bodak Yellow", "Finesse"],
    correctAnswerIndex: 0,
    explanation: "I Like It won Song of Summer at the 2018 VMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Cardi B win the People's Choice Award for Favorite Hip-Hop Artist?",
    options: ["2018", "2020", "2016"],
    correctAnswerIndex: 0,
    explanation: "Cardi B won the Favorite Hip-Hop Artist category at the People's Choice Awards in 2018.",
    timeLimitSeconds: 5
  },

  // --- Category 6: Collaborations (15 questions) ---
  {
    questionText: "Which two Latin music stars collaborated with Cardi B on the hit single 'I Like It'?",
    options: ["Bad Bunny and J Balvin", "Maluma and J Balvin", "Daddy Yankee and Ozuna"],
    correctAnswerIndex: 0,
    explanation: "I Like It features Puerto Rican rapper Bad Bunny and Colombian singer J Balvin.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who is the co-lead artist on the hit song 'WAP'?",
    options: ["Megan Thee Stallion", "Nicki Minaj", "Latto"],
    correctAnswerIndex: 0,
    explanation: "WAP is a collaborative single by Cardi B and Megan Thee Stallion.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which pop star collaborated with Cardi B on the hit remix of the song 'Finesse'?",
    options: ["Bruno Mars", "Justin Bieber", "The Weeknd"],
    correctAnswerIndex: 0,
    explanation: "Bruno Mars released the remix of Finesse featuring Cardi B in January 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who collaborated with Cardi B on the 2019 single 'Please Me'?",
    options: ["Bruno Mars", "Ed Sheeran", "DJ Khaled"],
    correctAnswerIndex: 0,
    explanation: "Please Me is the second collaboration between Cardi B and Bruno Mars.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which band features Cardi B on the remix of their single 'Girls Like You'?",
    options: ["Maroon 5", "OneRepublic", "Imagine Dragons"],
    correctAnswerIndex: 0,
    explanation: "Maroon 5 featured Cardi B on the mega-hit remix of Girls Like You.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which female artist collaborated with Cardi B on the 2021 single 'Wild Side'?",
    options: ["Normani", "Chlöe", "Lizzo"],
    correctAnswerIndex: 0,
    explanation: "Normani released the single Wild Side featuring Cardi B in July 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which rapper collaborated with Cardi B on the hit single 'Tomorrow 2'?",
    options: ["GloRilla", "Latto", "Ice Spice"],
    correctAnswerIndex: 0,
    explanation: "GloRilla and Cardi B collaborated on the hit track Tomorrow 2 in 2022.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist featured Cardi B on the remix 'Put It on Da Floor Again' in 2023?",
    options: ["Latto", "Coi Leray", "GloRilla"],
    correctAnswerIndex: 0,
    explanation: "Latto collaborated with Cardi B on the viral hit remix Put It on Da Floor Again.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which collaborative single features Cardi B, G-Eazy, and A$AP Rocky?",
    options: ["No Limit", "Fucking Problems", "West Coast"],
    correctAnswerIndex: 0,
    explanation: "Cardi B featured on G-Eazy's 2017 hit single No Limit.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track features Cardi B alongside DJ Khaled, Savage, and Justin Bieber?",
    options: ["No Brainer", "I'm the One", "Wish Wish"],
    correctAnswerIndex: 2,
    explanation: "Wait, Wish Wish features Cardi B and 21 Savage on DJ Khaled's album Father of Asahd.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which R&B singer collaborated with Cardi B on the track 'Clout'?",
    options: ["Offset", "Chris Brown", "Jeremih"],
    correctAnswerIndex: 0,
    explanation: "Clout is a single from Offset's debut solo album Father of 4 featuring Cardi B.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist features Cardi B and Charli XCX on the track 'Out Out'?",
    options: ["Joel Corry and Jax Jones", "David Guetta", "Calvin Harris"],
    correctAnswerIndex: 0,
    explanation: "Joel Corry and Jax Jones released Out Out featuring Charli XCX and Cardi B.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which singer collaborated with Cardi B on the track 'South of the Border'?",
    options: ["Ed Sheeran", "Camila Cabello", "Both Ed Sheeran and Camila Cabello"],
    correctAnswerIndex: 2,
    explanation: "South of the Border features both Ed Sheeran and Camila Cabello alongside Cardi B.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which female rapper collaborated with Cardi B and French Montana on the single 'Writing on the Wall'?",
    options: ["Post Malone", "Rvssian", "Swae Lee"],
    correctAnswerIndex: 0,
    explanation: "Writing on the Wall is a single by French Montana featuring Post Malone and Cardi B.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who did Cardi B collaborate with on the track 'Me Gusta' in 2020?",
    options: ["Anitta", "Shakira", "Rosalía"],
    correctAnswerIndex: 0,
    explanation: "Brazilian singer Anitta collaborated with Cardi B and Myke Towers on Me Gusta.",
    timeLimitSeconds: 5
  },

  // --- Category 7: Tours & Live Performances (15 questions) ---
  {
    questionText: "Which artist's arena tour did Cardi B join as an opening act in 2017?",
    options: ["Migos", "Drake", "Bruno Mars"],
    correctAnswerIndex: 2,
    explanation: "Cardi B opened for Bruno Mars on select dates of the 24K Magic World Tour.",
    timeLimitSeconds: 5
  },
  {
    questionText: "At which major music festival did Cardi B make her debut main stage performance in 2018 while pregnant?",
    options: ["Coachella", "Lollapalooza", "Glastonbury"],
    correctAnswerIndex: 0,
    explanation: "Cardi B performed a highly praised set at Coachella in April 2018 while pregnant.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which festival in the UK did Cardi B headline in July 2022?",
    options: ["Wireless Festival", "Glastonbury Festival", "Reading Festival"],
    correctAnswerIndex: 0,
    explanation: "Cardi B headlined the Wireless Festival in London in July 2022.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of Cardi B's first official concert tour to support her mixtape in 2017?",
    options: ["Underestimated Tour", "Gangsta Bitch Celebration", "Invasion Tour"],
    correctAnswerIndex: 0,
    explanation: "She embarked on the Underestimated Tour in 2017 with her KSR labelmates.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which award show did Cardi B open with a performance of 'Finesse' alongside Bruno Mars in 2018?",
    options: ["Grammy Awards", "MTV Video Music Awards", "American Music Awards"],
    correctAnswerIndex: 0,
    explanation: "They performed Finesse at the 60th Annual Grammy Awards in January 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What iconic venue in New York did Cardi B headline during the 2018 Hot 97 Summer Jam?",
    options: ["MetLife Stadium", "Madison Square Garden", "Barclays Center"],
    correctAnswerIndex: 0,
    explanation: "She performed at Summer Jam at MetLife Stadium in New Jersey/New York area.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which late-night talk show did Cardi B co-host with Jimmy Fallon in April 2018?",
    options: ["The Tonight Show Starring Jimmy Fallon", "The Late Show with Stephen Colbert", "Jimmy Kimmel Live!"],
    correctAnswerIndex: 0,
    explanation: "She co-hosted The Tonight Show on April 9, 2018, promoting her album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which city's Livespot X Festival did Cardi B headline in December 2019, marking her first visit to Africa?",
    options: ["Lagos, Nigeria", "Johannesburg, South Africa", "Accra, Ghana"],
    correctAnswerIndex: 0,
    explanation: "Cardi B performed in Lagos, Nigeria, and Accra, Ghana, in December 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What did Cardi B famously throw at a fan during a performance in Las Vegas in July 2023?",
    options: ["A microphone", "Her high-heel shoe", "A water bottle"],
    correctAnswerIndex: 0,
    explanation: "She threw her microphone at a concertgoer who splashed a drink at her during a show.",
    timeLimitSeconds: 5
  },
  {
    questionText: "At which event did Cardi B perform a medley of 'WAP' and 'Up' live on television in 2021?",
    options: ["Grammy Awards", "Billboard Music Awards", "BET Awards"],
    correctAnswerIndex: 0,
    explanation: "Cardi B and Megan Thee Stallion performed WAP at the 63rd Grammy Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which festival in Philadelphia, curated by Jay-Z, did Cardi B perform at in 2018?",
    options: ["Made in America Festival", "Roots Picnic", "Firefly Festival"],
    correctAnswerIndex: 0,
    explanation: "She was one of the headliners at the Made in America Festival in 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How did Cardi B perform her set at the 2018 Coachella festival?",
    options: ["Fully pregnant, with guest appearances", "In a wheelchair", "Pre-recorded hologram"],
    correctAnswerIndex: 0,
    explanation: "She performed highly energetic routines while pregnant with Kulture.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which major sporting event's pre-concert did Cardi B headline in Atlanta in 2019?",
    options: ["Super Bowl LIII Music Fest", "NBA All-Star Concert", "MLS All-Star Game"],
    correctAnswerIndex: 0,
    explanation: "She performed at the Bud Light Super Bowl Music Fest in Atlanta.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song did Cardi B perform at the 2017 BET Awards pre-show?",
    options: ["Bodak Yellow", "Lick", "Foreva"],
    correctAnswerIndex: 0,
    explanation: "She performed Bodak Yellow during the pre-show at the 2017 BET Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which venue in Miami hosted Cardi B for a major 2024 New Year's Eve performance?",
    options: ["Fontainebleau Miami Beach", "E11EVEN", "LIV Nightclub"],
    correctAnswerIndex: 0,
    explanation: "She headlined the Fontainebleau NYE celebration in Miami.",
    timeLimitSeconds: 5
  },

  // --- Category 8: Business, Fashion, Philanthropy (15 questions) ---
  {
    questionText: "What is the name of the vodka-infused whipped cream brand launched by Cardi B in 2021?",
    options: ["Whipshots", "Spiked Cream", "Bardi Whip"],
    correctAnswerIndex: 0,
    explanation: "Cardi B launched Whipshots, a line of vodka-infused whipped cream, in late 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which major sportswear brand did Cardi B collaborate with on apparel and sneaker collections?",
    options: ["Reebok", "Puma", "Nike"],
    correctAnswerIndex: 0,
    explanation: "She signed a partnership with Reebok in 2018, releasing several collaborative collections.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which magazine appointed Cardi B as its first-ever Creative Director in Residence in 2021?",
    options: ["Playboy", "Vogue", "Harper's Bazaar"],
    correctAnswerIndex: 0,
    explanation: "Playboy appointed Cardi B as Creative Director in Residence in December 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which fashion designer created the iconic massive red gown with a 10-foot train Cardi B wore to the 2019 Met Gala?",
    options: ["Thom Browne", "Moschino", "Mugler"],
    correctAnswerIndex: 0,
    explanation: "Cardi B wore a dramatic, hand-embroidered down-filled gown designed by Thom Browne.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which major fast-food chain released a collaborative 'Cardi B & Offset Meal' for Valentine's Day in 2023?",
    options: ["McDonald's", "Burger King", "Wendy's"],
    correctAnswerIndex: 0,
    explanation: "McDonald's released the Cardi B & Offset Meal in February 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How much money did Cardi B donate to relief efforts in her hometown of New York City during the 2020 pandemic?",
    options: ["$1 million", "$100,000", "$500,000"],
    correctAnswerIndex: 0,
    explanation: "She partnered with Fashion Nova to donate $1 million to families affected by the pandemic.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which beverage brand did Cardi B star in a commercial for during the 2019 Super Bowl?",
    options: ["Pepsi", "Coca-Cola", "Sprite"],
    correctAnswerIndex: 0,
    explanation: "Cardi B starred in the 'More Than OK' Super Bowl LIII commercial for Pepsi.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which French luxury fashion house dressed Cardi B in vintage archives for her 2019 Grammy Awards red carpet?",
    options: ["Mugler", "Chanel", "Balenciaga"],
    correctAnswerIndex: 0,
    explanation: "She wore a vintage 1995 Thierry Mugler Venus shell gown to the 2019 Grammys.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which retail clothing brand did Cardi B launch a highly successful collaboration line with in 2018?",
    options: ["Fashion Nova", "PrettyLittleThing", "Zara"],
    correctAnswerIndex: 0,
    explanation: "She launched a custom clothing line with online retailer Fashion Nova.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which organization did Cardi B donate her salaries from a 2019 performance to, after a political controversy?",
    options: ["Brooklyn Community Foundation", "Red Cross", "Unicef"],
    correctAnswerIndex: 0,
    explanation: "Wait, she donated proceeds to local Bronx charities and public housing causes.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What charity program did Cardi B visit in 2022 to donate $100,000 to her former Bronx middle school?",
    options: ["I.S. 232 middle school donation", "Bronx Community College Fund", "Boys & Girls Club"],
    correctAnswerIndex: 0,
    explanation: "She made a surprise visit to her former school, I.S. 232, in the Bronx to donate $100,000.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the beauty/makeup line Cardi B attempted to trademark in 2019?",
    options: ["Bardi Beauty", "Cardi Cosmetics", "Okurrr Glow"],
    correctAnswerIndex: 0,
    explanation: "She filed trademarks for Bardi Beauty to launch cosmetics and skincare.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which hair care brand did Cardi B defend on social media, showing her own natural hair routines?",
    options: ["DIY onion water and rice water routines", "Shea Moisture", "Cantu"],
    correctAnswerIndex: 0,
    explanation: "She shared her homemade hair mask recipe featuring avocado, argan oil, and honey.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What brand of luxury bags is Cardi B famously known for collecting, owning over 20 matching colors?",
    options: ["Hermès Birkin", "Chanel Flap", "Louis Vuitton Speedy"],
    correctAnswerIndex: 0,
    explanation: "Cardi B has a massive collection of rare and custom Hermès Birkin bags.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which media company did Cardi B partner with to launch her 'Cardi Tries' Facebook Messenger series?",
    options: ["Meta / Facebook", "Snapchat", "YouTube Originals"],
    correctAnswerIndex: 0,
    explanation: "She starred in the watch series Cardi Tries, where she attempts new skills like ballet and cooking.",
    timeLimitSeconds: 5
  },

  // --- Category 9: Trivia, Nicknames & Fun Facts (25 questions) ---
  {
    questionText: "What is Cardi B's famous trademark catchphrase?",
    options: ["Okurrr", "Periodt", "Yasss"],
    correctAnswerIndex: 0,
    explanation: "Cardi B popularized the rolling-tongue catchphrase Okurrr.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the origin of her stage name 'Cardi B'?",
    options: ["Inspired by the rum brand Bacardi", "A childhood family nickname", "Her favorite clothing designer"],
    correctAnswerIndex: 0,
    explanation: "Her sister is named Hennessy, so people called her Bacardi, which she shortened to Cardi B.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which social media platform first made Cardi B go viral with her candid videos?",
    options: ["Vine and Instagram", "Twitter", "Facebook"],
    correctAnswerIndex: 0,
    explanation: "She gained public attention through viral videos on Vine and Instagram starting in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which reality television series did Cardi B join as a main cast member in 2015?",
    options: ["Love & Hip Hop: New York", "Bad Girls Club", "Real Housewives of Atlanta"],
    correctAnswerIndex: 0,
    explanation: "She joined the cast of VH1's Love & Hip Hop: New York in Season 6.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which movie marked Cardi B's feature film debut in 2019?",
    options: ["Hustlers", "F9", "Girls Trip"],
    correctAnswerIndex: 0,
    explanation: "She played a stripper named Diamond in the 2019 film Hustlers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which character does Cardi B play in the action film 'F9: The Fast Saga'?",
    options: ["Leysa", "Mia", "Ramsey"],
    correctAnswerIndex: 0,
    explanation: "She made a cameo appearance as Leysa, a woman who helps Vin Diesel's character.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which historical political figure did Cardi B famously interview during the 2020 US election cycle?",
    options: ["Bernie Sanders", "Joe Biden", "Barack Obama"],
    correctAnswerIndex: 0,
    explanation: "She held a widely publicized live stream interview with Senator Bernie Sanders.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Cardi B's favorite food, which she frequently posts about eating late at night?",
    options: ["Seafood boil", "Pizza", "Tacos"],
    correctAnswerIndex: 0,
    explanation: "She is a huge fan of seafood boils with crab legs, shrimp, and butter sauce.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What cosmetic surgical procedure has Cardi B spoken openly about getting early in her career?",
    options: ["Buttock injections", "Rhinoplasty", "Liposuction"],
    correctAnswerIndex: 0,
    explanation: "She has been very candid about getting illegal buttock injections early in her stripping career.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the viral ASMR video Cardi B recorded for W Magazine in 2018?",
    options: ["Cardi B ASMR", "Whisper Rap", "Okurrr Whispers"],
    correctAnswerIndex: 0,
    explanation: "She recorded a highly popular ASMR video whispering and playing with toys for W Magazine.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which fast-food chain's customer service did Cardi B hilariously criticize in a viral video?",
    options: ["McDonald's regarding their ice cream machine", "Taco Bell", "Popeyes"],
    correctAnswerIndex: 0,
    explanation: "She has made viral rants about late orders and missing items from McDonald's.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which famous sitcom star did Cardi B meet and fangirl over, who then sent her a handwritten letter?",
    options: ["Fran Drescher", "Jennifer Aniston", "Courteney Cox"],
    correctAnswerIndex: 0,
    explanation: "She is a massive fan of The Nanny star Fran Drescher and often channels her fashion.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What animal did Cardi B ride in the desert during her trip to Dubai?",
    options: ["A camel", "A horse", "An elephant"],
    correctAnswerIndex: 0,
    explanation: "She rode a camel in Dubai during the trip where she shot Bodak Yellow.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Netflix music competition show did Cardi B judge alongside Chance the Rapper and T.I. in 2019?",
    options: ["Rhythm + Flow", "The Voice", "Rhythm and Rap"],
    correctAnswerIndex: 0,
    explanation: "She was a judge on Netflix's hip-hop talent search Rhythm + Flow.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which historical subject does Cardi B possess a deep interest in, often reading books about it?",
    options: ["U.S. Presidents and political history", "Roman Empire", "Medieval Europe"],
    correctAnswerIndex: 0,
    explanation: "Cardi B has a self-proclaimed obsession with U.S. presidents, government structure, and history.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the character voiced by Cardi B in the animated film 'Baby Shark's Big Movie!'?",
    options: ["Sharki B", "Cardi Fin", "Belcalis Shark"],
    correctAnswerIndex: 0,
    explanation: "She voiced the character Sharki B in the Nickelodeon animated movie.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What style of nails is Cardi B famously known for wearing?",
    options: ["Extremely long stiletto nails", "Short french manicure", "Gel press-ons"],
    correctAnswerIndex: 0,
    explanation: "She is famous for her signature, highly decorated long stiletto acrylic nails.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which designer did Cardi B shout out in 'Bodak Yellow' by referring to 'red bottoms'?",
    options: ["Christian Louboutin", "Balenciaga", "Yves Saint Laurent"],
    correctAnswerIndex: 0,
    explanation: "She raps 'These expensive, these is red bottoms, these is bloody shoes' referring to Louboutins.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who did Cardi B name as her primary musical influence when she was growing up?",
    options: ["Trina and Missy Elliott", "Beyoncé", "Madonna"],
    correctAnswerIndex: 0,
    explanation: "She has cited female rappers like Trina, Missy Elliott, and Lil' Kim as major influences.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Where did Cardi B get her signature teeth fixed, which she rapped about in 'Bodak Yellow'?",
    options: ["Dr. Catrise Austin", "A celebrity dentist in Beverly Hills", "A clinic in Colombia"],
    correctAnswerIndex: 0,
    explanation: "She got her dental veneers done by cosmetic dentist Dr. Catrise Austin in New York.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What did Cardi B famously eat in a viral video while crying about the cold weather?",
    options: ["A raw jalapeño pepper", "A bowl of hot soup", "Seafood boil"],
    correctAnswerIndex: 0,
    explanation: "She ate a raw pepper to clear her sinuses and stay warm.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Cardi B's childhood neighborhood friends who she often mentions?",
    options: ["The Highbridge crew", "The Manhattan girls", "The Bronx squad"],
    correctAnswerIndex: 0,
    explanation: "She refers to her childhood friends and neighbors from Highbridge, Bronx.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song did Cardi B lip-sync to on Instagram that helped her gain early popularity?",
    options: ["Various viral Instagram comedic skits", "Bodak Yellow", "Cheap Ass Weave"],
    correctAnswerIndex: 0,
    explanation: "She became famous for her funny, raw, filter-free rant videos on Instagram.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Cardi B's favorite high-end designer brand to wear on streetwear occasions?",
    options: ["Balenciaga", "Gucci", "Prada"],
    correctAnswerIndex: 0,
    explanation: "She is a frequent wearer of Balenciaga outfits and sneakers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was Cardi B's response to why she started stripping at age 19?",
    options: ["To save money and escape an abusive relationship", "To buy designer clothes", "For fun and fame"],
    correctAnswerIndex: 0,
    explanation: "She stated that stripping helped her earn enough money to get her own apartment and escape domestic violence.",
    timeLimitSeconds: 5
  },

  // --- Category 10: Extra General Trivia & Mixed (30 questions to reach 200+) ---
  {
    questionText: "Which of the following songs was NOT a billboard Hot 100 number one for Cardi B?",
    options: ["Bartier Cardi", "Bodak Yellow", "Up"],
    correctAnswerIndex: 0,
    explanation: "Bartier Cardi peaked at number 14 on the Hot 100.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the 2015 song Cardi B collaborated on with Shaggy?",
    options: ["Boom Boom", "Luv", "Angel"],
    correctAnswerIndex: 0,
    explanation: "Cardi B featured on the remix of Shaggy's track Boom Boom in 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'I check my accounts, turn to Cardi B'?",
    options: ["Clout", "Bodak Yellow", "Jealousy"],
    correctAnswerIndex: 0,
    explanation: "Offset raps this line in their collaborative single Clout.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What year did Cardi B make her first appearance on the Met Gala red carpet?",
    options: ["2018", "2017", "2019"],
    correctAnswerIndex: 0,
    explanation: "Cardi B attended her first Met Gala in 2018, dressed by Jeremy Scott for Moschino.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who styled Cardi B's iconic Met Gala 2024 black gown that covered the entire red carpet?",
    options: ["Chenpeng", "Thom Browne", "Mugler"],
    correctAnswerIndex: 0,
    explanation: "Cardi B wore a gigantic black gown designed by Windowsen / Chenpeng in recent Met Gala events.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist features on the song 'I Do' on Invasion of Privacy?",
    options: ["SZA", "Kehlani", "H.E.R."],
    correctAnswerIndex: 0,
    explanation: "SZA features on the album closer I Do.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Cardi B's father's name?",
    options: ["Carlos Almánzar", "Manuel Almánzar", "José Almánzar"],
    correctAnswerIndex: 0,
    explanation: "Her father's name is Carlos Almánzar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Cardi B's mother's name?",
    options: ["Clara Almánzar", "Trinidad Almánzar", "Maria Almánzar"],
    correctAnswerIndex: 0,
    explanation: "Her mother's name is Clara Almánzar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Gangsta Bitch Music, Vol. 2' features the artist HoodCelebrityy?",
    options: ["Lick", "Red Barz", "Back It Up"],
    correctAnswerIndex: 0,
    explanation: "HoodCelebrityy has a guest appearance on Gangsta Bitch Music, Vol. 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the time limit for questions in Cardi B's quiz?",
    options: ["5 seconds", "10 seconds", "15 seconds"],
    correctAnswerIndex: 0,
    explanation: "Every question in this quiz is set to a 5-second time limit.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'I ain't standard, I'm expensive'?",
    options: ["Money Bag", "Bartier Cardi", "Press"],
    correctAnswerIndex: 0,
    explanation: "This line is from the song Money Bag.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which talk show host famously did a segment trying on Cardi B's extra long stiletto nails?",
    options: ["James Corden", "Jimmy Fallon", "Ellen DeGeneres"],
    correctAnswerIndex: 0,
    explanation: "James Corden wore long nails in a Carpets/Carpool Karaoke segment with Cardi.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the first name of Cardi B's daughter Kulture's godfather?",
    options: ["Brooklyn Johnny", "Pierre Thomas", "Offset"],
    correctAnswerIndex: 0,
    explanation: "Brooklyn Johnny is Kulture's godfather.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features Cardi B saying: 'You got me looking at you, looking at me'?",
    options: ["Finesse Remix", "Please Me", "Wild Side"],
    correctAnswerIndex: 1,
    explanation: "This is a line in the pre-chorus of Please Me with Bruno Mars.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was Cardi B's first-ever acting role on a scripted television show?",
    options: ["Being Mary Jane", "Empire", "Star"],
    correctAnswerIndex: 0,
    explanation: "Cardi B made a guest appearance playing Mercedes in a 2017 episode of Being Mary Jane.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Invasion of Privacy' did Cardi B record while suffering from morning sickness?",
    options: ["I Do", "Be Careful", "Ring"],
    correctAnswerIndex: 0,
    explanation: "She has stated she recorded her vocals for I Do while experiencing morning sickness.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of these is Cardi B's official YouTube channel name?",
    options: ["Cardi B", "CardiBTV", "BardiChannel"],
    correctAnswerIndex: 0,
    explanation: "Her official YouTube channel is simply named Cardi B.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as a promotional single from 'Invasion of Privacy' just before release?",
    options: ["Drip", "Be Careful", "Get Up 10"],
    correctAnswerIndex: 0,
    explanation: "Drip featuring Migos was released as a promotional single on April 4, 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'I could buy designer, but this Fashion Nova fit'?",
    options: ["She Bad", "Bodak Yellow", "Drip"],
    correctAnswerIndex: 0,
    explanation: "Cardi B raps this line in She Bad, promoting her future partner brand.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the primary key in which Cardi B's 'Bodak Yellow' is written?",
    options: ["B minor", "C major", "G major"],
    correctAnswerIndex: 0,
    explanation: "Bodak Yellow is written in the key of B minor.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who directed the music video for Cardi B's 'Money'?",
    options: ["Jora Frantzis", "Director X", "Colin Tilley"],
    correctAnswerIndex: 0,
    explanation: "Jora Frantzis directed the award-winning music video for Money.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who directed the music video for 'WAP'?",
    options: ["Colin Tilley", "Director X", "Dave Meyers"],
    correctAnswerIndex: 0,
    explanation: "Colin Tilley directed the colorful and surreal music video for WAP.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which state was the venue of Cardi B's court appearance where she pleaded guilty to misdemeanor charges in 2022?",
    options: ["New York", "Georgia", "California"],
    correctAnswerIndex: 0,
    explanation: "She pleaded guilty to two misdemeanor charges in Queens Criminal Court, New York.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features Cardi B saying: 'I'm a Bronx bitch'?",
    options: ["Red Barz", "Bodak Yellow", "Foreva"],
    correctAnswerIndex: 0,
    explanation: "Cardi B uses this descriptor in her mixtape track Red Barz.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which platform host interviewed Cardi B about her political views in her Bronx home?",
    options: ["Bernie Sanders via stream", "Vogue 73 Questions", "Complex"],
    correctAnswerIndex: 0,
    explanation: "She did a campaign live stream with Bernie Sanders in 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which single features the lyric: 'I'm that bitch they talk about'?",
    options: ["Foreva", "Cheap Ass Weave", "Washpoppin"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the track Foreva.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Cardi B's favorite high-end shoe designer for heels?",
    options: ["Christian Louboutin", "Jimmy Choo", "Manolo Blahnik"],
    correctAnswerIndex: 0,
    explanation: "Christian Louboutin is her absolute favorite heel designer.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Cardi B perform at the Rolling Loud festival in Miami for the first time?",
    options: ["2017", "2018", "2019"],
    correctAnswerIndex: 0,
    explanation: "She performed at Rolling Loud Miami for the first time in 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I got options, but I want you'?",
    options: ["Ring", "Thru Your Phone", "I Do"],
    correctAnswerIndex: 0,
    explanation: "This line is part of the pre-chorus of Ring.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who did Cardi B present an award to at the 2019 Billboard Music Awards?",
    options: ["Drake", "Lil Nas X", "Taylor Swift"],
    correctAnswerIndex: 0,
    explanation: "Cardi B was present when Drake won Top Artist at the 2019 BBMAs.",
    timeLimitSeconds: 5
  }
];
