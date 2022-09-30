import './App.css';
import Landing from './Pages/Landing/Landing';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import DetailProfile from './Pages/Detail/DetailProfile';
import Layout from './Components/Widget/Layout';
import Upload from './Pages/Upload/Upload';
import DetailUser from './Pages/DetailUser/DetailUser';
import Profile from './Pages/Profile/Profile';
import SendProject from './Pages/SendProject/SendProject'
import ViewProject from './Pages/ViewProject/ViewProject'

function App() {

  
  return (
    <>
    <Routes>
      <Route path='/auth' element={<Landing />}/>

      <Route path='/' element={
      <Layout>
        <Home /> 
      </Layout>}/>

      <Route path='/detail' element={
      <Layout>
        <DetailProfile />
      </Layout>}/>

      <Route path='/upload' element={
        <Layout>
          <Upload />
        </Layout>} />

      <Route path='/detail-user' element={
        <Layout>
          <DetailUser/>
        </Layout>} />

      <Route path='/profile' element={
        <Layout>
          <Profile />
        </Layout>} />

        <Route path='/order/send-project' element={
        <Layout>
          <SendProject />
        </Layout>} />

        <Route path='/order/view-project' element={
        <Layout>
          <ViewProject />
        </Layout>} />

    </Routes>
    
      
    </>
  );
}

export default App;
