import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feeds from "./Feeds.js";
import Widget from "./Widget.js";
import Login from './Login.js'
import { useStateValue } from "./StateProvider";


function App() {

  const [{user}, dispatch] = useStateValue()

  // const user = null;---------------------local type

  return (
    <div className="app">
      {!user ?(<Login/>):(
        <>
        <Header />

<div className="app__body">
  {/* sidebar feeds and widgets */}
  <Sidebar />
  <Feeds />
  <Widget />
</div>
        </>
      )}
    </div>
  );
}

export default App;
