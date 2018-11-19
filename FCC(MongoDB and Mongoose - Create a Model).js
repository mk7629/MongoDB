//MongoDB and Mongoose - Create a Model
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
});
var Person = mongoose.model('Person', PersonSchema);