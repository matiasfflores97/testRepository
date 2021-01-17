/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

 $(document).ready(function () {
   $('.quick-links').slick({
    dots: false,
    arrows:true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1
  });
});


if(window.location.href.includes('/pages/sell-on-winehub')){
  document.addEventListener("DOMContentLoaded", function(){

    let modalPopUp = document.getElementById("myPopUpContact");
    let btnOpenPopUp = document.getElementById("myBtnContact");
    let spanClosePopUp = document.getElementsByClassName("close")[0];


      btnOpenPopUp.onclick = function() {
          modalPopUp.style.display = "block";
      }


      spanClosePopUp.onclick = function() {
          modalPopUp.style.display = "none";
      }


      window.onclick = function(event) {
        if (event.target == modalPopUp) {
            modalPopUp.style.display = "none";
        }
      }

  })
}

if(window.location.href.includes('/pages/customer-service')){
  document.addEventListener("DOMContentLoaded", function(){
  
    let openForm = document.getElementById('openFormContact');
    let formContact = document.querySelector('.container-Form');
    let itemsMobile = document.querySelectorAll('.item');
    let lineConnect = document.querySelector(".lineConnect");
    let downItems = document.querySelector(".info-page-content");
    
    window.addEventListener("resize", function(){ //Modifico la posicion del form dependiendo del resize
      
      if ( window.innerWidth <= 767 ) {

        itemsMobile[1].append(formContact)

      }else{
        
      	downItems.append(formContact)
        
      }
    
    })
    
    openForm.addEventListener("click", function(evt){
      
      if(openForm.classList.contains("containerImages")){
        
         openForm.classList.remove("containerImages")
         openForm.classList.add("containerImagesClick")
         openForm.children[1].style.color = "white"
         
         if ( window.innerWidth <= 767 ) { // Inserto elemento para mobile 

           itemsMobile[1].append(formContact)

         }
        
         formContact.style.display = "flex"
         lineConnect.style.display = "inline-block"
                     
       
      }else{
        
        openForm.classList.remove("containerImagesClick")
        openForm.classList.add("containerImages")
        openForm.children[1].style.color = "#010A4C"
        formContact.style.display = "none"
        lineConnect.style.display = "none"
        
      }
      
    })
    
  })
}

console.log("Git");