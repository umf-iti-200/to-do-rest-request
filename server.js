const express = require("express");
const app = express();

app.use(express.static('.'))

app.get("/items", (req, res) => {

    const items = [
        { name: "Learn to fly by flapping our arms", done: false },
        { name: "Learn to speak dolphin", done: false },
        { name: "Build a time machine ", done: true },
    ];

    res.json(items);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
