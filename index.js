const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/api/read-sensors', (req, res) => {
  res.send({
    time: Date.now(),
    s0: Math.random(),
    s1: Math.random(),
    s2: Math.random(),
    s3: Math.random(),
    s4: Math.random(),
    s5: Math.random(),
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
