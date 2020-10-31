
function setPriceProductModal() {
    let amount = $('#productModal .amount').text();
    let total = 15 * amount;
    $('#final-price b').text(total);
}

function productModalAmountIncreaseAndDecrease() {
    //Increasing amount inside the productModal
    $('#productModal .increase-amount').click(function () {
        let valor = $('#productModal .amount').text()
        valor++;
        $('#productModal .amount').text(valor);
        setPriceProductModal();
    });

    //Decreasing amount inside the productModal
    $('#productModal .decrease-amount').click(function () {
        let valor = $('#productModal .amount').text()
        if (valor != 1) {
            valor--;
        }
        $('#productModal .amount').text(valor);
        setPriceProductModal();
    });
}

//Dúvida com Andréia
let buttonsBuyNow = document.getElementsByClassName('card-buy-now');
 console.log(buttonsBuyNow);
for (let i = 0; i < buttonsBuyNow.length; i++) {
    let button = buttonsBuyNow[i]; //Remover let para testar
    button.addEventListener('click', function () {
    let image = button.parentElement.parentElement.parentElement;
    // console.log(image);
    image = image.querySelector('img').src;
    document.querySelector('#productModal .modal-body img').remove();
    // console.log(document.querySelector('#productModal .modal-body'));
    // console.log(document.querySelector('#productModal .modal-body .card-img'));
    document.querySelector('#productModal .modal-body').innerHTML = 
    `
    <img src="${image}" class="selected-img card-img image-card-size" alt="...">
    <div class="card-body">
        <div class="text-center">
            
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex justify-content-center my-3">
                <span><i class="increase-amount fa fa-plus mr-3"></i></span>
                <p class="amount">1</p>
                <span><i class="decrease-amount fa fa-minus ml-3"></i></span>
            </div>
            <div class="d-flex justify-content-center">
                <p class="card-text"><b>$</b></p>
                <p class="card-text" id="final-price"><b>15</b></p>
                <p class="card-text"><b>,00</b></p>
            </div>
        </div>
    </div>
    <div class="col-12 modal-footer justify-content-center">
        <button id="addToCart" class="btn btn-outline-dark">Add to Cart</button>
    </div>
    `;
    addToCartActionClick();
    productModalAmountIncreaseAndDecrease();
    });
}




function addToCartActionClick() { 
    document.querySelector('#addToCart').addEventListener('click', function() {
    $("#productModal").modal("hide");
    $("#cartModal").modal("show");

    let tbody = document.querySelector('.table tbody');
    let image = document.querySelector('#productModal img');
    let amount = document.querySelector('#productModal .amount').textContent;
    let price = document.querySelector('#final-price b').textContent;
    console.log(price);
    image = image.src; 
    // console.log(image);
    // console.log(tbody);
    let row = document.createElement('tr');
    row.classList.add('item-row');
    row.classList.add('align-items-center');
    row.classList.add('my-2');
    row.innerHTML = 
    `
        <td class="round-button mr-5 align-items-center vertical-align-middle" >
            <span class="delete-button fa fa-times"></span>
        </td>
        <td class="small-img mx-3 vertical-align-middle cart-img">
            <img src="${image}" alt="">
        </td>
        <td class="product-description-cart mx-3 vertical-align-middle">
            <p>Lorem ipsum dolor sit amet vitae quae dolores nulla odit voluptatibus.</p>
        </td>
        <td class="amount-container mx-3 vertical-align-middle">
            <div class="d-flex justify-content-center my-3">
                <span><i class="increase-amount-cart fa fa-plus mr-3"></i></span>
                <p class="amount-cart">${amount}</p>
                <span><i class="decrease-amount-cart fa fa-minus ml-3"></i></span>
            </div>
        </td>
        <td class="price vertical-align-middle">
            <p class="product-price">$${price},00</p>
        </td>
    `;
    tbody.appendChild(row);
    cartModalIncreaseDecreaseDelete(row);
    setFinalPrice();
    setPlotsTotal();
    setFreightPrice();
})}
