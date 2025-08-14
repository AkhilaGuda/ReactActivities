# Implementation of ProductList component
* created functional component which takes products as props
* Initially checked if products exists or products is empty if yes then console no products available
* Returned unordered list through mapping over products for each product item created a list item
* for list item key is product Id, printed product name and product price 
* created a button for handling click to print product name in console 
* for handling button onClick event handling is added it callback to consoleProductName which takes product name as parameter and prints in concole.
* In app.js created sample products with each object contains id,name,price.
* passed as props to ProdcutList component while rendering.