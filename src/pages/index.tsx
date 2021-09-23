import styles from "@/styles/pages/Landing.module.css";
import { Email, GitHub, MusicNote, Reddit, Twitter } from "@material-ui/icons";
import Image from "next/image";
import StellaOC from "../../public/images/stella-oc.png";
import React from "react";

// TODO: Art page
const Index = () => (
  <div className={styles.landingPage}>
    <div className={styles.landingHeader}>
      <div className={styles.headerLeft}>
        <span className="headline-3">Koding</span>
        <p className="headline-6">Full stack.</p>
        <div className={styles.iconRow}>
          <a className="icon-button" href="mailto:kodingdev@pm.me">
            <Email />
          </a>
          <a
            className="icon-button"
            href="https://github.com/KodingDev"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            className="icon-button"
            href="https://twitter.com/KodingDev_"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            className="icon-button"
            href="https://reddit.com/u/TotallyNotKoding"
            target="_blank"
            rel="noreferrer"
          >
            <Reddit />
          </a>
          <a
            className="icon-button"
            href="https://open.spotify.com/user/djitechdude"
            target="_blank"
            rel="noreferrer"
          >
            <MusicNote />
          </a>
        </div>
      </div>
      <div>
        <Image
          src={StellaOC}
          width="598px"
          height="810px"
          layout="responsive"
          className={styles.headerImage}
        />
      </div>
    </div>
    <div className={styles.landingBody}>
      <span className="headline-5">About me.</span>
      <p className="body-1">
        <b>Hey! 👋</b> I&apos;m Koding and I can&apos;t wait to work with you.
        I&apos;m experienced with full stack development and also have
        experience writing scalable and performant code in Java and Kotlin.
        I&apos;m also well versed in the internals of Minecraft, developing
        plugins, clients, protocol libraries, and a multitude more. I&apos;ll
        also be happy to answer any questions or inquiries you have. You can
        reach me at koding dev at pm dot me.
      </p>
      <br />
      <span className="headline-5">What I do.</span>
      <p className="body-1">
        I&apos;m currently working with{" "}
        <a href="https://katalyst.media">Katalyst Media</a> on{" "}
        <a href="https://craftadia.com">Craftadia</a>
      </p>
    </div>
  </div>
);

export default Index;
