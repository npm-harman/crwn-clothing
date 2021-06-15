import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth, createUserProfile } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data() // getting data from snapshot
            }
          }, () => console.log(this.state.currentUser))
        })
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
