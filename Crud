const mongoose = require("mongoose");

const url = "mongodb+srv://rvnuser:vasanthi123@rvn.xrq5pjp.mongodb.net/?appName=rvn" ;


const StudentSchema = new mongoose.Schema({
  Name: String,
  Roll: Number,
  Marks: Number,
});

const Student = mongoose.model("Student", StudentSchema);

async function Crud() {
  try {
 await mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

    // Create
    const newStudent = await Student.create({
      Name: "Gowtham",
        Roll:21,
        Marks:100
    });
    console.log("Inserted");
    // Read
    const AllStudents=await Student.find({Name:"Gowtham"});
    console.log(AllStudents);
    
    //Update
    await Student.updateOne({ Name: "Gowtham" }, { Marks: 99 });
    console.log("Marks Updated");
    //Delete
    await Student.deleteOne({ Name: "Gowtham" });
    console.log("deleted!");
  }
  catch (err) {
    console.error(err);
  }
}
Crud();
