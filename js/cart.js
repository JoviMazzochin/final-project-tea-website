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
            // console.log(amount);
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
            // console.log(amount);
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

function setFreightPrice() {
    let freightAmount = document.getElementsByClassName('amount-cart');
    // console.log(freightAmount);
    let totalAmount = 0;
    for(i=0; i<freightAmount.length; i++) {
        let amount = Number(freightAmount[i].textContent);
        totalAmount += amount;
        // console.log(totalAmount);
    }
    let total = totalAmount * 2;
    $('#freight').text(total);
}

//Setting subtotal
function setFinalPrice(){
    setFreightPrice();
    let total = 0;
    let lines = document.getElementsByClassName('item-row');
    let freightTxt = $('#freight');
    let freight = Number(freightTxt.text());
    for(i=0;i<lines.length;i++) {
        let row = lines[i];
        let amountElement = row.getElementsByClassName('amount-cart')[0];
        let amount = amountElement.textContent;
        total = total + (15 * amount) ;
    }
    total = total + freight;
    $('#total').text(total);
    setPlotsTotal();
}

//increase plots
document.querySelector('#plots .increase-amount-plots').addEventListener('click', function() {
    let amountPlots = $('.amount-plots');
    let plots = amountPlots.text();
    plots ++;
    amountPlots.text(plots);
    setPlotsTotal();
})
//decrease plots
document.querySelector('#plots .decrease-amount-plots').addEventListener('click', function() {
    let amountPlots = $('.amount-plots');
    let plots = amountPlots.text();
    if(plots != 1) {
        plots --;
    }
    amountPlots.text(plots);
    setPlotsTotal();
})
//setting total with plots
function setPlotsTotal() {
    let subTotal = $('#total').text();
    let amountPlots = $('.amount-plots').text();
    let finalValue = (subTotal/amountPlots).toFixed(2);
    // console.log(finalValue);
    $('#total-plots').text(finalValue);
}

document.querySelector('#finishOrder').addEventListener('click', function () {
    $("#cartModal").modal("hide");
    $("#creditCardModal").modal("show");
});

// document.querySelector('#finishPurchase').addEventListener('click', function () {
//     $("#creditCardModal").modal("hide");
//     $("#thanksModal").modal("show");
// });

