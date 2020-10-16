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
  if(valor != 1) {
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