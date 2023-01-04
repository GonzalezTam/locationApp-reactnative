import { Provider } from "react-redux";

import { init } from "./db";
import AppNavigator from "./navigation/index";
import { store } from "./store";

init()
  .then(() => {
    console.log("db initialized");
  })
  .catch((err) => {
    console.log("db failed.");
    console.log(err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
