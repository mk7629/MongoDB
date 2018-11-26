//Create Many Records with model.create()
var createManyPeople = function(arrayOfPeople, done) {
    Person.create(arrayOfPeople, (err, data) => {
        if (err) {
            done(err);
        }
        done(null, data);
    })

};