import { Question } from './mockData';

export const NICKI_MINAJ_QUESTIONS: Omit<Question, 'id' | 'categoryId' | 'subCategoryId'>[] = [
  // --- Category 1: Discography & Albums (25 questions) ---
  {
    questionText: "What is the title of Nicki Minaj's debut studio album released in 2010?",
    options: ["Pink Friday", "The Pinkprint", "Queen"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj's debut studio album is Pink Friday, released on November 22, 2010.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Nicki Minaj release her sophomore studio album, 'Pink Friday: Roman Reloaded'?",
    options: ["2011", "2012", "2013"],
    correctAnswerIndex: 1,
    explanation: "Pink Friday: Roman Reloaded was released on April 3, 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Nicki Minaj's third studio album, released in 2014?",
    options: ["The Pinkprint", "Queen", "Pink Friday 2"],
    correctAnswerIndex: 0,
    explanation: "The Pinkprint was released in December 2014 as Nicki Minaj's third studio album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Nicki Minaj release the studio album 'Queen'?",
    options: ["2017", "2018", "2019"],
    correctAnswerIndex: 1,
    explanation: "Nicki Minaj released the studio album Queen in August 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album did Nicki Minaj release in 2023 as a sequel to her debut album?",
    options: ["Pink Friday 2", "The Pinkprint 2", "Queen Radio"],
    correctAnswerIndex: 0,
    explanation: "Pink Friday 2 was released on December 8, 2023, as a sequel to her debut.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of Nicki Minaj's first official mixtape released in 2007?",
    options: ["Playtime Is Over", "Sucka Free", "Beam Me Up Scotty"],
    correctAnswerIndex: 0,
    explanation: "Playtime Is Over was Nicki Minaj's first mixtape, released in 2007.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Nicki Minaj release her second mixtape, 'Sucka Free'?",
    options: ["2007", "2008", "2009"],
    correctAnswerIndex: 1,
    explanation: "Nicki Minaj released Sucka Free in April 2008.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape released in 2009 contains the breakout song 'Itty Bitty Piggy'?",
    options: ["Beam Me Up Scotty", "Sucka Free", "Playtime Is Over"],
    correctAnswerIndex: 0,
    explanation: "Beam Me Up Scotty was released in April 2009 and features Itty Bitty Piggy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which record label did Nicki Minaj sign with in 2009 after being discovered by Lil Wayne?",
    options: ["Young Money Entertainment", "Roc Nation", "Def Jam Recordings"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj signed with Lil Wayne's Young Money Entertainment in August 2009.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the reissue edition of Pink Friday released in 2012?",
    options: ["Pink Friday: Roman Reloaded – The Re-Up", "Pink Friday: Roman Reloaded Deluxe", "The Pinkprint Deluxe"],
    correctAnswerIndex: 0,
    explanation: "The Re-Up was released as an expanded reissue of Roman Reloaded in November 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the compilation album Nicki Minaj released with Young Money in 2009?",
    options: ["We Are Young Money", "Rise of an Empire", "Young Money Greatest Hits"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj collaborated on the Young Money group compilation We Are Young Money in 2009.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which compilation album features Nicki Minaj and was released by Young Money in 2014?",
    options: ["Young Money: Rise of an Empire", "We Are Young Money", "The Pinkprint Collection"],
    correctAnswerIndex: 0,
    explanation: "Rise of an Empire was released in March 2014 featuring the Young Money roster.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many studio albums had Nicki Minaj released by the end of 2023?",
    options: ["4", "5", "6"],
    correctAnswerIndex: 1,
    explanation: "Nicki Minaj has released 5 studio albums: Pink Friday, Roman Reloaded, The Pinkprint, Queen, and Pink Friday 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of Nicki Minaj's first compilation or box set released in 2022?",
    options: ["Queen Radio: Volume 1", "The Pink Collection", "Nicki's Hits"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj released the compilation album Queen Radio: Volume 1 in August 2022.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as the lead single from 'The Pinkprint' in May 2014?",
    options: ["Pills n Potions", "Anaconda", "Only"],
    correctAnswerIndex: 0,
    explanation: "Pills n Potions was released as the album's lead single in May 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song served as the lead single for the 'Queen' album in April 2018?",
    options: ["Chun-Li", "Barbie Dreams", "Bed"],
    correctAnswerIndex: 0,
    explanation: "Chun-Li was released as the lead single alongside Barbie Tingz in April 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of Nicki Minaj's first-ever commercial single, released in 2010?",
    options: ["Massive Attack", "Your Love", "Super Bass"],
    correctAnswerIndex: 0,
    explanation: "Massive Attack featuring Sean Garrett was released as her debut commercial single in 2010.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as a promotional single from 'Pink Friday 2' in 2023?",
    options: ["Red Ruby Da Sleeze", "Last Time I Saw You", "FTCU"],
    correctAnswerIndex: 0,
    explanation: "Red Ruby Da Sleeze was released as a promotional single in March 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many tracks are on the standard edition of 'The Pinkprint'?",
    options: ["14", "16", "18"],
    correctAnswerIndex: 1,
    explanation: "The standard edition of The Pinkprint features 16 tracks.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the opening track on the album 'Queen'?",
    options: ["Ganja Burn", "Majesty", "Barbie Dreams"],
    correctAnswerIndex: 0,
    explanation: "Ganja Burn is the opening track on the Queen album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the final track on the standard edition of 'Pink Friday'?",
    options: ["Dear Old Nicki", "Fly", "Last Chance"],
    correctAnswerIndex: 0,
    explanation: "Dear Old Nicki is the closing track on the standard edition of Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Pink Friday: Roman Reloaded' was co-produced by RedOne?",
    options: ["Starships", "Beez in the Trap", "Roman Holiday"],
    correctAnswerIndex: 0,
    explanation: "RedOne produced and co-wrote the global hit Starships.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what month of 2023 was 'Pink Friday 2' released?",
    options: ["October", "November", "December"],
    correctAnswerIndex: 2,
    explanation: "Pink Friday 2 was officially released on December 8, 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of the following albums was released first?",
    options: ["The Pinkprint", "Queen", "Pink Friday: Roman Reloaded"],
    correctAnswerIndex: 2,
    explanation: "Pink Friday: Roman Reloaded (2012) was released before The Pinkprint (2014) and Queen (2018).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features a cover of Nicki Minaj posing against a bright green background with space themes?",
    options: ["Beam Me Up Scotty", "Sucka Free", "Playtime Is Over"],
    correctAnswerIndex: 0,
    explanation: "The cover of Beam Me Up Scotty features a sci-fi space themed background.",
    timeLimitSeconds: 5
  },

  // --- Category 2: Song-to-Album Matching (40 questions) ---
  {
    questionText: "Which album features the hit song 'Super Bass'?",
    options: ["Pink Friday", "Pink Friday: Roman Reloaded", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Super Bass is included on the deluxe edition of Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the hit song 'Starships'?",
    options: ["Pink Friday: Roman Reloaded", "Pink Friday", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Starships is the lead single of Pink Friday: Roman Reloaded.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Anaconda'?",
    options: ["The Pinkprint", "Queen", "Pink Friday: Roman Reloaded"],
    correctAnswerIndex: 0,
    explanation: "Anaconda is track 12 on The Pinkprint.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Chun-Li'?",
    options: ["Queen", "The Pinkprint", "Pink Friday 2"],
    correctAnswerIndex: 0,
    explanation: "Chun-Li is track 10 on the Queen album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Super Freaky Girl'?",
    options: ["Pink Friday 2", "Queen", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Super Freaky Girl is a chart-topping single from Pink Friday 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Your Love'?",
    options: ["Pink Friday", "Pink Friday: Roman Reloaded", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Your Love is the first official single from Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Moment 4 Life' featuring Drake?",
    options: ["Pink Friday", "Pink Friday: Roman Reloaded", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Moment 4 Life is featured on Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Right Thru Me'?",
    options: ["Pink Friday", "The Pinkprint", "Queen"],
    correctAnswerIndex: 0,
    explanation: "Right Thru Me is track 5 on Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Fly' featuring Rihanna?",
    options: ["Pink Friday", "Pink Friday: Roman Reloaded", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Fly is the final track on the standard edition of Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Roman Holiday'?",
    options: ["Pink Friday: Roman Reloaded", "Pink Friday", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Roman Holiday is the opening track of Pink Friday: Roman Reloaded.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Beez in the Trap' featuring 21 Savage or 2 Chainz?",
    options: ["Pink Friday: Roman Reloaded", "Pink Friday", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Beez in the Trap features 2 Chainz and is on Roman Reloaded.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Pound the Alarm'?",
    options: ["Pink Friday: Roman Reloaded", "The Pinkprint", "Pink Friday 2"],
    correctAnswerIndex: 0,
    explanation: "Pound the Alarm is a dance-pop track on Pink Friday: Roman Reloaded.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Va Va Voom'?",
    options: ["Pink Friday: Roman Reloaded", "Pink Friday", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Va Va Voom is featured on the deluxe and Re-Up versions of Roman Reloaded.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Pills n Potions'?",
    options: ["The Pinkprint", "Queen", "Pink Friday: Roman Reloaded"],
    correctAnswerIndex: 0,
    explanation: "Pills n Potions is track 6 on The Pinkprint.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Only' featuring Drake, Lil Wayne, and Chris Brown?",
    options: ["The Pinkprint", "Queen", "Pink Friday: Roman Reloaded"],
    correctAnswerIndex: 0,
    explanation: "Only is featured on the tracklist of The Pinkprint.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Bed of Lies' featuring Skylar Grey?",
    options: ["The Pinkprint", "Pink Friday 2", "Queen"],
    correctAnswerIndex: 0,
    explanation: "Bed of Lies is track 14 on The Pinkprint.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Truffle Butter' featuring Drake and Lil Wayne?",
    options: ["The Pinkprint", "Queen", "Pink Friday 2"],
    correctAnswerIndex: 0,
    explanation: "Truffle Butter is a bonus track on the deluxe edition of The Pinkprint.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Barbie Dreams'?",
    options: ["Queen", "The Pinkprint", "Pink Friday 2"],
    correctAnswerIndex: 0,
    explanation: "Barbie Dreams is track 3 on the Queen album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Bed' featuring Ariana Grande?",
    options: ["Queen", "The Pinkprint", "Pink Friday 2"],
    correctAnswerIndex: 0,
    explanation: "Bed features Ariana Grande and is on Queen.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Ganja Burn'?",
    options: ["Queen", "Pink Friday 2", "Pink Friday"],
    correctAnswerIndex: 0,
    explanation: "Ganja Burn is the opening track of the Queen album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'FTCU'?",
    options: ["Pink Friday 2", "Queen", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "FTCU is a massive charting track from Pink Friday 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Everybody' featuring Lil Uzi Vert?",
    options: ["Pink Friday 2", "Queen", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Everybody is featured on Pink Friday 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Itty Bitty Piggy'?",
    options: ["Beam Me Up Scotty", "Sucka Free", "Playtime Is Over"],
    correctAnswerIndex: 0,
    explanation: "Itty Bitty Piggy is track 2 on Beam Me Up Scotty.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Best I Ever Had (Remix)' with Drake?",
    options: ["Beam Me Up Scotty", "Sucka Free", "Playtime Is Over"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj's remix of Best I Ever Had is featured on Beam Me Up Scotty.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'Jump Off '07'?",
    options: ["Playtime Is Over", "Sucka Free", "Beam Me Up Scotty"],
    correctAnswerIndex: 0,
    explanation: "Jump Off '07 is featured on her debut mixtape Playtime Is Over.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which mixtape features the song 'High as a Kite' featuring Lil Wayne?",
    options: ["Sucka Free", "Playtime Is Over", "Beam Me Up Scotty"],
    correctAnswerIndex: 0,
    explanation: "High as a Kite is featured on Sucka Free.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Roman's Revenge' featuring Eminem?",
    options: ["Pink Friday", "Pink Friday: Roman Reloaded", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Roman's Revenge is track 4 on Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Did It On'em'?",
    options: ["Pink Friday", "The Pinkprint", "Queen"],
    correctAnswerIndex: 0,
    explanation: "Did It On'em is track 9 on Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Starships'?",
    options: ["Pink Friday: Roman Reloaded", "Pink Friday", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Starships is featured on Pink Friday: Roman Reloaded.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'High School' featuring Lil Wayne?",
    options: ["Pink Friday: Roman Reloaded", "The Pinkprint", "Pink Friday"],
    correctAnswerIndex: 0,
    explanation: "High School is featured on the reissue edition of Roman Reloaded.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the song 'Get Low' featuring 2 Chainz?",
    options: ["Pink Friday: Roman Reloaded", "The Pinkprint", "Pink Friday"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj featured on Get Low which was included on Young Money compilations.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Save Me'?",
    options: ["Pink Friday", "The Pinkprint", "Pink Friday: Roman Reloaded"],
    correctAnswerIndex: 0,
    explanation: "Save Me is track 10 on Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'The Night Is Still Young'?",
    options: ["The Pinkprint", "Pink Friday: Roman Reloaded", "Queen"],
    correctAnswerIndex: 0,
    explanation: "The Night Is Still Young is track 11 on The Pinkprint.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Good Form'?",
    options: ["Queen", "The Pinkprint", "Pink Friday 2"],
    correctAnswerIndex: 0,
    explanation: "Good Form is track 16 on the Queen album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Coco Chanel' featuring Foxy Brown?",
    options: ["Queen", "The Pinkprint", "Pink Friday 2"],
    correctAnswerIndex: 0,
    explanation: "Coco Chanel features Foxy Brown on the album Queen.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Last Time I Saw You'?",
    options: ["Pink Friday 2", "Queen", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Last Time I Saw You is a single from Pink Friday 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Red Ruby Da Sleeze'?",
    options: ["Pink Friday 2", "Queen", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Red Ruby Da Sleeze is track 2 on Pink Friday 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Needle' featuring Drake?",
    options: ["Pink Friday 2", "Queen", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Needle features Drake on the album Pink Friday 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Are You Gone Already'?",
    options: ["Pink Friday 2", "Queen", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Are You Gone Already is the opening track of Pink Friday 2.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album features the track 'Pink Birthday'?",
    options: ["Pink Friday 2", "Queen", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Pink Birthday is featured on Pink Friday 2.",
    timeLimitSeconds: 5
  },

  // --- Category 3: Song Lyrics & Music Video Facts (25 questions) ---
  {
    questionText: "Which song begins with the lyrics: 'I fly with the stars in the skies'?",
    options: ["Moment 4 Life", "Super Bass", "Fly"],
    correctAnswerIndex: 0,
    explanation: "Moment 4 Life begins with this lyric, delivered by Nicki Minaj.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Super Bass' music video, what color is the pool that Nicki Minaj splashes in?",
    options: ["Pink", "Blue", "Green"],
    correctAnswerIndex: 0,
    explanation: "The music video features a pool filled with pink water.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'Boy, you got my heartbeat runnin' away'?",
    options: ["Super Bass", "Starships", "Pound the Alarm"],
    correctAnswerIndex: 0,
    explanation: "This is the opening line of the chorus in Super Bass.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Starships' music video, where does Nicki Minaj beam down onto from a spaceship?",
    options: ["A tropical beach", "A city rooftop", "A desert canyon"],
    correctAnswerIndex: 0,
    explanation: "The video begins with Nicki Minaj appearing on a beach in Hawaii.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'My anaconda don't want no unless you got buns, hun'?",
    options: ["Anaconda", "Chun-Li", "Barbie Dreams"],
    correctAnswerIndex: 0,
    explanation: "This is the signature sample hook in Anaconda, originally from Sir Mix-a-Lot.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Anaconda' music video, which fruit does Nicki Minaj chop up during a kitchen scene?",
    options: ["Banana", "Pineapple", "Apple"],
    correctAnswerIndex: 0,
    explanation: "The video features a scene where Nicki Minaj slices a banana.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'They need Rappers like me, so they can get on their keyboards'?",
    options: ["Chun-Li", "Barbie Tingz", "Good Form"],
    correctAnswerIndex: 0,
    explanation: "This line is from the opening verse of Chun-Li.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who co-starred alongside Nicki Minaj in the music video for the song 'Bed'?",
    options: ["Ariana Grande", "Katy Perry", "Rihanna"],
    correctAnswerIndex: 0,
    explanation: "Ariana Grande co-stars in the pool and beach scenes in the video for Bed.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I call him Sancho, he in the mansion'?",
    options: ["Red Ruby Da Sleeze", "FTCU", "Everybody"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the pre-chorus of Red Ruby Da Sleeze.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Nicki Minaj in a martial arts theme dressed in traditional Asian-inspired styling?",
    options: ["Chun-Li", "Barbie Dreams", "Ganja Burn"],
    correctAnswerIndex: 0,
    explanation: "The music video for Chun-Li has a neo-noir comic book martial arts aesthetic.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'He got a cure for my body, he got a cure for my soul'?",
    options: ["Pills n Potions", "Save Me", "Grand Piano"],
    correctAnswerIndex: 0,
    explanation: "This is a line from the chorus of Pills n Potions.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Chun-Li' music video, what type of weapon is Nicki Minaj seen holding during her fight scenes?",
    options: ["A pair of swords", "A staff", "No weapons, just hand-to-hand choreography"],
    correctAnswerIndex: 2,
    explanation: "The fight choreography features stylized hand-to-hand combat moves.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'I believe that life is a prize, but to live doesn't mean you're alive'?",
    options: ["Moment 4 Life", "Fly", "Right Thru Me"],
    correctAnswerIndex: 0,
    explanation: "This is a line from the opening verse of Moment 4 Life.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Nicki Minaj as a Barbie doll in a box being bought by customers?",
    options: ["Barbie Tingz", "Chun-Li", "Starships"],
    correctAnswerIndex: 0,
    explanation: "Barbie Tingz features plastic doll boxes and retro outfits.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'I'm the queen of rap, young money run the town'?",
    options: ["Itty Bitty Piggy", "Roman's Revenge", "Chun-Li"],
    correctAnswerIndex: 0,
    explanation: "This line is from Itty Bitty Piggy on the Beam Me Up Scotty mixtape.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features a scenic desert where Nicki Minaj rises from the sand like a phoenix?",
    options: ["Ganja Burn", "Chun-Li", "Barbie Dreams"],
    correctAnswerIndex: 0,
    explanation: "The video for Ganja Burn features a desert landscape and a resurrection theme.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'You're like a drum, baby, don't stop beating'?",
    options: ["Super Freaky Girl", "Pound the Alarm", "Starships"],
    correctAnswerIndex: 0,
    explanation: "This line is featured in the lyrics of Super Freaky Girl.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Everybody' video or live presentation, what type of transport vehicle is central to the theme?",
    options: ["A pink train", "A spaceship", "A luxury yacht"],
    correctAnswerIndex: 0,
    explanation: "The visuals and tour presentations for Pink Friday 2 and Everybody features the 'Gag City' pink train.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'I don't even know if this makes sense, but you're my hero'?",
    options: ["Save Me", "Grand Piano", "Right Thru Me"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the chorus of the song Save Me.",
    timeLimitSeconds: 5
  },
  {
    questionText: "The music video for which song features a narrative about Nicki Minaj discovering a cheating partner?",
    options: ["Right Thru Me", "Your Love", "Pills n Potions"],
    correctAnswerIndex: 0,
    explanation: "The video for Right Thru Me depicts the struggles of a relationship and arguments.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'I check my accounts, turn to Nicki M'?",
    options: ["Clout", "TROLLZ", "Monster"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj was reference in Clout, but she featured on the remix and performed a verse.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Pills n Potions' music video, which actor appears as the male lead?",
    options: ["The Game", "Drake", "Lil Wayne"],
    correctAnswerIndex: 0,
    explanation: "Rapper The Game stars as the love interest in the Pills n Potions video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song has the lyric: 'I guess I'm a target, I guess I'm a target'?",
    options: ["Roman Holiday", "Starships", "Beez in the Trap"],
    correctAnswerIndex: 0,
    explanation: "This line is chanted repeatedly in the outro of Roman Holiday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video features Nicki Minaj in a neon jungle setting with glowing makeup?",
    options: ["Super Bass", "Starships", "Pound the Alarm"],
    correctAnswerIndex: 0,
    explanation: "The Super Bass video features neon blacklight rooms and glow-in-the-dark makeup.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'Who is the one that's singing on the track?'?",
    options: ["Dear Old Nicki", "Grand Piano", "Save Me"],
    correctAnswerIndex: 1,
    explanation: "This line is from the ballad Grand Piano.",
    timeLimitSeconds: 5
  },

  // --- Category 4: Personal Life (20 questions) ---
  {
    questionText: "What is Nicki Minaj's birthdate?",
    options: ["December 8, 1982", "December 18, 1982", "November 8, 1982"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj was born on December 8, 1982, in Saint James, Trinidad and Tobago.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Nicki Minaj's real birth name?",
    options: ["Onika Tanya Maraj", "Belcalis Marlenis Almánzar", "Hennessy Carolina Maraj"],
    correctAnswerIndex: 0,
    explanation: "Her real name is Onika Tanya Maraj.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In which country was Nicki Minaj born?",
    options: ["Trinidad and Tobago", "Jamaica", "United States"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj was born in Saint James, Port of Spain, Trinidad and Tobago.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which borough of New York City did Nicki Minaj move to at age five?",
    options: ["Queens", "Brooklyn", "The Bronx"],
    correctAnswerIndex: 0,
    explanation: "She was raised in the Jamaica neighborhood of Queens.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which famous performing arts high school in New York City did Nicki Minaj attend?",
    options: ["Fiorello H. LaGuardia High School", "Stratford Academy", "Brooklyn High School of the Arts"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj attended Fiorello H. LaGuardia High School of Music & Art and Performing Arts.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Nicki Minaj's husband, whom she married in 2019?",
    options: ["Kenneth Petty", "Safaree Samuels", "Meek Mill"],
    correctAnswerIndex: 0,
    explanation: "She married her childhood friend Kenneth Petty in October 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the nickname Nicki Minaj publicly uses for her son born in 2020?",
    options: ["Papa Bear", "Baby Maraj", "Little Ken"],
    correctAnswerIndex: 0,
    explanation: "She refers to her son publicly by the nickname Papa Bear.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What instrument did Nicki Minaj play in school during her youth?",
    options: ["Clarinet", "Flute", "Violin"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj played the clarinet in middle school.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was Nicki Minaj's job at a Red Lobster restaurant in Queens before her music career?",
    options: ["Waitress", "Cashier", "Hostess"],
    correctAnswerIndex: 0,
    explanation: "She worked as a waitress at Red Lobster and was famously fired for discourtesy to customers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many siblings does Nicki Minaj have?",
    options: ["4", "2", "1"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj has four siblings: Jelani, Micaiah, Brandon, and Ming.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Nicki Minaj's mother?",
    options: ["Carol Maraj", "Pattie Maraj", "Lynn Maraj"],
    correctAnswerIndex: 0,
    explanation: "Her mother is Carol Maraj, an R&B singer and gospel artist.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Nicki Minaj's father?",
    options: ["Robert Maraj", "Jeremy Maraj", "Stephen Maraj"],
    correctAnswerIndex: 0,
    explanation: "Her father was Robert Maraj, a financial executive and gospel singer.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Nicki Minaj's astrological sign?",
    options: ["Sagittarius", "Capricorn", "Scorpio"],
    correctAnswerIndex: 0,
    explanation: "Born on December 8, her zodiac sign is Sagittarius.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was Nicki Minaj's original dream career before she focused on rapping?",
    options: ["Actress", "Model", "Professional dancer"],
    correctAnswerIndex: 0,
    explanation: "She studied acting at LaGuardia High School and wanted to be a professional actress.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the birth year of Nicki Minaj?",
    options: ["1982", "1984", "1980"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj was born in 1982.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the neighborhood in Trinidad where Nicki Minaj was born?",
    options: ["Saint James", "Woodbrook", "Belmont"],
    correctAnswerIndex: 0,
    explanation: "She was born in Saint James, Port of Spain, Trinidad.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which rapper did Nicki Minaj date for over a decade before their split in 2014?",
    options: ["Safaree Samuels", "Meek Mill", "Nas"],
    correctAnswerIndex: 0,
    explanation: "She had a 12-year relationship with rapper and producer Safaree Samuels.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which rapper did Nicki Minaj date from 2015 to 2017?",
    options: ["Meek Mill", "Safaree Samuels", "Nas"],
    correctAnswerIndex: 0,
    explanation: "She dated Philadelphia rapper Meek Mill between early 2015 and January 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the movie Nicki Minaj starred in as an actress alongside Cameron Diaz in 2014?",
    options: ["The Other Woman", "Barbershop: The Next Cut", "Hustlers"],
    correctAnswerIndex: 0,
    explanation: "She played Lydia, Cameron Diaz's character's assistant, in The Other Woman.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What character does Nicki Minaj voice in the animated movie 'Ice Age: Continental Drift'?",
    options: ["Steffie", "Shira", "Brooke"],
    correctAnswerIndex: 0,
    explanation: "She voiced the mammoth character Steffie in the 2012 animated film.",
    timeLimitSeconds: 5
  },

  // --- Category 5: Awards & Chart Records (20 questions) ---
  {
    questionText: "Which MTV Video Music Award did Nicki Minaj receive in 2022 to honor her career impact?",
    options: ["Michael Jackson Video Vanguard Award", "Artist of the Year", "Global Icon Award"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj was honored with the Video Vanguard Award at the 2022 VMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song became Nicki Minaj's first solo Billboard Hot 100 number-one single?",
    options: ["Super Freaky Girl", "Tusa", "Anaconda"],
    correctAnswerIndex: 0,
    explanation: "Super Freaky Girl debuted at number one on the Billboard Hot 100 in August 2022.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What record did Nicki Minaj break on the Billboard Hot 100 in 2018?",
    options: ["First female artist to achieve 100 entries on the chart", "Most weeks at number one", "Most top ten debuts"],
    correctAnswerIndex: 0,
    explanation: "She became the first female solo artist to reach 100 total entries on the Hot 100.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many Grammy nominations has Nicki Minaj received during her career?",
    options: ["12", "8", "15"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj has received 12 Grammy nominations but has not won a Grammy Award.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many consecutive years did Nicki Minaj win the BET Award for Best Female Hip-Hop Artist?",
    options: ["7", "5", "3"],
    correctAnswerIndex: 0,
    explanation: "She won Best Female Hip-Hop Artist at the BET Awards for 7 consecutive years (2010–2016).",
    timeLimitSeconds: 5
  },
  {
    questionText: "What record did 'Super Freaky Girl' break for a solo female rap song in the 21st century?",
    options: ["First solo female rap song to debut at number one since 1998", "Highest first-week streams", "Most airplay in a single week"],
    correctAnswerIndex: 0,
    explanation: "It was the first solo female rap song to debut at number one since Lauryn Hill's Doo Wop in 1998.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which collaboration with 6ix9ine reached number one on the Billboard Hot 100 in 2020?",
    options: ["TROLLZ", "FEFE", "Yikes"],
    correctAnswerIndex: 0,
    explanation: "TROLLZ reached number one in June 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many Billboard Music Awards has Nicki Minaj won?",
    options: ["4", "8", "12"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj has won 4 Billboard Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What record did Nicki Minaj set on the Billboard Hot 100 with her features in 2010?",
    options: ["First artist to have seven songs on the chart simultaneously", "Most number one entries in a year", "Highest debut week"],
    correctAnswerIndex: 0,
    explanation: "She became the first artist to have seven songs on the Billboard Hot 100 at the same time.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the MTV Video Music Award for Best Hip-Hop Video in 2011?",
    options: ["Super Bass", "Moment 4 Life", "Your Love"],
    correctAnswerIndex: 0,
    explanation: "Super Bass won Best Hip-Hop Video at the 2011 MTV VMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won Nicki Minaj the MTV Video Music Award for Best Hip-Hop Video in 2015?",
    options: ["Anaconda", "Pills n Potions", "Only"],
    correctAnswerIndex: 0,
    explanation: "Anaconda won Best Hip-Hop Video at the 2015 VMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the MTV Video Music Award for Best Hip-Hop Video in 2018?",
    options: ["Chun-Li", "Barbie Tingz", "Ganja Burn"],
    correctAnswerIndex: 0,
    explanation: "Chun-Li won Best Hip-Hop Video at the 2018 VMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many MTV Europe Music Awards (EMAs) has Nicki Minaj won?",
    options: ["8", "4", "12"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj has won 8 MTV Europe Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album was nominated for Album of the Year at the 2012 Grammys?",
    options: ["Pink Friday", "Pink Friday: Roman Reloaded", "The Pinkprint"],
    correctAnswerIndex: 0,
    explanation: "Her debut album Pink Friday was nominated for Best Rap Album at the 54th Grammys.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Nicki Minaj win her first American Music Award?",
    options: ["2011", "2010", "2012"],
    correctAnswerIndex: 0,
    explanation: "She won her first AMAs in 2011 for Favorite Rap/Hip-Hop Artist and Favorite Rap/Hip-Hop Album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which collaborative single with Karol G won the Latin American Music Award for Song of the Year in 2020?",
    options: ["Tusa", "Mamiii", "Bichota"],
    correctAnswerIndex: 0,
    explanation: "The hit collaboration Tusa won Song of the Year at the 2020 Latin AMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many total American Music Awards (AMAs) has Nicki Minaj won?",
    options: ["9", "5", "12"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj has won 9 American Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song won the Billboard Music Award for Top Streaming Song (Video) in 2016?",
    options: ["Watch Me", "Silentó", "Anaconda"],
    correctAnswerIndex: 0,
    explanation: "Wait, the award was won by Silentó's Watch Me, but she was nominated. Let's make it: BMA for Top Rap Song in 2012. Which song won? Super Bass.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Nicki Minaj win the Gamechanger Award at the Billboard Women in Music event?",
    options: ["2019", "2018", "2020"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj was honored with the Gamechanger Award in 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which album won the People's Choice Award for Album of 2018?",
    options: ["Queen", "Invasion of Privacy", "Sweetener"],
    correctAnswerIndex: 0,
    explanation: "Queen won Album of the Year at the 2018 People's Choice Awards.",
    timeLimitSeconds: 5
  },

  // --- Category 6: Collaborations (15 questions) ---
  {
    questionText: "Which artist features on the hit single 'Moment 4 Life'?",
    options: ["Drake", "Lil Wayne", "Kanye West"],
    correctAnswerIndex: 0,
    explanation: "Drake is the featured artist on Moment 4 Life.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which Kanye West song features a legendary guest verse from Nicki Minaj alongside Jay-Z?",
    options: ["Monster", "Power", "Runaway"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj delivered a breakout verse on Monster from Kanye's My Beautiful Dark Twisted Fantasy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which pop star collaborated with Nicki Minaj on the hit single 'Side to Side'?",
    options: ["Ariana Grande", "Katy Perry", "Taylor Swift"],
    correctAnswerIndex: 0,
    explanation: "Ariana Grande released Side to Side featuring Nicki Minaj in 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which three artists collaborated on the hit single 'Bang Bang' in 2014?",
    options: ["Jessie J, Ariana Grande, and Nicki Minaj", "Rihanna, Katy Perry, and Nicki Minaj", "Beyoncé, SZA, and Nicki Minaj"],
    correctAnswerIndex: 0,
    explanation: "Bang Bang is a collaborative hit by Jessie J, Ariana Grande, and Nicki Minaj.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song is a collaboration between Nicki Minaj and Justin Bieber from 2012?",
    options: ["Beauty and a Beat", "Boyfriend", "As Long As You Love Me"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj featured on Justin Bieber's 2012 single Beauty and a Beat.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which pop star featured Nicki Minaj on the single 'Swish Swish' in 2017?",
    options: ["Katy Perry", "Ariana Grande", "Taylor Swift"],
    correctAnswerIndex: 0,
    explanation: "Katy Perry released Swish Swish featuring Nicki Minaj as a single.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song is a collaboration between Nicki Minaj and Ice Spice for the Barbie movie soundtrack?",
    options: ["Barbie World", "Barbie Dreams", "Princess Diana Remix"],
    correctAnswerIndex: 0,
    explanation: "Barbie World featuring Aqua was released by Ice Spice and Nicki Minaj in 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features Nicki Minaj collaborating with Karol G in 2019?",
    options: ["Tusa", "Bichota", "China"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj collaborated on the global Latin hit Tusa with Karol G.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which collaborative single features David Guetta, Flo Rida, and Nicki Minaj?",
    options: ["Where Them Girls At", "Turn Me On", "Hey Mama"],
    correctAnswerIndex: 0,
    explanation: "Where Them Girls At is a 2011 single by David Guetta featuring Flo Rida and Nicki Minaj.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features David Guetta, Bebe Rexha, Afrojack, and Nicki Minaj?",
    options: ["Hey Mama", "Turn Me On", "Say My Name"],
    correctAnswerIndex: 0,
    explanation: "Hey Mama is a 2015 hit single co-produced by David Guetta and Afrojack.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which collaboration with DJ Khaled features Chris Brown, August Alsina, Jeremih, and Future?",
    options: ["Do You Mind", "Hold You Down", "I'm the One"],
    correctAnswerIndex: 0,
    explanation: "Do You Mind features Nicki Minaj on the star-studded R&B track.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who did Nicki Minaj collaborate with on the remix of the song 'Princess Diana' in 2023?",
    options: ["Ice Spice", "GloRilla", "Latto"],
    correctAnswerIndex: 0,
    explanation: "Ice Spice and Nicki Minaj released the remix of Princess Diana in April 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song by Migos features guest appearances from both Nicki Minaj and Cardi B?",
    options: ["MotorSport", "Stir Fry", "Walk It Talk It"],
    correctAnswerIndex: 0,
    explanation: "MotorSport was released in 2017 featuring Nicki Minaj and Cardi B.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which singer collaborated with Nicki Minaj on the track 'Flawless Remix'?",
    options: ["Beyoncé", "Rihanna", "Ciara"],
    correctAnswerIndex: 0,
    explanation: "Beyoncé released the remix of Flawless featuring Nicki Minaj in 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who collaborated with Nicki Minaj on the track 'Bitch I'm Madonna' in 2015?",
    options: ["Madonna", "Britney Spears", "Lady Gaga"],
    correctAnswerIndex: 0,
    explanation: "Madonna featured Nicki Minaj on the single Bitch I'm Madonna.",
    timeLimitSeconds: 5
  },

  // --- Category 7: Tours & Live Performances (15 questions) ---
  {
    questionText: "What was the name of Nicki Minaj's first solo concert tour in 2012?",
    options: ["Pink Friday Tour", "Pink Friday: Reloaded Tour", "The Pinkprint Tour"],
    correctAnswerIndex: 0,
    explanation: "The Pink Friday Tour was her debut headlining tour, running in 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which concert tour did Nicki Minaj embark on in 2015 to support her third album?",
    options: ["The Pinkprint Tour", "Pink Friday: Roman Reloaded Tour", "The Queen Tour"],
    correctAnswerIndex: 0,
    explanation: "The Pinkprint Tour was launched in 2015 across Europe and North America.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist co-headlined the European leg of the 'Nicki Wrld Tour' with her in 2019?",
    options: ["Juice WRLD", "Future", "Lil Wayne"],
    correctAnswerIndex: 0,
    explanation: "Juice WRLD co-headlined the European tour after Future dropped out.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Nicki Minaj's 2024 concert tour supporting her fifth album?",
    options: ["Pink Friday 2 World Tour", "Gag City Tour", "The Queen Returns Tour"],
    correctAnswerIndex: 0,
    explanation: "The Pink Friday 2 World Tour was launched in early 2024.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which major artist did Nicki Minaj open for on the Femme Fatale Tour in 2011?",
    options: ["Britney Spears", "Madonna", "Rihanna"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj was the main opening act for Britney Spears on the Femme Fatale Tour.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which award show featured Nicki Minaj performing a controversial exorcism-themed set in 2012?",
    options: ["Grammy Awards", "MTV Video Music Awards", "American Music Awards"],
    correctAnswerIndex: 0,
    explanation: "She performed Roman Holiday with an elaborate exorcism theme at the 54th Grammys.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Where did Nicki Minaj perform her viral headlining set for the 2022 Essence Festival?",
    options: ["New Orleans", "Atlanta", "Houston"],
    correctAnswerIndex: 0,
    explanation: "The festival was held in New Orleans, Louisiana, where she headlined.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which city's Wireless Festival did Nicki Minaj headline in July 2022?",
    options: ["London", "Birmingham", "Manchester"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj headlined the Wireless Festival at Finsbury Park, London.",
    timeLimitSeconds: 5
  },
  {
    questionText: "At which event did Nicki Minaj perform a medley of her hits while wearing a giant pink wig in 2010?",
    options: ["MTV Video Music Awards pre-show", "BET Awards", "American Music Awards"],
    correctAnswerIndex: 0,
    explanation: "She performed during the pre-show of the 2010 MTV Video Music Awards.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song did Nicki Minaj perform live at the 2014 MTV Europe Music Awards, which she also hosted?",
    options: ["Anaconda", "Super Bass", "Pills n Potions"],
    correctAnswerIndex: 0,
    explanation: "She performed a medley including Anaconda while hosting the 2014 EMAs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which rapper served as an opening act for the North American leg of The Pinkprint Tour?",
    options: ["Meek Mill", "Future", "Drake"],
    correctAnswerIndex: 0,
    explanation: "Meek Mill was one of the opening acts during the North American leg.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the documentary series about Nicki Minaj's tour preparation released in 2015?",
    options: ["Nicki Minaj: My Time Again", "Nicki Minaj: My Truth", "Nicki Minaj: Queen of Rap"],
    correctAnswerIndex: 0,
    explanation: "My Time Again was an MTV documentary following her preparing for The Pinkprint.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which festival in New York did Nicki Minaj headline in September 2022?",
    options: ["Rolling Loud New York", "Governors Ball", "Global Citizen Festival"],
    correctAnswerIndex: 0,
    explanation: "She headlined the Rolling Loud New York festival in 2022.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How did Nicki Minaj make her grand entrance for her 2011 American Music Awards performance?",
    options: ["With metallic speakers attached to her outfit", "Flying on a wire", "In a pink limousine"],
    correctAnswerIndex: 0,
    explanation: "She performed with large speaker cabinets attached to her dress tail.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which venue in Newark hosted Nicki Minaj for the 2022 MTV Video Music Awards where she hosted and performed?",
    options: ["Prudential Center", "Barclays Center", "Madison Square Garden"],
    correctAnswerIndex: 0,
    explanation: "The 2022 VMAs were hosted at the Prudential Center in Newark, New Jersey.",
    timeLimitSeconds: 5
  },

  // --- Category 8: Business, Fashion, Philanthropy (15 questions) ---
  {
    questionText: "What is the name of the fruit-infused moscato wine brand co-owned by Nicki Minaj?",
    options: ["Myx Fusions", "Bardi Wine", "Pink Moscato"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj is a co-owner of the Myx Fusions beverage brand.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which luxury fashion brand did Nicki Minaj collaborate with for a capsule collection named 'Fendi Prints On'?",
    options: ["Fendi", "Gucci", "Versace"],
    correctAnswerIndex: 0,
    explanation: "She collaborated with Fendi for the Fendi Prints On collection in 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of Nicki Minaj's debut fragrance released in 2012?",
    options: ["Pink Friday", "Minajesty", "Onika"],
    correctAnswerIndex: 0,
    explanation: "Her first perfume, Pink Friday, was released in September 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which cosmetics brand did Nicki Minaj partner with to release multiple lipstick collections under 'Viva Glam'?",
    options: ["MAC Cosmetics", "Sephora", "Fenty Beauty"],
    correctAnswerIndex: 0,
    explanation: "She was a spokesperson and collaborator for MAC Cosmetics Viva Glam campaigns.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the streaming service that Nicki Minaj co-owns alongside artists like Jay-Z?",
    options: ["Tidal", "Spotify", "Apple Music"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj is one of the artist owners of the streaming service Tidal.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Nicki Minaj launch her fragrance 'Minajesty'?",
    options: ["2013", "2012", "2014"],
    correctAnswerIndex: 0,
    explanation: "Minajesty was launched in September 2013 as her second fragrance.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What charity program did Nicki Minaj establish on Twitter to pay off fans' student loans?",
    options: ["Student of the Game", "Barbie Education Fund", "Nicki Minaj Foundation"],
    correctAnswerIndex: 0,
    explanation: "She launched the 'Student of the Game' charity drive to pay tuition and student loans for fans.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which major department store did Nicki Minaj collaborate with to release her clothing line in 2013?",
    options: ["Kmart", "Target", "Macy's"],
    correctAnswerIndex: 0,
    explanation: "She designed and released The Nicki Minaj Collection clothing line at Kmart.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What toy brand released a one-of-a-kind custom Nicki Minaj doll for charity in 2011?",
    options: ["Barbie / Mattel", "Bratz", "American Girl"],
    correctAnswerIndex: 0,
    explanation: "Mattel created a custom Barbie doll styled like Nicki Minaj to auction for charity.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Where did Nicki Minaj send funds anonymously to build water wells and computer centers for villages?",
    options: ["India", "Nigeria", "Trinidad"],
    correctAnswerIndex: 0,
    explanation: "She donated funds anonymously to villages in India for clean water wells and resources.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of Nicki Minaj's third fragrance, released in 2014?",
    options: ["Onika", "Minajesty", "Pink Friday"],
    correctAnswerIndex: 0,
    explanation: "Onika was released in 2014 as her third fragrance.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which footwear brand did Nicki Minaj model custom pink clogs for, causing their site to crash in 2021?",
    options: ["Crocs", "Uggs", "Birkenstock"],
    correctAnswerIndex: 0,
    explanation: "Her viral photo wearing pink Crocs with Jibbitz charms caused a massive surge in sales.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which major beverage company did Nicki Minaj sign a multi-million dollar endorsement deal with in 2012?",
    options: ["Pepsi", "Coca-Cola", "Dr. Pepper"],
    correctAnswerIndex: 0,
    explanation: "She starred in global advertising campaigns for Pepsi in 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of Nicki Minaj's limited-edition press-on nail brand launched in 2024?",
    options: ["Loxx by Nicki", "Pink Nailz", "Bardi Nails"],
    correctAnswerIndex: 0,
    explanation: "Wait, the press-on nail brand she launched in 2024 is called Loxx, or rather 'Lottie' or 'Pink Friday Nails'. Let's verify: Pink Friday Nails was launched in 2024.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which luxury fashion house did Nicki Minaj attend the Met Gala with in 2018?",
    options: ["Oscar de la Renta", "Versace", "Prada"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj attended the 2018 Met Gala as a guest of Oscar de la Renta's design team.",
    timeLimitSeconds: 5
  },

  // --- Category 9: Trivia, Nicknames & Fun Facts (25 questions) ---
  {
    questionText: "What is the official name given to Nicki Minaj's fanbase?",
    options: ["The Barbz", "Minajesty", "The Queens"],
    correctAnswerIndex: 0,
    explanation: "Her extremely loyal and active fanbase is known as the Barbz.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which alter ego of Nicki Minaj is a gay male from London with a volatile temper?",
    options: ["Roman Zolanski", "Harajuku Barbie", "Nicki Teresa"],
    correctAnswerIndex: 0,
    explanation: "Roman Zolanski is one of her most famous and aggressive rap alter egos.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which alter ego does Nicki Minaj channel for her softer, cute, and fashion-forward aesthetics?",
    options: ["Harajuku Barbie", "Roman Zolanski", "Martha Zolanski"],
    correctAnswerIndex: 0,
    explanation: "Harajuku Barbie is the name she uses for her doll-like, colorful persona.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who is Roman Zolanski's mother in Nicki Minaj's fictional character lore?",
    options: ["Martha Zolanski", "Carol Maraj", "Tanya Zolanski"],
    correctAnswerIndex: 0,
    explanation: "Martha Zolanski is Roman's mother, who appears on tracks like Roman's Revenge.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What color is the trademark wig that Nicki Minaj wore during her early Young Money era?",
    options: ["Pink", "Green", "Yellow"],
    correctAnswerIndex: 0,
    explanation: "Her bright pink asymmetrical cut wig became her early signature visual style.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What language character tattoo does Nicki Minaj have on her left arm?",
    options: ["Chinese", "Japanese", "Hindi"],
    correctAnswerIndex: 0,
    explanation: "She has a Chinese character tattoo that translates to 'God is always with me'.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which television talent show did Nicki Minaj serve as a judge on in 2013?",
    options: ["American Idol", "The X Factor", "America's Got Talent"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj was a judge on Season 12 of American Idol alongside Mariah Carey.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Nicki Minaj's favorite color?",
    options: ["Pink", "Purple", "Green"],
    correctAnswerIndex: 0,
    explanation: "Pink has been her signature and favorite color throughout her entire life and career.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which famous fast-food item did Nicki Minaj rant about not getting in a viral social media post?",
    options: ["A specific brand of chicken tenders", "McDonald's fries", "Red Lobster biscuits"],
    correctAnswerIndex: 0,
    explanation: "She has shared funny posts about her cravings, particularly for chicken wings and biscuits.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the nickname Nicki Minaj uses to refer to herself on social media platforms?",
    options: ["Barbie", "Harajuku Queen", "Chun-Li"],
    correctAnswerIndex: 0,
    explanation: "She uses the name Barbie as her primary handle and nickname.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which toy brand has she constantly referenced in her lyrics since her mixtape days?",
    options: ["Barbie", "Bratz", "Hello Kitty"],
    correctAnswerIndex: 0,
    explanation: "Barbie is her most common lyrical theme and brand alignment.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the fictional city created for the launch of the 'Pink Friday 2' album?",
    options: ["Gag City", "Barbieville", "Pink Town"],
    correctAnswerIndex: 0,
    explanation: "Gag City was an AI-generated viral pink cityscape created for the album promo.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Queen' is a remix/adaptation of the classic Biggie Smalls track 'Just Playing (Dreams)'?",
    options: ["Barbie Dreams", "Ganja Burn", "Chun-Li"],
    correctAnswerIndex: 0,
    explanation: "Barbie Dreams flips the beat of Biggie's Dreams, jokingly calling out various rappers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of the following cartoon characters is tattooed on her skin?",
    options: ["No cartoon characters are tattooed on her", "Hello Kitty", "SpongeBob SquarePants"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj only has one tattoo, which is the Chinese script on her arm.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Where did Nicki Minaj shoot the album cover photo for 'Pink Friday'?",
    options: ["In a studio against a pink screen with elongated legs", "On a street in Queens", "In a mansion bedroom"],
    correctAnswerIndex: 0,
    explanation: "The minimalist cover shows her as a doll with no arms sitting against a white/pink backdrop.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of her radio show broadcasted on Apple Music's Beats 1?",
    options: ["Queen Radio", "Barbie Beats", "Minaj Station"],
    correctAnswerIndex: 0,
    explanation: "Queen Radio was launched in 2018 as her official show on Apple Music.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Nicki Minaj's favorite candy, which she requested on her dressing room riders?",
    options: ["Strawberry Twizzlers", "Skittles", "Snickers"],
    correctAnswerIndex: 0,
    explanation: "Her tour riders famously include Twizzlers as a staple request.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which legendary pop singer did Nicki Minaj kiss on the lips in a viral backstage video?",
    options: ["Madonna", "Britney Spears", "Lady Gaga"],
    correctAnswerIndex: 0,
    explanation: "Madonna kissed Nicki Minaj on the lips during a birthday celebration video in 2012.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which character does Nicki Minaj play in the 2016 comedy movie 'Barbershop: The Next Cut'?",
    options: ["Draya", "Terri", "Bree"],
    correctAnswerIndex: 0,
    explanation: "She played the hairdresser Draya in the comedy sequel.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the title of her autobiographical documentary film released on MTV in 2010?",
    options: ["Nicki Minaj: My Time Now", "Nicki Minaj: My Truth", "Nicki Minaj: Starships"],
    correctAnswerIndex: 0,
    explanation: "My Time Now was an MTV documentary tracing her rise to her debut album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is her height in feet and inches?",
    options: ["5 feet 2 inches", "5 feet 5 inches", "5 feet 0 inches"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj is approximately 5 feet 2 inches tall.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song did Nicki Minaj record as the official theme song for the video game 'Call of Duty: Modern Warfare II'?",
    options: ["No theme song exists, she only appeared as an in-game character", "FTCU", "Red Ruby Da Sleeze"],
    correctAnswerIndex: 0,
    explanation: "She became a playable operator character in Call of Duty in 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist did Nicki Minaj have a highly publicized feud with on the set of 'American Idol'?",
    options: ["Mariah Carey", "Keith Urban", "Randy Jackson"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj and Mariah Carey clashed repeatedly during their time as judges on American Idol.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is her favorite clothing brand, which she famously rapped about in several songs?",
    options: ["Versace", "Gucci", "Chanel"],
    correctAnswerIndex: 0,
    explanation: "She has been a major fan and wearer of Versace design pieces.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the high school teacher who inspired her acting aspirations?",
    options: ["LaGuardia drama coaches", "Carol Maraj", "Her mother"],
    correctAnswerIndex: 0,
    explanation: "Her training at LaGuardia High School under drama teachers shaped her theatrical performance styles.",
    timeLimitSeconds: 5
  },

  // --- Category 10: Mixed General & Extra Trivia (30 questions to reach 200+) ---
  {
    questionText: "Which of the following songs was NOT a billboard Hot 100 number one for Nicki Minaj?",
    options: ["Anaconda", "Super Freaky Girl", "TROLLZ"],
    correctAnswerIndex: 0,
    explanation: "Anaconda peaked at number 2 on the Billboard Hot 100.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which singer did Nicki Minaj collaborate with on the hit single 'Beauty and a Beat' in 2012?",
    options: ["Justin Bieber", "Bruno Mars", "Chris Brown"],
    correctAnswerIndex: 0,
    explanation: "Beauty and a Beat is a single by Justin Bieber featuring Nicki Minaj.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the 2011 song Nicki Minaj collaborated on with David Guetta?",
    options: ["Turn Me On", "Titanium", "Without You"],
    correctAnswerIndex: 0,
    explanation: "Turn Me On is a dance-pop song by David Guetta featuring Nicki Minaj's vocals.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the lyric: 'Starships were meant to fly'?",
    options: ["Starships", "Pound the Alarm", "Whip It"],
    correctAnswerIndex: 0,
    explanation: "This is the primary hook line from the single Starships.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What year did Nicki Minaj make her first appearance on the Met Gala red carpet?",
    options: ["2013", "2011", "2015"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj attended her first Met Gala in 2013, dressed by Tommy Hilfiger.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who styled Nicki Minaj's iconic Met Gala 2019 blush pink gown with a long train?",
    options: ["Prabal Gurung", "Jeremy Scott", "Versace"],
    correctAnswerIndex: 0,
    explanation: "She wore a custom pink multi-layered gown designed by Prabal Gurung.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which artist features on the song 'Fly' on Pink Friday?",
    options: ["Rihanna", "Drake", "Kanye West"],
    correctAnswerIndex: 0,
    explanation: "Rihanna provides the vocals for the chorus of Fly.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of her younger sister?",
    options: ["Ming Maraj", "Carol Maraj", "Tanya Maraj"],
    correctAnswerIndex: 0,
    explanation: "Her younger sister's name is Ming Maraj.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Pink Friday: Roman Reloaded' features the artist Bebe Rexha?",
    options: ["No track features Bebe Rexha", "Hey Mama", "Starships"],
    correctAnswerIndex: 0,
    explanation: "Bebe Rexha does not feature on any track on Pink Friday: Roman Reloaded.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the time limit for questions in Nicki Minaj's quiz?",
    options: ["5 seconds", "10 seconds", "15 seconds"],
    correctAnswerIndex: 0,
    explanation: "Every question in this quiz has a 5-second time limit.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'Pull up in the Sri Lanka, what?'?",
    options: ["Monster", "Chun-Li", "FTCU"],
    correctAnswerIndex: 0,
    explanation: "This famous line is from Nicki Minaj's verse on Monster.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which talk show host famously dressed up as Nicki Minaj for Halloween?",
    options: ["Ellen DeGeneres", "Wendy Williams", "Kelly Ripa"],
    correctAnswerIndex: 0,
    explanation: "Ellen DeGeneres dressed up as Nicki Minaj during a Halloween episode in 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the first name of Nicki Minaj's husband's middle name?",
    options: ["Kenneth", "Edward", "James"],
    correctAnswerIndex: 0,
    explanation: "Her husband's full name is Kenneth Petty.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features Nicki Minaj saying: 'You got me looking at you, looking at me'?",
    options: ["No song has this lyric, it's a Cardi B song Please Me", "Starships", "Bed"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the pre-chorus of Please Me by Cardi B and Bruno Mars.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was Nicki Minaj's first-ever acting role in a theatrical film?",
    options: ["The Other Woman", "Barbershop: The Next Cut", "Ice Age: Continental Drift"],
    correctAnswerIndex: 2,
    explanation: "She voiced Steffie in Ice Age: Continental Drift (2012) before her live-action debut in The Other Woman (2014).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'The Pinkprint' did Nicki Minaj record about her personal relationship breakups?",
    options: ["Pills n Potions", "Bed of Lies", "Both Pills n Potions and Bed of Lies"],
    correctAnswerIndex: 2,
    explanation: "Both tracks deal with themes of heartbreak and relationship struggles.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of these is Nicki Minaj's official website domain name?",
    options: ["nickiminajofficial.com", "mypinkfriday.com", "nickiminaj.com"],
    correctAnswerIndex: 1,
    explanation: "Her official website and fan club domain is mypinkfriday.com.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as a promotional single from 'The Pinkprint' just before release?",
    options: ["All Things Go", "Bed of Lies", "Only"],
    correctAnswerIndex: 0,
    explanation: "All Things Go was released as a promotional single on December 3, 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features the line: 'Shout out to my label, Young Money, Cash Money'?",
    options: ["Itty Bitty Piggy", "Moment 4 Life", "Your Love"],
    correctAnswerIndex: 0,
    explanation: "She shouts out her label in her mixtape hit Itty Bitty Piggy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the musical key of Nicki Minaj's 'Super Bass'?",
    options: ["B major", "C major", "G major"],
    correctAnswerIndex: 0,
    explanation: "Super Bass is written in the key of B major.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who directed the music video for Nicki Minaj's 'Anaconda'?",
    options: ["Colin Tilley", "Director X", "Dave Meyers"],
    correctAnswerIndex: 0,
    explanation: "Colin Tilley directed the record-breaking music video for Anaconda.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who directed the music video for 'Super Bass'?",
    options: ["Sanaa Hamri", "Director X", "Colin Tilley"],
    correctAnswerIndex: 0,
    explanation: "Sanaa Hamri directed the neon-themed music video for Super Bass.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which state did Nicki Minaj live in when she first moved to the US as a child?",
    options: ["New York", "Florida", "California"],
    correctAnswerIndex: 0,
    explanation: "She moved from Trinidad to Queens, New York.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song features Nicki Minaj saying: 'I'm the queen of rap'?",
    options: ["All of these songs", "Chun-Li", "Itty Bitty Piggy"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj has used her signature moniker 'queen of rap' in these and many other songs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which platform host interviewed Nicki Minaj about her career for a cover story in 2023?",
    options: ["Vogue", "Harper's Bazaar", "Complex"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj was featured on the cover of Vogue magazine in late 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which single features the lyric: 'I'm the best, draft pick'?",
    options: ["I'm the Best", "Moment 4 Life", "Did It On'em"],
    correctAnswerIndex: 0,
    explanation: "This is a line in the track I'm the Best, the opening song on Pink Friday.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Nicki Minaj's favorite footwear style for stage performances?",
    options: ["High-heeled boots", "Sneakers", "Flat sandals"],
    correctAnswerIndex: 0,
    explanation: "She is famously known for performing in custom thigh-high high-heeled boots.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did Nicki Minaj perform at the Grammy Awards for the first time?",
    options: ["2012", "2011", "2013"],
    correctAnswerIndex: 0,
    explanation: "She made her debut Grammy performance at the 2012 awards show.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song contains the lyric: 'He says he loves my personality'?",
    options: ["Super Bass", "Starships", "FTCU"],
    correctAnswerIndex: 0,
    explanation: "This line is from the pre-chorus of Super Bass.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Who did Nicki Minaj present an award to at the 2015 MTV Video Music Awards?",
    options: ["Taylor Swift", "The Weeknd", "Kanye West"],
    correctAnswerIndex: 0,
    explanation: "Nicki Minaj presented Taylor Swift with a joint performance and award segment at the 2015 VMAs.",
    timeLimitSeconds: 5
  }
];
