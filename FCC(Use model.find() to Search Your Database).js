//Use model.find() to Search Your Database
var findPeopleByName = function(personName, done) {
    Person.find({ name: personName }, (err, data) => err ? done(err) : done(null, data));
};