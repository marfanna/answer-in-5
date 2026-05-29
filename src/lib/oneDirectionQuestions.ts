import { Question } from './mockData';

export const ONE_DIRECTION_QUESTIONS: Omit<Question, 'id' | 'categoryId' | 'subCategoryId'>[] = [
  // --- Category 1: Discography & Albums (25 questions) ---
  {
    questionText: "In what year was One Direction's debut album 'Up All Night' released?",
    options: ["2009", "2011", "2013"],
    correctAnswerIndex: 1,
    explanation: "Up All Night was released in November 2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the title of One Direction's second studio album?",
    options: ["Midnight Memories", "Take Me Home", "Four"],
    correctAnswerIndex: 1,
    explanation: "Take Me Home was released in 2012 as their second studio album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was One Direction's first to debut at number one on the US Billboard 200?",
    options: ["Take Me Home", "Up All Night", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Up All Night made them the first British group to debut at number one in the US with their debut album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did the band release their third studio album, 'Midnight Memories'?",
    options: ["2012", "2013", "2015"],
    correctAnswerIndex: 1,
    explanation: "Midnight Memories was released globally in November 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was One Direction's final release before their hiatus?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Made in the A.M. was released in November 2015 as their fifth and final album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the title of One Direction's fourth studio album?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Their fourth studio album, released in 2014, is simply titled Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was the first to not feature Zayn Malik?",
    options: ["Four", "Midnight Memories", "Made in the A.M."],
    correctAnswerIndex: 2,
    explanation: "Made in the A.M. was recorded and released after Zayn left the band in March 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features a close-up photo of the band members on a blue-tinted background?",
    options: ["Made in the A.M.", "Four", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "The album cover of Four features the members standing together against a blue background.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the official release year of the album 'Four'?",
    options: ["2013", "2014", "2016"],
    correctAnswerIndex: 1,
    explanation: "Four was released in November 2014 by Syco Music and Columbia Records.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which record label originally signed One Direction after their time on The X Factor?",
    options: ["RCA Records", "Syco Music", "Capitol Records"],
    correctAnswerIndex: 1,
    explanation: "Simon Cowell signed the band to his label, Syco Music, in 2010.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album contains the singles 'Live While We're Young' and 'Little Things'?",
    options: ["Up All Night", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Both singles were lead tracks for the Take Me Home album in 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album contains the singles 'Story of My Life' and 'Best Song Ever'?",
    options: ["Four", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 2,
    explanation: "Midnight Memories features both of these major hit singles.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album contains the singles 'Steal My Girl' and 'Night Changes'?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Steal My Girl and Night Changes were the two main singles from the album Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album contains the singles 'Drag Me Down' and 'Perfect'?",
    options: ["Four", "Midnight Memories", "Made in the A.M."],
    correctAnswerIndex: 2,
    explanation: "Drag Me Down and Perfect were released as singles for Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album cover features the band sitting around a brown leather couch in a room?",
    options: ["Made in the A.M.", "Four", "Take Me Home"],
    correctAnswerIndex: 0,
    explanation: "The Made in the A.M. album cover shows the four members in a cozy room with a leather sofa.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many official studio albums did One Direction release in total?",
    options: ["4", "5", "6"],
    correctAnswerIndex: 1,
    explanation: "One Direction released 5 studio albums between 2011 and 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album cover features the band standing near a red telephone box?",
    options: ["Up All Night", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "The Take Me Home cover shows the boys climbing and standing around a classic British red telephone box.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album cover features the band standing on a wood deck at a beach setting?",
    options: ["Take Me Home", "Up All Night", "Four"],
    correctAnswerIndex: 1,
    explanation: "The Up All Night cover features the band members posing outdoors near a beach.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of the following albums was released first?",
    options: ["Midnight Memories", "Four", "Take Me Home"],
    correctAnswerIndex: 2,
    explanation: "Take Me Home (2012) was released before Midnight Memories (2013) and Four (2014).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was released in the same year as One Direction's documentary film 'This Is Us'?",
    options: ["Take Me Home", "Midnight Memories", "Four"],
    correctAnswerIndex: 1,
    explanation: "Both the movie 'This Is Us' and the album 'Midnight Memories' came out in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was promoted by the 'Where We Are Tour'?",
    options: ["Four", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 2,
    explanation: "The Where We Are Tour in 2014 was in support of their third album, Midnight Memories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was promoted by the 'On the Road Again Tour'?",
    options: ["Four", "Take Me Home", "Made in the A.M."],
    correctAnswerIndex: 0,
    explanation: "The On the Road Again Tour in 2015 was primarily in support of their fourth album, Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album's deluxe version features the tracks 'Truly Madly Deeply' and 'Magic'?",
    options: ["Up All Night", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Truly Madly Deeply and Magic are exclusive bonus tracks on the deluxe edition of Take Me Home.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album has a track titled 'A.M.' as its final deluxe track?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "The track 'A.M.' serves as the final song on the deluxe edition of Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Clouds' as the opening song?",
    options: ["Four", "Midnight Memories", "Take Me Home"],
    correctAnswerIndex: 0,
    explanation: "Clouds is the energetic opening track of the album Four.",
    timeLimitSeconds: 5
  },

  // --- Category 2: Song-to-Album Matching (40 questions) ---
  {
    questionText: "Which album features the song 'What Makes You Beautiful'?",
    options: ["Take Me Home", "Up All Night", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "What Makes You Beautiful is the debut lead single from Up All Night.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Gotta Be You'?",
    options: ["Up All Night", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Gotta Be You is the second single from their debut album Up All Night.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'One Thing'?",
    options: ["Take Me Home", "Up All Night", "Four"],
    correctAnswerIndex: 1,
    explanation: "One Thing is a major hit single from their debut album Up All Night.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'More Than This'?",
    options: ["Up All Night", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "More Than This was released as a promotional and final single from Up All Night.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Kiss You'?",
    options: ["Take Me Home", "Midnight Memories", "Four"],
    correctAnswerIndex: 0,
    explanation: "Kiss You is an upbeat single from Take Me Home.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Rock Me'?",
    options: ["Midnight Memories", "Take Me Home", "Four"],
    correctAnswerIndex: 1,
    explanation: "Rock Me is a popular mid-tempo track from the Take Me Home album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Little Things'?",
    options: ["Up All Night", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Little Things, written by Ed Sheeran, is a key track on Take Me Home.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Heart Attack'?",
    options: ["Take Me Home", "Four", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Heart Attack is a high-energy track from the Take Me Home album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'C'mon C'mon'?",
    options: ["Take Me Home", "Midnight Memories", "Four"],
    correctAnswerIndex: 0,
    explanation: "C'mon C'mon is a dance-pop track featured on Take Me Home.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Diana'?",
    options: ["Four", "Midnight Memories", "Made in the A.M."],
    correctAnswerIndex: 1,
    explanation: "Diana is the second track on their third studio album Midnight Memories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'You & I'?",
    options: ["Midnight Memories", "Four", "Made in the A.M."],
    correctAnswerIndex: 0,
    explanation: "You & I was released as the final single from Midnight Memories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Don't Forget Where You Belong'?",
    options: ["Four", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 2,
    explanation: "Don't Forget Where You Belong was co-written by Niall Horan for Midnight Memories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Strong'?",
    options: ["Midnight Memories", "Four", "Made in the A.M."],
    correctAnswerIndex: 0,
    explanation: "Strong is a fan-favorite power ballad on Midnight Memories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Happily'?",
    options: ["Four", "Midnight Memories", "Take Me Home"],
    correctAnswerIndex: 1,
    explanation: "Happily is an acoustic-folk pop track featured on Midnight Memories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Stockholm Syndrome'?",
    options: ["Made in the A.M.", "Four", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Stockholm Syndrome is a highly popular pop-rock track from Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song '18'?",
    options: ["Four", "Made in the A.M.", "Take Me Home"],
    correctAnswerIndex: 0,
    explanation: "18 is a ballad written by Ed Sheeran for their fourth album, Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'No Control'?",
    options: ["Midnight Memories", "Four", "Made in the A.M."],
    correctAnswerIndex: 1,
    explanation: "No Control, featuring Louis Tomlinson on lead vocals, is from Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Where Do Broken Hearts Go'?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Where Do Broken Hearts Go is an uptempo rock track from Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Fireproof'?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Fireproof was released as a free download ahead of the release of Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Fool's Gold'?",
    options: ["Made in the A.M.", "Four", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Fool's Gold is an acoustic ballad from the Four album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'History'?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "History is an acoustic guitar-driven single from Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Infinity'?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Infinity was released as a promotional single from Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'If I Could Fly'?",
    options: ["Made in the A.M.", "Four", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "If I Could Fly is a piano ballad co-written by Harry Styles for Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Olivia'?",
    options: ["Made in the A.M.", "Four", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Olivia is a Beatles-inspired orchestral pop track on Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'End of the Day'?",
    options: ["Made in the A.M.", "Four", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "End of the Day is an upbeat track from Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Tell Me a Lie'?",
    options: ["Up All Night", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Tell Me a Lie, written by Kelly Clarkson, is on their debut album Up All Night.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Loved You First'?",
    options: ["Take Me Home", "Up All Night", "Four"],
    correctAnswerIndex: 0,
    explanation: "Loved You First is a synth-pop track on the Take Me Home album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'They Don't Know About Us'?",
    options: ["Up All Night", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "They Don't Know About Us is a popular album track from Take Me Home.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Over Again'?",
    options: ["Up All Night", "Take Me Home", "Four"],
    correctAnswerIndex: 1,
    explanation: "Over Again is an acoustic track written by Ed Sheeran for Take Me Home.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Last First Kiss'?",
    options: ["Up All Night", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Last First Kiss is a mid-tempo track featured on Take Me Home.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Midnight Memories' as its title track?",
    options: ["Midnight Memories", "Four", "Made in the A.M."],
    correctAnswerIndex: 0,
    explanation: "Midnight Memories is the title track of their third studio album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Little Black Dress'?",
    options: ["Four", "Take Me Home", "Midnight Memories"],
    correctAnswerIndex: 2,
    explanation: "Little Black Dress is a retro-rock track from Midnight Memories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Right Now'?",
    options: ["Four", "Midnight Memories", "Made in the A.M."],
    correctAnswerIndex: 1,
    explanation: "Right Now is a stadium ballad from the Midnight Memories album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Better Than Words'?",
    options: ["Midnight Memories", "Four", "Take Me Home"],
    correctAnswerIndex: 0,
    explanation: "Better Than Words is a song constructed entirely from famous song titles on Midnight Memories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Ready to Run'?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Ready to Run is a folk-pop track from their fourth album, Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Girl Almighty'?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Girl Almighty is a high-energy pop track on the Four album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Night Changes'?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Night Changes is a ballad and the second official single from Four.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Perfect'?",
    options: ["Four", "Made in the A.M.", "Midnight Memories"],
    correctAnswerIndex: 1,
    explanation: "Perfect is a hit single from their fifth album, Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Wolves'?",
    options: ["Four", "Midnight Memories", "Made in the A.M."],
    correctAnswerIndex: 2,
    explanation: "Wolves is an upbeat deluxe track on Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Temporary Fix'?",
    options: ["Made in the A.M.", "Four", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Temporary Fix is a rock-pop deluxe track from Made in the A.M.",
    timeLimitSeconds: 5
  },

  // --- Category 3: Song Lyrics & Music Video Facts (25 questions) ---
  {
    questionText: "Which song begins with the lyrics: 'You're insecure, don't know what for'?",
    options: ["One Thing", "What Makes You Beautiful", "Live While We're Young"],
    correctAnswerIndex: 1,
    explanation: "This is the opening line of their debut hit 'What Makes You Beautiful'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features the band dancing around a large red, white, and blue pool structure?",
    options: ["Live While We're Young", "Kiss You", "What Makes You Beautiful"],
    correctAnswerIndex: 0,
    explanation: "The video for 'Live While We're Young' is set in an outdoor camping/pool area.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In which music video do the band members dress up as different studio executives, including 'Harvey' and 'Jonny'?",
    options: ["Best Song Ever", "Kiss You", "Midnight Memories"],
    correctAnswerIndex: 0,
    explanation: "Niall and Louis play the characters Harvey and Jonny in the 'Best Song Ever' video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'Written on these walls are the stories that I can't explain'?",
    options: ["Story of My Life", "You & I", "Night Changes"],
    correctAnswerIndex: 0,
    explanation: "This is the opening lyric to their hit ballad 'Story of My Life'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features NASA's Johnson Space Center as its main setting?",
    options: ["Drag Me Down", "Perfect", "Steal My Girl"],
    correctAnswerIndex: 0,
    explanation: "The 'Drag Me Down' video shows the band members training at NASA.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who plays the role of the sexy assistant 'Veronica' in the 'Best Song Ever' music video?",
    options: ["Louis Tomlinson", "Harry Styles", "Zayn Malik"],
    correctAnswerIndex: 2,
    explanation: "Zayn Malik was dressed up in drag to play the character Veronica.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features a cameo appearance by actor Danny DeVito?",
    options: ["Steal My Girl", "Best Song Ever", "Night Changes"],
    correctAnswerIndex: 0,
    explanation: "Danny DeVito stars as the director of their music video for 'Steal My Girl'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'I want you to stay, never let me go'?",
    options: ["Gotta Be You", "More Than This", "One Thing"],
    correctAnswerIndex: 1,
    explanation: "This line is from the chorus of the Up All Night ballad 'More Than This'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video is shot in a single continuous morphing shot of the band members on a bridge?",
    options: ["You & I", "Story of My Life", "Night Changes"],
    correctAnswerIndex: 0,
    explanation: "The 'You & I' video is set on Clevedon Pier and uses special effects to morph the members into each other.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features childhood photographs of each band member recreated in a photo studio?",
    options: ["Story of My Life", "History", "Night Changes"],
    correctAnswerIndex: 0,
    explanation: "The 'Story of My Life' video features family members and recreated childhood photos.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which One Direction member's date goes wrong in a restaurant when spaghetti is spilled on the One Direction member in the 'Night Changes' video?",
    options: ["Niall Horan", "Harry Styles", "Zayn Malik"],
    correctAnswerIndex: 2,
    explanation: "In the 'Night Changes' video, Zayn's date's ex-boyfriend dumps pasta over his head.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Night Changes' music video, who gets arrested during a date?",
    options: ["Louis Tomlinson", "Liam Payne", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Louis Tomlinson is pulled over and arrested after playing around with the police.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video is a retrospective compilation of behind-the-scenes footage throughout One Direction's entire career?",
    options: ["History", "Drag Me Down", "Perfect"],
    correctAnswerIndex: 0,
    explanation: "The 'History' music video serves as a nostalgic look back at their 5-year journey.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'If you like causing trouble up in hotel rooms'?",
    options: ["Perfect", "Steal My Girl", "Live While We're Young"],
    correctAnswerIndex: 0,
    explanation: "This lyric is part of the chorus of 'Perfect'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Kiss You' music video, what retro sport setting are the boys simulating on a green screen?",
    options: ["Surfing", "Skiing", "Tennis"],
    correctAnswerIndex: 0,
    explanation: "The boys are seen simulating surfing on boards in retro 1960s beach attire.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'Does he know you're out, does he know what you're about'?",
    options: ["Diana", "Does He Know?", "Steal My Girl"],
    correctAnswerIndex: 1,
    explanation: "This line is from the chorus of the Midnight Memories track 'Does He Know?'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Gotta Be You' music video, where did the band film the outdoor scenes?",
    options: ["Lake Placid", "Lake Windermere", "Loch Ness"],
    correctAnswerIndex: 1,
    explanation: "The music video for 'Gotta Be You' was shot at Lake Windermere in England.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'Maybe it's the way she walked, straight into my heart and stole it'?",
    options: ["One Thing", "Stole My Heart", "What Makes You Beautiful"],
    correctAnswerIndex: 1,
    explanation: "This lyric is from the Up All Night album track 'Stole My Heart'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'Her heart's against my chest, she's getting close'?",
    options: ["Rock Me", "C'mon C'mon", "Loved You First"],
    correctAnswerIndex: 1,
    explanation: "This lyric is from the song 'C'mon C'mon' off the Take Me Home album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features the band singing on the rooftop of a building in London?",
    options: ["One Thing", "Midnight Memories", "You & I"],
    correctAnswerIndex: 1,
    explanation: "The video for 'Midnight Memories' shows the band riding scooters and singing on a London rooftop.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Night Changes' video, which One Direction member goes ice skating on a date?",
    options: ["Harry Styles", "Liam Payne", "Niall Horan"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles takes his date ice skating and ends up falling and breaking his arm in the video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'I hope you're rockin' with me, babe'?",
    options: ["Rock Me", "Kiss You", "Strong"],
    correctAnswerIndex: 0,
    explanation: "This lyric is from the chorus of 'Rock Me'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video is set in a high-rise hotel room in New York City?",
    options: ["Perfect", "Drag Me Down", "History"],
    correctAnswerIndex: 0,
    explanation: "The music video for 'Perfect' was filmed in black and white at the InterContinental Hotel in Midtown Manhattan.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'Everybody wanna steal my girl, everybody wanna take her heart away'?",
    options: ["Steal My Girl", "Diana", "No Control"],
    correctAnswerIndex: 0,
    explanation: "This is the central chorus lyric from the hit single 'Steal My Girl'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'Nobody can drag me down'?",
    options: ["Drag Me Down", "Strong", "Fireproof"],
    correctAnswerIndex: 0,
    explanation: "This is the primary hook and title line from 'Drag Me Down'.",
    timeLimitSeconds: 5
  },

  // --- Category 4: Personal Life (20 questions) ---
  {
    questionText: "What is the birthdate of Harry Styles?",
    options: ["January 12, 1993", "February 1, 1994", "September 13, 1993"],
    correctAnswerIndex: 1,
    explanation: "Harry Styles was born on February 1, 1994, in Redditch, Worcestershire.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who is the oldest member of One Direction?",
    options: ["Louis Tomlinson", "Liam Payne", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Louis Tomlinson was born on December 24, 1991, making him the oldest member.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of One Direction was born in Mullingar, Ireland?",
    options: ["Liam Payne", "Niall Horan", "Harry Styles"],
    correctAnswerIndex: 1,
    explanation: "Niall Horan is the only Irish member of the band, born in Mullingar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Liam Payne's hometown?",
    options: ["Wolverhampton", "Doncaster", "Holmes Chapel"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne was born and raised in Wolverhampton, West Midlands, England.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member grew up in Doncaster, South Yorkshire?",
    options: ["Louis Tomlinson", "Zayn Malik", "Liam Payne"],
    correctAnswerIndex: 0,
    explanation: "Louis Tomlinson grew up in Doncaster and went to Hall Cross School.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Harry Styles's middle name?",
    options: ["Edward", "James", "William"],
    correctAnswerIndex: 0,
    explanation: "Harry's full name is Harry Edward Styles.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Louis Tomlinson's middle name?",
    options: ["William", "Troy", "James"],
    correctAnswerIndex: 0,
    explanation: "Louis was born Louis Troy Austin, but took his stepfather's surname and uses the name Louis William Tomlinson.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Niall Horan's middle name?",
    options: ["James", "Edward", "Charles"],
    correctAnswerIndex: 0,
    explanation: "Niall's full name is Niall James Horan.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member's middle name is Javadd?",
    options: ["Zayn Malik", "Liam Payne", "Louis Tomlinson"],
    correctAnswerIndex: 0,
    explanation: "Zayn Malik's full name is Zain Javadd Malik.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which high school did Harry Styles attend in Holmes Chapel?",
    options: ["Holmes Chapel Comprehensive School", "Sandbach School", "Brine Leas School"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles attended Holmes Chapel Comprehensive School.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who is Niall Horan's older brother?",
    options: ["Greg", "Lottie", "Gemma"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan has an older brother named Greg Horan.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Harry Styles's older sister?",
    options: ["Gemma", "Fizzy", "Lottie"],
    correctAnswerIndex: 0,
    explanation: "Harry's older sister is Gemma Styles.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a sister named Lottie who is a famous makeup artist and influencer?",
    options: ["Louis Tomlinson", "Liam Payne", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Louis Tomlinson's younger half-sister is Lottie Tomlinson.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of One Direction shares a son named Bear with singer Cheryl?",
    options: ["Liam Payne", "Louis Tomlinson", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne and Cheryl welcomed their son Bear in March 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Louis Tomlinson welcome his son, Freddie Reign?",
    options: ["2014", "2016", "2018"],
    correctAnswerIndex: 1,
    explanation: "Louis Tomlinson's son Freddie was born in January 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who is the mother of Louis Tomlinson's son Freddie?",
    options: ["Briana Jungwirth", "Eleanor Calder", "Danielle Campbell"],
    correctAnswerIndex: 0,
    explanation: "Freddie Reign Tomlinson was born to Louis Tomlinson and Briana Jungwirth.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Zayn Malik's mother's name?",
    options: ["Tricia", "Anne", "Johannah"],
    correctAnswerIndex: 0,
    explanation: "Zayn Malik's mother is Tricia Malik (née Brannan).",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Harry Styles's mother?",
    options: ["Anne Twist", "Johannah Deakin", "Maura Gallagher"],
    correctAnswerIndex: 0,
    explanation: "Harry's mother is Anne Twist (formerly Styles and Cox).",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Niall Horan's mother's name?",
    options: ["Maura Gallagher", "Tricia Malik", "Karen Payne"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan's mother is Maura Gallagher.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what city was Zayn Malik born?",
    options: ["Bradford", "Manchester", "Leeds"],
    correctAnswerIndex: 0,
    explanation: "Zayn Malik was born and raised in Bradford, West Yorkshire, England.",
    timeLimitSeconds: 5
  },

  // --- Category 5: Awards & Chart Records (20 questions) ---
  {
    questionText: "How many BRIT Awards did One Direction win in total during their active years?",
    options: ["5", "7", "10"],
    correctAnswerIndex: 1,
    explanation: "One Direction won 7 BRIT Awards during their career.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won One Direction their first BRIT Award for Best British Single in 2012?",
    options: ["What Makes You Beautiful", "One Thing", "Live While We're Young"],
    correctAnswerIndex: 0,
    explanation: "What Makes You Beautiful won the Best British Single award at the 2012 BRITs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did One Direction win the Billboard Music Award for Top New Artist?",
    options: ["2011", "2012", "2013"],
    correctAnswerIndex: 2,
    explanation: "One Direction won the Top New Artist award at the 2013 BBMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many Billboard Music Awards did the band win in total?",
    options: ["6", "10", "15"],
    correctAnswerIndex: 1,
    explanation: "One Direction accumulated a total of 10 Billboard Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the MTV Video Music Award for Best Pop Video in 2012?",
    options: ["What Makes You Beautiful", "One Thing", "Live While We're Young"],
    correctAnswerIndex: 0,
    explanation: "The music video for What Makes You Beautiful won Best Pop Video at the 2012 VMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "One Direction was the first band in US Billboard 200 history to have their first how many albums debut at number one?",
    options: ["3", "4", "5"],
    correctAnswerIndex: 1,
    explanation: "Their first four albums (Up All Night, Take Me Home, Midnight Memories, Four) all debuted at number one.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many MTV Video Music Awards (VMAs) did One Direction win in total?",
    options: ["2", "4", "6"],
    correctAnswerIndex: 1,
    explanation: "One Direction has won a total of 4 MTV Video Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did the band win the American Music Award for Artist of the Year for the first time?",
    options: ["2013", "2014", "2015"],
    correctAnswerIndex: 1,
    explanation: "They won Artist of the Year at the AMAs for the first time in 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many times did One Direction win the AMA for Artist of the Year?",
    options: ["1", "2", "3"],
    correctAnswerIndex: 1,
    explanation: "They won the top Artist of the Year award twice in a row, in 2014 and 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which single debuted at number one on the UK Singles Chart as One Direction's first-ever chart-topper?",
    options: ["What Makes You Beautiful", "Gotta Be You", "One Thing"],
    correctAnswerIndex: 0,
    explanation: "What Makes You Beautiful debuted at number one on the UK Singles Chart in September 2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of the band's charity singles topped the UK Singles Chart in 2013?",
    options: ["One Way or Another (Teenage Kicks)", "Wishing on a Star", "Hero"],
    correctAnswerIndex: 0,
    explanation: "Their Red Nose Day mashup single 'One Way or Another (Teenage Kicks)' reached number one in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was the band's highest-charting single on the US Billboard Hot 100, reaching number two?",
    options: ["What Makes You Beautiful", "Best Song Ever", "Drag Me Down"],
    correctAnswerIndex: 1,
    explanation: "Best Song Ever reached number two on the US Billboard Hot 100 in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many total American Music Awards did One Direction win?",
    options: ["5", "7", "10"],
    correctAnswerIndex: 1,
    explanation: "One Direction won 7 American Music Awards out of 10 nominations.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was the best-selling album worldwide of 2013?",
    options: ["Midnight Memories", "Take Me Home", "Up All Night"],
    correctAnswerIndex: 0,
    explanation: "Midnight Memories was the best-selling album globally of 2013, selling over 4 million copies.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the BRIT Award for British Video of the Year in 2014?",
    options: ["Best Song Ever", "Story of My Life", "You & I"],
    correctAnswerIndex: 0,
    explanation: "Best Song Ever won the British Video of the Year at the 2014 BRITs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the BRIT Award for British Video of the Year in 2015?",
    options: ["You & I", "Night Changes", "Steal My Girl"],
    correctAnswerIndex: 0,
    explanation: "You & I won the British Video of the Year category at the 2015 BRIT Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the BRIT Award for British Video of the Year in 2016?",
    options: ["Drag Me Down", "Perfect", "History"],
    correctAnswerIndex: 0,
    explanation: "Drag Me Down won the British Video of the Year award in 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the BRIT Award for British Video of the Year in 2017, after One Direction's hiatus started?",
    options: ["History", "Perfect", "Drag Me Down"],
    correctAnswerIndex: 0,
    explanation: "History won the British Video of the Year award at the 2017 BRITs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many Teen Choice Awards did One Direction win in total?",
    options: ["18", "28", "38"],
    correctAnswerIndex: 1,
    explanation: "One Direction won a total of 28 Teen Choice Awards during their career.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which tracking entity named One Direction the Global Recording Artist of the Year for 2013?",
    options: ["IFPI", "RIAA", "Nielsen SoundScan"],
    correctAnswerIndex: 0,
    explanation: "The International Federation of the Phonographic Industry (IFPI) named them Global Recording Artist of 2013.",
    timeLimitSeconds: 5
  },

  // --- Category 6: Collaborations (15 questions) ---
  {
    questionText: "Who co-wrote the One Direction hit songs 'Little Things', 'Over Again', and '18'?",
    options: ["Ed Sheeran", "Harry Styles", "Gary Barlow"],
    correctAnswerIndex: 0,
    explanation: "Ed Sheeran is the prominent singer-songwriter who co-wrote these three tracks for the band.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist features on the digital remix of the song 'Steal My Girl'?",
    options: ["Wretch 32", "Kaboom", "Nicki Minaj"],
    correctAnswerIndex: 0,
    explanation: "UK rapper Wretch 32 features on the official UK radio remix of 'Steal My Girl'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which pop-punk band's member, Calum Hood, co-wrote the One Direction song 'Don't Let Me Go'?",
    options: ["5 Seconds of Summer", "The Vamps", "McFly"],
    correctAnswerIndex: 0,
    explanation: "Calum Hood of 5 Seconds of Summer co-wrote the unreleased/leak song 'Don't Let Me Go'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which band did One Direction collaborate with to form a supergroup on a 2010 tour prep or X Factor era?",
    options: ["The Wanted", "McFly", "JLS"],
    correctAnswerIndex: 1,
    explanation: "One Direction frequently worked and toured with McFly members who also wrote songs for them.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of McFly co-wrote the Take Me Home track 'I Would'?",
    options: ["Tom Fletcher", "Danny Jones", "Dougie Poynter"],
    correctAnswerIndex: 0,
    explanation: "Tom Fletcher of McFly wrote and contributed to several early One Direction songs, including 'I Would'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which female pop star co-wrote the Up All Night song 'Tell Me a Lie'?",
    options: ["Kelly Clarkson", "Avril Lavigne", "Katy Perry"],
    correctAnswerIndex: 0,
    explanation: "Kelly Clarkson originally wrote 'Tell Me a Lie' for herself before giving it to One Direction.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which prominent American rock band's lead singer, Ryan Tedder, co-wrote the song 'Right Now'?",
    options: ["OneRepublic", "Maroon 5", "Imagine Dragons"],
    correctAnswerIndex: 0,
    explanation: "Ryan Tedder, the lead vocalist of OneRepublic, co-wrote 'Right Now' with Harry and Liam.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who did One Direction team up with for the X Factor charity single 'Wishing on a Star' in 2011?",
    options: ["JLS and The X Factor Finalists", "Cheryl Cole", "Olly Murs"],
    correctAnswerIndex: 0,
    explanation: "They collaborated with JLS and the other 2011 X Factor finalists on the charity single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track from the album 'Four' was co-written by the members of the rock band Good Charlotte?",
    options: ["Steal My Girl", "Night Changes", "A.M."],
    correctAnswerIndex: 1,
    explanation: "Benji and Joel Madden of Good Charlotte co-wrote the song 'Night Changes' with the band.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which singer-songwriter co-wrote the Take Me Home track 'Summer Love'?",
    options: ["Lindy Robbins", "Savan Kotecha", "Claude Kelly"],
    correctAnswerIndex: 0,
    explanation: "Lindy Robbins co-wrote the ballad 'Summer Love' along with the production team.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which producer and songwriter is famous for creating the signature pop sound of 'What Makes You Beautiful'?",
    options: ["Savan Kotecha", "Max Martin", "Dr. Luke"],
    correctAnswerIndex: 0,
    explanation: "Savan Kotecha is the songwriter and vocal producer behind many of One Direction's early massive hits.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Irish band's frontman, Danny O'Donoghue, praised Niall Horan and helped mentor the band?",
    options: ["The Script", "Westlife", "Boyzone"],
    correctAnswerIndex: 0,
    explanation: "Danny O'Donoghue of The Script acted as an early industry mentor to Niall Horan.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which DJ and producer remixed the track 'Drag Me Down' featuring LunchMoney Lewis?",
    options: ["Big Payno", "Steve Aoki", "Zedd"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne (using his producer moniker Big Payno) remixed the song featuring LunchMoney Lewis.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist co-wrote the track 'Long Way Down' on 'Made in the A.M.'?",
    options: ["John Ryan", "Julian Bunetta", "Jamie Scott"],
    correctAnswerIndex: 2,
    explanation: "Jamie Scott was a long-time collaborator who co-wrote 'Long Way Down' and several other key songs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member collaborated with DJ Naughty Boy shortly after leaving the band in 2015?",
    options: ["Zayn Malik", "Louis Tomlinson", "Liam Payne"],
    correctAnswerIndex: 0,
    explanation: "Zayn Malik worked with Naughty Boy in the studio immediately after exiting One Direction.",
    timeLimitSeconds: 5
  },

  // --- Category 7: Tours & Live Performances (15 questions) ---
  {
    questionText: "What was the name of One Direction's first headlining concert tour?",
    options: ["Up All Night Tour", "Take Me Home Tour", "Where We Are Tour"],
    correctAnswerIndex: 0,
    explanation: "The Up All Night Tour, running in 2011-2012, was their first headlining tour.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which band served as the opening act for One Direction on their Up All Night Tour in North America?",
    options: ["5 Seconds of Summer", "Big Time Rush", "The Wanted"],
    correctAnswerIndex: 1,
    explanation: "One Direction actually opened for Big Time Rush on their Better With U Tour before headlining.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which tour was One Direction's first all-stadium tour, grossing over $290 million?",
    options: ["Take Me Home Tour", "Where We Are Tour", "On the Road Again Tour"],
    correctAnswerIndex: 1,
    explanation: "The 2014 Where We Are Tour was an all-stadium concert tour in support of Midnight Memories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Australian pop-rock band opened for One Direction on the Take Me Home and Where We Are tours?",
    options: ["5 Seconds of Summer", "The Vamps", "Tonight Alive"],
    correctAnswerIndex: 0,
    explanation: "5 Seconds of Summer got their big international break opening for One Direction on multiple tours.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Where did One Direction perform their final televised show before their hiatus in December 2015?",
    options: ["The X Factor UK Final", "Dick Clark's New Year's Rockin' Eve", "Royal Variety Performance"],
    correctAnswerIndex: 0,
    explanation: "One Direction gave their final performance on the stage where they began, on The X Factor UK final.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which famous stadium in London did One Direction sell out for three consecutive nights during their 'Where We Are Tour'?",
    options: ["Wembley Stadium", "O2 Arena", "Olympic Stadium"],
    correctAnswerIndex: 0,
    explanation: "The band sold out three nights at London's iconic Wembley Stadium in June 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did the 'On the Road Again Tour' take place?",
    options: ["2013", "2015", "2016"],
    correctAnswerIndex: 1,
    explanation: "The On the Road Again Tour ran from February to October 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "During which tour did Zayn Malik officially leave the band?",
    options: ["Where We Are Tour", "On the Road Again Tour", "Take Me Home Tour"],
    correctAnswerIndex: 1,
    explanation: "Zayn Malik left the band mid-tour during the On the Road Again Tour in March 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In which country did the 'On the Road Again Tour' begin?",
    options: ["Australia", "Japan", "United Kingdom"],
    correctAnswerIndex: 0,
    explanation: "The tour kicked off on February 7, 2015, in Sydney, Australia.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the concert film released in theaters documenting One Direction's second concert tour?",
    options: ["This Is Us", "Where We Are: The Concert Film", "Up All Night: The Live Tour"],
    correctAnswerIndex: 1,
    explanation: "Where We Are: The Concert Film was recorded at San Siro Stadium in Milan, Italy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "During which high-profile sporting event's closing ceremony did One Direction perform in 2012?",
    options: ["London Summer Olympics", "Super Bowl XLVI", "UEFA Champions League Final"],
    correctAnswerIndex: 0,
    explanation: "One Direction performed 'What Makes You Beautiful' at the 2012 London Olympics closing ceremony.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what city did One Direction perform their 1D Day 7.5-hour live stream broadcast?",
    options: ["London", "Los Angeles", "New York"],
    correctAnswerIndex: 1,
    explanation: "1D Day was broadcast live from Los Angeles to fans worldwide in November 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track did they perform as their very first live band song on The X Factor in 2010?",
    options: ["Torn", "Viva La Vida", "My Life Would Suck Without You"],
    correctAnswerIndex: 0,
    explanation: "The boys performed an acoustic version of 'Torn' at Simon Cowell's judges' houses stage.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many total shows did One Direction play during their massive 'Take Me Home Tour'?",
    options: ["84", "104", "134"],
    correctAnswerIndex: 2,
    explanation: "The Take Me Home Tour spanned 134 shows across Europe, North America, Oceania, and Asia.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member tripped and fell over a speaker during a live show in San Diego during the 2015 tour?",
    options: ["Harry Styles", "Louis Tomlinson", "Liam Payne"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles had a famous onstage fall in San Diego when his microphone cord caught on a stand.",
    timeLimitSeconds: 5
  },

  // --- Category 8: Business, Fashion, Philanthropy (15 questions) ---
  {
    questionText: "What was the name of One Direction's debut fragrance released in 2013?",
    options: ["Our Moment", "That Moment", "You & I"],
    correctAnswerIndex: 0,
    explanation: "Our Moment was the band's first fragrance, launched in August 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which charity organization did One Direction support by releasing their single 'One Way or Another (Teenage Kicks)'?",
    options: ["Comic Relief", "Unicef", "Save the Children"],
    correctAnswerIndex: 0,
    explanation: "The single was released to raise funds for the Comic Relief charity event Red Nose Day.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which major beverage company did One Direction sign a promotional deal with in 2012?",
    options: ["Pepsi", "Coca-Cola", "Dr Pepper"],
    correctAnswerIndex: 0,
    explanation: "One Direction starred in a major advertising campaign and TV commercial for Pepsi in 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which fashion brand did Zayn Malik collaborate with to design a capsule collection in 2017?",
    options: ["Versus Versace", "Gucci", "Balenciaga"],
    correctAnswerIndex: 0,
    explanation: "Zayn designed a special capsule collection called Zayn x Versus for Versus Versace.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the title of the second fragrance released by the band in 2014?",
    options: ["That Moment", "You & I", "Between Us"],
    correctAnswerIndex: 0,
    explanation: "That Moment was released in 2014 as a special edition follow-up to Our Moment.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the title of One Direction's fourth fragrance launched in 2015?",
    options: ["Between Us", "Our Moment", "You & I"],
    correctAnswerIndex: 0,
    explanation: "Between Us was launched in 2015 as the band's fourth fragrance.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which organization did the band support with their 2015 global action campaign 'Action/1D'?",
    options: ["Global Citizen", "Greenpeace", "Amnesty International"],
    correctAnswerIndex: 0,
    explanation: "Action/1D was launched to pressure global leaders to end extreme poverty and fight climate change.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which One Direction member bought a minority stake in hometown football club Doncaster Rovers in 2014?",
    options: ["Louis Tomlinson", "Liam Payne", "Niall Horan"],
    correctAnswerIndex: 0,
    explanation: "Louis Tomlinson attempted a co-ownership takeover of the Doncaster Rovers football club.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member launched a golf management agency called Modest! Golf in 2016?",
    options: ["Niall Horan", "Harry Styles", "Liam Payne"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan founded Modest! Golf management to support young golfers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In 2013, which fashion house did Harry Styles win the British Fashion Award for British Style?",
    options: ["British Fashion Council", "Burberry", "Alexander McQueen"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles won the British Style Award at the 2013 British Fashion Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which toy manufacturer signed a licensing agreement to produce One Direction dolls in 2012?",
    options: ["Hasbro", "Mattel", "Lego Group"],
    correctAnswerIndex: 0,
    explanation: "Hasbro partnered with the band to create a popular line of 1D action figures and dolls.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which book publisher released the band's official autobiography 'Who We Are' in 2014?",
    options: ["HarperCollins", "Penguin Books", "Simon & Schuster"],
    correctAnswerIndex: 0,
    explanation: "HarperCollins published their official biographical book 'One Direction: Who We Are'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member became a brand ambassador for the luxury watch brand Hugo Boss in 2020?",
    options: ["Liam Payne", "Louis Tomlinson", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne partnered with Hugo Boss for his own capsule fashion collections.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member made history as the first solo man to appear on the cover of American Vogue in December 2020?",
    options: ["Harry Styles", "Zayn Malik", "Niall Horan"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles graced the cover of Vogue wearing a dress, sparking widespread media attention.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which charity did Louis Tomlinson donate £2 million of his own money to in 2015?",
    options: ["Believe in Magic", "Cancer Research UK", "British Red Cross"],
    correctAnswerIndex: 0,
    explanation: "Louis Tomlinson hosted a charity ball and made a massive personal donation to Believe in Magic.",
    timeLimitSeconds: 5
  },

  // --- Category 9: Trivia, Nicknames & Fun Facts (25 questions) ---
  {
    questionText: "Which member of One Direction is famously terrified of spoons?",
    options: ["Liam Payne", "Niall Horan", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne has a well-documented fear of spoons, known as koutaliaphobia.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member came up with the name 'One Direction' for the band?",
    options: ["Harry Styles", "Simon Cowell", "Louis Tomlinson"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles suggested the band's name to the other members.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the bakery where Harry Styles worked before auditioning for The X Factor?",
    options: ["W. Mandeville Bakery", "Greggs", "Warburtons"],
    correctAnswerIndex: 0,
    explanation: "Harry worked part-time at the W. Mandeville Bakery in Holmes Chapel.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member is known by the nickname 'The Bradford Bad Boy'?",
    options: ["Zayn Malik", "Louis Tomlinson", "Liam Payne"],
    correctAnswerIndex: 0,
    explanation: "Zayn Malik was given this nickname by fans and media early in the band's career.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of One Direction was the only one who did not have any tattoos during the band's active years?",
    options: ["Niall Horan", "Liam Payne", "Louis Tomlinson"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan remained tattoo-free throughout the band's entire run.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member auditioned for The X Factor in 2008 before returning to audition again in 2010?",
    options: ["Liam Payne", "Louis Tomlinson", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne first auditioned at age 14 in 2008 and made it to judges' houses before Simon Cowell sent him home.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Niall Horan's favorite restaurant chain?",
    options: ["Nando's", "Wagamama", "Pizza Express"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan has a well-known love for the Portuguese-African chain Nando's.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which One Direction member has a tattoo of a compass on an arm pointing 'Home'?",
    options: ["Louis Tomlinson", "Zayn Malik", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Louis Tomlinson has a prominent compass tattoo on his right forearm.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which One Direction member has the words 'Things I Can' and 'Things I Can't' tattooed on both arms?",
    options: ["Harry Styles", "Zayn Malik", "Liam Payne"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles has these phrases tattooed on his inner forearms.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which musical instrument does Niall Horan famously play?",
    options: ["Guitar", "Drums", "Piano"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan plays acoustic and electric guitar and often played it during live shows.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the band's official mascot, a stuffed toy bear seen on tours?",
    options: ["Rainbow Bondage Bear", "Teddy 1D", "Styler Bear"],
    correctAnswerIndex: 0,
    explanation: "Rainbow Bondage Bear was a stuffed animal that appeared on stage and in fan theories.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of the band has a tattoo of a massive butterfly across his chest?",
    options: ["Harry Styles", "Zayn Malik", "Louis Tomlinson"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles has a large butterfly tattoo located on his torso.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the band Harry Styles was in before One Direction?",
    options: ["White Eskimo", "The Rogue", "The Runway"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles was the lead singer of the local high school band White Eskimo.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a tattoo of the logo of the band 'Pink Floyd'?",
    options: ["Harry Styles", "Zayn Malik", "Niall Horan"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles has the Dark Side of the Moon prism tattooed on his left arm.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of the band has a fear of heights (acrophobia)?",
    options: ["Zayn Malik", "Niall Horan", "Liam Payne"],
    correctAnswerIndex: 0,
    explanation: "Zayn Malik has spoken about his fear of heights and flying.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Niall Horan's natural hair color?",
    options: ["Brown", "Blonde", "Black"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan is naturally brunette but dyed his hair blonde for years.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a tattoo of five tally marks representing the band members?",
    options: ["Louis Tomlinson", "Zayn Malik", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Louis Tomlinson has a 5-tally mark tattoo on his arm to represent the group.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which One Direction member has a signature tattoo of four arrows on a right forearm?",
    options: ["Liam Payne", "Louis Tomlinson", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne has four chevron arrows tattooed on his arm.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of One Direction has a fear of pigeons?",
    options: ["Niall Horan", "Liam Payne", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan has stated in interviews that he has a fear of pigeons.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of Zayn Malik's pet dog during his time in the band?",
    options: ["Boris", "Loki", "Gus"],
    correctAnswerIndex: 0,
    explanation: "Zayn Malik owned a French Bulldog named Boris.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which One Direction member's grandfather, Ken West, made a guest appearance on One Direction's 1D Day broadcast?",
    options: ["Liam Payne", "Louis Tomlinson", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne's grandfather Ken appeared on the broadcast.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which One Direction member is known for the signature saying: 'Simple, but effective' during X Factor?",
    options: ["Harry Styles", "Louis Tomlinson", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles described his personal style as 'Simple, but effective' during the X Factor video diaries.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of One Direction can play the piano?",
    options: ["Liam Payne", "Niall Horan", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne has demonstrated his ability to play the piano and keyboards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which One Direction member had a first kiss at the age of nine?",
    options: ["Zayn Malik", "Harry Styles", "Niall Horan"],
    correctAnswerIndex: 0,
    explanation: "Zayn Malik has shared that his first kiss was at nine years old.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member is the only one who does not have an older sister or half-sister?",
    options: ["Niall Horan", "Harry Styles", "Louis Tomlinson"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan only has an older brother, Greg.",
    timeLimitSeconds: 5
  },

  // --- Category 10: Mixed General & Extra Trivia (30 questions to reach 200) ---
  {
    questionText: "Which song was the first track on the band's debut album 'Up All Night'?",
    options: ["What Makes You Beautiful", "Gotta Be You", "One Thing"],
    correctAnswerIndex: 0,
    explanation: "What Makes You Beautiful is the first track on the Up All Night tracklist.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member sang the opening solo line of 'Story of My Life'?",
    options: ["Liam Payne", "Harry Styles", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne sings the opening verse of 'Story of My Life'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyrics: 'I'm half a heart without you'?",
    options: ["Half a Heart", "Strong", "Diana"],
    correctAnswerIndex: 0,
    explanation: "This lyric is the key hook from the Midnight Memories track 'Half a Heart'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who sings the final solo line at the very end of the song 'History'?",
    options: ["Harry Styles", "Louis Tomlinson", "Niall Horan"],
    correctAnswerIndex: 1,
    explanation: "Louis Tomlinson sings the final line 'We could be the greatest team that the world has ever seen' in 'History'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which One Direction member has a tattoo of the words 'Late Late' on an arm?",
    options: ["Niall Horan", "Harry Styles", "Louis Tomlinson"],
    correctAnswerIndex: 1,
    explanation: "Harry Styles got the 'Late Late' tattoo live on James Corden's show during a game of Tattoo Roulette.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the date of One Direction's final performance together before their hiatus?",
    options: ["December 13, 2015", "November 13, 2015", "January 13, 2016"],
    correctAnswerIndex: 0,
    explanation: "Their final live performance was on the X Factor UK finale on December 13, 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the exact release date of Zayn Malik's solo debut single 'Pillowtalk'?",
    options: ["January 29, 2016", "March 25, 2016", "May 13, 2016"],
    correctAnswerIndex: 0,
    explanation: "Pillowtalk was released as Zayn's solo debut single on January 29, 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Midnight Memories' was co-written by the singer-songwriter McFly member Tom Fletcher?",
    options: ["Don't Forget Where You Belong", "Right Now", "Happily"],
    correctAnswerIndex: 0,
    explanation: "Tom Fletcher co-wrote the track 'Don't Forget Where You Belong' with Niall Horan.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the character played by Harry Styles in the 2017 war movie 'Dunkirk'?",
    options: ["Alex", "Tommy", "Gibson"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles played a British soldier named Alex in Christopher Nolan's Dunkirk.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which solo single was Niall Horan's debut release in September 2016?",
    options: ["This Town", "Slow Hands", "Too Much to Ask"],
    correctAnswerIndex: 0,
    explanation: "This Town was released in September 2016 as Niall's debut solo single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member released the solo album 'Walls' in January 2020?",
    options: ["Louis Tomlinson", "Liam Payne", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Walls is the debut solo studio album by Louis Tomlinson.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member released the debut solo album 'LP1' in December 2019?",
    options: ["Liam Payne", "Louis Tomlinson", "Niall Horan"],
    correctAnswerIndex: 0,
    explanation: "LP1 is the debut solo studio album by Liam Payne.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was Zayn Malik's debut solo album, released on the anniversary of his departure from One Direction?",
    options: ["Mind of Mine", "Icarus Falls", "Nobody Is Listening"],
    correctAnswerIndex: 0,
    explanation: "Mind of Mine was released on March 25, 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member's debut solo single was 'Sign of the Times' in April 2017?",
    options: ["Harry Styles", "Liam Payne", "Niall Horan"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles released 'Sign of the Times' as his debut solo single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as the second single from the band's fifth album 'Made in the A.M.'?",
    options: ["Perfect", "Drag Me Down", "History"],
    correctAnswerIndex: 0,
    explanation: "Perfect was released in October 2015 as the second official single from Made in the A.M.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track from the album 'Four' was released as a promotional single for free download on iTunes?",
    options: ["Fireproof", "Ready to Run", "Where Do Broken Hearts Go"],
    correctAnswerIndex: 0,
    explanation: "Fireproof was made available as a free download for 24 hours in September 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features the band interacting with a chimpanzee?",
    options: ["Steal My Girl", "Best Song Ever", "Live While We're Young"],
    correctAnswerIndex: 0,
    explanation: "The 'Steal My Girl' video shows Harry Styles interacting with a chimpanzee named Eli.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Harry Styles release his self-titled debut solo album?",
    options: ["2016", "2017", "2018"],
    correctAnswerIndex: 1,
    explanation: "Harry Styles released his self-titled debut solo album in May 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'If I could fly, I'd introduce you to the sky'?",
    options: ["If I Could Fly", "Walking in the Wind", "End of the Day"],
    correctAnswerIndex: 0,
    explanation: "This is the opening and hook lyric of 'If I Could Fly'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Take Me Home' was written by the lead singer of Snow Patrol, Gary Lightbody?",
    options: ["Something Great", "Over Again", "Little Things"],
    correctAnswerIndex: 0,
    explanation: "Something Great on Take Me Home was co-written by Gary Lightbody of Snow Patrol.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member's middle name is Edward?",
    options: ["Harry Styles", "Liam Payne", "Louis Tomlinson"],
    correctAnswerIndex: 0,
    explanation: "Harry Styles's middle name is Edward.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member wrote the song 'No Control' along with Louis Tomlinson?",
    options: ["Liam Payne", "Niall Horan", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne and Louis Tomlinson co-wrote the track 'No Control' along with standard co-writers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of the following songs does NOT feature Zayn Malik's vocals?",
    options: ["Drag Me Down", "Night Changes", "Steal My Girl"],
    correctAnswerIndex: 0,
    explanation: "Drag Me Down was the first single released after Zayn Malik left the group.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the first name of Louis Tomlinson's mother?",
    options: ["Johannah", "Anne", "Maura"],
    correctAnswerIndex: 0,
    explanation: "Louis Tomlinson's mother was named Johannah Deakin.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which band member was born on August 29, 1993?",
    options: ["Liam Payne", "Niall Horan", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne was born on August 29, 1993.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which band member was born on September 13, 1993?",
    options: ["Niall Horan", "Liam Payne", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Niall Horan was born on September 13, 1993.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which band member was born on January 12, 1993?",
    options: ["Zayn Malik", "Liam Payne", "Louis Tomlinson"],
    correctAnswerIndex: 0,
    explanation: "Zayn Malik was born on January 12, 1993.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who was the host of The X Factor UK when One Direction was formed?",
    options: ["Dermot O'Leary", "Simon Cowell", "Kate Thornton"],
    correctAnswerIndex: 0,
    explanation: "Dermot O'Leary hosted the main X Factor shows in 2010.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member was the first to sign a solo recording contract with Capitol Records?",
    options: ["Liam Payne", "Harry Styles", "Niall Horan"],
    correctAnswerIndex: 0,
    explanation: "Liam Payne announced in July 2016 that he had signed a solo deal with Capitol Records.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Niall Horan's second solo studio album released in 2020?",
    options: ["Heartbreak Weather", "Flicker", "The Show"],
    correctAnswerIndex: 0,
    explanation: "Heartbreak Weather is Niall Horan's second solo album, released in March 2020.",
    timeLimitSeconds: 5
  }
];
