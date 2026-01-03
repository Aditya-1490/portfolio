import type {
  Project,
  Experience,
  Education,
  Achievement,
  Skill,
  ContactInfo,
  PersonalInfo,
} from "./types"

/* =========================
   PERSONAL INFO
========================= */

export const personalInfo: PersonalInfo = {
  name: "Aditya Giri",
  title: "Data Analyst | Machine Learning & NLP Enthusiast",
  bio: "B.Tech undergraduate at IIT Jodhpur with hands-on experience in data analytics, machine learning, and NLP. Passionate about extracting insights from data and building intelligent, end-to-end analytical systems.",
  location: "Jodhpur, India",
  education: "B.Tech, Material Science & Engineering — IIT Jodhpur",
  interests: [
    "Data Analytics",
    "Machine Learning",
    "Natural Language Processing",
    "Recommender Systems",
    "Data Visualization",
  ],
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
}

/* =========================
   ABOUT SECTION
========================= */

export const aboutSections = [
  "I am a B.Tech undergraduate at IIT Jodhpur with a strong interest in data analytics, machine learning, and natural language processing. I enjoy working with real-world datasets and building models that translate raw data into meaningful insights.",
  "My projects span NLP-based text classification, content-based recommendation systems, computer vision applications, and BI dashboards, with a strong emphasis on data preprocessing, feature engineering, and evaluation.",
  "I am actively seeking opportunities as a Data Analyst, Data Scientist, or Machine Learning Engineer where I can apply my analytical thinking, programming skills, and curiosity to solve impactful business and product problems.",
]

/* =========================
   EXPERIENCE (STUDENT)
========================= */

export const experiences: Experience[] = []

/* =========================
   EDUCATION
========================= */

export const educations: Education[] = [
  {
    id: "iit-jodhpur",
    institution: "Indian Institute of Technology, Jodhpur",
    location: "Jodhpur, India",
    degree: "B.Tech in Material Science and Engineering",
    startDate: "2022",
    endDate: "Present",
    duration: "2022 – Present",
    gpa: "8.09",
  },
  {
    id: "class-12",
    institution: "Shri Rajendra Giri Memorial Academy",
    location: "Gola Gokaranath, Lakhimpur Kheri",
    degree: "Class XII (CBSE)",
    startDate: "2021",
    endDate: "2022",
    duration: "2021 – 2022",
    gpa: "94.8%",
  },
  {
    id: "class-10",
    institution: "City Montessori School, Mahanagar",
    location: "Lucknow, India",
    degree: "Class X (ICSE)",
    startDate: "2019",
    endDate: "2020",
    duration: "2019 – 2020",
    gpa: "96.2%",
  },
]

/* =========================
   PROJECTS
========================= */

