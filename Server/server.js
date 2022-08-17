const express = require('express');
const routes = require('./Routes/index');

const app = express();
const PORT = process.env.PORT || 3001;


app.use("/api", routes);
app.listen(PORT, () => {
    console.log(`Running on: http://localhost:${PORT}`);
});