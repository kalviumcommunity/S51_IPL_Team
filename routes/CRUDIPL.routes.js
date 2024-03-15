const express = require('express')
const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const jwt = require('jsonwebtoken')
const deleteRouter = express.Router();
const iplteams = require("../models/iplteam.models")
const Joi = require('joi');
require('dotenv').config()
const schema = Joi.object({
      serialNumber:Joi.number(),
      ClubId:Joi.number().required(),
      ClubName:Joi.string().required(),
      Ranking:Joi.number().required(),
      Coach:Joi.string().required(),
      MatchsPlayed:Joi.number().required(),
      Won:Joi.number().required(),
      Losses:Joi.number().required(),
      Goals:Joi.number().required(),
      GoalsConceded:Joi.number(),
      CleanSheet:Joi.number(),
      Shots:Joi.number(),
      Shotsontarget:Joi.number(),
      Yellowcards:Joi.number(),
      Redcards:Joi.number(),
      Fouls:Joi.number(),
      Offsides:Joi.number(),
      created_by:Joi.string().required()
    });
    const authenticateToken = (req, res,next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]
        if(token==null) return res.sendStatus(401)
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
          if(err) return res.sendStatus(403)
          next()
        })
      }
getRouter.get('/api/getalliplteam',async (req, res) => {
    try{
        const iplteam = await iplteams.find();
        res.status(200).json(iplteam);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: `Internal server error ${err}`
        })
    }
})

getRouter.get('/api/getiplteam/:id',async (req, res) => {
    try{
        const iplteam = await iplteams.findone({Id:req.params.id});
        res.status(200).json(iplteam);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

postRouter.post('/api/addiplteam',async (req, res) => {

          
            const { error, value } = schema.validate(req.body, { abortEarly: false });
          

            try{
                if (!error) {
                let{Id,Teams,M,W,L,T,NR,PT,NRR,For,Against} = req.body;
                const iplteam = await iplteams.create({Id,Teams,M,W,L,T,NR,PT,NRR,For,Against});
                res.status(201).json(iplteam);}
                else {
                    return res.status(400).send({
                        message: `Bad request, error:${error}`
                    })
                    console.error(error)
                }
            } catch(err){
                console.log(err);
                return res.status(500).send({
                    message: "Internal server error"
                })
            }
            
        
})

putRouter.patch('/api/updateiplteam/:id',async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
          
    try {
        if (!error) {
        const {id} = req.params;
        const filter ={"Id":Number(id)}
        let{Id,Teams,M,W,L,T,NR,PT,NRR,For,Against} = req.body;
        const iplteam = await iplteams.findOneAndUpdate(filter,{Id,Teams,M,W,L,T,NR,PT,NRR,For,Against});
        res.status(200).json(iplteam);}
        else {
            return res.status(400).send({
                message: `Bad request, error:${error}`
            })
            console.error(error)
        }
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }

})

deleteRouter.delete('/api/deleteiplteam/:id',async (req, res) => {
    try {
        const {id} = req.params;
        const filter ={"Id":Number(id)}
        const iplteam = await iplteams.findOneAndDelete(filter);
        res.status(200).json(iplteam);
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

module.exports = {getRouter, postRouter, deleteRouter, putRouter}