import * as React from 'react'
import { Link } from 'gatsby'
// import { container } from './layout.module.css'
// import { heading } from "./layout.module.css";
// import { nav-links } from "./layout.module.css";
// import { nav-link-item } from "./layout.module.css";
// import { nav-link-text } from "./layout.module.css";
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
      <main className={container}>
        <title>{pageTitle}</title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">Home</Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    );
}

export default Layout