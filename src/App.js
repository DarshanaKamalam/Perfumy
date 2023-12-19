// Import components
import Navbar from './components/Navbar';
import Search from './components/Search';
import Productlist from './components/Productlist';
import About from './components/About';
import Footer from './components/Footer';

function App()
{
    return (<div>
        <Navbar></Navbar>
        <Search></Search>
        <Productlist></Productlist>
        <About></About>
        <Footer></Footer>
    </div>);
}

export default App