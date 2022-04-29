import React from 'react';

import './page-header.scss';

import headerbg from '../../assets/headerbg.jpg';

const PageHeader = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${headerbg})`}}>
        </div>
    );
}


export default PageHeader;
