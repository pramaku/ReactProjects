class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };

        this.togglevisibility =  this.togglevisibility.bind(this);
    }

    togglevisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibitliy Toggle</h1>
                <button onClick={this.togglevisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {
                    this.state.visibility && <div><p>Hey, these are some details you can see!!</p></div>
                }
            </div>
        );
    }
}

ReactDOM.render(
    <VisibilityToggle />,
    document.getElementById('app')
);
