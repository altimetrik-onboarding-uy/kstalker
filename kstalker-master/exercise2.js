let testHeader = (id) => {
      document.querySelector('#miHeader').innerHTML = 'This is mi code';
}



console.log(" ----------------- exercise 1 ----------------------- ")
var target = {
    values: [1,2,3,4,5],
    double: function() {
        this.values.forEach(element => {
            // Get this to point to object.
            console.log(element);
        });
    }
};

this.target.double();

console.log(" ----------------- exercise 2 ----------------------- ")

let qs = () => {
    let x = document.querySelectorAll("p");

    x.forEach(element => {
        element.style.backgroundColor = 'red'
    });

    console.log(x);
}
