import htmlImage from '../assets/html-icon.png';
import cssImage from '../assets/css-icon.png';
import jsImage from '../assets/js-icon.png';
import tsImage from '../assets/ts-icon.png';
import gitImage from '../assets/git-icon.png';
import reactImage from '../assets/react-icon.png';

export const Knowledge = () => {
  return (
    <main className='w-full flex flex-col m-1 p-4 border-2 border-blue-400 rounded-lg items-center'>
      <h2 className='mb-7 mt-5 text-blue-700 font-bold'>Meus conhecimentos e currículo:</h2>
      <ul>
        <li className='mb-1'>Conhecimentos básicos em Linux e Redes de Computadores;</li>
        <li className='mb-1'>Conhecimento básico em manutenção/arquitetura e hardware de computadores;</li>
        <li className='mb-1'>Conhecimentos básicos no framework Node.js;</li>
        <li className='mb-1'>Conhecimentos básicos na linguaguem Java;</li>
        <li className='mb-1'>Conhecimentos intermediários no Pacote Office (Word, PowerPoint e Excel);</li>
        <li className='mb-1'>Conhecimento intermediário em Windows; </li>
        <li className='mb-1'>Conhecimento intermediário em Gerenciamento de Pacotes (Npm/Yarn);</li>
        <li className='mb-1'>Conhecimentos intermediários no framework ReactJS;</li>
        <li className='mb-1'>Conhecimentos intermediários em Inglês e Espanhol.</li>
      </ul >
      <h2 className='mb-7 mt-7 text-blue-700 font-bold'>Certificados:</h2>
      <ul>
        <li className='mb-1 hover:text-blue-700'><a target="_blank" href='https://alunos.b7web.com.br/media/certificates/certjpg'>Certificado de conclusão do curso TypeScript na plataforma B7Web;</a></li >
        <li className='mb-1 hover:text-blue-700'><a target="_blank" href='https://alunos.b7web.com.br/media/certificates/certificado_9335885.jpg'>Certificado de conclusão do curso HTML5 e CSS3 na plataforma B7Web;</a></li >
        <li className='mb-1 hover:text-blue-700'><a target="_blank" href='https://alunos.b7web.com.br/media/certificates/certificado_6803870.jpg'>Certificado de conclusão do curso JavaScript na plataforma B7Web;</a></li >
        <li className='mb-1 hover:text-blue-700'><a target="_blank" href='https://alunos.b7web.com.br/media/certificates/c88.jpg'>Certificado de conclusão do curso Git/GitHub na plataforma B7Web;</a></li >
        <li className='mb-1 hover:text-blue-700'><a target="_blank" href='https://alunos.b7web.com.br/media/certificates/c08.jpg'>Certificado de conclusão do curso Bootstrap 4 na plataforma B7Web;</a></li >
        <li className='mb-1 hover:text-blue-700'><a target="_blank" href='https://cursos.alura.com.br/user/nateflorencio/fullCertificate/a9ff9c878fe0d4b6'>Certificado geral de conclusões de cursos em Gestão e DevOps na Alura.</a></li >
      </ul>
      <div className='mt-5'>
        <img className="w-40 h-40 p-4" src={htmlImage} />
        <img className="w-40 h-40 p-4" src={cssImage} />
        <img className="w-40 h-40 p-4" src={jsImage} />
        <img className="w-40 h-40 p-4" src={tsImage} />
        <img className="w-40 h-40 p-4" src={gitImage} />
        <img className="w-40 h-40 p-4" src={reactImage} />
      </div>
    </main >
  );
}

export default Knowledge;