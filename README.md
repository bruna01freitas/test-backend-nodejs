<h1>Documentação teste técnico Analista backend junior Anota Ai</h1>

Por: Bruna dos Santos Freitas

<strong>Detalhes</strong>
Cada produto é composto pelos seguintes atributos:

-Título
-Categoria
-Descrição
-Preço

<strong> Iniciar o servidor </strong>

-npm install 
-nodemon app.js
 
<strong> Acesso as rotas </strong>

- localhost:3000/products/list-products - para fazer a leitura de todos os produtos;
- localhost:3000/products/getbyId/:id - para fazer a leitura de um produto em específico com base no ID dele;
- localhost:3000/products/getbytitle/:id - para filtrar um produto em específico com base title dele
- localhost:3000/products/getbycategory/:id - para filtrar um produto em específico com base na categoria dele;
- localhost:3000/products/update-product/:id - para editar um produto em específico com base no ID dele;
- localhost:3000/products/new-product - para criar e adicionar um produto no catálogo;
- localhost:3000/products/delete/:id - para excluir um produto do catálogo;



