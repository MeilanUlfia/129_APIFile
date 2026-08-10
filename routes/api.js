const express = require('express');
const router = express.Router();

const komikController = require('../controller/komikController');
const penulisController = require('../controller/penulisController');
const genreController = require('../controller/genreController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/register', penulisController.register);
router.post('/login', penulisController.login);

// Komik routes
router.get('/komik', komikController.getAll);
router.post('/komik', authMiddleware, uploadMiddleware.single("gambar"), komikController.create);
router.put('/komik/:id', authMiddleware, uploadMiddleware.single("gambar"), komikController.update);
router.delete('/komik/:id', authMiddleware, komikController.remove);

// Genre routes
router.get('/genre', genreController.getAll);
router.post('/genre', authMiddleware, genreController.create);
router.put('/genre/:id', authMiddleware, genreController.update);
router.delete('/genre/:id', authMiddleware, genreController.remove);

module.exports = router;