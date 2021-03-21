// import './components/css/App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import { Box } from '@chakra-ui/react'
// components
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Cafes from './components/Cafes'

function App() {
  return (
    <Box>
    <Layout>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cafes" component={Cafes} />
      </Switch>
    </Layout>
    </Box>
  );
}

export default App;