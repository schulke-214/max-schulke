import React, { Component } from 'react';
import Link from 'next/link';

// COMPONENT IMPORTS
import Slider from '../frontend/components/pages/home/slider/slider';
import Circle from '../frontend/components/common/circle/circle';
import ProjectData from '../frontend/components/pages/home/projectData/projectData';
import TextTransition from '../frontend/components/common/textTransition/textTransition';

// JSON IMPORT
import projectsJson from '../static/Project.json';

// STYLE IMPRTS
import commonStyles from '../frontend/styles/pages/home-common';
import desktopStyles from '../frontend/styles/pages/home-desktop';
import mobileStyles from '../frontend/styles/pages/home-mobile';

class Home extends Component {
    constructor( props ) {
        super( props );

        // REFS
        this.slider = React.createRef();
        this.textTransitions = {
            projectNumber: React.createRef(),
            projectYear: React.createRef(),
            projectCategory: React.createRef()
        }

        // VARIABLES
        this.threshold = 50;
        // this.animating = false;
        // this.running = false;
        this.wheelData = [];

        // MAP JSON TO ARRAY
        const projects = [];
        Object.keys(projectsJson).map( key => projects.push(projectsJson[key]) )

        this.state = {
            projects,
            slider: {
                current: 1,
                length: projects.length
            }
        };

        // THIS FIXES
        this.handleScroll = this.handleScroll.bind(this);
        this.nextProject = this.nextProject.bind(this);
        this.prevProject = this.prevProject.bind(this);
        this.getProjectData = this.getProjectData.bind(this);
        this.updateCurrent = this.updateCurrent.bind(this);
    }

    componentDidMount() {
        // INIT STUFF
        window.addEventListener('wheel', this.handleScroll );
    } 

    componentWillUnmount() {
        // REMOVE LISTENERS
        window.removeEventListener('wheel', this.handleScroll );
    }

    updateCurrent( dir ) {
        const setTo = newCurrent => this.setState(prevState => ({
            slider: {
                ...prevState.slider,
                current: newCurrent
            }
        }))

        const byPrev = int => this.setState( prevState => ({
            slider: {
                ...prevState.slider,
                current: prevState.slider.current + int
            }
        }))

        switch( dir ) {
            case '+': 
                if( this.state.slider.current < this.state.slider.length )
                    byPrev(1);
                else
                    setTo(1);
                break;

            case '-':
                if( this.state.slider.current > 1 )
                    byPrev(-1);
                else 
                    setTo( this.state.slider.length );
                break;
        }
    }

    nextProject() {
        this.running = true;
        this.animating = true;

        let next = this.state.slider.current <  this.state.slider.length ? this.state.slider.current + 1 : 1;
        let project = this.state.projects[ next - 1 ];

        this.textTransitions.projectNumber.current.next( next );
        this.textTransitions.projectYear.current.next( project.meta.year );
        this.textTransitions.projectCategory.current.next( project.meta.category );


        this.slider.current.next(() => this.animating = false )
    }

    prevProject() {
        this.running = true;
        this.animating = true;

        let prev = this.state.slider.current > 1 ? this.state.slider.current - 1 : this.state.slider.length ;
        let project = this.state.projects[ prev - 1 ];

        this.textTransitions.projectNumber.current.prev( prev );
        this.textTransitions.projectYear.current.prev( project.meta.year );
        this.textTransitions.projectCategory.current.prev( project.meta.category );

        this.slider.current.prev(() => this.animating = false )
    }

    getProjectData = () => this.state.projects[ this.state.slider.current - 1 ];
    
    // SLIDER FUNCTIONALITY

    handleScroll( ev ) {
        // CONFIGURE OUT IF UP OR DOWN
        // let delta = ev.deltaY;

        // if( Math.abs( delta ) < this.threshold ) {
        //     this.running = false;
        // }

        // if( Math.abs( delta ) >= this.threshold && !this.animating && !this.running ) {
        //     if( delta >= 0 )
        //         this.nextProject();
        //     else
        //         this.prevProject();
        // }

        let delta = ev.deltaY;

        // Limit to 100 - better performance
        if (wheelData.length > 99)
          wheelData.shift();
  
        // previous deltaY data
        wheelData.push(Math.abs(scrollSpeed));
    }

