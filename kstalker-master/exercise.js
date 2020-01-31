console.log("------------------------------Smallest------------------------------");
//1
const smallest = (number1, number2, number3) =>{
    if(number1 < number2 && number1 < number3){
        return number1;
    }else if(number2 < number1 && number2 < number3){
        return number2;
    }else{
        return number3;
    }
}

console.log(smallest(10,-35,-123));
console.log(smallest(1,-78,15));
console.log(smallest(12,-99,1600));

console.log("------------------------------Sort(bubble)------------------------------");
//2
const sort = (arr) => {
    // let arr = [number1, number2, number3];
    let temp = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[i] > arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(sort([123, 54, 99]));

console.log("------------------------------Sort(conditionals)------------------------------");
//2.a with conditionals
const sortConditional = (n1,n2,n3) => {
    let arr = [];
    
    if(n1<n2 && n1<n3){
        if(n2<n3){
            arr.push(n1,n2,n3);
        }else{
            arr.push(n1,n3,n2);
        }
    }else if(n2<n1 && n2<n3){
        if(n1<n3){
            arr.push(n2,n1,n3);
        }else{
            arr.push(n2,n3,n1);
        }
    }else{
        if(n1<n2){
            arr.push(n3,n1,n2); 
        }else{
            arr.push(n3,n2,n1); 
        }
    }
    return arr;
}
console.log(sortConditional(123, 54, 99));

console.log("------------------------------even/odd------------------------------");

//3
const loop = () => {

    for(let i = 1; i < 22; i++){
        if(i % 2 === 0){
            console.log(`I'm an even: ${i}`)
        }else{
            console.log(`I'm an odd: ${i}`)
        }
    }
}
loop();

console.log("------------------------------Amstrong------------------------------");

//4
const amstrong = (number) => {
    
    let num_string = number.toString();
    let arr = num_string.split("", 4);

    if(arr[0]**4 + arr[1]**4 + arr[2]**4 + arr[3]**4 === number){
        console.log(`This is an amstrong number: ${number}`);
    }else{
        console.log(`This is not an amstrong number: ${number}`); 
    }
}

amstrong(1111); //no es
amstrong(8208); //es
console.log("------------------------------Pattern------------------------------");

//5
const pattern = () => {
   let ast = '';
   console.log(ast+='*')
   for(let i=0; i<4; i++){
        console.log(ast += '*');
    }
}

pattern();
