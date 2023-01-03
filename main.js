// === ALERT === pop up fenster (Info gebend)
/*  The alert() method displays an alert box with a message and an OK button.
The alert() method is used when you want information to come through to the user.

The alert box takes the focus away from the current window, and forces the user to read the message.
Do not overuse this method. It prevents the user from accessing other parts of the page until the alert box is closed. 
=== SYNTAX 
alert(message)
=== PARAMETERS
MESSAGE = Optional. The text to display in the alert box.
=== RETURN VALUE
NONE
*/

// window.alert("Hallo Welt");


// === PROMPT === (zum Data eingeben)
// window.prompt("Bitte geben Sie Ihren Namen ein.");


// === PROMPT === der zweite wert wird als placeholder ausgeführt..
/*  
=== SYNTAX 
prompt(text, defaultText)
=== PARAMETERS ===
TEXT = Optional. The text to display in the dialog box.
defaultTEXT =  Optional. The default input text.
=== RETURN VALUE ===
STRING = If the user clicks "OK", the input value is returned.
Otherwise null is returned.
*/

// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
// let person = prompt("Please enter your name", "Harry Potter");
/*  Prompt for a user name and output a message:
The prompt() method displays a dialog box that prompts the user for input.
The prompt() method returns the input value if the user clicks "OK", otherwise it returns null. 

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed.
Do not overuse this method. It prevents the user from accessing other parts of the page until the box is closed.*/

// === CONFIRM === (zustimmung gefordert)
// window.confirm("Stimmen Sie meiner Meinung zu?"); 
/*  The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.

The confirm() method returns true if the user clicked "OK", otherwise false. 
=== SYNTAX
confirm(message)
=== PARAMETERS
MESSAGE = Optional. The text to display in the confirm box.
=== RETURN VALUE
BOOLEAN = true if the user clicked OK, otherwise false.
*/



// === über CONSOLE.LOG ===

/* let alter = prompt( "Gib mir bitte dein Alter:" );
console.log(alter); */


// ALERT wert vorbestimmen
let b = 5;
let a = b * 5 -3;
alert(a);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse);

/*   === SEITEN zum THEMA ===

    https://www.w3schools.com/jsref/met_win_alert.asp

    https://www.w3schools.com/jsref/met_win_prompt.asp


    https://www.w3schools.com/jsref/met_win_confirm.asp


*/


// === 'n' === for a LINE BREAK ====
confirm("Press a button!\nEither OK or Cancel.");







