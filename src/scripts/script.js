import { savePassword } from "./localStorageCrud.js";
import generatePasswordLength from "./random_generator.js";

// le nom du site
let nomSiteElement = document.getElementById('nom-site')
let nomSite;

/*const nomSiteInputChange = nomSiteElement.addEventListener('change', (e) =>{
    //console.log(e.target.value);
    nomSite = e.target.value
})*/

//la taille du password
let passLengthElement = document.getElementById('pass_length_input')
let passLengthSpan = document.getElementById('pass_length')
let passLength;

const passLengthInputChange = passLengthElement.addEventListener('change', (e) =>{
    passLength = e.target.value
    passLengthSpan.innerText = passLength
})

//les checkbox
let majCheckBox = document.getElementById('maj')
let minCheckBox = document.getElementById('min')
let numCheckBox = document.getElementById('num')
let symbCheckBox = document.getElementById('symb')
//console.log(majCheckBox, minCheckBox, numCheckBox, symbCheckBox);
let isMaj, isMin, isNum, isSymb

/*const majCheckBoxChange = majCheckBox.addEventListener('change', (e) => {
    isMaj = e.target.checked
    //console.log(isMaj);
})

const minCheckBoxChange = minCheckBox.addEventListener('change', (e) => {
    isMin = e.target.checked
    //console.log(isMin);
})

const numCheckBoxChange = numCheckBox.addEventListener('change', (e) => {
    isNum = e.target.checked
    //console.log(isNum);
})

const symbCheckBoxChange = symbCheckBox.addEventListener('change', (e) => {
    isSymb = e.target.checked
    //console.log(isSymb);
}) */

// button genere
const generateBouton = document.getElementById('generer')
const motPasseParagraphe = document.getElementById('password')
//console.log(motPasseParagraphe);

const genererClick = generateBouton.addEventListener('click', (e) => {
    isMaj = majCheckBox.checked
    isMin = minCheckBox.checked
    isNum = numCheckBox.checked
    isSymb = symbCheckBox.checked
    //console.log(isMaj, isMin, isNum, isSymb);
    passLength = passLengthElement.value
    nomSite = nomSiteElement.value
    //console.log(nomSite);
    
    
    const mot_passe = generatePasswordLength(passLength, isMaj, isMin, isNum, isSymb)
    //console.log(mot_passe);
    motPasseParagraphe.innerText = mot_passe
    let response = savePassword(mot_passe, nomSite)
    if (!response) {
        alert("Erreur innatendue")
    } else{
        //alert('Sauvegarder')
    }

    // mis a jour des stats
    let totalCompteursElemet = document.getElementById('total')
    console.log(totalCompteursElemet);
    totalCompteursElemet.innerHTML = response.length
    
})


//nomSiteElement.removeEventListener('change',nomSiteInputChange)
passLengthElement.removeEventListener('change',passLengthInputChange)
/*majCheckBox.removeEventListener('change', majCheckBoxChange)
minCheckBox.removeEventListener('change', minCheckBoxChange)
numCheckBox.removeEventListener('change', numCheckBoxChange)
symbCheckBox.removeEventListener('change', symbCheckBoxChange)*/
generateBouton.removeEventListener('click', genererClick)