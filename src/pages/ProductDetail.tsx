import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h1>
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="text-indigo-600 hover:text-indigo-800 font-medium mb-8 inline-block"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-w-md"
              />
            </div>

            {/* Product Info */}
            <div>
              <span className="text-sm font-semibold text-indigo-600 uppercase">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
                <p className="text-yellow-600 font-semibold">
                  Rating: {product.rating}/5
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b">
                <p className="text-4xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <p className="text-green-600 font-semibold">
                    ✓ In Stock
                  </p>
                ) : (
                  <p className="text-red-600 font-semibold">
                    ✗ Out of Stock
                  </p>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-900 mb-2">
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-4 py-2 border rounded-lg text-center font-medium"
                  />
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all ${
                    product.inStock
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  } ${addedToCart ? 'bg-green-600' : ''}`}
                >
                  {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t space-y-3">
                <p className="text-gray-600">
                  <span className="font-semibold">SKU:</span> PROD-{product.id}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Category:</span> {product.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
