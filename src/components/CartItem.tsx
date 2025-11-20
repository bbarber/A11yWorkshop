import { CartItem as CartItemType } from '../types/index';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      updateQuantity(item.product.id, quantity);
    }
  };

  const subtotal = item.product.price * item.quantity;

  return (
    <div className="flex gap-4 py-4 border-b">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      <div className="flex-grow">
        <h3 className="font-semibold text-gray-900 mb-1">
          {item.product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          ${item.product.price.toFixed(2)} each
        </p>

        <div className="flex items-center gap-3 mb-3">
          <label htmlFor={`quantity-${item.product.id}`} className="text-sm font-medium">
            Qty:
          </label>
          <input
            id={`quantity-${item.product.id}`}
            type="number"
            min="1"
            max="99"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="w-16 px-2 py-1 border rounded-lg text-center"
          />
          <button
            onClick={() => removeFromCart(item.product.id)}
            className="text-red-600 hover:text-red-800 text-sm font-medium ml-auto"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold text-gray-900">
          ${subtotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
