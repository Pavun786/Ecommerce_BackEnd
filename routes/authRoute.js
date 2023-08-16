import express from "express";
import {registerController,loginController,testController,forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from "../controllers/authControllers.js"
import {requireSignIn,isAdmin} from "../middlewares/authMiddleware.js"

//router object:
const router = express.Router()

router.post("/register",registerController)

router.post("/login",loginController)

router.post("/forgot-password",forgotPasswordController)

//Test route
router.get("/test",requireSignIn,testController)

//Protected user route
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok: true})
})

//Protected Admin route auth
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok: true})
})

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);


// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );

  
  

 
export default router