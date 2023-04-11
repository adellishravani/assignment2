import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class Password extends Component {
  state = {
    lists: [],
    website: '',
    username: '',
    password: '',
    searchinput: '',
    show: true,
  }

  checkboxclick = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  onchangewebsite = event => {
    this.setState({website: event.target.value})
  }

  onchangeusername = event => {
    this.setState({username: event.target.value})
  }

  onchangepassword = event => {
    this.setState({password: event.target.value})
  }

  onaddpassword = event => {
    event.preventDefault()

    const {website, username, password} = this.state

    const newlist = {
      Website: website,
      Username: username,
      Password: password,
      id: v4(),
    }

    this.setState(prevState => ({
      lists: [...prevState.lists, newlist],
    }))
  }

  ondeleting = id => {
    const {lists} = this.state
    this.setState({
      lists: lists.filter(each => each.id !== id),
    })
  }

  searching = event => {
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {lists, show, searchinput} = this.state

    const searchResults = lists.filter(each =>
      each.Website.toLowerCase().includes(searchinput.toLowerCase()),
    )
    return (
      <div className="mainbg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />

        <div className="managerdiv">
          <form className="bg2" onSubmit={this.onaddpassword}>
            <h1 className="addheading">Add New Password</h1>

            <div className="inputdiv">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="logos"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.onchangewebsite}
              />
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="logos"
              />
              <input
                type="text"
                placeholder="Enter UserName"
                onChange={this.onchangeusername}
              />
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="logos"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.onchangepassword}
              />
            </div>
            <br />
            <button type="submit" className="addbtn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="managerimage"
          />
        </div>

        <div className="bg3">
          <div className="numdiv">
            <h1 className="yourpassword">Your Passwords</h1>
            <p className="number">{lists.length}</p>
          </div>
          <div className="searchdiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search"
            />
            <input type="search" onChange={this.searching} />
          </div>
        </div>

        <hr />

        <div className="btmbg">
          <div className="check">
            <input type="checkbox" id="check" onClick={this.checkboxclick} />
            <label htmlFor="check">Show Passwords</label>
          </div>
          <div>
            {lists.length < 1 ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul>
                {searchResults.map(each => (
                  <PasswordItem
                    passworditem={each}
                    key={each.id}
                    show={show}
                    onClick={this.ondeleting}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Password
