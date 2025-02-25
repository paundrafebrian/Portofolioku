const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Telkom University Purwokerto",
        degree: "S.Kom, Informatics Engineering",
        detail:
          "Bachelor's Degree in Informatics Engineering from Telkom University Purwokerto.",
        year: "2020-2024"
      }
      // {
      //     id: 1,
      //     title: 'Peshawar Model Degree College',
      //     degree: 'HSSC, Pre Engineering',
      //     detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
      //     year: '2015-2017'
      // },
      // {
      //     id: 2,
      //     title: 'Falcon Academy',
      //     degree: 'SSC, Science Subjects',
      //     detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
      //     year: '2013-2015'
      // },
    ]
  },
  {
    expCards: [
      {
        id: 1,
        title: "PT Ethos Kreatif Indonesia",
        role: "FullStack Developer",
        desc:
          "As a frontend developer, I use laravel to build user interfaces for web applications.",
        year: "09/2024 - Present",
        location: "Purwokerto, Indonesia"
      },
      {
        id: 2,
        title: "Binar Academy",
        role: "Front End JavaScript | Certified Independent Study",
        desc:
          "As an Certified Independent Study, I learned how to use React & JavaScript to build interactive websites.",
        year: "08/2022 - 12/2022",
        location: "Work From Home, Indonesia"
      }
    ]
  }
];

export default function handler(req, res) {
  res.status(200).json(background);
}
