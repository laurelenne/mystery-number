// Généré un nombre aléatoire entre 0 et 100
var intRandom = Math.floor(Math.random() * 100) + 1;
// DOM elements
var progress = (".progress-bar").html;

var btnValid = ("#btn-valid").html;
var info = ('#info').html
var trys = [];
var compteur = 1;


function modifElement(chiffreGrandPetit, tabNumber, erreurInput) {
    newP1.textContent = chiffreGrandPetit;
    newP2.textContent = tabNumber;
    newP3.textContent = erreurInput;
}




// Check Input
const checkValue = () => {
var input = ("#input").val();
console.log(input);
    // Si la valeur n'est pas OK
        // Si la valeur n'est pas un nombre
            // Alors
        // Sinon si le nombre n'est pas comprise entre 0 et 100
    // Sinon si la valeur est OK

    // Input Value (String)
    var inputValue = document.getElementById('input').value;
    var typeOfinputValue = typeof(inputValue);
    var inputValueInt = parseInt(inputValue);

    if (inputValue.length == 0) {
        modifElement('Choisir un nombre entre 1 et 99', "", tabNumber);
        input.style.borderColor = "red";
    } else if (isNaN(inputValueInt) == true) {
        modifElement("Réessayer ce n'est pas un nombre", "", tabNumber);
        input.style.borderColor = "red";
    } else {
        if (inputValue.length > 2) {
            modifElement("Deux chiffre suffise !");
            input.style.borderColor = "red";
        } else {
            verif1(inputValueInt);
        }
    }
}

// Jeu
const verif1 = (inputValueInt) => {
    //S'il est correct
    if (inputValueInt === intRandom) {
        input.style.borderColor = "green";
        modifElement("Bravo !", "", tabNumber);
    }
    //S'il est faux et que le joueur a encore des chances
    else if ((inputValueInt != intRandom) && (compteur < 10)) {
        helpMessage(inputValueInt, intRandom);
        var chances = 10 - compteur;
        compteur++;
        tabNumber.push(inputValueInt);
        modifElement('Essaye encore tu as encore ' + chances + " chances", helpMessage(inputValueInt, intRandom), tabNumber);
    }
    //S'il est faux et que le joueur n'a plus de tour à jouer
    else if ((inputValueInt != intRandom) && (compteur >= 10)) {
        helpMessage(inputValueInt, intRandom);
    }
}

// Affiche si le chiffre a trouvé est plus grand ou plus petit
const helpMessage = (inputValueInt, intRandom) => {
    var message = "";
    inputValueInt < intRandom ? message = 'Le chiffre à trouver est plus grand' : message = 'Le chiffre à trouver est plus petit';
    return message;
};

btnValid.