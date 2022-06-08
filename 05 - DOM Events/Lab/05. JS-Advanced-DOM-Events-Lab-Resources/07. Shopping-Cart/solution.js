function solve() {
   let addButtonElement = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea');
   let checkoutButtonElement = document.querySelector('.checkout');

   let sum = 0;
   let productsOrdered = []; 
   
   for (let product of addButtonElement) {
      product.addEventListener('click', (e) => {
         let currentProductElement = e.currentTarget.parentElement.parentElement;
         let productName = currentProductElement.querySelector('.product-title').textContent;
         let productPrice = Number(currentProductElement.querySelector('.product-line-price').textContent);
         
         sum += productPrice;
         if (!productsOrdered.includes(productName)) {
            productsOrdered.push(productName);
         }

         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      })
   };

   checkoutButtonElement.addEventListener('click', function(e) {
      textAreaElement.textContent += `You bought ${productsOrdered.join(', ')} for ${sum.toFixed(2)}.`;
      let allButtons = document.querySelectorAll('button');
      for (let button of allButtons) {
         button.disabled = true;
      }
   });

}