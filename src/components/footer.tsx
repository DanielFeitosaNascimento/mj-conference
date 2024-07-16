import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';
import Logo from './logo';

const Footer = () => {
  return (
    <footer className="bg-background w-full py-8">
      <div className="container mx-auto w-full px-4 items-center justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col text-center md[768]:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
              <a href="https://mevam.org.br/palavras" className="hover:underline">Palavras</a>
              <a href="https://mevam.org.br/noticias" className="hover:underline">Notícias</a>
              <a href="https://mevam.org.br/planos-de-leitura" className="hover:underline">Planos de leitura</a>
              <a href="https://mevam.org.br/para-baixar" className="hover:underline">Downloads</a>
            </div>
            <div className="flex flex-col text-center md[768]:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <a href="https://mevam.org.br/ao-vivo" className="hover:underline ">Ao vivo</a>
              <a href="https://mevam.org.br/eventos" className="hover:underline">Eventos</a>
              <a href="https://mevam.org.br/assinaturas" className="hover:underline">Assinaturas</a>
              <a href="https://mevam.org.br/pedido-de-oracao" className="hover:underline">Pedidos de oração</a>
            </div>
            <div className="flex flex-col text-center md[768]:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <a href="https://mevam.org.br/contribua" className="hover:underline">Contribua</a>
              <a href="https://mevam.org.br/fale-conosco" className="hover:underline">Fale conosco</a>
              <a href="https://mevam.org.br/onde-nos-encontrar" className="hover:underline">Onde nos encontrar</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4 md:[768]: flex-col">
          <div className='flex flex-row space-x-4 justify-center'>
            <a href="https://www.facebook.com/mevamoficial" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/mevam.global/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.youtube.com/channel/UCm3Q12xYTWR7Fv1ihgWDRuw" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <FaYoutube size={24} />
            </a>
            <a href="https://open.spotify.com/artist/2XtUg3BJDe64wd7BYLr55N?si=p3n6-0gSSaqZyA8OT6jouQ" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <FaSpotify size={24} />
            </a>
          </div>
          <div className='flex mt-2 justify-center'>
            <p>
              ©️ MJ-conference ©️ 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
