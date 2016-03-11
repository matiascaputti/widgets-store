import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <h1>
            {this.props.txt}!</h1>
        // return React.createElement('h1', null, 'Hello!')
    }
}

ReactDOM.render(
    <App txt="props text" />,
    document.getElementById('app')
);

export default App