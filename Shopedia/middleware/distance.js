const mongoose = require('mongoose')
const User = require('./../models/user-models')

function degreesToRadians (degrees) {
    return degrees * Math.PI / 180
}
//Send firstly latitude and secondly longitude. obj will also return the id of shopkeeper.

var filterShops = (consumer, shops) => {
    lat2 = consumer.latitude;
    lon2 = consumer.longitude;
    var a = [];
    for(var i = 0; i < shops.length; i++) {
        var earthRadiusKm = 6371
        console.log(shops[i].shopId)
        User.findById(shops[i].shopId)
        .then(shopInfo => {
            lat1 = shopInfo.location.latitude;
            lon1 = shopInfo.location.longitude;
            lat1=degreesToRadians(lat1);
            lat2=degreesToRadians(lat2);
            lon1 = degreesToRadians(lon1);
            lon2=degreesToRadians(lon2);
            var dLat = Math.abs(lat2-lat1);
            var dLon = Math.abs(lon2-lon1);
            
            var z = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
            var c = 2 * asin(sqrt(z)) ;
            
            a.push({ distance: earthRadiusKm * c, id: shopInfo._id });
        })
    }
        a.sort(function (a, b) {
            return a.distance - b.distance;
        })
        console.log(a)
        return a
}

module.exports = { filterShops }