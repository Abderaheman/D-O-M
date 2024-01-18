const products = [
    { id: 1, name: 'Produit 1', price: 20.00 },
    { id: 2, name: 'Produit 2', price: 30.00 },
    { id: 3, name: 'Produit 3', price: 15.00 }
];

const cart = [];

function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = product.price * item.quantity;
        totalPrice += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.innerHTML = `${product.name} - $${product.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
        cartContainer.appendChild(itemElement);
    });

    document.getElementById('total').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    displayCart();
}

// Initial display
displayCart();
function sdsd (a) {
    var imageContainer = document.getElementById('section3logos');
    console.log('gff');
// Sélectionnez toutes les images à l'intérieur du conteneur
var images = imageContainer.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
// Modifiez la largeur de chaque image (par exemple, 300 pixels)
images[i].style.width = '300px';
}
document.getElementById(a).style.width = '1000px'

}
document.getElementById("sd1").addEventListener("click", function()
{
sdsd('sd1')
})

