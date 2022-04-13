import Lottie, { Options as LottieAnimationOptions } from "react-lottie";

import MegaHero from "../../components/MegaHero";
import { SectionHeader } from "../../components/layout";

import { homeHeroContent } from "./static";
import ProjectCard from "../../components/ProjectCard";

import styles from "../../styles/Home.module.scss";
import rocketLottie from "../../public/lotties/rocket-in-space.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: rocketLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const HomeContent = () => (
  <main style={{ overflow: "hidden" }}>
    <div className={styles.lottieContainer}>
      <Lottie options={lottieOptions} />
    </div>
    <MegaHero
      {...{
        miniTitle: homeHeroContent.greeting,
        megaLine1: homeHeroContent.megaline1,
        megaLine2: homeHeroContent.megaline2,
        description: homeHeroContent.description,
        subtitle: homeHeroContent.location,
        miniBottom: homeHeroContent.bottom,
      }}
    />

    <section>
      <SectionHeader {...{ title: "at work." }} />
      <ProjectCard
        {...{
          title: "Norban.",
          tags: [
            "Fullstack",
            "TypeScript",
            "React",
            "React Native",
            "Express.js",
            "Nest.js",
            "GraphQL",
            "Postgresql",
            "MongoDB",
          ],
          thumbnailSrc: "/images/norban-app/splash-screen.png",
        }}
      />
    </section>

    <section className={styles.subSection}>
      <SectionHeader {...{ title: "side project." }} />
      <ProjectCard
        {...{
          title: "Brewtime.",
          tags: [
            "Fullstack",
            "TypeScript",
            "React",
            "Next.js",
            "React Native",
            "Nest.js",
            "GraphQL",
            "MongoDB",
          ],
          thumbnailSrc: "/images/norban-app/splash-screen.png",
        }}
      />
    </section>
  </main>
);

export default HomeContent;
