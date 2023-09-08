const mongoose =require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser:true,useUnifiedTopology:true})
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
module.exports=connectDatabase
