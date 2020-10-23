let deleteButtons = document.querySelectorAll('.delete-button');
let lines = document.getElementsByClassName('item-row');
setFinalPrice();

function cartModalIncreaseDecreaseDelete(row) {
    let increase = row.querySelector('.increase-amount-cart');
    increase.addEventListener('click', function() {
            let amountElement = row.getElementsByClassName('amount-cart')[0];
            let amount = amountElement.textContent;
            amount++;
            amountElement.textContent = amount;
            console.log(amount);
            let price = row.getElementsByClassName('product-price')[0]
            price.innerText = '$' +(15 * amount) + ',00';
            setFinalPrice();
    });
//decrease amount and setting price for each product
    let decrease = row.querySelector('.decrease-amount-cart');
    decrease.addEventListener('click', function() {
            let amountElement = row.getElementsByClassName('amount-cart')[0];
            let amount = amountElement.textContent;
            if(amount != 1){
                amount--;
            }
            amountElement.textContent = amount;
            console.log(amount);
            let price = row.getElementsByClassName('product-price')[0]
            price.innerText = '$' + (15 * amount) + ',00';
            setFinalPrice();
            
    });
    //Adding event to delete row.
    let button = row.querySelector('.delete-button');
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        setFinalPrice();
    });
}

//Set total
function setFinalPrice(){
    let total = 0;
    let lines = document.getElementsByClassName('item-row');
    for(i=0;i<lines.length;i++) {
        let row = lines[i];
        let amountElement = row.getElementsByClassName('amount-cart')[0];
        let amount = amountElement.textContent;
        total = total + (15 * amount) ;
    }
    $('#total').text(total);
    setPlotsTotal();
}


document.querySelector('#plots .increase-amount-plots').addEventListener('click', function() {
    let amountPlots = $('.amount-plots');
    let plots = amountPlots.text();
    plots ++;
    amountPlots.text(plots);
    setPlotsTotal();
})

document.querySelector('#plots .decrease-amount-plots').addEventListener('click', function() {
    let amountPlots = $('.amount-plots');
    let plots = amountPlots.text();
    if(plots != 1) {
        plots --;
    }
    amountPlots.text(plots);
    setPlotsTotal();
})

function setPlotsTotal() {
    let subTotal = $('#total').text();
    let amountPlots = $('.amount-plots').text();
    let finalValue = (subTotal/amountPlots).toFixed(2);
    console.log(finalValue);
    $('#total-plots').text(finalValue);
}


document.querySelector('#finishOrder').addEventListener('click', function () {
    $("#cartModal").modal("hide");
    $("#thanksModal").modal("show");
});

