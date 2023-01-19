export default function Pros() {
  return (
    <section
      id='servicios'
      className='text-center px-4 mx-auto max-w-3xl py-12'
      style={{
        scrollMargin: 80,
      }}
    >
      <h2 className='text-3xl font-bold mb-4'>¿Por qué debes preferirnos?</h2>
      <p className='text-sm max-w-lg mx-auto'>
        Nuestros servicios están pensados para brindarte seguridad, calidad y
        buen servicio a diferencia de otros, además de tener costos eficientes.
      </p>
      <article className='flex md:flex-row flex-col mt-20 gap-4'>
        <div className='bg-pink-100 p-6 rounded-lg grow'>
          <h3 className='font-medium text-lg mb-4 text-left'>
            Servicios tradicionales 😞
          </h3>
          <ul className='flex flex-col gap-4'>
            <Item>Poco atención al detalle</Item>
            <Item>Ya no inviertas horas preocupandote</Item>
            <Item>Ya no inviertas horas preocupandote</Item>
          </ul>
          <img className='w-full pt-12' src={'/assets/1.png'} alt='bad' />
        </div>

        <div className='bg-green-100 p-6 rounded-lg grow'>
          <h3 className='font-medium text-lg mb-4 text-left'>
            Nuestros servicios 😍
          </h3>
          <ul className='flex flex-col gap-4'>
            <Item variant='positive'>Poco atención al detalle</Item>
            <Item variant='positive'>Ya no inviertas horas preocupandote</Item>
            <Item variant='positive'>Ya no inviertas horas preocupandote</Item>
          </ul>
          <img
            className='w-full pt-12'
            src={'/assets/production-artist.png'}
            alt='bad'
          />
        </div>
      </article>
    </section>
  );
}

const Item = (props: any) => {
  return (
    <li className='flex items-center gap-2 text-sm text-gray-800 text-left'>
      <span className='text-[10px]'>
        {props.variant === 'positive' ? '✅' : '❌'}
      </span>
      {props.children}
    </li>
  );
};
