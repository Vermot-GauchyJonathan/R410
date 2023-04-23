
// Exercice 1


// 1.1
// a)
const personne1 = ["Vermot-Gauchy","Jonathan",19,1.70];

console.log(personne1);
// b)
const personne2 = {
    nom: "Vermot-Gauchy",
    prenom : "Jonathan",
    age: 19,
    taille: 1.70
};

console.log(personne2);

// c)

personne = personne2;
personne.prenom = "john";

console.log(personne);
console.log(personne2);

// on voit que personne et personne2 sont lies car en modifiant personne on a aussi
// modifie personne2


///////////////////////////////////////////////////////////////////////////////////////////
console.log("1.2")

// a, b
for (const property in personne) {
    console.log(`${property}`);
}
console.log(Object.keys(personne));
console.log(Object.getOwnPropertyNames(personne));

// c

personne.poids = "56,7kg"
console.log(Object.keys(personne));

// d
delete personne.poids;
console.log(Object.keys(personne));

///////////////////////////////////////////////////////////////////////////////////////////
console.log("1.3");

// a
let sports = {sport1 : "foot", sport2 : "volley", sport3 : "ping-pong"}
personne.sports = sports;

//b
console.log(personne);

//c
for (let i in personne.sports)
{
    console.log(personne.sports[i]);
}

//d
delete personne.sports;

sports = {nom : "volley", equipement : ["bras","motivation","integrale Haikyū!!"]};
personne.sports = sports;

for (let i in personne.sports)
{
    console.log(personne.sports[i]);
}

///////////////////////////////////////////////////////////////////////////////////////////
console.log("1.4");

//a
personne.qui = function (){
    console.log(this.prenom+" "+this.nom);
}

personne.qui();

//b
personne.quimaj = function (){
    console.log((this.prenom+" "+this.nom).toUpperCase());
}
personne.quimaj();

///////////////////////////////////////////////////////////////////////////////////////////
console.log("1.5");

//a
/*
var divpersonne = document.getElementById("personne");
let text = document.createElement("p").innerHTML = Object.values(personne);
divpersonne.appendChild(text);
 */


//b
console.log(JSON.stringify(personne));

//c
personne.dateNaissance = new Date(2003,12,4);
console.log(JSON.stringify(personne));
// la date n est pas la meme que celle rentre

//d
personne.age = function() {
    var diff = Date.now() - new Date(this.datenaissance).getTime();
    var ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
};

console.log(JSON.stringify(personne));
//il n y a aucune erreur



///Exercice 2

console.log("2.1");
//a,b
Object.defineProperty(personne, "lang", {
    get: function() { return this._langue; },
    set: function(value) { this._langue = value; }
});

//d
const obj = {
    counter: 0
};

Object.defineProperty(obj, 'reset', {
    get: function() {
        this.counter = 0;
        return this.counter;
    }
});

Object.defineProperty(obj, 'inc', {
    get: function() {
        this.counter++;
        return this.counter;
    }
});

Object.defineProperty(obj, 'dec', {
    get: function() {
        this.counter--;
        return this.counter;
    }
});

Object.defineProperty(obj, 'add', {
    set: function(value) {
        this.counter += value;
    }
});

Object.defineProperty(obj, 'subs', {
    set: function(value) {
        this.counter -= value;
    }
});


console.log("2.2")
//a
let Personne = class Personne {
    constructor(nom, prenom, age, couleurYeux) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.couleurYeux = couleurYeux;
    }

    name(){
        console.log("nom : "+this.nom + "\nprenom : "+this.prenom);
    }

    rename(Nnom){
        this.nom = Nnom;
    }
};

//b
let mere = new Personne("A","B", 19,"Bleu");
let pere = new Personne("C","D", 21,"Bleu");

//c
console.log(mere.name());

//d
mere.rename("Oui");
console.log(mere.name());

//f
//cf 1.5 question d


//Exercie 3


//tache 1
//a
let Personne2 = class Personne2 {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.estomac = [];
    }
};
//b
Personne2.prototype.manger = function(nourriture) {
    if (this.estomac.length < 10) {
        this.estomac.push(nourriture);
        console.log('j ai mange ' + nourriture);
    } else {
        console.log('estomac plein ');
    }
};
//c
Personne2.prototype.digestionOK = function() {
    this.estomac = [];
    console.log('estomac vide');
};

//d
Personne2.prototype.name = function() {
    return this.nom + ' ' + this.prenom;
};

let personneE = new Personne2('A', 'B');
console.log(personneE.name());
personneE.manger('pomme');
personneE.manger('pain');
personneE.manger('fromage');
personneE.digestionOK();


//tache2

let Car2 = class Car2 {
    constructor(modele, conso100km) {
        this.modele = modele;
        this.conso100km = conso100km;
        this.reservoirlitre = 0;
        this.compteurkm = 0;
    }
};



Car2.prototype.addFuel = function(nblt) {
    this.reservoirlitre += nblt;
};


Car2.prototype.drive = function(nbkm) {
    var conso = nbkm / 100 * this.conso100km;
    if (conso > this.reservoirlitre) {
        console.log("Je serai à cours de carburant dans " + (this.reservoirlitre / this.conso100km * 100) + " km");
        this.compteurkm += this.reservoirlitre / this.conso100km * 100;
        this.reservoirlitre = 0;
    } else {
        this.reservoirlitre -= conso;
        this.compteurkm += nbkm;
    }
};

var maVoiture = new Car2("C3", 5);
console.log(maVoiture.compteurkm);
console.log(maVoiture.reservoirlitre);

maVoiture.addFuel(50);
maVoiture.drive(100);
console.log(maVoiture.compteurkm);
console.log(maVoiture.reservoirlitre);

//tache 3


var Baby = class Baby extends Personne2{
    constructor(nom, prenom, age, jouetFavori) {
        super(nom, prenom, age);
        this.jouetFavori = jouetFavori;
    }
}

Object.setPrototypeOf(Baby.prototype, Personne2.prototype);

// méthode jouer spécifique à Baby
Baby.prototype.jouer = function() {
    return "Je joue avec mon jouet favori " + this.jouetFavori;
}

var bebe = new Baby("bebe", "Jean", 1, "peluche");
console.log(bebe.jouer());