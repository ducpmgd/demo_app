import { ChangeEvent } from "react";
import { SORT_BY } from "utils/constant";

interface FilterFormProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSort:(e:ChangeEvent<HTMLSelectElement>)=>void;
  sorted: string
}
const FilterForm = (props: FilterFormProps) => {

  const { handleSearch, onChangeSort, sorted } = props;

  return (
    <div className="flex justify-between items-center">
      <div className="w-2/4">
        <label
          htmlFor="search"
          className="block mb-2 text-sm font-medium text-gray-90"
        >
          Search
        </label>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
          type="text"
          id="search"
          className="w-full block rounded-md border-0 p-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
      </div>
      <div className="w-1/4">
        <label
          htmlFor="sort"
          className="block mb-2 text-sm font-medium text-gray-90"
        >
          Sort By
        </label>
        <select
          value={sorted}
          onChange={(e:ChangeEvent<HTMLSelectElement>) => onChangeSort(e)}
          id="sorts"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {SORT_BY.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterForm;
