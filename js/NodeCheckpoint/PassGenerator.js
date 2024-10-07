var generator = require('generate-password');
var password = generator.generate({
    length: 15,
    numbers: true,
    symbols: '?!',
    
});
console.log(password);