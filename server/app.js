const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const connectDB = require('./models/db');

connectDB();

app.use(bodyParser.json());
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('Geneology Project API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
