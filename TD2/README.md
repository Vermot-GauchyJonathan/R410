# M413 - TD2 : Réponses aux Questions

# Exercice 1
## 6.1  
### Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?
    document.getElementsByTagName("body")[0].addEventListener('click',initSelect);
    
    J ai selectionné le body et apres j ai ajouté un listener dessus.

### Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?
    currentTarget applique l effet sur l element qui a le listener 
    target applique l effet sur l element qu on click

## 6.2
### Comment avez-vous ajouté l’élément ?
    Avec la fonction insertBefore de js

### Comment avez-vous fait pour que la fonction select2() ignore les évèments de la <div> donnée ci-dessus ?
    J ai fait une verification de l id de l element cible par select2

# Exercice 2