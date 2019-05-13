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
	create: async (data, cb) => {
		const conn = mysql.createConnection(dbOptions)
		conn.connect((err) => {
			if (err)
				return (err)
		})
		conn.query('INSERT INTO posts VALUES (?, ?, ?)', [data.id, data.title, data.body], cb)
		conn.end((err) => {
			if (err)
				return (err)
		});
	},
	listAll: async (cb) => {
		const conn = mysql.createConnection(dbOptions)
		conn.connect((err) => {
			if (err)
				return (err)
		})
		conn.query('SELECT * FROM posts', cb)
		conn.end((err) => {
			if (err)
				return (err)
		});
	},
	listOne: async (id, cb) => {
		const conn = mysql.createConnection(dbOptions)
		conn.connect((err) => {
			if (err)
				return (err)
		})
		conn.query('SELECT * FROM posts WHERE id = ? LIMIT 1', id, cb)
		conn.end((err) => {
			if (err)
				return (err)
		});
	},
	update: async (data, cb) => {
		const conn = mysql.createConnection(dbOptions)
		conn.connect((err) => {
			if (err)
				return (err)
		})
		conn.query('UPDATE posts SET title = ?, body = ? WHERE id = ?', [data.title, data.body, data.id], cb)
		conn.end((err) => {
			if (err)
				return (err)
		});
	},
	delete: async (id, cb) => {
		const conn = mysql.createConnection(dbOptions)
		conn.connect((err) => {
			if (err)
				return (err)
		})
		conn.query('DELETE FROM posts WHERE id = ?', id, cb)
		conn.end((err) => {
			if (err)
				return (err)
		});
	}
}