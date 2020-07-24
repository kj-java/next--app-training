import Head from "next/head";
import Header from "components/molecules/Header";
import Hero from "components/templates/Hero";
import { StyleProps, TitleMessage } from "style";
import sr from "react-scrollreveal";
import Discover from "../components/templates/Discover";
import React from "react";

type Props = StyleProps;

// export class Reveal extends React.Component {
//   props: Props;

//   componentDidMount = () => {
//     const config = {
//       origin: "left",
//       durarion: 1000,
//       distance: "25rem",
//       delay: 300,
//     };

//     sr.reveal(this.refs.animate_left, config);
//   };
// }

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
        <Hero />
        <Discover />
      </main>
    </div>
  );
}
