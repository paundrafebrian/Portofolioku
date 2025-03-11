const portfolio = [
  {
    id: 0,
    projectName: "Digi Asset",
    // url: "https://jmmerp.com/",
    image: "projects/digi.JPG",
    projectDetail:
      "Digi Asset website is an asset management system designed to help companies manage hardware and other devices efficiently.",
    technologiesUsed: [
      {
        tech: "ReactJS"
      },
      {
        tech: "PHP"
      },
      {
        tech: "Mysql"
      },
      {
        tech: "Laravel"
      },
      {
        tech: "SCSS"
      }
    ]
  },
  {
    id: 0,
    projectName: "KolLabs",
    // url: "https://absco.sa/",
    image: "projects/kolLab.JPG",
    projectDetail:
      "KolLab website is a digital campaign management system that focuses on collaboration with influencers.",
    technologiesUsed: [
      {
        tech: "ReactJS"
      },
      {
        tech: "PHP"
      },
      {
        tech: "SCSS"
      },
      {
        tech: "Laravel"
      }
    ]
  },
  {
    id: 0,
    projectName: "Timekeeper",
    // url: "https://jmm.ltd/",
    image: "projects/timekepeer.JPG",
    projectDetail:
      "Time Keeper Website is an employee data and attendance management system designed to help companies manage attendance, organizational structure, and employee information efficiently.",
    technologiesUsed: [
      {
        tech: "ReactJS"
      },
      {
        tech: "ChartJs"
      },
      {
        tech: "REST API's"
      },
      {
        tech: "bootstrap icons"
      },
      {
        tech: "Laravel"
      }
    ]
  },
  {
    id: 0,
    projectName: "E-recruitment Karyawan",
    // url: "https://alsn.app/",
    image: "projects/krp.JPG",
    projectDetail:
      "PT. Karya Rama Perkasa website is the official platform of the company engaged in the provision of labor, transportation, materials, and construction.",
    technologiesUsed: [
      {
        tech: "ReactJS"
      },
      {
        tech: "PHP"
      },
      {
        tech: "Redux"
      },
      {
        tech: "Laravel"
      },
      {
        tech: "bootstrap icons"
      }
    ]
  },
  {
    id: 0,
    projectName: "Rental Audio",
    // url: "/domain-expired",
    image: "projects/aep.JPG",
    projectDetail:
      "AE Production website is an official platform that provides event production services, including stage rental, sound system, lighting, and other multimedia equipment.",
    technologiesUsed: [
      {
        tech: "ReactJS"
      },
      {
        tech: "PHP"
      },
      {
        tech: "Redux"
      },
      {
        tech: "Laravel"
      },
      {
        tech: "bootstrap icons"
      }
    ]
  },
  {
    id: 0,
    projectName: "Sipeduli",
    // url: "https://fatehtour.com/",
    image: "projects/sipeduli.JPG",
    projectDetail:
      "The Sipeduli website is a complaint and information system designed to facilitate the public in reporting problems that occur in their environment, especially in Dukuh Longkrang.",
    technologiesUsed: [
      {
        tech: "ReactJS"
      },
      {
        tech: "REST API's"
      },
      {
        tech: "bootstrap icons"
      },
      {
        tech: "Redux"
      }
    ]
  },
  {
    id: 0,
    projectName: "PPDB Online",
    // url: "/domain-expired",
    image: "projects/lrd.jpg",
    projectDetail:
      "PPDB Online is a site for accepting new students online via a digital platform",
    technologiesUsed: [
      {
        tech: "JavaScript"
      },
      {
        tech: "Laravel"
      },
      {
        tech: "REST API's"
      },
      {
        tech: "SCSS"
      },
      {
        tech: "PHP"
      }
    ]
  }
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
