//Use model.findOne() to Return a Single Matching Document
var findOneByFood = function(food, done) {
    Person.findOne({ food: Person }, (err, data) => err ? done(err) : done(null, data));
};