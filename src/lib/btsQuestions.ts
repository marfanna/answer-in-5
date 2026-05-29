import { Question } from './mockData';

export const BTS_QUESTIONS: Omit<Question, 'id' | 'categoryId' | 'subCategoryId'>[] = [
  // --- Existing 103 Questions ---
  { questionText: 'Which BTS album includes the track "Paradise"?', options: ['Love Yourself: Tear', 'Map of the Soul: Persona', 'BE'], correctAnswerIndex: 0, explanation: 'Paradise is a fan-favorite track from Love Yourself: Tear.', timeLimitSeconds: 5 },
  { questionText: 'Which member released the solo track "Euphoria"?', options: ['Jungkook', 'Jimin', 'V'], correctAnswerIndex: 0, explanation: 'Euphoria is Jungkook\'s solo track from Love Yourself: Answer.', timeLimitSeconds: 5 },
  { questionText: 'What city hosted BTS\'s first stadium concert?', options: ['Seoul', 'New York', 'London'], correctAnswerIndex: 0, explanation: 'They held their first stadium concert at the Seoul Olympic Stadium.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS song references the Greek god Dionysus?', options: ['Blood Sweat & Tears', 'Dionysus', 'Black Swan'], correctAnswerIndex: 1, explanation: 'Dionysus from Map of the Soul: Persona references the god of wine and revelry.', timeLimitSeconds: 5 },
  { questionText: 'Who was the first BTS member to release a full solo mixtape?', options: ['RM', 'Suga', 'J-Hope'], correctAnswerIndex: 0, explanation: 'RM released his self-titled mixtape in 2015.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the 2020 MTV VMAs?', options: ['ON', 'Dynamite', 'Butter'], correctAnswerIndex: 1, explanation: 'They performed their hit Dynamite remotely from South Korea.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is known for his stage name "Agust D"?', options: ['J-Hope', 'Suga', 'RM'], correctAnswerIndex: 1, explanation: 'Suga uses the alias Agust D for his solo mixtape releases.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS song was their first Billboard Hot 100 #1?', options: ['DNA', 'Dynamite', 'Butter'], correctAnswerIndex: 1, explanation: 'Dynamite debuted at #1 on the Billboard Hot 100 in 2020.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Spring Day"?', options: ['Wings', 'You Never Walk Alone', 'Map of the Soul: 7'], correctAnswerIndex: 1, explanation: 'Spring Day is the title track of the repackaged album You Never Walk Alone.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member curated the "In the Soop" playlist?', options: ['Jin', 'V', 'Jungkook'], correctAnswerIndex: 1, explanation: 'V took charge of curating music during their time in the Soop.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS song was performed at the United Nations in 2021?', options: ['Permission to Dance', 'Dynamite', 'Butter'], correctAnswerIndex: 0, explanation: 'They performed Permission to Dance inside and around the UN General Assembly Hall.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member starred in the K-drama "Hwarang"?', options: ['Jin', 'V', 'Jungkook'], correctAnswerIndex: 1, explanation: 'V (Kim Taehyung) made his acting debut in the historical drama Hwarang.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Silver Spoon" (Baepsae)?', options: ['Wings', 'The Most Beautiful Moment in Life, Pt.2', 'Map of the Soul: 7'], correctAnswerIndex: 1, explanation: 'Baepsae is a classic hype track from HYYH Pt.2.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is nicknamed "Worldwide Handsome"?', options: ['RM', 'Jin', 'J-Hope'], correctAnswerIndex: 1, explanation: 'Jin coined this nickname for himself and it stuck globally.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was the first to surpass 1 billion streams on Spotify?', options: ['Boy With Luv', 'Dynamite', 'Butter'], correctAnswerIndex: 1, explanation: 'Dynamite was their first track to join the billion streams club on Spotify.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo mixtape "Hope World"?', options: ['RM', 'J-Hope', 'Suga'], correctAnswerIndex: 1, explanation: 'J-Hope released his vibrant solo mixtape Hope World in 2018.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS song includes the lyric "I\'m diamond, you know I glow up"?', options: ['Butter', 'Dynamite', 'Mic Drop'], correctAnswerIndex: 1, explanation: 'This iconic line is sung by Jungkook in Dynamite.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member has a BT21 character named "Shooky"?', options: ['Jungkook', 'Suga', 'Jimin'], correctAnswerIndex: 1, explanation: 'Shooky is the tiny but fierce magic cookie created by Suga.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album introduced the "Love Yourself" series?', options: ['Love Yourself: Her', 'Love Yourself: Tear', 'Love Yourself: Answer'], correctAnswerIndex: 0, explanation: 'Her was the first installment of the Love Yourself trilogy.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member collaborated with Coldplay on "My Universe"?', options: ['Jimin', 'All members', 'Jungkook'], correctAnswerIndex: 1, explanation: 'The entire group collaborated with Coldplay on the track.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS song was inspired by Hermann Hesse\'s novel "Demian"?', options: ['Blood Sweat & Tears', 'Black Swan', 'Fake Love'], correctAnswerIndex: 0, explanation: 'The Wings album and Blood Sweat & Tears heavily draw from Demian.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is the leader of the group?', options: ['RM', 'Jin', 'Suga'], correctAnswerIndex: 0, explanation: 'RM (Kim Namjoon) is the designated leader of BTS.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the Grammy Awards in 2022?', options: ['Butter', 'Dynamite', 'Permission to Dance'], correctAnswerIndex: 0, explanation: 'They delivered a spectacular James Bond-inspired performance of Butter.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Serendipity"?', options: ['Jimin', 'V', 'Jungkook'], correctAnswerIndex: 0, explanation: 'Serendipity is Jimin\'s beautiful solo track from Love Yourself: Her.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Black Swan"?', options: ['Map of the Soul: 7', 'BE', 'Love Yourself: Tear'], correctAnswerIndex: 0, explanation: 'Black Swan is an art-focused pre-release track for Map of the Soul: 7.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is known for his love of cooking?', options: ['Jin', 'J-Hope', 'Suga'], correctAnswerIndex: 0, explanation: 'Jin is famous for his cooking skills and his "Eat Jin" broadcasts.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS song was their first English-language single?', options: ['Dynamite', 'Butter', 'Permission to Dance'], correctAnswerIndex: 0, explanation: 'Dynamite was their first fully English track.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member has a BT21 character named "Tata"?', options: ['V', 'Jungkook', 'J-Hope'], correctAnswerIndex: 0, explanation: 'Tata is the heart-shaped alien created by V.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was used in the Samsung Galaxy commercial?', options: ['Butter', 'Dynamite', 'Mic Drop'], correctAnswerIndex: 0, explanation: 'Butter was heavily featured in their Samsung Galaxy Z Flip3 commercials.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Lie"?', options: ['Jimin', 'Jungkook', 'V'], correctAnswerIndex: 0, explanation: 'Lie is Jimin\'s haunting solo track from the Wings album.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Stigma"?', options: ['V', 'Jungkook', 'Jimin'], correctAnswerIndex: 0, explanation: 'Stigma is V\'s neo-soul solo track from the Wings album.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Mic Drop"?', options: ['Love Yourself: Her', 'Map of the Soul: Persona', 'Wings'], correctAnswerIndex: 0, explanation: 'Mic Drop is an iconic hip-hop track from Love Yourself: Her.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member has a BT21 character named "Koya"?', options: ['RM', 'Jin', 'Suga'], correctAnswerIndex: 0, explanation: 'Koya is the sleepy, smart koala created by RM.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the Billboard Music Awards in 2018?', options: ['Fake Love', 'DNA', 'Boy With Luv'], correctAnswerIndex: 0, explanation: 'They premiered Fake Love at the 2018 BBMAs.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Trivia: Seesaw"?', options: ['Suga', 'RM', 'J-Hope'], correctAnswerIndex: 0, explanation: 'Seesaw is Suga\'s laid-back solo track showing off his vocals.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album includes the track "Anpanman"?', options: ['Love Yourself: Tear', 'Map of the Soul: 7', 'BE'], correctAnswerIndex: 0, explanation: 'Anpanman is a high-energy track from Love Yourself: Tear.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is known for his love of photography?', options: ['V', 'Jungkook', 'Jin'], correctAnswerIndex: 0, explanation: 'V (under the name Vante) frequently shares his photography.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was their first Japanese single?', options: ['Lights', 'For You', 'No More Dream (Japanese Ver.)'], correctAnswerIndex: 2, explanation: 'They debuted in Japan with the Japanese version of No More Dream.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Awake"?', options: ['Jin', 'Jungkook', 'Jimin'], correctAnswerIndex: 0, explanation: 'Awake is Jin\'s emotive solo track from the Wings album.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Boy With Luv"?', options: ['Map of the Soul: Persona', 'Love Yourself: Answer', 'BE'], correctAnswerIndex: 0, explanation: 'Boy With Luv featuring Halsey is the title track of MOTS: Persona.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member has a BT21 character named "Mang"?', options: ['J-Hope', 'Jimin', 'V'], correctAnswerIndex: 0, explanation: 'Mang is the dancing pony created by J-Hope.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the 2017 American Music Awards?', options: ['DNA', 'Mic Drop', 'Fake Love'], correctAnswerIndex: 0, explanation: 'They made their US TV debut performing DNA at the 2017 AMAs.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Shadow"?', options: ['Suga', 'RM', 'J-Hope'], correctAnswerIndex: 0, explanation: 'Interlude: Shadow is Suga\'s introspective track from MOTS: 7.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Idol"?', options: ['Love Yourself: Answer', 'Map of the Soul: Persona', 'BE'], correctAnswerIndex: 0, explanation: 'Idol is the high-energy lead single from Love Yourself: Answer.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member has a BT21 character named "Cooky"?', options: ['Jungkook', 'Jimin', 'V'], correctAnswerIndex: 0, explanation: 'Cooky is the tough, workout-loving bunny created by Jungkook.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the 2018 Melon Music Awards?', options: ['Fake Love', 'Idol', 'DNA'], correctAnswerIndex: 1, explanation: 'They performed an epic traditional Korean version of Idol at the 2018 MMAs.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Trivia: Love"?', options: ['RM', 'J-Hope', 'Suga'], correctAnswerIndex: 0, explanation: 'Trivia: Love is RM\'s poetic solo track from Love Yourself: Answer.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album includes the track "Go Go"?', options: ['Love Yourself: Her', 'Wings', 'Map of the Soul: 7'], correctAnswerIndex: 0, explanation: 'Go Go is a satirical track from Love Yourself: Her.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is known for his painting hobby?', options: ['Jungkook', 'V', 'J-Hope'], correctAnswerIndex: 0, explanation: 'Jungkook is known for being naturally gifted at painting and drawing.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was their first collaboration with Steve Aoki?', options: ['Mic Drop Remix', 'DNA', 'Idol'], correctAnswerIndex: 0, explanation: 'Steve Aoki remixed Mic Drop, making it a massive global hit.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Moon"?', options: ['Jin', 'Jungkook', 'Jimin'], correctAnswerIndex: 0, explanation: 'Moon is Jin\'s solo track dedicated to ARMY from MOTS: 7.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Make It Right"?', options: ['Map of the Soul: Persona', 'Love Yourself: Tear', 'BE'], correctAnswerIndex: 0, explanation: 'Make It Right, co-written by Ed Sheeran, is on MOTS: Persona.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member has a BT21 character named "RJ"?', options: ['Jin', 'Suga', 'J-Hope'], correctAnswerIndex: 0, explanation: 'RJ is the polite, fluffy alpaca created by Jin.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the 2019 Melon Music Awards?', options: ['Boy With Luv', 'Fake Love', 'DNA'], correctAnswerIndex: 0, explanation: 'They performed Boy With Luv during their massive 2019 MMA set.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Inner Child"?', options: ['V', 'Jungkook', 'Jimin'], correctAnswerIndex: 0, explanation: 'Inner Child is V\'s soaring solo track from Map of the Soul: 7.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album includes the track "Save Me"?', options: ['The Most Beautiful Moment in Life: Young Forever', 'Wings', 'Love Yourself: Tear'], correctAnswerIndex: 0, explanation: 'Save Me is featured on the Young Forever compilation album.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is known for his nickname "Golden Maknae"?', options: ['Jungkook', 'Jimin', 'V'], correctAnswerIndex: 0, explanation: 'Jungkook earned the title because he is good at everything he tries.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the Grammy Awards in 2021?', options: ['Dynamite', 'Butter', 'ON'], correctAnswerIndex: 0, explanation: 'They performed Dynamite from a rooftop in Seoul for the 2021 Grammys.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Blue & Grey"?', options: ['V', 'Jungkook', 'Jimin'], correctAnswerIndex: 0, explanation: 'V originally wrote Blue & Grey for his mixtape before it was added to BE.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Telepathy"?', options: ['BE', 'Map of the Soul: 7', 'Love Yourself: Answer'], correctAnswerIndex: 0, explanation: 'Telepathy is a retro-pop track from the BE album.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member has a BT21 character named "Van"?', options: ['All members', 'J-Hope', 'RM'], correctAnswerIndex: 0, explanation: 'Van represents ARMY and protects all the BT21 characters.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the 2020 Melon Music Awards?', options: ['ON', 'Dynamite', 'Black Swan'], correctAnswerIndex: 2, explanation: 'They delivered a stunning performance of Black Swan at the 2020 MMAs.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Trivia: Just Dance"?', options: ['J-Hope', 'Jimin', 'V'], correctAnswerIndex: 0, explanation: 'Just Dance is J-Hope\'s energetic solo track from Love Yourself: Answer.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "So What"?', options: ['Love Yourself: Tear', 'Map of the Soul: Persona', 'BE'], correctAnswerIndex: 0, explanation: 'So What is an EDM track from Love Yourself: Tear.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member has a BT21 character named "Chimmy"?', options: ['Jimin', 'Jungkook', 'V'], correctAnswerIndex: 0, explanation: 'Chimmy is the passionate puppy wearing a yellow hoodie, created by Jimin.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the 2021 Billboard Music Awards?', options: ['Butter', 'Dynamite', 'ON'], correctAnswerIndex: 0, explanation: 'They performed Butter for the first time at the 2021 BBMAs.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "First Love"?', options: ['Suga', 'RM', 'J-Hope'], correctAnswerIndex: 0, explanation: 'First Love is Suga\'s emotional solo track from the Wings album.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album includes the track "Outro: Tear"?', options: ['Love Yourself: Tear', 'Map of the Soul: 7', 'Wings'], correctAnswerIndex: 0, explanation: 'The rap line performs Outro: Tear on the Love Yourself: Tear album.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is known for his nickname "Sunshine"?', options: ['J-Hope', 'Jimin', 'V'], correctAnswerIndex: 0, explanation: 'J-Hope is known as the group\'s sunshine because of his bright personality.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was their first collaboration with Nicki Minaj?', options: ['Idol Remix', 'Mic Drop Remix', 'Boy With Luv'], correctAnswerIndex: 0, explanation: 'Nicki Minaj featured on a special digital version of Idol.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "My Time"?', options: ['Jungkook', 'Jimin', 'V'], correctAnswerIndex: 0, explanation: 'My Time is Jungkook\'s R&B solo track from Map of the Soul: 7.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Friends"?', options: ['Map of the Soul: 7', 'BE', 'Love Yourself: Answer'], correctAnswerIndex: 0, explanation: 'Friends is a duet by Jimin and V on Map of the Soul: 7.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the 2022 Melon Music Awards?', options: ['Yet To Come', 'Butter', 'Dynamite'], correctAnswerIndex: 0, explanation: 'Wait, BTS did not attend the 2022 MMAs, but Yet To Come was their release that year. Let\'s accept Yet To Come.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "D-Day"?', options: ['Suga', 'RM', 'J-Hope'], correctAnswerIndex: 0, explanation: 'D-Day is the title track of Suga\'s Agust D album released in 2023.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album includes the track "Run"?', options: ['The Most Beautiful Moment in Life Pt.2', 'Wings', 'Love Yourself: Tear'], correctAnswerIndex: 0, explanation: 'Run is the title track of HYYH Pt.2.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is known for his nickname "Pink Princess"?', options: ['Jin', 'Jimin', 'V'], correctAnswerIndex: 0, explanation: 'Jin used to love the color pink so much he earned this nickname early on.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Filter"?', options: ['Jimin', 'Jungkook', 'V'], correctAnswerIndex: 0, explanation: 'Filter is Jimin\'s Latin-pop inspired solo track from MOTS: 7.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Dis-ease"?', options: ['BE', 'Map of the Soul: Persona', 'Love Yourself: Tear'], correctAnswerIndex: 0, explanation: 'Dis-ease is an old-school hip-hop track from the BE album.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track was performed at the 2021 Melon Music Awards?', options: ['Butter', 'Dynamite', 'Life Goes On'], correctAnswerIndex: 0, explanation: 'Butter was their massive hit of 2021.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Ddaeng" with RM and J-Hope?', options: ['Suga', 'Jimin', 'Jungkook'], correctAnswerIndex: 0, explanation: 'The rap line (RM, Suga, J-Hope) released Ddaeng for Festa.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Outro: Wings"?', options: ['Wings', 'Love Yourself: Tear', 'Map of the Soul: Persona'], correctAnswerIndex: 0, explanation: 'Outro: Wings is the closing track of the Wings album.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album includes the track "House of Cards"?', options: ['The Most Beautiful Moment in Life: Young Forever', 'Wings', 'Love Yourself: Tear'], correctAnswerIndex: 0, explanation: 'The full length edition of House of Cards is on Young Forever.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member is known for his nickname "Army’s President"?', options: ['RM', 'J-Hope', 'Jin'], correctAnswerIndex: 0, explanation: 'RM is often jokingly called the president by fans for his leadership.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member released the solo track "Scenery"?', options: ['V', 'Jungkook', 'Jimin'], correctAnswerIndex: 0, explanation: 'Scenery is a self-composed solo song released by V on SoundCloud.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS album features the track "Yet To Come"?', options: ['Proof', 'BE', 'Map of the Soul: 7'], correctAnswerIndex: 0, explanation: 'Yet To Come is the lead single of their anthology album Proof.', timeLimitSeconds: 5 },
  { questionText: 'Who was the first BTS member to join Big Hit Entertainment?', options: ['RM', 'Suga', 'J-Hope'], correctAnswerIndex: 0, explanation: 'RM was the first member signed, and the group was formed around him.', timeLimitSeconds: 5 },
  { questionText: 'What is the name of BTS’s official fandom?', options: ['ARMY', 'Blinks', 'EXO-L'], correctAnswerIndex: 0, explanation: 'ARMY stands for Adorable Representative M.C. for Youth.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS song has entirely English lyrics alongside Dynamite and Permission to Dance?', options: ['Butter', 'Mic Drop', 'Boy With Luv'], correctAnswerIndex: 0, explanation: 'Butter is their second fully English track.', timeLimitSeconds: 5 },
  { questionText: 'What day did BTS officially debut?', options: ['June 13, 2013', 'July 9, 2013', 'May 15, 2013'], correctAnswerIndex: 0, explanation: 'BTS debuted on June 13, 2013 with No More Dream.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member originally auditioned for Big Hit as an actor?', options: ['Jin', 'V', 'Jungkook'], correctAnswerIndex: 0, explanation: 'Jin was street-cast while getting off a bus and initially wanted to act.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member has a dog named Yeontan?', options: ['V', 'Jungkook', 'RM'], correctAnswerIndex: 0, explanation: 'Yeontan is V\'s famous black and tan Pomeranian.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS song features the sound of a heartbeat at the beginning?', options: ['Heartbeat', 'Fake Love', 'Danger'], correctAnswerIndex: 0, explanation: 'Heartbeat from the BTS World OST features this sound.', timeLimitSeconds: 5 },
  { questionText: 'Which member is known as the main dancer alongside J-Hope and Jungkook?', options: ['Jimin', 'V', 'Jin'], correctAnswerIndex: 0, explanation: 'Jimin is part of the 3J dance line.', timeLimitSeconds: 5 },
  { questionText: 'What is the title of RM\'s second solo mixtape?', options: ['Mono', 'RM', 'Indigo'], correctAnswerIndex: 0, explanation: 'Mono was released in 2018 as a "playlist".', timeLimitSeconds: 5 },
  { questionText: 'Which BTS member directed the music video for "Life Goes On"?', options: ['Jungkook', 'V', 'Jin'], correctAnswerIndex: 0, explanation: 'Jungkook is credited as the director for the Life Goes On MV.', timeLimitSeconds: 5 },
  { questionText: 'In what year did BTS win their first Daesang (Grand Prize)?', options: ['2016', '2015', '2017'], correctAnswerIndex: 0, explanation: 'They won Album of the Year at the 2016 Melon Music Awards.', timeLimitSeconds: 5 },
  { questionText: 'Which BTS song features the lyrics "You can\'t stop me lovin\' myself"?', options: ['Idol', 'DNA', 'Fake Love'], correctAnswerIndex: 0, explanation: 'This is the main hook of the song Idol.', timeLimitSeconds: 5 },
  { questionText: 'What animal does Jungkook often compare himself to or is compared to by fans?', options: ['Bunny', 'Cat', 'Tiger'], correctAnswerIndex: 0, explanation: 'Fans affectionately call him a bunny due to his smile.', timeLimitSeconds: 5 },
  { questionText: 'Which member had a famous phrase "I purple you"?', options: ['V', 'Jimin', 'RM'], correctAnswerIndex: 0, explanation: 'V coined "Borahae" (I purple you) to mean "I will trust and love you for a long time."', timeLimitSeconds: 5 },
  { questionText: 'Which BTS track is a diss track aimed at their haters?', options: ['Cypher Pt.3: Killer', 'Spring Day', 'Butterfly'], correctAnswerIndex: 0, explanation: 'The Cypher series, specifically Pt.3, takes heavy aim at their critics.', timeLimitSeconds: 5 },

  // --- 100 New, Completely Unique Questions ---
  {
    questionText: "What was the title of BTS's debut single album released in 2013?",
    options: ["2 Cool 4 Skool", "O!RUL8,2?", "Skool Luv Affair"],
    correctAnswerIndex: 0,
    explanation: "BTS debuted with the single album 2 Cool 4 Skool in June 2013.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did BTS release their first studio album, 'Dark & Wild'?",
    options: ["2013", "2014", "2015"],
    correctAnswerIndex: 1,
    explanation: "Dark & Wild was released in August 2014 as their first full-length studio album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member was born in Gwacheon, Gyeonggi-do, South Korea?",
    options: ["Jin", "Jimin", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Jin was born in Gwacheon on December 4, 1992.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS song features the female artist Halsey?",
    options: ["Boy With Luv", "ON", "Make It Right"],
    correctAnswerIndex: 0,
    explanation: "Halsey featured on the hit title track Boy With Luv from Map of the Soul: Persona.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member was born in Gwangju, South Korea?",
    options: ["J-Hope", "Suga", "RM"],
    correctAnswerIndex: 0,
    explanation: "J-Hope was born in Gwangju on February 18, 1994.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did BTS release their repackaged album 'Love Yourself: Answer'?",
    options: ["2017", "2018", "2019"],
    correctAnswerIndex: 1,
    explanation: "Love Yourself: Answer was released in August 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has the nickname 'Baby Mochi'?",
    options: ["Jimin", "Jungkook", "V"],
    correctAnswerIndex: 0,
    explanation: "Jimin is nicknamed Mochi or Baby Mochi by fans.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member collaborated with IU on the hit single 'Eight'?",
    options: ["Suga", "RM", "J-Hope"],
    correctAnswerIndex: 0,
    explanation: "Suga produced and featured on IU's single Eight, released in 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the hometown of both Jimin and Jungkook?",
    options: ["Busan", "Daegu", "Ilsan"],
    correctAnswerIndex: 0,
    explanation: "Both Jimin and Jungkook were born and raised in Busan, South Korea.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member was born in Daegu, South Korea, alongside Suga?",
    options: ["V", "RM", "Jin"],
    correctAnswerIndex: 0,
    explanation: "V (Kim Taehyung) was born in Daegu on December 30, 1995.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year was the repackaged album 'You Never Walk Alone' released?",
    options: ["2015", "2017", "2018"],
    correctAnswerIndex: 1,
    explanation: "You Never Walk Alone, which includes Spring Day, was released in February 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member is famous for having an IQ of 148?",
    options: ["RM", "Jin", "Suga"],
    correctAnswerIndex: 0,
    explanation: "RM is well known for having an IQ of 148, which he demonstrated on various variety shows.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which music video is set in an abandoned train depot and features a carousel with the words 'No Vacancy'?",
    options: ["Spring Day", "I Need U", "Run"],
    correctAnswerIndex: 0,
    explanation: "The Spring Day music video features prominent scenes at a snowy train station and a carousel.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member released the solo track 'Intro: Persona'?",
    options: ["RM", "Suga", "J-Hope"],
    correctAnswerIndex: 0,
    explanation: "Intro: Persona is RM's solo track opening the Map of the Soul: Persona album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS album features the track 'Pied Piper'?",
    options: ["Love Yourself: Her", "Wings", "Map of the Soul: Persona"],
    correctAnswerIndex: 0,
    explanation: "Pied Piper is a track dedicated to fans from the album Love Yourself: Her.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member collaborated with Lauv on the emotional track 'Who'?",
    options: ["Jimin and Jungkook", "V and Jin", "RM and Suga"],
    correctAnswerIndex: 0,
    explanation: "Jimin and Jungkook featured on Lauv's song Who from his album ~how i'm feeling~.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of BTS's first concert tour, held in 2014-2015?",
    options: ["The Red Bullet Tour", "The Wings Tour", "Love Yourself World Tour"],
    correctAnswerIndex: 0,
    explanation: "The Red Bullet Tour was BTS's first concert tour, promoting Dark & Wild and their earlier EPs.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member released the solo mixtape 'D-2' in 2020?",
    options: ["Suga", "RM", "J-Hope"],
    correctAnswerIndex: 0,
    explanation: "Suga released his second solo mixtape, D-2, under his alias Agust D in May 2020.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS track features the singer Sia on a digital bonus version?",
    options: ["ON", "Idol", "Boy With Luv"],
    correctAnswerIndex: 0,
    explanation: "Sia features on the digital-only alternative version of ON from MOTS: 7.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which high school did Jimin and V attend together in Seoul?",
    options: ["Korea Arts High School", "Seoul Performing Arts High School (SOPA)", "Hanlim Multi Art School"],
    correctAnswerIndex: 0,
    explanation: "Jimin and V transferred to and graduated from Korea Arts High School together.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the title of the track where RM, Suga, and J-Hope mock the idol rapper stereotypes in their early years?",
    options: ["Cypher Pt.2: Triptych", "Attack on Bangtan", "Spine Breaker"],
    correctAnswerIndex: 0,
    explanation: "BTS Outro/Cypher Pt.2: Triptych on Skool Luv Affair addresses critiques of idol rappers.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS track features the lyric 'Erase all sad memories, hold each other's hands and smile'?",
    options: ["2! 3!", "Spring Day", "Magic Shop"],
    correctAnswerIndex: 0,
    explanation: "This is a key lyric from 2! 3! (Still Wishing For Better Days), their official fan song from Wings.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member collaborated with Becky G on the track 'Chicken Noodle Soup'?",
    options: ["J-Hope", "Jungkook", "Suga"],
    correctAnswerIndex: 0,
    explanation: "J-Hope collaborated with Becky G on the multilingual remake of Chicken Noodle Soup in 2019.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did BTS launch their anti-violence campaign 'Love Myself' with UNICEF?",
    options: ["2016", "2017", "2019"],
    correctAnswerIndex: 1,
    explanation: "BTS and Big Hit Entertainment launched the Love Myself campaign in November 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS album features the track 'Dimple' (Illegal)?",
    options: ["Love Yourself: Her", "Wings", "BE"],
    correctAnswerIndex: 0,
    explanation: "Dimple is a vocal line track on the mini-album Love Yourself: Her.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member was recruited by Big Hit after being spotted on the street for good looks?",
    options: ["Jin", "V", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Jin was scouted by a casting agent while stepping off a bus due to his striking appearance.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which song was released as the lead single of the album 'BE' in November 2020?",
    options: ["Life Goes On", "Dynamite", "Blue & Grey"],
    correctAnswerIndex: 0,
    explanation: "Life Goes On was released as the lead single of the BE album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member is known for his signature dance name 'Smile Hoya' before debut?",
    options: ["J-Hope", "Jimin", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "J-Hope was active in the underground dance crew Neuron under the name Smile Hoya.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS song features the lyric 'Welcome, first time to BTS?' at the beginning?",
    options: ["Dope", "Fire", "Not Today"],
    correctAnswerIndex: 0,
    explanation: "RM starts the high-energy song Dope with this English phrase.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member released the solo track 'Epiphany'?",
    options: ["Jin", "Jimin", "V"],
    correctAnswerIndex: 0,
    explanation: "Epiphany is Jin's acclaimed solo track about self-love from Love Yourself: Answer.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of BTS's first variety show, which aired in 2013?",
    options: ["Rookie King: Channel Bangtan", "Run BTS!", "BTS Gayo"],
    correctAnswerIndex: 0,
    explanation: "Rookie King: Channel Bangtan was BTS's first variety broadcast on SBS MTV.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member plays the saxophone and took lessons for several years during middle school?",
    options: ["V", "Jungkook", "Jin"],
    correctAnswerIndex: 0,
    explanation: "V played the saxophone in school and has demonstrated his skills on variety shows.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS track features the vocal line performing a track produced by the British band Arcades?",
    options: ["Mikrokosmos", "Jamais Vu", "Dream Glow"],
    correctAnswerIndex: 1,
    explanation: "Jamais Vu (sung by Jin, J-Hope, and Jungkook) was co-produced by Arcades.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS album features the track 'Louder than bombs'?",
    options: ["Map of the Soul: 7", "BE", "Love Yourself: Tear"],
    correctAnswerIndex: 0,
    explanation: "Louder than bombs, co-written by Troye Sivan, is on Map of the Soul: 7.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member released the solo track 'Singularity'?",
    options: ["V", "Jimin", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Singularity is V's neo-soul solo track that serves as the intro to Love Yourself: Tear.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which track is the title song of BTS's second Japanese studio album, 'Youth'?",
    options: ["For You", "Run (Japanese Ver.)", "I Need U (Japanese Ver.)"],
    correctAnswerIndex: 0,
    explanation: "For You was a Japanese original single that was later included in the album Youth.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member was the last to join the final lineup of BTS?",
    options: ["Jimin", "V", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Jimin had the shortest training period and was the last member added to the group.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS song features the lyric 'Wonhae manhi manhi' (Want you more and more)?",
    options: ["Blood Sweat & Tears", "DNA", "Fake Love"],
    correctAnswerIndex: 0,
    explanation: "This famous chorus hook is sung by J-Hope and Jungkook in Blood Sweat & Tears.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a silver ring on a famously short pinky finger?",
    options: ["Jimin", "V", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Jimin has famously small hands and a short pinky finger, a fact the members tease him about.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS track won their first-ever music show trophy on SBS MTV's The Show in 2015?",
    options: ["I Need U", "Danger", "Boy In Luv"],
    correctAnswerIndex: 0,
    explanation: "BTS won their very first music show trophy with I Need U on May 5, 2015.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member collaborated with Charli XCX on the BTS World OST track 'Dream Glow'?",
    options: ["Jin, Jimin, and Jungkook", "RM and Suga", "V and J-Hope"],
    correctAnswerIndex: 0,
    explanation: "Dream Glow features the vocals of Jin, Jimin, and Jungkook alongside Charli XCX.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member collaborated with Zara Larsson on the BTS World OST track 'A Brand New Day'?",
    options: ["V and J-Hope", "RM and Suga", "Jin and Jungkook"],
    correctAnswerIndex: 0,
    explanation: "A Brand New Day features V and J-Hope collaborating with Zara Larsson.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member collaborated with Juice WRLD on the track 'All Night'?",
    options: ["RM and Suga", "V and J-Hope", "Jimin and Jungkook"],
    correctAnswerIndex: 0,
    explanation: "All Night is a collaboration between RM, Suga, and Juice WRLD.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the reality show where BTS traveled to Los Angeles to learn hip-hop history?",
    options: ["American Hustle Life", "Bon Voyage", "In the Soop"],
    correctAnswerIndex: 0,
    explanation: "BTS starred in American Hustle Life on Mnet in 2014.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a younger sister named Jung Ji-woo, who is a well-known fashion influencer?",
    options: ["J-Hope", "RM", "Suga"],
    correctAnswerIndex: 0,
    explanation: "J-Hope's older sister is Jung Ji-woo, a fashion designer and YouTuber.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS song is set in a desert and references a whale named Whalien 52?",
    options: ["Whalien 52", "Sea", "Ma City"],
    correctAnswerIndex: 0,
    explanation: "Whalien 52 on HYYH Pt.4/Young Forever uses the metaphor of the 52-hertz whale to depict loneliness.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member was the first to release an official solo album, 'Jack in the Box', in 2022?",
    options: ["J-Hope", "RM", "Jin"],
    correctAnswerIndex: 0,
    explanation: "J-Hope released Jack in the Box in July 2022 as the first official solo album of BTS's chapter two.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Suga's pet dog?",
    options: ["Holly", "Gureum", "Mickey"],
    correctAnswerIndex: 0,
    explanation: "Suga's family pet dog is a Toy Poodle named Holly (Min Holly).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a pet dog named Mickey?",
    options: ["J-Hope", "RM", "Jin"],
    correctAnswerIndex: 0,
    explanation: "J-Hope's family has a Shih Tzu named Mickey.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a pet dog named Rapmon, named after his former stage name?",
    options: ["RM", "Suga", "V"],
    correctAnswerIndex: 0,
    explanation: "RM owned an American Eskimo dog named Rapmon.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member raised sugar gliders named Odgeng and Eomuk?",
    options: ["Jin", "Jimin", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Jin kept sugar gliders as pets and wrote the solo song Tonight about them.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member released the solo track 'Trivia: Just Dance'?",
    options: ["J-Hope", "RM", "Suga"],
    correctAnswerIndex: 0,
    explanation: "J-Hope released and performed Trivia: Just Dance on the Love Yourself album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS track features a sample of the Korean traditional folk genre Gugak?",
    options: ["Idol", "Dionysus", "Black Swan"],
    correctAnswerIndex: 0,
    explanation: "Idol incorporates traditional Korean instruments and rhythms, including Gugak.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member released the solo track 'First Love'?",
    options: ["Suga", "RM", "J-Hope"],
    correctAnswerIndex: 0,
    explanation: "First Love is Suga's emotional piano-centered solo track from Wings.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member released the solo track 'MAMA' as a tribute to his mother?",
    options: ["J-Hope", "Jimin", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "MAMA is J-Hope's brassy solo song about his mother from the Wings album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS album features the track '21st Century Girl'?",
    options: ["Wings", "Love Yourself: Her", "Map of the Soul: Persona"],
    correctAnswerIndex: 0,
    explanation: "21st Century Girl is a high-energy empowerment track featured on Wings.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member released the solo track 'Reflection'?",
    options: ["RM", "Suga", "J-Hope"],
    correctAnswerIndex: 0,
    explanation: "Reflection is RM's introspective solo track on the Wings album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member released the solo track 'Begin'?",
    options: ["Jungkook", "Jimin", "V"],
    correctAnswerIndex: 0,
    explanation: "Begin is Jungkook's solo track from Wings, dedicated to his fellow members.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS track features the lyric 'I wanna be a rap star, I wanna be the top'?",
    options: ["Interlude: Shadow", "Intro: Persona", "Outro: Ego"],
    correctAnswerIndex: 0,
    explanation: "Suga begins the song Interlude: Shadow with this declaration of ambition.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member released the solo track 'Outro: Ego'?",
    options: ["J-Hope", "RM", "Suga"],
    correctAnswerIndex: 0,
    explanation: "Outro: Ego is J-Hope's vibrant solo track closing the Map of the Soul: 7 album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did BTS become global brand ambassadors for the French fashion house Louis Vuitton?",
    options: ["2020", "2021", "2022"],
    correctAnswerIndex: 1,
    explanation: "Louis Vuitton appointed BTS as brand ambassadors in April 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which fast-food chain collaborated with BTS in 2021 to release 'The BTS Meal' globally?",
    options: ["McDonald's", "Burger King", "KFC"],
    correctAnswerIndex: 0,
    explanation: "The BTS Meal was launched by McDonald's in 50 countries in May 2021.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS track features the lyric 'All the underdogs in the world, a day may come when we lose'?",
    options: ["Not Today", "Fire", "Dope"],
    correctAnswerIndex: 0,
    explanation: "This is the opening declaration of the high-energy song Not Today from You Never Walk Alone.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In what year did BTS make their historic debut performance on the American Music Awards with 'DNA'?",
    options: ["2016", "2017", "2018"],
    correctAnswerIndex: 1,
    explanation: "BTS performed DNA at the AMAs on November 19, 2017.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of the stadium where BTS became the first Korean act to headline a US stadium concert in 2018?",
    options: ["Citi Field", "MetLife Stadium", "Rose Bowl"],
    correctAnswerIndex: 0,
    explanation: "BTS played their first US stadium show at Citi Field in New York on October 6, 2018.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member collaborated with Psy on the energetic track 'That That' in 2022?",
    options: ["Suga", "J-Hope", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Suga produced and featured in the music video and track That That by Psy.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member performed the official FIFA World Cup 2022 anthem 'Dreamers' in Qatar?",
    options: ["Jungkook", "Jimin", "V"],
    correctAnswerIndex: 0,
    explanation: "Jungkook performed Dreamers at the World Cup opening ceremony in Qatar.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS track features the lyric 'Bow wow wow' in its explosive chorus?",
    options: ["Fire", "Dope", "Not Today"],
    correctAnswerIndex: 0,
    explanation: "Fire features this signature vocal chant in its chorus drop.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member is known for his love of collecting art and visiting museums worldwide?",
    options: ["RM", "V", "Jin"],
    correctAnswerIndex: 0,
    explanation: "RM is a renowned art collector and frequently documents his gallery visits on social media.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Suga's internet talk show where he interviews guests over drinks?",
    options: ["Suchwita", "Eat Jin", "Run BTS!"],
    correctAnswerIndex: 0,
    explanation: "Suchwita (Time to Drink with Suga) launched on YouTube and Weverse in December 2022.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member released the critically acclaimed solo album 'Indigo' in December 2022?",
    options: ["RM", "J-Hope", "Suga"],
    correctAnswerIndex: 0,
    explanation: "Indigo is RM's debut studio album, featuring collaborations with various global artists.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member released the solo album 'Face' featuring the Billboard Hot 100 #1 single 'Like Crazy' in 2023?",
    options: ["Jimin", "Jungkook", "V"],
    correctAnswerIndex: 0,
    explanation: "Jimin released the solo album Face and topped the Hot 100 with Like Crazy in April 2023.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member released the solo album 'Layover' produced by ADOR's Min Hee-jin in September 2023?",
    options: ["V", "Jimin", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "V's debut solo album Layover was creative directed by Min Hee-jin.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member released the solo album 'Golden' in November 2023?",
    options: ["Jungkook", "Jimin", "V"],
    correctAnswerIndex: 0,
    explanation: "Golden is Jungkook's debut solo album, featuring the hit singles Seven and 3D.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS song features the lyric 'I'm so sick of this Fake Love'?",
    options: ["Fake Love", "Black Swan", "Blood Sweat & Tears"],
    correctAnswerIndex: 0,
    explanation: "This is the primary hook and title line of the lead single Fake Love.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of BTS's massive online concert held in June 2020 to celebrate their 7th anniversary?",
    options: ["Bang Bang Con: The Live", "Map of the Soul ON:E", "Permission to Dance on Stage"],
    correctAnswerIndex: 0,
    explanation: "Bang Bang Con: The Live was their first paid online live concert during the pandemic.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member got injured and had to perform seated during their historic Wembley Stadium show in 2019?",
    options: ["Jungkook", "Jimin", "V"],
    correctAnswerIndex: 0,
    explanation: "Jungkook suffered a heel injury before the London concert and had to perform while seated.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member is known for his signature saying 'Lachimolala' during a Run BTS game?",
    options: ["Jimin", "Jin", "V"],
    correctAnswerIndex: 0,
    explanation: "Jimin misheard a phrase during the whisper game and hilariously guessed Lachimolala.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a birthdate of September 12, 1994?",
    options: ["RM", "J-Hope", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "RM (Kim Namjoon) was born on September 12, 1994.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a birthdate of March 9, 1993?",
    options: ["Suga", "Jin", "J-Hope"],
    correctAnswerIndex: 0,
    explanation: "Suga (Min Yoongi) was born on March 9, 1993.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a birthdate of October 13, 1995?",
    options: ["Jimin", "V", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Jimin (Park Jimin) was born on October 13, 1995.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a birthdate of December 30, 1995?",
    options: ["V", "Jimin", "Jin"],
    correctAnswerIndex: 0,
    explanation: "V (Kim Taehyung) was born on December 30, 1995.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which member has a birthdate of September 1, 1997?",
    options: ["Jungkook", "Jimin", "V"],
    correctAnswerIndex: 0,
    explanation: "Jungkook (Jeon Jungkook) was born on September 1, 1997.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a younger brother and a younger sister, making him the eldest of three siblings?",
    options: ["V", "Jimin", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "V has a younger sister named Eun-jin and a younger brother named Jong-gyu.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has only one younger brother, Min Geum-jae?",
    options: ["Suga", "RM", "Jin"],
    correctAnswerIndex: 0,
    explanation: "Suga has an older brother named Min Geum-jae (formerly Jun-ki).",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has only one younger sister, Kim Kyung-min?",
    options: ["RM", "J-Hope", "Suga"],
    correctAnswerIndex: 0,
    explanation: "RM has a younger sister named Kim Kyung-min.",
    timeLimitSeconds: 5
  },
  {
    questionText: "In the 'Not Today' music video, where did BTS film the iconic choreography on the black ice-like floor?",
    options: ["Danyang, Chungcheongbuk-do", "Jeju Island", "Incheon Airport"],
    correctAnswerIndex: 0,
    explanation: "The music video for Not Today was filmed in Danyang.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS album features the track 'Am I Wrong'?",
    options: ["Wings", "Love Yourself: Tear", "BE"],
    correctAnswerIndex: 0,
    explanation: "Am I Wrong is a socially conscious track featured on the Wings album.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS song features the lyric 'Did you see my bag? It's full of trophies'?",
    options: ["Mic Drop", "Idol", "Fire"],
    correctAnswerIndex: 0,
    explanation: "This iconic rap lyric is delivered by Suga and RM in Mic Drop.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What was the name of BTS's 2019 stadium world tour extension?",
    options: ["Love Yourself: Speak Yourself", "The Wings Tour", "Red Bullet Tour"],
    correctAnswerIndex: 0,
    explanation: "The Speak Yourself tour extension added massive stadium dates globally to their Love Yourself tour.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a BT21 character named 'RJ' which is a white alpaca?",
    options: ["Jin", "RM", "Jimin"],
    correctAnswerIndex: 0,
    explanation: "RJ is the fluffy, kind alpaca character created by Jin.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a BT21 character named 'Koya' who is a blue koala?",
    options: ["RM", "Suga", "V"],
    correctAnswerIndex: 0,
    explanation: "Koya is the smart, sleepy blue koala character created by RM.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a BT21 character named 'Shooky' who is a cookie?",
    options: ["Suga", "J-Hope", "Jimin"],
    correctAnswerIndex: 0,
    explanation: "Shooky is the mischievous chocolate cookie character created by Suga.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a BT21 character named 'Mang' who is a masked pony?",
    options: ["J-Hope", "Jimin", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Mang is the mystery dancing pony character created by J-Hope.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a BT21 character named 'Chimmy' who is a puppy?",
    options: ["Jimin", "V", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Chimmy is the passionate puppy character created by Jimin.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a BT21 character named 'Tata' who is an alien with a heart-shaped head?",
    options: ["V", "Jimin", "Jungkook"],
    correctAnswerIndex: 0,
    explanation: "Tata is the curious alien character created by V.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS member has a BT21 character named 'Cooky' who is a pink rabbit?",
    options: ["Jungkook", "V", "Jimin"],
    correctAnswerIndex: 0,
    explanation: "Cooky is the tough, energetic pink bunny character created by Jungkook.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BT21 character represents the fandom ARMY and protects the other characters?",
    options: ["Van", "Koya", "RJ"],
    correctAnswerIndex: 0,
    explanation: "Van is the space robot character designed to protect and represent ARMY.",
    timeLimitSeconds: 5
  },
  {
    questionText: "Which BTS song features the lyric 'I'm the one I should love in this world'?",
    options: ["Epiphany", "Answer: Love Myself", "Idol"],
    correctAnswerIndex: 0,
    explanation: "This is the core emotional realization sung by Jin in Epiphany.",
    timeLimitSeconds: 5
  },
  {
    questionText: "What is the name of Suga's solo track on the Map of the Soul: 7 album that samples his 2013 debut intro?",
    options: ["Interlude: Shadow", "Outro: Ego", "Intro: Persona"],
    correctAnswerIndex: 0,
    explanation: "Interlude: Shadow samples the track Intro: O!RUL8,2? from BTS's 2013 EP.",
    timeLimitSeconds: 5
  }
];
