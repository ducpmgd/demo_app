import CardItem from "components/cardItem/CardItem";
import { ICardItem } from "components/cardItem/interface";
import { ChangeEvent, useEffect, useState } from "react";
import { getListProduct, searchProduct } from "services/products";
import { debounce } from "utils/debounce";
import Pagination from "../../components/pagination/Pagination";
import FilterForm from "./FilterForm";

export const Home = () => {
  const [products, setProducts] = useState<ICardItem[]>([]);
  const [filters, setFilters] = useState({
    search: "",
    sort: "",
  });
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [totalPages, setTotalPages] = useState<number>()

  const handleFetchData = async () => {
    const res = await getListProduct({
      search: filters.search, page: currentPage,
      limit
    });
    if (res) {
      setTotalPages(Math.ceil(res.total / res.limit))
      setProducts(res.products);
    }
  };

  const handleSearch = debounce(async(e: ChangeEvent<HTMLInputElement>) => {
    const res = await searchProduct({
      q: e.target.value, 
      skip: (currentPage - 1) * limit,
      limit
    });
    if (res) {
      setTotalPages(Math.ceil(res.total / res.limit))
      setProducts(res.products);
    }
  }, 500);

  useEffect(() => {
    handleFetchData();
  }, [filters.search]);

  return (
    <div className="container mx-auto px-4 bg-white">
      <FilterForm handleSearch={handleSearch} />
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          List Product
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: ICardItem) => (
            <CardItem product={product} />
          ))}
        </div>
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} />
    </div>
  );
};
