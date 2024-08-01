// In the main router file (index.js or wherever you're setting up the main router)
import { Router } from "express";
import { router } from './movie.routes.js'; // Corrected the path

const router = Router();

router.use("/api/movie", router);

export default router;
