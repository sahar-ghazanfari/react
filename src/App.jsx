import { createContext, useState } from "react";
import AppTitle from "./features/AppTitle";
import Filters from "./features/Filters";
import NewCategory from "./features/NewCategory";
import ProductList from "./features/ProductList";
import MobileFilter from "./features/MobileFilter";
import useLocalStorage from "./hooks/useLocalStorage";

// useContext
export const MyContext = createContext("");

function App() {
  // useState
  const [formData, setFormData] = useState({
    title: "",
    quantity: "",
    option: "",
    id: new Date().valueOf(),
    createdAt: new Date().toLocaleDateString("fa-IR"),
  });
  const [sort, setSort] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [product, setProduct] = useLocalStorage("product", []);
  const [inputValue, setInputValue] = useLocalStorage("inputValue", []);

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
    Sorts: [sort, setSort],
    categories: [category, setCategory],
  };

  return (
    <MyContext.Provider value={valueProvider}>
      <div className="grid grid-cols-1">
        <div>
          <AppTitle />
          <MobileFilter onChange={handleChange} />
        </div>
        <div className="grid md:grid-cols-2 container max-w-screen-xl md:mx-auto md:gap-x-20 md:mt-10">
          <NewCategory onSubmit={handleSubmit} onChange={handleChange} />
          <div>
            <Filters onChange={handleChange} />
            <ProductList onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
