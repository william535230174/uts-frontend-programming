function addToWishlist(name, image, price) {
    console.log("Tombol like diklik"); 
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
        wishlistContainer.innerHTML = 
        '<p>Wishlist Anda kosong, Anda dapat mencari produk favorit anda dan tambahkan ke dalam wishlist.</p>' + 
        '<a href="koleksi.html" style="font-weight: bold; color:black;">Klik Untuk Temukan Favorit Anda</a>'; 
    } else {
        wishlist.forEach(item => {
            wishlistContainer.innerHTML += `
            <div class="wish-list-item">
                <div class="wish-list-img">
                    <a href="#product" class="list-view">
                        <img src="${item.image}" alt="list-img-1">
                    </a>
                    <span class="wish-list-like">
                        <img src="https://img.icons8.com/?size=100&id=87397&format=png&color=000000" 
                        alt="like-icon" style="width: 30px;" onclick="removeFromWishlist('${item.name}')"> 
                    </span>
                    <ul class="wish-list-info-btn">
                        <a href="javascript:void(0);" class="wish-list-btn" onclick="addToCart('${item.name}', ${item.price}, '${item.image}')">TAMBAH KE KERANJANG</a>
                    </ul>
                </div>
                <div class="wish-list-info">
                    <span>${item.name}</span>
                    <h4>IDR ${item.price.toLocaleString()}</h4>
                </div>
            </div>
            `;
        });
    }
}

function removeFromWishlist(productName) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; 
    wishlist = wishlist.filter(item => item.name !== productName); 
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
    displayWishlist(); 
}

function addToCart(productName, price, image) { 
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 

    let productIndex = cart.findIndex(item => item.name === productName); 

    if (productIndex > -1) { 
        cart[productIndex].quantity += 1; 
    } else { 
        cart.push ({
            name: productName, 
            price: price, 
            quantity: 1,
            image: image 
        }); 
    }

    localStorage.setItem('cart', JSON.stringify(cart)); 
    alert(productName + " berhasil ditambahkan ke keranjang!");

    removeFromWishlist(productName);
}

window.onload = displayWishlist; 
