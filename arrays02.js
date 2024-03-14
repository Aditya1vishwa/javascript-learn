const marvel_heroes =["thor","ironman","captan"];
const dc_heroes=["superman","batman","flash"]

//marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes);
//push put array in array

const combine=marvel_heroes.concat(dc_heroes);
console.log(combine);
//it combine the array

const all_new_heroes=[...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);
