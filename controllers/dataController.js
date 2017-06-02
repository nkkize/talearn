const data = require('../data');
const mustache = require('mustache');

exports.home = function (req, res) {
    processRequest(req)
        .then(function (data) {
            console.log('got data from db : '+data);
            if (data) {
                return res.render('home', data[0]);
            }
            return res.render('404');
        })
        .catch(function (err) {
            console.log("error rendering templates")
            return res.render('404');
        });
};


let processRequest = function (req) {
    let name = "Vella";
    if (req.query && req.query.name) {
        name = req.query.name;
        console.log('got name as '+name);
    }

    return data.getRestaurantInfo(name)
        .then(function (data) {
            return data;
        })
};