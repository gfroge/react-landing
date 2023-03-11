import Header from "~/components/header/Header";
import { Bank, Book, Pencil } from "~/assets/images/svg";
import { GreenButton, TransparentButton } from "~/components/common/buttons";
import { GreenRoundedIcon } from "~/components/common/icons";
import { ImageTextSplit } from "./components/common/misc";
import { SocialBadge } from "./components/common/links";
import "~/App.scss";
import { ContactForm } from "./components/forms";

export default function App() {
  const casesCardsDOM: Array<JSX.Element> = [];
  for (let i = 1; i < 9; i++) {
    casesCardsDOM.push(
      <div className="cases__card" key={i}>
        <picture>
          <source srcSet={`/casesCards/${i}.webp`} />
          <img src={`/casesCards/${i}.png`} alt="case" />
        </picture>
      </div>
    );
  }

  const teamCardsDOM: Array<JSX.Element> = [];
  const teamCardsEnum = [
    ["John Doe", "President"],
    ["Jane Doe", "Vice President"],
    ["Steve Smith", "Marketing Head"],
  ];
  for (let i = 1; i < 4; i++) {
    teamCardsDOM.push(
      <div className="team__card employee" key={i}>
        <div className="employee__image" key={i}>
          <div className="employee__overlay">
            <div className="employee__social">
              <SocialBadge />
            </div>
          </div>
          <picture>
            <source srcSet={`/team/${i}.webp`} />
            <img src={`/team/${i}.png`} alt="case" />
          </picture>
        </div>
        <div className="employee__text">
          <h3 className="employee__name">{teamCardsEnum[i - 1][0]}</h3>
          <div className="employee__job">{teamCardsEnum[i - 1][1]}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      {/* todo: make header links active */}
      <Header />

      <main className="main">
        <section className="home">
          <div className="home__bg">
            <div className="home__content">
              <h1 className="home__title">The Sky Is The Limit</h1>
              <div className="home__subtitle">
                We provide world class financial assistance
              </div>
              <a href="404.html" target="_blank">
                <GreenButton>
                  <i className="arrow"></i>Read More
                </GreenButton>
              </a>
            </div>
          </div>
        </section>

        <section className="about container">
          <div className="about__services">
            <div className="service">
              <div className="service__icon">
                <GreenRoundedIcon>
                  <Bank />
                </GreenRoundedIcon>
              </div>
              <h3 className="service__title">Investmant Banking</h3>
              <div className="service__subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, necessitatibus!
              </div>
            </div>
            <div className="service">
              <div className="service__icon">
                <GreenRoundedIcon>
                  <Book />
                </GreenRoundedIcon>
              </div>
              <h3 className="service__title">Portfolio Manager</h3>
              <div className="service__subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, necessitatibus!
              </div>
            </div>
            <div className="service">
              <div className="service__icon">
                <GreenRoundedIcon>
                  <Pencil />
                </GreenRoundedIcon>
              </div>
              <h3 className="service__title">Tax & Custudio</h3>
              <div className="service__subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, necessitatibus!
              </div>
            </div>
          </div>

          <ImageTextSplit className="about__solutions solutions">
            <div className="solutions__image">
              <picture>
                <source srcSet="/about/about.webp" />
                <img src="/about/about.png" alt="case" />
              </picture>
            </div>

            <div className="solutions__content">
              <div className="solutions__suptitle">
                What you are looking for
              </div>
              <h2 className="solutions__title">We provide bespoke solutions</h2>
              <p className="solutions__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate, ipsum dignissimos quae laudantium asperiores nam
                aliquid impedit harum illum dolore explicabo ab dolores itaque
                rerum temporibus doloribus iste maiores deleniti?
              </p>
              <a href="404.html" target="_blank" className="solutions__button">
                <TransparentButton hoverColor="primary">
                  Read More
                </TransparentButton>
              </a>
            </div>
          </ImageTextSplit>
        </section>

        <section className="cases common-section container">
          <div className="common-section__suptitle">This is what we do</div>
          <h2 className="common-section__title">Business Cases</h2>
          <div className="common-section__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </div>
          <div className="cases__cards">{casesCardsDOM}</div>
        </section>

        <section className="blog container">
          <ImageTextSplit reverse className="blog__solutions solutions">
            <div className="solutions__image solutions__image--blog">
              <picture>
                <source srcSet="/blog/blog.webp" />
                <img src="/blog/blog.png" alt="blog" />
              </picture>
            </div>

            <div className="solutions__content solutions__content--blue">
              <div className="solutions__suptitle">April 16 2020</div>
              <h2 className="solutions__title">Blog Post One</h2>
              <p className="solutions__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate, ipsum dignissimos quae laudantium asperiores nam
                aliquid impedit harum illum dolore explicabo ab dolores itaque
                rerum temporibus doloribus iste maiores deleniti?
              </p>
              <a href="404.html" target="_blank" className="solutions__button">
                <TransparentButton hoverColor="accent">
                  Read Our Blog
                </TransparentButton>
              </a>
            </div>
          </ImageTextSplit>
        </section>

        <section className="team common-section container">
          <div className="common-section__suptitle">Who we are</div>
          <h2 className="common-section__title">Our Professional Team</h2>
          <div className="common-section__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </div>
          <div className="team__cards">{teamCardsDOM}</div>
        </section>

        <section className="contact container">
          <ImageTextSplit className="blog__solutions solutions">
            <div className="solutions__image solutions__image--contact">
              <picture>
                <source srcSet="/callback/callback.webp" />
                <img src="/callback/callback.png" alt="callback" />
              </picture>
            </div>

            <div className="solutions__content solutions__content--grey">
              <h2 className="solutions__title solutions__title">
                Request Callback
              </h2>
              <ContactForm/>
            </div>
          </ImageTextSplit>
        </section>
      </main>
    </div>
  );
}
