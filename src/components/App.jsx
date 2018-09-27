/* eslint-env browser */
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import React            from 'react';
import { hot }          from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Login     from './Login';
import Nav       from './Nav';
import Shortcuts from './Shortcuts';
import Solution  from './Solution';
import Search    from './Search';
import TabsBuild from './TabsBuild';
import Elicit    from './Elicit';
import Discover  from './Discover';
import Reuse     from './Reuse';
import Adapt     from './Adapt';
import Deploy     from './Deploy';
import navSwitch from '../homeNav';

import WorkSpace from './WorkSpace';
import DiscoverReview from './DiscoverReview';
import Operate from './Operate';
import OperateRun from './OperateRun';
import Visualize from './Visualize';
import VisReview from './VisReview';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: '',
    };
  }


  render() {
    return (
      <main className="site">
        <GlobalNav />
        <Route
          path="*"
          render={props => (
            <Nav nav={navSwitch(props.location.pathname)} />
          )}
        />
        <section className="container">
          <article className="columns">
            <main className="column">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/solution" component={Solution} />
				<Route exact path="/solution/workspace" component={WorkSpace} />
                <Route
                  path="/solution/build"
                  render={props => (
                    <span>
                      <TabsBuild
                        nav={navSwitch(props.location.pathname)}
                        path={props.location.pathname}
                      />
                      <Route exact path="/solution/build/elicit" component={Elicit} />
                      <Route exact path="/solution/build/search" component={Search} />
                      <Route exact path="/solution/build/discover" component={Discover} />
					   <Route exact path="/solution/build/discoverreview" component={DiscoverReview} />
                      <Route exact path="/solution/build/reuse" component={Reuse} />
                      <Route exact path="/solution/build/adapt" component={Adapt} />
                      <Route exact path="/solution/build/deploy" component={Deploy} />
                    </span>
                  )}
                />
				<Route exact path="/solution/operate" component={Operate} />
				<Route exact path="/solution/operaterun" component={OperateRun} />
				<Route exact path="/solution/visualize" component={Visualize} />
				<Route exact path="/solution/visreview" component={VisReview} />
              </Switch>
            </main>
            <aside className="column is-one-quarter">
              <Shortcuts />
            </aside>
          </article>
        </section>
      </main>
    );
  }
}

export default hot(module)(App);
