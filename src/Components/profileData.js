const profileData = {
  name: "Ayda HafsiKordestani",
  title: "Front end Developer",
  location: "Sanandaj,Iran",
  gmail: "Kordestaniayda@gmail.com",
  phone: "+98-9217879756",
  avatar: process.env.PUBLIC_URL + "/profilePhoto.jpg",

  skills: [
    { name: "HTML", level: 100, emoji: "💪" },
    { name: "CSS", level: 100, emoji: "💪" },
    { name: "Bootstrap", level: 100, emoji: "💪" },
    { name: "Responsive Design", level: 100, emoji: "💪" },
    { name: "JavaScript", level: 80, emoji: "👏" },
    { name: "JQuery", level: 80, emoji: "👏" },
    { name: "React", level: 40, emoji: "👌" },
  ],

  languages: [
    { name: "Kurdish", level: 100 },
    { name: "Persian", level: 100 },
    { name: "English", level: 90 },
    { name: "German", level: 25 },
  ],
  Education: [
    {
      school: "Guilan University",
      degree: "Bachelor's Degree in Computer Engineering",
      field: "Computer Engineering",
      startYear: 2020,
      endYear: 2024,
      score: "16.31 / 20",
    },
    {
      school: "Pooyesh Vabasteh Be Daneshga",
      degree: "Mathematics Diploma",
      startYear: 2017,
      endYear: 2020,
      score: "18.45 / 20",
    },
  ],
  workExperience: [
    {
      company: "Pishgaman Tosee Fanavari Chalak (PTFCH)",
      website: "https://www.crm-support.ir/",
      role: "Front-End Developer",
      startDate: "July 2024",
      endDate: "Present",
      description: [
        "Designed and implemented the full Front-End of the organizational dashboard and Summary CRM-support website using HTML, CSS/SCSS, JavaScript, jQuery, and related plugins.",
        "Built multiple interactive modules from scratch, ensuring high performance, scalability, and smooth user experience.",
        "Integrated Front-End with Back-End services by writing efficient C# queries to fetch and display dynamic data.",
        "Collaborated closely with the design team, translating Figma prototypes into responsive, user-friendly interfaces and contributing UI/UX improvements.",
        "Ensured cross-browser and cross-device compatibility, optimized loading times, and maintained clean, reusable code.",
        "Utilized Git for version control, branch management, and team collaboration in an agile workflow.",
      ],
    },
    {
      company: "Roz Andisheh Hooshmand Company",
      website: "https://roseandishe.com/",
      role: "Front-End Intern",
      startDate: "April 2023",
      endDate: "August 2023",
      description: [
        "Built responsive web interfaces with HTML, CSS, and JavaScript to deliver seamless experiences across desktop and mobile.",
        "Partnered with the design team to turn wireframes and prototypes into interactive, user-friendly interfaces.",
        "Tested, debugged, and optimized JavaScript and CSS code for smooth functionality, performance, and cross-browser compatibility.",
      ],
    },
  ],
  projects: [
    {
      name: "Cafe Menu",
      year: 2025,
      link: "https://e-vancofe.ir/",
      description:
        "Full development of the mobile version UI for the e-Vancofe website using HTML, CSS, JavaScript, and jQuery, including page design, UX optimization, and project management from analysis to implementation.",
    },
    {
      name: "Architecture Portfolio Website – WordPress Design (In Progress)",
      year: 2025,
      link: "https://mahtakurdestani.com/",
      description:
        "Full design and development of an architecture portfolio website using WordPress, including page structure, portfolio showcase, and UX optimization with responsive design. The project is in progress, and all stages—from theme selection to implementation—have been completed independently.",
    },

    {
      name: "TravelCheckList (React)",
      year: 2025,
      description:
        "Here is a Travel Check List mini app built with React which allows adding/removing items and checking/unchecking the list, with filtering to show completed or pending items.",
      link: "https://github.com/aydakurdestani/travelCheckList",
    },
    {
      name: "Pizza Menu (React)",
      year: 2025,
      description: "Pizza menu app built with React.",
      link: "https://github.com/aydakurdestani/pizza-menu",
    },
    {
      name: "Edit-Image",
      year: 2023,
      link: "https://github.com/aydakurdestani/edite-image",
    },
    {
      name: "Guess-word",
      year: 2023,
      link: "https://github.com/aydakurdestani/Guess-word",
    },
    {
      name: "Music-player",
      year: 2023,
      link: "https://github.com/aydakurdestani/music-player",
    },
    {
      name: "ToDo List",
      year: 2023,
      link: "https://github.com/aydakurdestani/To-do",
    },
    {
      name: "Marketing-Template",
      year: 2023,
      link: "https://github.com/aydakurdestani/Marketing-Template",
    },
    {
      name: "Hotel-template",
      year: 2023,
      link: "https://github.com/aydakurdestani/hotel-template",
    },
  ],
};
export default profileData;
