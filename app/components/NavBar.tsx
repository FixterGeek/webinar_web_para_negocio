import Button from './Button';

export default function NavBar() {
  const navigate = (id) => {
    const node = document.querySelector(`#${id}`);
    node?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='sticky top-0 bg-white border-b-2 border-b-slate-100 max-h-[80px] flex max-w-3xl mx-auto py-2 items-center gap-2'>
      <img className='max-w-[60px]' src='/assets/podcast.gif' alt='logo' />
      <h2 className='text-lg font-bold'>Podcasters.com.mx</h2>
      <div className='ml-auto flex items-baseline gap-4 font-bold text-lg'>
        <button
          className='hover:bg-slate-200 transition-all p-2'
          onClick={() => navigate('servicios')}
        >
          Servicio
        </button>
        <button
          className='hover:bg-slate-200 transition-all p-2'
          onClick={() => navigate('contacto')}
        >
          Oferta
        </button>
        <Button onClick={() => navigate('contacto')} />
      </div>
    </nav>
  );
}
