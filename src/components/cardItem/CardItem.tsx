import { NavLink } from "react-router-dom";
import { ICardItem } from "./interface";
import React from "react";

interface ICardItemProps {
  product: ICardItem;
}

const CardItem: React.FC<ICardItemProps> = (props: ICardItemProps) => {
  const { product } = props;
  return (
    <div key={product.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <NavLink to={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </NavLink>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}$</p>
      </div>
    </div>
  );
};

export default CardItem;
