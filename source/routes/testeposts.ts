/** source/routes/testeposts.ts */
// Rotas teste.

import express from 'express';
import controller from '../controllers/testeposts';
const router = express.Router();

/* Teste */

router.get('/testeposts', controller.getPosts);
router.get('/testeposts/:id', controller.getPost);
router.put('/testeposts/:id', controller.updatePost);
router.delete('/testeposts/:id', controller.deletePost);
router.post('/testeposts', controller.addPost);

export = router;