# Implementation of shopping cart react context
* Created CartContext using createContext()
* created CartProvider component, in this component cart variable is declared using useState, two functions to addToCart, removeFromCart 
* addToCart takes product as parameter and updates to previous cart list
* removeFromCart takes productId as parameter, finds the first item with that index and removes it from cart list
* Every context object has provider component, the provider allows to share data with all components inside it i.e, children components
* value property defines what values, functions can be shared.
* {children} means all the components wrapped inside the CartProvider
* created cart, productList components to display default available products, added to cart products
* In App component, wrapped everything in CartProvider which is created in CartContext, this means ProductList, Cart have access to shared CartContext values i.e, cart, addToCart,removeFromCart.
* Inside Cart, ProductList components shared resources can be accessed using useContext()hook.
* created react app using npx-react-app, started locally using npm start commands.