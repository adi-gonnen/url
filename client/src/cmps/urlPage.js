import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import urlService from '../services/urlService';
// import './urlPage.css';

class UrlPage extends Component {
    state = {
        url: '',
        defaultUrl: null,
        checkbox: false,
        submit: false
    }
    
    componentDidMount() {
        // window.location.assign('http://github.com');
        // if (this.state.checkbox && this.state.url !== '' && this.state.submit) {
        if (this.state.checkbox) {
            window.location.assign('http://github.com');
            var url = this.state.url;
            // window.location.assign(`${url}`)
        } 
        urlService.getDefaultUrl()
        .then(url => {
            this.setState({defaultUrl: url})
            })
    }

    handleChange= (event) => {
        this.setState({ url: event.target.value });
    }

    handleCheck= () => {
        var redirect = document.getElementById('redirect');
        if (redirect.checked){
            this.setState({ checkbox: true})
        }
    }

    handleSubmit=() => {
        console.log('url before submit:');
        // this.setState({ submit: true });
        urlService.getUrl()
        .then(url => {
            console.log('url after submit:', url);
            this.setState({ submit: true });
        })
    }

    render() {
        console.log('url:', this.state.url);
        console.log('defaultUrl:', this.state.defaultUrl);
        console.log('checkbox:', this.state.checkbox);
        console.log('submit:', this.state.submit);
        // window.location.assign('http://github.com');
        // if (this.state.checkbox && this.state.url !== '' && this.state.submit) {
        if (this.state.submit) {
            // return window.location.href =`${url}`
            window.location.assign('http://github.com');
        } 
        // else if (this.state.url === '' && this.state.submit) {
        //     return <a href ={`${defaultUrl}`} />
        // }
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form">
                    <label className="text-form">
                        <input type="text" value={this.state.value} onChange={this.handleChange} name="url" placeholder="enter url" />
                    </label>
                    <div className="checkbox-container">
                        <p>redirect:</p>
                        <input type="checkbox" id="redirect" className="checkbox" onChange={this.handleCheck}></input>
                    </div>
                    <input type="submit" value="Submit" className="btn-submit" />
                </form>
            </div>
        )
    }
}
export default UrlPage;
