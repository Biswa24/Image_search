import React, {Component} from 'react';

class NextComponent extends Component {
	onClickListener() {
        console.log(this.state.page_no)
    }
    render() {
    	return (
            <div className="container">
                <br />                
                <div className="row">
                	console.log("gi")
                	<button className="btn btn-lg btn-warning" onClick={this.onClickListener}> Next </button>
               </div>
            </div>
        );
    }
}

export default NextComponent;