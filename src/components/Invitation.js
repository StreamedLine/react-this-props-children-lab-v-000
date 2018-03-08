import React from 'react';
import ThemedDecorations from './ThemedDecorations'

class Invitation extends React.Component {
	render() {
		return (
			<div className="invitation">
				<h1>You've been invited!</h1>
				{this.props.children}
			</div>
		)
	}
}

export default Invitation;