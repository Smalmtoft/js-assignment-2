//let priceInput = prompt(`Enter your price here`);

let priceInput = `$100`;

let price = parseFloat(priceInput.slice(1));

let discount = price * 0.9;

console.log(`Your new price is $${discount}`);