console.log('Zorg dat al jouw uitkomsten één voor één in de terminal worden gelogd! 📖');

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9 wanneer gelogd
// ==========================================

const nine = 4 + 5;
console.assert(nine === 9, "nine should be 9, not " + nine);
console.log("4 + 5 is", nine);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364 wanneer gelogd
// ==========================================

const b = 7 * 52;
console.assert(b === 364, "b should be 364, not " + b);
console.log("7 * 52 is", b);

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49 wanneer gelogd
// ==========================================

const c = (4 + 3) * 7;
console.assert(c === 49, "c should be 49");
console.log("4 + 3, times 7 is", c);

// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12 wanneer gelogd
// ==========================================

const d = (36 / 6) * 2;
console.assert(d === 12, "d should be 12");
console.log("36 divided by 6, mulitplied by 2 is", d);

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig' wanneer gelogd
// ==========================================

const sweet = "zoet";
const juicy = "sappig";
console.log("sweet + juicy is", sweet + juicy);

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters' wanneer gelogd
// ==========================================

const firstName = "Jurjen";
const lastName = "Vorhauer";
const fullName = firstName + " " + lastName;
console.log("full name is " + fullName);

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg wanneer gelogd
// ==========================================

const locality = "Almere";
const province = "Flevoland";
const location = locality + ", " + province;
console.log("location: " + location);
