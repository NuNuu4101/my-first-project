import { Link } from "react-router-dom";
import { images } from "../../utils/constants";

const Man = () => {
  return (
    <main className="mx-2 lg:mx-20 sm:mx-8 md:mx-12 mt-6 ">
      <div className="text-4xl font-castoro uppercase">Man Shoes</div>
      <div className="flex flex-wrap justify-center mt-4">
        {images.map((item) => (
          item.type === "Men" && (
            <div key={item.id} className="flex flex-col items-center p-5 w-72 sm:w-80 md:w-96 lg:w-80 xl:w-96">
              <Link to={`/man/${item.id}`}>
              <img
                alt="Nike LeBron 19 Low"
                srcSet={item.srcset}
                src={item.src}
                height="366.6666666666667"
                width="293.3333333333333"
                decoding="async"
                data-nimg="raw"
                style={{
                  aspectRatio: "293.333/366.667",
                }}
                className="shadow-md"
                />
                </Link>
              <div className="mt-2 text-base text-center">{item.description}</div>
              <div className="font-semibold text-sm">${item.price}</div>
            </div>
          )
        ))}
      </div>
    </main>
  );
};

export default Man;
