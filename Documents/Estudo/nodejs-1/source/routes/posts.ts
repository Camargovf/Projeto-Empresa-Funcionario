/** source/routes/posts.ts */
import express from 'express';
import * as  controller  from '../controllers/posts';
const router = express.Router();

/* Teste  fazer pra funcionario e empresa */

router.get('./posts', controller.getPosts);
router.get('/posts/:id', controller.getPosts);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);
router.post('/posts', controller.addPost);

export = router;