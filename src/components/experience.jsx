import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: 'July-September 2024',
      title: 'Crew ErGe Event',
      descriptions: [
        'Developed mini-games for event purposes.',
        'Operated the mini-games at the booth during the event.',
        'Contributed to creating an engaging interactive experience for event visitors',
      ],
    },
    {
      year: 'February - June 2024',
      title: 'Magang Merdeka MSIB Batch 6 - Supervisor',
      descriptions: [
        'Supervised daily operations at the training institute, optimizing workflow, task completion, logistics, and inventory management through best practices.',
        'Strengthened team management, project coordination, communication, and leadership skills by collaborating in a fast-paced, dynamic environment.',
      ],
    },
    {
      year: 'February-June 2023',
      title: 'MSIB - Front End Engineer Career With ReactJS',
      descriptions: [
        'Deepened understanding of HTML, CSS, JavaScript, and studied advanced tools like ReactJS, Bootstrap, and Tailwind CSS for efficient web development.',
        'Applied best practices in user interface design and collaborated effectively within a front-end development team.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="grid md:grid-cols-2 gap-[3rem] mx-[12%] md:mt-[10rem] mt-[3rem]"
    >
      {/* About Me Section */}
      <div className="flex flex-col gap-[1.5rem]">
        <div className="text-2xl font-semibold">About Me</div>
        <div className="text-justify indent-10 leading-relaxed">
          I am a graduate in Informatics Engineering with a strong passion for
          Front-End Web Development and a solid understanding of various
          programming technologies, including HTML, CSS, JavaScript, ReactJS,
          TailwindCSS, and Node.js. I am highly adaptable, able to work both
          independently and in a team setting, and take full responsibility for
          every task I undertake. My discipline and time management skills
          ensure that I consistently meet deadlines and deliver quality results.
          <br />
        </div>
        <div className="text-justify indent-10 leading-relaxed">
          I am currently seeking a career in web development, though I am also
          open to opportunities in data entry administration. I thrive in
          dynamic environments where I can continue to learn and grow, and I am
          enthusiastic about embracing new challenges. My willingness to learn
          makes me open to various types of work, allowing me to adapt quickly
          to different roles and responsibilities.
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-[1.5rem] text-justify">
        <div className="text-2xl font-semibold">Experience</div>
        <div className="flex flex-col gap-4">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col exp gap-1">
              <div className="font-medium text-lg">
                {experience.year} | {experience.title}
              </div>
              <ul>
                {experience.descriptions.map((description, i) => (
                  <li key={i}>{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
