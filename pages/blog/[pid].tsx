import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import Button from "../../components/Button";
import Hero from "../../components/Hero";
import Tag from "../../components/Tag";

import styles from "./Post.module.scss";

const DEV_TO_URL = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { data, error } = useSWR(`${DEV_TO_URL}/${pid}`, fetcher);

  console.log(data);

  return (
    <div className={styles.container}>
      {error && <Hero {...{ title: error, smallTitle: true }} />}
      {data && (
        <>
          <Hero {...{ title: data.title, smallTitle: true }} />
          <div className={styles.content}>
            <div className={styles.contentContainer}>
              <h3>{data.created_at}</h3>
              <h2>{data.description}</h2>
              <div style={{ display: "flex" }}>
                {data.tags?.map((t: string) => (
                  <Tag key={t} {...{ tag: t }} />
                ))}
              </div>
              <div className={styles.buttonLinkContainer}>
                <a
                  href={`${data.canonical_url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button {...{ title: "See on DEV.to", variant: "black" }} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.footerMargin} />
    </div>
  );
};

export default Post;

/*


body_html: "<p><a href=\"https://res.cloudinary.com/practical
body_markdown: "---\ntitle: Events driven analytics service powered by Mongo Atlas\ncover_image: https://res.cloudinary.com/practicaldev/image/fetch/s--cd682kBw--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1tah8m0zqe11xt7zknl5.png\npublished: true\ndescription: My submission to the MongoDB Atlas Hackathon on DEV!\ntags: atlashackathon, mongodb\n---\n\n[Instructions]: # (To submit to the MongoDB Atlas Hackathon on DEV, please fill out all sections.)\n\n![mongo image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3zm9sj3y26giapwm3y2t.png)\n\n\n### Overview of My Submission\n[Note]: # (Please make sure the project links to the appropriate GitHub repository, and includes the [Apache-2 permissive license](https://www.apache.org/licenses/LICENSE-2.0)  and README.)\n\nWhen utilising MongoDB Atlas charting tools one can with little code create an events driven analytics service. It's a magical feature where we can get charts with data straight from the DB.  \n\nBy creating your own service we can keep as much or as little of our users data as we want in-house without worrying about sharing sensitive information with third party products or services. It is also possible to extend the service endlessly to fit all types of applications, or with further request relay mechanisms. For instance relaying events to Facebook conversion API.\n\nAnd since we are just making post requests over http our clients can be very thing, without pulling in any external SDKs or big npm packages.\n\nThere are two parts to my submission:\n1. The backend - which collects all the events and stores them into mongodb atlas\n2. The example app - The app mimics a regular landing page with a couple of CTA buttons and navigation.\n\n### The Backend\n\nThe backend consists of a Nest.js server running graphql where the events get's stored into mongodb. It's nothing fancy it's just a create function for the events. \n\nOne thing of note is that there is no resolver / query where one can get the events out from the server. So it's completely blocked from the outside world. Events goes in but events cannot be queried. \n\nExcept in mongodb charts where we grant a service account read rights to make the charts. So there's no need to do any data aggregation on the server, mongodb atlas handles that for you, and with a little bit of getting used to even non-coding people in the organisation can make charts at their will. \n\n### The example app\n\nThis part of the submission is just a simple landing website with two pages written in react. \n\n![example app](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0jicbkz59ehsgja83xd7.png)\n\n**On the first page** (home), there are a few elements which are common to all websites where the user takes some type of action and where we want to track the analytics. \n\nI've added sending tracking events on the CTA buttons, and the navigation. \n\nAnd the events are called:\n- CTA1 clicked!\n- CTA2 clicked!\n- CTA3 clicked!\n- Navigation: home\n- Navigation: analytics\n- Navigation: logo\n\nThese are the events that then makes up the charts on the analytics page.\n\n![analytics page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3mobvdt1dj1003p5ym57.png)\n\n**On the second page** (analytics), there is an `Analytics` page where I display the use of the events by using MongoDB Atlas charting functionality. The charts are created in the mongodb atlas cloud website and then embedded into the page using iframes provided by the charting tools.\n\nThis is really cool because to make new charts does not require any coding, and can me made on the fly, or in personal dashboards, or as in this case embedded into any website. One can aggregate the data right on the dataset, while none of the events are query-able from the server.   \n\n\n### Submission Category: \n\n[Note]: # (E-Commerce Creation, Prime Time, Action Star, Automation Innovation, or Choose Your Own Adventure)\n\nOwn Adventure (I think 🤔)\n\n\n### Link to Code\n\n[Note]: # (Our markdown editor supports pretty embeds. Try this syntax: `{% github link_to_your_repo %}` to share a GitHub repository)\n\n{% github https://github.com/ugglr/dev-mongodb-hackathon %}\n\n\n### Additional Resources / Info\n\n[Note:] # (Be sure to link to any open source projects that are using your workflow!)\n\nI wrote the service using Nest.js for the backend, and react for the frontend. \n{% github https://github.com/nestjs/nest %}\n{% github https://github.com/facebook/react %}\n\nSome other open source packages that I used:\n- mongoose\n- Graphql\n- apollo server & client \n\nThe deployment is powered by heroku and netlify. \n\nHope you like what I've built!"
canonical_url: "https://dev.to/ugglr/events-driven-analytics-service-powered-by-mongo-atlas-5ck4"
collection_id: null
comments_count: 0
cover_image: "https://res.cloudinary.com/practicaldev/image/fetch/s--AwxhWmGv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--cd682kBw--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_900%2Cq_auto%2Cw_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1tah8m0zqe11xt7zknl5.png"
created_at: "2022-01-06T08:38:03Z"
crossposted_at: null
description: "My submission to the MongoDB Atlas Hackathon on DEV!"
edited_at: "2022-01-11T02:50:40Z"
id: 946609
last_comment_at: "2022-01-09T09:24:41Z"
path: "/ugglr/events-driven-analytics-service-powered-by-mongo-atlas-5ck4"
positive_reactions_count: 6
public_reactions_count: 6
published_at: "2022-01-09T09:24:41Z"
published_timestamp: "2022-01-09T09:24:41Z"
readable_publish_date: "Jan 9"
reading_time_minutes: 3
slug: "events-driven-analytics-service-powered-by-mongo-atlas-5ck4"
social_image: "https://res.cloudinary.com/practicaldev/image/fetch/s--XuExmxuF--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--cd682kBw--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_900%2Cq_auto%2Cw_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1tah8m0zqe11xt7zknl5.png"
tag_list: "atlashackathon, mongodb"
tags: (2) ['atlashackathon', 'mongodb']
title: "Events driven analytics service powered by Mongo Atlas"
type_of: "article"
url: "https://dev.to/ugglr/events-driven-analytics-service-powered-by-mongo-atlas-5ck4"
user: {name: 'Carl-W', username: 'ugglr', twitter_username: 'ugglr_dev', github_username: 'ugglr', website_url: 'https://www.carlw.se', …}
[[Prototype]]: Object

*/
