const router = require('express').Router();
let Gider = require('../models/gider.model');

router.route('/').get((req, res) => {
    Gider.find()
    .then(giderler => res.json(giderler))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/ekle').post((req, res) => {
    const cekiciAdi = req.body.cekiciAdi;
    const giderKalemi = req.body.giderKalemi;
    const miktar = Number(req.body.miktar);
    const tarih = Date.parse(req.body.tarih);

    const yeniMasraf = new Gider({
        cekiciAdi,
        giderKalemi,
        miktar,
        tarih,
    });

    yeniMasraf.save()
    .then(() => res.json('Gider Eklendi!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req, res) => {
    Gider.findById(req.params.id)
    .then(gider => res.json(gider))
    .catch(err => res.status(400).json('Hata: ' + err));
});

router.route('/:id/').delete((req, res) => {
    Gider.findByIdAndDelete(req.params.id)
    .then(() => res.json("Gider Silindi."))
    .catch(err => res.status(400).json('Hata: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Gider.findById(req.params.id)
    .then(gider => {
        gider.aracAdi = req.body.aracAdi;
        gider.giderKalemi = req.body.giderKalemi;
        gider.miktar = Number(req.body.miktar);
        gider.tarih = Date.parse(req.body.tarih);

        gider.save()
            .then(() => res.json("Gider Güncellendi!"))
            .catch(err => res.status(400).json('Hata: ' + err));
    })
    .catch(err => res.status(400).json('Hata: ' + err));
});

module.exports = router;