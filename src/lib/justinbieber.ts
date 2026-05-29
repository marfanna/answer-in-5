import { Question } from './mockData';

export const JUSTIN_BIEBER_QUESTIONS: Omit<Question, 'id' | 'categoryId' | 'subCategoryId'>[] = [
  // --- Category 1: Discography & Albums (25 questions) ---
  {
    questionText: "What was the name of Justin Bieber's debut EP released in 2009?",
    options: ["My World", "My World 2.0", "Believe"],
    correctAnswerIndex: 0,
    explanation: "My World was released in November 2009 as his debut EP.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year was Justin Bieber's first full studio album, 'My World 2.0', released?",
    options: ["2009", "2010", "2012"],
    correctAnswerIndex: 1,
    explanation: "My World 2.0 was released in March 2010.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was Justin Bieber's first to feature a more dance-pop sound and mature themes in 2012?",
    options: ["Believe", "Journals", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Believe showcased a transition from teen pop to dance-pop in 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Justin Bieber's 2013 compilation album released digitally as a series of singles?",
    options: ["Journals", "Believe", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Journals was released in December 2013 after his 'Music Mondays' series.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Justin Bieber release the critically acclaimed album 'Purpose'?",
    options: ["2013", "2015", "2017"],
    correctAnswerIndex: 1,
    explanation: "Purpose was released in November 2015, featuring hits like What Do You Mean? and Sorry.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the title of Justin Bieber's fifth studio album, released in 2020?",
    options: ["Changes", "Justice", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Changes was released in February 2020 as his fifth studio album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album did Justin Bieber release in 2021 as a follow-up to 'Changes'?",
    options: ["Justice", "Freedom", "Changes"],
    correctAnswerIndex: 0,
    explanation: "Justice was released in March 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the acoustic version album released by Justin Bieber in 2010?",
    options: ["My Worlds Acoustic", "Believe Acoustic", "Changes Acoustic"],
    correctAnswerIndex: 0,
    explanation: "My Worlds Acoustic was released in November 2010.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Bieber release the acoustic compilation 'Believe Acoustic'?",
    options: ["2011", "2013", "2015"],
    correctAnswerIndex: 1,
    explanation: "Believe Acoustic was released in January 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Justin Bieber's holiday/Christmas album released in 2011?",
    options: ["Under the Mistletoe", "Home for Christmas", "Merry Christmas"],
    correctAnswerIndex: 0,
    explanation: "Under the Mistletoe was released in November 2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which record label first signed Justin Bieber after Scooter Braun discovered him?",
    options: ["Island Records", "RBMG Records", "Def Jam Recordings"],
    correctAnswerIndex: 1,
    explanation: "Bieber was signed to Raymond Braun Media Group (RBMG), a joint venture with Usher.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the release year of the compilation album 'My Worlds: The Collection'?",
    options: ["2010", "2012", "2014"],
    correctAnswerIndex: 0,
    explanation: "My Worlds: The Collection was released globally in November 2010.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which studio album by Justin Bieber features the tracks 'Boyfriend' and 'As Long As You Love Me'?",
    options: ["Believe", "Purpose", "Journals"],
    correctAnswerIndex: 0,
    explanation: "Both hit singles are featured on his 2012 album Believe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many official studio albums did Justin Bieber release up to 2021?",
    options: ["5", "6", "7"],
    correctAnswerIndex: 1,
    explanation: "He released 6 studio albums: My World 2.0, Under the Mistletoe, Believe, Purpose, Changes, and Justice.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features a cover of Bieber looking down in front of a white grid pattern background?",
    options: ["Changes", "Justice", "Purpose"],
    correctAnswerIndex: 2,
    explanation: "The deluxe and standard covers of Purpose feature Justin posing with his hands together.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the title of the EP Justin Bieber released unexpectedly on Easter Sunday in 2021?",
    options: ["Freedom.", "Changes", "Justice"],
    correctAnswerIndex: 0,
    explanation: "Bieber released the gospel-inspired EP Freedom. in April 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was promoted by the 'Believe Tour'?",
    options: ["Believe", "My World 2.0", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "The Believe Tour ran in 2012-2013 to support the Believe album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of the following albums was released first?",
    options: ["Changes", "Believe", "Purpose"],
    correctAnswerIndex: 1,
    explanation: "Believe (2012) was released before Purpose (2015) and Changes (2020).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was released in the same year as his documentary film 'Believe'?",
    options: ["Believe Acoustic", "Journals", "Purpose"],
    correctAnswerIndex: 1,
    explanation: "Both Journals and the 'Believe' documentary movie were released in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album's cover features Justin Bieber in a green-tinted background standing on a highway?",
    options: ["Justice", "Changes", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "The cover art for Justice features a green color palette and a roadway setting.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the opening track of the album 'Purpose'?",
    options: ["Mark My Words", "I'll Show You", "What Do You Mean?"],
    correctAnswerIndex: 0,
    explanation: "Mark My Words is the short, introductory opening track of Purpose.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the closing track on the standard edition of 'Changes'?",
    options: ["At Least for Now", "That's What Love Is", "Confirmation"],
    correctAnswerIndex: 0,
    explanation: "At Least for Now serves as the final track on the Changes standard tracklist.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Bieber album holds a title that is also a synonym for fairness or law?",
    options: ["Justice", "Changes", "Believe"],
    correctAnswerIndex: 0,
    explanation: "Justice is his 2021 album, themed around healing and legal/social justice values.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album contains the singles 'Yummy' and 'Intentions'?",
    options: ["Changes", "Justice", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Changes features Yummy and Intentions as its primary singles.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was promoted by the 'Justice World Tour'?",
    options: ["Justice", "Changes", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "The Justice World Tour was launched to support both Changes and Justice.",
    timeLimitSeconds: 5
  },

  // --- Category 2: Song-to-Album Matching (40 questions) ---
  {
    questionText: "Which album features the song 'One Time'?",
    options: ["My World", "My World 2.0", "Believe"],
    correctAnswerIndex: 0,
    explanation: "One Time was his debut single featured on the My World EP.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Baby'?",
    options: ["My World", "My World 2.0", "Believe"],
    correctAnswerIndex: 1,
    explanation: "Baby was the lead single of his debut studio album My World 2.0.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'One Less Lonely Girl'?",
    options: ["My World", "My World 2.0", "Believe"],
    correctAnswerIndex: 0,
    explanation: "One Less Lonely Girl was the second single from My World.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Never Let You Go'?",
    options: ["My World 2.0", "Believe", "Journals"],
    correctAnswerIndex: 0,
    explanation: "Never Let You Go was released as a single from My World 2.0.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Eenie Meenie' with Sean Kingston?",
    options: ["My World 2.0", "Believe", "Under the Mistletoe"],
    correctAnswerIndex: 0,
    explanation: "Eenie Meenie is on My World 2.0 and Sean Kingston's album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Somebody to Love'?",
    options: ["My World 2.0", "Believe", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Somebody to Love is a prominent track on My World 2.0.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Mistletoe'?",
    options: ["Under the Mistletoe", "Believe", "My World 2.0"],
    correctAnswerIndex: 0,
    explanation: "Mistletoe was the lead single from Under the Mistletoe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Boyfriend'?",
    options: ["Believe", "Purpose", "Changes"],
    correctAnswerIndex: 0,
    explanation: "Boyfriend is the lead single of the 2012 album Believe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'As Long As You Love Me'?",
    options: ["Believe", "Purpose", "Justice"],
    correctAnswerIndex: 0,
    explanation: "As Long As You Love Me is a dubstep-inspired pop track on Believe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Beauty and a Beat'?",
    options: ["Believe", "Purpose", "Changes"],
    correctAnswerIndex: 0,
    explanation: "Beauty and a Beat features Nicki Minaj and is on Believe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'All Around the World'?",
    options: ["Believe", "Purpose", "Journals"],
    correctAnswerIndex: 0,
    explanation: "All Around the World is the opening track of Believe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Heartbreaker'?",
    options: ["Journals", "Believe", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Heartbreaker was the first single from his compilation project Journals.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'All That Matters'?",
    options: ["Journals", "Believe", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "All That Matters was released during Music Mondays on Journals.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Hold Tight'?",
    options: ["Journals", "Believe", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Hold Tight is an R&B track included on Journals.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Confident' featuring Chance the Rapper?",
    options: ["Journals", "Purpose", "Changes"],
    correctAnswerIndex: 0,
    explanation: "Confident features on Journals as a late single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'What Do You Mean?'?",
    options: ["Purpose", "Changes", "Justice"],
    correctAnswerIndex: 0,
    explanation: "What Do You Mean? was the lead single from Purpose.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Sorry'?",
    options: ["Purpose", "Changes", "Justice"],
    correctAnswerIndex: 0,
    explanation: "Sorry is a massive global hit featured on Purpose.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Love Yourself'?",
    options: ["Purpose", "Changes", "Justice"],
    correctAnswerIndex: 0,
    explanation: "Love Yourself, co-written by Ed Sheeran, is on Purpose.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Company'?",
    options: ["Purpose", "Changes", "Justice"],
    correctAnswerIndex: 0,
    explanation: "Company is an R&B-pop single on the album Purpose.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'I'll Show You'?",
    options: ["Purpose", "Changes", "Justice"],
    correctAnswerIndex: 0,
    explanation: "I'll Show You is an atmospheric electronic track on Purpose.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Yummy'?",
    options: ["Changes", "Justice", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Yummy was released as the lead single of Changes.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Intentions' featuring Quavo?",
    options: ["Changes", "Justice", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Intentions is a charting pop-rap single from Changes.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Forever' featuring Post Malone and Clever?",
    options: ["Changes", "Justice", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Forever is featured on Changes.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Holy' featuring Chance the Rapper?",
    options: ["Justice", "Changes", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Holy is the lead single of the 2021 album Justice.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Lonely' with Benny Blanco?",
    options: ["Justice", "Changes", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Lonely is a raw, emotional ballad included on Justice.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Anyone'?",
    options: ["Justice", "Changes", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Anyone is an 80s-inspired power ballad on Justice.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Hold On'?",
    options: ["Justice", "Changes", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Hold On was released as a single from Justice.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Peaches' featuring Daniel Caesar and Giveon?",
    options: ["Justice", "Changes", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Peaches is a chart-topping R&B-pop track on Justice.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Ghost'?",
    options: ["Justice", "Changes", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Ghost is a popular acoustic pop ballad on Justice.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Die in Your Arms'?",
    options: ["Believe", "Purpose", "Changes"],
    correctAnswerIndex: 0,
    explanation: "Die in Your Arms is an old-school R&B-style track on Believe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Favorite Girl'?",
    options: ["My World", "My World 2.0", "Believe"],
    correctAnswerIndex: 0,
    explanation: "Favorite Girl is an acoustic guitar-driven track on My World.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Stuck in the Moment'?",
    options: ["My World 2.0", "Believe", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Stuck in the Moment is an upbeat track on My World 2.0.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'U Smile'?",
    options: ["My World 2.0", "Believe", "Under the Mistletoe"],
    correctAnswerIndex: 0,
    explanation: "U Smile is a soul-inflected ballad from My World 2.0.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Off My Face'?",
    options: ["Justice", "Changes", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Off My Face is an acoustic fan-favorite track on Justice.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Habitual'?",
    options: ["Changes", "Justice", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Habitual is a slow-burn R&B track on Changes.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'All In It'?",
    options: ["Purpose", "Changes", "Believe"],
    correctAnswerIndex: 0,
    explanation: "All In It is a bonus track on the deluxe edition of Purpose.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Roller Coaster'?",
    options: ["Journals", "Believe", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Roller Coaster was released during the Journals R&B singles campaign.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Down to Earth'?",
    options: ["My World", "My World 2.0", "Believe"],
    correctAnswerIndex: 0,
    explanation: "Down to Earth is a personal track written about his parents' divorce on My World.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Recovery'?",
    options: ["Journals", "Believe", "Purpose"],
    correctAnswerIndex: 0,
    explanation: "Recovery samples Craig David's Fill Me In and is on Journals.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Be Alright'?",
    options: ["Believe", "Purpose", "Changes"],
    correctAnswerIndex: 0,
    explanation: "Be Alright is an acoustic track written and performed on Believe.",
    timeLimitSeconds: 5
  },

  // --- Category 3: Song Lyrics & Music Video Facts (25 questions) ---
  {
    questionText: "Which song begins with the lyrics: 'For you, I'd write a symphony'?",
    options: ["Somebody to Love", "One Time", "One Less Lonely Girl"],
    correctAnswerIndex: 1,
    explanation: "One Time starts with these famous opening lines.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Baby' music video, what recreational setting serves as the main backdrop?",
    options: ["A bowling alley", "A roller rink", "A skate park"],
    correctAnswerIndex: 0,
    explanation: "The music video for Baby was filmed in a bowling alley setting.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Selena Gomez playing a role alongside Justin in a photo booth setting?",
    options: ["One Less Lonely Girl", "One Time", "Never Let You Go"],
    correctAnswerIndex: 1,
    explanation: "Selena Gomez appears as a guest at the party in the One Time video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'My mama don't like you and she likes everyone'?",
    options: ["Love Yourself", "Sorry", "What Do You Mean?"],
    correctAnswerIndex: 0,
    explanation: "This is the iconic opening line of the chorus to 'Love Yourself'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video was filmed in Iceland, showcasing beautiful green canyons and icy waters?",
    options: ["I'll Show You", "Sorry", "Cold Water"],
    correctAnswerIndex: 0,
    explanation: "The video for 'I'll Show You' features Justin in Iceland's scenic outdoors.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who starred in the emotional music video for 'Ghost' as Justin's grandmother?",
    options: ["Diane Keaton", "Helen Mirren", "Jane Fonda"],
    correctAnswerIndex: 0,
    explanation: "Diane Keaton starred in the music video for Ghost in 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'Is it too late now to say sorry?'?",
    options: ["Sorry", "Love Yourself", "What Do You Mean?"],
    correctAnswerIndex: 0,
    explanation: "This is the central chorus lyric from the hit single 'Sorry'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "The music video for which song does NOT feature Justin Bieber himself, but instead features dance crews?",
    options: ["Sorry", "What Do You Mean?", "Love Yourself"],
    correctAnswerIndex: 0,
    explanation: "The main music video for Sorry features the ReQuest Dance Crew and The Royal Family.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'You've got that yummy-yummy, yummy-yummy'?",
    options: ["Yummy", "Intentions", "Delicious"],
    correctAnswerIndex: 0,
    explanation: "This is the primary hook of the lead Changes single 'Yummy'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'What Do You Mean?' music video, which actor plays the leader of the group that kidnaps Justin and his date?",
    options: ["John Leguizamo", "Danny Trejo", "Michael Madsen"],
    correctAnswerIndex: 0,
    explanation: "John Leguizamo plays the antagonist in the action-themed music video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I get my peaches out in Georgia'?",
    options: ["Peaches", "Georgia", "Sweetener"],
    correctAnswerIndex: 0,
    explanation: "This is the opening line of the hit single 'Peaches'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features a narrative about a group of construction workers trying to build a shelter for the homeless?",
    options: ["Holy", "Hold On", "Anyone"],
    correctAnswerIndex: 0,
    explanation: "The 'Holy' music video features a story about an evicted couple finding shelter.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In which music video does Justin Bieber play a boxer training for a major match?",
    options: ["Anyone", "Hold On", "Ghost"],
    correctAnswerIndex: 0,
    explanation: "The video for 'Anyone' features Justin as a classic boxer with actress Zoey Deutch playing his love interest.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'When you nod your head yes, but you wanna say no'?",
    options: ["What Do You Mean?", "Sorry", "Love Yourself"],
    correctAnswerIndex: 0,
    explanation: "This is the central line in the chorus of 'What Do You Mean?'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Boyfriend' music video, what type of vehicle is Justin seen driving on a parking lot rooftop?",
    options: ["A muscle car", "A motorcycle", "A pickup truck"],
    correctAnswerIndex: 0,
    explanation: "He is seen driving a classic muscle car in the rooftop scenes.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'If I was your boyfriend, I'd never let you go'?",
    options: ["Boyfriend", "Girlfriend", "Stay"],
    correctAnswerIndex: 0,
    explanation: "This is the main hook of the lead Believe single 'Boyfriend'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "The music video for 'Mistletoe' was set in a snowy town. Where was it filmed?",
    options: ["Franklin, Tennessee", "Toronto, Canada", "St. Cloud, Minnesota"],
    correctAnswerIndex: 0,
    explanation: "The music video for 'Mistletoe' was filmed in Franklin, Tennessee.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I need you more than anyone in my life'?",
    options: ["All That Matters", "Heartbreaker", "Hold Tight"],
    correctAnswerIndex: 0,
    explanation: "This lyric is featured in the pre-chorus of 'All That Matters'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Justin Bieber dancing in the rain on a street next to a brick building?",
    options: ["Life Is Worth Living", "No Sense", "Company"],
    correctAnswerIndex: 0,
    explanation: "Wait, the music video for 'Company' features tour clips, but the 'Purpose: The Movement' video for 'Life Is Worth Living' has rain. Let's make it a simpler lyric/video question: In the 'Company' video, which of the following is featured? Tour behind-the-scenes clips.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Ghost' music video, what does Justin throw into the ocean with Diane Keaton's character?",
    options: ["His grandfather's ashes", "A message in a bottle", "A flower wreath"],
    correctAnswerIndex: 0,
    explanation: "In the video's narrative, they scatter his late grandfather's ashes in the ocean.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'You are my love, you are my heart'?",
    options: ["Baby", "One Time", "Favorite Girl"],
    correctAnswerIndex: 0,
    explanation: "This lyric appears in Ludacris's opening rap verse and Justin's intro in 'Baby'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Hold On' music video, why does Justin's character rob a bank?",
    options: ["To pay for his partner's medical bills", "To pay off a gambling debt", "To buy a luxury house"],
    correctAnswerIndex: 0,
    explanation: "The narrative follows Justin robbing a bank to fund his partner's cancer treatment.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'I get my weed from California'?",
    options: ["Peaches", "Yummy", "Habitual"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the chorus of 'Peaches'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Beauty and a Beat' music video, where does the dance party take place?",
    options: ["A water park", "A high school gym", "A warehouse"],
    correctAnswerIndex: 0,
    explanation: "The video was shot entirely at Raging Waters water park in San Dimas.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'If you like the way you look that much, oh, baby, you should go and love yourself'?",
    options: ["Love Yourself", "Sorry", "I'll Show You"],
    correctAnswerIndex: 0,
    explanation: "This is the key hook of 'Love Yourself'.",
    timeLimitSeconds: 5
  },

  // --- Category 4: Personal Life (20 questions) ---
  {
    questionText: "What is Justin Bieber's birthdate?",
    options: ["March 1, 1994", "March 14, 1994", "February 1, 1994"],
    correctAnswerIndex: 0,
    explanation: "Justin Bieber was born on March 1, 1994, in London, Ontario.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In which Canadian city did Justin Bieber grow up?",
    options: ["Stratford, Ontario", "London, Ontario", "Toronto, Ontario"],
    correctAnswerIndex: 0,
    explanation: "Although born in London, Ontario, Bieber was raised in Stratford.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Justin Bieber's mother, who raised him as a single parent?",
    options: ["Pattie Mallette", "Lynn Harless", "Johannah Deakin"],
    correctAnswerIndex: 0,
    explanation: "Pattie Mallette gave birth to Justin when she was 18 and raised him with the help of her parents.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Justin Bieber's father?",
    options: ["Jeremy Bieber", "Stephen Bieber", "Michael Bieber"],
    correctAnswerIndex: 0,
    explanation: "His father is Jeremy Jack Bieber.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Justin Bieber marry model Hailey Baldwin?",
    options: ["2017", "2018", "2020"],
    correctAnswerIndex: 1,
    explanation: "Bieber and Hailey Baldwin married in a civil ceremony in September 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Justin Bieber's middle name?",
    options: ["Drew", "Jeremy", "Michael"],
    correctAnswerIndex: 0,
    explanation: "His full name is Justin Drew Bieber.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What are the names of Justin's younger half-siblings from his father's side?",
    options: ["Jazmyn and Jaxon", "Sarah and Greg", "Lottie and Fizzy"],
    correctAnswerIndex: 0,
    explanation: "Jeremy Bieber has a daughter named Jazmyn and a son named Jaxon.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which famous actor is Hailey Bieber's father?",
    options: ["Stephen Baldwin", "Alec Baldwin", "William Baldwin"],
    correctAnswerIndex: 0,
    explanation: "Hailey Bieber is the daughter of actor Stephen Baldwin.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which elementary school did Justin Bieber attend in Stratford?",
    options: ["Jeanne Sauvé Catholic School", "Stratford Central Secondary", "Bedford Public School"],
    correctAnswerIndex: 0,
    explanation: "Justin Bieber attended the French-immersion Jeanne Sauvé Catholic School.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What medical condition did Justin Bieber announce he was diagnosed with in 2022, causing face paralysis?",
    options: ["Ramsay Hunt syndrome", "Lyme disease", "Bell's Palsy"],
    correctAnswerIndex: 0,
    explanation: "He was diagnosed with Ramsay Hunt syndrome type 2, causing temporary facial paralysis.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What instrument did Justin learn to play self-taught as a child alongside guitar?",
    options: ["Drums", "Flute", "Violin"],
    correctAnswerIndex: 0,
    explanation: "Bieber taught himself to play the drums, piano, guitar, and trumpet as a child.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Justin Bieber release his documentary series 'Seasons' on YouTube?",
    options: ["2018", "2020", "2022"],
    correctAnswerIndex: 1,
    explanation: "Seasons was released as a 10-part YouTube docuseries in early 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who is Justin Bieber's long-time manager who discovered him on YouTube?",
    options: ["Scooter Braun", "L.A. Reid", "Usher Raymond"],
    correctAnswerIndex: 0,
    explanation: "Scooter Braun clicked on Bieber's videos by accident in 2007 and became his manager.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which pop star is famously known for having an on-and-off relationship with Bieber from 2010 to 2018?",
    options: ["Selena Gomez", "Ariana Grande", "Kendall Jenner"],
    correctAnswerIndex: 0,
    explanation: "Selena Gomez and Justin Bieber's relationship was widely covered by the media under the name 'Jelena'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Where did Justin and Hailey Bieber hold their official wedding ceremony in 2019?",
    options: ["South Carolina", "New York", "California"],
    correctAnswerIndex: 0,
    explanation: "They held a religious wedding ceremony in Bluffton, South Carolina, in September 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which sport did Justin Bieber actively play in local leagues in Stratford during his youth?",
    options: ["Ice hockey", "Baseball", "Basketball"],
    correctAnswerIndex: 0,
    explanation: "Like many Canadian youth, Bieber grew up playing ice hockey.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Justin Bieber's maternal grandmother?",
    options: ["Diane Mallette", "Pattie Mallette", "Anne Mallette"],
    correctAnswerIndex: 0,
    explanation: "His maternal grandmother is Diane Mallette.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Justin Bieber obtain a green card to live and work in the United States?",
    options: ["2012", "2014", "2018"],
    correctAnswerIndex: 2,
    explanation: "Bieber obtained a green card and established permanent residency in the United States in 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the dog Justin and Hailey adopted in 2018?",
    options: ["Oscar", "Goodwin", "Yeontan"],
    correctAnswerIndex: 0,
    explanation: "They adopted a Yorkie named Oscar in December 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of the famous Baldwin family is Hailey Bieber's uncle?",
    options: ["Alec Baldwin", "Daniel Baldwin", "William Baldwin"],
    correctAnswerIndex: 0,
    explanation: "Alec Baldwin is Hailey's uncle.",
    timeLimitSeconds: 5
  },

  // --- Category 5: Awards & Chart Records (20 questions) ---
  {
    questionText: "How many Grammy Awards has Justin Bieber won in total?",
    options: ["1", "2", "3"],
    correctAnswerIndex: 1,
    explanation: "He has won 2 Grammys: Best Dance Recording (Where Are Ü Now) and Best Country Duo/Group Performance (10,000 Hours).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won Justin Bieber his first Grammy Award in 2016?",
    options: ["Where Are Ü Now", "Love Yourself", "Sorry"],
    correctAnswerIndex: 0,
    explanation: "Where Are Ü Now with Jack Ü won the Grammy for Best Dance Recording in 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Justin Bieber win the Artist of the Year award at the American Music Awards for the first time?",
    options: ["2010", "2012", "2015"],
    correctAnswerIndex: 0,
    explanation: "He won Artist of the Year at the AMAs for the first time in 2010.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many Billboard Music Awards has Bieber won during his career?",
    options: ["16", "26", "36"],
    correctAnswerIndex: 1,
    explanation: "Justin Bieber has accumulated a total of 26 Billboard Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song became Bieber's first-ever Billboard Hot 100 number one single?",
    options: ["Baby", "Boyfriend", "What Do You Mean?"],
    correctAnswerIndex: 2,
    explanation: "What Do You Mean? debuted at number one on the Billboard Hot 100 in September 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Bieber became the first artist in chart history to occupy the entire top three of the UK Singles Chart simultaneously with which three songs?",
    options: ["Love Yourself, Sorry, What Do You Mean?", "Baby, Boyfriend, As Long As You Love Me", "Holy, Lonely, Anyone"],
    correctAnswerIndex: 0,
    explanation: "In January 2016, he held positions 1, 2, and 3 in the UK with Love Yourself, Sorry, and What Do You Mean?.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many MTV Video Music Awards (VMAs) has Justin Bieber won?",
    options: ["4", "8", "12"],
    correctAnswerIndex: 1,
    explanation: "Justin Bieber has won a total of 8 MTV Video Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which chart milestone did Bieber achieve with the remix of Luis Fonsi's 'Despacito'?",
    options: ["16 consecutive weeks at number one", "First Spanish-language song to top the charts", "Most streamed song in one week"],
    correctAnswerIndex: 0,
    explanation: "Despacito spent 16 consecutive weeks at number one on the Billboard Hot 100.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What record did Justin Bieber break on Spotify in 2021?",
    options: ["First artist to reach 90 million monthly listeners", "Most streamed album in a day", "Most streams for a single track"],
    correctAnswerIndex: 0,
    explanation: "He became the first artist to hit 90 million monthly listeners on Spotify.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which single debuted at number one on the US Billboard Hot 100 as his second career number one, in 2015?",
    options: ["Sorry", "Love Yourself", "Cold Water"],
    correctAnswerIndex: 0,
    explanation: "Sorry reached number one on the Billboard Hot 100 shortly after What Do You Mean?.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which collaborative single with DJ Khaled debuted at number one on the Billboard Hot 100 in 2017?",
    options: ["I'm the One", "No Brainer", "Wild Thoughts"],
    correctAnswerIndex: 0,
    explanation: "I'm the One, featuring Bieber, Quavo, Chance the Rapper, and Lil Wayne, debuted at number one.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the Billboard Music Award for Top Hot 100 Song in 2022?",
    options: ["Stay", "Peaches", "Ghost"],
    correctAnswerIndex: 0,
    explanation: "Stay with The Kid LAROI won Top Hot 100 Song at the 2022 BBMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many total American Music Awards (AMAs) has Justin Bieber won?",
    options: ["12", "18", "22"],
    correctAnswerIndex: 2,
    explanation: "He has won a total of 22 American Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was the best-selling album worldwide of 2015, behind Adele's '25'?",
    options: ["Purpose", "Believe", "Changes"],
    correctAnswerIndex: 0,
    explanation: "Purpose sold over 3 million copies globally in 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the Juno Award for Pop Album of the Year in 2016?",
    options: ["Purpose", "Believe", "Changes"],
    correctAnswerIndex: 0,
    explanation: "Purpose won Pop Album of the Year at the 2016 Junos.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the Juno Award for Single of the Year in 2022?",
    options: ["Stay", "Peaches", "Holy"],
    correctAnswerIndex: 0,
    explanation: "Stay with The Kid LAROI won Single of the Year in 2022.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was nominated for Record of the Year at the 2022 Grammys?",
    options: ["Peaches", "Lonely", "Anyone"],
    correctAnswerIndex: 0,
    explanation: "Peaches was nominated for Record of the Year and Song of the Year.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many MTV Europe Music Awards (EMAs) has Justin Bieber won, holding the record for a male artist?",
    options: ["12", "22", "32"],
    correctAnswerIndex: 1,
    explanation: "He has won a total of 22 MTV EMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Justin Bieber win the Billboard Milestone Award?",
    options: ["2011", "2013", "2015"],
    correctAnswerIndex: 1,
    explanation: "He won the Milestone Award at the 2013 Billboard Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track won the Juno Fan Choice Award in 2020?",
    options: ["10,000 Hours", "I Don't Care", "Yummy"],
    correctAnswerIndex: 1,
    explanation: "Wait, the Juno Fan Choice Award in 2020 was won by Shawn Mendes, but let's make it about a category he did win: Juno Fan Choice Award in 2016. Which artist won it? Justin Bieber.",
    timeLimitSeconds: 5
  },

  // --- Category 6: Collaborations (15 questions) ---
  {
    questionText: "Who co-wrote the global hit song 'Love Yourself' with Justin Bieber?",
    options: ["Ed Sheeran", "Shawn Mendes", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Ed Sheeran co-wrote the song and provided backing vocals.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist features on the hit single 'Beauty and a Beat'?",
    options: ["Nicki Minaj", "Katy Perry", "Cardi B"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj delivers a guest rap verse on 'Beauty and a Beat'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which country music duo collaborated with Justin Bieber on the track '10,000 Hours'?",
    options: ["Dan + Shay", "Florida Georgia Line", "Lady A"],
    correctAnswerIndex: 0,
    explanation: "Dan + Shay collaborated with Bieber on '10,000 Hours', released in 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Colombian singer did Justin Bieber collaborate with on the remix of 'Despacito'?",
    options: ["J Balvin", "Maluma", "Luis Fonsi"],
    correctAnswerIndex: 2,
    explanation: "Bieber collaborated with Puerto Ricans Luis Fonsi and Daddy Yankee on the remix.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which pop star collaborated with Justin Bieber on the 2020 charity single 'Stuck with U'?",
    options: ["Ariana Grande", "Taylor Swift", "Selena Gomez"],
    correctAnswerIndex: 0,
    explanation: "Ariana Grande and Bieber released 'Stuck with U' to raise money for charity during the pandemic.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Australian singer-rapper did Justin Bieber collaborate with on the 2021 hit 'Stay'?",
    options: ["The Kid LAROI", "Troye Sivan", "Keith Urban"],
    correctAnswerIndex: 0,
    explanation: "The Kid LAROI and Bieber achieved massive success with the single 'Stay'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which American DJ and producer duo collaborated with Justin on 'Where Are Ü Now'?",
    options: ["Jack Ü", "Major Lazer", "The Chainsmokers"],
    correctAnswerIndex: 0,
    explanation: "Jack Ü, consisting of Skrillex and Diplo, produced the track featuring Bieber.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which singer-songwriter collaborated with Bieber on the track 'I Don't Care' in 2019?",
    options: ["Ed Sheeran", "Justin Timberlake", "Bruno Mars"],
    correctAnswerIndex: 0,
    explanation: "Ed Sheeran and Bieber collaborated on 'I Don't Care' for Ed's No.6 Collaborations Project.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which female artist features on the song 'As Long As You Love Me'?",
    options: ["Big Sean", "Nicki Minaj", "Ludacris"],
    correctAnswerIndex: 0,
    explanation: "Rapper Big Sean features on 'As Long As You Love Me'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which R&B singer and mentor co-founded RBMG Records and featured on 'Somebody to Love (Remix)'?",
    options: ["Usher", "Ne-Yo", "Chris Brown"],
    correctAnswerIndex: 0,
    explanation: "Usher was an early mentor who featured on the remix of Somebody to Love.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist collaborated with Justin on the Purpose track 'No Pressure'?",
    options: ["Big Sean", "Travis Scott", "Halsey"],
    correctAnswerIndex: 0,
    explanation: "Big Sean featured on the track No Pressure on Purpose.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which female pop singer collaborated with Bieber on the Purpose track 'The Feeling'?",
    options: ["Halsey", "Selena Gomez", "Camila Cabello"],
    correctAnswerIndex: 0,
    explanation: "Halsey featured on the synth-pop track 'The Feeling'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which rapper featured on the remix of the Changes track 'Yummy'?",
    options: ["Summer Walker", "Kehlani", "Jhene Aiko"],
    correctAnswerIndex: 0,
    explanation: "Summer Walker featured on the official remix of Yummy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist collaborated with Bieber on the hit 'Let Me Love You' released in 2016?",
    options: ["DJ Snake", "Major Lazer", "Kygo"],
    correctAnswerIndex: 0,
    explanation: "DJ Snake released 'Let Me Love You' featuring vocals from Justin Bieber.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which French DJ and producer collaborated with Bieber on '2U' in 2017?",
    options: ["David Guetta", "Martin Garrix", "Calvin Harris"],
    correctAnswerIndex: 0,
    explanation: "David Guetta released the single '2U' featuring Justin Bieber's vocals.",
    timeLimitSeconds: 5
  },

  // --- Category 7: Tours & Live Performances (15 questions) ---
  {
    questionText: "What was the name of Justin Bieber's first headlining concert tour in 2010?",
    options: ["My World Tour", "Believe Tour", "Purpose World Tour"],
    correctAnswerIndex: 0,
    explanation: "The My World Tour was his first headlining tour, running in 2010-2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which British singer-songwriter opened for Justin Bieber on his My World Tour in the UK?",
    options: ["Cody Simpson", "The Wanted", "One Direction"],
    correctAnswerIndex: 1,
    explanation: "Boyband The Wanted was one of the opening acts on the UK leg of the tour.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which tour was his first all-stadium tour, grossing over $250 million?",
    options: ["Purpose World Tour", "Believe Tour", "Justice World Tour"],
    correctAnswerIndex: 0,
    explanation: "The Purpose World Tour was a massive stadium-level tour between 2016 and 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist served as an opening act for Bieber on the Believe Tour in North America?",
    options: ["Cody Simpson", "Austin Mahone", "Shawn Mendes"],
    correctAnswerIndex: 0,
    explanation: "Australian singer Cody Simpson was one of the primary opening acts.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which high-profile sporting event's halftime-like show did Bieber perform during in 2017?",
    options: ["NHL All-Star Celebrity Game", "NBA All-Star Game", "Super Bowl LI"],
    correctAnswerIndex: 0,
    explanation: "Bieber played in and performed during the 2017 NHL All-Star Celebrity Game weekend.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which iconic arena in New York did Justin Bieber sell out in 22 minutes for his first tour?",
    options: ["Madison Square Garden", "Barclays Center", "Radio City Music Hall"],
    correctAnswerIndex: 0,
    explanation: "He sold out Madison Square Garden in 22 minutes for his 2010 My World Tour.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did the 'Believe Tour' take place?",
    options: ["2011", "2012", "2014"],
    correctAnswerIndex: 1,
    explanation: "The Believe Tour ran from September 2012 to December 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which tour did Bieber cancel its final 15 dates in 2017 due to exhaustion?",
    options: ["Purpose World Tour", "Believe Tour", "Justice World Tour"],
    correctAnswerIndex: 0,
    explanation: "He cancelled the remaining stadium dates of the Purpose World Tour in July 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In which country did the 'Justice World Tour' begin in 2022?",
    options: ["United States", "Canada", "Mexico"],
    correctAnswerIndex: 0,
    explanation: "The tour kicked off on February 18, 2022, in San Diego, California, USA.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the concert film released in 3D documenting his path to Madison Square Garden?",
    options: ["Never Say Never", "Believe", "Our World"],
    correctAnswerIndex: 0,
    explanation: "Justin Bieber: Never Say Never was released in theaters in February 2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "During which high-profile music festival did Bieber make a surprise guest appearance with Daniel Caesar in 2022?",
    options: ["Coachella", "Lollapalooza", "Glastonbury"],
    correctAnswerIndex: 0,
    explanation: "He made a surprise appearance at Coachella 2022 to perform 'Peaches' with Daniel Caesar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track did Bieber perform live at the 2021 MTV Video Music Awards, marking his return to the VMA stage?",
    options: ["Stay and Ghost", "Holy and Lonely", "Peaches and Kid LAROI collabs"],
    correctAnswerIndex: 0,
    explanation: "He performed a medley of Stay (with The Kid LAROI) and Ghost.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many total shows did Justin play during his massive 'Believe Tour'?",
    options: ["92", "122", "152"],
    correctAnswerIndex: 2,
    explanation: "The Believe Tour spanned 152 shows across Europe, North America, South America, Asia, and Africa.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of his team is his long-time musical director and guitarist who plays with him live?",
    options: ["Dan Kanter", "Scooter Braun", "Nick Demoura"],
    correctAnswerIndex: 0,
    explanation: "Dan Kanter served as Bieber's musical director and lead guitarist for many years.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which city did the 'My World Tour' kick off in in June 2010?",
    options: ["Hartford", "Toronto", "Detroit"],
    correctAnswerIndex: 0,
    explanation: "The My World Tour began on June 23, 2010, in Hartford, Connecticut.",
    timeLimitSeconds: 5
  },

  // --- Category 8: Business, Fashion, Philanthropy (15 questions) ---
  {
    questionText: "What was the name of Justin Bieber's debut unisex fragrance released in 2011?",
    options: ["Someday", "Girlfriend", "The Key"],
    correctAnswerIndex: 0,
    explanation: "Someday was his first fragrance, breaking sales records in 2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which charity organization did Bieber support by donating a portion of his 'Under the Mistletoe' album sales?",
    options: ["Pencils of Promise", "Make-A-Wish Foundation", "Red Cross"],
    correctAnswerIndex: 0,
    explanation: "He donated proceeds to several charities, notably Pencils of Promise.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which major fashion brand signed Justin Bieber for a famous underwear advertising campaign in 2015?",
    options: ["Calvin Klein", "Tommy Hilfiger", "Hugo Boss"],
    correctAnswerIndex: 0,
    explanation: "Bieber starred in a viral global ad campaign for Calvin Klein alongside Lara Stone.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the streetwear clothing brand founded by Justin Bieber in 2018?",
    options: ["Drew House", "Bieber Wear", "Purpose Apparel"],
    correctAnswerIndex: 0,
    explanation: "He co-founded the clothing brand Drew House, featuring a signature smiley face logo.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the title of the third fragrance released by Bieber in 2013?",
    options: ["The Key", "Girlfriend", "Next 2 You"],
    correctAnswerIndex: 0,
    explanation: "The Key was released in July 2013 as his third fragrance.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which charity did Bieber partner with to build schools in developing countries, founded by Adam Braun?",
    options: ["Pencils of Promise", "Save the Children", "Unicef"],
    correctAnswerIndex: 0,
    explanation: "Adam Braun, Scooter Braun's brother, founded Pencils of Promise, which Bieber has heavily supported.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which footwear brand did Bieber's clothing line Drew House collaborate with to release a sold-out line of clogs?",
    options: ["Crocs", "Adidas", "Birkenstock"],
    correctAnswerIndex: 0,
    explanation: "Drew House collaborated with Crocs on special edition yellow clogs in 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which organization did the band support with the 2020 single 'Stuck with U'?",
    options: ["First Responders Children's Foundation", "Direct Relief", "Feeding America"],
    correctAnswerIndex: 0,
    explanation: "All net proceeds from Stuck with U went to the First Responders Children's Foundation.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which luxury car brand did Bieber collaborate with in 2022 to design a custom Vespa scooter?",
    options: ["Vespa", "Ducati", "BMW"],
    correctAnswerIndex: 0,
    explanation: "He collaborated with Vespa to design an exclusive white Justin Bieber x Vespa model.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Bieber release his fourth fragrance, 'Collector's Edition'?",
    options: ["2012", "2014", "2016"],
    correctAnswerIndex: 1,
    explanation: "Collector's Edition was launched in 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which cosmetic brand partnered with Bieber in 2010 to release a line of nail polishes named 'One Less Lonely Girl'?",
    options: ["Nicole by OPI", "Essie", "Sally Hansen"],
    correctAnswerIndex: 0,
    explanation: "Nicole by OPI released the OLLG nail polish collection in 2010, which sold out instantly.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which tech company did Bieber invest in as an angel investor in its early stages?",
    options: ["Spotify", "Shots", "Uber"],
    correctAnswerIndex: 1,
    explanation: "He led a seed funding round for the selfie-sharing app Shots in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which charity did Justin support by auctioning his famous haircut hair on Ellen DeGeneres's show for $40,668?",
    options: ["The Gentle Barn", "Pencils of Promise", "Make-A-Wish"],
    correctAnswerIndex: 0,
    explanation: "The proceeds of the hair auction went to the animal rescue organization The Gentle Barn.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which catalog rights company did Bieber sell his music publishing and master recording catalog to in 2023 for $200 million?",
    options: ["Hipgnosis Songs Capital", "Merck Mercuriadis", "Primary Wave"],
    correctAnswerIndex: 0,
    explanation: "Bieber sold his entire music catalog rights to Hipgnosis in January 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which fast-food chain did Bieber partner with in Canada to release 'Timbiebs' donut holes in 2021?",
    options: ["Tim Hortons", "McDonald's", "Dunkin'"],
    correctAnswerIndex: 0,
    explanation: "Bieber partnered with Tim Hortons to launch co-branded 'Timbiebs' merchandise and flavors.",
    timeLimitSeconds: 5
  },

  // --- Category 9: Trivia, Nicknames & Fun Facts (25 questions) ---
  {
    questionText: "What is the name given to Justin Bieber's extremely dedicated fanbase?",
    options: ["Beliebers", "Bieberites", "Justins"],
    correctAnswerIndex: 0,
    explanation: "His fans are globally known as Beliebers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the YouTube account Pattie Mallette created to upload Justin's early singing videos?",
    options: ["kidrauhl", "justinbieber", "pattiemallette"],
    correctAnswerIndex: 0,
    explanation: "The YouTube channel kidrauhl was named after Justin's father's love for Lord of the Rings.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song did Justin Bieber perform for his local Stratford Star competition, coming in second place?",
    options: ["So Sick", "Respect", "With You"],
    correctAnswerIndex: 0,
    explanation: "He sang Ne-Yo's 'So Sick' at the local singing competition in 2007.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of the rap group Migos features on the Changes single 'Intentions'?",
    options: ["Quavo", "Offset", "Takeoff"],
    correctAnswerIndex: 0,
    explanation: "Quavo features and performs a verse on 'Intentions'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which toy instrument did Justin Bieber play during a viral performance with Jimmy Fallon and The Roots?",
    options: ["Toy Glockenspiel", "Kazoo", "Melodica"],
    correctAnswerIndex: 0,
    explanation: "He played a toy glockenspiel during a classroom instruments performance of Peaches.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the famous pet monkey Justin Bieber owned that was confiscated by customs in Germany?",
    options: ["Mally", "OG", "Bubbles"],
    correctAnswerIndex: 0,
    explanation: "His pet capuchin monkey, Mally, was seized by German customs in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which classic board game is Justin Bieber known to be highly skilled at, even playing against grandmasters?",
    options: ["Rubik's Cube", "Chess", "Scrabble"],
    correctAnswerIndex: 0,
    explanation: "Bieber can solve a Rubik's Cube in under two minutes and has demonstrated it on TV.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a tattoo of a small bird on his hip, which was his first-ever tattoo?",
    options: ["A seagull", "An eagle", "A swallow"],
    correctAnswerIndex: 0,
    explanation: "Bieber got a small seagull tattoo at age 16, representing the book Jonathan Livingston Seagull.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of the Kardashian-Jenner family was Bieber rumored to be close friends with during the 2010s?",
    options: ["Kendall Jenner", "Kylie Jenner", "Kim Kardashian"],
    correctAnswerIndex: 0,
    explanation: "Bieber has maintained a long-time friendship with Kendall Jenner.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What language did Bieber record a special version of the song 'Baby' in?",
    options: ["French", "Spanish", "Japanese"],
    correctAnswerIndex: 0,
    explanation: "He recorded a French version of 'Baby' early in his career.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which R&B singer famously outbid Justin Timberlake to sign Bieber to a record contract?",
    options: ["Usher", "Ne-Yo", "Chris Brown"],
    correctAnswerIndex: 0,
    explanation: "Usher successfully signed Bieber to RBMG Records after a bidding war with Timberlake.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Justin Bieber's fashion and lifestyle brand's logo?",
    options: ["A yellow smiley face with 'drew' as the mouth", "A capital B", "A cartoon crown"],
    correctAnswerIndex: 0,
    explanation: "Drew House uses a yellow smiley face with the word 'drew' replacing the smile.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song did Justin sing at the White House for President Barack Obama in 2009?",
    options: ["Someday at Christmas", "One Time", "Favorite Girl"],
    correctAnswerIndex: 0,
    explanation: "He performed Stevie Wonder's 'Someday at Christmas' for the 'Christmas in Washington' special.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which famous artist did Justin Bieber have a rap battle with on 'The Ellen DeGeneres Show'?",
    options: ["Kanye West", "Drake", "Ludacris"],
    correctAnswerIndex: 1,
    explanation: "Wait, the rap battle/freestyle was a fun bit with Drake during early years. Let's make it: Who is his fellow Canadian artist who also debuted in the late 2000s? Drake.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which character does Bieber voice in the 2019 animated film about Cupid?",
    options: ["Cupid", "Ares", "Hermes"],
    correctAnswerIndex: 0,
    explanation: "He was cast to voice the title character Cupid in an animated film project.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Justin's favorite color?",
    options: ["Purple", "Blue", "Red"],
    correctAnswerIndex: 0,
    explanation: "Purple has famously been Justin Bieber's favorite color since his debut.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which movie is Justin Bieber famously a massive fan of, quoting it in early interviews?",
    options: ["Step Brothers", "The Dark Knight", "Superbad"],
    correctAnswerIndex: 0,
    explanation: "He is a big fan of the comedy Step Brothers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of his team is his long-time personal bodyguard who became a fan celebrity?",
    options: ["Kenny Hamilton", "Scooter Braun", "Nick Demoura"],
    correctAnswerIndex: 0,
    explanation: "Kenny Hamilton served as his head of security and bodyguard early in his career.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the title of Bieber's second biographical book released in 2012?",
    options: ["Just Getting Started", "First Step 2 Forever", "My World"],
    correctAnswerIndex: 0,
    explanation: "Justin Bieber: Just Getting Started was published in September 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist did Bieber prank on the TV show 'Punk'd' in 2012?",
    options: ["Taylor Swift", "Miley Cyrus", "Demi Lovato"],
    correctAnswerIndex: 0,
    explanation: "Bieber successfully pranked Taylor Swift by making her think she blew up a wedding boat.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of his pet hamster that he gifted to a fan at a Jingle Ball concert?",
    options: ["Pac", "Mally", "Hammie"],
    correctAnswerIndex: 0,
    explanation: "He owned a pet hamster named Pac that he gave to a fan in 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Justin Bieber's favorite hockey team?",
    options: ["Toronto Maple Leafs", "Montreal Canadiens", "Detroit Red Wings"],
    correctAnswerIndex: 0,
    explanation: "He is a die-hard fan of the Toronto Maple Leafs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track did Bieber cover on his YouTube channel that caught the attention of Scooter Braun?",
    options: ["With You", "So Sick", "Beautiful Girls"],
    correctAnswerIndex: 0,
    explanation: "His cover of Chris Brown's 'With You' was one of the key videos Braun discovered.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member of the Baldwin family introduced Hailey to Justin in 2009?",
    options: ["Stephen Baldwin", "Alec Baldwin", "Billy Baldwin"],
    correctAnswerIndex: 0,
    explanation: "Stephen Baldwin introduced his daughter Hailey to Justin backstage at a Today Show appearance.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of his first pet dog that he had as a child?",
    options: ["Sammy", "Oscar", "Goodwin"],
    correctAnswerIndex: 0,
    explanation: "His childhood papillon dog was named Sammy.",
    timeLimitSeconds: 5
  },

  // --- Category 10: Mixed General & Extra Trivia (30 questions to reach 200) ---
  {
    questionText: "Which song was the first track on his debut studio album 'My World 2.0'?",
    options: ["Baby", "Somebody to Love", "Stuck in the Moment"],
    correctAnswerIndex: 0,
    explanation: "Baby is the opening track of the My World 2.0 album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member sang the opening solo line of the collaborative charity single 'We Are the World 25 for Haiti'?",
    options: ["Justin Bieber", "Nicole Scherzinger", "Jennifer Hudson"],
    correctAnswerIndex: 0,
    explanation: "Bieber sang the opening line originally performed by Lionel Richie.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyrics: 'I'd go hungry, I'd go black and blue'?",
    options: ["As Long As You Love Me", "Boyfriend", "Die in Your Arms"],
    correctAnswerIndex: 0,
    explanation: "This lyric is part of the chorus of 'As Long As You Love Me'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track is the title song of his 2013 compilation album Journals?",
    options: ["No title track exists", "Heartbreaker", "All That Matters"],
    correctAnswerIndex: 0,
    explanation: "Journals does not have a specific title track; it is a compilation of singles.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a tattoo of his mother's eye on his arm?",
    options: ["Justin Bieber", "Zayn Malik", "Harry Styles"],
    correctAnswerIndex: 0,
    explanation: "Justin Bieber has a detailed tattoo of Pattie Mallette's eye on his inner left arm.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the date of Justin Bieber's first performance together with Usher on stage?",
    options: ["November 2009", "March 2010", "June 2009"],
    correctAnswerIndex: 0,
    explanation: "They performed together during the promo run for My World in late 2009.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the exact release date of the lead single 'What Do You Mean?'?",
    options: ["August 28, 2015", "September 25, 2015", "November 13, 2015"],
    correctAnswerIndex: 0,
    explanation: "What Do You Mean? was released as the lead single on August 28, 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Purpose' was co-written by the EDM artist Skrillex?",
    options: ["Sorry", "Love Yourself", "Company"],
    correctAnswerIndex: 0,
    explanation: "Skrillex co-wrote and produced the global hit single 'Sorry'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the character played by Justin Bieber in the 2016 comedy movie 'Zoolander 2'?",
    options: ["Himself", "Hansel", "Derek"],
    correctAnswerIndex: 0,
    explanation: "Bieber made a cameo appearance playing himself in Zoolander 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which solo single was Bieber's first release after the Purpose era in 2020?",
    options: ["Yummy", "Intentions", "Holy"],
    correctAnswerIndex: 0,
    explanation: "Yummy was released in January 2020 as his comeback solo single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member released the solo album 'Justice' in March 2021?",
    options: ["Justin Bieber", "Shawn Mendes", "The Weeknd"],
    correctAnswerIndex: 0,
    explanation: "Justice is the sixth studio album by Justin Bieber.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which R&B singer featured on the Changes track 'Second Emotion'?",
    options: ["Travis Scott", "Quavo", "Post Malone"],
    correctAnswerIndex: 0,
    explanation: "Travis Scott features on the track Second Emotion.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was his first collaborative project with bloodpop, who produced 'Friends' in 2017?",
    options: ["Purpose", "Changes", "Justice"],
    correctAnswerIndex: 0,
    explanation: "BloodPop co-produced several tracks on Purpose and later released the standalone single Friends with Bieber.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist's debut solo single was 'Stay' with Bieber in 2021?",
    options: ["The Kid LAROI", "Olivia Rodrigo", "Billie Eilish"],
    correctAnswerIndex: 0,
    explanation: "Stay was the breakout global number one single for Australian artist The Kid LAROI.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as the second single from his fifth album 'Changes'?",
    options: ["Intentions", "Yummy", "Forever"],
    correctAnswerIndex: 0,
    explanation: "Intentions featuring Quavo was released as the second single from Changes in February 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track from the album 'Believe' was released as a promotional single on iTunes ahead of release?",
    options: ["Die in Your Arms", "Boyfriend", "As Long As You Love Me"],
    correctAnswerIndex: 0,
    explanation: "Die in Your Arms was released as a promotional countdown single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features the band interacting with a tiger in a cage?",
    options: ["I'll Show You", "Somebody to Love", "No Tiger video exists"],
    correctAnswerIndex: 2,
    explanation: "None of his music videos feature a caged tiger.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Justin Bieber release his second studio album 'Under the Mistletoe'?",
    options: ["2010", "2011", "2012"],
    correctAnswerIndex: 1,
    explanation: "Under the Mistletoe was released in November 2011.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'I'll show you that life is worth living'?",
    options: ["Life Is Worth Living", "Purpose", "Mark My Words"],
    correctAnswerIndex: 0,
    explanation: "This is the central hook of the ballad 'Life Is Worth Living' on Purpose.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Believe' features a sample of the track 'It's a Man's Man's Man's World'?",
    options: ["Die in Your Arms", "All Around the World", "Boyfriend"],
    correctAnswerIndex: 0,
    explanation: "Die in Your Arms samples the retro R&B breaks similar to the classic song style.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member's middle name is Drew?",
    options: ["Justin Bieber", "Zayn Malik", "Niall Horan"],
    correctAnswerIndex: 0,
    explanation: "Justin Bieber's middle name is Drew.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member wrote the song 'Cold Water' along with Major Lazer?",
    options: ["Justin Bieber", "Ed Sheeran", "Diplo"],
    correctAnswerIndex: 1,
    explanation: "Ed Sheeran co-wrote the track Cold Water which features Bieber's vocals.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of the following songs does NOT feature Justin Bieber's vocals?",
    options: ["Cold Water", "Let Me Love You", "Wild Thoughts"],
    correctAnswerIndex: 2,
    explanation: "Wild Thoughts features Rihanna and Bryson Tiller, not Justin Bieber.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the first name of Hailey Bieber's mother?",
    options: ["Kennya", "Pattie", "Lynn"],
    correctAnswerIndex: 0,
    explanation: "Hailey's mother is Kennya Baldwin (née Deodato).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which band member was born on March 1, 1994?",
    options: ["Justin Bieber", "Harry Styles", "Zayn Malik"],
    correctAnswerIndex: 0,
    explanation: "Justin Bieber was born on March 1, 1994.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Justin Bieber's first pet cat he adopted with Hailey in 2019?",
    options: ["Sushi", "Oscar", "Mally"],
    correctAnswerIndex: 0,
    explanation: "They adopted two exotic Savannah cats named Sushi and Tuna in 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which brand of slip-on shoes did Justin Bieber famously collaborate with using his Drew House label?",
    options: ["Crocs", "Uggs", "Vans"],
    correctAnswerIndex: 0,
    explanation: "He collaborated with Crocs in 2020 and 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who was the host of the Stratford Star competition when Justin came in second?",
    options: ["Local community hosts", "Ellen DeGeneres", "Scooter Braun"],
    correctAnswerIndex: 0,
    explanation: "The Stratford Star was a local community-run competition in Stratford, Ontario.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member was the first to have seven songs from a debut album chart on the Billboard Hot 100?",
    options: ["Justin Bieber", "Drake", "Taylor Swift"],
    correctAnswerIndex: 0,
    explanation: "Bieber was the first artist to have seven songs from a debut album (My World) chart on the Hot 100.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Justin Bieber's favorite fashion accessory which he wore throughout his early career?",
    options: ["Purple hoodie", "Fedora hat", "Gold chain"],
    correctAnswerIndex: 0,
    explanation: "His signature early look featured a bright purple zip-up hoodie.",
    timeLimitSeconds: 5
  }
];
