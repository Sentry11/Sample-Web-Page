import Layout from "./components/Layout";
import { Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageCTA from "./pages/PageCTA";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./helpers/ScrollToTop";
import "./index.css"

function App() {

    return (
        <>
        <ScrollToTop/>
        <Layout>
           
            <Switch >
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route path="/blogs">
                    <Blogs />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/page-cta">
                    <PageCTA />
                </Route>

                <Route path="/privacy-policy">
                    <PrivacyPolicy />
                </Route>

                <Route path="/terms-and-conditions" >
                    <TermsAndConditions />
                </Route>
            </Switch>
        </Layout>
        </>
    );
}

export default App;
