import ProductModal from "Components/ProductModal";


export default function ProductView({product}) {

    if (!product) {
        console.log('nohay')
        return <div>Product not found</div>; // Or redirect to a 404 page
    }
    console.log('habemus prod')
    return <ProductModal product={product} />;
}

