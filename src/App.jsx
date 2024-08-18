import { createContext, useState } from "react";
import AppTitle from "./features/AppTitle";
import Filters from "./features/Filters";
import NewCategory from "./features/NewCategory";
import ProductList from "./features/ProductList";

// useContext
export const FormDataContext = createContext();
export const SearchContext = createContext();

function App() {
  // useState
  const [inputValue, setInputValue] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    quantity: "",
    option: "",
    id: new Date().valueOf(),
    createdAt: new Date().toLocaleDateString("fa-IR"),
  });
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  // handling
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setProduct([...product].concat(formData));
  };

  const handleDelete = (p) => {
    setProduct(product.filter((pro) => pro !== p));
  };

  return (
    <div>
      <AppTitle />
      <div className="container space-y-7 mx-auto xl:max-w-screen-xl">
        <div className="flex gap-x-10">
          <FormDataContext.Provider value={formData}>
            <SearchContext.Provider value={search}>
              <NewCategory
                onSubmit={handleSubmit}
                inputValue={inputValue}
                setInputValue={setInputValue}
                onChange={handleChange}
              />
              <div className="w-1/2 ">
                <Filters
                  onChange={handleChange}
                  inputValue={inputValue}
                  product={product}
                  setProduct={setProduct}
                  setSearch={setSearch}
                />
                <ProductList handleDelete={handleDelete} product={product} />
              </div>
            </SearchContext.Provider>
          </FormDataContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
