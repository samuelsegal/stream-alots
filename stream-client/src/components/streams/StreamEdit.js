import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStreams, editStream } from '../../actions';
import StreamForm from './StreamForm';
class StreamEdit extends Component {
	componentDidMount() {
		this.props.fetchStreams(this.props.match.params.id);
	}
	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.editStream(this.props.match.params.id, formValues);
	};
	render() {
		if (!this.props.stream) {
			return <div></div>;
		}
		return (
			<div>
				<h3>Edit Stream</h3>
				<StreamForm
					initialValues={_.pick(this.props.stream, 'title', 'description')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStreams, editStream })(StreamEdit);
