import Logo from "~/assets/images/svg/logo";
import "./Header.scss";

export default function Header() {
  const linksDOM: Array<JSX.Element> = [];
  const linksEnum = ["Home", "About", "Cases", "Blog", "Contact"];

  const smoothScroll = (e: Event | any, gotoClass: string) => {
    e.preventDefault();
    const gotoBlock = document.querySelector(`.${gotoClass}`);
    if (gotoBlock) {
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
    }
  };

  for (let link of linksEnum)
    linksDOM.push(
      <li key={link} className="nav__li">
        <a
          href="#"
          className="nav__link"
          onClick={(e) => {
            smoothScroll(e, link.toLowerCase());
          }}
        >
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
        <ul className="header__links nav">{linksDOM}</ul>
      </div>
    </header>
  );
}
