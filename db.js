const mongoose = require('mongoose');
const mongoURI = process.env.DATABASE_LINK;

const connectToMongo = async() => {
    mongoose.connect(mongoURI)
        .then(() => console.log("datebase connected"))
        .catch((e) => console.log(e))
}

module.exports = connectToMongo;