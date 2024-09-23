import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany); //if a company wants to register itself to the portal 
router.route("/get").get(isAuthenticated,getCompany); //if a user is trying to find the company 
router.route("/get/:id").get(isAuthenticated,getCompanyById); //if the user types the ID of the company
router.route("/update/:id").put(isAuthenticated,singleUpload, updateCompany); //to update the company information

export default router;

