const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const cekiciSchema = new Schema({
     cekiciAdi:{
         type: String,
         required:true,
         unique: true,
         trim: true,
         minlength: 3
     },
    },{
        timestamps: true,
 });

 const Cekici = mongoose.model('Cekici', cekiciSchema);

 module.exports = Cekici;

