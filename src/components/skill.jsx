import React, { useState } from 'react';

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      title: 'Front End',
      img: '/img/ico/fe.png',
      description: 'Detailed description for Front End development.',
    },
    {
      title: 'Back End',
      img: '/img/ico/be.png',
      description: 'Detailed description for Back End development.',
    },
    {
      title: 'UI UX',
      img: '/img/ico/uiux.png',
      description: 'Detailed description for UI/UX design.',
    },
    {
      title: 'Teamwork',
      img: '/img/ico/collab.png',
      description: 'Detailed description for Teamwork.',
    },
  ];

  const openModal = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skill" className="flex flex-col gap-[3rem] mx-[12%] mt-[5rem]">
      <div className="flex gap-3 flex-col text-center justify-center items-center">
        <div className="text-3xl font-semibold">Skill</div>
        <p className="md:w-[70%]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className="flex flex-wrap gap-[1rem]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill w-full sm:w-[14rem] p-6 rounded-lg drop-shadow-md hover:drop-shadow-lg active:drop-shadow-md cursor-pointer"
            onClick={() => openModal(skill)}
          >
            <img src={skill.img} alt={skill.title} width={50} />
            <h5 className="my-2 text-xl font-semibold tracking-tight text-gray-900">
              {skill.title}
            </h5>
            <p className="font-normal text-gray-500">
              Click to see more details about {skill.title}.
            </p>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg relative max-w-lg w-full transition-transform duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedSkill.img}
              alt={selectedSkill.title}
              className="w-16 h-16 mx-auto"
            />
            <h2 className="text-2xl font-semibold text-center my-4">
              {selectedSkill.title}
            </h2>
            <p className="text-center">{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skill;
