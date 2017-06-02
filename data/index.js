const dbFactory = require('./db');

function getRestaurantInfo(name) {
    return dbFactory.get()
        .then((db) => {
            return db.collection('restaurants')
                .find({name}).toArray();
        });
}

function getCustomerDetails(){
    return dbFactory.get()
        .then((db) => {
            return db.collection('customer')
                .find({name});

    });
}

function editCustomer(criteria, value) {
    return dbFactory.get()
        .then((db) => {
            return db.collection('customer')
                .updateOne(criteria, value);
        });
}

function editResataurant(criteria, value) {
    return dbFactory.get()
        .then((db) => {
            return db.collection('restaurants')
                .updateOne(critera, value);
        })
}

module.exports = {
    getRestaurantInfo, getCustomerDetails, editResataurant
};