import './App.css';
import Header from './components/Layout/Header/Header';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

function App() {
    return (
        <div className='App'>
            <Header />
            <div>
                <RecipeDetails />
            </div>
        </div>
    );
}

export default App;
