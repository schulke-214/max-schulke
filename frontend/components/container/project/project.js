import React, { Component } from 'react'

import ScrollContainer from '../scroll-container/scroll-container';
import MetaData from '../../pages/work/metaData/metaData';
import Title from '../../common/title/title';

// STYLE IMPORTS
import commonStyles from '../../../styles/pages/work/work-common';
import desktopStyles from '../../../styles/pages/work/work-desktop';
import tabletStyles from '../../../styles/pages/work/work-tablet';
import mobileStyles from '../../../styles/pages/work/work-mobile';

class Project extends Component {
    constructor( props ) {
        super( props );

        this.child = React.createRef();
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        let content;
        
        // DESKTOP LAYOUT
        if( !this.props.device.isSmall && !this.props.device.isMobile ) {
            content = (
                <React.Fragment>
                    {/* <style jsx>{desktopStyles}</style> */}
                    <MetaData meta={this.props.data.meta} />
                    <Title static title={this.props.data.meta.title} />
                    <div>
                        { this.props.children }
                    </div>
                </React.Fragment>
            )
        }

        // TABLET LAYOUT
        else if ( !this.props.device.isPhone && ( this.props.device.isMobile || this.props.device.isSmall ) ) {
            content = ( 
                <React.Fragment>
                    {/* <style jsx>{tabletStyles}</style> */}
                    <MetaData meta={this.props.data.meta} />
                    <Title static isSmall title={this.props.data.meta.title} />
                    <div>
                        { this.props.children }
                    </div>
                </React.Fragment>
             )
        }

        // MOBILE LAYOUT
        else if ( this.props.device.isPhone ) {
            content = (
                <React.Fragment>
                    {/* <style jsx>{mobileStyles}</style> */}
                    <MetaData meta={this.props.data.meta} />
                    <Title static isPhone title={this.props.data.meta.title} />
                    <div>
                        { this.props.children }
                    </div>
                </React.Fragment>
            )
        }

        else {
            content = (
                <React.Fragment>
                    <p>Please use a bigger device</p>
                </React.Fragment>
            )  
        }

        return (
            <ScrollContainer>
                <style jsx>{commonStyles}</style>
                { content }
            </ScrollContainer>
        )
    }
}
export default Project;