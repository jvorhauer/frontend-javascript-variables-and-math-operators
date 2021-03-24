// ==========================================
// 0. Voorbeeldvraag: maak en variabele genaamd start met daarin het woord Let's go!
// ==========================================

const start = "Let's go!";
console.warn("Start! " + start);

// ==========================================
// 1. Declareer een variabele om jouw naam in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================

const name = "Jurjen";
console.assert(name === "Jurjen");

// ==========================================
// 2. Declareer een variabele om de kleur van jouw ogen in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================

const eyeColor = "brown";
console.assert(eyeColor === "brown");

// ==========================================
// 3. Declareer een variabele om jouw leeftijd in op te slaan en zet de waarde erin. De variabele moet later overschreven kunnen worden.
// ==========================================

let age = 53;
console.assert(age === 53, "age must be " + age);

// ==========================================
// 4. Declareer een variabele om jouw beroep in op te slaan en zet de waarde erin. De variabele moet later overschreven kunnen worden.
// ==========================================

let occupation = "Developer";
console.assert(occupation === "Developer", "What? You're a " + occupation + " now? What happened to developer?");

// ==========================================
// 5. Declareer een variabele om jouw schoenmaat in op te slaan en zet de waarde erin. De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================

const shoeSize = 45;
console.assert(shoeSize === 45, "Shoe size should be 45");

// ==========================================
// 6. Declareer een variabele om in op te slaan of je een partner hebt of niet. De variabele moet later overschreven kunnen worden.
// ==========================================

let hasPartner = true;
console.assert(hasPartner, "Bad move, never leave your partner");

// ==========================================
// 7. Declareer een variabele om het aantal kinderen in op te slaan. De variabele moet later overschreven kunnen worden.
// ==========================================

let childCount = 1;
console.assert(childCount === 1, "Don't overdo it");

// ==========================================
// 8. Gebruik jouw variabelen nu om hun waardes te loggen in de terminal. Klopt het allemaal?
// ==========================================

console.info("Name: " + name + ", eye color: " + eyeColor + ", age: " + age);
