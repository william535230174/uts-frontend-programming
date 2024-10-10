function displayCart() { 
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let cartTableBody = document.querySelector('.cart table tbody'); 

    cartTableBody.innerHTML = ''; 

    cart.forEach(item => {
        console.log("Image path:", `product/${item.image}`); 
        let row = `
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="${item.image}" alt="product-image" style="width: 100px;">
                        <div>
                            <p>${item.name}</p>
                            <a href="javascript:void(0);" onclick="removeFromCart('${item.name}')">REMOVE</a>
                        </div>
                    </div>
                </td>
                <td>${formatCurrency(item.price)}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)"></td>
                <td>${formatCurrency(item.price * item.quantity)}</td>
            </tr>
        `; 

        cartTableBody.innerHTML += row;
    });

    calculateTotal(); 
}

function calculateTotal() { 
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let subtotal = 0; 

    cart.forEach(item => {
        subtotal += item.price * item.quantity; 
    }); 

    document.querySelector('.total-price table').innerHTML = `
        <tr>
            <td>Subtotal</td>
            <td>${formatCurrency(subtotal)}</td>
        </tr>
        <tr>
            <td>Pajak</td>
            <td>${formatCurrency(subtotal * 0.1)}</td>
        </tr>
        <tr>
            <td>Total Harga</td>
            <td>${formatCurrency(subtotal + (subtotal * 0.1))}</td>
        </tr>
    `;
}

function formatCurrency(amount) { 
    return new Intl.NumberFormat('id-ID', {
        style: "currency", 
        currency: "IDR", 
        minimumFractionDigits: 0 
    }).format(amount).replace('Rp', 'IDR'); 
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); 
}

function updateQuantity(productName, newQuantity) { 
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let productIndex = cart.findIndex(item => item.name === productName); 

    if (productIndex > -1) { 
        cart[productIndex].quantity = parseInt(newQuantity); 
        localStorage.setItem('cart', JSON.stringify(cart)); 
        displayCart(); 
    }
}

window.onload = displayCart; 