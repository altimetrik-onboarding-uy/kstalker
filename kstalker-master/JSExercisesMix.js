
let select = document.getElementById('mySelect');

const cantItems = () => {
    let select = document.getElementById('mySelect');

    for (let i = 0; i < select.length; i++) {
       alert(select[i].text);
        
    }
}

const AddNewItem = (text, value) => {

    console.log(text, value);
    let arr = [];
    let select = document.getElementById('mySelect');
      
    for (let i = 0; i < select.length; i++) {
        arr.push(select[i]);        
     }

     let option = document.createElement('option');
     option.text = text;
     option.value = value;
     select.add(option);
     
     let span = document.getElementById("sp");
     let txt = document.createTextNode('New item added to the dropdown');
     span.appendChild(txt);
     span.setAttribute("style", "color: red;");

}

const findThird = (array) => {

    let first= array[0];
    let second = 0;
    let third =0;

    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if(element >= first) {
            third = second;
            second = first;
            first = element;
        }else if(element >= second){
            third = second;
            second = element;
        }else{
            third = element;
        }
        
    }
    console.log(`Third greatest number: ${third}`);
}

findThird([21,22,6,10,11,99]); //6

const clockWatch = () => {
    let date = new Date();
    const time = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;

    let input = document.getElementById("clock");
    input.value = time;
}

let myClock = setInterval(clockWatch, 1000);

const subset = (n) => {

    let arr = [];
    let arrFinal = [];
    let sNumber = n.toString();

    for(let i = 0; i< sNumber.length; i++){
        arr.push(sNumber[i]);
    }
    console.log(`Original Array: ${arr}`);

    arrFinal.push(arr[0]);
    arrFinal.push(arr[0] + arr[1]);
    arrFinal.push(arr[0] + arr[1] + arr[2]);
    arrFinal.push(arr[1]);
    arrFinal.push(arr[1] + arr[2]);
    arrFinal.push(arr[2]);

    console.log(`Final Array: ${arrFinal}`);
}
subset(173);