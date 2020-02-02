let testHeader = (id) => {
      document.querySelector('#miHeader').innerHTML = 'This is mi code';
}



console.log(" ----------------- THIS - exercise 1 ----------------------- ")
const target = {
    values: [1,2,3,4,5],
    double: function() {
        this.values.forEach((e) => {
            // Get this to point to object.
            console.log(e);
        });
    }
};

let ex1 = target.double.bind(target);
ex1();

console.log(" ----------------- This - exercise 2 ----------------------- ")

let qs = () => {
    let x = document.querySelectorAll("p");

    x.forEach(element => {
        element.style.backgroundColor = 'red'
    });

    console.log(x);
}
