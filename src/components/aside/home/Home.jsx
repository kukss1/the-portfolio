import vid from "../../../assets/video/city.mp4";
import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="home_title">Some Thinks</h1>
      <div className="home_video_wrapper">
        <video autoPlay muted loop src={vid} />
        <p>
          The world we live in today is facing many challenges, from climate
          change to poverty and social injustice. It can be easy to feel
          overwhelmed by these issues and to believe that there is little one
          person can do to make a difference. However, the truth is that
          everyone can play a part in making the world a better place, no matter
          how small. One of the simplest ways that we can make a positive impact
          is by being kind to others. A smile, a kind word, or a small act of
          generosity can go a long way in brightening someone's day and
          spreading positivity. We can also support causes that we care about,
          whether it's by volunteering our time, donating money, or raising
          awareness. Another way to make a difference is by living sustainably.
          By reducing our carbon footprint, conserving resources, and making
          environmentally conscious choices, we can help to protect our planet
          and ensure a better future for generations to come. We can also strive
          to be more empathetic and understanding towards others, regardless of
          their backgrounds or beliefs. By listening to different perspectives
          and seeking common ground, we can foster a more inclusive and
          harmonious society. Ultimately, the key to making the world a better
          place is to recognize that our actions, however small, can have a
          ripple effect. By doing our part, we can inspire others to do the same
          and create a chain reaction of positive change.
        </p>
      </div>
    </>
  );
}

export default Home;
