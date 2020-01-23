import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticleName extends Component {
  render(){
    return (
      <div>
        <Particles 
          params={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 800
                }
              }
            }
          }}
        />
      </div>
    );
};

}
export default ParticleName;
