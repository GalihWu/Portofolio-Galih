import ProjectCard from './projectCard';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Project = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const projects = [
    {
      image: '/img/spin.png',
      title: 'Spin Wheel',
      description:
        'A web-based spin game created to enhance Djarum events, supporting product promotion and engaging visitors through a fun, interactive experience at the booth.',
      tags: ['Javascript'],
    },
    {
      image: '/img/karouke.png',
      title: 'Karouke Heppiii',
      description:
        'A web-based karaoke video player designed for Djarum 76 events, aimed at attracting attention and providing an interactive experience at the 76 booth.',
      tags: ['ReactJS'],
    },
    {
      image: '/img/ecowave.png',
      title: 'Ecowave',
      description:
        'A web application for managing the admin side of the Ecowave marketplace, developed as a final project in the Altera Academy Independent Study program.',
      tags: ['ReactJS', 'TailwindCSS'],
    },
    {
      image: '/img/bagtrack.png',
      title: 'BagTrack',
      description:
        'A web application for ordering ear mushroom baglogs, part of my thesis project, with two user roles: admin and customer, streamlining the order management process.',
      tags: ['ReactJS', 'Bootstrap', 'MongoDB'],
    },
    {
      image: '/img/nextjs_exercise.png',
      title: 'Project NextJS Beginner',
      description:
        'A practice project using Next.js, aimed at building a portfolio and adding a blog feature.',
      tags: ['NextJS', 'MongoDB', 'CSS'],
    },
    {
      image: '/img/chatmigo.png',
      title: 'Chatmigo',
      description:
        'A simple web chat application that connects users, allowing them to send text and image messages in real-time.',
      tags: ['ReactJS', 'Bootstrap', 'Firebase'],
    },
  ];

  return (
    <section
      id="project"
      className="flex flex-col gap-[3rem] md:mx-[12%] mt-[5rem]"
    >
      <div className="flex gap-3 flex-col text-center justify-center items-center">
        <div className="text-2xl font-semibold">Project</div>
        <p className="md:w-[70%] sm:text-base text-sm">
          Here are some of the key projects I have worked on, showcasing my
          skills in web development and my ability to deliver creative,
          functional solutions across various platforms and technologies.
        </p>
      </div>

      <div className="flex gap-[2rem] flex-wrap items-center justify-center mx-[1rem] sm:mx-0">
        <Carousel
          swipeable={true}
          draggable={true}
          // showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          // keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Carousel>
        {/* {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))} */}
      </div>
    </section>
  );
};

export default Project;
