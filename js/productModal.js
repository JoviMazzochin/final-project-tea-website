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
    console.log(total);
    $('#productModal .amount').text(valor);
    setPriceCartModal();

});

function setPriceCartModal() {
    let finalPrice = $('#cartModal .amount').text() * 15;
    $('#final-price b').text('$' + finalPrice + ',00');
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
    console.log(document.querySelector('#productModal .modal-body'));
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
            <p class="card-text" id="final-price"><b>$ 15,00</b></p>
        </div>
    </div>
    <div class="col-12 modal-footer justify-content-center">
        <button id="addToCart" class="btn btn-outline-dark" data-toggle="modal"
            data-target="#cartModal">Add to Cart</button>
    </div>
    `;
    });
}


//FALAR COM A ANDRÉIA, SÓ ABRE O MODAL
addToCart = document.querySelector('#productModal #addToCart');
addToCart.addEventListener('click', function() {
    let col = document.querySelector('#cartModal .cart-img').querySelector.parentElement;
    console.log(col);
});
