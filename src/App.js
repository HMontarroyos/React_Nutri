import React, {Component} from 'react';
import Api from './components/Api';

class App extends Component{

    constructor(props){
    super(props);
    this.state = {
    }
    }

  
    render(){
    return(
        <div>
            <Api/>
        </div>
    );
    }
}

export default App;