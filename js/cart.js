let deleteButtons = document.querySelectorAll('.delete-button');
setFinalPrice()


let lines = document.getElementsByClassName('item-row');
for(i=0;i<lines.length;i++) {
    let row = lines[i]
        let increase = row.querySelector('.increase-amount-cart');
        increase.addEventListener('click', function() {
                let amountElement = row.getElementsByClassName('amount-cart')[0];
                let amount = amountElement.textContent;
                amount++;
                amountElement.textContent = amount;
                console.log(amount);
                let price = row.getElementsByClassName('product-price')[0]
                price.innerText = '$' +(15 * amount) + ',00';
                setFinalPrice()
        })

}

for(i=0;i<lines.length;i++) {
    let row = lines[i]
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
                price.innerText = '$' +(15 * amount) + ',00';
                setFinalPrice()
        })

}




//Adding event to delete row
for(i=0;i<deleteButtons.length;i++) {
    let button = deleteButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        setFinalPrice();
    });
}


//Set total
function setFinalPrice(){
    let total = 0;
    let lines = document.getElementsByClassName('item-row');
    for(i=0;i<lines.length;i++) {
        let row = lines[i]
        let amountElement = row.getElementsByClassName('amount-cart')[0];
        let amount = amountElement.textContent;
        total = total + (15 * amount) ;
        // console.log(amount);
    }
    $('#total').text(total);
}

function setProductPrice() {

}




