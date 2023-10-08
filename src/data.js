const courses = [
  {
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
    title: "Test Painting",
    category: "art",
    level: "beginner",
    lessons: 6,
    time: 6.5,
    instructor: "Ahmed Ali",
    description:
      "Discover the world of painting with artist Ahmed Ali. In this hands-on course, you'll experiment with various painting techniques and unleash your artistic potential. Whether you're a novice or have dabbled in art before, this course is your canvas for creative exploration.",
    image: "https://s3-alpha-sig.figma.com/img/7a74/f85b/ec020b8dfedd654bcb6db6c7dd39d53c?Expires=1697414400&Signature=kN4KhFkcsGiT6ZQQiRlLj~DfNj-Go9a2RyClhKnAlWFKEdl7gACtGiwgaVfarWrqpE1Bn6ieqJT8yI55FluCA98fPzLc14SYGpeXlnNSegio0oNcVLisFZPGnag8JUXk7oNVUH60~dQQvyB2kPoN2O9UKMawSluRghkSnqXS8b6H27vYxQrTdySPftNiivins~8PVRDE-xlg~L0~JIYghW7yPRkPPH2-mfyKomFb5zz8-Ug1Gk09UP91X2VMzaZMP2h34MoGf9W-p86GuKkaD3xnAzxwHaHPrQLm01YsSVgafIPbpbfFT17z0MxHqm2w8kPoAnMXTLsxBQwynGS3yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    title: "Modern Chinese Calligraphy",
    category: "art",
    level: "intermediate",
    lessons: 30,
    time: 29.6,
    instructor: "Liu Wei",
    description:
      "Experience the elegance of Chinese calligraphy with master artist Liu Wei. This intermediate course will teach you the graceful strokes and techniques of modern Chinese calligraphy. Whether you're an artist or simply curious, this course offers a unique blend of tradition and innovation.",
    image: "https://images.unsplash.com/photo-1583389409210-0234eee7cdce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80"
  },
  {
    title: "Introduction to Painting",
    category: "art",
    level: "beginner",
    lessons: 8,
    time: 1.5,
    instructor: "Artist Laura",
    description:
      "Unleash your creativity with this beginner-friendly painting course. Learn the basics of color mixing, brush techniques, and create your own beautiful artworks.",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
  },
  
  {
    title: "Drawing for Beginners",
    category: "art",
    level: "beginner",
    lessons: 10,
    time: 1.0,
    instructor: "Artist Michael",
    description:
      "Start your artistic journey with this introductory drawing course. Develop your drawing skills, from simple shapes to more complex subjects.",
    image: "https://plus.unsplash.com/premium_photo-1664105111034-33e24dc90a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhd2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  
  {
    title: "Crafting with Clay",
    category: "art",
    level: "beginner",
    lessons: 6,
    time: 1.25,
    instructor: "Crafts Expert Sarah",
    description:
      "Explore the world of clay crafting in this hands-on course. Create pottery, sculptures, and unique clay artworks, perfect for beginners.",
    image: "https://images.unsplash.com/photo-1611013621103-91e10668a120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  }
,  
{
  title: "Intermediate Watercolor Techniques",
  category: "art",
  level: "intermediate",
  lessons: 12,
  time: 2.0,
  instructor: "Artist Emily",
  description:
    "Take your watercolor skills to the next level with this intermediate course. Learn advanced techniques, create stunning landscapes, and explore the world of watercolors.",
  image: "https://images.unsplash.com/photo-1612612377337-08573812b370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Sculpting with Stone",
  category: "art",
  level: "intermediate",
  lessons: 9,
  time: 1.75,
  instructor: "Sculptor David",
  description:
    "Discover the art of stone sculpting in this intermediate course. Carve intricate designs, master different stone types, and craft beautiful sculptures.",
  image: "https://plus.unsplash.com/premium_photo-1672287578649-fd7370ca7b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2N1bHB0aW5nJTIwc3RvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Intermediate Digital Illustration",
  category: "art",
  level: "intermediate",
  lessons: 15,
  time: 1.5,
  instructor: "Digital Artist Alex",
  description:
    "Elevate your digital illustration skills with this intermediate course. Dive into digital tools, create stunning artworks, and unleash your creativity.",
  image: "https://images.unsplash.com/photo-1593073862407-a3ce22748763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
}
,
{
  title: "Art Fundamentals for All",
  category: "art",
  level: "any",
  lessons: 10,
  time: 1.5,
  instructor: "Master Artist Sarah",
  description:
    "Explore the world of art and unleash your creativity with this course suitable for all skill levels. Learn the basics of drawing, painting, and more.",
  image: "https://plus.unsplash.com/premium_photo-1661767490975-f31a02946f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Mixed Media Art Exploration",
  category: "art",
  level: "any",
  lessons: 8,
  time: 1.25,
  instructor: "Creative Expressions Studio",
  description:
    "Dive into the world of mixed media art and experiment with various techniques and materials. This course is perfect for artists of all backgrounds.",
  image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Art History: From Ancient to Modern",
  category: "art",
  level: "any",
  lessons: 12,
  time: 2.0,
  instructor: "Art Historian Dr. James",
  description:
    "Embark on a fascinating journey through the history of art, from ancient civilizations to modern masterpieces. Suitable for art enthusiasts of any level.",
  image: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwYXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
}
,
  {
    title: "Advanced Drumming Technique",
    category: "music",
    level: "advanced",
    lessons: 42,
    time: 17.1,
    instructor: "Liu Wei",
    description:
      "Elevate your drumming skills to a professional level with maestro Liu Wei. In this advanced course, you'll master complex rhythms, techniques, and drumming styles. Whether you're a drummer looking for a challenge or a musician exploring percussion, this course will push your boundaries.",
    image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Introduction to Guitar Playing",
    category: "music",
    level: "beginner",
    lessons: 12,
    time: 10.5,
    instructor: "Emily Davis",
    description:
      "Learn to play the guitar with Emily Davis, a skilled guitarist and instructor. This beginner's course covers basic chords, strumming techniques, and playing popular songs. Start your musical journey and impress your friends with your guitar skills.",
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Piano Masterclass: Advanced Techniques",
    category: "music",
    level: "advanced",
    lessons: 30,
    time: 25.0,
    instructor: "David Johnson",
    description:
      "Take your piano skills to the next level with David Johnson's Piano Masterclass. This advanced course focuses on intricate piano techniques, advanced compositions, and performance mastery. Elevate your piano playing and amaze your audience.",
    image: "https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlhbm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Singing for Beginners",
    category: "music",
    level: "beginner",
    lessons: 8,
    time: 6.5,
    instructor: "Grace Anderson",
    description:
      "Discover your vocal talent with Grace Anderson's Singing for Beginners course. Learn basic vocal exercises, pitch control, and popular singing techniques. Whether you aspire to be a professional singer or just love to sing in the shower, this course is for you.",
    image: "https://images.unsplash.com/photo-1623517272043-cae1572afc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Jazz Music Theory",
    category: "music",
    level: "intermediate",
    lessons: 20,
    time: 18.5,
    instructor: "Michael Baker",
    description:
      "Dive into the world of jazz with Michael Baker's Jazz Music Theory course. Explore jazz scales, chord progressions, and improvisation techniques. Whether you're an aspiring jazz musician or simply want to understand the magic of jazz, this course is a musical journey.",
    image: "https://plus.unsplash.com/premium_photo-1682125859318-66cbcf3aa7f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGphenp8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Violin Mastery",
    category: "music",
    level: "advanced",
    lessons: 40,
    time: 35.5,
    instructor: "Olivia Turner",
    description:
      "Embark on a journey to master the violin with Olivia Turner. This advanced course covers advanced violin techniques, virtuosic compositions, and solo performance mastery. Become a violin virtuoso with this comprehensive course.",
    image: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpb2xpbiUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Introduction to Guitar Playing",
    category: "music",
    level: "beginner",
    lessons: 10,
    time: 1.5,
    instructor: "Guitar Guru Alex",
    description:
      "Learn to play the guitar from scratch with this beginner-friendly course. Get hands-on experience and start strumming your favorite tunes.",
    image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  
  {
    title: "Piano Basics for Beginners",
    category: "music",
    level: "beginner",
    lessons: 8,
    time: 1.25,
    instructor: "Piano Pro Emily",
    description:
      "Discover the joys of playing the piano with this introductory course. Master the fundamentals and play beautiful melodies in no time.",
    image: "https://plus.unsplash.com/premium_photo-1682326302625-1e5b7826fb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGlhbm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  
  {
    title: "Singing 101: Vocal Warm-ups",
    category: "music",
    level: "beginner",
    lessons: 6,
    time: 1.0,
    instructor: "Vocal Coach Sarah",
    description:
      "Start your singing journey with proper vocal warm-up techniques. Develop your voice and prepare for a melodious musical experience.",
    image: "https://images.unsplash.com/photo-1595422656857-ced3a4a0ce25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNpbmdpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  }
,  
{
  title: "Intermediate Guitar Techniques",
  category: "music",
  level: "intermediate",
  lessons: 12,
  time: 1.75,
  instructor: "Guitar Maestro Mike",
  description:
    "Take your guitar skills to the next level with this intermediate course. Learn advanced techniques and play intricate melodies like a pro.",
  image: "https://images.unsplash.com/photo-1668216279752-f424583ed3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Advanced Piano Masterclass",
  category: "music",
  level: "intermediate",
  lessons: 15,
  time: 2.0,
  instructor: "Piano Virtuoso Olivia",
  description:
    "Elevate your piano playing with this intermediate masterclass. Explore complex compositions and become a piano virtuoso.",
  image: "https://images.unsplash.com/photo-1601312378427-822b2b41da35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpYW5vfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Intermediate Singing Techniques",
  category: "music",
  level: "intermediate",
  lessons: 10,
  time: 1.5,
  instructor: "Vocal Expert Daniel",
  description:
    "Enhance your singing skills with intermediate vocal techniques. Learn to control your voice and tackle challenging melodies.",
  image: "https://plus.unsplash.com/premium_photo-1681503974119-b5792644186e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
}
,
{
  title: "Introduction to Music Theory",
  category: "music",
  level: "any",
  lessons: 8,
  time: 1.0,
  instructor: "Music Professor Sarah",
  description:
    "Explore the fundamentals of music theory, suitable for beginners and experienced musicians looking to refresh their knowledge.",
  image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Music Production Basics",
  category: "music",
  level: "any",
  lessons: 10,
  time: 1.25,
  instructor: "Producer Extraordinaire Chris",
  description:
    "Learn the basics of music production, from recording and mixing to creating your own tracks. No prior experience required.",
  image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Exploring World Music",
  category: "music",
  level: "any",
  lessons: 12,
  time: 1.5,
  instructor: "World Music Enthusiast Maria",
  description:
    "Embark on a musical journey around the world, exploring the rich diversity of global music traditions and styles.",
  image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
}
,
  {
    title: "Web Development for Beginners",
    category: "programming",
    level: "beginner",
    lessons: 29,
    time: 84.0,
    instructor: "Maria Garcia",
    description:
      "Start your journey into web development with Maria Garcia. This beginner's course will teach you the fundamentals of HTML, CSS, and JavaScript. Whether you aspire to be a web developer or want to create your own website, this course provides a solid foundation.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Python for Beginners",
    category: "programming",
    level: "beginner",
    lessons: 16,
    time: 36.8,
    instructor: "Ahmed Ali",
    description:
      "Embark on your coding journey with instructor Ahmed Ali. This beginner-friendly Python course will teach you the fundamentals of programming. Whether you dream of building software or want to automate tasks, Python is your gateway to the world of coding.",
    image: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80"
  },
  {
    title: "C++ Game Development",
    category: "programming",
    level: "intermediate",
    lessons: 24,
    time: 20.0,
    instructor: "Ethan Turner",
    description:
      "Learn game development with C++ and Ethan Turner. Create 2D and 3D games, implement game physics, and optimize game performance. Turn your passion for gaming into game development skills.",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "DevOps and Continuous Integration",
    category: "programming",
    level: "intermediate",
    lessons: 18,
    time: 14.5,
    instructor: "Sophie Baker",
    description:
      "Master DevOps practices and continuous integration with Sophie Baker. Learn to automate software development processes, manage infrastructure as code, and ensure smooth software delivery. Streamline your development workflow.",
    image: "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGV2b3BzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Machine Learning with TensorFlow",
    category: "programming",
    level: "intermediate",
    lessons: 22,
    time: 18.5,
    instructor: "Jason Lee",
    description:
      "Dive into the world of machine learning with TensorFlow. Jason Lee will guide you through creating neural networks, deep learning models, and solving real-world problems with machine learning. Unlock the power of AI and data.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1hY2hpbmUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "iOS App Development with Swift",
    category: "programming",
    level: "intermediate",
    lessons: 18,
    time: 15.0,
    instructor: "Olivia Clark",
    description:
      "Create stunning iOS apps using Swift with Olivia Clark. Learn mobile app development, user interface design, and app deployment to the App Store. Turn your app ideas into reality.",
    image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "JavaScript Fundamentals",
    category: "programming",
    level: "beginner",
    lessons: 10,
    time: 1.5,
    instructor: "CodeMaster John",
    description:
      "Get started with the basics of JavaScript programming. No prior coding experience needed!",
    image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Web Development Basics",
    category: "programming",
    level: "beginner",
    lessons: 8,
    time: 1.25,
    instructor: "Web Wizard Mike",
    description:
      "Discover the essentials of web development, including HTML, CSS, and creating your first website.",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd",
  }
,  
{
  title: "Advanced JavaScript Techniques",
  category: "programming",
  level: "intermediate",
  lessons: 15,
  time: 2.0,
  instructor: "JS Pro Sarah",
  description:
    "Take your JavaScript skills to the next level with advanced techniques and best practices.",
  image: "https://plus.unsplash.com/premium_photo-1664297847109-a01715c2dc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amF2YXNjcmlwdCUyMGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
},
{
  title: "Python Mastery",
  category: "programming",
  level: "intermediate",
  lessons: 20,
  time: 2.5,
  instructor: "Python Guru Mark",
  description:
    "Become a Python expert by mastering advanced concepts and building complex applications.",
  image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
},

{
  title: "Full-Stack Web Development",
  category: "programming",
  level: "intermediate",
  lessons: 18,
  time: 2.25,
  instructor: "Web Dev Pro Laura",
  description:
    "Learn how to develop full-stack web applications using modern technologies and frameworks.",
  image: "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
}
,
{
  title: "Intro to Programming Concepts",
  category: "programming",
  level: "any",
  lessons: 10,
  time: 1.0,
  instructor: "Programming Basics Institute",
  description:
    "Start your programming journey with fundamental concepts and hands-on practice.",
  image: "https://plus.unsplash.com/premium_photo-1661412727566-dfd85cd6a21f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Web Development Fundamentals",
  category: "programming",
  level: "any",
  lessons: 12,
  time: 1.25,
  instructor: "Web Dev Starter School",
  description:
    "Learn the basics of web development and build your first websites from scratch.",
  image: "https://images.unsplash.com/file-1693537295440-6ff7207ef68cimage?dpr=2&auto=format&fit=crop&w=416&q=60",
},

{
  title: "Mobile App Development Crash Course",
  category: "programming",
  level: "any",
  lessons: 8,
  time: 1.5,
  instructor: "Mobile App Pro Alex",
  description:
    "Dive into mobile app development and create your own apps for iOS and Android.",
  image: "https://plus.unsplash.com/premium_photo-1661310181347-ddea5f5c3f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
}
,
{
  title: "Digital Marketing Basics",
  category: "marketing",
  level: "beginner",
  lessons: 8,
  time: 1.0,
  instructor: "Marketing101 Academy",
  description:
    "Learn the fundamentals of digital marketing, including SEO, social media, and email marketing.",
  image: "https://plus.unsplash.com/premium_photo-1661292033733-17272453224b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Content Marketing for Beginners",
  category: "marketing",
  level: "beginner",
  lessons: 6,
  time: 0.75,
  instructor: "Content Marketing Institute",
  description:
    "Discover how to create engaging content and develop effective content marketing strategies.",
  image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Email Marketing Essentials",
  category: "marketing",
  level: "beginner",
  lessons: 5,
  time: 0.5,
  instructor: "Email Marketing Pro",
  description:
    "Master the art of email marketing and build successful email campaigns that convert.",
  image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1haWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
}
,
{
  title: "Advanced SEO Strategies",
  category: "marketing",
  level: "intermediate",
  lessons: 12,
  time: 1.5,
  instructor: "SEO Pro Academy",
  description:
    "Take your SEO skills to the next level with advanced strategies and techniques.",
  image: "https://images.unsplash.com/file-1693420590466-15d961c7558dimage?dpr=2&auto=format&fit=crop&w=416&q=60",
},

{
  title: "Social Media Marketing Mastery",
  category: "marketing",
  level: "intermediate",
  lessons: 10,
  time: 1.25,
  instructor: "Social Media Expert",
  description:
    "Become a social media marketing expert and grow your brand's presence online.",
  image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Email Marketing Automation",
  category: "marketing",
  level: "intermediate",
  lessons: 8,
  time: 1.0,
  instructor: "Email Automation Guru",
  description:
    "Learn how to automate your email marketing campaigns for efficiency and effectiveness.",
  image: "https://plus.unsplash.com/premium_photo-1664304053787-2a08e9e91f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
}
,
{
  title: "Marketing Fundamentals",
  category: "marketing",
  level: "any",
  lessons: 8,
  time: 1.0,
  instructor: "Marketing Basics Academy",
  description:
    "Start your marketing journey with the fundamentals of marketing strategy and tactics.",
  image: "https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Content Marketing Essentials",
  category: "marketing",
  level: "any",
  lessons: 10,
  time: 1.25,
  instructor: "Content Marketing Pro",
  description:
    "Learn the essentials of content marketing to create valuable and engaging content.",
  image: "https://plus.unsplash.com/premium_photo-1661385890129-8d7ae484b84f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Digital Advertising Basics",
  category: "marketing",
  level: "any",
  lessons: 6,
  time: 0.75,
  instructor: "Digital Advertising Expert",
  description:
    "Discover the basics of digital advertising and its role in modern marketing strategies.",
  image: "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMGFkdmVydGlzaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
}
,
  {
    title: "Digital Marketing Fundamentals",
    category: "marketing",
    level: "beginner",
    lessons: 48,
    time: 25.7,
    instructor: "Sofia Patel",
    description:
      "Enter the dynamic world of digital marketing with expert Sofia Patel. Learn the essentials of online advertising, social media, and SEO. Whether you're a business owner or aspiring marketer, this course will equip you with the skills to succeed in the digital landscape.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80"
  },
  {
    title: "An Introduction to Darkroom Photography",
    category: "photography",
    level: "intermediate",
    lessons: 21,
    time: 33.1,
    instructor: "Lila Kim",
    description:
      "Step into the enchanting world of darkroom photography with Lila Kim. This intermediate course will guide you through film development, printing, and the magic of creating photographs in the darkroom. Explore the art and science of traditional photography in this captivating journey.",
    image: "https://images.unsplash.com/photo-1628618484916-c5fb6ae86119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2273&q=80"
  },
  {
    "title": "Intermediate Wildlife Photography",
    "category": "photography",
    "level": "intermediate",
    "lessons": 25,
    "time": 75.0,
    "instructor": "Sarah Johnson",
    "description": "Advance your wildlife photography skills with Sarah Johnson's intermediate course. Learn the techniques for capturing stunning wildlife shots, understanding animal behavior, and post-processing for wildlife photography.",
    "image": "https://images.unsplash.com/photo-1610372537236-0147e2a5fad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2lsZGxpZmUlMjBQaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
  "title": "Advanced Lighting Techniques",
  "category": "photography",
  "level": "intermediate",
  "lessons": 20,
  "time": 65.5,
  "instructor": "David Smith",
  "description": "Take your photography to the next level with David Smith's intermediate course on advanced lighting techniques. Explore portrait lighting, studio setups, and creative lighting for various photography genres.",
  "image": "https://images.unsplash.com/photo-1679985209344-8e3f334a185a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGlnaHRpbmclMjBUZWNobmlxdWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
},
  {
    title: "Mastering Food Photography",
    category: "photography",
    level: "advanced",
    lessons: 17,
    time: 22.6,
    instructor: "Miguel Hernandez",
    description:
      "Elevate your food photography skills to an expert level with photographer Miguel Hernandez. Learn advanced lighting, composition, and editing techniques to capture stunning culinary masterpieces. Whether you're a food blogger or a professional chef, this course will take your food photography to the next level.",
    image: "https://images.unsplash.com/photo-1482148829819-e32810d7e13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2162&q=80"
  },
  {
    title: "Photography for Beginners",
    category: "photography",
    level: "beginner",
    lessons: 15,
    time: 67.9,
    instructor: "Miguel Hernandez",
    description:
      "Unlock the world of photography with photographer Miguel Hernandez. This beginner-friendly course covers the essentials of camera operation, composition, and editing. Whether you're using a smartphone or a DSLR, this course will kickstart your photography journey.",
    image: "https://images.unsplash.com/photo-1580552833868-3da540a48e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80"
  },
  {
    "title": "Portrait Photography Basics",
    "category": "photography",
    "level": "beginner",
    "lessons": 12,
    "time": 45.0,
    "instructor": "Linda Davis",
    "description": "Start your journey into portrait photography with Linda Davis' beginner course. Learn about lighting, posing, and composition to capture stunning portraits, whether it's with a DSLR or a smartphone.",
    "image": "https://images.unsplash.com/photo-1544124094-8aea0374da93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBvcnRyYWl0JTIwUGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
{
  "title": "Landscape Photography for Beginners",
  "category": "photography",
  "level": "beginner",
  "lessons": 20,
  "time": 60.5,
  "instructor": "Alex Turner",
  "description": "Discover the beauty of landscape photography with Alex Turner's beginner course. Learn to capture stunning natural landscapes, use different camera settings, and enhance your editing skills.",
  "image": "https://images.unsplash.com/photo-1586783509992-bcfa7fe443b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TGFuZHNjYXBlJTIwUGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
{
  "title": "Street Photography Fundamentals",
  "category": "photography",
  "level": "beginner",
  "lessons": 18,
  "time": 55.0,
  "instructor": "Elena Martinez",
  "description": "Explore the world of street photography with Elena Martinez's beginner course. Learn the art of capturing candid moments, composition in urban settings, and post-processing techniques.",
  "image": "https://images.unsplash.com/photo-1639170348100-780a61eacd8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwZmlsbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
  {
    title: "Photography Composition Techniques",
    category: "photography",
    level: "intermediate",
    lessons: 31,
    time: 99.4,
    instructor: "Maria Garcia",
    description:
      "Capture stunning photographs with the guidance of professional photographer Maria Garcia. Learn the art of composition, lighting, and storytelling through your camera lens. Whether you're a budding photographer or a hobbyist, this course will elevate your photography skills.",
    image: "https://images.unsplash.com/photo-1494251268800-9ca078482168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Introduction to Fashion Photography",
    category: "photography",
    level: "Any",
    lessons: 39,
    time: 88.1,
    instructor: "Ananya Desai",
    description:
      "Discover the glamorous world of fashion photography with Ananya Desai. This course covers the basics of fashion photography, from working with models to creating captivating editorial spreads. Whether you dream of shooting for magazines or just want to capture style, this course will elevate your photography skills.",
    image: "https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Traditional Italian Cooking",
    category: "cooking",
    level: "intermediate",
    lessons: 15,
    time: 1.5,
    instructor: "Jaime's Kitchen",
    description:
      "Explore the rich flavors and culinary traditions of Italy in this comprehensive cooking course. From perfecting pasta to mastering classic sauces, you'll learn the secrets of Italian cuisine from Chef Jaime. Whether you're an experienced cook or a passionate beginner, this course will transport your taste buds to Italy.",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  },
  {
    title: "The Art of Baking",
    category: "cooking",
    level: "advanced",
    lessons: 22,
    time: 17.3,
    instructor: "Yukari Tanaka",
    description:
      "Take your baking skills to the next level with Chef Yukari Tanaka. Dive into the world of artisan bread, delicate pastries, and show-stopping desserts. This advanced course is designed for seasoned bakers looking to elevate their creations and impress friends and family.",
    image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Bread 101",
    category: "cooking",
    level: "intermediate",
    lessons: 49,
    time: 45.8,
    instructor: "Nguyen Minh",
    description:
      "Dive into the world of breadmaking with Chef Nguyen Minh. This intermediate course covers everything from the basics of dough to artisanal bread techniques. Whether you're a home baker or aspiring professional, you'll knead, rise, and bake your way to bread perfection.",
    image: "https://images.unsplash.com/photo-1605974323157-3b38b3332193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2226&q=80"
  },
  {
    title: "Indian Cooking Made Easy",
    category: "cooking",
    level: "any",
    lessons: 25,
    time: 20.6,
    instructor: "Ananya Desai",
    description:
      "Embark on a culinary journey through the vibrant flavors of India with Chef Ananya Desai. This course is designed for all skill levels, from beginners to experienced cooks. From fragrant curries to delectable sweets, you'll learn to create authentic Indian dishes that will impress your friends and family.",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Cooking Basics 101",
    category: "cooking",
    level: "beginner",
    lessons: 10,
    time: 1.0,
    instructor: "Chef John",
    description:
      "Learn the fundamental cooking techniques and skills you need to become a great home cook. This course covers everything from knife skills to seasoning, and much more.",
    image: "https://plus.unsplash.com/premium_photo-1664283229621-794dec382c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  
  {
    title: "Baking for Beginners",
    category: "cooking",
    level: "beginner",
    lessons: 12,
    time: 1.25,
    instructor: "Baker Emily",
    description:
      "Discover the art of baking with this beginner-friendly course. You'll learn how to bake delicious bread, cookies, and pastries from scratch.",
    image: "https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  
  {
    title: "Quick and Easy Weeknight Dinners",
    category: "cooking",
    level: "beginner",
    lessons: 8,
    time: 0.75,
    instructor: "Chef Sarah",
    description:
      "Master the art of preparing quick and tasty dinners for your family. This course focuses on recipes that can be made in under 30 minutes.",
    image: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlubmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  }
,
{
  title: "Advanced Italian Cuisine",
  category: "cooking",
  level: "intermediate",
  lessons: 20,
  time: 2.0,
  instructor: "Chef Maria",
  description:
    "Take your Italian cooking skills to the next level with this intermediate course. Learn to prepare authentic Italian dishes with a touch of sophistication.",
  image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Gourmet Dessert Creations",
  category: "cooking",
  level: "intermediate",
  lessons: 18,
  time: 1.75,
  instructor: "Pastry Chef Alex",
  description:
    "Explore the world of gourmet dessert making. This intermediate course will teach you how to create stunning and delicious desserts that will impress anyone.",
  image: "https://images.unsplash.com/photo-1616671285410-2a676a9a433d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z291cm1ldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Asian Fusion Cooking",
  category: "cooking",
  level: "intermediate",
  lessons: 16,
  time: 1.5,
  instructor: "Chef Sato",
  description:
    "Learn the art of combining Asian flavors and techniques to create unique fusion dishes. This intermediate course will expand your culinary horizons.",
  image: "https://images.unsplash.com/photo-1622643944007-450264a5f9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
}
,
{
  title: "Cooking Basics 101",
  category: "cooking",
  level: "any",
  lessons: 10,
  time: 1.0,
  instructor: "Chef Emily",
  description:
    "Whether you're a complete beginner or an experienced cook looking to brush up on the basics, this course is for you. Learn fundamental cooking skills that every home chef should know.",
  image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
},

{
  title: "World Cuisine Adventure",
  category: "cooking",
  level: "any",
  lessons: 25,
  time: 2.5,
  instructor: "Chef Carlos",
  description:
    "Embark on a culinary journey around the world with this diverse course. You'll explore and cook dishes from different cuisines, making it suitable for all skill levels.",
  image: "https://images.unsplash.com/photo-1661607873400-2512f682386f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ybGQlMjAlMjBjdWlzaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},

{
  title: "Healthy Eating Made Easy",
  category: "cooking",
  level: "any",
  lessons: 12,
  time: 1.25,
  instructor: "Nutritionist Sarah",
  description:
    "Discover how to prepare delicious and nutritious meals that promote a healthy lifestyle. This course is suitable for anyone interested in cooking for wellness.",
  image: "https://images.unsplash.com/photo-1528711545549-a46d7ce42574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhLnRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
}
,
  {
    title: "Graphic Design Principles",
    category: "graphic design",
    level: "any",
    lessons: 50,
    time: 89.2,
    instructor: "Sofia Patel",
    description:
      "Unleash your creativity with Sofia Patel in this comprehensive graphic design course. Whether you're a beginner or experienced designer, this course covers the principles of design, typography, and Adobe Creative Suite tools. Dive into the world of visual communication and bring your ideas to life.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Advanced Graphic Design",
    category: "graphic design",
    level: "advanced",
    lessons: 40,
    time: 95.5,
    instructor: "Oliver Davis",
    description:
      "Take your graphic design skills to the next level with Oliver Davis. This advanced course explores complex design concepts, advanced typography, and in-depth Adobe Creative Suite techniques. Perfect for experienced designers looking to refine their craft.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWR2YW5jZWQlMjBHcmFwaGljJTIwRGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Logo Design Mastery",
    category: "graphic design",
    level: "intermediate",
    lessons: 30,
    time: 75.0,
    instructor: "Elena Martinez",
    description:
      "Unlock the art of logo design with Elena Martinez. This intermediate-level course focuses on logo design principles, brand identity, and creating memorable logos. Whether you're an aspiring designer or business owner, this course will help you craft compelling logos.",
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "UI/UX Design Fundamentals",
    category: "graphic design",
    level: "any",
    lessons: 35,
    time: 80.5,
    instructor: "Lucas Miller",
    description:
      "Delve into the world of user interface and user experience design with Lucas Miller. This comprehensive course covers design principles, wireframing, prototyping, and user-centered design techniques. Whether you're a beginner or looking to enhance your design skills, this course is for you.",
    image: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VUklMkZVWCUyMERlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Typography in Design",
    category: "graphic design",
    level: "intermediate",
    lessons: 25,
    time: 60.0,
    instructor: "Sophie Turner",
    description:
      "Master the art of typography in graphic design with Sophie Turner. This intermediate-level course explores typography principles, typeface selection, and creating visually appealing text designs. Enhance your design projects with the power of typography.",
    image: "https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VHlwb2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Web Design Essentials",
    category: "graphic design",
    level: "beginner",
    lessons: 20,
    time: 45.5,
    instructor: "Emma Johnson",
    description:
      "Learn the essentials of web design with Emma Johnson. This beginner's course covers web layout, color theory, and responsive design techniques. Whether you're starting a career in web design or want to create your website, this course will get you started.",
    image: "https://plus.unsplash.com/premium_photo-1664304056762-87e9ecaf7bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2ViJTIwRGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "Introduction to Adobe Photoshop",
    "category": "graphic design",
    "level": "beginner",
    "lessons": 15,
    "time": 30.0,
    "instructor": "David Miller",
    "description": "Get started with graphic design using Adobe Photoshop with David Miller's beginner course. Learn the basics of photo editing, digital art, and graphic creation using this powerful software.",
    "image": "https://images.unsplash.com/photo-1560858275-933aa173847b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWRvYmUlMjBwaG90b3Nob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
{
  "title": "Typography and Layout Design",
  "category": "graphic design",
  "level": "beginner",
  "lessons": 12,
  "time": 22.5,
  "instructor": "Olivia Clark",
  "description": "Discover the art of typography and layout design in Olivia Clark's beginner course. Learn how to choose fonts, create appealing layouts, and design visually stunning documents and websites.",
  "image": "https://images.unsplash.com/photo-1497971476298-52cb42d7b5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFR5cG9ncmFwaHklMjBhbmQlMjBMYXlvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
{
  "title": "Logo Design Fundamentals",
  "category": "graphic design",
  "level": "beginner",
  "lessons": 18,
  "time": 32.0,
  "instructor": "Sophie Williams",
  "description": "Learn the fundamentals of logo design with Sophie Williams' beginner course. Explore logo concepts, symbolism, and design principles to create memorable and effective logos.",
  "image": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExvZ28lMjBEZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
{
  title: "Adobe Illustrator Basics",
  category: "Graphic Design",
  level: "beginner",
  lessons: 8,
  time: 0.5,
  instructor: "Design Masterclass",
  description:
    "Discover the essential tools and techniques of Adobe Illustrator. Learn to create vector graphics, logos, and illustrations with hands-on projects.",
  image: "https://images.unsplash.com/photo-1528711545549-a46d7ce42574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhLnRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
},
{
  title: "Fundamentals of Color Theory",
  category: "Graphic Design",
  level: "beginner",
  lessons: 6,
  time: 0.5,
  instructor: "Color Design Academy",
  description:
    "Master the basics of color theory and its application in design. Create visually appealing designs using the power of color psychology.",
  image: "https://images.unsplash.com/photo-1510511336377-1a9caa095849?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbiUyMGNvbG9yJTIwdGhlb3J5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
},
{
  title: "Introduction to Photoshop",
  category: "Graphic Design",
  level: "beginner",
  lessons: 12,
  time: 1.0,
  instructor: "Design Wizardry School",
  description:
    "Get started with Adobe Photoshop and learn how to retouch photos, manipulate images, and create stunning graphics for various purposes.",
  image: "https://images.unsplash.com/photo-1552645265-1d8c244be6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3Rvc2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
}
,
{
  title: "Advanced Adobe Illustrator Techniques",
  category: "Graphic Design",
  level: "intermediate",
  lessons: 10,
  time: 1.5,
  instructor: "Illustrator Pro",
  description:
    "Take your Adobe Illustrator skills to the next level with advanced techniques. Create complex vector artwork and stunning designs.",
  image: "https://images.unsplash.com/photo-1620674156044-52b714665d46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRvYmUlMjBpbGx1c3RyYXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
},
{
  title: "Typography and Layout Design Mastery",
  category: "Graphic Design",
  level: "intermediate",
  lessons: 8,
  time: 1.0,
  instructor: "Typography Studio",
  description:
    "Master the art of typography and layout design. Design visually appealing documents, posters, and web layouts with precision.",
  image: "https://images.unsplash.com/photo-1609605348579-3123e3d40eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHlwb2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
},
{
  title: "Advanced Photo Editing with Photoshop",
  category: "Graphic Design",
  level: "intermediate",
  lessons: 14,
  time: 1.5,
  instructor: "Photoshop Pro Academy",
  description:
    "Dive deeper into Adobe Photoshop with advanced photo editing techniques. Enhance images and create professional-level graphics.",
  image: "https://images.unsplash.com/photo-1621600411688-4be93cd68504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBlZGl0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
}
,

{
  title: "Introduction to Graphic Design",
  category: "Graphic Design",
  level: "any",
  lessons: 6,
  time: 1.0,
  instructor: "Design Basics",
  description:
    "Learn the fundamentals of graphic design, including color theory, typography, and layout. Perfect for beginners or those looking to refresh their skills.",
  image: "https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHlwb2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
},
{
  title: "Mastering Adobe Creative Suite",
  category: "Graphic Design",
  level: "any",
  lessons: 12,
  time: 2.0,
  instructor: "Creative Suite Pro",
  description:
    "Become a Creative Suite master. Learn Adobe Illustrator, Photoshop, and InDesign to create stunning graphics and layouts.",
  image: "https://plus.unsplash.com/premium_photo-1663047713751-e2be16a680d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzdGVyJTIwYWRvYmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
},
{
  title: "Graphic Design for Marketing Professionals",
  category: "Graphic Design",
  level: "any",
  lessons: 10,
  time: 1.5,
  instructor: "Marketing Graphics",
  description:
    "Tailor your graphic design skills for marketing. Create eye-catching advertisements, social media posts, and marketing materials.",
  image: "https://plus.unsplash.com/premium_photo-1682140928775-fb5e23bd510f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFzdGVyJTIwYWRvYmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
}
,
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
  },
  {
    title: "Investing for Beginners",
    category: "finance",
    level: "beginner",
    lessons: 30,
    time: 45.5,
    instructor: "Emily Rodriguez",
    description: "Start your journey in investing with Emily Rodriguez's comprehensive course. Learn the basics of stocks, bonds, and mutual funds. Grow your wealth and achieve financial freedom with smart investment strategies.",
    image: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW52ZXN0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "Personal Finance Basics",
    "category": "finance",
    "level": "beginner",
    "lessons": 20,
    "time": 35.0,
    "instructor": "John Smith",
    "description": "Get a solid foundation in personal finance with John Smith's beginner course. Learn budgeting, savings, debt management, and how to plan for your financial future.",
    "image": "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVyc29uYWwlMjBGaW5hbmNlJTIwQmFzaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
},
{
  "title": "Introduction to Stock Market",
  "category": "finance",
  "level": "beginner",
  "lessons": 15,
  "time": 25.5,
  "instructor": "Sophia Johnson",
  "description": "Start your journey in the world of stock markets with Sophia Johnson's beginner course. Learn the fundamentals of stocks, market analysis, and how to make informed investment decisions.",
  "image": "https://images.unsplash.com/photo-1612043273531-601d2cd4855e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEludHJvZHVjdGlvbiUyMHRvJTIwU3RvY2slMjBNYXJrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
  {
    title: "Advanced Tax Planning",
    category: "finance",
    level: "advanced",
    lessons: 42,
    time: 68.2,
    instructor: "John Anderson",
    description: "Master the intricacies of tax planning with John Anderson's advanced course. Minimize your tax liability legally and optimize your financial strategies. Become a tax expert and save more of your hard-earned money.",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWR2YW5jZWQlMjBUYXglMjBQbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Personal Finance Mastery",
    category: "finance",
    level: "intermediate",
    lessons: 60,
    time: 90.0,
    instructor: "Sophia Martinez",
    description: "Take your personal finance skills to the next level with Sophia Martinez's intermediate course. Learn about budgeting, investing, and retirement planning. Achieve financial security and financial peace of mind.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "Advanced Investment Strategies",
    "category": "finance",
    "level": "intermediate",
    "lessons": 45,
    "time": 75.5,
    "instructor": "Michael Brown",
    "description": "Elevate your investment skills with Michael Brown's intermediate course. Dive into advanced investment strategies, portfolio management, risk assessment, and financial analysis.",
    "image": "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWR2YW5jZWQlMjBJbnZlc3RtZW50JTIwU3RyYXRlZ2llc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
  "title": "Advanced Financial Planning",
  "category": "finance",
  "level": "intermediate",
  "lessons": 50,
  "time": 80.0,
  "instructor": "Jennifer Smith",
  "description": "Take your financial planning skills to the next level with Jennifer Smith's intermediate course. Explore advanced topics in retirement planning, tax strategies, estate planning, and wealth preservation.",
  "image": "https://images.unsplash.com/photo-1468254095679-bbcba94a7066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFkdmFuY2VkJTIwSW52ZXN0bWVudCUyMFN0cmF0ZWdpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
{
  "title": "Financial Analysis and Reporting",
  "category": "finance",
  "level": "intermediate",
  "lessons": 35,
  "time": 60.5,
  "instructor": "Daniel Lee",
  "description": "Enhance your financial analysis skills with Daniel Lee's intermediate course. Learn how to analyze financial statements, create comprehensive reports, and make data-driven financial decisions.",
  "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jaWFsJTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
},
  {
    title: "Cryptocurrency Fundamentals",
    category: "finance",
    level: "any",
    lessons: 25,
    time: 35.5,
    instructor: "David Chang",
    description: "Dive into the world of cryptocurrency with David Chang's comprehensive course. Understand blockchain technology, trade cryptocurrencies, and explore the future of finance. Stay ahead in the digital economy.",
    image: "https://plus.unsplash.com/premium_photo-1663931932716-3086b87f2ed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Retirement Planning 101",
    category: "finance",
    level: "beginner",
    lessons: 20,
    time: 28.5,
    instructor: "Karen Williams",
    description: "Prepare for a comfortable retirement with Karen Williams' beginner course. Learn about retirement accounts, investment strategies, and financial planning for your golden years. Secure your financial future today.",
    image: "https://plus.unsplash.com/premium_photo-1667509334553-d289509e472a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmV0aXJlbWVudCUyMHBsYW5uaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
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
    title: "Journalism and News Writing",
    category: "writing",
    level: "beginner",
    lessons: 28,
    time: 42.5,
    instructor: "Sarah Mitchell",
    description: "Become a skilled journalist with Sarah Mitchell's beginner course. Learn the principles of news writing, conducting interviews, and reporting. Uncover the art of storytelling in journalism.",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Sm91cm5hbGlzbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "Creative Writing Basics",
    "category": "writing",
    "level": "beginner",
    "lessons": 20,
    "time": 30.0,
    "instructor": "Emily Johnson",
    "description": "Discover your inner writer with Emily Johnson's beginner course. Learn the fundamentals of creative writing, including character development, plot structure, and writing techniques.",
    "image": "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3JlYXRpdmUlMjBXcml0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
},
{
  "title": "Technical Writing Essentials",
  "category": "writing",
  "level": "beginner",
  "lessons": 15,
  "time": 20.5,
  "instructor": "David Smith",
  "description": "Learn the basics of technical writing with David Smith's beginner course. Gain the skills needed to write clear and effective technical documents, user manuals, and reports.",
  "image": "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRlY2huaWNhbCUyMFdyaXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
},
{
  "title": "Copywriting for Beginners",
  "category": "writing",
  "level": "beginner",
  "lessons": 12,
  "time": 18.0,
  "instructor": "Jessica Turner",
  "description": "Start your journey into the world of persuasive writing with Jessica Turner's beginner course. Learn how to craft compelling copy for advertisements, websites, and marketing materials.",
  "image": "https://plus.unsplash.com/premium_photo-1664478167557-6030501b3a69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29weXdyaXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
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
    title: "Copywriting for Marketing",
    category: "writing",
    level: "intermediate",
    lessons: 32,
    time: 48.0,
    instructor: "Anna Clarke",
    description: "Boost your marketing skills with Anna Clarke's intermediate course in copywriting. Learn persuasive writing techniques for advertising and content creation. Drive sales and engagement with compelling copy.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvcHl3cml0aW5nJTIwZm9yJTIwTWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "French 101",
    category: "language",
    level: "beginner",
    lessons: 17,
    time: 74.8,
    instructor: "Miguel Hernandez",
    description:
      "Bonjour! Learn the romantic language of French with instructor Miguel Hernandez. This beginner's course covers essential vocabulary, grammar, and conversational skills. Whether you're planning a trip to France or simply want to embrace a new language, this course will have you saying 'Oui' in no time.",
    image: "https://images.unsplash.com/photo-1559456296-8eb1a8747a66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    title: "Italian 101",
    category: "language",
    level: "beginner",
    lessons: 19,
    time: 88.3,
    instructor: "Giuseppe Russo",
    description:
      "Ciao! Learn the elegant Italian language with instructor Giuseppe Russo. This beginner's course covers essential vocabulary, grammar, and conversational skills. Whether you're dreaming of a trip to Italy or want to appreciate Italian art and culture, this course is your first step.",
    image: "https://images.unsplash.com/photo-1584143257251-9fcd5b0632eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbGlhbiUyMGxhbmd1YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
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
    title: "Spanish for Travelers",
    category: "language",
    level: "any",
    lessons: 35,
    time: 23.7,
    instructor: "Olivia Nguyen",
    description:
      "Prepare for your next adventure with Spanish for Travelers, taught by Olivia Nguyen. This course covers essential phrases, travel vocabulary, and cultural insights to enhance your travel experience in Spanish-speaking countries. Whether you're a globetrotter or planning a vacation, this course is your passport to effective communication.",
    image: "https://images.unsplash.com/photo-1489945052260-4f21c52268b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhbmlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Spanish Intermediate",
    category: "language",
    level: "intermediate",
    lessons: 25,
    time: 120.5,
    instructor: "Isabel Garcia",
    description:
      "¡Bienvenidos! Take your Spanish skills to the next level with instructor Isabel Garcia. This intermediate course builds upon your existing knowledge, focusing on advanced vocabulary, complex grammar structures, and in-depth conversation practice. Whether you want to master Spanish for business or personal growth, this course is tailored for intermediate learners.",
    image: "https://images.unsplash.com/photo-1519734004356-f588de029302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYW5pc2glMjBsYW5ndWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "title": "French Intermediate Conversation",
    "category": "language",
    "level": "intermediate",
    "lessons": 30,
    "time": 150.0,
    "instructor": "Claire Martin",
    "description": "Enhance your French language skills with Claire Martin's intermediate conversation course. Practice speaking, expand your vocabulary, and improve your fluency in French. Perfect for those aiming to be proficient in French conversation.",
    "image": "https://images.unsplash.com/photo-1493930559728-4f998c41a03c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJlbmNoJTIwSW50ZXJtZWRpYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
},
{
  "title": "Intermediate Mandarin Chinese",
  "category": "language",
  "level": "intermediate",
  "lessons": 20,
  "time": 105.5,
  "instructor": "Wei Zhang",
  "description": "Take your Mandarin Chinese skills to the next level with Wei Zhang's intermediate course. Focus on advanced grammar, reading comprehension, and culturally relevant topics to become a confident Chinese speaker.",
  "image": "https://images.unsplash.com/photo-1585493665258-bc53a9728ec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZGFyaW4lMjBjaGluZXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
},
{
  "title": "Intermediate Italian Grammar",
  "category": "language",
  "level": "intermediate",
  "lessons": 18,
  "time": 95.0,
  "instructor": "Luca Rossi",
  "description": "Refine your Italian language skills with Luca Rossi's intermediate grammar course. Dive into complex grammatical concepts, perfect your writing, and become proficient in Italian grammar and composition.",
  "image": "https://images.unsplash.com/photo-1548994423-77b5f16a22cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SXRhbGlhbiUyMGxhbmd1YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
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
  },
];

module.exports = courses;
  