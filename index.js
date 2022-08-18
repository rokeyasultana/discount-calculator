const discountButton = document.getElementById('discount-button').addEventListener('click', function () {

    //price 
    const price = document.getElementById('price');
    const priceString = price.innerText;
    const mainPrice = parseFloat(priceString);

 //discount-price
    const discountCode = document.getElementById('discount-code');
    const validCode = discountCode.value;
  

//coupon
    if (validCode !== 'DOM') {
        alert('Please type coupon code DOM')// error message
        discountCode.value = '';
        return;
    }
    else {
        const discount = (mainPrice / 100) * 30;
        const afterDiscount = mainPrice - discount;
        price.innerText = afterDiscount;
        discountCode.value = '';
    }
})