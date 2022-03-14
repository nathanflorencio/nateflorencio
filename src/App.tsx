import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainRoutes } from './routes/MainRoutes';

const App = () => {
  return (
    <div className="w-full h-full bg-blue-200 flex flex-col items-center">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;