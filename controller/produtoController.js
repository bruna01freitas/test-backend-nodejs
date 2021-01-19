
//módulo responsavel por manipular os dados e separar a lógica de dados da aplicação
const product_service = require("../services/produtos");

module.exports = product_controller = {
 
  get_product: (req, res) => {
    product_service.get_product().then((info) => {
      res
        .json({
          success: true,
          data: info,
        })
        .catch((error) => {
          res.json({
            success: false,
            message: error,
          });
        });
    });
  },
  get_product_byId: (req, res) => {
    var id = req.params.id;
    product_service
      .get_product_byId(id)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: error,
        });
      });
  },
  get_product_byTitle: (req, res) => {
    var title = req.query.title;
    product_service
      .get_product_byTitle(title)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: error,
        });
      });
  },
  get_product_byCategory: (req, res) => {
    var category = req.query.category;
    product_service
      .get_product_byCategory(category)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: error,
        });
      });
  },
  create_product: (req, res) => {
    let {
      title,
      category,
      description,
      price,
    } = req.body;
    product_service
      .create_product(
        title,
        category,
        description,
        price,
      
      )
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: err,
        });
      });
  },
  delete_product: (req, res) => {
    var id = req.params.id;
    product_service
      .delete_product(id)
      .then(() => {
        res.json({
          success: true,
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          message: error,
        });
      });
  },
  updtate_product: (req, res) => {
    let {
      title,
      category,
      description,
      price,
    } = req.body;
    var id = req.params.id;
    product_service
      .update_product(
        id,
        title,
        category,
        description,
        price,
      )
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: err,
        });
      });
  },
};