import ProjectCard from './projectCard';

const Project = () => {
  const projects = [
    {
      image: '/img/p1.png',
      title: 'Ecowave',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      tags: ['ReactJS', 'TailwindCSS'],
    },
    {
      image: '/img/p4.png',
      title: 'BagTrack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      tags: ['ReactJS', 'Bootstrap', 'MongoDB'],
    },
    {
      image: '/img/p2.png',
      title: 'Project NextBeginner',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      tags: ['NextJS', 'MongoDB', 'CSS'],
    },
    {
      image: '/img/p3.png',
      title: 'Chatmigo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
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
        <p className="w-[70%]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="flex gap-[2rem] flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
