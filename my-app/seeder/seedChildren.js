const Children = require ("../models/Children")
const mongoose = require ('mongoose')



const childrenData = [
    new Child ({
        Name: "Alexis Rose",
        Age: 5,
        Allergies: "Peanuts",
        Notes: "Does not get along with Mike",
        CreatedAt: Date.now
    })
]
//connect mongoose
// mongoose
//   .connect(String(dev.db), { useNewUrlParser: true })
//   .catch(err => {
//     console.log(err.stack);
//     process.exit(1);
//   })
//   .then(() => {
//     console.log("connected to db in development environment");
//   });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
// products.map(async (p, index) => {
//   await p.save((err, result) => {
//     if (index === products.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
// });
module.exports = childrenData
//run seed with 'node seedChildren.js' once //