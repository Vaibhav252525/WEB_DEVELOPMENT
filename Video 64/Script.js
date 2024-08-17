//Random name generator


let rand=Math.random()
let first, second,third;
if(rand<0.33){
    first="Apple"
}
else if(rand>0.33 && rand<0.66){
    first="my"
}
else{
    first="favourite"
}

rand=Math.random()
if(rand<0.33){
    second="Banana"
}
else if(rand>0.33 && rand<0.66){
    second="your"
}
else{
    second="straught"
}

rand=Math.random()
if(rand<0.33){
    third="papaya"
}
else if(rand>0.33 && rand<0.66){
    third="our"
}
else{
    third="little"
}

console.log(`${first} ${second} ${third}`);