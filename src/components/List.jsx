import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, toggleDetails } from "../redux/todoSlice";

const List = () => {
  const todos = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChecked = (id) => {
    dispatch(toggleTodo(id));
  };

  const toggleTheDetails = (id) => {
    dispatch(toggleDetails(id));
  };

  return (
    <div className="  text-white flex flex-col gap-4">
      {todos?.map((todo) => {
        return (
          <div
            key={todo.id}
            className="bg-slate-600 rounded-md flex flex-row w-96 min-w-max justify-between"
          >
            <div className="flex flex-row w-96 min-w-max justify-between m-3 ">
              <div className={todo.completed ? "line-through flex" : "flex"}>
                <input
                  className="w-4 m-5"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleChecked(todo.id)}
                  disabled={todo.showDetails}
                />
                <div
                  className={
                    todo.showDetails ? "flex-row pl-4 pr-4 " : "flex-col"
                  }
                >
                  <p
                    className={
                      todo.showDetails
                        ? "mt-4 bg-gray-900 px-2 py-1 rounded-lg font-semibold"
                        : "mt-4 bg-gray-900 max-w-32 overflow-hidden px-2 py-1 rounded-lg font-semibold"
                    }
                  >
                    {todo.title}
                  </p>
                  {todo.showDetails && (
                    <>
                      <p className="px-2 py-1">{todo.description}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-2 p-3">
                <button
                  className="p-4 pt-1 pb-1 rounded-lg "
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteTodo(todo.id);
                  }}
                >
                  <svg viewBox="0 0 16 16" width="20" height="20">
                    <path
                      style={{
                        lineHeight: "normal",
                        textIndent: "0",
                        textAlign: "start",
                        textDecorationLine: "none",
                        textDecorationStyle: "solid",
                        textDecorationColor: "#000",
                        textTransform: "none",
                        blockProgression: "tb",
                        whiteSpace: "normal",
                        isolation: "auto",
                        mixBlendMode: "normal",
                        solidColor: "#000",
                        solidOpacity: "1",
                      }}
                      d="M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6zM5.525 4.818l-.707.707L7.293 8l-2.475 2.477.707.707L8 8.707l2.477 2.477.707-.707L8.707 8l2.477-2.475-.707-.707L8 7.293 5.525 4.818z"
                      fill="#e20d0d"
                      className="color000 svgShape"
                    ></path>
                  </svg>
                </button>
                <button
                  className="text-white p-4  pt-1 pb-1 rounded-lg hover:text-blue-800"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTheDetails(todo.id);
                  }}
                  disabled={todo.completed}
                >
                  {todo.showDetails ? "See Less" : "See More..."}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
