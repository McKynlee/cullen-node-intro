// console.log('JS here!');
// console.log('Yay 4 node!');

// Link to data on newFile, step 1:
let superHeroes = require('./newFile.js');

for (hero of superHeroes) {
  console.log(`${hero.name} wears ${hero.outfit}.`);
}

// with Node: no jQuery, no HTML, no alerts, no rendering
// we will be running https requests (or something like that?)
