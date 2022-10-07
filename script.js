'use strict';

// valeur du tip sélectionner

let tipValue = "";

// valuer de bill

let billValue = "";

// Nombre de personnes

let peopleValue = "";

// Sélecteurs

const tipChoice = document.querySelectorAll(".btn"); // n.b. : La fonction querySelectorsAll va créer une liste
const customTip = document.querySelector('#custom-tip');
const billInput = document.querySelector('#bill');
const peopleInput = document.querySelector('#number-people');
const resetButton = document.querySelector('#reset');
const tipAmount = document.querySelector('#tip-amount');
const totalResult = document.querySelector('#total');


// Récupération des valeurs de bill à chaque modifications

billInput.addEventListener('input', () => {
    billValue = Number(billInput.value);
    calculation();
});

// Récupération du nombre de personnes à chaque modifications

peopleInput.addEventListener('input', () => {
    peopleValue = Number(peopleInput.value);
    calculation();
});

// Fonction d'erreur si le nombre de personne est zero

const displayError = function (message) {
    document.querySelector('.error-people').textContent = message;
    peopleInput.classList.add("error-people-border");
    peopleInput.style.outlineColor = "#E17457";
}

const removeError = function () {
    document.querySelector('.error-people').textContent = "";
    peopleInput.classList.remove("error-people-border");
    peopleInput.style.outlineColor = "#26C2AE";
}

// 1. Récupération de la valeur du tip,
// 2. changer la couleur du bouton,
// 3. reset les autres boutons.
// n.b. : Cette fonction est call dans l'élément HTML <button> onClick="tip(tip, elementIndex)"

const tip = function (tip) {
    tipValue = Number(tip);
    calculation();
};


const calculation = function () {
    if (peopleValue > 0 && tipValue !== "" && billValue !== "") {

        // Calcul du tip

        const tipAmountTotal = ((billValue / 100) * tipValue);
        const tempTipAmountPerson = tipAmountTotal / peopleValue;
        const tipAmountPerson = Math.round(tempTipAmountPerson * 100) / 100;

        // Calcul du total

        const tempTotal = tipAmountTotal + billValue;
        const total = Math.round(tempTotal * 100) / 100;

        // Supprime l'erreur du nombre de personne

        removeError();

        // Affiche les résultats

        tipAmount.textContent = `$ ${tipAmountPerson}`;
        totalResult.textContent = `$ ${total}`;
    }  if (peopleValue > 0) {
        removeError();
    } else {
        // Affiche une erreur si le nombre de personne est à zero

        displayError(`Can't be zero`);
    }
};

// reset

resetButton.addEventListener('click', () => {
    tipValue = "";
    billValue = "";
    peopleValue ="";
    billInput.value = "";
    customTip.value = "";
    peopleInput.value = "";
    tipAmount.textContent = `$0.00`
    totalResult.textContent = `$0.00`
    tipChoice.forEach((element) => {
        element.checked = false;
    })
    removeError("");
});





