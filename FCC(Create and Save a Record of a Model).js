//Create and Save a Record of a Model
var createAndSavePerson = function(done) {
    const person = new Person({
        name: "Moyo",
        age: 9,
        favoriteFoods: ['sushi', 'fish']
    });
    person.save((err, data) => {
        if (err) {
            done(err);
        }
        done(null, data);
    });


};