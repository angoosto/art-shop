import type { NextPage } from "next";
import Link from "next/link";
import Jumbotron from "./components/Jumbotron";

const Home: NextPage = () => {
  return (
    <div>
      <Jumbotron />
      <section className="bg-primary w-full h-full">
        <div
          className="flex justify-center items-center p-8 max-w-lg"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p>
            My name is Bethany Jefferson-Loveday and I am an artist based in the vale of Evesham, a charming area nestled between the Malvern Hills and the Cotswolds.
            I discovered an innate love of painting from a young age, and studied fine art up to A-level at school. I studied fine art up to A-Level at school and spent 
            far too much time on my art homework, to the detriment of my other subjects and frustration of my Mother! I focused on portraits at the time, inspired by great 
            artists such as Lucian Freud. I have spent much of my youth and 20s exploring galleries for inspiration.
            
            I had a break from art, focusing on my career, degree and professional qualifications. However, in 2022 when pregnant with my first baby, Heidi, I was diagnosed with 
            cancer. What was so unbelievable about this diagnosis was that my husband was also receiving chemotherapy following a cancer diagnosis. I was signed off work for 4 months whilst having chemotherapy. 
            During this period, I started painting again. It was a great way to relax and fill the walls of our home. I assumed I would be too busy to continue painting when 
            Heidi arrived, but was determined and have managed to paint in the months since she was born. My husband and I are now in remission and this great news led to us both appearing on BBC 
            Breakfast where we told our story to Naga Munchetti and Charlie Stayt and Heidi went viral when she broke wind! 

            My most recent works focus on gardens around Worcestershire and The Cotswolds, which I visited during my pregnancy and since having Heidi. We are surrounded by beautiful places 
            and it is great to be able to bring them to life on canvas. I paint from my own photographs using acrylics. I have been recently inspired by David Hockney's style and techniques, 
            using his book "A Bigger Picture" as a point of reference. I particularly like to focus on large expanses of foliage and do so in a bold, colourful style. I have very much enjoyed 
            painting on a reasonably large scale as it enables me to be more expressive within my work.

            I have always been inspired by my soon to be brother in law, Angus. He is extremely fashionable and has a great aura.
            
            My portfolio is still growing, but I hope you enjoy what I have produced to date. 
           
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
