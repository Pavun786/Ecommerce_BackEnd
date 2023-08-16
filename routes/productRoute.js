import express from "express";
import {brainTreePaymentController, braintreeTokenController, createProductController, productCategoryController, productCountController, productListController, realtedProductController, searchProductController } from "../controllers/productController.js";
import { isAdmin,requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { getProductController } from "../controllers/productController.js";
import { getSingleProductController } from "../controllers/productController.js";
import { productPhotoController } from "../controllers/productController.js";
import { deleteProductController } from "../controllers/productController.js";
import { updateProductController } from "../controllers/productController.js";
import { productFiltersController } from "../controllers/productController.js";

const router = express.Router();

//routes:
router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController)

//update product
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);


//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

//update product qunatity:
// router.put("/update-quantity/:id",quantityUpdateController)

// router.post("/additemsInCart",addItemsInCart)

// router.get("/cart-items/:id",requireSignIn,getCartItemsByUser)

export default router;