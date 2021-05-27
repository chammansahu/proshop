import mongoose from "mongoose";

let connectionString = process.env.MONGO_URI //error must be string
mongoose.connect("mongodb://localhost:27017/proshop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

 

const dbobject = mongoose.connection

dbobject.on('connected',()=>console.log('mongoDb connected!!!'))
dbobject.on("error", function () {
    console.log('mongo DB faile !!!')
});
export default mongoose