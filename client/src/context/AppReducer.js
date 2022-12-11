// eslint-disable-next-line
export default (state, action) =>{
    switch(action.type){

        case 'GET_EXPENSES':
            return {
                ...state,
                loading: false,
                expenses: action.payload
            }

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
            
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }

        case 'GET_INCOME_LIST':
            return {
                ...state,
                loading: false,
                income: action.payload
            }

        case 'DELETE_INCOME':
            return {
                ...state,
                income: state.income.filter(inc => inc._id !== action.payload)
            }

        case 'ADD_INCOME':
            return {
                ...state,
                income: [action.payload, ...state.income]
            }
        
        case 'GET_SAVINGS':
            return {
                ...state,
                loading: false,
                savings: action.payload
            }

        case 'DELETE_SAVING':
            return {
                ...state,
                savings: state.savings.filter(saving => saving._id !== action.payload)
            }

        case 'ADD_SAVING':
            return {
                ...state,
                savings: [action.payload, ...state.savings]
            }

        default: 
            return state;
        
    }
}   