import { Router } from "express";
import { homePage , about, contact, review, joinus, single} from "../../controllers/client/index.js";

const router = Router();

router.get('/',homePage);
router.get('/index',homePage);
router.get('/about',about);
router.get('/contact',contact);
router.get('/joinus',joinus);
router.get('/review',review);
router.get('/single/:id',single);

export default router;