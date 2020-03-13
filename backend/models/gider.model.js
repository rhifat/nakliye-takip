const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const giderSchema = new Schema({
    cekiciAdi: { type:String, required:true },
    giderKalemi: { type:String, required:true },
    miktar: { type:Number, required:true },
    tarih: { type:Date, required:true },
 },{
    timestamps: true,
 });

 const Gider = mongoose.model('Gider', giderSchema);

 module.exports = Gider;

