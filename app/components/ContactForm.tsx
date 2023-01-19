import Button from './Button';

export default function ContactForm() {
  return (
    <div
      style={{
        background: 'url(assets/bg.png)',
      }}
      className='text-white rounded-md overflow-hidden'
    >
      <section
        id='contacto'
        className='text-center px-4 mx-auto max-w-3xl py-12'
      >
        <h2 className='text-3xl font-bold mb-4'>¿Cómo podemos ayudarte?</h2>
        <p className='text-sm max-w-lg mx-auto'>
          Nuestros servicios están pensados para brindarte seguridad, calidad y
          buen servicio a diferencia de otros, además de tener costos
          eficientes.
        </p>
        <form action='' className='py-12 items-start'>
          <TextField
            placeholder='tu@orreo.com'
            type='email'
            name='email'
            label='Tu correo electrónico:'
          />
          <TextField
            placeholder='Francisca'
            type='text'
            name='name'
            label='Tu nombre:'
          />
          <TextField
            placeholder='Escribe tu mensaje'
            type='textarea'
            name='message'
            label='Tu mensaje:'
          />
          <div className='py-4' />
          <Button />
        </form>
      </section>
    </div>
  );
}

const TextField = ({ type, name, label, placeholder }) => (
  <>
    <label htmlFor='email' className='block text-xl py-2'>
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        className='border rounded-md px-4 py-2 text-xl w-[50%]'
        placeholder={placeholder}
        id={name}
        name={name}
        rows={5}
      />
    ) : (
      <input
        className='border rounded-md px-4 py-2 text-xl w-[50%]'
        placeholder={placeholder}
        type={name}
        id={name}
        name={name}
      />
    )}
  </>
);
