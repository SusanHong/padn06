import { Router } from "express";
import { getAllUsers, getOneUser, createOneUser } from "./handlers";

const router = Router();
router.get(`/`, getAllUsers);
router.post(`/`, createOneUser);
router.get(`/:id`, getOneUser);
router.post(`/`, createOneUser);
export default router;
