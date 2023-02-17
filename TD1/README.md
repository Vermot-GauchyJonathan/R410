# M413 - TD1 : Réponses aux Questions

# 6 Exercice 1 : Commençons avec l’objet document

## 6.1 La propriété « document.title »

### Quel sera l’évènement qui déclenchera l’appelle de votre fonction ? 
    L'evenement sera onload.

### Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise <h1> ? 
    document.getElementById("title").innerHTML

### Quelle propriété de l’objet représentant votre balise <h1> avez-vous utilisée pour récupérer le texte de celui-ci ?
    J ai utilise son id.

### Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première 
balise <h2> ?
    document.getElementsByTagName("h2")[0]

### Comment faire pour connaitre le nombre de balise <h2> du document ? 
    document.getElementsByTagName("h2").length;

### Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?
    document.getElementsByClassName("firstOrLast");

### Comment avez-vous déterminé si un nombre est pair ?
    document.getElementsByClassName("firstOrLast").lenght%2 == 0


## 6.2 Les propriétés innerHTML, innerText ettextContent

###  Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ?
    innerHTML recupere l objet entier par exemple un titre.

    innerText sert a voir le rendu qu'un utilisateur aurait.

    textContent sert a modifier le directement le text d un noeud


## 6.3 La propriété document.lastModified

### Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ?
    document.querySelector('meta[name]').firstChild.getAttribute("content");

### Même question avec le dernier auteur de la liste.
    document.querySelector('meta[name]').lastChild.getAttribute("content");

# 7 Exercice 2 : l’objet Date

### Comment obtenez-vous le nombre de jours ?
    Avec la methode Date.now() pour avoir la date actuelle et la date cible avec la methode Date.parse() puis je fais la difference entre la date cible et la date actuelle et enfin je convertis le resultat obtenu en milliseconde en jour.

### Comment faites-vous la mise à jour du texte ?
    Avec : document.getElementById("texteJMoinsX").innerHTML = ""
    avec texteJMoinsX l id de ma balise p et "" le resultat obetenu avant


## 7.1 setInterval() et setTimeout()
### Laquelle des deux méthodes de l’objet window avez-vous utilisé ? Pourquoi ?
    J'ai utilisé setInterval() car cette fonction est appelé en bloucle contrairement a setTimeout()


# 8 Exercice 3 : HTML, CSS et JavaScript (obligatoire)

## 8.1 Champ Texte et Couleur d’arrière-plan

### Quel évènement avez-vous utilisé ?
    J ai utilise l evenement keyup

###  Comment avez-vous fait changer la couleur du champ texte ?
    J ai change la classe de l element input ce qui a pris les couleur assoiser a la classe dans le CSS










