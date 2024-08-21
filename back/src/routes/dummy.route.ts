import express, { Request, Response } from 'express';
import User from '../models/dummy.model';

const router = express.Router()

router.get("/dummy", (request: Request, response: Response): void => {
  response.status(200).json({ message: "pasta with no sauce" })
});

router.post("/test", async (request: Request, response: Response) => {
  console.log(request.body);
  const { email, password, avatar } = request.body;
  try {
    // Create a new user instance
    const newUser = new User({
      email,
      password,
      avatar,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    response.status(201).json(savedUser);
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error (e.g., email already exists)
      response.status(400).json({ message: "Email already exists" });
    } else {
      response.status(500).json({ message: "Server error", error });
    }
  }
});

export default router;