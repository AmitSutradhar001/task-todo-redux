import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const Form = () => {
  const [item, setItem] = useState({
    id: Date.now(),
    title: "",
    description: "",
    completed: false,
    showDetails: false,
  });
  const [err, setErr] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (item.title === "" || item.description === "") {
      setErr("Please fill all the fields");
      return;
    } else {
      setErr("");
    }
    dispatch(addTodo(item));
    setItem({
      id: Date.now(),
      title: "",
      description: "",
      completed: false,
      showDetails: false,
    });
  };

  return (
    <>
      <form>
        <div className="bg-slate-700 text-white w-auto p-4 flex flex-col justify-start rounded-lg font-serif font-semibold md:flex-row">
          <input
            className="rounded-t-lg p-3 bg-slate-700 focus:outline-none placeholder:text-white"
            type="text"
            required
            value={item.title}
            placeholder="Enter the title!"
            onChange={(e) => setItem({ ...item, title: e.target.value })}
          />
          <input
            className=" p-3 bg-slate-700 placeholder:text-white focus:outline-none"
            type="text"
            value={item.description}
            placeholder="Enter the description!"
            onChange={(e) => setItem({ ...item, description: e.target.value })}
            required
          />

          <button
            className="bg-orange-400 hover:bg-orange-500  p-2 rounded"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </form>
      {err && (
        <p className="text-red-500 font-semibold font-serif mt-2">{err}</p>
      )}
    </>
  );
};

export default Form;
