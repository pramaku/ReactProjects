class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        }
    
        this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddption = this.handleAddption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
    }

    componentDidMount() {
        try {
            console.log('Mounted... Indecision App');
            const options = JSON.parse(localStorage.getItem('options'));

            if (options) {
                this.setState(() => ({options}));
            }
        } catch (error) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('Unmunted... Indecision App');
    }

    handleRemoveAllOptions() {
        this.setState(() => ({ options: [] }));
    }

    handlePickOption() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        alert('Option  - ' + this.state.options[randomNumber]);
    }

    handleAddption(option) {
        if (!option) {
            return 'Error, please add an option to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return `this option ${option} already exits`; 
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleRemoveOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((cur) => cur !== option)
        }));
    }

    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in hands of computer';
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption}/>
                <Options 
                    options={this.state.options} 
                    handleRemoveAllOptions={this.handleRemoveAllOptions}
                    handleRemoveOption={this.handleRemoveOption} />
                <AddOption handleAddOption={this.handleAddption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePickOption} disabled={!props.hasOptions}>
                What should I do
            </button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <li key={props.index}>{props.item}</li>
            <button onClick={() => { props.handleRemoveOption(props.item);} }>
                remove
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAllOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option</p>}
            <ul>
                {props.options.map((op, index) => <Option item={op} key={index} handleRemoveOption={props.handleRemoveOption} />)}
            </ul>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAdd(e) {
        e.preventDefault()
        const optionItem = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(optionItem);
        this.setState(() => ({ error: error }) );
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAdd}>
                    <input type="text" name="option" />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(
    <IndecisionApp />,
    document.getElementById('app')
);
