import Card from './components/Card'

const App = () => {
  const employees = [
  {
    "id": 1,
    "name": "Emily Carter",
    "designation": "Frontend Developer",
    "brief": "Builds responsive UI using modern JS frameworks and tools daily.",
    "salary_lpa": 18,
    "experience_years": 4,
    "projects_done": 12,
    "profile_pic": "./emp1.jpg"
  },
  {
    "id": 2,
    "name": "Sophia Müller",
    "designation": "Backend Developer",
    "brief": "Develops APIs and scalable backend systems for web apps daily.",
    "salary_lpa": 22,
    "experience_years": 6,
    "projects_done": 20,
    "profile_pic": "./emp2.jpg"
  },
  {
    "id": 3,
    "name": "Isabella Rossi",
    "designation": "Full Stack Developer",
    "brief": "Handles full stack apps with clean architecture and design flow.",
    "salary_lpa": 25,
    "experience_years": 7,
    "projects_done": 28,
    "profile_pic": "./emp3.jpg"
  },
  {
    "id": 4,
    "name": "Ava Thompson",
    "designation": "React Developer",
    "brief": "Creates fast React apps with clean UI and efficient logic flow.",
    "salary_lpa": 17,
    "experience_years": 3,
    "projects_done": 10,
    "profile_pic": "./emp4.jpg"
  },
  {
    "id": 5,
    "name": "Mia Dubois",
    "designation": "Python Developer",
    "brief": "Builds Python apps for automation, backend, and data processing.",
    "salary_lpa": 20,
    "experience_years": 5,
    "projects_done": 16,
    "profile_pic": "./emp5.jpg"
  },
  {
    "id": 6,
    "name": "Charlotte Smith",
    "designation": "DevOps Engineer",
    "brief": "Manages CI/CD pipelines and cloud infrastructure efficiently daily.",
    "salary_lpa": 24,
    "experience_years": 6,
    "projects_done": 18,
    "profile_pic": "./emp6.jpg"
  },
  {
    "id": 7,
    "name": "Amelia Johnson",
    "designation": "Java Developer",
    "brief": "Develops enterprise Java apps with strong OOP principles applied.",
    "salary_lpa": 19,
    "experience_years": 4,
    "projects_done": 14,
    "profile_pic": "./emp7.jpg"
  },
  {
    "id": 8,
    "name": "Olivia Novak",
    "designation": "Node.js Developer",
    "brief": "Builds Node.js services with scalable and efficient architecture.",
    "salary_lpa": 21,
    "experience_years": 5,
    "projects_done": 17,
    "profile_pic": "./emp8.jpg"
  }
];

  return (
    <main>
      {
        employees.map((emp, index) => (
          <Card key={index} employee={emp} />
        ))
      }
    </main>

  )
}

export default App