    // ADD TOUCHSUPPORT LATER
    // ADD KEY SUPPORT LATER
    // ADD DRAG SUPPORT LATER

    render() {
        let Content;
        
        // DESKTOP LAYOUT
        if( !this.props.device.isSmall && !this.props.device.isMobile ) {
            Content = (
                <React.Fragment>
                    <style jsx>{desktopStyles}</style>
                    <div className="inner">
                        <div className="indication flex column">
                            <Circle />
                            {/* COOL LINK CMP */}
                            <Link href="project/zwanzig-grad">
                                <a id="home-view-project">view project</a>
                            </Link>
                        </div>
                        <Slider 
                            ref={ this.slider } 
                            current={this.state.slider.current} 
                            length={this.state.slider.length} 
                            updateCurrent={this.updateCurrent} />
                        {/* <div id="projectTitle" className="spectral">{this.getProjectData().meta.title}</div> */}
                        <div className="project-info">
                            <span className="flex projectNum">
                                <TextTransition 
                                    defaultValue={this.state.slider.current} 
                                    ref={ this.textTransitions.projectNumber } /> 
                                    <span>/{this.state.slider.length}</span>
                            </span>
                            {/* <ProjectData year={this.getProjectData().meta.year} category={this.getProjectData().meta.category} style={{ height: "50px", marginBottom: "calc( 7.5vh - 50px )" }} /> */}
                        </div> 
                    </div>
                </React.Fragment>
            )
        }

        // MOBILE LAYOUT
        else if ( !this.props.device.hideDesktop ) {
            Content = (
                <React.Fragment>
                    <div className="inner">
                        <style jsx>{mobileStyles}</style>
                        {/* <div id="projectTitle" className="spectral" >{this.getProjectData().meta.title}</div> */}
                        <div className="inner-wrap flex column" >
                            <div className="top flex" >
                                <span className="flex projectNum">
                                    <TextTransition 
                                        defaultValue={this.state.slider.current} 
                                        ref={ this.textTransitions.projectNumber } /> 
                                        <span>/{this.state.slider.length}</span>
                                </span>
                            </div>
                            <Slider
                                ref={ this.slider } 
                                current={this.state.slider.current} 
                                length={this.state.slider.length} 
                                updateCurrent={this.updateCurrent} 
                                isMobile />
                            <div className="lower flex">
                                <Link href="project/zwanzig-grad">
                                    <a id="home-view-project">view project</a>
                                </Link>
                                <div className="flex row projectData">
                                    <span className="projectYear" >
                                        <TextTransition 
                                            defaultValue={this.getProjectData().meta.year} 
                                            ref={ this.textTransitions.projectYear }/>
                                    </span>
                                    {/* <span style={{marginBottom: "15px"}} >{props.year}</span> */}
                                    <span className="projectCategory" >
                                        <TextTransition 
                                            defaultValue={this.getProjectData().meta.category}
                                            ref={ this.textTransitions.projectCategory } />
                                    </span>

                                </div>

                                {/* <ProjectData year={this.getProjectData().meta.year} category={this.getProjectData().meta.category} style={{ marginTop: "50px", textAlign: "right" }} /> */}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        // else if ( this.props.device.isMobile ) {
        //     window.location = window.LIGHTWEIGHT;
        // }
        
        else {
            Content = (
                <React.Fragment>
                    {/* <style jsx>{fallbackStyles}</style> */}
                    <p>Please use a bigger device</p>
                </React.Fragment>
            )  
        }

        return (
            <React.Fragment>
                <style jsx>{commonStyles}</style>
                <div id="home-wrapper">
                    { Content }
                </div>
            </React.Fragment>
        )
    }
}

export default Home;