import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Bisetion_Method from './pages/Bisetion_Method'
import  Falseposition  from './pages/False_Position_Method'
import  onepoint  from './pages/onepoint'
import newton  from './pages/newton'
import graphical  from './pages/graphical'
import sum  from './pages/sum'
import num  from './pages/num'
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/Root_of_Equation/Bisection_Method' exact component={Bisetion_Method} />
        <Route path='/Root_of_Equation/False_Position_Method' exact component={Falseposition} /> 
        <Route path='/Root_of_Equation/One_Point_Iteration_Method' exact component={onepoint} /> 
        <Route path='/Root_of_Equation/newton' exact component={newton} /> 
        <Route path='/Root_of_Equation/graphical' exact component={graphical} /> 
        <Route path='/Root_of_Equation/sum' exact component={sum} /> 
        <Route path='/Root_of_Equation/num' exact component={num} />
     
      </Switch>
    </Router>
  );
}

export default App;
