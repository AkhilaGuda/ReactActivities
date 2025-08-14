import ProductList from "./ProductList";
function App() {
  const products=[{id:1, name: 'Pen', price:20},
                  {id:2, name: 'Book', price:50},
                  {id:3, name: 'Pencil', price:10}  ];

  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;
