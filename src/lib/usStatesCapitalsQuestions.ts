import { Question } from './mockData';

export const US_STATES_QUESTIONS: Omit<Question, 'id' | 'categoryId' | 'subCategoryId'>[] = [
{
    questionText: 'What is the capital of Alabama?',
    options: ["Birmingham","Huntsville","Mobile","Montgomery"],
    correctAnswerIndex: 3,
    explanation: 'Montgomery is the capital of Alabama.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Alaska?',
    options: ["Sitka","Anchorage","Fairbanks","Juneau"],
    correctAnswerIndex: 3,
    explanation: 'Juneau is the capital of Alaska.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Arizona?',
    options: ["Tucson","Mesa","Chandler","Phoenix"],
    correctAnswerIndex: 3,
    explanation: 'Phoenix is the capital of Arizona.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Arkansas?',
    options: ["Springdale","Little Rock","Fort Smith","Fayetteville"],
    correctAnswerIndex: 1,
    explanation: 'Little Rock is the capital of Arkansas.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of California?',
    options: ["San Francisco","Los Angeles","San Diego","Sacramento"],
    correctAnswerIndex: 3,
    explanation: 'Sacramento is the capital of California.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Colorado?',
    options: ["Denver","Fort Collins","Aurora","Colorado Springs"],
    correctAnswerIndex: 0,
    explanation: 'Denver is the capital of Colorado.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Connecticut?',
    options: ["Bridgeport","Stamford","Hartford","New Haven"],
    correctAnswerIndex: 2,
    explanation: 'Hartford is the capital of Connecticut.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Delaware?',
    options: ["Dover","Middletown","Wilmington","Newark"],
    correctAnswerIndex: 0,
    explanation: 'Dover is the capital of Delaware.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Florida?',
    options: ["Tampa","Orlando","Miami","Tallahassee"],
    correctAnswerIndex: 3,
    explanation: 'Tallahassee is the capital of Florida.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Georgia?',
    options: ["Atlanta","Savannah","Columbus","Augusta"],
    correctAnswerIndex: 0,
    explanation: 'Atlanta is the capital of Georgia.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Hawaii?',
    options: ["Hilo","Kapolei","Honolulu","Kailua"],
    correctAnswerIndex: 2,
    explanation: 'Honolulu is the capital of Hawaii.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Idaho?',
    options: ["Boise","Idaho Falls","Meridian","Nampa"],
    correctAnswerIndex: 0,
    explanation: 'Boise is the capital of Idaho.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Illinois?',
    options: ["Chicago","Naperville","Springfield","Aurora"],
    correctAnswerIndex: 2,
    explanation: 'Springfield is the capital of Illinois.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Indiana?',
    options: ["Fort Wayne","South Bend","Indianapolis","Evansville"],
    correctAnswerIndex: 2,
    explanation: 'Indianapolis is the capital of Indiana.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Iowa?',
    options: ["Sioux City","Cedar Rapids","Davenport","Des Moines"],
    correctAnswerIndex: 3,
    explanation: 'Des Moines is the capital of Iowa.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Kansas?',
    options: ["Wichita","Olathe","Topeka","Overland Park"],
    correctAnswerIndex: 2,
    explanation: 'Topeka is the capital of Kansas.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Kentucky?',
    options: ["Lexington","Louisville","Bowling Green","Frankfort"],
    correctAnswerIndex: 3,
    explanation: 'Frankfort is the capital of Kentucky.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Louisiana?',
    options: ["New Orleans","Shreveport","Lafayette","Baton Rouge"],
    correctAnswerIndex: 3,
    explanation: 'Baton Rouge is the capital of Louisiana.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Maine?',
    options: ["Augusta","Lewiston","Portland","Bangor"],
    correctAnswerIndex: 0,
    explanation: 'Augusta is the capital of Maine.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Maryland?',
    options: ["Frederick","Baltimore","Annapolis","Gaithersburg"],
    correctAnswerIndex: 2,
    explanation: 'Annapolis is the capital of Maryland.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Massachusetts?',
    options: ["Cambridge","Springfield","Boston","Worcester"],
    correctAnswerIndex: 2,
    explanation: 'Boston is the capital of Massachusetts.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Michigan?',
    options: ["Lansing","Detroit","Grand Rapids","Warren"],
    correctAnswerIndex: 0,
    explanation: 'Lansing is the capital of Michigan.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Minnesota?',
    options: ["Rochester","Duluth","Minneapolis","St. Paul"],
    correctAnswerIndex: 3,
    explanation: 'St. Paul is the capital of Minnesota.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Mississippi?',
    options: ["Gulfport","Southaven","Jackson","Biloxi"],
    correctAnswerIndex: 2,
    explanation: 'Jackson is the capital of Mississippi.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Missouri?',
    options: ["St. Louis","Jefferson City","Springfield","Kansas City"],
    correctAnswerIndex: 1,
    explanation: 'Jefferson City is the capital of Missouri.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Montana?',
    options: ["Missoula","Bozeman","Billings","Helena"],
    correctAnswerIndex: 3,
    explanation: 'Helena is the capital of Montana.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Nebraska?',
    options: ["Lincoln","Grand Island","Bellevue","Omaha"],
    correctAnswerIndex: 0,
    explanation: 'Lincoln is the capital of Nebraska.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Nevada?',
    options: ["Carson City","Henderson","Las Vegas","Reno"],
    correctAnswerIndex: 0,
    explanation: 'Carson City is the capital of Nevada.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of New Hampshire?',
    options: ["Concord","Manchester","Derry","Nashua"],
    correctAnswerIndex: 0,
    explanation: 'Concord is the capital of New Hampshire.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of New Jersey?',
    options: ["Paterson","Jersey City","Trenton","Newark"],
    correctAnswerIndex: 2,
    explanation: 'Trenton is the capital of New Jersey.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of New Mexico?',
    options: ["Albuquerque","Las Cruces","Santa Fe","Rio Rancho"],
    correctAnswerIndex: 2,
    explanation: 'Santa Fe is the capital of New Mexico.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of New York?',
    options: ["New York City","Albany","Buffalo","Rochester"],
    correctAnswerIndex: 1,
    explanation: 'Albany is the capital of New York.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of North Carolina?',
    options: ["Greensboro","Durham","Raleigh","Charlotte"],
    correctAnswerIndex: 2,
    explanation: 'Raleigh is the capital of North Carolina.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of North Dakota?',
    options: ["Minot","Grand Forks","Bismarck","Fargo"],
    correctAnswerIndex: 2,
    explanation: 'Bismarck is the capital of North Dakota.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Ohio?',
    options: ["Toledo","Cincinnati","Columbus","Cleveland"],
    correctAnswerIndex: 2,
    explanation: 'Columbus is the capital of Ohio.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Oklahoma?',
    options: ["Broken Arrow","Oklahoma City","Tulsa","Norman"],
    correctAnswerIndex: 1,
    explanation: 'Oklahoma City is the capital of Oklahoma.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Oregon?',
    options: ["Gresham","Salem","Eugene","Portland"],
    correctAnswerIndex: 1,
    explanation: 'Salem is the capital of Oregon.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Pennsylvania?',
    options: ["Allentown","Harrisburg","Philadelphia","Pittsburgh"],
    correctAnswerIndex: 1,
    explanation: 'Harrisburg is the capital of Pennsylvania.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Rhode Island?',
    options: ["Warwick","Providence","Pawtucket","Cranston"],
    correctAnswerIndex: 1,
    explanation: 'Providence is the capital of Rhode Island.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of South Carolina?',
    options: ["North Charleston","Columbia","Mount Pleasant","Charleston"],
    correctAnswerIndex: 1,
    explanation: 'Columbia is the capital of South Carolina.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of South Dakota?',
    options: ["Aberdeen","Sioux Falls","Rapid City","Pierre"],
    correctAnswerIndex: 3,
    explanation: 'Pierre is the capital of South Dakota.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Tennessee?',
    options: ["Knoxville","Chattanooga","Memphis","Nashville"],
    correctAnswerIndex: 3,
    explanation: 'Nashville is the capital of Tennessee.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Texas?',
    options: ["Austin","Houston","Dallas","San Antonio"],
    correctAnswerIndex: 0,
    explanation: 'Austin is the capital of Texas.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Utah?',
    options: ["Salt Lake City","Provo","West Jordan","West Valley City"],
    correctAnswerIndex: 0,
    explanation: 'Salt Lake City is the capital of Utah.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Vermont?',
    options: ["Burlington","Rutland","Montpelier","South Burlington"],
    correctAnswerIndex: 2,
    explanation: 'Montpelier is the capital of Vermont.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Virginia?',
    options: ["Virginia Beach","Norfolk","Chesapeake","Richmond"],
    correctAnswerIndex: 3,
    explanation: 'Richmond is the capital of Virginia.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Washington?',
    options: ["Spokane","Olympia","Tacoma","Seattle"],
    correctAnswerIndex: 1,
    explanation: 'Olympia is the capital of Washington.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of West Virginia?',
    options: ["Huntington","Parkersburg","Charleston","Morgantown"],
    correctAnswerIndex: 2,
    explanation: 'Charleston is the capital of West Virginia.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Wisconsin?',
    options: ["Green Bay","Milwaukee","Madison","Kenosha"],
    correctAnswerIndex: 2,
    explanation: 'Madison is the capital of Wisconsin.',
    timeLimitSeconds: 15
  },
{
    questionText: 'What is the capital of Wyoming?',
    options: ["Laramie","Gillette","Casper","Cheyenne"],
    correctAnswerIndex: 3,
    explanation: 'Cheyenne is the capital of Wyoming.',
    timeLimitSeconds: 15
  }
];
