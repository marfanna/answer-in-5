import { Question } from './mockData';

export const LANDMARKS_OCEANS_QUESTIONS: Omit<Question, 'id' | 'categoryId' | 'subCategoryId'>[] = [
  {
    questionText: 'The Southern Ocean was officially recognized as the fifth ocean by the National Geographic Society in what year?',
    options: ['2000', '2021', '1995', '2010'],
    correctAnswerIndex: 1,
    explanation: 'While recognized by the IHO earlier, National Geographic officially recognized the Southern Ocean in June 2021.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The Sargasso Sea is unique because it is the only sea on Earth which has no coastline. In which ocean is it located?',
    options: ['Pacific Ocean', 'Indian Ocean', 'Atlantic Ocean', 'Southern Ocean'],
    correctAnswerIndex: 2,
    explanation: 'The Sargasso Sea is a region of the Atlantic Ocean bounded by four currents forming an ocean gyre.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'Which oceanic current flows continuously eastward around Antarctica, effectively isolating the continent from warm ocean waters?',
    options: ['Gulf Stream', 'Antarctic Circumpolar Current', 'Agulhas Current', 'Kuroshio Current'],
    correctAnswerIndex: 1,
    explanation: 'The Antarctic Circumpolar Current (ACC) is the strongest ocean current and keeps warm water away from Antarctica.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The Great Mosque of Djenné, the largest mud-brick building in the world, is a famous landmark located in which African country?',
    options: ['Morocco', 'Nigeria', 'Mali', 'Egypt'],
    correctAnswerIndex: 2,
    explanation: 'The Great Mosque of Djenné is located in the city of Djenné, Mali, on the flood plain of the Bani River.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'Which ancient Mesoamerican city, located near modern-day Mexico City, contains the Pyramid of the Sun and the Pyramid of the Moon?',
    options: ['Chichen Itza', 'Teotihuacan', 'Tenochtitlan', 'Palenque'],
    correctAnswerIndex: 1,
    explanation: 'Teotihuacan is an ancient Mesoamerican city known for its large pyramids dedicated to the sun and moon.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The moai statues of Easter Island were carved by the Rapa Nui people. Which modern country currently administers Easter Island?',
    options: ['Peru', 'Ecuador', 'Chile', 'Argentina'],
    correctAnswerIndex: 2,
    explanation: 'Easter Island is a special territory of Chile, located in the southeastern Pacific Ocean.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The ancient ruins of Mohenjo-Daro, one of the largest settlements of the ancient Indus Valley Civilization, are located in which present-day country?',
    options: ['India', 'Afghanistan', 'Pakistan', 'Iran'],
    correctAnswerIndex: 2,
    explanation: 'Mohenjo-Daro was built around 2500 BCE and is located in the Sindh province of Pakistan.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'Angkor Wat was originally constructed in the first half of the 12th century as a Hindu temple complex. Which empire built it?',
    options: ['Majapahit Empire', 'Khmer Empire', 'Chola Dynasty', 'Srivijaya Empire'],
    correctAnswerIndex: 1,
    explanation: 'Angkor Wat was built by the Khmer King Suryavarman II in the early 12th century.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The Alhambra, a stunning palace and fortress complex that showcases Moorish architecture, is located in which Spanish city?',
    options: ['Seville', 'Cordoba', 'Granada', 'Madrid'],
    correctAnswerIndex: 2,
    explanation: 'The Alhambra is located in Granada, Andalusia, Spain, and was built by the Nasrid dynasty.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'Machu Picchu was built in the 15th century at the height of the Inca Empire. Which Inca emperor is believed to have commissioned its construction?',
    options: ['Atahualpa', 'Pachacuti', 'Huayna Capac', 'Manco Inca'],
    correctAnswerIndex: 1,
    explanation: 'Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'What is the name of the primary sculptor who designed the Mount Rushmore National Memorial?',
    options: ['Auguste Rodin', 'Gutzon Borglum', 'Frédéric Auguste Bartholdi', 'Daniel Chester French'],
    correctAnswerIndex: 1,
    explanation: 'Gutzon Borglum designed the sculpture and oversaw its execution from 1927 until his death in 1941.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'Which ocean is considered the shallowest and smallest of the world\'s five major oceans?',
    options: ['Indian Ocean', 'Southern Ocean', 'Arctic Ocean', 'Atlantic Ocean'],
    correctAnswerIndex: 2,
    explanation: 'The Arctic Ocean is the smallest and shallowest, completely surrounded by Eurasia and North America.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The Neuschwanstein Castle, known for inspiring the Sleeping Beauty Castle in Disneyland, was commissioned by which historical figure?',
    options: ['King Ludwig II of Bavaria', 'Kaiser Wilhelm II', 'Frederick the Great', 'Otto von Bismarck'],
    correctAnswerIndex: 0,
    explanation: 'King Ludwig II of Bavaria commissioned the palace as a retreat and in honor of Richard Wagner.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'Which of the following famous landmarks is NOT located in Rome, Italy?',
    options: ['The Pantheon', 'Trevi Fountain', 'The Uffizi Gallery', 'Castel Sant\'Angelo'],
    correctAnswerIndex: 2,
    explanation: 'The Uffizi Gallery is a prominent art museum located in Florence, not Rome.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The Mariana Trench contains the deepest known point in the Earth\'s seabed. What is the specific name of this deepest point?',
    options: ['Sirena Deep', 'Tonga Trench', 'Challenger Deep', 'Milwaukee Depth'],
    correctAnswerIndex: 2,
    explanation: 'The Challenger Deep is the deepest known point of the seabed, located in the Mariana Trench.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The Banaue Rice Terraces, often referred to as the "Eighth Wonder of the World," were carved into the mountains of which country over 2,000 years ago?',
    options: ['Vietnam', 'China', 'Philippines', 'Indonesia'],
    correctAnswerIndex: 2,
    explanation: 'The Banaue Rice Terraces are located in the mountains of Ifugao in the Philippines.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The ancient rock-cut architecture of Petra is famously carved into what type of stone?',
    options: ['Limestone', 'Sandstone', 'Granite', 'Basalt'],
    correctAnswerIndex: 1,
    explanation: 'Petra is famously known as the "Rose City" due to the color of the sandstone out of which it is carved.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'Which major ocean does the Prime Meridian (0° longitude) NOT pass through?',
    options: ['Atlantic Ocean', 'Arctic Ocean', 'Southern Ocean', 'Indian Ocean'],
    correctAnswerIndex: 3,
    explanation: 'The Prime Meridian passes through the Arctic, Atlantic, and Southern Oceans, but not the Indian Ocean.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'The famous landmark "Christ the Redeemer" is an Art Deco statue located in Rio de Janeiro. Who was its primary French sculptor?',
    options: ['Paul Landowski', 'Heitor da Silva Costa', 'Gheorghe Leonida', 'Albert Caquot'],
    correctAnswerIndex: 0,
    explanation: 'Paul Landowski was the French sculptor who created the statue, while Heitor da Silva Costa was the Brazilian engineer.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'Located in Jordan, the ancient city of Petra was originally the capital of which ancient nomadic Arab people?',
    options: ['The Bedouins', 'The Nabataeans', 'The Phoenicians', 'The Sumerians'],
    correctAnswerIndex: 1,
    explanation: 'Petra was the capital of the Nabataean Kingdom, a wealthy and powerful nomadic tribe.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a large white marble mausoleum in Agra, India, built by a Mughal emperor for his favorite wife. What am I?',
    options: ['Qutb Minar', 'Taj Mahal', 'Red Fort', 'Hawa Mahal'],
    correctAnswerIndex: 1,
    explanation: 'The Taj Mahal was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am an ancient citadel situated on a mountain ridge above the Sacred Valley in Peru, often called the "Lost City of the Incas". What am I?',
    options: ['Chichen Itza', 'Teotihuacan', 'Tikal', 'Machu Picchu'],
    correctAnswerIndex: 3,
    explanation: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the smallest and shallowest of the world\'s five major oceans, located almost entirely within the northern polar region. What am I?',
    options: ['Southern Ocean', 'Indian Ocean', 'Arctic Ocean', 'Atlantic Ocean'],
    correctAnswerIndex: 2,
    explanation: 'The Arctic Ocean is the smallest and shallowest of the world\'s five major oceans.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a vast body of water bounded by Asia to the north, Africa to the west, and Australia to the east. What am I?',
    options: ['Indian Ocean', 'Pacific Ocean', 'Atlantic Ocean', 'Southern Ocean'],
    correctAnswerIndex: 0,
    explanation: 'The Indian Ocean is the third-largest of the world\'s oceanic divisions.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am an immense amphitheatre in the center of Rome, the largest ever built in the Roman Empire. What am I?',
    options: ['Pantheon', 'Colosseum', 'Roman Forum', 'Circus Maximus'],
    correctAnswerIndex: 1,
    explanation: 'The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am an iron lattice tower situated on the Champ de Mars in Paris, built for the 1889 World\'s Fair. What am I?',
    options: ['Eiffel Tower', 'Arc de Triomphe', 'Notre-Dame', 'Louvre Pyramid'],
    correctAnswerIndex: 0,
    explanation: 'The Eiffel Tower is a wrought-iron lattice tower named after the engineer Gustave Eiffel.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the longest river in the world, flowing northwards through northeastern Africa to drain into the Mediterranean Sea. What am I?',
    options: ['Amazon River', 'Yangtze River', 'Nile River', 'Congo River'],
    correctAnswerIndex: 2,
    explanation: 'The Nile is a major north-flowing river in northeastern Africa, generally regarded as the longest river in the world.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a colossal coral reef system off the coast of Queensland, Australia, so large I can be seen from outer space. What am I?',
    options: ['Belize Barrier Reef', 'Great Barrier Reef', 'New Caledonia Reef', 'Florida Reef Tract'],
    correctAnswerIndex: 1,
    explanation: 'The Great Barrier Reef is the world\'s largest coral reef system composed of over 2,900 individual reefs.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a European country located in the Balkans, and I share a western border with Italy. What country am I?',
    options: ['Croatia', 'Serbia', 'Slovenia', 'Bosnia and Herzegovina'],
    correctAnswerIndex: 2,
    explanation: 'Slovenia is a country in Central Europe bordering Italy to the west, Austria to the north, Hungary to the northeast, and Croatia to the southeast.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a sovereign state in East Asia bordered by Russia and China, known as the most sparsely populated independent country in the world. What am I?',
    options: ['Kazakhstan', 'Mongolia', 'Namibia', 'Australia'],
    correctAnswerIndex: 1,
    explanation: 'Mongolia is a landlocked country in East Asia. Due to its vast size and small population, it is the most sparsely populated fully sovereign country.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a colossal neoclassical sculpture on Liberty Island in New York Harbor, originally a gift from the people of France. What am I?',
    options: ['Christ the Redeemer', 'Statue of Liberty', 'Mount Rushmore', 'Lincoln Memorial'],
    correctAnswerIndex: 1,
    explanation: 'The Statue of Liberty is a copper statue dedicated in 1886, representing Libertas, the Roman goddess of liberty.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the tallest building in the world, stretching over 828 meters into the sky of Dubai. What am I?',
    options: ['Shanghai Tower', 'Abraj Al-Bait', 'Burj Khalifa', 'One World Trade Center'],
    correctAnswerIndex: 2,
    explanation: 'The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates, holding the record for the world\'s tallest building since 2009.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a vast, arid desert covering much of North Africa, making me the largest hot desert in the world. What am I?',
    options: ['Gobi Desert', 'Kalahari Desert', 'Arabian Desert', 'Sahara Desert'],
    correctAnswerIndex: 3,
    explanation: 'The Sahara is the largest hot desert in the world, spanning multiple countries across North Africa.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am an ancient series of fortifications stretching thousands of miles across northern China, originally built to protect against nomadic groups. What am I?',
    options: ['Great Wall of China', 'Walls of Babylon', 'Hadrian\'s Wall', 'Antonine Wall'],
    correctAnswerIndex: 0,
    explanation: 'The Great Wall of China is a series of fortifications built across the historical northern borders of ancient Chinese states.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a massive, visually overwhelming gorge carved by the Colorado River in Arizona. What am I?',
    options: ['Antelope Canyon', 'Grand Canyon', 'Zion Canyon', 'Bryce Canyon'],
    correctAnswerIndex: 1,
    explanation: 'The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a country that is also a continent unto itself, famous for kangaroos, koalas, and the vast Outback. What am I?',
    options: ['New Zealand', 'South Africa', 'Australia', 'Brazil'],
    correctAnswerIndex: 2,
    explanation: 'Australia is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the highest mountain above sea level, located in the Himalayas on the border of Nepal and China. What am I?',
    options: ['K2', 'Kangchenjunga', 'Mount Kilimanjaro', 'Mount Everest'],
    correctAnswerIndex: 3,
    explanation: 'Mount Everest is Earth\'s highest mountain above sea level, reaching an elevation of 8,848 meters.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a vibrant city-state in Southeast Asia that consists of one main island and 63 satellite islands, often called the "Lion City". What am I?',
    options: ['Hong Kong', 'Singapore', 'Macau', 'Monaco'],
    correctAnswerIndex: 1,
    explanation: 'Singapore is a sovereign island city-state in maritime Southeast Asia, famous for its rapid development and cultural diversity.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a body of seawater separating the Arabian Peninsula from northeastern Africa. What am I?',
    options: ['Black Sea', 'Mediterranean Sea', 'Red Sea', 'Caspian Sea'],
    correctAnswerIndex: 2,
    explanation: 'The Red Sea is a seawater inlet of the Indian Ocean, lying between Africa and Asia.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a towering, highly complex Roman Catholic minor basilica in Barcelona, designed by Antoni Gaudí and still unfinished. What am I?',
    options: ['Sagrada Familia', 'St. Peter\'s Basilica', 'Notre-Dame', 'Milan Cathedral'],
    correctAnswerIndex: 0,
    explanation: 'The Basílica de la Sagrada Família is a massive, unfinished Roman Catholic minor basilica in Barcelona, Catalonia, Spain.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am an iconic suspended bridge in San Francisco, known for my "International Orange" color and beautiful Art Deco design. What am I?',
    options: ['Brooklyn Bridge', 'Tower Bridge', 'Golden Gate Bridge', 'Sydney Harbour Bridge'],
    correctAnswerIndex: 2,
    explanation: 'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a country in South America, uniquely long and narrow, stretching along the western edge of the continent bordering the Pacific Ocean. What am I?',
    options: ['Argentina', 'Peru', 'Ecuador', 'Chile'],
    correctAnswerIndex: 3,
    explanation: 'Chile is situated along the western seaboard of South America. It is the southernmost country in the world and very long and narrow.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a massive sandstone monolithic rock formation in the Northern Territory of Australia, sacred to the indigenous Pitjantjatjara people. What am I?',
    options: ['Mount Augustus', 'Wave Rock', 'Uluru', 'Devils Marbles'],
    correctAnswerIndex: 2,
    explanation: 'Uluru, also known as Ayers Rock, is a large sandstone formation in the southern part of the Northern Territory in Australia.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a massive transcontinental country spanning Eastern Europe and Northern Asia, making me the largest country in the world by area. What am I?',
    options: ['Canada', 'China', 'United States', 'Russia'],
    correctAnswerIndex: 3,
    explanation: 'Russia is the largest country in the world by surface area, extending across eleven time zones.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a pre-Columbian Mayan city located on the Yucatán Peninsula in Mexico, famous for the Temple of Kukulcan pyramid. What am I?',
    options: ['Chichen Itza', 'Palenque', 'Tikal', 'Copán'],
    correctAnswerIndex: 0,
    explanation: 'Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a group of volcanic islands in the Pacific Ocean west of Ecuador, famous for the unique wildlife that inspired Charles Darwin. What am I?',
    options: ['Canary Islands', 'Falkland Islands', 'Galápagos Islands', 'Hawaiian Islands'],
    correctAnswerIndex: 2,
    explanation: 'The Galápagos Islands are a province of Ecuador, renowned for their large number of endemic species.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the second-largest of the world\'s oceans, separating the Americas from Europe and Africa. What am I?',
    options: ['Pacific Ocean', 'Indian Ocean', 'Southern Ocean', 'Atlantic Ocean'],
    correctAnswerIndex: 3,
    explanation: 'The Atlantic Ocean is the second-largest of the world\'s oceans, with an area of about 106.46 million square kilometers.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am an ancient temple complex in Athens, Greece, sitting high on a rocky outcrop above the city, containing the Parthenon. What am I?',
    options: ['Acropolis of Athens', 'Temple of Olympian Zeus', 'Knossos', 'Delphi'],
    correctAnswerIndex: 0,
    explanation: 'The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a famous freestanding bell tower in Italy, known worldwide for my nearly four-degree unintended tilt. What am I?',
    options: ['Campanile of San Marco', 'Leaning Tower of Pisa', 'Two Towers of Bologna', 'Giotto\'s Campanile'],
    correctAnswerIndex: 1,
    explanation: 'The Leaning Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its nearly four-degree lean.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a sprawling metropolitan city in Japan that holds the title of the most populous metropolitan area in the world. What am I?',
    options: ['Osaka', 'Kyoto', 'Tokyo', 'Yokohama'],
    correctAnswerIndex: 2,
    explanation: 'The Tokyo metropolis is the most populous metropolitan area in the world, serving as the political, economic, and cultural center of Japan.',
  },
  {
    questionText: 'I am the deepest known part of the world\'s oceans, located in the western Pacific Ocean. What am I?',
    options: ['Tonga Trench', 'Mariana Trench', 'Puerto Rico Trench', 'Kermadec Trench'],
    correctAnswerIndex: 1,
    explanation: 'The Mariana Trench contains the Challenger Deep, which is the deepest known point on Earth.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the continuous, powerful eastward-flowing ocean current that encircles Antarctica. What am I?',
    options: ['Gulf Stream', 'Kuroshio Current', 'Agulhas Current', 'Antarctic Circumpolar Current'],
    correctAnswerIndex: 3,
    explanation: 'The Antarctic Circumpolar Current is the most important current in the Southern Ocean, blocking warm waters from reaching Antarctica.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a strong, warm ocean current that originates in the Gulf of Mexico and flows up the eastern coast of the US towards Europe. What am I?',
    options: ['Canary Current', 'Gulf Stream', 'Labrador Current', 'California Current'],
    correctAnswerIndex: 1,
    explanation: 'The Gulf Stream plays a massive role in regulating the climate of North America and Western Europe.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a vast, continuous mountain range located entirely on the ocean floor, making me the longest mountain range in the world. What am I?',
    options: ['Andes', 'Mid-Ocean Ridge', 'Himalayas', 'Emperor Seamounts'],
    correctAnswerIndex: 1,
    explanation: 'The Mid-Ocean Ridge is a global mid-oceanic ridge system that is the longest mountain range in the world, spanning about 65,000 kilometers.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the only sea in the world that has no land boundaries, entirely defined by four ocean currents. What am I?',
    options: ['Sargasso Sea', 'Dead Sea', 'Red Sea', 'Tasman Sea'],
    correctAnswerIndex: 0,
    explanation: 'The Sargasso Sea is a region of the North Atlantic Ocean bounded by four currents forming an ocean gyre.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a large marginal sea of the Atlantic Ocean, bounded by North America, Central America, and South America, famous for my tropical islands. What am I?',
    options: ['Mediterranean Sea', 'Bering Sea', 'Caribbean Sea', 'Coral Sea'],
    correctAnswerIndex: 2,
    explanation: 'The Caribbean Sea is a tropical sea adjacent to the Atlantic Ocean, known for its clear waters and island nations.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a climate phenomenon characterized by unusually warm ocean temperatures in the Equatorial Pacific, which disrupts global weather. What am I?',
    options: ['La Niña', 'Monsoon', 'El Niño', 'Gulf Stream'],
    correctAnswerIndex: 2,
    explanation: 'El Niño is the warm phase of the El Niño–Southern Oscillation, causing significant global climate shifts.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the largest enclosed inland body of water on Earth, often described as both a full-fledged sea and a massive lake. What am I?',
    options: ['Caspian Sea', 'Lake Superior', 'Aral Sea', 'Lake Victoria'],
    correctAnswerIndex: 0,
    explanation: 'The Caspian Sea is the world\'s largest inland body of water, located between Europe and Asia.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a narrow strait connecting the Atlantic Ocean to the Mediterranean Sea, separating Europe from Africa. What am I?',
    options: ['Strait of Hormuz', 'Strait of Gibraltar', 'Bosphorus Strait', 'Strait of Malacca'],
    correctAnswerIndex: 1,
    explanation: 'The Strait of Gibraltar is a narrow strait that connects the Atlantic Ocean to the Mediterranean Sea and separates Spain from Morocco.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a massive, mostly submerged continent in the southwest Pacific Ocean. New Zealand is the largest visible part of me. What am I?',
    options: ['Mu', 'Lemuria', 'Atlantis', 'Zealandia'],
    correctAnswerIndex: 3,
    explanation: 'Zealandia is an almost entirely submerged mass of continental crust that sank after breaking away from Gondwanaland.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a shallow body of saltwater separated from the deeper ocean by a series of barrier islands or coral reefs. What am I?',
    options: ['Estuary', 'Lagoon', 'Fjord', 'Gulf'],
    correctAnswerIndex: 1,
    explanation: 'A lagoon is a shallow body of water protected from a larger body of water (usually the ocean) by sandbars, barrier islands, or coral reefs.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the world\'s largest bay, located in northeastern Canada, known for my freezing waters and polar bear populations. What am I?',
    options: ['Bay of Bengal', 'Hudson Bay', 'Baffin Bay', 'James Bay'],
    correctAnswerIndex: 1,
    explanation: 'Hudson Bay is a large body of saltwater in northeastern Canada, famous for remaining frozen for much of the year.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am an ocean layer also known as the "midnight zone," where absolutely no sunlight penetrates from the surface. What am I?',
    options: ['Epipelagic Zone', 'Mesopelagic Zone', 'Bathypelagic Zone', 'Neritic Zone'],
    correctAnswerIndex: 2,
    explanation: 'The Bathypelagic Zone, or midnight zone, is a layer of the oceanic zone where no sunlight reaches, starting at about 1,000 meters deep.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the cyclical rise and fall of sea levels across the globe, primarily caused by the gravitational pull of the Moon and Sun. What am I?',
    options: ['Tsunamis', 'Tides', 'Currents', 'Gyres'],
    correctAnswerIndex: 1,
    explanation: 'Tides are long-period waves that move through the ocean in response to the forces exerted by the moon and sun.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a series of massive, destructive ocean waves typically triggered by an underwater earthquake, volcanic eruption, or landslide. What am I?',
    options: ['Tsunami', 'Tidal Wave', 'Rogue Wave', 'Hurricane'],
    correctAnswerIndex: 0,
    explanation: 'A tsunami is a series of waves in a water body caused by the displacement of a large volume of water.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a microscopic, plant-like organism that drifts in the ocean, producing half the world\'s oxygen and forming the base of the marine food web. What am I?',
    options: ['Zooplankton', 'Kelp', 'Phytoplankton', 'Cyanobacteria'],
    correctAnswerIndex: 2,
    explanation: 'Phytoplankton are the autotrophic (self-feeding) components of the plankton community and a key part of ocean ecosystems.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a marginal sea located between southeastern Europe and Western Asia, famous for my completely oxygen-depleted lower depths. What am I?',
    options: ['Red Sea', 'Baltic Sea', 'Black Sea', 'White Sea'],
    correctAnswerIndex: 2,
    explanation: 'The Black Sea is the world\'s largest meromictic basin, meaning its deep waters do not mix with the upper layers that receive oxygen from the atmosphere.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am a notorious, loosely defined region in the western part of the North Atlantic Ocean where many ships and aircraft have allegedly vanished mysteriously. What am I?',
    options: ['Devil\'s Sea', 'Bermuda Triangle', 'Sargasso Sea', 'Mariana Trench'],
    correctAnswerIndex: 1,
    explanation: 'The Bermuda Triangle is a legendary region in the North Atlantic Ocean where numerous unexplained disappearances have been reported.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am the specific point in the ocean that is farthest from any landmass on Earth, often called the "Oceanic Pole of Inaccessibility." What am I?',
    options: ['Point Nemo', 'Challenger Deep', 'Tristan da Cunha', 'Bouvet Island'],
    correctAnswerIndex: 0,
    explanation: 'Point Nemo is the oceanic pole of inaccessibility, located in the South Pacific Ocean, approximately 2,688 kilometers from the nearest land.',
    timeLimitSeconds: 15
  },
  {
    questionText: 'I am an exceptionally salty landlocked body of water bordering Jordan and Israel, where anyone can easily float effortlessly on the surface. What am I?',
    options: ['Salton Sea', 'Great Salt Lake', 'Dead Sea', 'Aral Sea'],
    correctAnswerIndex: 2,
    explanation: 'The Dead Sea is a salt lake bordered by Jordan to the east and Israel and the West Bank to the west, known for its hypersalinity.',
    timeLimitSeconds: 15
  }
];
