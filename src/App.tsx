import Header from "~/components/header/Header";
import { GreenButton } from "~/components/common/buttons/GreenButton";
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
              <a href="404.html">
                <GreenButton>
                  <i className="arrow"></i>Read More
                </GreenButton>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
