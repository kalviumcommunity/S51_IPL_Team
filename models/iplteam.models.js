const mongoose = require('mongoose')

const iplTeamSchema = new mongoose.Schema({
    Id:{type:Number, required:true},
    Teams:{type:String, required:true},
    M:{type:Number, required:true},
    W:{type:Number, required:true},
    L:{type:Number, required:true},
    T:{type:Number, required:true},
    NR:{type:Number, required:true},
    PT:{type:Number, required:true},
    NRR:{type:Number, required:true},
    For:{type:Number, required:true},
    Against:{type:Number, required:true}
},
{timestamps:true});

module.exports = mongoose.model("iplteams",iplTeamSchema)

