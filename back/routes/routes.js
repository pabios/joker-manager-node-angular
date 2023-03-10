import { Router } from "express";
import HomeController from "../controllers/homeController.js";
import { getUserById, login, randomUser, users, editProfil, deleteUser,  create,nbUser,getCategories,addToFavorite} from '../controllers/userController.js';
import {posts, addPost, likePost, editPost,getPost,deletePost} from '../controllers/postController.js';
import { authGuard } from '../middlewares/AuthGuard.js';
import {addCategory,getAllCategory} from "../controllers/categoryController.js";

const router = Router();

/**
 * Uers
 */
// GET
router.get("/", HomeController);
router.get("/users", users);
router.get("/user/:id", authGuard, getUserById);
router.get("/random-user", authGuard, randomUser);
router.get("/user-count", nbUser);
router.put('/user/favorite/:userId/:postId',addToFavorite)


router.get("/categories",getCategories); //  debutant/intermediare

router.post("/login", login);
router.post("/admin/add", create) // authGuard

router.put('/user/:id', authGuard, editProfil)

router.delete("/admin/delete/:id",authGuard, deleteUser)

/**
 * POSTS
 */
router.get("/posts", posts);
router.get('/posts/:id', getPost)

router.get("/posts/like/:id", likePost);

router.post("/posts/add", addPost);

router.put('/posts/:id', editPost);

router.delete("/posts/delete/:id", deletePost)

/**
 * CATEGORY
 * Front/Back || Dakar,Conackry
 */
router.get("/category", getAllCategory);
router.post("/posts/category/add", addCategory);





export default router;
