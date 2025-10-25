import JavaLogo from '../assests/icons/java.png';
import SpringBootLogo from '../assests/icons/springboot.png';
import ReactLogo from '../assests/icons/react.png';
import ReduxLogo from '../assests/icons/redux.png';
import JSLogo from '../assests/icons/javascript.png';
import HTMLLogo from '../assests/icons/html.png';
import CSSLogo from '../assests/icons/css.png';
import TailwindLogo from '../assests/icons/tailwind.png';
import MUILogo from '../assests/icons/mui.png';
import MySQLLogo from '../assests/icons/mysql.png';
import KubernetesLogo from '../assests/icons/kubernetes.png';
import DockerLogo from '../assests/icons/docker.png';
import AzureLogo from '../assests/icons/azure.png';
import GitLogo from '../assests/icons/git.png';
import MavenLogo from '../assests/icons/maven.png';
import RedisLogo from '../assests/icons/redis.png';
import NginxLogo from '../assests/icons/nginx.png';
import PostmanLogo from '../assests/icons/postman.png';
import KafkaLogo from '../assests/icons/kafka.png';
import STSLogo from '../assests/icons/sts.jpg';
import SQLLogo from '../assests/icons/sql.png';
import MicroservicesLogo from '../assests/icons/microservices.jpg';
import CICDLogo from '../assests/icons/cicd.png';
import RESTAPILogo from '../assests/icons/restfulapi.png';
import SpringSecurityLogo from '../assests/icons/springsecurity.png'


const skillsData = [
  {
    category: "Backend",
    items: [
      { name: "Java", logo: JavaLogo },
      { name: "Spring Boot", logo: SpringBootLogo },
      { name: "Spring Security", logo: SpringSecurityLogo },
      { name: "RESTful APIs", logo : RESTAPILogo },
      { name: "Microservices" , logo : MicroservicesLogo },
      { name: "Kafka" ,  logo : KafkaLogo },
      { name: "Redis", logo: RedisLogo },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", logo: ReactLogo },
      { name: "Redux", logo: ReduxLogo },
      { name: "JavaScript (ES6+)", logo: JSLogo },
      { name: "HTML", logo: HTMLLogo },
      { name: "CSS", logo: CSSLogo },
      { name: "Tailwind CSS", logo: TailwindLogo },
      { name: "Material UI", logo: MUILogo },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", logo: MySQLLogo },
      { name: "SQL", logo : SQLLogo },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Kubernetes", logo: KubernetesLogo },
      { name: "Docker", logo: DockerLogo },
      { name: "NGINX" , logo : NginxLogo },
      { name: "Microsoft Azure", logo: AzureLogo },
      { name: "CI/CD" , logo : CICDLogo },
    ],
  },
  {
    category: "Tools & Version Control",
    items: [
      { name: "Git", logo: GitLogo },
      { name: "Maven", logo: MavenLogo },
      { name: "STS" ,logo : STSLogo},
      { name: "Postman", logo: PostmanLogo },
    ],
  },
  {
    category: "Practices",
    items: [
      { name: "Agile/Scrum" },
      { name: "Unit Testing (JUnit)" },
      { name: "Performance Optimization" },
      { name: "Data Structures & Algorithms" },
    ],
  },
];

export default skillsData;