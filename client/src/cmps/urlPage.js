import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import urlService from '../services/urlService';

class UrlPage extends Component {
    state = {
        url: '',
        defaultUrl: null,
        checkbox: false,
        msg: ''
    }
    
    componentDidMount() {
        urlService.getDefaultUrl()
        .then(url => {
            this.setState({defaultUrl: url})
            })
    }

    handleChange= (event) => {
        this.setState({ url: event.target.value });
        this.setState({msg: '' })
    }

    handleCheck= () => {
        var redirect = document.getElementById('redirect');
        if (redirect.checked){
            this.setState({ checkbox: true})
        }
    }

    handleSubmit=(event) => {
        var url = this.state.url
        var defaultUrl = this.state.defaultUrl
        event.preventDefault();
        // console.log('url before submit:');
        urlService.getUrl(url)
        .then(url => {
            console.log('url after submit:', url);
            if (this.state.url !== '') {
                if (this.state.checkbox) {
                    window.location = `${url}`;
                } else this.setState({msg: 'checkbox is unchecked' })
            } else window.location = `${defaultUrl}`;
        })
    }

    render() {
        console.log('url:', this.state.url);
        console.log('defaultUrl:', this.state.defaultUrl);
        // console.log('checkbox:', this.state.checkbox);
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form">
                    <label className="text-form">
                        <input type="text" value={this.state.value} onChange={this.handleChange} name="url" placeholder="enter url: http://..." />
                    </label>
                    <div className="checkbox-container">
                        <p>redirect:</p>
                        <input type="checkbox" id="redirect" className="checkbox" onChange={this.handleCheck}></input>
                    </div>
                    <input type="submit" value="Submit" className="btn-submit" />
                    <div className="msg-container">
                        <h4>message:</h4>
                        <input type="text" value={this.state.msg} readOnly></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default UrlPage;
