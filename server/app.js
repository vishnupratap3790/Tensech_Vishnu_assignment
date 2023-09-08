const express = require("express");
 
const dotenv=require("dotenv");
dotenv.config({ path: "./server/config/config.env" });

const  connectDatabase = require("./config/database.js");
connectDatabase();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


const pantryRoutes = require('./routes/pantry');

app.use('/apiv1/pantry', pantryRoutes);
 
const PORT = process.env.PORT || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
