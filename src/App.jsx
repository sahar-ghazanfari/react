import { createContext, useState } from "react";
import AppTitle from "./features/AppTitle";
import Filters from "./features/Filters";
import NewCategory from "./features/NewCategory";
import ProductList from "./features/ProductList";
import MobileFilter from "./features/MobileFilter";

// useContext
export const MyContext = createContext();

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
  const [title, setTitle] = useState("");

  // handling
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.title || !formData.quantity || !formData.option) return null;
    setProduct([...product].concat(formData));
  };

  const handleDelete = (p) => {
    setProduct(product.filter((pro) => pro !== p));
  };

  const valueProvider = {
    Data: [formData, setFormData],
    searching: [search, setSearch],
    products: [product, setProduct],
    Values: [inputValue, setInputValue],
    Titles: [title, setTitle],
  };

  return (
    <div>
      <AppTitle />
      <div className="px-10 container max-w-screen-xl md:mx-auto">
        <MyContext.Provider value={valueProvider}>
          <div>
            <MobileFilter onChange={handleChange} />
            <div className="flex flex-col items-center md:flex-row md:gap-x-10">
              <NewCategory onSubmit={handleSubmit} onChange={handleChange} />
              <div className="w-full md:w-1/2">
                <Filters onChange={handleChange} />
                <ProductList onDelete={handleDelete} />
              </div>
            </div>
          </div>
        </MyContext.Provider>
      </div>
    </div>
  );
}

export default App;
