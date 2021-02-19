const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res) =>{
    Tasks.getTasks()
    .then(tasks =>{
        res.status(200).json(tasks);
    })
    .catch(error =>{
        res.status(500).json({message: 'Failed to get tasks'});
    })
});

router.post('/', (req, res) =>{
    const taskData = req.body;
    Tasks.insertTask(taskData)
    .then(task =>{
        if(!taskData.project_id || !taskData.task_description){
            res.status(400).json({message: 'Missing projectid and task description field'})
        } else{
            res.status(201).json(task)
        }
    })
    .catch(error =>{
        res.status(500).json({message: 'Failed to insert task'})
    })
    
})

module.exports = router;
