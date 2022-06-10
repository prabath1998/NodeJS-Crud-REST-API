import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "john",
    lastName: "doe",
    age: 25,
  },
  {
    firstName: "prabath",
    lastName: "udayanga",
    age: 23,
  },
];

//all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`User with the name ${user.firstName} added successfully..!`);
});

export default router;
