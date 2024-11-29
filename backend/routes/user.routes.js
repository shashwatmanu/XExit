import express from "express";
import { canResign } from "../middlewares/authorize.js";
import Resignation from "../models/resignation.model.js"
import UserResponse from "../models/user_response.model.js"
import Questionnaire from "../models/questionnaire.model.js"


const router = express.Router();

async function getQuestionnaireOrResponses(req) {
    let questionnaire = [],
      responses = [];
    let UserResponses = await UserResponse.findOne({ user_id: req.user._id });
    if (!UserResponses) {
      questionnaire = await Questionnaire.find();
    } else {
      responses = UserResponses.responses;
    }
    return {
      questionnaire,
      responses,
    };
  }

router.get("/permissions", async (req, res) => {
    try {
      const data = await fetchRoleAndPermissions(req);
      res.status(200).json({
        data,
      });
    } catch (e) {
      res.status(500).json({ error: "failed to get permissions" });
    }
  });

router.post('/resign', canResign, async(req, res)=>{
    try {
        let resignation = await Resignation.findOne({userId: req.user._id});
        if(!resignation){
            resignation = await new Resignation({
                user_id: req.user._id,
                lwd: req.body.lwd
            }).save();
        }
        let questionnaire = [],
        responses = [];
      if (resignation) {
        let res = await getQuestionnaireOrResponses(req);
        questionnaire = res.questionnaire;
        responses = res.responses;
      }
      res.status(200).json({
        data: {
          resignation,
          questionnaire,
          responses,
        },
      });
    } catch (error) {
        res.status(500).json({ error: "Resignation failed" });
    }
})

router.get("/resignation", async (req, res) => {
    try {
      let resignation = await Resignation.findOne({ user_id: req.user._id });
      let questionnaire = [],
        responses = [];
      if (resignation) {
        let res = await getQuestionnaireOrResponses(req);
        questionnaire = res.questionnaire;
        responses = res.responses;
      }
      res.status(200).json({
        data: {
          resignation,
          questionnaire,
          responses,
        },
      });
    } catch (err) {
      res.status(500).json({ error: "Resignation fetch failed" });
    }
  });

router.post('/responses', async (req,res) =>{
try {
    let resignation = await Resignation.findOne({user_id: req.user._id});
    if(!resignation){
        res.status(400).json({error: "User has not resigned yet!"})
    }
    else{
        let responses = await UserResponse.findOne({user_id: req.user._id});
        if(responses){
            res.status(400).json({error: "User has already submitted the responses"});
        }
        else{
            const newUserResponse = new UserResponse({
                user_id: req.user._id,
                responses: req.body.responses
            })
            const savedResponses = await newUserResponse.save();
            res.status(200).json({responses: savedResponses.responses})
        }
    }
} catch (error) {
    res.status(500).json({ error: "Could not save responses" });
}
})

export default router;