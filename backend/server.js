const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); 

// Database 
mongoose.connect(
  "mongodb+srv://kaustubhgupta9860:kaustubh12345@cluster0.9erybbp.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Error connecting to database:', err));

const app = express();
const port = 3001;

app.use(cors()); 
app.use(bodyParser.json());

// Define Mongoose schema and model
const jinSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.Mixed, required: true }, // Assuming id can be either a number or a string
  project: { type: String, required: true },
  task: { type: String, required: true },
  comment: { type: String, required: true },
  mon: { type: Number, required: true },
  tue: { type: Number, required: true },
  wed: { type: Number, required: true },
  thr: { type: Number, required: true },
  fri: { type: Number, required: true },
  sat: { type: Number, required: true },
  sun: { type: Number, required: true }
});

const Jin = mongoose.model('Jin', jinSchema);

app.post("/api/saveData", async (req, res) => {
  try {
    const newData = req.body;
    const result = await Jin.create(newData);
    console.log('Data inserted:', result);
    res.status(200).send('Data stored successfully');
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
