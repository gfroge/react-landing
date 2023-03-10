import Header from "~/components/header/Header";
import { Bank, Book, Pencil } from "~/assets/images/svg/index";
import { GreenButton } from "~/components/common/buttons/GreenButton";
import { GreenRoundedIcon } from "~/components/common/icons/GreenRoundedIcon";
import "~/App.scss";

export default function App() {
  return (
    <div className="App">
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

        <section className="about">
          <div className="about__services">
            <div className="service">
              <div className="service__icon">
                <GreenRoundedIcon><Bank/></GreenRoundedIcon>
              </div>
              <h3 className="service__title">Investmant Banking</h3>
              <div className="service__subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, necessitatibus!
              </div>
            </div>
            <div className="service">
              <div className="service__icon">
                <GreenRoundedIcon><Book/></GreenRoundedIcon>
              </div>
              <h3 className="service__title">Portfolio Manager</h3>
              <div className="service__subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, necessitatibus!
              </div>
            </div>
            <div className="service">
              <div className="service__icon">
                <GreenRoundedIcon><Pencil/></GreenRoundedIcon>
              </div>
              <h3 className="service__title">Tax & Custudio</h3>
              <div className="service__subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, necessitatibus!
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
