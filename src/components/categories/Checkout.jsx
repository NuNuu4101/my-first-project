import React from "react"
import { useState, useEffect } from "react"

const Checkout = ({ productIds, setProductIds, setCount }) => {
  const [total, setTotal] = useState(0)
  const [amount, setAmount] = useState(0)
  const [confirm, setConfirm] = useState(false)
  useEffect(() => {
    let sum = 0
    let number = 0
    for (const item of productIds) {
      sum += item.price * item.quantity
      number += item.quantity
    }
    setTotal(sum)
    setAmount(number)
  }, [productIds])

  const clickHandler = () => {
    setConfirm(!confirm)
  }

  const clickYesHandler = () => {
    setConfirm(false)
    setProductIds([])
    setCount(0)
  }

  const clickNoHandler = () => {
    setConfirm(false)
  }

  return (
    <main className="mx-10 lg:mx-20 sm:mx-8 md:mx-12 min-h-screen">
      <div className="text-2xl italic mt-8">Review your items</div>
      {productIds.length > 0 ? (
        <div className="flex md:flex-row flex-col-reverse gap-6">
          <div className="flex flex-col md:w-1/2 w-full">
            {productIds.map((item) => (
              <div key={item.id} className="mt-6">
                <div className="flex border">
                  <div>
                    <img
                      alt={item.description}
                      srcSet={item.srcset}
                      src={item.src}
                      height="170"
                      width="120"
                      decoding="async"
                      data-nimg="raw"
                      style={{
                        aspectRatio: "120/170",
                      }}
                      className="shadow-md"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col p-2">
                    <div className="text-base font-semibold">
                      {item.description}
                    </div>
                    <div className="text-red-700 text-base">${item.price}</div>
                    <div className="text-base">Quantity :{item.quantity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 mt-6  md:w-1/4 w-full">
            <div className="border p-2">
              <div className="text-base font-semibold">Order Summary</div>
              <div className="flex justify-between text-sm  my-1">
                <div>Items({amount}):</div>
                <div>${total}</div>
              </div>
              <div className="flex justify-between text-sm  my-1">
                <div>Shipping and handling</div>
                <div className="border-b pb-2">$0.00</div>
              </div>
              <div className="flex justify-between text-sm mt-2  my-1">
                <div>Total before tax:</div>
                <div>${total}</div>
              </div>
              <div className="flex justify-between text-sm border-b pb-2 my-1">
                <div>Estimated tax(10%)</div>
                <div>${total / 10}</div>
              </div>
              <div className="text-base text-red-700 flex justify-between my-2">
                <div>Order Total:</div>
                <div>${total - total / 10}</div>
              </div>
              <div className="text-center mt-5">
                <button
                  className="bg-blue-500 text-white py-2 px-10 rounded-md opacity-100 hover:opacity-70 transition-all"
                  onClick={clickHandler}>
                  Place your order
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6">Your items are empty.</div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black opacity-50 ${
          confirm ? "block" : "hidden"
        }`}
      />
      {confirm && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white shadow-md rounded-md md:p-10 p-4">
            <div>Do you want to place your order?</div>
            <div className="mt-4 flex justify-center">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-10 rounded-md mr-2 hover:bg-blue-500 hover:text-white transition-all"
                onClick={clickYesHandler}>
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-2 px-10 rounded-md ml-2 hover:bg-blue-500 hover:text-white transition-all"
                onClick={clickNoHandler}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Checkout
