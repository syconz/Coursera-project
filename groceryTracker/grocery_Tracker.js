
let gc2;
let gc3;

function groceryTracker(){
    let gc1 = parseFloat(document.getElementById('grocery1').value);
    let gc2 = parseFloat(document.getElementById('grocery2').value);
    let gc3 = parseFloat(document.getElementById('grocery3').value);

    let total = gc1+gc2+gc3;

    document.getElementById('result').innerText=`The total amount is :$ ${total}`;
}