const mongoose = require("mongoose");
// const dbName = "records";  //double check this part



mongoose.connect(`mongodb://127.0.0.1/vinyl`,{   //declare it on top name

// mongoose.connect(`mongodb://localhost/${dbName}`,{   //declare it on top name
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Establish connection to database!"))
    .catch((err)=>console.log(err))

    //model here....require model.........
    require("../models/Record");


    //step 2 KEV!!