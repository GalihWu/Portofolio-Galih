import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="mt-[3rem] w-full h-[10rem] flex flex-col gap-[3rem] items-center justify-center"
      >
        <ul className="flex md:gap-[4rem] sm:gap-[3rem] gap-[0.6rem]">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex gap-2 justify-center">
          {/* fb */}
          <a
            href="https://www.facebook.com/profile.php?id=61565504964042"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              id="facebook"
              className="w-[1.5rem] cursor-pointer"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1={24}
                  x2={24}
                  y1="7.06"
                  y2="41.3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={1} stopColor="#fff" />
                </linearGradient>
              </defs>
              <g>
                <rect
                  width={44}
                  height={44}
                  x={2}
                  y={2}
                  fill="#1c1c1c"
                  rx="9.04"
                />
                <path
                  fill="url(#a)"
                  d="M19.68,41.3h6.9V24h4.81l.51-5.78H26.58V15c0-1.37.27-1.91,1.59-1.91H31.9v-6H27.13c-5.13,0-7.45,2.26-7.45,6.59v4.61H16.1v5.85h3.58Z"
                />
              </g>
            </svg>
          </a>
          {/* ig */}
          <a href="https://www.instagram.com/galihhh_3/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              id="instagram"
              className="w-[1.5rem]"
            >
              <g>
                <rect
                  width={44}
                  height={44}
                  x={2}
                  y={2}
                  fill="#1c1c1c"
                  rx="9.04"
                />
                <path
                  fill="#fff"
                  d="M18.58,24.07A5.43,5.43,0,1,1,24,29.49a5.42,5.42,0,0,1-5.42-5.42Zm-2.94,0A8.36,8.36,0,1,0,24,15.71a8.36,8.36,0,0,0-8.36,8.36Zm15.09-8.69a2,2,0,1,0,2-2,2,2,0,0,0-2,2ZM17.42,37.32a9.08,9.08,0,0,1-3-.56,5.42,5.42,0,0,1-3.09-3.09,9,9,0,0,1-.56-3c-.08-1.72-.09-2.23-.09-6.58s0-4.86.09-6.58a9,9,0,0,1,.56-3,5.42,5.42,0,0,1,3.09-3.09,9.08,9.08,0,0,1,3-.56c1.72-.08,2.23-.09,6.58-.09s4.86,0,6.58.09a9,9,0,0,1,3,.56,5.42,5.42,0,0,1,3.09,3.09,9,9,0,0,1,.56,3c.08,1.72.09,2.23.09,6.58s0,4.86-.09,6.58a9,9,0,0,1-.56,3,5.42,5.42,0,0,1-3.09,3.09,9,9,0,0,1-3,.56c-1.72.08-2.23.09-6.58.09s-4.86,0-6.58-.09ZM17.29,7.89a12,12,0,0,0-3.95.76,7.8,7.8,0,0,0-2.88,1.88,7.92,7.92,0,0,0-1.88,2.88,12,12,0,0,0-.76,3.95c-.08,1.74-.1,2.29-.1,6.71s0,5,.1,6.71a12,12,0,0,0,.76,3.95,8.36,8.36,0,0,0,4.76,4.76,12,12,0,0,0,3.95.76c1.74.08,2.29.1,6.71.1s5,0,6.71-.1a12,12,0,0,0,3.95-.76,8.36,8.36,0,0,0,4.76-4.76,12,12,0,0,0,.76-3.95c.08-1.74.1-2.29.1-6.71s0-5-.1-6.71a12,12,0,0,0-.76-3.95,7.92,7.92,0,0,0-1.88-2.88,7.8,7.8,0,0,0-2.88-1.88,12,12,0,0,0-3.95-.76c-1.74-.08-2.29-.1-6.71-.1s-5,0-6.71.1Z"
                />
              </g>
            </svg>
          </a>
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/galihwahyuutomo/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="linkedin"
              className="h-[1.8rem] mt-[-3px]"
            >
              <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
            </svg>
          </a>
        </div>
      </div>
      <footer className="w-full h-[5rem] text-sm sm:text-base text-center flex items-center justify-center bg-brown text-white">
        © 2024&nbsp;
        <span className="font-semibold color-blue">
          Galih Wahyu Utomo&nbsp;
        </span>{' '}
        | All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
