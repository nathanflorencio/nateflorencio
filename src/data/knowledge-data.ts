import { KnowledgeData } from '../../types/knowledge-data'
import cssImage from '../assets/css.png'
import htmlImage from '../assets/html.png'
import jsImage from '../assets/js.png'

export const knowledgeData: KnowledgeData[] = [
  {
    id: 1,
    title: 'HTML5',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de HTML5 na B7Web.',
    image: [
      {
        key: 1,
        image: htmlImage,
        alt: 'HTML Logo',
      },
    ],
  },
  {
    id: 2,
    title: 'CSS3',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de CSS3 na B7Web.',
    image: [
      {
        key: 1,
        image: cssImage,
        alt: 'CSS Logo',
      },
    ],
  },
  {
    id: 3,
    title: 'JavaScript',
    subtitle: 'B7Web',
    description: 'Certificado de conclusão de curso de JavaScript na B7Web.',
    image: [
      {
        key: 1,
        image: jsImage,
        alt: 'JS Logo',
      },
    ],
  },
]
