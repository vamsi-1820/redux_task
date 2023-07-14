import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store=configureStore({
    reducer:{
        rootReducer,
    },
    });

export default store;








/*import { configureStore } from '@reduxjs/toolkit';
//import{applyMiddleware, createStor} from 'redux';
//import  thunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

//const middleware=thunk;applyMiddleware()
const store=configureStore(
    reducer,
    composeWithDevTools()
);
const store=configureStore({
   reducer:{rootReducer}
    
},
composeWithDevTools()
);

export default store;*/
