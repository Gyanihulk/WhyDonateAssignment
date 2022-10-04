const express = require("express");
const router = express.Router();
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../config";
import { createError } from "../utils/error";



// Register User
router.post("/register", async (req:Request, res:Response,next: NextFunction) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        ...req.body,
        password: hash,
      });
      await newUser.save();
        return res.status(200).json({
        message: "User is created"
    });
    } catch (err) {
      next(err);
    }
  })

router.post("/login", async (req:Request, res:Response,next: NextFunction) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id },
      `${config.JWTSECRET}`
    );
console.log(user)
    const { password, ...otherDetails } = user;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
}
)

module.exports = router;