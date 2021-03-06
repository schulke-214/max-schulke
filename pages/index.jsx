import Link from 'next/link';

import ScrollController from 'components/controller/scroll-controller/ScrollController';
import AbstractImage from 'components/abstract-image/AbstractImage';

import 'styles/pages/index.scss';

class Home extends React.Component {
	render() {
		return (
			<ScrollController>
				<div className='home page-content'>
					<div className='home__title'>
						<h1 className='home__head ev__none' scroll-paralax='6'>
							<span>frontend</span>
							<span>— engineer</span>
						</h1>
					</div>
					<div className='home__content'>
						<div className='home__abstract'>
							<div>
								<AbstractImage factor={1.5} width={1280} height={1920} src='/static/abstract.jpg' />
							</div>
						</div>
						<section className='home__text'>
							<h2>Profile</h2>
							<p>
								Hi, I am Max, a german developer specialized in motion and interaction based
								in Berlin, Germany. Since my early days, my ambition towards computer science and 
								computer graphics was clear. Initially focused on graphic design, I started striving
								for a career more focused on programming, by watching, listening and reading about other
								people's experiences and work. Im currently working at <a style={{ textDecoration: 'underline', font: 'inherit' }} href="https://www.moccu.com" target='_blank'>moccu</a> and
								studying media informatics at <a style={{ textDecoration: 'underline', font: 'inherit' }} href="https://www.th-brandenburg.de" target='_blank'>th brandenburg</a> in the spare time.
							</p>
						</section>
						<section className='home__link-block'>
							<h2>Contact</h2>
							<a className='link' href='mailto:hello@maximilianschulke.com' target='_blank'>
								hello@maximilianschulke.com
							</a>
							<br />
							<a className='link' href='tel:+4915144573027'>
								+49 151 44 57 30 27
							</a>
						</section>
						<section className='home__link-block'>
							<h2>Social</h2>
							<a className='link' href='https://www.github.com/schulke-214' target='_blank'>
								github
							</a>
							<br />
							<a className='link' href='https://medium.com/@schulkemaximilian' target='_blank'>
								medium
							</a>
						</section>

						<section className='home__link-block'>
							<h2>Legal</h2>
							<Link href='/legal-notice'>
								<a className='link'>legal notice</a>
							</Link>
							<br />
							<Link href='/data-privacy'>
								<a className='link'>data privacy</a>
							</Link>
						</section>
					</div>
				</div>
			</ScrollController>
		);
	}
}

export default Home;

/*  already converted code

	slider = React.createRef();
	circle = React.createRef();
	title = React.createRef();
	counter = React.createRef();

	threshold = 50;
	animating = false;

	touchStart = {
		x: null,
		y: null
	};

	state = {
		cases,
		slider: {
			current: 0,
			length: cases.length
		}
	};

	componentDidMount() {
		addEventListener('wheel', this.handleScroll, { passive: true });
		addEventListener('touchstart', this.handleTouch, { passive: true });
		addEventListener('keydown', this.handleKeyDown, { passive: true });
		addEventListener('touchstart', this.handleTouchStart, { passive: true });
		addEventListener('touchend', this.handleTouchEnd, { passive: true });
	}

	componentWillUnmount() {
		removeEventListener('wheel', this.handleScroll, { passive: true });
		removeEventListener('touchstart', this.handleTouch, { passive: true });
		removeEventListener('keydown', this.handleKeyDown, { passive: true });
		removeEventListener('touchstart', this.handleTouchStart, { passive: true });
		removeEventListener('touchend', this.handleTouchEnd, { passive: true });

		removeEventListener('wheel', this.resetRunningState);
		removeEventListener('mousemove', this.resetRunningState);
	}

	get case() {
		return this.state.cases[this.state.slider.current];
	}

	animate = () => {};

	next = () => {};

	prev = () => {};

	handleScroll = ev => {
		let delta = ev.deltaY;

	if (!this.animating && this.props.scroll.status !== false) {
		if (delta < 0) {
			this.prevProject('WHEEL');
		} else if (delta > 0) {
			this.nextProject('WHEEL');
		}
	}
	};

		handleClick = dir => {
			if (!this.running) {
				if (dir === 'prev') this.prevProject('CLICK');
				else if (dir === 'next') this.nextProject('CLICK');
			}
		};

		handleTouchStart = ev => {
			this.touchStartX = ev.touches[0].clientX;
			this.touchStartY = ev.touches[0].clientY;
		};

		handleTouchEnd = ev => {
			let deltaX, deltaY;

			deltaX = ev.changedTouches[0].clientX - this.touchStartX;
			deltaY = ev.changedTouches[0].clientY - this.touchStartY;

			// VERTICAL
			if (Math.abs(deltaY) > Math.abs(deltaX)) {
				if (Math.abs(deltaY) > this.threshold && !this.running) {
					if (deltaY > 0) this.prevProject('TOUCH');

					if (deltaY < 0) this.nextProject('TOUCH');
				}
			}

			// HORIZONTAL
			else {
				if (Math.abs(deltaX) > this.threshold && !this.running) {
					if (deltaX > 0) this.prevProject('TOUCH');

					if (deltaX < 0) this.nextProject('TOUCH');
				}
			}
		};

		handleKeyDown = ev => {
			if (!this.running) {
				if (ev.keyCode === 37 || ev.keyCode === 38)
					// PREV
					this.prevProject('KEY');
				else if (ev.keyCode === 39 || ev.keyCode === 40)
					// NEXT
					this.nextProject('KEY');
			}
		};

		handleDrag = () => {};

		// ADD KEY SUPPORT LATER
		// ADD DRAG SUPPORT LATER

		resetRunningState = () => {
			this.running = false;
			window.removeEventListener('wheel', this.resetRunningState);
			window.removeEventListener('mousemove', this.resetRunningState);
		};

*/

