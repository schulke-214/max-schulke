import React from 'react';
import { connect } from 'react-redux';
import { setMeta, setScreen, setBrowser, setEngine, setOs } from 'store/device';

import DeviceService from 'services/DeviceDetection';

class DeviceController extends React.PureComponent {
	componentDidMount() {
		this.target();

		addEventListener('resize', this.target);
	}

	componentWillUnmount() {
		removeEventListener('resize', this.target);
	}

	target = () => {
		this.props.setMeta({
			...DeviceService.device,

			supported: this.support(),
			mobile: this.mobile(),
			touch: this.touch(),

			phone: window.innerWidth < 620,
			tablet: window.innerWidth >= 620 && window.innerWidth < 1280,
			desktop: window.innerWidth >= 1280
		});

		this.props.setScreen({
			width: window.innerWidth,
			height: window.innerHeight
		});

		this.props.setBrowser(DeviceService.browser);

		this.props.setEngine(DeviceService.engine);

		this.props.setOs(DeviceService.os);
	};

	support = () => {
		const { browser } = DeviceService;

		if (browser.type.chrome && +browser.major < 15) {
			return false;
		}

		if (browser.type.firefox && +browser.major < 10) {
			return false;
		}

		if (browser.type.safari && +browser.major < 5) {
			return false;
		}

		if (browser.type.ie || browser.type.edge || browser.type.opera) {
			return false;
		}

		return true;
	};

	touch = () => {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			DeviceService.ua
		);
	};

	mobile = () => {
		const { device, meta } = DeviceService;
		const mobileDevices = ['iPhone', 'iPad', 'iPod'];

		if (device.type === 'mobile') {
			return true;
		}

		if (mobileDevices.includes(device.model)) {
			return true;
		}

		if (this.touch()) {
			return true;
		}

		if (window.innerWidth < 768) {
			return true;
		}

		return false;
	};

	render() {
		return <></>;
	}
}

const mapDispatchToProps = dispatch => ({
	setMeta: data => dispatch(setMeta(data)),
	setScreen: data => dispatch(setScreen(data)),
	setBrowser: data => dispatch(setBrowser(data)),
	setEngine: data => dispatch(setEngine(data)),
	setOs: data => dispatch(setOs(data))
});

export default connect(
	null,
	mapDispatchToProps
)(DeviceController);
