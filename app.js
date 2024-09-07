require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose")

const app = express();

const port = 3000;

const  taskRouter = require ("./routes/taskRouter")

app.use(express.json())

app.use("/api/task", taskRouter )

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("Database connected");
        
        app.listen(port, () => {
            console.log(`Server is running on PORT ${port}`);
        });

    } catch (error) {
        console.log(error);
        console.log("Unable to connect");
    };
};

start();




// kingempiretech
// lGz7HgugsY4SEHom
