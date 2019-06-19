import React from 'react';

const PortfolioDetailsPage = (props) => {
    //console.log(props);
    return (
        <div>
            <h2>The thing I am done</h2>
            <p>Showing portfolio for id {props.match.params.id}</p>
        </div>
    );
};

export default PortfolioDetailsPage;