function addToCart (productName, price, image) { 
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

    localStorage.setItem ('cart', JSON.stringify(cart)); 

    alert (productName + "Berhasil ditambahkan ke keranjang!")
}