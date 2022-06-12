import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

//all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

//add users
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added successfully..!`);
});

router.get("/:id", (req, res) => {
  const id =req.params.id;
  const foundUser = users.find((user)=> user.id === id);
  res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
  const id = req.params.id;

  users = users.filter((user)=> user.id !== id);
  res.send(`User with id ${id} deleted from database.`)
});

export default router;
