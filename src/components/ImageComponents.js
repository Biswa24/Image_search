import React, {Component} from 'react';

class ImageComponent extends Component {
    onClickListener(event) {
        console.log(event.currentTarget.getAttribute('data-id'));
        const pId = document.getElementById(event.currentTarget.getAttribute('data-id'));
        pId.style.display = pId.style.display === 'none' ? '' : 'none';
    }
    render() {
        return (
            <div className="container">
                <br />
                <div className="row">
                    {this.props.imageList.map((single, index) => {
                        return(
                            <div className="col-lg-4" style={{padding: '10px'}} key={index}>
                                <img alt='Img' src={single.urls.regular} width="30%" height="300px"/>
                                <button className="btn btn-sm btn-warning" onClick={this.onClickListener} data-id={index}>Description</button>
                                <p id={index} style={{display:'none'}}>{single.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ImageComponent;