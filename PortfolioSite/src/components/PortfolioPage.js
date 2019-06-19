import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h3>My work</h3>
        <p>Checkout the things I am done</p>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>
    </div>
);

export default PortfolioPage;