import { createStore } from 'redux'
import reducer from './reducers'

const storeReduex = createStore(reducer);

export default storeReduex;