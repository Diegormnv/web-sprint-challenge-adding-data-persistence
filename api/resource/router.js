const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res) =>{
    Resources.getResource()
    .then(resources =>{
        res.status(200).json(resources);
    })
    .catch(error =>{
        res.status(500).json({message: 'Failed to get resources'});
    })
});

router.post('/', (req, res) =>{
    const resourceData = req.body;

    Resources.insertResource(resourceData)
    .then(resource =>{
        res.status(201).json(resource);
    })
    .catch(error =>{
        res.status(500).json({message: 'Failed to insert resource'});
    })
})

module.exports = router;
