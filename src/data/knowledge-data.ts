import { KnowledgeData } from '../../types/knowledge-data'
import bdImage from '../assets/bd.png'
import bsImage from '../assets/bs.png'
import cssImage from '../assets/css.png'
import dockerImage from '../assets/docker.png'
import dockerComposeImage from '../assets/dockerCompose.png'
import figmaImage from '../assets/figma.png'
import gitImage from '../assets/git.png'
import gitHubImage from '../assets/github.png'
import htmlImage from '../assets/html.png'
import jsImage from '../assets/js.png'
import kubernetesImage from '../assets/kubernetes.png'
import linuxImage from '../assets/linux.png'
import managerImage from '../assets/manager.png'
import nestImage from '../assets/nest.png'
import nextImage from '../assets/next.png'
import nodeImage from '../assets/node.png'
import reactImage from '../assets/react.png'
import sassImage from '../assets/sass.png'
import scrumImage from '../assets/scrum.png'
import tailwindImage from '../assets/tailwind.png'
import tsImage from '../assets/ts.png'
import uxImage from '../assets/ux.png'

export const knowledgeData: KnowledgeData[] = [
  {
    id: 1,
    title: 'HTML5',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de HTML5 na B7Web.',
    image: {
      key: 1,
      image: htmlImage,
      alt: 'HTML Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_9335885.jpg',
  },
  {
    id: 2,
    title: 'CSS3',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de CSS3 na B7Web.',
    image: {
      key: 1,
      image: cssImage,
      alt: 'CSS Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_9335885.jpg',
  },
  {
    id: 3,
    title: 'SASS',
    subtitle: 'Alura',
    description: 'Certificado de conclusão de curso de Sass na B7Web.',
    image: {
      key: 1,
      image: sassImage,
      alt: 'Sass Logo',
    },
    link: 'https://cursos.alura.com.br/user/nateflorencio/course/sass-css-sintaticamente-espetacular/certificate',
  },
  {
    id: 4,
    title: 'Bootstrap 4',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de Boostrap 4 na B7Web.',
    image: {
      key: 1,
      image: bsImage,
      alt: 'Boostrap Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_4981408.jpg',
  },
  {
    id: 5,
    title: 'JavaScript',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de JavaScript na B7Web.',
    image: {
      key: 1,
      image: jsImage,
      alt: 'JS Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_6803870.jpg',
  },
  {
    id: 6,
    title: 'TypeScript',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de TypeScript na B7Web.',
    image: {
      key: 1,
      image: tsImage,
      alt: 'TS Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_5480561.jpg',
  },
  {
    id: 7,
    title: 'ReactJS',
    subtitle: 'Rocketseat',
    description: 'Certificado de conclusão de curso de ReactJS na Rocketseat.',
    image: {
      key: 1,
      image: reactImage,
      alt: 'React Logo',
    },
    link: 'https://app.rocketseat.com.br/certificates/b5e3e471-36bb-4899-8e75-50b9823c4b63',
  },
  {
    id: 8,
    title: 'TailwindCSS',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de TailwindCSS na B7Web.',
    image: {
      key: 1,
      image: tailwindImage,
      alt: 'Tailwind Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_1280249.jpg',
  },
  {
    id: 9,
    title: 'NextJS',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de NextJS na B7Web.',
    image: {
      key: 1,
      image: nextImage,
      alt: 'Next Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_4657982.jpg',
  },
  {
    id: 10,
    title: 'NodeJS',
    subtitle: 'Rocketseat',
    description: 'Certificado de conclusão de curso de NodeJS na Rocketseat.',
    image: {
      key: 1,
      image: nodeImage,
      alt: 'Node Logo',
    },
    link: 'https://app.rocketseat.com.br/certificates/e0495e44-1269-4431-a59d-4797d18a8c54',
  },
  {
    id: 11,
    title: 'Git',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de Git na B7Web.',
    image: {
      key: 1,
      image: gitImage,
      alt: 'Git Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_5041488.jpg',
  },
  {
    id: 12,
    title: 'GitHub',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de GitHub na B7Web.',
    image: {
      key: 1,
      image: gitHubImage,
      alt: 'GitHub Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_5041488.jpg',
  },
  {
    id: 13,
    title: 'NestJS',
    subtitle: 'Conhecimentos',
    description:
      'Sólidos conhecimentos no framework backend NestJS pela Rocketseat.',
    image: {
      key: 1,
      image: nestImage,
      alt: 'NestJS Logo',
    },
  },
  {
    id: 14,
    title: 'Docker',
    subtitle: 'Alura',
    description: 'Certificado de conclusão de curso de Docker na B7Web.',
    image: {
      key: 1,
      image: dockerImage,
      alt: 'Docker Logo',
    },
    link: 'https://cursos.alura.com.br/user/nateflorencio/course/docker-criando-gerenciando-containers/certificate',
  },
  {
    id: 15,
    title: 'Docker Compose',
    subtitle: 'Alura',
    description:
      'Certificado de conclusão de curso de Docker Compose na B7Web.',
    image: {
      key: 1,
      image: dockerComposeImage,
      alt: 'Docker Compose Logo',
    },
    link: 'https://cursos.alura.com.br/user/nateflorencio/course/docker-criando-gerenciando-containers/certificate',
  },
  {
    id: 16,
    title: 'Kubernetes (K8S)',
    subtitle: 'Alura',
    description: 'Certificado de conclusão de curso de Kubernetes na Alura.',
    image: {
      key: 1,
      image: kubernetesImage,
      alt: 'Kubernetes Logo',
    },
    link: 'https://cursos.alura.com.br/user/nateflorencio/course/kubernetes-deployments-volumes-escalabilidade/certificate',
  },
  {
    id: 17,
    title: 'Linux',
    subtitle: 'Alura',
    description: 'Certificado de conclusão de curso de Linux Básico na Alura.',
    image: {
      key: 1,
      image: linuxImage,
      alt: 'Linux Logo',
    },
    link: 'https://cursos.alura.com.br/user/nateflorencio/course/linux-ubuntu-processos/certificate',
  },
  {
    id: 18,
    title: 'Banco de Dados',
    subtitle: 'B7Web',
    description:
      'Certificado de conclusão de curso de Banco de Dados na B7Web (MySQL, MariaDB, PostgreSQL, SQLite).',
    image: {
      key: 1,
      image: bdImage,
      alt: 'BD Logo',
    },
    link: 'https://alunos.b7web.com.br/media/certificates/certificado_5374023.jpg',
  },
  {
    id: 19,
    title: 'Design UI/UX',
    subtitle: 'Conhecimentos',
    description: 'Sólidos conhecimentos de design UI & UX.',
    image: {
      key: 1,
      image: uxImage,
      alt: 'UX Logo',
    },
  },
  {
    id: 20,
    title: 'Figma',
    subtitle: 'Alura',
    description: 'Certificado de conclusão de curso de Figma na Alura.',
    image: {
      key: 1,
      image: figmaImage,
      alt: 'Figma Logo',
    },
    link: 'https://cursos.alura.com.br/user/nateflorencio/course/figma-design-visual-site-mobile/certificate',
  },
  {
    id: 21,
    title: 'Scrum e Metodologias Ágeis',
    subtitle: 'Alura',
    description:
      'Certificado de conclusão de formação em Business Agility na Alura',
    image: {
      key: 1,
      image: scrumImage,
      alt: 'Scrum Logo',
    },
    link: 'https://cursos.alura.com.br/user/nateflorencio/degree-business-agility-v1486-1486/certificate',
  },
  {
    id: 21,
    title: 'Gestão de Projetos',
    subtitle: 'Alura',
    description: 'Certificado de conclusão de formação em Gestão Ágil na Alura',
    image: {
      key: 1,
      image: managerImage,
      alt: 'Agility Logo',
    },
    link: 'https://cursos.alura.com.br/user/nateflorencio/degree-gerente-agil-v150159-150159/certificate',
  },
]
