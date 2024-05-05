import Form from "./components/Form";
import List from "./components/List";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Meteors } from "./components/ui/meteors";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-center items-center mt-8">
        <Form />
        <div className="border-b-2 border-white w-96 m-4 md:w-[800px]"></div>
        <List />
        <Meteors number={50} />
      </div>
    </Provider>
  );
};

export default App;