// class Home extends Component {

// 	updateCurrent = (dir, callback) => {
// 		const setTo = newCurrent =>
// 			this.setState(
// 				prevState => ({
// 					slider: {
// 						...prevState.slider,
// 						current: newCurrent
// 					}
// 				}),
// 				callback
// 			);

// 		const byPrev = int =>
// 			this.setState(
// 				prevState => ({
// 					slider: {
// 						...prevState.slider,
// 						current: prevState.slider.current + int
// 					}
// 				}),
// 				callback
// 			);

// 		switch (dir) {
// 			case '+':
// 				if (this.state.slider.current < this.state.slider.length) byPrev(1);
// 				else setTo(1);
// 				break;

// 			case '-':
// 				if (this.state.slider.current > 1) byPrev(-1);
// 				else setTo(this.state.slider.length);
// 				break;
// 		}
// 	};

// 	nextProject = event => {
// 		this.running = true;

// 		let next =
// 			this.state.slider.current < this.state.slider.length
// 				? this.state.slider.current + 1
// 				: 1;
// 		let project = this.state.projects[next - 1];

// 		if (!this.props.device.isSmall && !this.props.device.isMobile)
// 			this.circle.current.next(next);

// 		// ONLY A TEMPORARY SOLUTION
// 		try {
// 			this.projectTitle.current.next(next);
// 			this.textTransitions.projectData.current.next(
// 				project.meta.year + ' ~ ' + project.meta.category
// 			);
// 			this.textTransitions.projectNumber.current.next(next + ' ');
// 		} catch (e) {}

// 		switch (event) {
// 			case 'WHEEL':
// 				this.slider.current.next(() => (this.running = false));
// 				break;

// 			case 'CLICK':
// 				this.slider.current.next(() => (this.running = false));
// 				break;

// 			case 'TOUCH':
// 				this.slider.current.next(() => (this.running = false));
// 				break;

// 			case 'KEY':
// 				this.slider.current.next(() => (this.running = false));
// 				break;
// 		}
// 	};

// 	prevProject = event => {
// 		this.running = true;

// 		let prev =
// 			this.state.slider.current > 1
// 				? this.state.slider.current - 1
// 				: this.state.slider.length;
// 		let project = this.state.projects[prev - 1];

// 		if (!this.props.device.isSmall && !this.props.device.isMobile)
// 			this.circle.current.prev(prev);

// 		// ONLY A TEMPORARY SOLUTION
// 		try {
// 			this.projectTitle.current.prev(prev);
// 			this.textTransitions.projectData.current.prev(
// 				project.meta.year + ' ~ ' + project.meta.category
// 			);
// 			this.textTransitions.projectNumber.current.prev(prev + ' ');
// 		} catch (e) {}

// 		switch (event) {
// 			case 'WHEEL':
// 				this.slider.current.prev(() => (this.running = false));
// 				break;

// 			case 'CLICK':
// 				this.slider.current.prev(() => (this.running = false));
// 				break;

// 			case 'TOUCH':
// 				this.slider.current.prev(() => (this.running = false));
// 				break;

// 			case 'KEY':
// 				this.slider.current.prev(() => (this.running = false));
// 				break;
// 		}
// 	};

