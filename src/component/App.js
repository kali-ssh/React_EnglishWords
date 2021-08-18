import Day from './Day';
import DayList from './DayList';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from './EmptyPage';
import CreateWord from './CreateWord';
import CreateDay from './CreateDay';

function App() {
  return (
    // return内部全体をBrowserRouterで囲む
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* Header内部全体をSwitchで囲む：Switch外部内容は全ページに共通で表示される */}
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
        {/* footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;
