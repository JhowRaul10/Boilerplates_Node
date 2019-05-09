'use strict'

const mysql = require('mysql'),
	conf = require('../database/db-conf'),
	dbOptions = {
		host: conf.mysql.host,
		port: conf.mysql.port,
		user: conf.mysql.user,
		password: conf.mysql.pass,
		database: conf.mysql.db
	}

module.exports = {
	listAll: async (rows) => {
		const conn = mysql.createConnection(dbOptions)
		conn.connect((err) => {
			if (err)
				return (err)
		})
		conn.query('SELECT * FROM posts', rows)
		conn.end((err) => {
			if (err)
				return (err)
		});
	}
}