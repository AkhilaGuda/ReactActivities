export default function ProductList({ products }) {
    if (!products || products.length === 0) {
        return <p>No products available!!</p>;
    }
    const consoleProductName = (name) => {
        console.log(name);
    }
    return (
        <ul>
            {products.map((product)=>(
            <li key={product.id}>
                {product.name} ${product.price}    
                <button onClick={() => consoleProductName(product.name)}>Console Name</button>
            </li>
            ))}
        </ul>
    );
}