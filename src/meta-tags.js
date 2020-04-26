import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = props => {
    const meta = props.metaData;

    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta name="robots" content={meta.robots} />
            <link rel="canonical" href={meta.canonicalUrl} />
        </Helmet>
    );
};

export default MetaTags;