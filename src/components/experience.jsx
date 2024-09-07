import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Magang Merdeka MSIB Batch 6 - Supervisor',
      descriptions: [
        'Supervised daily operations at the training institute, optimizing workflow, task completion, logistics, and inventory management through best practices.',
        'Strengthened team management, project coordination, communication, and leadership skills by collaborating in a fast-paced, dynamic environment.',
      ],
    },
    {
      year: '2023',
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
      className="grid md:grid-cols-2 gap-[3rem] mx-[12%] mt-[10rem]"
    >
      {/* About Me Section */}
      <div className="flex flex-col gap-[1.5rem]">
        <div className="text-2xl font-semibold">About Me</div>
        <div className="text-justify indent-10">
          I am a graduate in Informatics Engineering with a passion for
          Front-End Web Development. I have the ability to work both
          individually and in teams, and I take full responsibility for every
          task assigned. I am highly adaptable and disciplined with time
          management. My skills include HTML, CSS, JavaScript, ReactJS,
          TailwindCSS, Node.js, and a variety of other technologies.
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-[1.5rem] text-justify">
        <div className="text-2xl font-semibold">Experience</div>
        <div className="flex flex-col gap-4">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col exp gap-4">
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
