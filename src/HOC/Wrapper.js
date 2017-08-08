import React, { Component, Children } from 'react';

//// USE-CASES

// wrap a component and render something else based on a condition i.e. show a loading bar instead of grid when data is still loading
class LoadingBarWrapper extends Component {
    render() {
        return (<div>
            {this.props.dataLoading ? <div class="loading-bar"></div> : Children.only(this.props.children)}
        </div>
        )
    }
}

// TODO wrap a component with another element and propagate the props
//const DivWrapper = (WrappedComponent) => <div id="hoc"><WrappedComponent /></div>

export { LoadingBarWrapper };