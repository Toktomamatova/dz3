import MainPage from "./pages/mainpage/MainPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import UsersPage from "./pages/userspage/UsersPage";

function App() {
    return (
        <div className="App">
            <MainPage message="Hello world!I'm Amanai." />
            <AboutPage data={{ title: "Frontend", description: "This is called frontend (or frontend), which translated from English means “external interface”. Frontend development is the creation of the front end of websites and applications. For a front-end developer, it is important that users can easily find everything they need on the site." }} />
            <UsersPage users={[
                { name: "Anna", age: 20 },
                { name: "Klara", age: 30 },
                { name: "Sofia", age: 25 }
            ]} />
        </div>
    );
}

export default App;
