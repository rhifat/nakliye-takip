const router = require('express').Router();
let Cekici = require('../models/cekici.model');

router.route('/').get((req, res) => {
    Cekici.find()
    .then(cekiciler => res.json(cekiciler))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ekle').post((req, res) => {
    const cekiciAdi = req.body.cekiciAdi;

    const yeniCekici = new Cekici({cekiciAdi});

    yeniCekici.save()
    .then(() => res.json('Cekici Eklendi!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;