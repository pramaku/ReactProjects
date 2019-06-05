import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selectionOption: undefined
        }
    
        this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddption = this.handleAddption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
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
        this.setState(() => ({ selectionOption: this.state.options[randomNumber] }));
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

    handleClearSelectedOption() {
        this.setState(() => ( {selectionOption: undefined} ));
    }

    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in hands of computer';
        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePickOption={this.handlePickOption}/>
                    <div className='widget'>
                        <Options 
                            options={this.state.options} 
                            handleRemoveAllOptions={this.handleRemoveAllOptions}
                            handleRemoveOption={this.handleRemoveOption} />
                        <AddOption handleAddOption={this.handleAddption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectionOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};