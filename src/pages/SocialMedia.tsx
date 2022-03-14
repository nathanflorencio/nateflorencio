import wpImage from '../assets/wp-icon.png';
import fbImage from '../assets/fb-icon.png';
import instaImage from '../assets/insta-icon.png';
import lkdnImage from '../assets/lkdn-icon.png';
import gmailImage from '../assets/gmail-icon.png';
import githubImage from '../assets/github-icon.png';

export const SocialMedia = () => {
  return (
    <main className='w-full m-1 border-2 border-blue-400 rounded-lg flex flex-col items-center p-5'>
      <h2 className="text-2xl text-blue-700 font-bold m-3">Minhas Redes Sociais</h2>
      <div className='flex flex-col items-center p-5'>
        <img className="w-40" src={wpImage} />
        <a className='mt-3 hover:text-blue-700' target="_blank" href='https://api.whatsapp.com/send?phone=5511992136050&text='>WhatsApp</a>
      </div>
      <div className='flex flex-col items-center p-5'>
        <img className="w-40" src={fbImage} />
        <a className='mt-3 hover:text-blue-700' target="_blank" href='https://www.facebook.com/nathan.florencio'>Facebook</a>
      </div>
      <div className='flex flex-col items-center p-5'>
        <img className="w-40" src={instaImage} />
        <a className='mt-3 hover:text-blue-700' target="_blank" href='https://www.instagram.com/nathan.florencio/'>Instagram</a>
      </div>
      <div className='flex flex-col items-center p-5'>
        <img className="w-40" src={lkdnImage} />
        <a className='mt-3 hover:text-blue-700' target="_blank" href='https://www.linkedin.com/in/nathan-florencio-b36a7b16b/'>LinkedIn</a>
      </div>
      <div className='flex flex-col items-center p-5'>
        <img className="w-40" src={gmailImage} />
        <a className='mt-3 hover:text-blue-700' target="_blank" href='https://mail.google.com/mail/u/0/#inbox'>Gmail</a>
      </div>
      <div className='flex flex-col items-center p-5'>
        <img className="w-40" src={githubImage} />
        <a className='mt-3 hover:text-blue-700' target="_blank" href='https://github.com/nathanflorencio'>GitHub</a>
      </div>
    </main >
  );
}