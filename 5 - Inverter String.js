let string = ">>Insira aqui a string para inverter<<";
let novaString = "";

for(let i = string.length - 1; i >= 0; i--){
  novaString += string[i];
}

console.log(novaString);
