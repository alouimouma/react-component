import Fullname from './component/profile/FullName'
import Adresse from './component/profile/Adresse'
import Photo from './component/profile/photo'
import "./style.css";
function App() {
  return (
      <div className="App">
          <Photo />
          <Fullname />
          <Adresse />
          
      </div>
  );
}

export default App;
