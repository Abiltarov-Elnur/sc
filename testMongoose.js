const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Car = mongoose.model('Car', { name: String });
const bmw = new Car({ name: 'BMW' });
bmw.save().then(() => console.log('BMW M3'));
