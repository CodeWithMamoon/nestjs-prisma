import { Router } from "express";
import {store} from '../controller/movie.controller.js'
const router=Router();


router.post("/",store)

export default router