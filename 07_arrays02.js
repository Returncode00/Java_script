const marvelHeros = ["spiderman" , "Catman" , "Aluvaja" , "Ironman"]
const dcHeros     = ["Superman" , "Begunvaja" , "Ratman" ,"Batman"]

marvelHeros.push(dcHeros)
console.log(marvelHeros);
console.table(marvelHeros);
marvelHeros.pop(dcHeros);


const newArray = marvelHeros.concat(dcHeros);
console.log(newArray);
console.table(newArray);