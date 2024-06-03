import { Rating } from "@mui/material";
import { useSelector } from "react-redux";

const Product = () => {
  const data = useSelector((i) => i.product.value);

  console.log(data);
  return (
    <div className="grid grid-cols-4">
      {data?.map((product) => {
        return (
          <div key={product.id} className=" bg-white p-2 rounded-xl ">
            <img
              src={product.thumbnail}
              alt=""
              className="h-40 object-cover w-full"
            />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p className="text-green-500">{product.discountPercentage}%</p>
            <Rating name="read-only" value={product.rating} readOnly />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
