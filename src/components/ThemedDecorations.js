import React from 'react';

class ThemedDecorations extends React.Component {
	render() {
		return (
			<div className="themedDecorations">
				{React.Children.map(this.props.children, child => <div className={this.props.theme}>{child}</div>)}
			</div>
		)
	}
}

export default ThemedDecorations