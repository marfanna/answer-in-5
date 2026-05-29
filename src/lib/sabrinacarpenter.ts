import { Question } from './mockData';

export const SABRINA_QUESTIONS: Omit<Question, 'id' | 'categoryId' | 'subCategoryId'>[] = [
  // --- Existing Questions (105) ---
  { questionText: "In what year was Sabrina Carpenter's debut EP 'Can't Blame a Girl for Trying' released?", options: ["2013", "2014", "2015"], correctAnswerIndex: 1, explanation: "The EP was released on April 8, 2014.", timeLimitSeconds: 5 },
  { questionText: "Which album contains the song 'On Purpose'?", options: ["EVOLution", "Eyes Wide Open", "Singular: Act I"], correctAnswerIndex: 0, explanation: "On Purpose is track 5 on Sabrina's second album EVOLution (2016).", timeLimitSeconds: 5 },
  { questionText: "What year did Sabrina Carpenter release her debut studio album 'Eyes Wide Open'?", options: ["2014", "2015", "2016"], correctAnswerIndex: 1, explanation: "Eyes Wide Open was released on April 14, 2015.", timeLimitSeconds: 5 },
  { questionText: "Which song from 'Eyes Wide Open' was used as the theme for the Disney Channel series 'Girl Meets World'?", options: ["Can't Blame a Girl for Trying", "We'll Be the Stars", "Eyes Wide Open"], correctAnswerIndex: 1, explanation: "We'll Be the Stars was featured in promos and as the theme song for Girl Meets World.", timeLimitSeconds: 5 },
  { questionText: "What is the correct order of Sabrina Carpenter's first three studio albums?", options: ["Eyes Wide Open, EVOLution, Singular: Act I", "EVOLution, Eyes Wide Open, Singular: Act I", "Singular: Act I, Eyes Wide Open, EVOLution"], correctAnswerIndex: 0, explanation: "Eyes Wide Open (2015), EVOLution (2016), Singular: Act I (2018).", timeLimitSeconds: 5 },
  { questionText: "Which album includes the song 'Thumbs'?", options: ["EVOLution", "Eyes Wide Open", "Singular: Act I"], correctAnswerIndex: 0, explanation: "Thumbs is the lead single from EVOLution (2016).", timeLimitSeconds: 5 },
  { questionText: "'Sue Me' appears on which Sabrina Carpenter album?", options: ["Singular: Act I", "Singular: Act II", "EVOLution"], correctAnswerIndex: 1, explanation: "Sue Me is the second single from Singular: Act II (2019).", timeLimitSeconds: 5 },
  { questionText: "Which album features the track 'In My Bed'?", options: ["Singular: Act II", "Emails I Can't Send", "EVOLution"], correctAnswerIndex: 0, explanation: "In My Bed is on Singular: Act II, released in 2019.", timeLimitSeconds: 5 },
  { questionText: "What year was 'Singular: Act I' released?", options: ["2017", "2018", "2019"], correctAnswerIndex: 1, explanation: "Singular: Act I was released on November 9, 2018.", timeLimitSeconds: 5 },
  { questionText: "Which song is the lead single from 'Emails I Can't Send'?", options: ["Skinny Dipping", "Fast Times", "Nonsense"], correctAnswerIndex: 1, explanation: "Fast Times was released as the lead single in February 2022.", timeLimitSeconds: 5 },
  { questionText: "'Feather' appears on which album?", options: ["Emails I Can't Send", "Emails I Can't Send Fwd:", "Singular: Act II"], correctAnswerIndex: 1, explanation: "Feather was added to the deluxe edition Emails I Can't Send Fwd: (2023).", timeLimitSeconds: 5 },
  { questionText: "What is the opening track on 'EVOLution'?", options: ["On Purpose", "Thumbs", "All We Have Is Love"], correctAnswerIndex: 1, explanation: "Thumbs is the first track on EVOLution.", timeLimitSeconds: 5 },
  { questionText: "Which Sabrina Carpenter album has a title that refers to unsent messages?", options: ["Emails I Can't Send", "Singular: Act I", "EVOLution"], correctAnswerIndex: 0, explanation: "Emails I Can't Send is named after the concept of writing drafts you never send.", timeLimitSeconds: 5 },
  { questionText: "In what year did Sabrina release 'Singular: Act II'?", options: ["2018", "2019", "2020"], correctAnswerIndex: 1, explanation: "Singular: Act II was released on July 19, 2019.", timeLimitSeconds: 5 },
  { questionText: "Which album includes the track 'Read your Mind'?", options: ["Emails I Can't Send", "Singular: Act II", "EVOLution"], correctAnswerIndex: 0, explanation: "Read your Mind is on Emails I Can't Send (2022).", timeLimitSeconds: 5 },
  { questionText: "What is the name of Sabrina's 2023 Christmas EP?", options: ["fruitcake", "Christmas Wishes", "Holiday Special"], correctAnswerIndex: 0, explanation: "fruitcake was released in November 2023 as a holiday EP.", timeLimitSeconds: 5 },
  { questionText: "Which song from 'fruitcake' became a viral hit on TikTok?", options: ["A Nonsense Christmas", "Cindy Lou Who", "Is It New Years Yet?"], correctAnswerIndex: 0, explanation: "A Nonsense Christmas went viral for its rewritten outro lyrics.", timeLimitSeconds: 5 },
  { questionText: "'Paris' appears on which Sabrina Carpenter album?", options: ["Singular: Act I", "Singular: Act II", "EVOLution"], correctAnswerIndex: 0, explanation: "Paris is track 4 on Singular: Act I (2018).", timeLimitSeconds: 5 },
  { questionText: "Which song from 'Eyes Wide Open' features the lyric 'I'm a dreamer, don't tell me not to dream'?", options: ["We'll Be the Stars", "The Middle of Starting Over", "Secrets"], correctAnswerIndex: 0, explanation: "We'll Be the Stars includes that inspirational lyric.", timeLimitSeconds: 5 },
  { questionText: "What year was 'Emails I Can't Send' released?", options: ["2021", "2022", "2023"], correctAnswerIndex: 1, explanation: "Emails I Can't Send was released on July 15, 2022.", timeLimitSeconds: 5 },
  { questionText: "Which song includes the lyric 'Jesus was a cross maker, I'm more of a heartbreaker'?", options: ["Nonsense", "Feather", "Read your Mind"], correctAnswerIndex: 0, explanation: "Nonsense contains that playful lyric in the outro.", timeLimitSeconds: 5 },
  { questionText: "In the 'Nonsense' music video, what color outfit does Sabrina wear during the dance break?", options: ["Pink", "Blue", "Red"], correctAnswerIndex: 2, explanation: "She wears a red two-piece outfit in the main dance sequences.", timeLimitSeconds: 5 },
  { questionText: "Complete the lyric from 'Feather': 'I feel so much lighter like a ______ with no gravity'?", options: ["Feather", "Bird", "Kite"], correctAnswerIndex: 0, explanation: "The lyric is 'like a feather with no gravity.'", timeLimitSeconds: 5 },
  { questionText: "In 'Skinny Dipping', Sabrina sings about jumping into a pool with what?", options: ["All her clothes on", "Her ex-boyfriend", "Her best friend"], correctAnswerIndex: 0, explanation: "The lyric is 'jump in the pool with all my clothes on.'", timeLimitSeconds: 5 },
  { questionText: "Which word completes the 'Thumbs' lyric: 'Somewhere in the world they don't have ______'?", options: ["Thumbs", "Hands", "Words"], correctAnswerIndex: 0, explanation: "The chorus says 'Somewhere in the world they don't have thumbs.'", timeLimitSeconds: 5 },
  { questionText: "In the 'Sue Me' music video, what is Sabrina's profession in the visual narrative?", options: ["A lawyer", "A singer", "A teacher"], correctAnswerIndex: 0, explanation: "She portrays a lawyer in the courtroom-themed video.", timeLimitSeconds: 5 },
  { questionText: "What is the first line of 'Because I Liked a Boy'?", options: ["I liked a boy", "He liked a girl", "They said I changed"], correctAnswerIndex: 0, explanation: "The song opens with 'I liked a boy, he liked a girl.'", timeLimitSeconds: 5 },
  { questionText: "In 'Fast Times', what phrase does Sabrina repeat in the chorus?", options: ["Fast times, fast times", "Good times, bad times", "Late nights, long drives"], correctAnswerIndex: 0, explanation: "She repeats 'Fast times, fast times' throughout the chorus.", timeLimitSeconds: 5 },
  { questionText: "In 'Read your Mind', Sabrina sings 'I wanna read your mind like a ______'?", options: ["Book", "Magazine", "Text message"], correctAnswerIndex: 0, explanation: "The lyric is 'like a book, cover to cover.'", timeLimitSeconds: 5 },
  { questionText: "In the 'Skinny Dipping' music video, where does most of the action take place?", options: ["A backyard pool", "A beach", "A bathtub"], correctAnswerIndex: 0, explanation: "The video is set around a suburban swimming pool.", timeLimitSeconds: 5 },
  { questionText: "What is Sabrina Carpenter's exact birthdate?", options: ["May 11, 1999", "May 11, 2000", "May 11, 1998"], correctAnswerIndex: 0, explanation: "Sabrina Carpenter was born on May 11, 1999 in Lehigh Valley, Pennsylvania.", timeLimitSeconds: 5 },
  { questionText: "Where did Sabrina Carpenter grow up?", options: ["Easton, Pennsylvania", "Lehigh Valley, Pennsylvania", "Philadelphia, Pennsylvania"], correctAnswerIndex: 1, explanation: "She was raised in the Lehigh Valley area of Pennsylvania.", timeLimitSeconds: 5 },
  { questionText: "What is the name of Sabrina's older sister who is also a singer?", options: ["Sarah Carpenter", "Samantha Carpenter", "Shannon Carpenter"], correctAnswerIndex: 0, explanation: "Sarah Carpenter is a singer and songwriter who has co-written several of Sabrina's songs.", timeLimitSeconds: 5 },
  { questionText: "Who played Sabrina's father in the 'Feather' music video?", options: ["Her real father", "An actor named David", "A comedian"], correctAnswerIndex: 0, explanation: "Her real father, David Carpenter, appeared in the video.", timeLimitSeconds: 5 },
  { questionText: "Which actor did Sabrina reportedly date in 2023?", options: ["Barry Keoghan", "Joshua Bassett", "Griffin Gluck"], correctAnswerIndex: 0, explanation: "She was linked to Irish actor Barry Keoghan from late 2023.", timeLimitSeconds: 5 },
  { questionText: "What is the name of Sabrina's dog?", options: ["Goodwin", "Oakley", "Winnie"], correctAnswerIndex: 0, explanation: "Her dog is named Goodwin, a goldendoodle.", timeLimitSeconds: 5 },
  { questionText: "Which Disney Channel show made Sabrina a household name as an actress?", options: ["Girl Meets World", "Austin & Ally", "Liv and Maddie"], correctAnswerIndex: 0, explanation: "She played Maya Hart on Girl Meets World from 2014 to 2017.", timeLimitSeconds: 5 },
  { questionText: "What is Sabrina's middle name?", options: ["Ann", "Lynn", "Marie"], correctAnswerIndex: 0, explanation: "Her full name is Sabrina Ann Lynn Carpenter.", timeLimitSeconds: 5 },
  { questionText: "Which of Sabrina's family members appears in her 'Nonsense' Christmas music video?", options: ["Her sister Sarah", "Her mother", "Her father"], correctAnswerIndex: 1, explanation: "Her mother, Elizabeth Carpenter, appears briefly in the video.", timeLimitSeconds: 5 },
  { questionText: "What instrument did Sabrina learn to play as a child?", options: ["Piano", "Guitar", "Drums"], correctAnswerIndex: 0, explanation: "She started playing piano at age 8.", timeLimitSeconds: 5 },
  { questionText: "Which actress from 'Girl Meets World' was Sabrina's close co-star?", options: ["Rowan Blanchard", "Peyton Meyer", "Corey Fogelmanis"], correctAnswerIndex: 0, explanation: "Rowan Blanchard played Riley Matthews, Sabrina's best friend on the show.", timeLimitSeconds: 5 },
  { questionText: "Which pop star did Sabrina open for on tour in 2017?", options: ["Ariana Grande", "Taylor Swift", "Demi Lovato"], correctAnswerIndex: 0, explanation: "She was an opening act on Ariana Grande's Dangerous Woman Tour.", timeLimitSeconds: 5 },
  { questionText: "What award did Sabrina win at the 2024 MTV Video Music Awards?", options: ["Song of the Year", "Best Pop Video", "Push Performance of the Year"], correctAnswerIndex: 2, explanation: "She won Push Performance of the Year for 'Feather.'", timeLimitSeconds: 5 },
  { questionText: "Which song became Sabrina's first top 10 on the Billboard Hot 100?", options: ["Feather", "Nonsense", "Because I Liked a Boy"], correctAnswerIndex: 0, explanation: "Feather peaked at number 9 in early 2024.", timeLimitSeconds: 5 },
  { questionText: "In what year did Sabrina win her first Radio Disney Music Award?", options: ["2015", "2016", "2017"], correctAnswerIndex: 0, explanation: "She won Best Crush Song for 'Can't Blame a Girl for Trying' in 2015.", timeLimitSeconds: 5 },
  { questionText: "Which streaming platform named Sabrina a 'Pop Rising' artist of 2023?", options: ["Spotify", "Apple Music", "Amazon Music"], correctAnswerIndex: 0, explanation: "Spotify featured her on their Pop Rising cover in 2023.", timeLimitSeconds: 5 },
  { questionText: "Which song earned Sabrina her first gold certification from the RIAA?", options: ["Thumbs", "Why", "Can't Blame a Girl for Trying"], correctAnswerIndex: 2, explanation: "Can't Blame a Girl for Trying was certified gold in 2021.", timeLimitSeconds: 5 },
  { questionText: "What year did 'Feather' go platinum?", options: ["2023", "2024", "2025"], correctAnswerIndex: 1, explanation: "Feather was certified platinum by the RIAA in March 2024.", timeLimitSeconds: 5 },
  { questionText: "Which female pop star did Sabrina co-write 'Skinny Dipping' with?", options: ["Olivia Rodrigo", "Madison Hu", "Julia Michaels"], correctAnswerIndex: 2, explanation: "She co-wrote Skinny Dipping with Julia Michaels.", timeLimitSeconds: 5 },
  { questionText: "What is the name of Sabrina's collaboration with Alan Walker?", options: ["On My Way", "Alone", "Faded (Remix)"], correctAnswerIndex: 0, explanation: "On My Way was released in 2019 with Alan Walker and Farruko.", timeLimitSeconds: 5 },
  { questionText: "Which rapper is featured on the remix of 'Nonsense'?", options: ["Coi Leray", "Saweetie", "Doja Cat"], correctAnswerIndex: 0, explanation: "Coi Leray appears on the Nonsense remix released in 2023.", timeLimitSeconds: 5 },
  { questionText: "Who sings with Sabrina on 'Your Name'?", options: ["Troye Sivan", "Lauv", "Joshua Bassett"], correctAnswerIndex: 0, explanation: "Your Name is a duet with Troye Sivan.", timeLimitSeconds: 5 },
  { questionText: "Which boy band member did Sabrina collaborate with on 'First Love'?", options: ["Harry Styles", "Niall Horan", "Zayn Malik"], correctAnswerIndex: 1, explanation: "She sang First Love with Niall Horan for his album Heartbreak Weather.", timeLimitSeconds: 5 },
  { questionText: "What is the name of Sabrina's song with Jonas Blue?", options: ["Alien", "I Don't Care", "Summer"], correctAnswerIndex: 0, explanation: "Alien was released in 2018 featuring Sabrina Carpenter.", timeLimitSeconds: 5 },
  { questionText: "Who co-wrote 'Because I Liked a Boy' with Sabrina?", options: ["Julia Michaels", "Sarah Carpenter", "Olivia Rodrigo"], correctAnswerIndex: 0, explanation: "Julia Michaels co-wrote the track from Emails I Can't Send.", timeLimitSeconds: 5 },
  { questionText: "What is the name of Sabrina's first headlining tour?", options: ["EVOLution Tour", "Singular Tour", "Emails I Can't Send Tour"], correctAnswerIndex: 0, explanation: "The EVOLution Tour ran from 2016 to 2017 as her first headlining trek.", timeLimitSeconds: 5 },
  { questionText: "In which year did the Singular Tour take place?", options: ["2018", "2019", "2020"], correctAnswerIndex: 1, explanation: "The Singular Tour ran from March to October 2019.", timeLimitSeconds: 5 },
  { questionText: "Which tour had to be rescheduled due to the COVID-19 pandemic?", options: ["Emails I Can't Send Tour", "Singular Tour", "EVOLution Tour"], correctAnswerIndex: 0, explanation: "The Emails I Can't Send Tour was postponed from 2020 to 2022.", timeLimitSeconds: 5 },
  { questionText: "What was the name of Sabrina's 2024 summer tour?", options: ["Short n' Sweet Tour", "Feather Tour", "Nonsense World Tour"], correctAnswerIndex: 0, explanation: "The Short n' Sweet Tour began in September 2024.", timeLimitSeconds: 5 },
  { questionText: "Which festival did Sabrina headline in 2023?", options: ["Lollapalooza", "Coachella", "Governors Ball"], correctAnswerIndex: 1, explanation: "She performed at Coachella's second weekend in April 2023.", timeLimitSeconds: 5 },
  { questionText: "Who opened for Sabrina on the North American leg of the Singular Tour?", options: ["New Hope Club", "Why Don't We", "Social House"], correctAnswerIndex: 0, explanation: "British band New Hope Club opened for her in 2019.", timeLimitSeconds: 5 },
  { questionText: "Which tour had a production design based on a bedroom theme?", options: ["Emails I Can't Send Tour", "Singular Tour", "EVOLution Tour"], correctAnswerIndex: 0, explanation: "The stage featured a giant bed and oversized props.", timeLimitSeconds: 5 },
  { questionText: "Which fashion brand made Sabrina a brand ambassador in 2024?", options: ["Miu Miu", "Prada", "Gucci"], correctAnswerIndex: 0, explanation: "She became a Miu Miu ambassador in early 2024.", timeLimitSeconds: 5 },
  { questionText: "Which brand did Sabrina partner with for a holiday campaign in 2023?", options: ["Kate Spade", "Coach", "Michael Kors"], correctAnswerIndex: 0, explanation: "She appeared in a Kate Spade holiday ad campaign.", timeLimitSeconds: 5 },
  { questionText: "What is Sabrina's favorite food (as she revealed in an interview)?", options: ["Pizza", "Sushi", "Pasta"], correctAnswerIndex: 2, explanation: "She has said pasta is her comfort food.", timeLimitSeconds: 5 },
  { questionText: "Which actress is Sabrina best friends with from 'Girl Meets World'?", options: ["Rowan Blanchard", "Danielle Fishel", "Cory Fogelmanis"], correctAnswerIndex: 0, explanation: "She and Rowan Blanchard remain close friends after the show ended.", timeLimitSeconds: 5 },
  { questionText: "What is Sabrina's nickname among fans?", options: ["Sab", "Carpenter", "SC"], correctAnswerIndex: 0, explanation: "Fans commonly call her Sab.", timeLimitSeconds: 5 },
  { questionText: "Which tattoo does Sabrina have on her arm?", options: ["A butterfly", "A crescent moon", "A star"], correctAnswerIndex: 0, explanation: "She has a small butterfly tattoo on her inner arm.", timeLimitSeconds: 5 },
  { questionText: "Which Netflix movie featured Sabrina as a dancer named Quinn?", options: ["Work It", "Tall Girl", "The Perfect Date"], correctAnswerIndex: 0, explanation: "Work It (2020) stars Sabrina as a high school dancer.", timeLimitSeconds: 5 },
  { questionText: "What is the name of the 2021 film where Sabrina voiced a character?", options: ["Vivo", "Encanto", "Raya and the Last Dragon"], correctAnswerIndex: 0, explanation: "She voiced a supporting role in the animated film Vivo.", timeLimitSeconds: 5 },
  { questionText: "Which musician gave Sabrina her first acoustic guitar?", options: ["Her father", "Taylor Swift", "Kelsea Ballerini"], correctAnswerIndex: 1, explanation: "Taylor Swift gave her a guitar after meeting backstage.", timeLimitSeconds: 5 },
  { questionText: "What is the name of the song Sabrina wrote about her grandfather's passing?", options: ["Tell Em", "Cindy Lou Who", "Is It New Years Yet?"], correctAnswerIndex: 0, explanation: "Tell Em from Singular: Act I was written for her late grandfather.", timeLimitSeconds: 5 },
  { questionText: "What is the name of Sabrina's first published song (written at age 12)?", options: ["Can't Blame a Girl for Trying", "Safe and Sound", "We'll Be the Stars"], correctAnswerIndex: 0, explanation: "She wrote Can't Blame a Girl for Trying when she was 12.", timeLimitSeconds: 5 },
  { questionText: "What is Sabrina's favorite Taylor Swift album?", options: ["1989", "Red", "Fearless"], correctAnswerIndex: 0, explanation: "She has said 1989 is her favorite Taylor Swift album.", timeLimitSeconds: 5 },
  { questionText: "What is the name of the 2022 song that interpolates 'I'm Blue' by Eiffel 65?", options: ["Nonsense", "Fast Times", "Read your Mind"], correctAnswerIndex: 0, explanation: "Nonsense interpolates the melody from I'm Blue.", timeLimitSeconds: 5 },
  { questionText: "What is the name of Sabrina's production company?", options: ["Silver Cross Productions", "Carpenter Creative", "At Last Productions"], correctAnswerIndex: 0, explanation: "She founded Silver Cross Productions in 2020.", timeLimitSeconds: 5 },
  { questionText: "Which song from 'Emails I Can't Send' has a music video shot entirely on an iPhone?", options: ["Skinny Dipping", "Fast Times", "Because I Liked a Boy"], correctAnswerIndex: 0, explanation: "The Skinny Dipping video was shot on an iPhone 13.", timeLimitSeconds: 5 },
  { questionText: "What is Sabrina's height in feet?", options: ["5'0\"", "5'2\"", "5'5\""], correctAnswerIndex: 0, explanation: "Sabrina Carpenter is approximately 5 feet 0 inches tall.", timeLimitSeconds: 5 },
  { questionText: "Which lyric from 'Feather' includes a dark humor reference?", options: ["I feel like a feather", "Killing boys like Jeffrey Dahmer", "Don't need no closure"], correctAnswerIndex: 1, explanation: "She sings 'Killing boys like Jeffrey Dahmer' as a dark humor line.", timeLimitSeconds: 5 },
  { questionText: "What year did Sabrina appear in the film 'Clouds'?", options: ["2019", "2020", "2021"], correctAnswerIndex: 1, explanation: "She played a supporting role in the Disney+ film Clouds in 2020.", timeLimitSeconds: 5 },
  { questionText: "Which of these is a real Sabrina Carpenter song?", options: ["Almost Love", "Exhale", "Second Guess"], correctAnswerIndex: 0, explanation: "Almost Love is from Singular: Act I (2018).", timeLimitSeconds: 5 },
  { questionText: "Which pop star sent Sabrina a handwritten letter after 'Emails I Can't Send'?", options: ["Taylor Swift", "Selena Gomez", "Miley Cyrus"], correctAnswerIndex: 0, explanation: "Taylor Swift wrote her a supportive letter in 2022.", timeLimitSeconds: 5 },
  { questionText: "Which song did Sabrina co-write with her sister Sarah?", options: ["We'll Be the Stars", "Secrets", "Eyes Wide Open"], correctAnswerIndex: 1, explanation: "Sarah Carpenter co-wrote Secrets from the Eyes Wide Open album.", timeLimitSeconds: 5 },
  { questionText: "What year was Sabrina cast as Maya Hart?", options: ["2013", "2014", "2015"], correctAnswerIndex: 0, explanation: "She was cast in Girl Meets World in 2013 before its June 2014 premiere.", timeLimitSeconds: 5 },
  { questionText: "Which song includes the line 'I'm sorry that you thought I'd be so predictable'?", options: ["Sue Me", "In My Bed", "Pushing 20"], correctAnswerIndex: 0, explanation: "Sue Me contains that defiant lyric.", timeLimitSeconds: 5 },
  { questionText: "What color hair did Sabrina have during the 'Singular' era?", options: ["Blonde", "Brown with bangs", "Red"], correctAnswerIndex: 1, explanation: "She had long brown hair with curtain bangs in 2018-2019.", timeLimitSeconds: 5 },
  { questionText: "Which phrase does Sabrina say at the end of most 'Nonsense' live performances?", options: ["A custom outro", "I love you", "That's nonsense"], correctAnswerIndex: 0, explanation: "She writes a unique, often risqué outro for each city.", timeLimitSeconds: 5 },
  { questionText: "What award did Sabrina win for 'Feather' at the 2024 MTV Europe Music Awards?", options: ["Best Song", "Best Pop", "Best Video"], correctAnswerIndex: 2, explanation: "Feather won Best Video at the 2024 EMAs.", timeLimitSeconds: 5 },
  { questionText: "How many songs does the standard edition of 'Emails I Can't Send' have?", options: ["10", "12", "13"], correctAnswerIndex: 2, explanation: "The standard album has 13 tracks.", timeLimitSeconds: 5 },
  { questionText: "Which songwriter mentored Sabrina early in her career?", options: ["Max Martin", "Julia Michaels", "Toby Gad"], correctAnswerIndex: 1, explanation: "Julia Michaels mentored her on songwriting for Emails I Can't Send.", timeLimitSeconds: 5 },
  { questionText: "Which 2023 Halloween costume of Sabrina's went viral?", options: ["Sabrina the Teenage Witch", "Poison Ivy", "A nun"], correctAnswerIndex: 0, explanation: "She dressed as the 1990s Sabrina the Teenage Witch.", timeLimitSeconds: 5 },
  { questionText: "What is the name of the podcast where Sabrina discussed her personal life in 2023?", options: ["Armchair Expert", "Call Her Daddy", "Anything Goes"], correctAnswerIndex: 1, explanation: "She appeared on Call Her Daddy in December 2023.", timeLimitSeconds: 5 },
  { questionText: "Which word appears in the title of both an album and a song by Sabrina?", options: ["Singular", "Evolution", "Emails"], correctAnswerIndex: 0, explanation: "Singular is both an album title (two parts) and a song on Singular: Act I.", timeLimitSeconds: 5 },
  { questionText: "What year did Sabrina perform at the Macy's Thanksgiving Day Parade?", options: ["2015", "2016", "2017"], correctAnswerIndex: 1, explanation: "She performed Thumbs on the parade float in 2016.", timeLimitSeconds: 5 },
  { questionText: "Which actress played Sabrina's rival in 'Work It'?", options: ["Liza Koshy", "Michelle Buteau", "Jordan Fisher"], correctAnswerIndex: 0, explanation: "Liza Koshy played the rival dance crew member.", timeLimitSeconds: 5 },
  { questionText: "What is the name of the dance style Sabrina learned for 'Work It'?", options: ["Hip hop", "Ballroom", "Contemporary"], correctAnswerIndex: 0, explanation: "She trained extensively in hip hop for the film.", timeLimitSeconds: 5 },
  { questionText: "What is Sabrina's zodiac sign?", options: ["Taurus", "Gemini", "Cancer"], correctAnswerIndex: 0, explanation: "May 11 makes her a Taurus.", timeLimitSeconds: 5 },
  { questionText: "Which song from 'fruitcake' is a cover of a 2000s hit?", options: ["A Nonsense Christmas", "Santa Doesn't Know You Like I Do", "None — all originals"], correctAnswerIndex: 2, explanation: "All tracks on fruitcake are original songs.", timeLimitSeconds: 5 },
  { questionText: "What is the name of the 2023 remix album Sabrina released?", options: ["Emails I Can't Send Fwd:", "Singular (Remixed)", "EVOLution (Deluxe)"], correctAnswerIndex: 0, explanation: "Emails I Can't Send Fwd: included new tracks and remixes.", timeLimitSeconds: 5 },
  { questionText: "Which lyric from 'Read your Mind' references a famous film?", options: ["Eternal Sunshine of the Spotless Mind", "Inception", "The Matrix"], correctAnswerIndex: 0, explanation: "She sings 'Eternal Sunshine of the Spotless Mind, I wanna read your mind.'", timeLimitSeconds: 5 },
  { questionText: "What is the name of the 2017 tour where Sabrina opened for The Vamps?", options: ["Night & Day Tour", "Wake Up Tour", "Middle of the Night Tour"], correctAnswerIndex: 0, explanation: "She opened for The Vamps on their Night & Day Tour in 2017.", timeLimitSeconds: 5 },
  { questionText: "Which social media platform did Sabrina use to tease 'Nonsense' lyrics before release?", options: ["TikTok", "Instagram Reels", "Twitter"], correctAnswerIndex: 0, explanation: "She teased lyrics on TikTok with voiceovers before release.", timeLimitSeconds: 5 },

  // --- New Unique Questions (58) ---
  {
    questionText: "The music video for 'Nonsense' features cameos from which of Sabrina's friends?",
    options: ["Madison Hu", "Olivia Rodrigo", "Jenna Ortega"],
    correctAnswerIndex: 0,
    explanation: "Actress Madison Hu appears briefly in the video.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the 2017 song where Sabrina sings 'I've been watching you for days now'?",
    options: ["Why", "Can't Blame a Girl for Trying", "The Middle of Starting Over"],
    correctAnswerIndex: 0,
    explanation: "Why includes the lyric 'I've been watching you for days now.'",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many older sisters does Sabrina have?",
    options: ["Two", "Three", "One"],
    correctAnswerIndex: 1,
    explanation: "She has three older sisters: Sarah, Shannon, and a half-sister named Kayla.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the character Sabrina voiced in 'The Simpsons'?",
    options: ["Quinn", "Lisa's friend", "Sherri"],
    correctAnswerIndex: 0,
    explanation: "She voiced a character named Quinn in a 2021 episode.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many Billboard Music Awards has Sabrina Carpenter won as of 2025?",
    options: ["Zero", "One", "Two"],
    correctAnswerIndex: 0,
    explanation: "She has not won a Billboard Music Award as of 2025, though nominated.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What chart record does 'Nonsense' hold on Pop Airplay?",
    options: ["First top 5 for Sabrina", "Longest charting song by a Disney alum", "Most weeks in top 10"],
    correctAnswerIndex: 0,
    explanation: "Nonsense reached top 5 on Pop Airplay in 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many iHeartRadio Music Awards has Sabrina won?",
    options: ["0", "1", "2"],
    correctAnswerIndex: 0,
    explanation: "She has been nominated but not yet won an iHeartRadio award as of 2025.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which singer appears on the 'Fast Times' remix?",
    options: ["No remix exists", "Machine Gun Kelly", "Yungblud"],
    correctAnswerIndex: 0,
    explanation: "Fast Times has no official remix with another artist.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many legs did the Emails I Can't Send Tour have?",
    options: ["Two", "Three", "Four"],
    correctAnswerIndex: 1,
    explanation: "The tour had three legs: North America, Europe, and Asia.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the first song Sabrina performed at her 2023 Coachella set?",
    options: ["Fast Times", "Nonsense", "Feather"],
    correctAnswerIndex: 0,
    explanation: "She opened her Coachella set with Fast Times.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many shows did the Short n' Sweet Tour include as of 2025?",
    options: ["25", "35", "45"],
    correctAnswerIndex: 1,
    explanation: "The initial leg had 35 shows across North America and Europe.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Sabrina's makeup collaboration?",
    options: ["Sabrina x About-Face", "Carpenter Cosmetics", "None — she has no makeup line"],
    correctAnswerIndex: 2,
    explanation: "She has not launched a makeup brand as of 2025.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What charity did Sabrina perform for in 2023?",
    options: ["Planned Parenthood", "Save the Children", "Feeding America"],
    correctAnswerIndex: 1,
    explanation: "She performed at a Save the Children benefit gala in 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which animal welfare organization has Sabrina promoted?",
    options: ["Best Friends Animal Society", "ASPCA", "PETA"],
    correctAnswerIndex: 0,
    explanation: "She has shared adoption posts for Best Friends.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Sabrina's clothing collection with a major retailer?",
    options: ["SAB by Sabrina", "Carpenter Collective", "None — she has no clothing line"],
    correctAnswerIndex: 2,
    explanation: "She has not released a clothing collection as of 2025.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How much did Sabrina donate to the Time's Up Legal Defense Fund in 2018?",
    options: ["$10,000", "$25,000", "$50,000"],
    correctAnswerIndex: 0,
    explanation: "She donated $10,000 after attending the Women's March.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the 2018 film where Sabrina played a character named Harper?",
    options: ["The Hate U Give", "The Short History of the Long Road", "Work It"],
    correctAnswerIndex: 1,
    explanation: "She played Harper in the indie film The Short History of the Long Road.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which red carpet did Sabrina wear a crystal mesh dress that went viral?",
    options: ["2024 Grammys", "2023 VMAs", "2022 AMAs"],
    correctAnswerIndex: 2,
    explanation: "Her 2022 AMAs red carpet look went viral on social media.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which coffee chain did Sabrina name-drop in 'Nonsense'?",
    options: ["Starbucks", "Dunkin'", "Peet's"],
    correctAnswerIndex: 1,
    explanation: "She sings 'Dunkin' run, gotta get my fix' in one outro.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which actress played Sabrina's mom on 'Girl Meets World'?",
    options: ["Danielle Fishel", "Rowan Blanchard", "Bella Thorne"],
    correctAnswerIndex: 0,
    explanation: "Danielle Fishel played Topanga, Maya's foster mother figure.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which sport did Sabrina play in high school?",
    options: ["Soccer", "Basketball", "Cheerleading"],
    correctAnswerIndex: 0,
    explanation: "She played soccer as a child and teenager.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the magazine where Sabrina got her first cover?",
    options: ["Teen Vogue", "Seventeen", "Girl's Life"],
    correctAnswerIndex: 2,
    explanation: "She was on the cover of Girl's Life in 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song from 'EVOLution' was used in a commercial for a phone brand?",
    options: ["Thumbs", "Run and Hide", "Mirage"],
    correctAnswerIndex: 0,
    explanation: "Thumbs appeared in a Samsung Galaxy commercial.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Sabrina's grandmother (who she mentions in interviews)?",
    options: ["Nonna", "Grandma Carole", "Grandma Ann"],
    correctAnswerIndex: 0,
    explanation: "She calls her grandmother Nonna.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which YouTube personality did Sabrina collaborate with on a cover song?",
    options: ["Kurt Hugo Schneider", "Andrew Huang", "Tiffany Alvord"],
    correctAnswerIndex: 0,
    explanation: "She sang a cover of 'Say Something' with Kurt Hugo Schneider.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the 2024 documentary about Sabrina's tour?",
    options: ["Short n' Sweet: Behind the Scenes", "Emails I Can't Send: The Film", "None — no documentary yet"],
    correctAnswerIndex: 2,
    explanation: "As of 2025, she has not released a concert documentary.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the first song Sabrina ever performed on TV?",
    options: ["Can't Blame a Girl for Trying", "Eyes Wide Open", "We'll Be the Stars"],
    correctAnswerIndex: 0,
    explanation: "She performed Can't Blame a Girl for Trying on The Today Show in 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which actress is Sabrina's best friend outside of Disney?",
    options: ["Madison Hu", "Olivia Rodrigo", "Jenna Ortega"],
    correctAnswerIndex: 0,
    explanation: "She is close friends with actress Madison Hu since 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the 2021 single where Sabrina sings 'Don't need a boy to make me feel like a woman'?",
    options: ["Skinny Dipping", "Fast Times", "You Need to Calm Down (cover)"],
    correctAnswerIndex: 0,
    explanation: "Skinny Dipping includes that line in the second verse.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which American Idol alum did Sabrina date in 2019?",
    options: ["No confirmed relationship", "Laine Hardy", "Maddie Poppe"],
    correctAnswerIndex: 0,
    explanation: "She has not publicly dated any American Idol contestant.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song from 'Emails I Can't Send' was released as a promotional single?",
    options: ["Skinny Dipping", "Fast Times", "Because I Liked a Boy"],
    correctAnswerIndex: 2,
    explanation: "Because I Liked a Boy was a promo single before the album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the character Sabrina played in 'The Hate U Give'?",
    options: ["Hailey", "Maya", "No role — she wasn't in that film"],
    correctAnswerIndex: 2,
    explanation: "Sabrina Carpenter did not appear in The Hate U Give.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Sabrina's cat?",
    options: ["Jasper", "Luna", "No cat — she has a dog"],
    correctAnswerIndex: 2,
    explanation: "She only has a dog named Goodwin, no known cat.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which of these cities is NOT a stop on the Short n' Sweet Tour?",
    options: ["Sydney", "London", "Tokyo"],
    correctAnswerIndex: 2,
    explanation: "The tour included Sydney and London but not Tokyo as of 2025.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Sabrina's 2025 single with a brand partnership?",
    options: ["Sprite commercial track", "None yet", "Taste"],
    correctAnswerIndex: 0,
    explanation: "She released a jingle-like track for Sprite in early 2025.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which 2020 song includes a feature from Sabrina Carpenter?",
    options: ["I Still Say Yes", "Stay", "Lonely"],
    correctAnswerIndex: 0,
    explanation: "I Still Say Yes is a collaboration with Kyler Fisher.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Sabrina's 2015 holiday single?",
    options: ["Christmas the Whole Year Round", "Santa Tell Me", "Holiday"],
    correctAnswerIndex: 0,
    explanation: "Christmas the Whole Year Round was released in 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song from 'Emails I Can't Send' is about online criticism?",
    options: ["Bet U Wanna", "Already Over", "How Many Things"],
    correctAnswerIndex: 0,
    explanation: "Bet U Wanna addresses haters and social media negativity.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Sabrina's 2022 live lounge cover for BBC Radio 1?",
    options: ["Hopelessly Devoted to You", "I Will Always Love You", "Valerie"],
    correctAnswerIndex: 0,
    explanation: "She covered Olivia Newton-John's 'Hopelessly Devoted to You.'",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track on 'Singular: Act II' has a music video set in a diner?",
    options: ["Pushing 20", "In My Bed", "Take Off"],
    correctAnswerIndex: 0,
    explanation: "Pushing 20's video is a retro diner-themed visual.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What year did Sabrina win the Shorty Award for Best in Music?",
    options: ["2016", "2017", "2018"],
    correctAnswerIndex: 1,
    explanation: "She won the Shorty Award for Best in Music in 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song from 'EVOLution' features the line 'You know I need you like a heartbeat'?",
    options: ["Run and Hide", "Mirage", "Don't Want It Back"],
    correctAnswerIndex: 1,
    explanation: "Mirage includes that romantic lyric.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the unreleased song Sabrina performed on the 2019 tour?",
    options: ["I Can't Stop Me", "Already Falling", "Take Off"],
    correctAnswerIndex: 1,
    explanation: "Already Falling was a fan-favorite unreleased track played live.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which actress played Sabrina's mother in 'Work It'?",
    options: ["Michelle Buteau", "Jennifer Lopez", "Kerry Washington"],
    correctAnswerIndex: 0,
    explanation: "Michelle Buteau played the mother of Sabrina's character.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of the song Sabrina wrote after her first breakup?",
    options: ["Shadows", "Diamond", "White Flag"],
    correctAnswerIndex: 0,
    explanation: "Shadows from EVOLution is about a real relationship ending.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which 2024 awards show did Sabrina host?",
    options: ["MTV Europe Music Awards", "iHeartRadio Music Awards", "None — she hasn't hosted"],
    correctAnswerIndex: 2,
    explanation: "As of 2025, Sabrina has not hosted a major awards show.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Sabrina's collaboration with Lost Kings?",
    options: ["First Love", "Don't Call Me", "Look at Us Now"],
    correctAnswerIndex: 0,
    explanation: "First Love was released with Lost Kings in 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which lyric from 'Sue Me' references a legal term?",
    options: ["Sue me for all that I've got", "Objection", "Case closed"],
    correctAnswerIndex: 0,
    explanation: "The chorus repeats 'Sue me for all that I've got.'",
    timeLimitSeconds: 5
  },
  {
    questionText: "What year did Sabrina perform at the Wango Tango festival?",
    options: ["2015", "2016", "2017"],
    correctAnswerIndex: 1,
    explanation: "She performed at Wango Tango in June 2016.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song from 'Eyes Wide Open' has a music video filmed in a forest?",
    options: ["We'll Be the Stars", "The Middle of Starting Over", "Eyes Wide Open"],
    correctAnswerIndex: 0,
    explanation: "We'll Be the Stars video features forest and outdoor scenes.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Sabrina's 2019 single with a music video filmed in Tokyo?",
    options: ["Tokyo", "In My Bed", "Exhale"],
    correctAnswerIndex: 1,
    explanation: "In My Bed's video was shot entirely in Tokyo, Japan.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which producer worked on most of 'Singular: Act I'?",
    options: ["Oak Felder", "Max Martin", "Pharrell Williams"],
    correctAnswerIndex: 0,
    explanation: "Oak Felder produced the majority of Singular: Act I.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is Sabrina's favorite movie (she mentioned in an interview)?",
    options: ["10 Things I Hate About You", "Clueless", "Mean Girls"],
    correctAnswerIndex: 0,
    explanation: "She has said 10 Things I Hate About You is her favorite.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song from 'fruitcake' features a spoken word intro?",
    options: ["Buy Me Presents", "Cindy Lou Who", "Is It New Years Yet?"],
    correctAnswerIndex: 1,
    explanation: "Cindy Lou Who opens with a spoken monologue.",
    timeLimitSeconds: 5
  },
  {
    questionText: "How many total tracks are on 'Singular: Act I' and 'Act II' combined?",
    options: ["20", "22", "24"],
    correctAnswerIndex: 1,
    explanation: "Act I has 8 tracks, Act II has 14, totaling 22 songs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What year did Sabrina sign with Island Records?",
    options: ["2020", "2021", "2022"],
    correctAnswerIndex: 0,
    explanation: "She signed with Island Records in 2020 after leaving Hollywood Records.",
    timeLimitSeconds: 5
  }
];
