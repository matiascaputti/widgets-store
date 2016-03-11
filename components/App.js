import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <h1>
            {this.props.txt}!
            {this.props.num}!
            </h1>
        // return React.createElement('h1', null, 'Hello!')
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    num: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'no text was passed'
}

ReactDOM.render(
    <App txt="props text" num={5} />,
    document.getElementById('app')
);

export default App