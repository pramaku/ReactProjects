import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3  className="widget--header__title">Your Options</h3>
            <button className="button button--link" onClick={props.handleRemoveAllOptions}>Remove all</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
        <ul>
            {props.options.map((op, index) => <Option item={op} key={index} count={index + 1} handleRemoveOption={props.handleRemoveOption} />)}
        </ul>
    </div>
);

export default Options;