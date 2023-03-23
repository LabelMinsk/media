import './App.css';
import UserList from "./components/Users/UserList";
import Panel from "./components/UI/Panel";

function App() {
    return (
        <div className={'container mx-auto'}>
            <Panel>
                <UserList/>
            </Panel>
        </div>
    );
}

export default App;
