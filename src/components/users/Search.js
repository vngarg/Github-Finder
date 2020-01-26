import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = () => {
    const githubContext=useContext(GithubContext)
    const alertContext=useContext(AlertContext)
     
    const [text, setText]=useState('')

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if(text===''){
            alertContext.setAlert('Please Enter the UserName','light');
        }else{
            githubContext.searchUsers(text);
            setText('');
        }
    }

        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search User...." value={text} onChange={onChange}/>
                <input type="submit" className="btn btn-dark btn-block" value="Search" />
                </form>
                { githubContext.users.length>0 && <button className="btn btn-light btn-block" onClick={ githubContext.clearUsers}>Clear</button>}
            </div>
        )
}

export default Search
