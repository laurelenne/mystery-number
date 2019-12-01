//Généré un nombre aléatoire entre 0 et 100
let intRandom = Math.floor(Math.random() * 100) + 1;
console.log(intRandom);
let input = document.getElementById('input');
const button = document.getElementById("bouton");
// Tableau vide des essais
let tabNumber = [];

let compteur = 1;

let b = document.body;

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

let newP1 = document.createElement('p',{class:"col text-light"});
let newP2 = document.createElement('p',{class:"col text-light"});
let newP3 = document.createElement('p', {class:"col text-light"});

//Ajoute un paragraphe après p1
p1.insertAdjacentElement('beforeend', newP1);
p2.insertAdjacentElement('beforeend', newP2);
p3.insertAdjacentElement('beforeend', newP3);

function modifElement(chiffreGrandPetit, tabNumber, erreurInput) {
    newP1.textContent = chiffreGrandPetit;
    newP2.textContent = tabNumber;
    newP3.textContent = erreurInput;
}

// Verifs Input
const verif = () => {
    // Input Value (String)
    let inputValue = document.getElementById('input').value;
    let typeOfinputValue = typeof (inputValue);
    let inputValueInt = parseInt(inputValue);

    if (inputValue.length == 0) {
        console.log('Choisir un nombre entre 1 et 99');
        modifElement('Choisir un nombre entre 1 et 99', "", tabNumber);
        input.style.borderColor = "red";
    } else if (isNaN(inputValueInt) == true) {
        console.log("Réessayer ce n'est pas un nombre");
        modifElement("Réessayer ce n'est pas un nombre", "", tabNumber);
        input.style.borderColor = "red";
    } else {
        console.log("C'est bien un nombre");
        if (inputValue.length > 2) {
            modifElement("Deux chiffre suffise !");
            console.log('Deux chiffre suffise !', "", tabNumber)
            input.style.borderColor = "red";
        } else {
            console.clear();
            verif1(inputValueInt);
        }
    }
}

// Jeu
const verif1 = (inputValueInt) => {
    //S'il est correct
    if (inputValueInt === intRandom) {
        console.log("Bravo");
        input.style.borderColor = "green";
        modifElement("Bravo !", "", tabNumber);
    }
    //S'il est faux et que le joueur a encore des chances
    else if ((inputValueInt != intRandom) && (compteur < 10)) {
        helpMessage(inputValueInt, intRandom);
        let chances = 10 - compteur;
        console.log('Essaye encore tu as encore ' + chances + " chances");
        compteur++;
        tabNumber.push(inputValueInt);
        console.log("Tu as déjà essayer : " + tabNumber.toString());
        modifElement('Essaye encore tu as encore ' + chances + " chances", helpMessage(inputValueInt, intRandom), tabNumber);
    }
    //S'il est faux et que le joueur n'a plus de tour à jouer
    else if ((inputValueInt != intRandom) && (compteur >= 10)) {
        helpMessage(inputValueInt, intRandom);
        console.log("Tu n'a plus de chance !");
        console.log('FIN');
    }
}

// Affiche si le chiffre a trouvé est plus grand ou plus petit
const helpMessage = (inputValueInt, intRandom) => {
    let message = "";
    inputValueInt < intRandom ? message = 'Le chiffre à trouver est plus grand' : message = 'Le chiffre à trouver est plus petit';
    return message;
};