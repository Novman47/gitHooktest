
///// NEW METHOD =OOP
let radius =[2, 4 ,3,7]

let radius2 = [5, 7 , 8]

const Area2 = function(radius){
    return (Math.PI*radius*radius);
}


const Cirum2 = function(radius){
    return (2*Math.PI*radius)
}

const dia2 = function(radius){
    return (2*radius)
}

Array.prototype.mainFunCal = function(logic){

    output=[];

    radius.forEach((r)=>{
    
     output.push(logic(r))

    })

    return output;
}

// console.log(mainFunCal(radius,Area2));
// console.log(mainFunCal(radius,Cirum2));
// console.log(mainFunCal(radius,dia2));


console.log(radius.map(Area2));
console.log(radius.mainFunCal(Area2));



console.log(radius2.mainFunCal(Area2));















