//#region   ALFABETY
var alphabetENG = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var alphabetPL = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "R", "S", "Ś", "T", "U", "W", "Y", "Z", "Ź", "Ż"];
//#endregion

//#region   PRZYSŁOWIA ANGIELSKIE
var proverbsENG = [
    "A journey of a thousand miles begins with a single step",
    "A picture is worth a thousand words",
    "A watched pot never boils",
    "Absence makes the heart grow fonder",
    "Actions speak louder than words",
    "All good things must come to an end",
    "Beauty is in the eye of the beholder",
    "Beggars can’t be choosers",
    "Better late than never",
    "Birds of a feather flock together",
    "Cleanliness is next to godliness",
    "Don’t bite the hand that feeds you",
    "Don’t count your chickens before they hatch",
    "Don’t judge a book by its cover",
    "Don’t put all of your eggs in one basket",
    "Don’t put off until tomorrow what you can do today",
    "Don’t put too many irons in the fire",
    "Easy come, easy go",
    "Fortune favors the bold",
    "God helps those who help themselves",
    "Good things come to those who wait",
    "Honesty is the best policy",
    "Hope for the best, prepare for the worst",
    "If it ain’t broke, don’t fix it",
    "If you can’t beat them, join them",
    "If you play with fire, you’ll get burned",
    "If you want something done right, you have to do it yourself",
    "Keep your friends close, and your enemies closer",
    "Knowledge is power",
    "Laughter is the best medicine",
    "Like father, like son",
    "No man is an island",
    "People who live in glass houses should not throw stones",
    "Practice makes perfect",
    "The early bird gets the worm",
    "The enemy of my enemy is my friend",
    "The grass is always greener on the other side",
    "The pen is mightier than the sword",
    "The squeaky wheel gets the grease",
    "Time is money",
    "There is no place like home",
    "There is no such thing as a free lunch",
    "There is no time like the present",
    "Two heads are better than one",
    "Two wrongs don’t make a right",
    "When in Rome, do as the Romans do",
    "When the going gets tough, the tough get going",
    "Where there’s smoke, there’s fire",
    "You can lead a horse to water, but you can’t make him drink it",
    "You can’t always get what you want"
];
//#endregion

//#region   PRZYSŁOWIA POLSKIE
var proverbsPL = [
    "A co po czyjej wielkości, jak nie ma w głowie mądrości",
    "Apetyt rośnie w miarę jedzenia",
    "Atak jest najlepszą obroną",
    "Biednemu zawsze wiatr w oczy",
    "Co cię nie zabije, to cię wzmocni",
    "Co dwie głowy, to nie jedna",
    "Czego Jaś się nie nauczy, tego Jan nie będzie umiał",
    "Czuć się jak ryba w wodzie",
    "Człowiek człowiekowi wilkiem",
    "Darowanemu koniowi w zęby się nie zagląda",
    "Dopóty dzban wodę nosi, dopóki mu się ucho nie urwie",
    "Dzieci i ryby głosu nie mają",
    "Gdy kota nie ma, myszy harcują",
    "Gdzie diabeł nie może, tam babę pośle",
    "Gdzie drwa rąbią, tam wióry lecą",
    "Gdzie dwóch się bije, tam trzeci korzysta",
    "Gdzie kucharek sześć, tam nie ma co jeść",
    "Grosz do grosza, a będzie kokosza",
    "Głupich nie sieją, sami się rodzą",
    "Indyk myślał o niedzieli, a w sobotę łeb ucięli",
    "Jak sobie pościelesz, tak się wyśpisz",
    "Jedna jaskółka wiosny nie czyni",
    "Jeśli wejdziesz między wrony, musisz krakać jak i one",
    "Jeszcze się taki nie urodził, co by wszystkim dogodził",
    "Krowa, która dużo ryczy, mało mleka daje",
    "Kto pod kim dołki kopie, ten sam w nie wpada",
    "Lepiej dmuchać na zimne niż się gorącym sparzyć",
    "Lepszy wróbel w garści niż gołąb na dachu",
    "Mowa jest srebrem, a milczenie złotem",
    "Nie bądź w gorącej wodzie kąpany",
    "Nie chwal dnia przed zachodem słońca",
    "Nie czyń drugiemu, co tobie niemiłe",
    "Nie od razu Kraków zbudowano",
    "Nie wszystko złoto, co się świeci",
    "Niedaleko pada jabłko od jabłoni",
    "Nosił wilk razy kilka, ponieśli i wilka",
    "Od przybytku głowa nie boli",
    "Potrzeba jest matką wynalazków",
    "Prawdziwych przyjaciół poznaje się w biedzie",
    "Raz na wozie, raz pod wozem",
    "Stara miłość nie rdzewieje",
    "Ten się śmieje, kto się śmieje ostatni",
    "Trafiło się ślepej kurze ziarno",
    "Wszędzie dobrze, ale w domu najlepiej",
    "Wszystko dobre co się dobrze kończy",
    "Wymieniał stryjek siekierkę za kijek",
    "Z dużej chmury mały deszcz",
    "Zapomniał wół, kiedy cielęciem był",
    "Zgoda buduje, niezgoda rujnuje",
    "Ziarnko do ziarnka, a zbierze się miarka"
];
//#endregion

