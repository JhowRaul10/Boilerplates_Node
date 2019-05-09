'use strict'

const PostModel = require('../models/post')

module.exports = {
	create: async (req, res) => {		
		try {
		} catch (err) {
			res.status(500).json(err)
		}
	},
	listAll: async (req, res) => {
		try{
			PostModel.listAll((err, rows) => {
				if(err) res.status(500).json(err)
				else res.status(201).send(rows)
			});
		} catch (err) {
			res.status(500).json(err)
		}
	},
    listOne: async (req, res) => {
        try {
        } catch (err) {
            res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
        } catch (err) {
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
        } catch (err) {
            res.status(500).json(err)
        }
    }
}