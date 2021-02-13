// import './components/css/App.css';
import { Switch, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
// components
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Layout>
  );
}

export default App;