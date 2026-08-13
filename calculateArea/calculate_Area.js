let length;
let breadth;

function calculateArea(){
    length = parseFloat(document.getElementbyId('length').value);
    width = parseFloat(document.getElementbyId('breadth').value);

    let area = length*breadth;
}
document.getElementbyId('result').innerHTML = `The area of rectangle is: ${area}`;