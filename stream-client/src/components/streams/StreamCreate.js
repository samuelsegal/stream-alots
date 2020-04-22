import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
	renderError({ error, touched }) {
		if (error && touched) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}
	renderInput = ({ input, label, meta }) => {
		//the input argument is destrured from the formProps that gets passed
		//from Field component
		console.log(meta);
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit(formValues) {
		console.log(formValues);
		//redux forms handleSubmit takes care of eve.preventDefault and passes
		//form values
	}
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" component={this.renderInput} label="Enter Title" autoComplete="off" />
				<Field name="description" component={this.renderInput} label="Enter Description" autoComplete="off" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

/**
 * Required function that redux-form calls interanally for field validation
 * @param {formValues} formValues
 */
const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'Please enter a title';
	}
	if (!formValues.description) {
		errors.description = 'Please enter a description';
	}
	return errors;
};

export default reduxForm({
	form: 'createStream',
	validate,
})(StreamCreate);
