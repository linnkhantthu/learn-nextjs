import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

export const Nav = () => {
  return (
    <div className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'><a>Home</a></Link>
            </li>
            <li>
                <Link href='/about'><a>About</a></Link>
            </li>
        </ul>
    </div>
  )
}
