import express from "express";
import { canConcludeResignation } from "../middlewares/authorize.js";
import { canGetAllResignations } from "../middlewares/authorize.js";
import { canGetAllResponses } from "../middlewares/authorize.js";
import Resignation from "../models/resignation.model.js"
import UserResponse from "../models/user_response.model.js"

const router = express.Router();

router.get('/resignations', canGetAllResignations, async (req, res) =>{
    try {
        let resignations = await Resignation.find()
      .sort({ createdAt: -1 })
      .populate("user_id", "username");
    res.status(200).json({
      data: resignations
    });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch all resignations" });
    }
})

router.put("/conclude_resignation", canConcludeResignation, async (req, res) =>{
    try {
        const { resignationId, approved, lwd } = req.body;

    const updatedResignation = await Resignation.findOneAndUpdate(
      { _id: resignationId },
      {
        approved,
        lwd: new Date(lwd),
      },
      { new: true }
    );
    if (!updatedResignation) {
      return res.status(404).json({ error: "Resignation not found" });
    }
    res.status(200).json({ data: updatedResignation });
    } catch (error) {
        res.status(500).json({ error: "Could not approve resignation" });
    }
})

router.get("/exit_responses", canGetAllResponses, async (req, res) => {
    try {
      let responses = await UserResponse.find()
        .sort({ createdAt: -1 })
        .populate("user_id", "username");
      res.status(200).json({
        data: responses
      });
    } catch (e) {
      res.status(500).json({ error: "Failed to fetch all responses" });
    }
  });


export default router;