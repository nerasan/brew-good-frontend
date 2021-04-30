// import './components/css/App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import { Box } from '@chakra-ui/react'
// components
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Cafes from './components/Cafes'
import Featured from './components/Featured'

function App() {
  return (
    <Box w="1000px" p={4} borderWidth="1px">
    <Layout>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cafes" component={Cafes} />
        <Route exact path="/featured" component={Featured} />
      </Switch>
    </Layout>
    </Box>
  );
}

export default App;