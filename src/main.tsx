import "./index.css";
import App from "./App.tsx";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./store/RootReducer.ts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

const store = configureStore({
	reducer: RootReducer,
});


ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ReactQueryDevtools initialIsOpen={true} />
			<Router>
				<Provider store={store}>
					<App />
				</Provider>
			</Router>
		</QueryClientProvider>
	</React.StrictMode>
);



















// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import { ChakraProvider } from "@chakra-ui/react";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>
// );