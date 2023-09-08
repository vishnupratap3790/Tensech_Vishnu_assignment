const express = require('express');
 
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
 
dotenv.config({ path: "./server/config/config.env" });


connectDatabase();


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


const pantryRoutes = require('./routes/pantry');

const app = express();
 
app.use('/apiv1/pantry', pantryRoutes);
 
const PORT = process.env.PORT || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
