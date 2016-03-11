import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'empty title',
            num: 0
        };
        this.updateTxt = this.updateTxt.bind(this);
        this.updateNum = this.updateNum.bind(this);
    }
    updateTxt(event) {
        this.setState({ txt: event.target.value });
    }
    updateNum(event) {
        this.setState({ num: event.target.value });
    }
    render() {
        return (
            <div>
                <Widget
                    txt={this.state.txt}
                    num={this.state.num}
                    updateTxt={this.updateTxt}
                    updateNum={this.updateNum}
                />
            </div>
        )
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