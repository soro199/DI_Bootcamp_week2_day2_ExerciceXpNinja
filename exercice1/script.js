// Exercice1

//Given the years two people were born, find the date when the younger one is exactly half the age of the older.
let dateActuel = new Date().getFullYear();
let dateDeNaissanceP1 = prompt("Entrer la date de naissance de la premiere personne")
let dateDeNaissanceP2 = prompt("Entrer la date de naissance de la deuxieme personne")
// verifier si les valeurs entrées sont des nombres
if(!Number(dateDeNaissanceP1) || !Number(dateDeNaissanceP2)) {
    console.log('La date de naissance doit etre un nombre et de format YYYY')
}else{
    let agePersonne1 = dateActuel - dateDeNaissanceP1
    let agePersonne2 = dateActuel - dateDeNaissanceP2
    let dateExact; //le Nombre d'année ajouté sur l'année actuelle pour que lepersonnage2 ait la moitié de l'age du personnage1 
    if (agePersonne1 > agePersonne2) {
        dateExact = agePersonne1 - 2*agePersonne2;
    }
    else {
        dateExact = agePersonne2 - 2*agePersonne1;
    }
    console.log(dateExact)
    console.log(dateActuel)
    let dateMoitiePersonne1 = dateActuel + dateExact
    let message = "L'année à laquelle l'age de la personne 2 est la moitié de l'age de la personne 1 est " + String(dateMoitiePersonne1)
    console.log(dateMoitiePersonne1)
    alert(message);
}  

