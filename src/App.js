import React from "react";
import { Provider } from "react-redux";

//context
import { Provider as UserProvider } from "./Context/UserContext";

//pages
import TablePage from "./Pages/Summary";

//redux
import configureStore from "./Store/ConfigureStore";

//store
const store = configureStore();

function App() {
  return (
    <UserProvider>
      <Provider store={store}>
        <TablePage />
      </Provider>
    </UserProvider>
  );
}

export default App;
