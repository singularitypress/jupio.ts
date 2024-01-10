import Link from "next/link";

export const PEOPLE_PRESENT = [
  {
    name: "Jay Pandya",
    type: "Founder",
    title: "Senior Software Engineer",
    company: "Amazon",
    linkedIn: "https://linkedin.com/in/jaypandya",
    github: "https://github.com/singularitypress",
    email: "hello@jaypandya.co",
    bio: (
      <>
        I'm a senior front-end engineer with experience building web
        applications and tools with React, TypeScript, Node.JS alongside UI and
        UX teams at <strong>Scotiabank</strong>, and leading them at
        <strong> Amazon</strong>. I have a passion for making clean, elegant
        software that is both highly usable and performant.
      </>
    ),
  },
  {
    name: "Herlander Pinto",
    type: "Founder",
    title: "Senior Software Developer",
    company: "Jobber",
    linkedIn: "https://www.linkedin.com/in/hdpinto",
    email: "hdpinto@outlook.com",
    bio: (
      <>
        I'm a full stack developer working with technologies from across
        different paradigms of web development: Microsoft/.Net and C#, Go,
        JavaScript, React.js, and Node.js. I'm flexible and love a challenge,
        and often mix and match different technologies because of system
        limitations or project requirements to achieve the best possible result.
      </>
    ),
  },
  {
    name: "Sushil Tailor",
    type: "Founder",
    title: "Senior Software Engineer",
    company: "Microsoft",
    linkedIn: "https://www.linkedin.com/in/sushil-tailor",
    github: "https://github.com/sashimii",
    email: "sushil.tailor@gmail.com",
    bio: (
      <>
        I'm a Senior-level Full Stack Developer specializing in front end
        development, solutioning, people management, &amp; optimizing software
        delivery processes
      </>
    ),
  },
  {
    name: "Kassim Wais",
    type: "Founder",
    title: "Senior Project Manager",
    company: "Klick",
    linkedIn: "https://www.linkedin.com/in/kassim-wais-b5135125/",
    github: "https://github.com/kassimwais",
    email: "waiskassim@gmail.com",
    bio: (
      <>
        Result-orientated project manager with more than 8 years of experience
        covering project and product management including developing,
        implementing, and supporting complex infrastructures for fast growing
        organizations with teams from 10 to 50 members per project. A fast and
        eager learner, I am detail oriented and adapt to changing project
        requirements quickly to meet business goals.
      </>
    ),
  },
  {
    name: "Nelson Liu",
    type: "Consultant",
    title: "Research Scientist, AI and Data Science",
    company: "Uncharted Software",
    linkedIn: "https://www.linkedin.com/in/laichungliu/",
    github: "https://github.com/liunelson",
    email: "liu.nelson@outlook.com",
    misc: "https://scholar.google.ca/citations?user=zbmE0IIAAAAJ",
    bio: (
      <>
        I'm a full-stack data and ML scientist with a PhD in physics and years
        of experience in leading applied research projects and building
        end-to-end ML solutions in Python (AWS, PyTorch, MLFLow, Prefect). I've
        co-authored papers in several high-impact journals and developed tools
        for the US DoD DARPA and CA DND DRDC to detect/analyze/monitor influence
        campaigns in social media. Secret Level II security clearance.
      </>
    ),
  }
];

export const PEOPLE_PAST = [
  {
    name: "Julia Furman",
    type: "Alumnus",
    title: "Software Engineer",
    company: "Paypal",
    linkedIn: "https://www.linkedin.com/in/juliafurman/",
    github: "https://github.com/yeul",
    bio: (
      <>
        I am always looking to expand my knowledge in the ever-evolving field of
        full stack web development. In addition, I am highly interested in the
        nexus of technology and security with its ever-increasing importance in
        today's international landscape, and it is my goal to expand my
        knowledge and experience in these fields.
      </>
    ),
  },
  {
    name: "Henrique Pinto",
    type: "Alumnus",
    title: "Frontend Developer",
    company: "August",
    linkedIn: "https://www.linkedin.com/in/henrique-pinto-27617aa2/",
    email: "pintohenriqued@gmail.com",
    bio: (
      <>
        Reactjs/Nextjs/Gastbyjs/Node-Express Web Developer with computer science
        fundamentals background. Open to software development positions. Passion
        for music production, Data collection and related technologies.
      </>
    ),
  },
  {
    name: "Amy Pandya",
    type: "Alumnus",
    title: "Web Content Manager",
    company: "Scotiabank",
    linkedIn: "https://www.linkedin.com/in/amy-pandya-03282211b/",
    github: "https://github.com/amypands",
    email: "amykpandya@gmail.com",
    misc: "https://amypandya.vercel.app/",
    bio: (
      <>
        I'm a web developer based in Toronto and am looking to work with other
        teams to build high quality websites. I am highly interested in
        developing human centric design with a focus on accessibility and strong
        brand aesthetics. See more about me{" "}
        <Link href="https://amypandya.vercel.app/">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-dotted transition-all duration-500 border-theme-base dark:border-theme-accent hover:border-transparent hover:dark:border-transparent"
          >
            here <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </Link>
        .
      </>
    ),
  },
];
