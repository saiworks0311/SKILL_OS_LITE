const backend = {
  title: "Backend Developer Roadmap",
  progress: 20,

  modules: [
    {
      title: "Programming Language",
      completed: true,
      lessons: [
        "Java Basics",
        "OOP",
        "Collections",
        "Exception Handling"
      ],
      resources: [
        {
          type: "🎥 YouTube",
          title: "Java Full Course - Bro Code",
          link: "https://youtu.be/xk4_1vDrzzo"
        },
        {
          type: "📖 Documentation",
          title: "Oracle Java Docs",
          link: "https://docs.oracle.com/en/java/"
        }
      ]
    },

    {
      title: "Spring Boot",
      completed: false,
      lessons: [
        "Spring Core",
        "Spring Boot",
        "REST APIs",
        "JPA",
        "Security"
      ],
      resources: [
        {
          type: "🎥 YouTube",
          title: "Spring Boot Course",
          link: "https://youtu.be/9SGDpanrc8U"
        },
        {
          type: "📖 Documentation",
          title: "Spring Docs",
          link: "https://spring.io/projects/spring-boot"
        }
      ]
    },

    {
      title: "Databases",
      completed: false,
      lessons: [
        "SQL",
        "MySQL",
        "MongoDB"
      ],
      resources: [
        {
          type: "📖 Documentation",
          title: "MySQL Docs",
          link: "https://dev.mysql.com/doc/"
        }
      ]
    }
  ]
};

export default backend;