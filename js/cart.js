let deleteButtons = document.querySelectorAll('.delete-button');
let lines = document.getElementsByClassName('item-row');
setFinalPrice();

//Adding event to delete row.
for(i=0;i<deleteButtons.length;i++) {
    let button = deleteButtons[i]
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
}

document.querySelector('#finishOrder').addEventListener('click', function () {
    $("#cartModal").modal("hide");
    $("#thanksModal").modal("show");
});

