import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAdd(e) {
        e.preventDefault();
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAdd}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}