//#region   MENU GRY

//  START GRY
window.onload = loadGame;

function loadGame() {
    //Ustawia język domyślny na PL
    setLanguage();
}

//  USTAWIA DOMYŚLNY JĘZYK NA PL
function setLanguage() {
    document.getElementById("languagePL").checked = true;
    document.getElementById("languageENG").checked = false;

    document.getElementById("easyPL").checked = true;
}

//  ZMIENIA JĘZYK W MENU NA PL
function setPLmenu() {
    document.getElementById("menuPL").style.display = "flex";
    document.getElementById("menuENG").style.display = "none";
    sameDifficulty();
}

//  ZMIENIA JĘZYK W MENU NA ENG
function setENGmenu() {
    document.getElementById("menuPL").style.display = "none";
    document.getElementById("menuENG").style.display = "flex";
    sameDifficulty();
}

//  ZACHOWANIE POZIOMU TRUDNOŚCI
function sameDifficulty() {
    if (document.getElementById("easyPL").checked) document.getElementById("easyENG").checked = true;
    else if (document.getElementById("easyENG").checked) document.getElementById("easyPL").checked = true;

    if (document.getElementById("mediumPL").checked) document.getElementById("mediumENG").checked = true;
    else if (document.getElementById("mediumENG").checked) document.getElementById("mediumPL").checked = true;

    if (document.getElementById("hardPL").checked) document.getElementById("hardENG").checked = true;
    else if (document.getElementById("hardENG").checked) document.getElementById("hardPL").checked = true;
}

//  POWRÓT DO GŁÓWNEGO MENU
function mainMenu() {
    document.getElementById("menuPage").style.display = "block";
    document.getElementById("gamePage").style.display = "none";

    document.getElementById("buttons").style.display = "none";

    blanckPuzzle = "";
}
//#endregion

//#region   GRA
var puzzle = "";
var blanckPuzzle = "";
var proverbs = new Array();

var difficulty = "";
var maxMistakes = 0;
var mistakes = 0;

var yesSound = new Audio("sounds/yes.wav");
var noSound = new Audio("sounds/no.wav");

//#region  POZIOM TRUDNOŚCI
function selectedDifficulty() {
    if (document.getElementById("easyPL").checked || document.getElementById("easyENG").checked) {
        difficulty = "img/easy";
        maxMistakes = 9;
    }

    if (document.getElementById("mediumPL").checked || document.getElementById("mediumENG").checked) {
        difficulty = "img/medium";
        maxMistakes = 6;
    }

    if (document.getElementById("hardPL").checked || document.getElementById("hardENG").checked) {
        difficulty = "img/hard";
        maxMistakes = 3;
    }
}
//#endregion

//#region  STWORZENIE TABLICY Z LITERKAMI
function createLetters() {
    var letters = "";

    if (document.getElementById("languagePL").checked) {
        for (i = 0; i < alphabetPL.length; i++) {
            letters = letters + '<div id="sign' + i + '" class="letter" onclick="checkLetter(' + i + ')">' + alphabetPL[i] + "</div>";
        }
    }

    if (document.getElementById("languageENG").checked) {
        for (i = 0; i < alphabetENG.length; i++) {
            letters = letters + '<div id="sign' + i + '" class="letter" onclick="checkLetter(' + i + ')">' + alphabetENG[i] + "</div>";
        }
    }
    document.getElementById("alphabet").innerHTML = letters;
}
//#endregion

//#region  STWORZENIE OBRAZKA Z WISIELCEM
function createImage() {
    mistakes = 0;
    document.getElementById("image").innerHTML =
        '<img src="' + difficulty + '/s' + mistakes + '.jpg" alt="" />';
}
//#endregion

//#region  PRZYGOTOWANIE HASŁA

//  KOPIOWANIE WYBRANEJ TABLICY
function prepareProverbs() {
    if (document.getElementById("languagePL").checked) {
        proverbs = JSON.parse(JSON.stringify(proverbsPL));
        document.getElementById("playAgain").innerText = "Zagraj ponownie";
    }
    if (document.getElementById("languageENG").checked) {
        proverbs = JSON.parse(JSON.stringify(proverbsENG));
        document.getElementById("playAgain").innerText = "Play Again";
    }
}

