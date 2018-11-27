//Use model.findById() to Search Your Database By _id
var findPersonById = function(personId, done) {
    Person.findById({ _id: personId }, (err, data) => err ? done(err) : done(null, data));

};