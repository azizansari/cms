const Datastore = require('nedb')
const path = require('path')

const db = new Datastore(path.join(__dirname, "database/test.db"))
db.loadDatabase()
var doc = { hello: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };
 
// db.insert(doc, function (err, newDoc) {   // Callback is optional
//   // newDoc is the newly inserted document, including its _id
//   // newDoc has no key called notToBeSaved since its value was undefined
//   console.log('newDoc :>> ', newDoc);
// })
var connect = require('camo').connect;

var database;
var uri = `nedb:///${path.join(__dirname, "database/testDB")}`;
connect(uri).then(function(db) {
    database = db;
    console.log('db :>> ', db);
    var Document = require('camo').Document;

class Emp extends Document {
    constructor() {
        super();

        this.name = String;
        this.valuation = {
            type: Number,
            default: 10000000000,
            min: 0
        };
        this.employees = [String];
        this.dateFounded = {
            type: Date,
            default: Date.now
        };
    }

    static collectionName() {
        return 'employees';
    }
}

// var lassie = Emp.create({
//   name: 'Lassie',
//   breed: 'Collie'
// });

// lassie.save().then(function(l) {
//   console.log(l._id);
// });
Emp.find({}).then(function(doc){
  console.log('doc :>> ', doc);
})
});
db.find({ }, function (err, docs) {
    // docs is an array containing documents Mars, Earth, Jupiter
    // If no document is found, docs is equal to []
    // console.log('docs :>> ', docs);
  });

