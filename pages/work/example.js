import React, { Component } from 'react';

// COMPONENT IMPORTS
import Project from '../../frontend/components/container/project/project';

// JSON IMPORT
import data from '../../static/project.json';

class Example extends Component {
    constructor ( props ) {
        super(props);

        this.project = data["example"];
    }

    componentDidMount ( ) {

    }

    componentWillUnmount ( ) {

    }

    render() {
        return (
            <Project data={ this.project } device={ this.props.device }>
                is a child
            </Project>
        )
    }
}
export default Example;