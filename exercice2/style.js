
// Exercice2
//sans regex
const codePostalSansRegex = prompt(" entrer le code postal")
if(String(codePostalSansRegex).length != 5 ||  !Number(codePostalSansRegex)){
    console.log("error")
} else {
    console.log("succès")
}

// avec regex
const codePostalAvecRegex = prompt(" entrer le code postal")
const numberRegex = /^[\d+]{5}$/;  
if(numberRegex.test(codePostalAvecRegex)){
    console.log("succès")
} else {
    console.log("error")
}