//  POMOCNICZA FUNKCJA USUWAJĄCA WSKAZANY ELEMENT Z TABLICY
Array.prototype.removeElement = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

//  LOSOWANIE HASŁA DO ODGANIĘCIA
function randomPuzzle() {

    var rndNumber = Math.floor(Math.random() * proverbs.length);
    puzzle = proverbs[rndNumber];
    puzzle = puzzle.toUpperCase();
    proverbs.removeElement(rndNumber);

    writePuzzle();
}

//  ZAMIANA LITEREK NA PUSTE POLA
function writePuzzle() {
    for (i = 0; i < puzzle.length; i++) {
        if (puzzle.charAt(i) == " ") blanckPuzzle = blanckPuzzle + " ";
        else if (puzzle.charAt(i) == "’") blanckPuzzle = blanckPuzzle + "’";
        else if (puzzle.charAt(i) == ",") blanckPuzzle = blanckPuzzle + ",";
        else blanckPuzzle = blanckPuzzle + "_";
    }

    document.getElementById("puzzle").innerHTML = blanckPuzzle;
}
//#endregion

//#region  SPRAWDZENIE CZY LITERKA WYSTĘPUJE W HAŚLE
function checkLetter(n) {
    var hit = false;

    if (document.getElementById("languagePL").checked) {
        for (i = 0; i < puzzle.length; i++) {
            if (puzzle.charAt(i) == alphabetPL[n]) {
                blanckPuzzle = blanckPuzzle.changeSign(i, alphabetPL[n]);
                hit = true;
            }
        }
    }

    if (document.getElementById("languageENG").checked) {
        for (i = 0; i < puzzle.length; i++) {
            if (puzzle.charAt(i) == alphabetENG[n]) {
                blanckPuzzle = blanckPuzzle.changeSign(i, alphabetENG[n]);
                hit = true;
            }
        }
    }

    if (hit == true) {
        yesSound.play();
        document.getElementById("sign" + n).classList.add("hitTrue");
        document.getElementById("puzzle").innerHTML = blanckPuzzle;
    }
    if (hit == false) {
        noSound.play();
        document.getElementById("sign" + n).classList.add("hitFalse");
        mistakes++;
        document.getElementById("image").innerHTML =
            '<img src="' + difficulty + '/s' + mistakes + '.jpg" alt=""/>';
    }

    checkWin();
}

//  POMOCNICZA FUNKCJA ODSŁANIAJĄCA LITERKĘ
String.prototype.changeSign = function (space, sign) {
    if (space > this.length - 1) return this.toString();
    else return this.substr(0, space) + sign + this.substr(space + 1);
};
//#endregion

//#region  SPRAWDZENIE CZY WYGRANA LUB PRZEGRANA
function checkWin() {
    if (puzzle == blanckPuzzle) {
        if (document.getElementById("languagePL").checked)
            document.getElementById("alphabet").innerHTML =
                "Hurra! </br> Odgadłeś hasło!";
        else if (document.getElementById("languageENG").checked)
            document.getElementById("alphabet").innerHTML =
                "Hooray! </br> You solved the puzzle!";
        document.getElementById("alphabet").classList.add("alphabetEndGame");
        document.getElementById("buttons").style.display = "flex";
    }

    if (mistakes >= maxMistakes) {
        if (document.getElementById("languagePL").checked)
            document.getElementById("alphabet").innerHTML =
                "Przegrałeś! </br> Rozwiązanie to: </br>" + puzzle + ".";
        else if (document.getElementById("languageENG").checked)
            document.getElementById("alphabet").innerHTML =
                "You loose! </br> The correct answer is: </br>" + puzzle + ".";
        document.getElementById("alphabet").classList.add("alphabetEndGame");
        document.getElementById("buttons").style.display = "flex";
    }
}
//#endregion

//#region  PRZYCISK "PLAY AGAIN"
function playAgain() {
    document.getElementById("buttons").style.display = "none";
    blanckPuzzle = "";
    createImage();
    createLetters();
    randomPuzzle();
}
//#endregion


function startPlay() {

    // Zmiana wyświetlanej zawartości z MENU na GRA
    document.getElementById("menuPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";

    // Ustalenie poziomu trudności
    selectedDifficulty();

    // Skopiowanie tablicy z hasłami
    prepareProverbs();

    // Wygenerowanie obrazka, literek oraz hasła
    createLetters();
    createImage();
    randomPuzzle();
}
//#endregion