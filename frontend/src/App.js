import React, { Suspense } from 'react';
import { BrowserRouter, rRouter, Route, Routes } from "react-router-dom";
import TodoEdit from './TaskManager/TodoEdit'
import Todo from './TaskManager/index'
import './App.css';
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

