import './App.css';
import Hospitals from './Buttons/Hospitals';
import PharmacyButton from './Buttons/PharmacyButton';
import Schoolandcoll from './Buttons/Schoolandcoll';
import Doctors from './Buttons/Doctors';
const pharmData = require("../src/")

function App() {
  let object = [];
  return (
    <div className="App">
      <h1>City Mini Guide</h1>
      <hr></hr>
      <div className="city-select">
        <label>Select a city</label>
      <select>
        <option>Select a city</option>
        <option>Harrow</option>
        <option>Heathrow</option>
        <option>Stratford</option>
      </select>
      </div><hr></hr>
      <div className='buttons'>
        <PharmacyButton />
      <Schoolandcoll />
      <Hospitals />
      <Doctors />
      </div><hr></hr>
      <div className='result-table'>
        <table rules='rows'>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Phone</td>
              <td>Address</td>
              <td>Website</td>
            </tr>
          </thead>
          {
          
          }

        </table>
      </div>
      

      
    </div>
  );
}

export default App;