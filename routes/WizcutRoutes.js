import express from "express";
import axios from "axios";
import { config } from "dotenv";
//import WizcutRoutesController from "../controllers/WizcutRoutesController.js";

config();

const router = express.Router();

router.post("/fortest", async (req, res) => {
 console.log(req.body.text);
 console.log(req.body.userid);
  axios
    .post(`https://oyai.io/api/wizcut/fortest/`, {
      // .post(`http://localhost:8080/wizcut/fortest/`, {
      message: req.body.text,
      userid: req.body.userid,
    })
    .then(function (response) {
      console.log("response");

      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error.text);
    });
});
router.post("/geturl", async (req, res) => {

   axios
     .post(`https://oyai.io/api/wizcut/getsceneurl/`, 
      //  .post(`http://localhost:8080/wizcut/getsceneurl/`, 
       req.body
     )
     .then(function (response) { 
       res.send(response.data);
     })
     .catch(function (error) {
       res.send(error.text);
     });
 });
router.get("/fortest", async (req, res) => {
  const responseBody = "Hello Error";
  res.status(403).json({ responseBody });
});

export default router;
