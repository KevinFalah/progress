import './App.css';
import Landing from './Pages/Landing/Landing';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import Home from './Pages/Home/Home';
import DetailProfile from './Pages/Detail/DetailProfile';
import Layout from './Components/Widget/Layout';
import Upload from './Pages/Upload/Upload';
import DetailUser from './Pages/DetailUser/DetailUser';
import Profile from './Pages/Profile/Profile';
import SendProject from './Pages/SendProject/SendProject'
import ViewProject from './Pages/ViewProject/ViewProject'
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
import Hire from './Pages/Hired/Hire';
import Order from './Pages/Order/Order';
import {API} from './config/Api'
import {UserContext} from './context/UserContext'
import { useContext, useEffect } from 'react';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  if(localStorage.token) {
    localStorage.setItem("token", localStorage.token)
  }

  const [state, dispatch] = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect Auth
    if (state.isLogin == false) {
      navigate("/auth");
    } else  {
        navigate("/");
      }
  }, [state]);

  const checkUser = async () => {
    try {

      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      };

      const response = await API.get("/check-auth", config);
      // return console.log("response",response.data.data)
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      console.log("ini payload yaa :",payload)
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "AUTH_SUCCESS",
        payload,
      });
      // navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      checkUser();
  }, []);
  
  return (
    <>
    <Routes>
      <Route path='/auth' element={<Landing />}/>


      <Route element={<PrivateRoute isLogged={state.isLogin} />}>

      <Route path='/' element={
      <Layout>
        <Home /> 
      </Layout>}/>

      <Route path='/detail/:id' element={
      <Layout>
        <DetailProfile />
      </Layout>}/>

      <Route path='/upload' element={
        <Layout>
          <Upload />
        </Layout>} />

      <Route path='/detail-user/:id' element={
        <Layout>
          <DetailUser/>
        </Layout>} />

      <Route path='/profile' element={
        <Layout>
          <Profile />
        </Layout>} />

      <Route path='/hire/:id' element={
        <Layout>
          <Hire />
        </Layout>} />

        <Route path='/order' element={
        <Layout>
          <Order />
        </Layout>} />

      <Route path='/update-profile' element={
        <Layout>
          <UpdateProfile />
        </Layout>} />

        <Route path='/order/send-project' element={
        <Layout>
          <SendProject />
        </Layout>} />

        <Route path='/order/view-project' element={
        <Layout>
          <ViewProject />
        </Layout>} />

        </Route>

    </Routes>
    
      
    </>
  );
}

export default App;
