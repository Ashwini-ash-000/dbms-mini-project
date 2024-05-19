function searchProducts() {
    const searchInput = document.getElementById('searchInput').ariaValueMax.toLocaleLowerCase();

    const products =['gardening', 'plants', 'seeds', 'bulbs', 'planters', 'soil', 'fertilizer', 'gifts', 'pebbles', 'acccessories'];

    const res = products.filter(products => products.includes(searchInput));

    if(res.length > 0) {
        alert('Found: '+ res.join(', '));
    } else {
        alert('No Products found');
    }
}