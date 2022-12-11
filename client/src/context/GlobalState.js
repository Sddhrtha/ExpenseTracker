import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    expenses: [],
    income:[],
    savings:[],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        async function getExpenses() {
            try {
                const res = await axios.get('http://localhost:3000/expenses');

                dispatch({
                    type: 'GET_EXPENSES',
                    payload: res.data.data
                });
            }catch (err) {
                dispatch({
                    type: 'ERROR',
                    payload: err
                });
            }
        }

        async function addExpense(expense) {

            await axios.post('http://localhost:3000/expenses/add', expense).then((res) => {
                    dispatch({
                        type: 'ADD_TRANSACTION',
                        payload: res.data.data
                    });
                }, (err) => {
                    dispatch({
                        type: 'ERROR',
                        payload: err.response.data.error
                    });
                });
        }

        async function deleteExpense(id) {

            await axios.delete(`http://localhost:3000/expenses/${id}`).then((res) => {
                    dispatch({
                        type: 'DELETE_TRANSACTION',
                        payload: id
                    })
                }, (err) => {
                    dispatch({
                        type: 'ERROR',
                        payload: err.response.data.error
                    })
                })

        }

        async function getIncomeList () {
            try {
                const res = await axios.get('http://localhost:3000/income');

                dispatch({
                    type: 'GET_INCOME_LIST',
                    payload: res.data.data
                });
            }catch(err) {
                
                dispatch({
                    type: 'ERROR',
                    payload: err
                })
            }
        }
        
        async function addIncome(income) {

            await axios.post('http://localhost:3000/income/add', income).then((res) => {
                dispatch({
                    type: 'ADD_INCOME',
                    payload: res.data.data
                })
            }, (err) => {
                dispatch({
                    type: 'ERROR',
                    payload: err
                });
            })
        }

        async function deleteIncome(id) {
            try {
                await axios.delete(`http://localhost:3000/income/${id}`);

                dispatch({
                    type: 'DELETE_INCOME',
                    payload: id
                })
            } catch(err) {

                dispatch({
                    type: 'ERROR',
                    payload: err
                })
            }
        }

        async function getSavings () {

            try {
                const res = await axios.get('http://localhost:3000/savings');

                dispatch({
                    type: 'GET_SAVINGS',
                    payload: res.data.data
                });
            }catch(err){
                dispatch({
                    type: 'ERROR',
                    payload: err
                });
            }
        }

        async function addSaving(saving) {
            
            await axios.post('http://localhost:3000/savings/add', saving).then((res) => {

                dispatch({
                    type: 'ADD_SAVING',
                    payload: res.data.data
                });
            }, (err) => {
                dispatch({
                    type: 'ERROR',
                    payload: err
                })
            })
        }

        async function deleteSaving(id) {
            try{

                await axios.delete(`http://localhost:3000/savings/${id}`);

                dispatch({
                    type: 'DELETE_SAVING',
                    payload: id
                })
            }catch (err) {

                dispatch({
                    type: 'ERROR',
                    payload: err
                })
            }
        }

        return (<GlobalContext.Provider value = {{
            transactions: state.transactions,
            expenses: state.expenses,
            income: state.income,
            savings: state.savings,
            getExpenses,
            addExpense,
            deleteExpense,
            getIncomeList,
            deleteIncome,
            addIncome,
            getSavings,
            addSaving,
            deleteSaving,
            numberWithCommas
        }}>
            {children}
        </GlobalContext.Provider>   )
}