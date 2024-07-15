
export default function Menu() {
  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <span className="hamb text-white">M</span>
        <span className="close text-white">X</span>
      </label>
      <nav className="nav text-white">
        <ul className="links">
          <li className="link" >INICIO</li>
          <li className="link" >ABOUT</li>
          <li className="link" >CONTACT</li>
        </ul>
      </nav>
    </>
  )
}