export const projects: Project[] = [
  {
    id: "sms-spam-classification",
    title: "SMS Spam Classification System",
    description:
      "Built an NLP-based SMS spam classifier using TF-IDF and Multinomial Naive Bayes. Achieved 95%+ precision and deployed the model as an interactive Streamlit web application for real-time predictions.",
    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "Naive Bayes",
      "Scikit-learn",
      "Streamlit",
    ],
    githubUrl: "https://github.com/Aditya-1490/sms-spam-classification",
    liveUrl: "https://sms-spamchecker.streamlit.app/",
    image: "/projects/sms-spam.png",
  },
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation System",
    description:
      "Developed a content-based movie recommendation system using TF-IDF vectorization and cosine similarity by combining genres, keywords, cast, crew, and movie overviews.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NLP",
      "Cosine Similarity",
    ],
    githubUrl: "https://github.com/Aditya-1490/movie_recommendation_system",
    liveUrl: "https://movie-recommend-123.streamlit.app/",
    image: "/projects/movie-recommender.png",
  },
  {
    id: "online-courses-powerbi",
    title: "Online Courses Analysis using Power BI",
    description:
      "Performed end-to-end analysis of online course data using Power BI. Built interactive dashboards to analyze ratings, instructors, course difficulty, and learner engagement for actionable insights.",
    technologies: ["Power BI", "DAX", "Data Modeling", "Data Visualization"],
    githubUrl: "https://github.com/Aditya-1490/online-courses-powerbi",
    image: "/projects/powerbi-courses.png",
  },
  {
    id: "human-activity-recognition",
    title: "Smartphone-based Human Activity Recognition",
    description:
      "Analyzed smartphone sensor data using EDA, PCA, and LDA. Trained multiple ML models and achieved 95.16% accuracy using Linear Kernel SVM.",
    technologies: [
      "Python",
      "EDA",
      "PCA",
      "LDA",
      "SVM",
      "Machine Learning",
    ],
    githubUrl: "https://github.com/Aditya-1490/Human_Activity_Recognition",
    image: "/projects/har.png",
  },
  {
    id: "football-cv-analysis",
    title: "Football Game Analysis using Computer Vision",
    description:
      "Built a football analytics system using YOLO (Ultralytics) and OpenCV to track players and ball, compute speed, distance covered, and possession with <5% error using perspective transformation.",
    technologies: [
      "Computer Vision",
      "YOLO",
      "OpenCV",
      "CNN",
      "K-Means Clustering",
    ],
    githubUrl: "https://github.com/Aditya-1490/football_analysis",
    image: "/projects/football-cv.png",
  },
]

/* =========================
   ACHIEVEMENTS
========================= */

export const achievements: Achievement[] = [
  {
    id: "sports-achievement",
    title: "3rd Position – Inter Hostel Sports Event",
    organization: "IIT Jodhpur",
    description:
      "Secured 3rd position in inter-hostel sports competition, demonstrating teamwork, discipline, and competitive spirit.",
  },
  {
    id: "jee-advanced-rank",
    title: "JEE Advanced Rank 20133",
    organization: "IIT Council",
    description:
      "Secured AIR 20133 in JEE Advanced, one of the most competitive engineering entrance examinations in India.",
  },
  {
    id: "jee-main-rank",
    title: "JEE Main Rank 22610",
    organization: "National Testing Agency (NTA)",
    description:
      "Secured AIR 22610 in JEE Main, qualifying for admission into premier engineering institutes in India.",
  },
]

/* =========================
   SKILLS
========================= */

export const technicalSkills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "C/C++", "SQL", "JavaScript"],
  },
  {
    category: "Data & Machine Learning",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "EDA",
      "Feature Engineering",
      "Machine Learning",
      "NLP",
    ],
  },
  {
    category: "Visualization & BI",
    items: ["Power BI", "Matplotlib", "Seaborn"],
  },
  {
    category: "Tools & Technologies",
    items: [
      "Git & GitHub",
      "Apache Kafka",
      "Streamlit",
      "Jupyter Notebook",
      "VS Code",
      "Linux",
    ],
  },
]

export const softSkills = [
  {
    title: "Analytical Thinking",
    description:
      "Strong ability to analyze data, identify patterns, and translate insights into actionable conclusions.",
  },
  {
    title: "Problem Solving",
    description:
      "Comfortable breaking down complex problems into structured, solvable components.",
  },
  {
    title: "Communication",
    description:
      "Able to clearly explain technical concepts to both technical and non-technical audiences.",
  },
  {
    title: "Learning Mindset",
    description:
      "Highly motivated to continuously learn new tools, frameworks, and analytical techniques.",
  },
]

/* =========================
   CONTACT INFO
========================= */

export const contactInfo: ContactInfo = {
  email: "adityagiri1490@gmail.com",
  phone: "+91 7390020927",
  location: "Jodhpur, India",
  socialLinks: {
    github: "https://github.com/Aditya-1490",
    linkedin: "https://www.linkedin.com/in/aditya-giri-434ab11b8/",
  },
}
