const db = require('../../data/dbConfig');

module.exports = {
    insertResource,
    getResource
};

function getResource() {
    return db('resources');
}

function insertResource(resource) {
    return db('resources').insert(resource)
    .then(([id]) =>{
        return db('resources').where('id', id).first();
    });
}


