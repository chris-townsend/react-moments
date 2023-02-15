import styles from "./App.module.css";
import Navbar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={()=> <h1>Home page</h1>} />
          <Route exact path="/signin" render={()=> <h1>Sign-in</h1>} />
          <Route exact path="/signup" render={()=> <SignUpForm />} />
          <Route render={() => <p>Page not found!</p>} />

        </Switch>
    
      </Container>
    </div>
  );
}

export default App;
