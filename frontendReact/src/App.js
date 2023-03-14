import React, { Suspense } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TodoEdit from "./TaskManager/TodoEdit";
import Todo from "./TaskManager/index";
import "./App.css";
import { create } from "zustand";

const queryClient = new QueryClient();
// const addMinute = (numOfMinutes, date) => {
// 	date.setMinutes(date.getMinutes() + numOfMinutes);

// 	return date;
// };
// console.log("date", addMinute(1, new Date("2022-07-18T12:09:47.732Z")));
// const notifyMe = () => {
//   // Let's check if the browser supports notifications
//   if (!("Notification" in window)) {
//     alert("This browser does not support desktop notification");
//     Notification.requestPermission();
//   }

//   // Let's check whether notification permissions have already been granted
//   else if (Notification.permission === "granted") {
//     // If it's okay let's create a notification
//     var options = {
//       body: "This is the body of the Notification",
//       icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?    auto=compress&cs=tinysrgb&dpr=1&w=500",
//       dir: "ltr",
//     };
//     setInterval(() => {
//       new Notification("Hi there!", options);
//     }, 3000);

//     Notification.requestPermission().then(function (result) {
//       console.log(result);
//     });
//     console.log("2");
//   }

//   // Otherwise, we need to ask the user for permission
//   else if (Notification.permission !== "denied") {
//     Notification.requestPermission().then(function (permission) {
//       // If the user accepts, let's create a notification
//       if (permission === "granted") {
//         new Notification("Hi there!");
//         console.log("3");
//       }
//     });
//   }
// };
const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback='loading...'>
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={<Todo />}
						/>

						<Route
							path='/edit/:id'
							element={<TodoEdit />}
						/>
					</Routes>
				</BrowserRouter>
			</Suspense>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};
export default App;
