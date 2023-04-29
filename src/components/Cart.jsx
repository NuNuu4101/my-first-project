import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

const Cart = ({
  addToCart,
  count,
  setCount,
  isOpen,
  setIsOpen,
  productIds,
  setProductIds,
  setAddedToCart,
}) => {
  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  const handleIncreaseQuantity = (id) => {
    setProductIds((prevProductIds) =>
      prevProductIds.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const handleDecreaseQuantity = (id) => {
    setProductIds((prevProductIds) =>
      prevProductIds.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const handleRemoveItem = (id) => {
    setProductIds((prevProductIds) =>
      prevProductIds.filter((item) => item.id !== id)
    )
    setCount(count - 1)
    setAddedToCart(false)
  }

  return (
    <div>
      <div className="relative">
        <button className="cursor-pointer z-50" onClick={toggleCart}>
          <FaShoppingCart className="text-gray-500" />
        </button>

        {addToCart && (
          <div className="bg-red-500 text-white px-1 text-xs rounded-full absolute bottom-3 left-2 mr-2 mt-1 text-center z-40">
            {count > 0 && count}
          </div>
        )}
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-black opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleCart}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[520px] max-w-lg p-5 bg-white z-50 shadow-lg transform transition-all duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-gray-800 text-xl font-semibold">
            Cart
            <div
              className="inline-block text-xs hover:underline cursor-pointer opacity-60 mx-2"
              onClick={() => {
                setProductIds([])
                setCount(0)
                setAddedToCart(false)
              }}>
              Clear
            </div>
          </div>
          <button onClick={toggleCart}>
            <svg
              className="h-6 w-6 fill-current text-gray-500"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.348 14.849a1.25 1.25 0 0 1-1.768 1.768L10 11.768l-2.58 2.58a1.25 1.25 0 1 1-1.768-1.768L8.232 10l-2.58-2.58a1.25 1.25 0 0 1 1.768-1.768L10 8.232l2.58-2.58a1.25 1.25 0 0 1 1.768 1.768L11.768 10l2.58 2.58z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <hr />
        {productIds.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row mt-5 items-center md:items-start mb-8">
            <div className="md:overflow-hidden h-72 md:h-auto md:w-1/4 w-1/2 mx-1">
              <img
                alt={item.description}
                srcSet={item.srcset}
                src={item.src}
                decoding="async"
                data-nimg="raw"
                className="w-full object-contain shadow-md rounded-lg"
              />
            </div>

            <div className="md:w-1/2 md:mx-6 mt-6 md:mt-0 flex flex-col justify-center text-center">
              <h2 className="text-2xl font-semibold mb-2 text-ellipsis overflow-hidden">
                {item.description}
              </h2>
              <p className="text-gray-600">{item.details}</p>
            </div>
            <div className="md:w-1/4 mt-6 md:mt-0 flex flex-col items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="py-1 px-3 rounded-lg border border-gray-400 mr-2 text-gray-600 hover:bg-gray-200 transition-colors duration-200">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="minus w-4 h-4">
                    <path
                      fillRule="evenodd"
                      d="M17 11H3a1 1 0 010-2h14a1 1 0 110 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="text-lg font-semibold">{item.quantity}</div>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="py-1 px-3 rounded-lg border border-gray-400 ml-2 text-gray-600 hover:bg-gray-200 transition-colors duration-200">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="plus w-4 h-4">
                    <path
                      fillRule="evenodd"
                      d="M17 11h-4v4a1 1 0 11-2 0v-4H7a1 1 0 110-2h4V5a1 1 0 112 0v4h4a1 1 0 110 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-lg font-semibold mt-4">
                ${item.quantity * item.price}
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="mt-4 py-2 px-4 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200">
                Remove
              </button>
            </div>
          </div>
        ))}
        <hr />
        {count > 0 && (
          <Link to="/checkout">
            <button
              className="bg-blue-500 opacity-100 hover:opacity-70 text-white rounded-md p-2 float-right mt-2 mb-5"
              onClick={() => setIsOpen(false)}>
              CheckOut
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Cart
