import nikeM from "../picture/nikeM.jpeg"
import nikeF from "../picture/nikeF.jpg"
import nikeK from "../picture/nikeK.jpg"
const Home = () => {
  return (
    <div className="mx-2 lg:mx-20 sm:mx-8 md:mx-12 mt-6">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img src={nikeM} alt="Nike Man Shoe" className=" w-96 my-14" />
        <div className="md:mx-16 -mt-9">
          <div className=" md:text-5xl text-4xl font-castoro">Stylish Shoes</div>
          <p className="md:mt-5 mt-2 text-base">Top choice for life and travelling</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center">
        <img src={nikeF} alt="Nike Woman Shoe" className=" w-96 my-14" />
        <div className="md:mx-16 -mt-9">
          <div className=" md:text-5xl text-4xl font-castoro">Beautiful Shoes</div>
          <p className="md:mt-5 mt-2 text-base">Great for taking photos and jogging.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img src={nikeK} alt="Nike Kids Shoe" className=" w-96 my-14" />
        <div className="md:mx-16 -mt-9">
          <div className=" md:text-5xl text-4xl font-castoro">Agile Shoes</div>
          <p className="md:mt-5 mt-2 text-base">Excellent choice for playing and having fun</p>
        </div>
      </div>
    </div>
  )
}

export default Home
