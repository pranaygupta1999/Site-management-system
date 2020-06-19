/**
 * @author Pranay Gupta
 * @date 15 June 2020
 */

const express = require('express')
const app = express();
const userRoutes = require('./routes/user');
const projectsRoutes = require('./routes/projects')
const activitiesRoutes = require('./routes/activities')
const expensesRoutes = require('./routes/expenses');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//=================Routes==============
app.use('/api/users', userRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/activities', activitiesRoutes);
app.use('/api/expenses', expensesRoutes);

//==============db connection==================
const mongoose = require('mongoose');
mongoose.connect(`mongodb://pranay:${process.env.MONGO_PASSWORD}@cluster0-shard-00-00-o3oki.mongodb.net:27017,cluster0-shard-00-01-o3oki.mongodb.net:27017,cluster0-shard-00-02-o3oki.mongodb.net:27017/edunomics?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) {
    console.error(err)
  }
  else {
    console.log("Connected")
  }
});

app.listen(port, () => console.log("Server running on " + port));


