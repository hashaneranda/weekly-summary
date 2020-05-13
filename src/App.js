import React, { Suspense } from "react";
import { Provider } from "react-redux";

//styles
import "./app.scss";

//context
import { Provider as UserProvider } from "./Context/UserContext";

//redux
import configureStore from "./Store/ConfigureStore";

//components
import { PageLoader } from "./Components/Loader";

//pages
const Summary = React.lazy(() => import("./Pages/Summary"));

//store
const store = configureStore();

function App() {
  return (
    <UserProvider>
      <Provider store={store}>
        <Suspense
          fallback={
            <div className="loaderContainerMain">
              <PageLoader />
            </div>
          }
        >
          <Summary />
        </Suspense>
      </Provider>
    </UserProvider>
  );
}

export default App;
