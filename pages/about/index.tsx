import { NextPage } from "next";
import Head from "next/head";

import Hero from "../../components/heroes/Hero";
import ExperienceCard from "./components/ExperienceCard";
import SummaryList from "./components/SummaryList";
import EducationCard, { Education } from "./components/EducationCard";

import norbanLogo from "../../public/images/logos/norban.jpg";
import tiketLogo from "../../public/images/logos/tiket.jpg";
import mutianLogo from "../../public/images/logos/mutian.png";
import axisLogo from "../../public/images/logos/axis.png";
import lthLogo from "../../public/images/logos/lth.png";
import zjuLogo from "../../public/images/logos/zju.png";

import styles from "../../styles/About.module.scss";
import Button from "../../components/Button";
import SocialRow from "../../components/SocialRow";

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
    logo: mutianLogo,
    company: "Mutian Robotics",
    from: "2019/05",
    to: "2019/07",
    position: "Senior Hardware Engineer",
  },
  {
    logo: axisLogo,
    company: "Axis Communications",
    from: "2015/09",
    to: "2019/01",
    position: "Hardware Engineer",
  },
];

const education: Array<Education> = [
  {
    logo: lthLogo,
    title: "Msc.Electrical Engineering.",
    subtitle: "Design of processors & integrated systems.",
    school: "Lund University, Institute of Technology.",
    dateText: "2009/08 - 2015/07",
  },
  {
    logo: zjuLogo,
    title: "Language Exchange.",
    subtitle: "Mandarin Chinese.",
    school: "Zhejiang University.",
    dateText: "2011/07 - 2011/12 & 2012/08 - 2013/07",
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

        <div className={styles.contentContainer}>
          <SummaryList />

          <SocialRow />

          <h2 className={styles.sectionTitle}>experience.</h2>
          {experiences.map(({ company, from, to, position, logo }) => (
            <ExperienceCard
              key={company}
              {...{ logo, company, from, to, position }}
            />
          ))}

          <h2 className={styles.sectionTitle}>education.</h2>

          {education.map(({ logo, title, subtitle, school, dateText }) => (
            <EducationCard
              key={title}
              {...{ logo, title, subtitle, school, dateText }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
