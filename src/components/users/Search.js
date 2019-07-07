import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: '',
    }

    onChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='form'>
                <input type='text' name='text' placeholder='Search Users' value={this.state.text} onChange={this.onChange} />
                <input type='submit' value='search' className='btn btn-dark btn-block' />
            </form>
        )
    }
}

export default Search
