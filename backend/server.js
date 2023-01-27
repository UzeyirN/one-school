const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const { json } = require("body-parser")

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())

const { Schema } = mongoose;

const teacherSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

mongoose.set("strictQuery", false)

const Teachers = mongoose.model("teachers", teacherSchema)

const PORT = process.env.PORT
const DB = process.env.DB.replace("<password>", process.env.PASSWORD)

mongoose.connect(DB, (err) => {
    console.log(err);
    if (!err) {
        console.log("Connected");
        app.listen(PORT, () => {
            console.log(`PORT:${PORT}`);
        })
    }
})

app.get("/teachers", (req, res) => {
    Teachers.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
})

app.get("/teachers/:id", (req, res) => {
    const { id } = req.params;
    Teachers.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
            }
        } else {
            res.status(500), json({
                message: err
            })
        }
    })
})

app.post("/teachers", (req, res) => {
    const teachers = req.body;
    try {
        Teachers.create(teachers)
        res.status(200).json({
            message: "Success"
        })

    } catch (error) {
        console.log(error);
    }
})

app.delete("/teachers/:id", (req, res) => {
    const { id } = req.params;
    Teachers.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Success delete");
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
})
