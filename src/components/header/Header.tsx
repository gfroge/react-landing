import Logo from "~/assets/images/svg/logo";
import "./Header.scss";

export default function Header() {
  const linksDOM: Array<JSX.Element> = [];
  const linksEnum = ["Home", "About", "Cases", "Blog", "Contact"];

  for (let link of linksEnum)
    linksDOM.push(
      <li key={link} className="nav__li">
        <a href="404.html" target="_blank" className="nav__link">
          {link}
        </a>
      </li>
    );

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <Logo />
        </a>
        <ul className="header__links nav">
          {linksDOM}
        </ul>
      </div>
    </header>
  );
}
