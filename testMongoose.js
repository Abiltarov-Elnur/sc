const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })

schema.methods.models = function(){
    console.log(this.name + " M3, M4, M5")
}

const Car = mongoose.model('Car', schema);
const bmw = new Car({ name: 'BMW' });
bmw.save().then(() => bmw.models());

