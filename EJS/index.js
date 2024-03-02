import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    // console.log(day);
    let 
    res.render("index.ejs", {
        dayType: "a weekday",
        message: "It's time to work HARD!"
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})