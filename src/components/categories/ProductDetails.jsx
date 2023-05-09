import React from "react"
import { useParams } from "react-router-dom"
import { images } from "../../utils/constants"
import "./App.css"
import { useEffect } from "react"

const ProductDetails = ({
  setAddToCart,
  count,
  setCount,
  setProductId,
  productIds,
  setProductIds,
  addedToCart,
  setAddedToCart,
}) => {
  const { id } = useParams()

  const clickHandler = () => {
    setAddToCart(true)
    setCount(count + 1)
    setProductId(id)
    const selectedItem = images.find((item) => item.id === id)
    const existingItem = productIds.find((item) => item.id === id)
    if (existingItem) {
      setProductIds((prevSelectedItems) =>
        prevSelectedItems.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      )
    } else {
      setProductIds((prevSelectedItems) => [
        ...prevSelectedItems,
        { ...selectedItem, count: 1 },
      ])
    }
  }
  useEffect(() => {
    const isProductAddedToCart = productIds.find((product) => product.id === id)
    setAddedToCart(!!isProductAddedToCart)
  }, [productIds, id])

  return (
    <main className="mx-10 md:mx-4 lg:mx-10 mt-10 md:mt-6 md:h-screen">
      {images.map(
        (item) =>
          item.id === id && (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-8 md:gap-12">
              <img
                alt={item.description}
                srcSet={item.srcset}
                src={item.src}
                height="500"
                width="400"
                decoding="async"
                data-nimg="raw"
                style={{
                  aspectRatio: "400/500",
                }}
                className="shadow-md"
              />
              <div className="flex-1 flex flex-col ">
                <div className="text-2xl md:text-4xl font-bold ">
                  {item.description}
                </div>
                <p className="md:text-md my-4">{item.sellout}</p>
                <div className="text-lg md:text-xl opacity-70 font-castoro">
                  {item.type}
                </div>
                <div className="my-4 text-lg md:text-2xl">${item.price}</div>
                <button
                  className={`px-6 py-2 rounded-md ${
                    addedToCart
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white text-lg md:text-xl font-medium`}
                  onClick={clickHandler}
                  disabled={addedToCart}>
                  {addedToCart ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3.535 7.464l-5.657 5.657-3.536-3.536-1.414 1.414 3.536 3.536L13.536 8.88l-1.414-1.415z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Added to your cart
                    </span>
                  ) : (
                    "Add to cart"
                  )}
                </button>
              </div>
            </div>
          )
      )}
    </main>
  )
}

export default ProductDetails
