import CartWidget from "../CartWidget/CartWidget";
import './NavBar.scss';

const NavBar = () => {
  return (
    <header>
        <h1>Adidas</h1>

        <nav>
            <ul>
                <li>Hombres</li>
                <li>Niños</li>
                <li>Mujeres</li>
                <li>Deporte</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar