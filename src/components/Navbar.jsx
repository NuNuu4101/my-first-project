import { FaBars, FaRegUser, FaShoppingCart } from "react-icons/fa"
import { useState } from "react"
import Cart from "./Cart"
import { Link } from "react-router-dom"

const Navbar = ({
  addToCart,
  setAddToCart,
  count,
  setCount,
  isOpen,
  setIsOpen,
  productId,
  setProductId,
  productIds,
  setProductIds,
  addedToCart,
  setAddedToCart,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flex justify-between mt-5 mx-2 lg:mx-20 sm:mx-8 md:mx-12">
      <Link to="/" className="font-lobster italic text-2xl">Spooky</Link>
      <div className="hidden md:flex gap-4">
        <Link to="/man">Men</Link>
        <Link to="/woman">Women</Link>
        <Link to="/kids">Kids</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/profile">
          <FaRegUser className="text-gray-500" />
        </Link>
        <div>
          <Cart
            addToCart={addToCart}
            setAddToCart={setAddToCart}
            count={count}
            setCount={setCount}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            productId={productId}
            setProductId={setProductId}
            productIds={productIds}
            setProductIds={setProductIds}
            addedToCart={addedToCart}
            setAddedToCart={setAddedToCart}
          />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FaBars className="text-gray-500" />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 ${
          isMenuOpen ? "block" : "hidden"
        } `}>
        <div className="p-4">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="focus:outline-none">
              <FaBars className="text-gray-500" />
            </button>
          </div>
          <div className="mt-4">
            <div className="border-b py-2">
              <Link to="/man">Men</Link>
            </div>
            <div className="border-b py-2">
              <Link to="/woman">Women</Link>
            </div>
            <div className="border-b py-2">
              <Link to="/kids">Kids</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
