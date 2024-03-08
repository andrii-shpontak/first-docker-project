const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.json('Test complete!');
});

app.get('/broke', (req, res) => {
  res.json('Fatal error!');
});

const port = 3003;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
