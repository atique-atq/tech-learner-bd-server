const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/course.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('News API Running');
})

app.get('/course', (req, res) => {
    res.send(course);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const details = courseDetails.find(n => n.course_id === id);
    res.send(details)
})

app.listen(port, () => {
    console.log('Dragon News Server Running on Port', port);
})