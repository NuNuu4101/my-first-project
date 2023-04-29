import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  Navbar,
  Home,
  Man,
  Woman,
  Kids,
  ProductDetails,
  Profile,
  Checkout,
  Cart,
  Footer
} from "./components"
import { useState} from "react"

function App() {
  const [addToCart, setAddToCart] = useState(false)
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [productId, setProductId] = useState("0")
  const [productIds, setProductIds] = useState([])
  const [addedToCart, setAddedToCart] = useState(false)

  return (
    <BrowserRouter>
      <Navbar
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
      
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              productIds={productIds}
              setProductIds={setProductIds}
              count={count}
              setCount={setCount}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              setAddToCart={setAddToCart}
              count={count}
              setCount={setCount}
            />
          }
        />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kids" element={<Kids />} />
        <Route
          path="/kids/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
              setAddToCart={setAddToCart}
              count={count}
              setCount={setCount}
              productId={productId}
              setProductId={setProductId}
              productIds={productIds}
              setProductIds={setProductIds}
              addedToCart={addedToCart}
              setAddedToCart={setAddedToCart}
            />
          }
        />
        <Route
          path="/man/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
              setAddToCart={setAddToCart}
              count={count}
              setCount={setCount}
              productId={productId}
              setProductId={setProductId}
              productIds={productIds}
              setProductIds={setProductIds}
              addedToCart={addedToCart}
              setAddedToCart={setAddedToCart}
            />
          }
        />
        <Route
          path="/woman/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
              setAddToCart={setAddToCart}
              count={count}
              setCount={setCount}
              productId={productId}
              setProductId={setProductId}
              productIds={productIds}
              setProductIds={setProductIds}
              addedToCart={addedToCart}
              setAddedToCart={setAddedToCart}
            />
          }
        />
      </Routes>
          <Footer />
    </BrowserRouter>
  )
}

export default App
