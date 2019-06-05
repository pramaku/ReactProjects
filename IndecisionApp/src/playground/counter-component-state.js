class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }

        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.hanhandleMinusOne = this.hanhandleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        let count = localStorage.getItem('count');
        count = parseInt(count, 10);
        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    handlePlusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    hanhandleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.hanhandleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('app')
);