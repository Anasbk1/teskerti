const connection = require('../connection/connection.js')

module.exports = {
    getAll: function(callback) {
        connection.query('SELECT * FROM user', function(err, results) {
            callback(err, results)
        });
    },
    insert: function(data, callback) {
        connection.query('INSERT INTO user SET?', data, function(err, results) {
            callback(err, results)
        });
    },
    update: function(id,data, callback) {
        connection.query('UPDATE user SET? WHERE id =?', [data, id], function(err, results) {
            callback(err, results)
        })
    },
    dell: function(id, callback) {
            connection.query('DELETE FROM user WHERE id =?', [id], function(err, results) {
                callback(err, results)
            })
        },
        getOne : function(id,callback) {
            connection.query('SELECT * FROM user WHERE id =?', [id], function(err, results) {
                callback(err, results)
            })},
};