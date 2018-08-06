import React, { Component } from 'react';
import pic from './pic.png';
import './App.css';
import Membre from './Membre';

class App extends Component {
  

  
  render() {
    return (
      <div >
      <h1> Notre Equipe </h1>
        <Membre className="card"   pic={pic} name="Yahya" last="Bouhlel" post="FOUNDER  " cat="CEO" gender="male"/>
        <Membre className="card"  pic={pic} name="Amine" last="Bouhlel" post="FOUNDER "  cat="COO"gender="female" />
        <Membre className="card" pic={pic} name="Arsslen" last="Ldali" post="SOFTWARE ENGINEER PART TIMEPRG. " cat="MANAGER" gender="male" />
        <Membre className="card" pic={pic} name="Sameh" last="Ghanmi" post="FULL TIME PROGRAM  "  cat="MANAGER" gender="male"/>
        
       

      </div>
    );
  }
}

export default App;
