
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./Config/Config');

const Pizza = require('./Models/PizzaModels.js');
const Pizzas = require('./data/pizaa-data');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Pizza.deleteMany();
        const sampleData = Pizzas.map(pizza => ({ ...pizza }));
        await Pizza.insertMany(sampleData);
        console.log('Data Imported');
        process.exit();
    } catch(error) {
        console.log(`${error}`);
        if (error.writeErrors && error.writeErrors.length > 0) {
            for (let i = 0; i < error.writeErrors.length; ++i) {
                console.log(`Error ${i + 1}: ${error.writeErrors[i].errmsg}`);
            }
        }
        process.exit(1);
    }
};

const dataDestroy = () => {};
if (process.argv[2] === '-d') {
    dataDestroy();
} else {
    importData();
}
