import Home from './components/home';
import QuizSection from './components/quizSection';
import AboutMe from './components/ContactUs';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/:type" component={QuizSection} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
