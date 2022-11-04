import AuthReducer from "./AuthReducer";
import { createContext, useReducer, useEffect } from "react";

// const [user, setUser] = useState();
// useEffect(() => {
//   const data = localStorage.getItem("user");
//   console.log(data);
//   // setUser(data);
// }, []);

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  console.log(state.user);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
