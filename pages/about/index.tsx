import { NextPage } from "next";
import Head from "next/head";
import Hero from "../../components/heroes/Hero";

import styles from "../../styles/About.module.scss";
import ExperienceCard from "./components/ExperienceCard";

import norbanLogo from "../../public/images/logos/norban.jpg";
import tiketLogo from "../../public/images/logos/tiket.jpg";

const experiences = [
  {
    logo: norbanLogo,
    company: "Norban.",
    from: "2020/09.",
    to: "present.",
    position: "Fullstack Engineer",
  },
  {
    logo: tiketLogo,
    company: "Tiket.com",
    from: "2019/08",
    to: "2020/09",
    position: "Frontend Engineer",
  },
  {
    logo: tiketLogo,
    company: "Mutian Robotics",
    from: "2019/05",
    to: "2019/07",
    position: "Senior Hardware Engineer",
  },
  {
    logo: tiketLogo,
    company: "Axis Communications",
    from: "2015/09",
    to: "2019/01",
    position: "Hardware Engineer",
  },
];

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          {...{
            title: "about.",
          }}
        />

        <div className={styles.summaryContainer}>
          <div>
            <h4>work.</h4>
            <p>Fullstack Engineer @ Norban</p>
          </div>
          <p>WORK: Fullstack Engineer @ Norban</p>
          <p>SIDE PROJECT: Fullstack Engineer @ Norban</p>
        </div>

        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>experience.</h2>
          {experiences.map(({ company, from, to, position, logo }) => (
            <ExperienceCard
              key={company}
              {...{ logo, company, from, to, position }}
            />
          ))}

          <h2>education.</h2>
        </div>
      </main>

      <div className={styles.footerMargin} />
    </div>
  );
};

export default About;
