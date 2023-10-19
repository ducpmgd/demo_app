import CardItem from "components/cardItem/CardItem";
import { ICardItem } from "components/cardItem/interface";
import { ChangeEvent, useEffect, useState } from "react";
import { getListProduct } from "services/products";
import { debounce } from "utils/debounce";
import Pagination from "../../components/pagination/Pagination";
import FilterForm from "./FilterForm";
import Spiner from "components/spiner/Spiner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { updateProducts } from "redux/reducers/productSlice";
import { SORT_BY } from "utils/constant";

export const Home = () => {
  const products: ICardItem[] = useSelector(
    (state: RootState) => state.product.products
  );
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    search: "",
    sort: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sorted, setSorted] = useState(SORT_BY[0].value);
  const limit = 10;

  const handleFetchData = async () => {
    setIsLoading(true);
    const res = await getListProduct({
      q: filters.search,
      skip: (currentPage - 1) * limit,
      limit,
    });
    if (res) {
      setTotalPages(Math.ceil(res.total / limit));
      dispatch(updateProducts(res.products));
    }
    setIsLoading(false);
  };

  const handleSearch = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      search: e.target.value,
    }));
    setCurrentPage(1);
  }, 500);

  const onChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSorted(e.target.value);
  };

  const handleSort = (value: string) => {
    let newProducts;
    switch (value) {
      case SORT_BY[0].value:
        newProducts = [...products].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        dispatch(updateProducts(newProducts));
        break;
      case SORT_BY[1].value:
        newProducts = [...products].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        dispatch(updateProducts(newProducts));
        break;
      case SORT_BY[2].value:
        newProducts = [...products].sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        dispatch(updateProducts(newProducts));
        break;
      case SORT_BY[3].value:
        newProducts = [...products].sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        dispatch(updateProducts(newProducts));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [filters.search, currentPage]);

  useEffect(() => {
    if (!isLoading) {
      handleSort(sorted);
    }
  }, [sorted, isLoading]);

  return (
    <div className="container mx-auto px-4 bg-white">
      <FilterForm
        handleSearch={handleSearch}
        onChangeSort={onChangeSort}
        sorted={sorted}
      />
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
            List Product
          </h2>
          {products.length > 0 ? (
            <>
              <div className="mx-auto mt-2">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {products.map((product: ICardItem) => (
                    <CardItem key={product.id} product={product} />
                  ))}
                </div>
              </div>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                limit={limit}
              />
            </>
          ) : (
            <div className="text-2xl font-bold tracking-tight text-gray-900 text-center mt-40">
              No Product Found
            </div>
          )}
        </>
      )}
    </div>
  );
};
