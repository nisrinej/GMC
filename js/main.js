// function UpdateTotalPrice(){
//     let totalPrice = 0;
//     document.querySelectorAll('.card').forEach(element => { 
//      const unitPrice = parseFloat(element.querySelector('.unit-price').textContent.replace('$', '').trim());
//      const quantity = parseInt(element.querySelector('.quantity').value);
     
//      totalPrice += unitPrice * quantity;

//     });
//     document.querySelector('.total').textContent = `${totalPrice} $`;       
// }
// function UpdateTotalPrice() {
//     let totalPrice = 0;
//     document.querySelectorAll('.card').forEach(element => { 
//         const unitPrice = parseFloat(element.querySelector('.unit-price').textContent.replace('$', ''));
//         const quantity = parseInt(element.querySelector('.quantity').value);
        
//         totalPrice += unitPrice * quantity;
//     });
    
//     document.querySelector('.total').textContent = `${totalPrice.toFixed(2)} $`;       
// }
document.addEventListener('DOMContentLoaded', function () {
    function UpdateTotalPrice() {
        let total = 0;
        const products = document.querySelectorAll('.card');
        
        products.forEach(product => {
            const unitPrice = parseFloat(product.querySelector('.unit-price').textContent.replace('$', '').trim());
            const quantity = parseInt(product.querySelector('.quantity').textContent);
            total += unitPrice * quantity;
    
        });
    
        document.querySelector('.total').textContent = `${total} $`;
    }
    // plus Item
    document.querySelectorAll('.fa-plus-circle').forEach(plus =>{
     plus.addEventListener('click',function(){
        const quantityItem = this.nextElementSibling;
        let quantity = parseInt(quantityItem.textContent);
        console.log(quantity);
        quantityItem.textContent = quantity + 1;
        UpdateTotalPrice();
     })
    })
    // minus Item
    document.querySelectorAll('.fa-minus-circle').forEach(plus =>{
        plus.addEventListener('click',function(){
        const quantityItem = this.previousElementSibling;
           let quantity = parseInt(quantityItem.textContent);
           if(quantity > 0){
            quantityItem.textContent = quantity - 1;
            UpdateTotalPrice();
           }
           
        })
       })
    

    // Remove Item
    document.querySelectorAll('.fa-trash-alt').forEach(card =>{
        card.addEventListener('click', function(){
          const item = this.closest('.card')
          const cardImage = item.querySelector("img");
          item.remove();
          console.log(item);
          console.log(cardImage);
          //cardImage.remove();
        })
        UpdateTotalPrice();
    })
    
     //heart 
     document.querySelectorAll('.fa-heart').forEach(card =>{
        card.addEventListener('click', function(){
            this.classList.toggle('favorite');
            //console.log( document.querySelectorAll(fa-heart));
        })
        UpdateTotalPrice();
    })

    UpdateTotalPrice();

})
    







   