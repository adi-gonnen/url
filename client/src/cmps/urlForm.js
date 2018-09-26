import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import urlService from '../services/urlService';
// import './urlForm.css';

class UrlForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            defaultUrl: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        urlService.getUrl()
        .then(url => {
            this.setState({defaultUrl: url})
            })
    }

    handleChange(event) {
        this.setState({ url: event.target.value });
    }

    handleSubmit(event) {
        // event.preventDefault();
        console.log('event:', event);
        console.log('defaultUrl:', this.state.defaultUrl);
        console.log('url:', this.state.url);
        var checkBox = document.getElementById("redirect");
        var url = this.state.url;
        var defaultUrl = this.state.defaultUrl;
        if (checkBox.checked === true && this.state.url !== '') {
            return <Link to={`${url}`} />
        } else if (this.state.url === '') {
            return <Link to={`${defaultUrl}`} />
        }
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form">
                    <label className="text-form">
                        <input type="text" value={this.state.value} onChange={this.handleChange} name="url" placeholder="enter url" />
                    </label>
                    <div className="checkbox-container">
                        <p>redirect:</p>
                        <input type="checkbox" id="redirect" className="checkbox"></input>
                    </div>
                    <input type="submit" value="Submit" className="btn-submit" />
                    {/* <Link to={`${this.state.url}`}/> */}
                </form>
            </div>
        )
    }
}
export default UrlForm;
