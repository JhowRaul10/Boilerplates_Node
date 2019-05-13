'use strict'

const PostModel = require('../models/post')

module.exports = {
	create: async (req, res) => {
		let post = {
			id: req.body.id,
			title: req.body.title,
			body: req.body.body
		}
		
		try {
			PostModel.create(post, (err, cb) => {
				if(err) res.status(500).json(err)
				else res.status(201).send('Inserido ' + cb.affectedRows)
			})
		} catch (err) {
			res.status(500).json(err)
		}
	},
	listAll: async (req, res) => {
		try{
			PostModel.listAll((err, rows) => {
				if(err) res.status(500).json(err)
				else res.status(201).send(rows)
			})
		} catch (err) {
			res.status(500).json(err)
		}
	},
    listOne: async (req, res) => {
        try {
			PostModel.listOne(req.params.id, (err, rows) => {
				if(err) res.status(500).json(err)
				else res.status(201).send(rows)
			})
        } catch (err) {
            res.status(500).json(err)
        }
    },
    update: async (req, res) => {
		let post = {
			id: req.params.id,
			title: req.body.title,
			body: req.body.body
		}
		
        try {
			PostModel.update(post, (err, cb) => {
				if(err) res.status(500).json(err)
				else res.status(201).send('Alterado ' + cb.changedRows)
			})
        } catch (err) {
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
			PostModel.delete(req.params.id, (err, cb) => {
				if(err) res.status(500).json(err)
				else res.status(201).send('Deletado ' + cb.affectedRows)
			})
        } catch (err) {
            res.status(500).json(err)
        }
    }
}