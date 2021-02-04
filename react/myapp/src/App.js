import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer';
import ExpenseList from './components/expense/expense';
import Expense from './components/expense/expense';
// import {BrowserRouter as Router, Route, Switch, Link,Redirect} from "react-router-dom";
import Page from './components/page/page';
import page from './components/page/page';
function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* <Route path="/" component={Page}/> */}
        <Page>      </Page>
      {/* <Header/>
      <Expense></Expense>
      <Footer></Footer> */}
 
      {/* </Router> */}
      </div>
  );
}

export default App;
