const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const burguerIcon = document.querySelector(".menu");
const closeDetail = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-product')


document.addEventListener("DOMContentLoaded", function(event) {
    navEmail.addEventListener('click', toggleDesktopMenu); 
    burguerIcon.addEventListener('click', toggleMobileMenu);
    menuCart.addEventListener('click', toggleCartMenu);
    menuCart.addEventListener('click',toggleDesktopClosed);
    closeDetail.addEventListener('click', closeProduct)
});

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    
}
function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
}
const menuCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail")

function toggleCartMenu(){
    menuMobile.classList.add('inactive');
    aside.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive')
}
function toggleDesktopClosed(){
    !aside.classList.contains('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
}
//PArte de la Carta
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    aside.classList.add('inactive');
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProduct(){
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Television',
    price: 220,
    image: "https://images.pexels.com/photos/13806260/pexels-photo-13806260.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productList.push({
    name: 'Phone',
    price: 420,
    
    image: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Television',
    price: 220,
    image: "https://images.pexels.com/photos/13806260/pexels-photo-13806260.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productList.push({
    name: 'Phone',
    price: 420,
    
    image: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

function renderProductList(arr){
    for( product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' );
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProductList(productList)
/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p> product.price >
            <p>Bike</p> product.name
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
      */