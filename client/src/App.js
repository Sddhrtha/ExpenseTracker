import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { IncomeList } from './components/IncomeList';
import { SavingsList } from'./components/SavingsList';
import { ExpenseList } from './components/ExpenseList';
import { AddTransaction } from './components/AddTransaction';




function App() {
  return (
    <GlobalProvider>
       <Header />
       <div className="container">
        <Balance />
        <IncomeExpenses />
        <ExpenseList />
        <IncomeList />
        <SavingsList />
        <AddTransaction />
       </div>
    </GlobalProvider>
  );
}

export default App;
