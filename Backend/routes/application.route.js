import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
 
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob); //to apply to a Job
router.route("/get").get(isAuthenticated, getAppliedJobs); //to get the list of all the jobs users have applied to
router.route("/:id/applicants").get(isAuthenticated, getApplicants); //admin will see the list of applicants
router.route("/status/:id/update").post(isAuthenticated, updateStatus); //to update the status 
 

export default router;

