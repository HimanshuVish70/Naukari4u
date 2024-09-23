import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";


 //This line creates a new router object using Express. Routers in Express are used to handle different routes in your application,
const router = express.Router();

router.route("/register").post(singleUpload,register); //is used to register the user,Specifies the route path /register, Defines a POST request handler for this route. When a POST request is made to /register, the singleUpload middleware function is executed first, followed by the register function.

router.route("/login").post(login); //login to the portal and check the credentials
router.route("/logout").get(logout); //o logout
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile); //to update any info like skills, name, etc.

export default router;

