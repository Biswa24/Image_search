import React, {Component} from 'react';

class SearchComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeListener = this.onChangeListener.bind(this);
        this.onSubmitListener = this.onSubmitListener.bind(this);

        this.state = {key: ''};
    }

    onChangeListener(event) {
        this.setState({key: event.target.value});
    }

    onSubmitListener(event) {
        event.preventDefault();
        this.props.sendKey(this.state.key);
    }
    render() {
        return (
            <div className="container">
                <br />
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm" onSubmit={this.onSubmitListener}>
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body" />
                                </div>
                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" onChange={this.onChangeListener}/>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-warning"  type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchComponent;