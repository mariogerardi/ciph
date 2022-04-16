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
        funFact: "The 1969 Woodstock Music & Art Fair is often considered the first modern music festival.",
    },
    {
        puzzleId: 11,
        theme: "Clothing",
        answer: ["C", "A", "R", "D", "I", "G", "A", "N"],
        clues: [
            ["!", "!", "P", "0", "?", "?", "?", "?"], 
            ["?", "F", "E", "!", "O", "R", "!", "0"], 
            ["?", "?", "0", "G", "!", "P", "O", "!"], 
            ["!", "!", "P", "R", "!", "S", "0", "?"]
        ],
        clueHints: ["1. A flat-brimmed hat, usually with a visor", "2. A felt hat, with a curled brim", "3. A tunic worn underneath armor in the 14th century", "4. Women's calf-length pants"],
        funFact: "It is said that James Brudenell, 7th Earl of Cardigan, invented the article of clothing after noticing that the tails of his coat had accidentally been burnt off in a fireplace",
    },
    {
        puzzleId: 12,
        theme: "Cheeses",
        answer: ["P", "A", "R", "M", "E", "S", "A", "N"],
        clues: [
            ["H", "E", "!", "V", "!", "0", "?", "?"],
            ["?", "?", "?", "0", "!", "D", "!", "M"], 
            ["?", "B", "!", "I", "!", "0", "?", "?"],
            ["?", "?", "?", "F", "!", "T", "!", "0"], 
        ],
        clueHints: ["1. A Belgian soft cheese", "2. A Dutch semi-hard cheese", "3. A French soft cheese", "4. A Greek cheese made from sheep's milk"],
        funFact: "Only cheese from the Parma or Reggio areas of Italy can legally be called Parmesan cheese",
    },
    {
        puzzleId: 13,
        theme: "Aquatic Animals",
        answer: ["A", "R", "A", "P", "A", "I", "M", "A"],
        clues: [
            ["0", "T", "I", "L", "!", "P", "I", "!"],
            ["C", "!", "!", "B", "0", "?", "?", "?"], 
            ["0", "P", "I", "R", "!", "N", "H", "!"],
            ["!", "N", "!", "B", "!", "S", "0", "?"], 
        ],
        clueHints: ["1. The fourth-most commonly consumed type of seafood in the United States", "2. A crustracean with ten legs", "3. Known for their razor-sharp teeth", "4. An invasive species of fish that can last 6-10 hours without water"],
        funFact: "The arapaima can grow up to 15 feet long and weigh up to 440 pounds!",
    },
    {
        puzzleId: 14,
        theme: "Herbs and Spices",
        answer: ["C", "A", "R", "D", "A", "M", "O", "M"],
        clues: [
            ["G", "!", "!", "L", "I", "C", "0", "?"],
            ["!", "!", "!", "A", "W", "A", "Y", "0"],
            ["?", "S", "E", "S", "!", "!", "E", "0"], 
            ["?", "?", "?", "!", "I", "L", "L", "0"], 
        ],
        clueHints: ["1. An herb related to onion, leeks, and chives", "2. A biennial herb of the parsely family", "3. Comes from one of the oldest crops known, domesticated over 3,000 years ago", "4. Used as a cooking spice and as a fragrance in soaps and cosmetics"],
        funFact: "Cardamom is third on the list of most expensive spices, just after saffron and vanilla.",
    },
    {
        puzzleId: 15,
        theme: "All Things Nautical",
        answer: ["C", "O", "X", "S", "W", "A", "I", "N"],
        clues: [
            ["?", "?", "0", "!", "T", "E", "R", "!"],
            ["?", "?", "?", "0", "!", "!", "K", "E"],
            ["!", "!", "U", "R", "S", "E", "0", "?"], 
            ["?", "?", "B", "O", "!", "0", "?", "?"], 
        ],
        clueHints: ["1. The rear of a ship", "2. Waves created by traveling through water", "3. The cardinal direction of a ship's trajectory", "4. The front of a ship"],
        funFact: "It is advantageous for the coxswain of a boat to be light, as there is less weight for the crew to move.",
    },
    {
        puzzleId: 16,
        theme: "Emotions",
        answer: ["E", "U", "P", "H", "O", "R", "I", "A"],
        clues: [
            ["?", "?", "?", "!", "!", "P", "E", "0"],
            ["?", "!", "!", "S", "E", "T", "0", "?"],
            ["!", "N", "V", "Y", "0", "?", "?", "?"], 
            ["?", "0", "!", "!", "!", "B", "!", "!"], 
        ],
        clueHints: ["1. Wishful thinking", "2. Disappointed or unhappy", "3. Resentfulness", "4. An irrational fear"],
        funFact: "Euphoria can occur as a result of dancing to music, making music, and listening to emotionally stimulating music.",
    },
    {
        puzzleId: 17,
        theme: "Human Anatomy",
        answer: ["P", "A", "N", "C", "R", "E", "A", "S"],
        clues: [
            ["T", "R", "A", "!", "H", "!", "!", "0"], 
            ["?", "!", "!", "K", "L", "!", "0", "?"],
            ["?", "?", "!", "E", "!", "V", "E", "0"],
            ["?", "?", "?", "?", "0", "!", "!", "R"], 
        ],
        clueHints: ["1. Connects the larynx to the bronchi", "2. A joint composed of three bones", "3. Conducts motor and sensory impulses between the brain and other body parts", "4. Helps to maintain balance, while moving or stationary"],
        funFact: "The pancreas is about 6 inches long and less than 2 inches wide.",
    },
    {
        puzzleId: 18,
        theme: "Office Supplies",
        answer: ["E", "N", "V", "E", "L", "O", "P", "E"],
        clues: [
            ["?", "?", "?", "0", "T", "A", "!", "!"],
            ["!", "A", "S", "!", "!", "0", "?", "?"], 
            ["?", "?", "0", "G", "!", "U", "E", "?"],
            ["?", "?", "M", "!", "M", "!", "0", "?"], 
        ],
        clueHints: ["1. An adhesive strip of material", "2. An upright support used for display", "3. Another adhesive", "4. A short message, meant to circulate information"],
        funFact: "The world's most expensive pen sold for $8 million at a Shanghai auction in 2010.",
    },
    {
        puzzleId: 19,
        theme: "Cold Things",
        answer: ["P", "O", "P", "S", "I", "C", "L", "E"],
        clues: [
            ["?", "0", "F", "R", "!", "D", "G", "!"],
            ["!", "!", "O", "L", "0", "?", "?", "?"],
            ["A", "L", "!", "!", "0", "?", "?", "?"], 
            ["?", "?", "?", "?", "!", "!", "E", "0"], 
        ],
        clueHints: ["1. Find this cool appliance in your kitchen", "2. In summer, its coldness might be refreshing", "3. A mountain range with a peak elevation of over 15,000 feet", "4. A brittle, transparent, crystalline solid"],
        funFact: "The most popular popsicle flavor is cherry.",
    },
    {
        puzzleId: 20,
        theme: "Round Things",
        answer: ["T", "O", "R", "T", "I", "L", "L", "A"],
        clues: [
            ["?", "!", "!", "B", "!", "T", "?", "?"], 
            ["!", "I", "!", "E", "0", "?", "?", "?"],
            ["?", "?", "?", "B", "A", "!", "!", "0"],
            ["?", "?", "?", "?", "0", "!", "O", "G"],
        ],
        clueHints: ["1. The trajectory of a celestial object", "2. A rubber covering", "3. A spherical object of many varieties", "4. Part of a tree that has fallen off"],
        funFact: "Corn tortillas date back around 10,000 years B.C., and were made of native corn with dried kernel.",
    },
    {
        puzzleId: 21,
        theme: "Snacks",
        answer: ["P", "O", "P", "S", "I", "C", "L", "E"],
        clues: [
            ["?", "?", "0", "!", "C", "O", "N", "!"],
            ["?", "A", "!", "R", "!", "!", "O", "T"], 
            ["!", "!", "!", "C", "O", "R", "N", "0"], 
            ["!", "E", "!", "!", "!", "0", "?", "?"],
        ],
        clueHints: ["1. A biscuit, sometimes made with fruit or nuts", "2. A fruit that resembles a peach", "3. This snack expands when heated", "4. This cola has 150 calories per serving"],
        funFact: "Each year, there are over two billion popsicles sold.",
    },
    {
        puzzleId: 22,
        theme: "More Animals",
        answer: ["A", "N", "T", "E", "L", "O", "P", "E"],
        clues: [
            ["!", "!", "!", "0", "?", "?", "?", "?"], 
            ["?", "?", "?", "?", "0", "A", "!", "!"],
            ["?", "?", "0", "!", "A", "G", "L", "!"], 
            ["?", "0", "!", "U", "R", "T", "L", "!"],
        ],
        clueHints: ["1. There are over 10,000 species of this ", "2. Bonobos and orangutans belong to this group of primates", "3. At the top of their food chain, these birds can see their prey from over two miles away", "4. These animals lay their eggs in the sand"],
        funFact: "Each year, there are over two billion popsicles sold.",
    },
];

export default puzzles;