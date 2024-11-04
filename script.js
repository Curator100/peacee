const verses = [
    "Allah does not burden a soul beyond that it can bear. (2:286)",
    "For indeed, with hardship [will be] ease. (94:5-6)",
    "And Allah would not punish them while they seek forgiveness. (8:33)",
    "And We have not created the heavens and the earth and whatever is between them except in truth. (15:85)",
    "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient. (2:153)",
    "And those who strive for Us – We will surely guide them to Our ways. (29:69)",
    "Say, ‘Never will we be struck except by what Allah has decreed for us; He is our protector.’ (9:51)",
    "And [remember] when your Lord proclaimed, ‘If you are grateful, I will certainly give you more.’ (14:7)",
    "Do not lose heart or grieve, for you will have the upper hand if you are true believers. (3:139)",
    "And your Lord is going to give you, and you will be satisfied. (93:4)",
    "Surely in the remembrance of Allah do hearts find comfort. (13:28)",
    "Your Lord has proclaimed, ‘Call upon Me; I will respond to you.’ (40:60)",
    "With hardship comes ease. (94:6)",
    "And We send down of the Quran such things that are healing and mercy for the believers. (17:81)",
    "Seek help through patience and prayer; indeed, it is difficult except for the humbly submissive [to Allah]. (2:45)",
    "But no! Allah is your protector, and He is the best helper. (3:150)",
    "And know that your properties and your children are but a trial… (8:28)",
    "And We have certainly made the Quran easy to remember… (54:17)",
    "So remember Me; I will remember you… (2:152)",
    "And among His signs is this, that He created for you mates from among yourselves… (30:21)"
];

let timerInterval;

function showInitialImage() {
    setTimeout(() => {
        document.getElementById('initialImage').style.display = 'none';
        document.getElementById('verseContainer').classList.remove('hidden');
        startTimer();
        displayVerse();
    }, 3000);
}

function startTimer() {
    let timeLeft = 5;

    document.getElementById('timerText').innerText = `Time left: ${timeLeft} seconds`;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timerText').innerText = `Time left: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerText').innerText = '';
        }

    }, 1000);
}

function displayVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    
	// Display a new verse
	document.getElementById('verseText').innerText = verses[randomIndex];
	
	// Restart timer
	if(timerInterval) {
		clearInterval(timerInterval);
	}
	startTimer();
}

document.getElementById('peaceButton').addEventListener('click', () => {
   displayVerse();
});

window.onload = showInitialImage;
