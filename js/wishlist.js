function addToWishlist(name, image, price) {
        console.log("Tombol like diklik!"); 
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        const existingItem = wishlist.find(item => item.name === name);
        if (!existingItem) {
            wishlist.push({ name, image, price });
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert('Produk ditambahkan ke wishlist!');
        } else {
            alert('Produk sudah ada di wishlist.');
    }
}

function displayWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let wishlistContainer = document.getElementById('wishlist-items');
    wishlistContainer.innerHTML = ''; 

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = '<p>Wishlist Anda Kosong.</p>';
    } else {
        wishlist.forEach(item => {
            wishlistContainer.innerHTML += `
                <div class="wishlist-item">
                    <img src="${item.image}" alt="${item.name}" style="width: 100px;">
                    <p>${item.name}</p>
                    <p>IDR ${item.price.toLocaleString('id-ID')}</p>
                </div>
            `;
        });
    }
}


window.onload = displayWishlist;

document.addEventListener('DOMContentLoaded', function() {
    const wishlistItems = []; 
    const wishlistContent = document.getElementById('wishlist-content');
    const wishlistContainer = document.getElementById('wishlist-items');

    function renderWishlist(items) {
        wishlistContainer.innerHTML = '';

        items.forEach(item => {
            const itemHTML = `
                <div class="wish-list-item">
                    <div class="wish-list-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="wish-list-info">
                        <span>${item.brand}</span>
                        <a href="${item.link}">${item.description}</a>
                        <h4>${item.price}</h4>
                    </div>
                </div>
            `;
            wishlistContainer.innerHTML += itemHTML;
        });
    }

    if (wishlistItems.length > 0) {
        wishlistContent.style.display = 'none'; 
        renderWishlist(wishlistItems); 
    } else {
        wishlistContent.style.display = 'block'; 
    }
});
