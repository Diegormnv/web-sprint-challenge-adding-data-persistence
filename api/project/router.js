const express = require('express')
const Projects = require('./model')

const router = express.Router();

router.get('/', (req, res) =>{
    Projects.getProjects()
    .then(projects =>{
        res.status(200).json(projects);
    })
    .catch(error =>{
        res.status(500).json({message: 'Failed to get projects'});
    })
});

router.post('/', (req, res) =>{
    const projectData = req.body;
    Projects.insertProject(projectData)
    .then(project =>{
        res.status(201).json(project);
    })
    .catch(error =>{
        res.status(500).json({message: 'Failed to insert project'});
    })
});

module.exports = router;