// 	openProject = () => {
// 		let page = this.getProjectData().meta.link;
// 		Router.push(`/work/${page}`);
// 	};

// 	render() {
// 		let content;

// 		// DESKTOP LAYOUT
// 		if (!this.props.device.isSmall && !this.props.device.isMobile) {
// 			content = (
// 				<React.Fragment>
// 					<style jsx>{desktopStyles}</style>
// 					<div className='inner'>
// 						<div className='indication flex column'>
// 							<Circle
// 								ref={this.circle}
// 								current={this.state.slider.current}
// 								length={this.state.slider.length}
// 							/>
// 							<Hover
// 								text='view project'
// 								isMobile={this.props.device.isMobile}
// 								handleClick={this.openProject}
// 								cursor={this.props.cursor}
// 								style={{ marginBottom: 'calc( 7.5vh - 15px )', height: '15px' }}
// 							/>
// 						</div>
// 						<Slider
// 							ref={this.slider}
// 							current={this.state.slider.current}
// 							length={this.state.slider.length}
// 							updateCurrent={this.updateCurrent}
// 							handleClick={this.openProject}
// 						/>
// 						<Title ref={this.projectTitle} titles={this.state.projectTitles} />
// 						<div className='project-info'>
// 							<span className='flex projectNum'>
// 								<TextTransition
// 									text={this.state.slider.current + ' '}
// 									ref={this.textTransitions.projectNumber}
// 								/>
// 								<span>{'/ ' + this.state.slider.length}</span>
// 							</span>
// 							<TextTransition
// 								text={
// 									this.getProjectData().meta.year +
// 									' ~ ' +
// 									this.getProjectData().meta.category
// 								}
// 								style={{ marginBottom: 'calc( 7.5vh - 15px )', height: '15px' }}
// 								ref={this.textTransitions.projectData}
// 							/>
// 						</div>
// 					</div>
// 				</React.Fragment>
// 			);
// 		}

// 		// TABLET LAYOUT
// 		else if (
// 			!this.props.device.isPhone &&
// 			(this.props.device.isMobile || this.props.device.isSmall)
// 		) {
// 			content = (
// 				<React.Fragment>
// 					<div className='inner'>
// 						<style jsx>{tabletStyles}</style>
// 						<Title ref={this.projectTitle} titles={this.state.projectTitles} isTablet />
// 						<div className='inner-wrap flex column'>
// 							<div className='top flex'>
// 								<span className='flex projectNum'>
// 									<TextTransition
// 										text={this.state.slider.current + ' '}
// 										ref={this.textTransitions.projectNumber}
// 									/>
// 									<span>{'/ ' + this.state.slider.length}</span>
// 								</span>
// 							</div>
// 							<Slider
// 								ref={this.slider}
// 								current={this.state.slider.current}
// 								length={this.state.slider.length}
// 								updateCurrent={this.updateCurrent}
// 								handleClick={this.openProject}
// 								isSmall
// 							/>
// 							<div className='lower flex'>
// 								<Hover
// 									handleClick={this.openProject}
// 									cursor={this.props.cursor}
// 									text='view project'
// 									style={{ marginTop: '5vh' }}
// 								/>
// 								<TextTransition
// 									style={{ marginTop: '5vh' }}
// 									text={
// 										this.getProjectData().meta.year +
// 										' ~ ' +
// 										this.getProjectData().meta.category
// 									}
// 									ref={this.textTransitions.projectData}
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 				</React.Fragment>
// 			);
// 		}

// 		// MOBILE LAYOUT
// 		else if (this.props.device.isPhone) {
// 			content = (
// 				<React.Fragment>
// 					<div className='inner'>
// 						<style jsx>{mobileStyles}</style>
// 						<Title ref={this.projectTitle} titles={this.state.projectTitles} isMobile />
// 						{/* <div id='shadow' className="ev__none" /> */}
// 						<Slider
// 							ref={this.slider}
// 							current={this.state.slider.current}
// 							length={this.state.slider.length}
// 							updateCurrent={this.updateCurrent}
// 							handleClick={this.openProject}
// 							isPhone
// 						/>
// 					</div>
// 				</React.Fragment>
// 			);
// 		} else {
// 			content = (
// 				<React.Fragment>
// 					<p>Please use a bigger device</p>
// 				</React.Fragment>
// 			);
// 		}

// 		return (
// 			<React.Fragment>
// 				<style jsx>{commonStyles}</style>
// 				<div id='home-wrapper'>{content}</div>
// 			</React.Fragment>
// 		);
// 	}
