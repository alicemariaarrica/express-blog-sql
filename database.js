const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: ''
});


db.connect((err) => {
    if (err) {
        console.error('Errore nella connessione al database: ', err);
        return;
    }
    console.log('Connesso al database MySQL!');
});

module.exports = db;
