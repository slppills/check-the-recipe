import React from "react";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

function App() {
	return (
		<BrowserRouter basename="/check-the-recipe">
			<Router />
			<GlobalStyle></GlobalStyle>
		</BrowserRouter>
	);
}

export default App;
