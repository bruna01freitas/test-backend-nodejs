//módulo responsável por acessar o banco de dados
const productModel = require("../models/produtoModel");

module.exports = product_service = {
   /**
  * @name get_product - retorna todos os produtos cadastrados
  *
  * @returns {Promise}
  */
  get_product: () => {  //acessa todos os products cadastrados no banco 
    return productModel.find().exec();
  },
   /**
  * @name get_product_byId - retorna o produto com base no id informado
  * 
  * @param {String} id
  * 
  * @returns {Promise}
  */
  get_product_byId: (id) => {

    return new Promise((resolve, reject) => {
      var getId = productModel.findOne({ _id: id }).exec();
      getId
        .then((get_id) => {
          resolve(get_id);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
 /**
  * @name get_product_byTitle - retorna o produto com base no title informado
  * 
  * @param {String} title
  * 
  * @returns {Promise}
  */
  get_product_byTitle: (title) => {

    return new Promise((resolve, reject) => {
      var getTitle = productModel.find({ title: title }).exec();
      getTitle
        .then((getTitle) => {
          resolve(getTitle);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
   /**
  * @name get_product_byCategory - retorna o produto com base na category informada
  * 
  * @param {String} category
  * 
  * @returns {Promise}
  */
  get_product_byCategory: (category) => {

    return new Promise((resolve, reject) => {
      var getCategory = productModel.find({ category: category }).exec();
      getCategory
        .then((getCategory) => {
          resolve(getCategory);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
   /**
  * @name create_product - cria o produto com base no preenchimento do formulário
  * 
  * @param {String} title - título do produto
  * @param {String} category - categoria do produtos
  * @param {String} description - descrição do produtos
  * @param {String} price - preço do produtos
  * 
  * @returns {Promise}
  */
  create_product: (
    title,
    category,
    description,
    price,
  ) => {
    return new Promise((resolve, reject) => {
      var newproductModel = new productModel({
        title,
        category,
        description,
        price,
      }).save();
      newproductModel
        .then((newproduct) => {
          resolve(newproduct);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  /**
  * @name delete_product - cria o produto com base no preenchimento do formulário
  * 
  * @param {String} id - deleta o produto com base no id
  *
  * @returns {Promise}
  */
  delete_product: (id) => {
    return new Promise((resolve, reject) => {
      var deleteProduct = productModel
        .deleteOne({
          _id: id,
        })
        .exec();
      deleteProduct
        .then((del_product) => {
          resolve(del_product);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  /**
  * @name update_product - edita e atualiza o produto com base no preenchimento do formulário
  * 
  * @param {String} title - título do produto
  * @param {String} id - id do produto
  * @param {String} category - categoria do produtos
  * @param {String} description - descrição do produtos
  * @param {String} price - preço do produtos
  * 
  * @returns {Promise}
  */
  update_product: (
    id,
    title,
    category,
    description,
    price,
    
  ) => {
    return new Promise((resolve, reject) => {
      var updateProduct = productModel
        .findOneAndUpdate(
          {
            _id: id,
          },
          {
            title,
            category,
            description,
            price,
          },
          { new: true }
        )
        .exec();
      updateProduct
        .then((up_product) => {
          resolve(up_product);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};