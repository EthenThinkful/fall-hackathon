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
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyJTIwcGxheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
    image: "https://plus.unsplash.com/premium_photo-1681389283554-cb91e80953ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGlhbm8lMjBwbGF5aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
    title: "Mastering Food Photography",
    category: "photography",
    level: "expert",
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
  