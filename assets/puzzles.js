const puzzles = [
    {
        puzzleId: 1,
        theme: "Animals",
        answer: ["E", "L", "E", "P", "H", "A", "N", "T"],
        clues: [
            ["?", "?", "?", "?", "!", "E", "!", "0"], 
            ["0", "!", "!", "O", "P", "!", "R", "D"],
            ["!", "!", "K", "0", "?", "?", "?", "?"],
            ["?", "?", "?", "0", "!", "!", "W", "K"]
        ],
        clueHints: ["1. A domesticated female bird", "2. Can reach speeds of up to 36 miles per hour", "3. One of the largest species in the deer family", "4. A bird of prey"],
        statusTitle: "Take a guess!",
        encouragement: "You got this!",
        funFact: "Elephants are the largest land animals on Earth!",
    },
    {
        puzzleId: 2,
        theme: "Countries",
        answer: ["M", "A", "L", "A", "Y", "S", "I", "A"],
        clues: [
            ["!", "!", "!", "T", "A", "0", "?", "?"], 
            ["?", "?", "!", "!", "O", "!", "0", "?"], 
            ["?", "0", "!", "!", "T", "V", "!", "!"], 
            ["0", "!", "!", "G", "E", "R", "!", "!"]
        ],
        clueHints: ["1. A European archipelago", "2. This country shares a border with Thailand", "3. The capital of this country is Riga", "4. The tenth largest country by area"],
        statusTitle: "What's your guess?",
        encouragement: "and no looking at any maps!",
        funFact: "70% of the population of Malaysia is urban.",
    },
    {
        puzzleId: 3,
        theme: "Mythical Creatures",
        answer: ["W", "E", "R", "E", "W", "O", "L", "F"],
        clues: [
            ["?", "?", "?", "?", "0", "E", "!", "!"], 
            ["O", "G", "!", "!", "0", "?", "?", "?"], 
            ["?", "?", "0", "T", "R", "!", "!", "L"], 
            ["N", "!", "!", "!", "I", "D", "0", "?"]
        ],
        clueHints: ["1. A pointy-eared humanoid being", "2. A large humanoid being with great strength", "3. A magical creature that lives in the hills", "4. A sea nymph of the Mediterranean"],
        statusTitle: "and your answer is...",
        encouragement: "...don't worry, I'm patient.",
        funFact: "A werewolf's transformation is often associated with the appearance of a full moon.",
    },
    {
        puzzleId: 4,
        theme: "Musical Instruments",
        answer: ["M", "A", "N", "D", "O", "L", "I", "N"],
        clues: [
            ["?", "0", "V", "I", "!", "!", "!", "!"], 
            ["B", "!", "!", "J", "!", "0", "?", "?"], 
            ["H", "!", "!", "!", "P", "A", "N", "0"], 
            ["?", "?", "O", "B", "!", "E", "0", "?"]
        ],
        clueHints: ["1. A four-stringed instrument", "2. A five-stringed instrument", "3. A subset of steelpan instruments", "4. A double-reed woodwind instrument"],
        statusTitle: "Compose an Answer...",
        encouragement: "...or just play it by ear.",
        funFact: "While a violin has four strings and a banjo has five, a mandolin has eight!",
    },
    {
        puzzleId: 5,
        theme: "Metals",
        answer: ["A", "L", "U", "M", "I", "N", "U", "M"],
        clues: [
            ["?", "?", "?", "Z", "!", "!", "C", "0"], 
            ["?", "?", "?", "T", "!", "!", "0", "?"], 
            ["0", "!", "I", "T", "H", "I", "!", "!"], 
            ["!", "!", "L", "O", "Y", "0", "?", "?"]
        ],
        clueHints: ["1. This metal is good for your immune system", "2. Pewter is almost entirely composed of this", "3. This metal has an atomic number of 3", "4. A composition of two or more metals"],
        statusTitle: "F",
        encouragement: "...or just play it by ear.",
        funFact: "Aluminum is the third most abundant element in the earth's crust, after oxygen and silicon.",
    },
    {
        puzzleId: 6,
        theme: "Occupations",
        answer: ["M", "E", "C", "H", "A", "N", "I", "C"],
        clues: [
            ["?", "0", "!", "L", "E", "R", "!", "!"], 
            ["?", "?", "!", "!", "E", "F", "0", "?"], 
            ["!", "!", "D", "I", "C", "0", "?", "?"], 
            ["?", "0", "!", "R", "I", "T", "!", "!"]
        ],
        clueHints: ["1. A religious leader or priest", "2. Trained in food preparation", "3. Administers first-aid at combat sites", "4. Someone who judges artwork professionally"],
        statusTitle: "Think of something...",
        encouragement: "...or you're fired!",
        funFact: "Queen Elizabeth II trained to be a mechanic and truck driver during WWII.",
    },
    {
        puzzleId: 7,
        theme: "Art",
        answer: ["A", "B", "S", "T", "R", "A", "C", "T"],
        clues: [
            ["P", "A", "!", "!", "E", "L", "0", "?"], 
            ["?", "?", "?", "0", "C", "!", "S", "!"], 
            ["?", "F", "A", "B", "!", "I", "!", "0"], 
            ["0", "!", "A", "U", "H", "!", "U", "S"]
        ],
        clueHints: ["1. Consists of powdered pigment and a binder", "2. One of four main sculpture techniques", "3. Textile cloth made by weaving, knitting, or felting fibers", "4. A German art school established in 1919"],
        statusTitle: "Get Creative!",
        encouragement: "Or get back to the drawing board...",
        funFact: "You might recognize surrealism, dadaism, and cubism as subsets of abstract art, but there are actually 18 different types of abstract art!",
    },
    {
        puzzleId: 8,
        theme: "Colors",
        answer: ["C", "E", "R", "U", "L", "E", "A", "N"],
        clues: [
            ["!", "!", "!", "I", "S", "E", "0", "?"], 
            ["?", "?", "?", "0", "C", "Y", "!", "!"], 
            ["?", "!", "!", "I", "N", "0", "?", "?"], 
            ["?", "M", "A", "!", "V", "!", "0", "?"]
        ],
        clueHints: ["1. A deep, reddish pink", "2. The C in CMYK", "3. A shade of green, named for Ireland", "4. A pale shade of purple"],
        statusTitle: "Guess!",
        encouragement: "The answer isn't black OR white.",
        funFact: "Blue is the most common favorite color.",
    },
    {
        puzzleId: 9,
        theme: "U.S. Cities",
        answer: ["S", "Y", "R", "A", "C", "U", "S", "E"],
        clues: [
            ["?", "0", "!", "!", "!", "I", "N", "!"], 
            ["?", "?", "?", "!", "M", "E", "!", "0"], 
            ["?", "E", "!", "I", "E", "0", "?", "?"], 
            ["I", "T", "H", "!", "!", "A", "0", "?"]
        ],
        clueHints: ["1. The fifth most-populous city in Wisconsin", "2. The university in this Iowan city makes up over half its population", "3. On the south shore of a lake with the same name", "4. The home city of Cornell University"],
        statusTitle: "Where are we?",
        encouragement: "And, again, no maps.",
        funFact: "Syracuse's namesake is a town in Sicily, Siracusa.",
    },
    {
        puzzleId: 10,
        theme: "Events",
        answer: ["F", "E", "S", "T", "I", "V", "A", "L"],
        clues: [
            ["?", "0", "!", "O", "C", "I", "!", "!"], 
            ["0", "R", "E", "C", "!", "T", "!", "!"], 
            ["?", "0", "!", "O", "!", "R", "É", "E"], 
            ["?", "?", "0", "!", "R", "I", "!", "!"]
        ],
        clueHints: ["1. An informal gathering, organized by members of a particular club or group", "2. The performance of a program of music", "3. An evening party or gathering", "4. A formal examination of evidence"],
        statusTitle: "Where are we?",
        encouragement: "And, again, no maps.",
        funFact: "Syracuse's namesake is a town in Sicily, Siracusa, which also has famous salt deposits, sits next to a lake, and has a neighboring town called Salina.",
    },
];

export default puzzles;