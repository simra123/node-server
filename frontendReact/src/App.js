import React, { Suspense } from 'react';
import { BrowserRouter, rRouter, Route, Routes } from "react-router-dom";
import TodoEdit from './TaskManager/TodoEdit'
import Todo from './TaskManager/index'
import './App.css';

 const addMinute = (numOfMinutes, date) => {
	date.setMinutes(date.getMinutes() + numOfMinutes);

	return date;
};
console.log("date" , addMinute(1 ,new Date("2022-07-18T12:09:47.732Z") ))
const App = () => {
  return (
    <Suspense fallback='loading...'>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={ <Todo /> } />

          <Route path="/edit/:id" element={ <TodoEdit /> } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
export default App;

