import meImage from '../assets/me.jpg';
import { Text } from '../helpers/Text';

export const Home = () => {
  return (
    <main className='md:flex md:flex-row'>
      <img src={meImage} className="m-1 rounded-lg md:w-2/4" />
      <div className='m-1'>
        <h2 className='mb-7 mt-7 p-2 flex justify-center text-2xl font-bold text-gray-800 border-4 rounded-lg border-blue-400'>Introdução: Quem sou eu?</h2>
        <Text />
      </div>
    </main>
  );
}
