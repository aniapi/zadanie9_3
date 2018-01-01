var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur ='triceratops';

var dinosaurUppercased = dinosaur.toUpperCase();

console.log(dinosaur.toUpperCase());

var textWithDinosaur = text.replace('Velociraptor', dinosaurUppercased);

console.log(textWithDinosaur);

var halfOfText = textWithDinosaur.slice(0,textWithDinosaur.length/2);

console.log(halfOfText);