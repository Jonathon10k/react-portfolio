import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import page components
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>React page</h1>
    </>
  )
}
