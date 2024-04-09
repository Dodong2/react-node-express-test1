const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
    };
    res.json({ user });
});

app.listen(5000, () => { console.log('server start at port 5000') })