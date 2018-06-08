// Spørgsmål 1: Hvad betyder det når vi definerer en klasse i JS?
// Svar 1: At definere en klasse er at skabe/bygge en ny klasse, så man kan kalde og dermed bruge den i fremtiden. Funktioner er det samme koncept, altså at man definere/bygger og kalder en funktion.  En klasse kan både  gøre ting men også bare indeholde data.
 
// Spørgsmål 2: Beskriv med dine egne ord hvad en constructor er.
// Svar 2: En contructor er det man bruger til at kalde/bruge en function eller klasse som allerede er defineret og derefter gå igennem de forudbestemte aktioner som er under klassen/funktionen.
 
// Spørgsmål 3: Hvilken datatype modtager denne constructor 
 
// Svar 3: den modtager et js objekt, og et eksempel med testdata  = 
// let slots =  {
//      “Isbn”: “9184236896”,
//      “title”:”iopug”,
//      “year”:”19048”
// }
   
// constructor
// (slots) {
//         this.isbn = ”123”;
//         this.title = ”
// title
// ”;
//         this.year = 1990;
//     };
 
// Spørgsmål 4-5: Hvad er en statisk metode og hvorfor skriver vi at det skal være sådan/Beskriv hvad convertRow2Obj metoden gør og hvordan den gør det.
// Svar 4-5: Statiske metoder er metoder som kun kan bruges direkte på klassen, og vi bruger en statisk metode af sikkerhedsmæssige årsager./Den hiver objekter ud fra local storage og konvertere dem til Book objekter 
 
// Let BookClassInstance = new Book({’title’: ’test’, ’isbn’: ’98721213h’, ’year’: 2198})
 
// Instance er en konkret forekomst af et objekt/ en instance er en kopi af et objekt
 
 
// Spørgsmål 6: hvad gør parse? Hvordan er bookTableString og bookTable anderledes?
// Svar 6: JSON.parse() konvertere en JSON string til et JS objekt. bookTable er en key til local storage, og bookTableString er local storage "map"et som er gemt som et object med andre objecter i sig ved brug af bookTable som key.
 
// Spørgsmål 7: Beskriv hvad Object.keys() metoden returnerer. Både hvilken datatype og ét eksempel på hvad keys variablen bliver sat til.
// Svar 7: Object.Keys(), returnerer keys (isbn), datatypen er et array med strings og et eksempel ville være "006251587X".
 
// Spørgsmål 8: Hvordan ser Book.instances og bookTableString ud? Og hvad er det funktionen stringify gør?
// Svar 8: Book.instances er samlingen af alle Book instanserne indtil videre, og bookTableString burde have en string i sig med alle de keys et Book objekt skal have (Isbn, Title, Year), stringify laver en JS værdi om til en JSON string.


// Spørgsmål 9: Hvorfor skal vi stringify() Book.instances for, at kunne bruge localStorage?
// Svar 9: Stringify laver Book.instances objectet om til en string fordi local storage APIen kun kan bruge strings.

// static add(slots) {
// Spørgsmål 10: Beskriv hvad der sker på næste linje.
// Book.instances[slots.isbn] = new Book(slots);
// console.log('Book ' + slots.isbn + ' created.')
// }; Der bliver tilføjet en ny instans af Book objektet, og man bruger slots.isbn som key når den skal gemmes i Book.instances "map"et, og derefter logger man "Book" efterfulgt af den specifikke isbn, osv.  
 


// // Spørgsmål 11: Nedenstående property er datatypen object. Hvordan ser dette Object ud når createTestData() har kørt?
// Den burde ligne lidt a la Book.instances{006251587X: Book {isbn: "006251587X", title: "Weaving the Web", year: 2000}, 0465026567: Book, 0465030793: Book}

// // Spørgsmål 12: Ud fra teorien om datastrukture er det så stillet op som en record eller et map? Hvorfor tror du at det er den datastruktur der er valgt?
// Jeg mener det er et map. Det virker som om at hele konceptet bag keys er en vigtig del af hele dette projekt, og keys bliver brugt i maps.
// // Spørgsmål 13: Hvilket formål har denne property i vores app?
// Den holder på alle instanserne af Book objectet, det ville sige at alle bøgerne havner inde i Book.instances.
// Book.instances = {};