/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  Outlet
} from "react-router-dom";
import { RootState } from "./store/type/RootState";
import { AUTH_CHECK, AUTH_ERROR } from "./store/RootReducer";
import { useDispatch, useSelector } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { API, SetAuthToken } from "./libs/API";
import Main from "./layout/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import Search from "./pages/Search";
import Follow from "./pages/Follow";
import Profile from "./pages/Profile";
import ThreadDetail from "./pages/ThreadDetail";


const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'darkBackground',
      }
    }
  },
  colors: {
    darkBackground: '#222'
  }
})



export default function App() {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // function authCheck
  async function authCheck() {
    try {
      SetAuthToken(localStorage.token);
      const response = await API.get("/check");
      console.log("check auth app", response);

      dispatch(AUTH_CHECK(response.data.user));
      setIsLoading(false);
    } catch (err) {
      dispatch(AUTH_ERROR());
      console.log("auth check error", err);
      setIsLoading(false);
      navigate("/login");
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck();
    } else {
      setIsLoading(false);
    }
  }, []);

  // Private Root
  function IsNotLogin() {
    if (!localStorage.token) {
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  }

  function IsLogin() {
    if (localStorage.token) {
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  }


  return (
    <>
      {isLoading ? null : (

        <ChakraProvider theme={theme}>
          <Routes>

            <Route path="/" element={<IsNotLogin />}>
              <Route path="/" element={<Main> <Timeline /> </Main>} />
              <Route path="/home" element={<Main> <Timeline /> </Main>} />
              <Route path="/search" element={<Main> <Search /> </Main>} />
              <Route path="/follow" element={<Main> <Follow /> </Main>} />
              <Route path="/profile" element={<Main> <Profile /> </Main>} />

              <Route path="/thread/:id" element={<Main> <ThreadDetail /> </Main>} />
            </Route>

            <Route path="/" element={<IsLogin />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>

          </Routes>
        </ChakraProvider>

      )}
    </>
  );
}

// https://github.dev/taufik-hdyt/dwonsitecircle
// https://github.dev/alifdwt/threads-circle
// https://github.com/andigagaga/stage2_offline_fullstack
// https://github.com/Elbtr/CRUD_VOTE_CANDIDATE_AND_USERS/blob/master/src/service/PaslonService.ts
// https://github.com/hasael-web/threads/blob/master/src/entities/Thread.ts
// https://github.dev/andry-pebrianto/circle-api/tree/main/src
// https://github.com/PrinzEugen39/Challange-MicroFeatures/blob/main/src/services/apiServices.ts
// https://github.com/adhxabre/Circle/blob/dev/circle-fe/src/main.tsx
// https://github.dev/Reza337/circle-be/tree/day-5
