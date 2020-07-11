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
        <header>
        <Header />
        </header>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Cabin|Herr+Von+Muellerhoff|Source+Sans+Pro:400,900&display=swap");
        /*Global styles*/
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :root {
          --main-font: "Source Sans Pro", sans-serif;
          --secondary-font: "Herr Von Muellerhoff", cursive;
          --body-font: "Cabin", sans-serif;
          --main-font-color-dark: #252525;
          --secondary-font-color: #c59d5f;
          --body-font-color: #515151;
        }
        
        html {
          font-family: var( --body-font);
          font-size: 10px;
          color: var( --body-font-color);
          scroll-behavior: smooth;
        }
        
        section {
          padding: 3.9rem 0;
        }
        
        img {
          width: 100%;
          max-width: 100%;
        }
        
        a {
          text-decoration: none;
        }
        
        p {
          font-size: 1.6rem;
        }
        
        .container {
          width: 100%;
          max-width: 122.5rem;
          margin: 0 auto;
          padding: 0 2.4rem;
        }
        
        /* header */
        header {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background-image: linear-gradient(to bottom, rgba( 0, 0, 0, 0.5), transparent);
        }
      `}</style>
    </div>
  );
}
