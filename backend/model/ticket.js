const connection = require('../connection/connection.js')

module.exports = {
    getAll: function(callback) {
        connection.query('SELECT * FROM ticket', function(err, results) {
            callback(err, results)
        });
    },
    insert: function(data, callback) {
        connection.query('INSERT INTO ticket SET?', data, function(err, results) {
            callback(err, results)
        });
    },
    update: function(id,data, callback) {
        connection.query('UPDATE ticket SET? WHERE id =?', [data, id], function(err, results) {
            callback(err, results)
        })
    },
        dell: function(id, callback) {
            connection.query('DELETE FROM ticket WHERE id =?', [id], function(err, results) {
                callback(err, results)
            })
        },
        getOne : function(id,callback) {
            connection.query('SELECT * FROM ticket WHERE id =?', [id], function(err, results) {
                callback(err, results)
            })},
};