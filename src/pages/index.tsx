import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>The Rosa</title>
        {/* Font awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        {/* Scroll reveal CDN */}
        <script src="https://unpkg.com/scrollreveal"></script>
      </Head>
      <main>
        <Header />
        <section className="hero" id="hero">
          <div className="app_container">
            <h2 className="sub-headline">
              <span className="first-letter">W</span>elcome
            </h2>
            <h1 className="headline">The Rosa</h1>
            <div className="headline-description">
              <div className="separator">
                <div className="line line-left"></div>
                <div className="asterisk">
                  <i className="fas fa-asterisk"> </i>
                </div>
                <div className="line line-right"></div>
              </div>
              <div className="single-animation">
                <h5>Ready to be opend</h5>
                <a href="#" className="btn cta-btn">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>
        {`
          /* Hero */

          .hero {
            width: 100%;
            height: 100vh;
            background: url("./hero.jpg ") center no-repeat;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .sub-headline {
            font-size: 8.5rem;
            font-family: var(--secondary-font);
            color: var(--secondary-font-color);
            font-weight: 100;
            line-height: 0.4;
            letter-spacing: 2px;
          }

          .first-letter {
            text-transform: uppercase;
            font-size: 10.3rem;
          }

          .headline {
            color: #fff;
            font-size: 3.7rem;
            font-family: var(--main-font);
            text-transform: uppercase;
            font-weight: 900;
            letter-spacing: 0.5rem;
            margin-right: -0.5rem;
          }

          .separator {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .line {
            width: 100%;
            max-width: 8.4rem;
            height: 0.25rem;
            background-color: #fff;
            position: relative;
          }

          .line-right::before,
          .line-left::before {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border: 0.6rem solid transparent;
          }

          .line-right::before {
            border-right-color: #fff;
            right: 0;
          }

          .line-left::before {
            border-left-color: #fff;
            left: 0;
          }

          .asterisk {
            font-size: 1.2rem;
            color: var(--secondary-font-color);
            margin: 0 1.6rem;
          }

          .headline-description h5 {
            color: #fff;
            font-size: 1.4rem;
            font-weight: 100;
            text-transform: uppercase;
            margin-bottom: 1.2rem;
            letter-spacing: 3px;
            margin-right: -3px;
          }

          .btn {
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-right: -2px;
          }

          .cta-btn {
            font-size: 1.1rem;
            background-color: #fff;
            padding: 0.9rem 1.8rem;
            color: var(--body-font-color);
            border-radius: 0.4rem;
            transition: background-color 0.5s;
          }

          .cta-btn:hover,
          .cta-btn:focus {
            color: #fff;
            background-color: var(--secondary-font-color);
          }
        `}
      </style>
    </div>
  );
}
