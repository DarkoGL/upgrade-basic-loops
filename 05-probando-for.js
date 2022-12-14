// **Iteración #5: Probando For**

// Usa un bucle **for** para recorrer todos los destinos del array y elimina
// los elementos que tengan el id 11 y 40.

// Imprime en un ***console log*** el array. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
  { id: 40, name: "Jamon" },
];

for(let i = 0; i < placesToTravel.length; i++){
    let placeToTravel = placesToTravel[i];

    if(placeToTravel.id === 11 || placeToTravel.id === 40) placesToTravel.splice(i,1);
}

console.log(placesToTravel);
