import './index.css'

const PasswordItem = props => {
  const {passworditem, show, ondeleting} = props
  const {Website, Username, Password, id} = passworditem
  const letter = Username[0]
  const star =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

  const deleting = () => {
    ondeleting(id)
  }

  return (
    <li className="list">
      <p className="letter">{letter}</p>
      <div>
        <p>{Website}</p>
        <p>{Username}</p>
        {!show && <img src={star} alt="stars" />}
        {show && <p>{Password}</p>}
      </div>

      <button
        type="button"
        className="delete"
        onClick={deleting}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
