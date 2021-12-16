import { combineReducers } from "redux";
import DetailsModalReducer from "./Reducer/DetailsModalReducer";

const RootReducer = combineReducers({
  
  DetailsModal: DetailsModalReducer,
//   TaskInfoModal: TaskinfoModalReducer,
});

export default RootReducer;