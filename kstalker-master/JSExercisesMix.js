
let select = document.getElementById('mySelect');

let cantItems = () => {
    // debugger;
    let select = document.getElementById('mySelect');

    for (let i = 0; i < select.length; i++) {
       alert(select[i].text);
        
    }
}

let AddNewItem = (text, value) => {

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

let findThird = (array) => {
   // debugger;
    let first= array[0];
    let second = 0;
    let third =0;
    // if(arr != undefined){
    //     arr.forEach((e) => {
    //         if(e > may){
    //             may = e;
                
    //         }
    //     });
    // }

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

let clockWatch = () => {
    let contador = 0;
    let date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    let input = document.getElementById("clock");
    input.value = time;

    console.log(time);

}

let myClock = setInterval(clockWatch, 20000);


console.log(" ----------------- THIS - exercise 1 ----------------------- ")
var target = {
    values: [1,2,3,4,5],
    double: function() {
        this.values.forEach(function() {
            // Get this to point to object.
            console.log(this);
        });
    }
};

target.double();