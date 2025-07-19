

let quantity = 0;
let cartCount = 0;

document.getElementById("increase").addEventListener("click", function() {
    quantity++;
    updateQuantity();
});

document.getElementById("decrease").addEventListener("click", function() {
    if (quantity > 0) {
        quantity--;
    }
    updateQuantity();
});

document.getElementById("add-to-cart").addEventListener("click", function() {
    cartCount += quantity;
    quantity = 0;
    updateQuantity();
    updateCartCount();
    alert(`Added items to the cart!`);
});

function updateQuantity() {
    document.getElementById("quantity").textContent = quantity;
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cartCount;
}


let currentImageIndex = 0;
const thumbnails = document.querySelectorAll('.thumbnail-container img');
const modal = document.getElementById("lightbox-modal");
const expandedImg = document.getElementById("expandedImg");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', function() {
        currentImageIndex = index;
        openModal(thumb.src);
    });
});

function openModal(src) {
    modal.style.display = "block";
    expandedImg.src = src;
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

prevBtn.onclick = function() {
    currentImageIndex = (currentImageIndex === 0) ? thumbnails.length - 1 : currentImageIndex - 1;
    expandedImg.src = thumbnails[currentImageIndex].src;
}

nextBtn.onclick = function() {
    currentImageIndex = (currentImageIndex === thumbnails.length - 1) ? 0 : currentImageIndex + 1;
    expandedImg.src = thumbnails[currentImageIndex].src;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}