const users = [
    {
      name: "Ethen",
      userName: "3t",
      phone: "111-123-1234",
      email: "ethenfm@gmail.com",
      password: "1234",
      pfp: "./src/Images/ethen.jpeg",
      inProgress: [{
        title: "Introduction to Watercolor Painting",
        category: "art",
        level: "beginner",
        lessons: 6,
        time: 6.5,
        instructor: "Ahmed Ali",
        description:
          "Unleash your creativity with watercolor painting! Join artist Ahmed Ali as he guides you through the basics of this expressive art form. From color mixing to brush techniques, you'll gain the skills to create beautiful watercolor artworks. No prior experience needed - just bring your passion for art!",
        image: "https://s3-alpha-sig.figma.com/img/4237/5d12/cbe3efa06cab26cb3d909e9a295ec12a?Expires=1697414400&Signature=TWpPugpOgjLo~ibO8BlX9J~CipRt3LP75Z~8wLl1-t2lYjWbxgukYDmrA7LsyK~-9IDUK86ZqZd7lS3inWrRXNIAwmTv7VjU1pBQxAFVegddZWFPajsh3dR2hR3ZEXlrvfV5prWwxvOS3oLjtB9f4dYnImqVtUHwKWM12v4HXKAYb3YtSdpg8dVgMRglp3ZKMEOCQaFTDAE7ZNCMkktSt~wD~Nqp~42Tt3CpdCK2WwUxAg8yE~HZBlpDPJU32SGaIUkE0eVwa34ODKssGPqz5KWHzE38hgfnIxekYDLAY1DlI11AQNQEH2IqVx07lEAT1PIpShtzmFTnIs0v87beaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      },
      {
        title: "Introduction to Pottery",
        category: "art",
        level: "beginner",
        lessons: 8,
        time: 6.6,
        instructor: "Hiroshi Yamamoto",
        description:
          "Unleash your creativity with clay in this beginner's pottery course led by Hiroshi Yamamoto. Learn the basics of hand-building and wheel-throwing, and create your own functional and artistic pottery pieces. Whether you're a budding artist or simply looking for a relaxing hobby, pottery is a rewarding craft to explore.",
        image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2169&q=80"
      }
    ],
      completedCourses: [
        {
            title: "German 101",
            category: "language",
            level: "beginner",
            lessons: 18,
            time: 85.0,
            instructor: "Hans Schmidt",
            description:
              "Willkommen! Learn the German language with instructor Hans Schmidt. This beginner's course covers essential vocabulary, grammar, and conversational skills. Whether you're planning to travel to Germany or want to explore German literature, this course will help you get started.",
            image: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VybWFuJTIwbGFuZ3VhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          },
          {
            title: "Screenwriting Masterclass",
            category: "writing",
            level: "advanced",
            lessons: 40,
            time: 70.5,
            instructor: "James Roberts",
            description: "Craft compelling screenplays with James Roberts' advanced masterclass. Dive deep into the world of storytelling for film and television. Bring your cinematic visions to life on the screen.",
            image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2NyZWVuJTIwd3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          },
          {
            title: "Journalism and News Writing",
            category: "writing",
            level: "beginner",
            lessons: 28,
            time: 42.5,
            instructor: "Sarah Mitchell",
            description: "Become a skilled journalist with Sarah Mitchell's beginner course. Learn the principles of news writing, conducting interviews, and reporting. Uncover the art of storytelling in journalism.",
            image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Sm91cm5hbGlzbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
    ],
    saved: [
        {
            title: "Business Writing Essentials",
            category: "writing",
            level: "intermediate",
            lessons: 24,
            time: 40.2,
            instructor: "Robert Turner",
            description: "Enhance your business communication skills with Robert Turner's intermediate course. Learn to write effective emails, reports, and business proposals. Improve your professional writing for success.",
            image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          },
          {
            title: "Creative Writing Workshop",
            category: "writing",
            level: "intermediate",
            lessons: 26,
            time: 3.3,
            instructor: "Carlos Rodriguez",
            description:
              "Unlock your creativity and hone your writing skills with Carlos Rodriguez. This intermediate-level creative writing workshop covers storytelling, character development, and the art of crafting compelling narratives. Whether you're an aspiring author or want to enhance your writing, this course is for you.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2273&q=80"
          },
          {
            title: "How to Build Your Budget",
            category: "finance",
            level: "any",
            lessons: 54,
            time: 81.5,
            instructor: "Liu Wei",
            description:
              "Take control of your finances with Liu Wei's budgeting course. Whether you're saving for a big purchase or planning for the future, this course will teach you essential budgeting and financial planning skills. Secure your financial future with this practical guide.",
            image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
          }
    ]
  }
];

module.exports = users;