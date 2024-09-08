import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import InstagramAnimation from '../lottie/instagram.json';
import LinkedInAnimation from '../lottie/linkedin.json';
// import facebookAnimation from '../lottie/facebook.json';

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:grid md:grid-cols-2 justify-between mx-[12%]"
    >
      <div className="col-span-1 flex flex-col gap-3 justify-center mt-[9rem]">
        <div className="font-semibold">Hi I am</div>
        <div className="font-bold sm:text-2xl text-lg color-blue">
          Galih Wahyu Utomo
        </div>
        <div className="mb-[8%] flex flex-col gap-3">
          <div className="font-bold text-3xl sm:text-5xl">Front End</div>
          <div className="font-bold text-3xl sm:text-5xl ml-[10%]">
            Web Developer
          </div>
        </div>
        <p className="text-sm sm:text-base">
          I am a Bachelor’s graduate in Informatics Engineering with a deep
          passion for Front-End Web Development.
        </p>
        <div className="button-42 w-[10rem]">
          <a href="https://drive.google.com/uc?export=download&id=1-VQR5IO79MdGlJxErFbAfn8G5WwuAtK7">
            Download CV
          </a>
        </div>
      </div>
      <div className="col-span-1 mt-[4rem] w-full h-full flex flex-col justify-center items-center">
        <img alt="hero" className="w-[70%]" src="/img/hero.png" />
        <div className="flex gap-3 mt-3">
          <a
            id="instagram"
            className="cursor-pointer w-[2rem] h-[2rem] bg-blue rounded"
            href="https://www.instagram.com/galihhh_3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Player
              autoplay
              loop
              src={InstagramAnimation}
              className="w-full h-full"
            />
          </a>
          <a
            id="linkedin"
            className="cursor-pointer w-[2rem] h-[2rem] bg-blue rounded"
            href="https://www.linkedin.com/in/galihwahyuutomo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Player
              autoplay
              loop
              src={LinkedInAnimation}
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
