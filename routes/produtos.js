//roteamento da aplicação
const router = express.Router();
var product_controller = require("../controller/produtoController");

router.get("/list-products", product_controller.get_product);

router.get("/getbyId/:id", product_controller.get_product_byId);

router.get("/getbytitle", product_controller.get_product_byTitle);

router.get("/getbycategory", product_controller.get_product_byCategory);

router.put("/update-product/:id", product_controller.updtate_product);

router.post("/new-product", product_controller.create_product);

router.delete("/delete/:id", product_controller.delete_product);

module.exports = router;