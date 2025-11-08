import { Router } from "express";
import { addMoviePage, dashboard , addMovie, viewMovie, deleteMovie, editMoviePage, editMovie,} from "../../controllers/server/adminPanel.controller.js";
import imageUpload from "../../middlewares/imageUpload.js";

const adminPanelRouter = Router();

adminPanelRouter.get('/',dashboard);
adminPanelRouter.get('/add-movie',addMoviePage);
adminPanelRouter.post('/add-movie',imageUpload,addMovie);
adminPanelRouter.get('/view-movie',viewMovie);
adminPanelRouter.get('/delete/:id',deleteMovie);
adminPanelRouter.get('/edit/:id',editMoviePage);
adminPanelRouter.post('/edit/:id',imageUpload,editMovie);

export default adminPanelRouter;