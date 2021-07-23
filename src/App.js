import './App.css';
import { Component } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import DeviceManagement from './components/DeviceManagement/DeviceManagement.jsx';
/* import Menu from './components/Menu'; */

class App extends Component {
  data = {
    deviceList: [
      { id: 1, name: "Heo A" },
      { id: 2, name: "Heo B" }
    ],
    temp : 25,
    username : "Pham Dat"
  };

  render() {
    return (
      <div>
        <NavBar 
          temp = {this.data.temp}
          username = {this.data.username}

        ></NavBar>

        <DeviceManagement
          listDevice={this.data.deviceList}
        ></DeviceManagement>

        {/* <Menu></Menu> */}
      </div>
    )
  }
};

export default App;