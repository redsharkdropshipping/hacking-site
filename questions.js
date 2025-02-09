let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper Type Multi Language",
            "B. Hyper Text Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Home Text Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "A. Cascading Style Sheet",
        options: [
            "A. Cascading Style Sheet",
            "B. Cute Style Sheet",
            "C. Computer Style Sheet",
            "D. Codehal Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "A. Hypertext Preprocessor",
        options: [
            "A. Hypertext Preprocessor",
            "B. Hometext Programming",
            "C. Hypertext Preprogramming",
            "D. Programming Hypertext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "D. Structured Query Language",
        options: [
            "A. Strength Query Language",
            "B. Stylesheet Query Language",
            "C. Science Question Language",
            "D. Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "D. Extensible Markup Language",
        options: [
            "A. Excellent Multiple Language",
            "B. Explore Multiple Language",
            "C. Extra Markup Language",
            "D. Extensible Markup Language"
        ]
    },
    {
        numb: 6,
        question: "What is the primary function of the CPU in a computer?",
        answer: "B. Execute instructions",
        options: [
            "A. Store data",
            "B. Execute instructions",
            "C. Display graphics",
            "D. Control peripherals"
        ]
    },
    {
        numb: 7,
        question: "Which data structure uses LIFO order?",
        answer: "A. Stack",
        options: [
            "A. Stack",
            "B. Queue",
            "C. Linked List",
            "D. Array"
        ]
    },
    {
        numb: 8,
        question: "Which of the following is NOT a sorting algorithm?",
        answer: "C. Linked List",
        options: [
            "A. Quick Sort",
            "B. Merge Sort",
            "C. Linked List",
            "D. Bubble Sort"
        ]
    },
    {
        numb: 9,
        question: "What is the time complexity of the binary search algorithm?",
        answer: "B. O(log n)",
        options: [
            "A. O(n)",
            "B. O(log n)",
            "C. O(n^2)",
            "D. O(1)"
        ]
    },
    {
        numb: 10,
        question: "What is the purpose of an algorithm in computer science?",
        answer: "C. To solve a problem",
        options: [
            "A. To write code",
            "B. To create a database",
            "C. To solve a problem",
            "D. To design hardware"
        ]
    },
    {
        numb: 11,
        question: "What is the main purpose of an operating system?",
        answer: "A. To manage hardware resources",
        options: [
            "A. To manage hardware resources",
            "B. To provide internet access",
            "C. To execute applications",
            "D. To store data"
        ]
    },
    {
        numb: 12,
        question: "Which of the following is a characteristic of a binary search tree?",
        answer: "C. The left child is less than the parent node",
        options: [
            "A. The right child is less than the parent node",
            "B. Both children are always equal to the parent node",
            "C. The left child is less than the parent node",
            "D. The left and right children are equal"
        ]
    },
    {
        numb: 13,
        question: "Which of the following is the best-suited data structure to implement a queue?",
        answer: "B. Linked List",
        options: [
            "A. Array",
            "B. Linked List",
            "C. Stack",
            "D. Binary Search Tree"
        ]
    },
    {
        numb: 14,
        question: "Which layer of the OSI model is responsible for routing?",
        answer: "C. Network layer",
        options: [
            "A. Transport layer",
            "B. Data Link layer",
            "C. Network layer",
            "D. Application layer"
        ]
    },
    {
        numb: 15,
        question: "Which protocol is used to send an email?",
        answer: "B. SMTP",
        options: [
            "A. FTP",
            "B. SMTP",
            "C. HTTP",
            "D. POP3"
        ]
    },
    {
        numb: 16,
        question: "Which of the following is a non-volatile memory?",
        answer: "C. Flash memory",
        options: [
            "A. RAM",
            "B. Cache",
            "C. Flash memory",
            "D. Register"
        ]
    },
    {
        numb: 17,
        question: "Which of the following sorting algorithms has the best average-case time complexity?",
        answer: "C. Merge Sort",
        options: [
            "A. Bubble Sort",
            "B. Insertion Sort",
            "C. Merge Sort",
            "D. Selection Sort"
        ]
    },
    {
        numb: 18,
        question: "What is the main advantage of using an index in a database?",
        answer: "B. Faster data retrieval",
        options: [
            "A. Reduces the size of the database",
            "B. Faster data retrieval",
            "C. Ensures data integrity",
            "D. Minimizes redundancy"
        ]
    },
    {
        numb: 19,
        question: "Which of the following is NOT a valid type of network topology?",
        answer: "D. Round topology",
        options: [
            "A. Bus topology",
            "B. Star topology",
            "C. Ring topology",
            "D. Round topology"
        ]
    },
    {
        numb: 20,
        question: "In which of the following cases is a hash table most commonly used?",
        answer: "A. Searching for an element in a list",
        options: [
            "A. Searching for an element in a list",
            "B. Sorting a list",
            "C. Storing data in a sequential manner",
            "D. Generating random numbers"
        ]
    },
    {
        numb: 21,
        question: "Which of the following is NOT a common form of attack in network security?",
        answer: "C. Malware analysis",
        options: [
            "A. Denial of Service (DoS)",
            "B. Phishing",
            "C. Malware analysis",
            "D. Man-in-the-middle"
        ]
    },
    {
        numb: 22,
        question: "What is the purpose of a compiler?",
        answer: "A. Convert source code into machine code",
        options: [
            "A. Convert source code into machine code",
            "B. Execute source code directly",
            "C. Compile machine code into source code",
            "D. Manage memory in a program"
        ]
    },
    {
        numb: 23,
        question: "What is a key feature of a relational database?",
        answer: "B. Data is organized into tables",
        options: [
            "A. Data is stored in a flat file",
            "B. Data is organized into tables",
            "C. Data is not indexed",
            "D. Data is stored as objects"
        ]
    },
    {
        numb: 24,
        question: "Which of the following is NOT an example of an operating system?",
        answer: "C. WordPress",
        options: [
            "A. Windows",
            "B. Linux",
            "C. WordPress",
            "D. macOS"
        ]
    },
    {
        numb: 25,
        question: "Which language is primarily used for client-side scripting in web development?",
        answer: "B. JavaScript",
        options: [
            "A. HTML",
            "B. JavaScript",
            "C. PHP",
            "D. Python"
        ]
    },
    {
        numb: 26,
        question: "What is the function of a DNS server?",
        answer: "A. To translate domain names into IP addresses",
        options: [
            "A. To translate domain names into IP addresses",
            "B. To manage network traffic",
            "C. To serve web pages",
            "D. To send emails"
        ]
    },
    {
        numb: 27,
        question: "What does the term 'big O notation' represent?",
        answer: "D. The efficiency of an algorithm",
        options: [
            "A. The time taken by a computer to execute a program",
            "B. The memory usage of a program",
            "C. The amount of code written",
            "D. The efficiency of an algorithm"
        ]
    },
    {
        numb: 28,
        question: "What does RAID stand for in storage technology?",
        answer: "C. Redundant Array of Independent Disks",
        options: [
            "A. Rapid Array of Independent Devices",
            "B. Random Array of Integrated Devices",
            "C. Redundant Array of Independent Disks",
            "D. Reliable Array of Internet Devices"
        ]
    },
    {
        numb: 29,
        question: "Which algorithm is used in the A* pathfinding algorithm?",
        answer: "B. Heuristic-based search",
        options: [
            "A. Breadth-first search",
            "B. Heuristic-based search",
            "C. Depth-first search",
            "D. Dijkstra's algorithm"
        ]
    },
    {
        numb: 30,
        question: "Which of the following is a characteristic of the TCP/IP model?",
        answer: "A. It is a layered architecture",
        options: [
            "A. It is a layered architecture",
            "B. It is a flat architecture",
            "C. It has three layers",
            "D. It does not support routing"
        ]
    },
    {
        numb: 31,
        question: "What is the main function of a router?",
        answer: "B. To direct data packets between networks",
        options: [
            "A. To connect devices in a single network",
            "B. To direct data packets between networks",
            "C. To store data",
            "D. To manage traffic within a network"
        ]
    },
    {
        numb: 32,
        question: "Which of the following is an example of a NoSQL database?",
        answer: "A. MongoDB",
        options: [
            "A. MongoDB",
            "B. MySQL",
            "C. PostgreSQL",
            "D. Oracle DB"
        ]
    },
    {
        numb: 33,
        question: "Which of the following is a type of malware?",
        answer: "B. Trojan",
        options: [
            "A. Router",
            "B. Trojan",
            "C. Switch",
            "D. Firewall"
        ]
    },
    {
        numb: 34,
        question: "Which of the following is used to verify the integrity of data during transmission?",
        answer: "A. Checksum",
        options: [
            "A. Checksum",
            "B. Firewall",
            "C. Gateway",
            "D. DNS"
        ]
    },
    {
        numb: 35,
        question: "Which of the following is a technique for ensuring data security in a database?",
        answer: "C. Encryption",
        options: [
            "A. Backup",
            "B. Compression",
            "C. Encryption",
            "D. Fragmentation"
        ]
    },
    {
        numb: 36,
        question: "Which of the following is used to control access to a network?",
        answer: "D. Firewall",
        options: [
            "A. Router",
            "B. Switch",
            "C. Hub",
            "D. Firewall"
        ]
    },
    {
        numb: 37,
        question: "What is the process of transforming data into an unreadable format?",
        answer: "A. Encryption",
        options: [
            "A. Encryption",
            "B. Compression",
            "C. Formatting",
            "D. Hashing"
        ]
    },
    {
        numb: 38,
        question: "Which protocol is responsible for ensuring the reliable delivery of data?",
        answer: "B. TCP",
        options: [
            "A. UDP",
            "B. TCP",
            "C. IP",
            "D. ICMP"
        ]
    },
    {
        numb: 39,
        question: "Which of the following is an example of a command-line interface?",
        answer: "C. Terminal",
        options: [
            "A. Windows Explorer",
            "B. Control Panel",
            "C. Terminal",
            "D. Task Manager"
        ]
    },
    {
        numb: 40,
        question: "What is the purpose of a VPN?",
        answer: "C. To provide secure communication over the internet",
        options: [
            "A. To increase internet speed",
            "B. To monitor internet usage",
            "C. To provide secure communication over the internet",
            "D. To hide the identity of the user"
        ]
    },
    {
        numb: 41,
        question: "Which of the following is a key feature of cloud computing?",
        answer: "A. On-demand resource availability",
        options: [
            "A. On-demand resource availability",
            "B. Local resource storage",
            "C. Centralized data storage",
            "D. Infrequent updates"
        ]
    },
    {
        numb: 42,
        question: "Which type of attack tries to prevent legitimate users from accessing a service?",
        answer: "D. Denial of Service (DoS)",
        options: [
            "A. Phishing",
            "B. Man-in-the-middle",
            "C. Spoofing",
            "D. Denial of Service (DoS)"
        ]
    },
    {
        numb: 43,
        question: "What is the process of converting plaintext into ciphertext called?",
        answer: "A. Encryption",
        options: [
            "A. Encryption",
            "B. Decryption",
            "C. Encoding",
            "D. Hashing"
        ]
    },
    {
        numb: 44,
        question: "Which of the following is a feature of a modern database management system?",
        answer: "C. Data Integrity",
        options: [
            "A. Data Redundancy",
            "B. Data Compression",
            "C. Data Integrity",
            "D. Data Duplication"
        ]
    },
    {
        numb: 45,
        question: "What does the term 'data mining' refer to?",
        answer: "A. The process of analyzing large datasets to identify patterns",
        options: [
            "A. The process of analyzing large datasets to identify patterns",
            "B. The process of storing data",
            "C. The process of compressing data",
            "D. The process of deleting data"
        ]
    },
    {
        numb: 46,
        question: "Which of the following is used to track website visitors?",
        answer: "B. Cookies",
        options: [
            "A. Cache",
            "B. Cookies",
            "C. JavaScript",
            "D. Local Storage"
        ]
    },
    {
        numb: 47,
        question: "What is the purpose of an API?",
        answer: "D. To enable communication between different software components",
        options: [
            "A. To store data",
            "B. To execute code",
            "C. To display graphics",
            "D. To enable communication between different software components"
        ]
    },
    {
        numb: 48,
        question: "What is the main function of a switch in a network?",
        answer: "A. To forward data to the correct device within a network",
        options: [
            "A. To forward data to the correct device within a network",
            "B. To connect networks",
            "C. To amplify signals",
            "D. To manage IP addresses"
        ]
    },
    {
        numb: 49,
        question: "What is the purpose of a firewall in network security?",
        answer: "C. To block unauthorized access to a network",
        options: [
            "A. To enhance network speed",
            "B. To optimize data transmission",
            "C. To block unauthorized access to a network",
            "D. To store network traffic"
        ]
    },
    {
        numb: 50,
        question: "What is a vulnerability in cybersecurity?",
        answer: "D. A weakness that can be exploited by an attacker",
        options: [
            "A. A security breach",
            "B. An unauthorized access",
            "C. A malware attack",
            "D. A weakness that can be exploited by an attacker"
        ]
    }
];
