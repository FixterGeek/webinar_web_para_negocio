import Button from './Button';

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, hsla(23,0%,86%,0.45) 0px, hsla(23,0%,86%,0.45) 1px,transparent 1px, transparent 36px),repeating-linear-gradient(90deg, hsla(23,0%,86%,0.45) 0px, hsla(23,0%,86%,0.45) 1px,transparent 1px, transparent 36px),linear-gradient(90deg, hsl(334,2%,100%),hsl(334,2%,100%))',
      }}
    >
      <section className='text-left px-4 md:py-20 py-12 mx-auto max-w-3xl flex items-center gap-4'>
        <div>
          <p className='font-medium uppercase tracking-wider text-xs text-gray-800 mb-4 underline decoration-blue-500'>
            Grabación profesional
          </p>
          <h2 className='font-bold text-3xl mb-8'>
            Nosotros grabamos tu podcast. Tú ocupate de tu{' '}
            <span className='text-blue-500'>creatividad.</span>
          </h2>
          <p className='text-gray-500 text-sm font-medium mb-2'>
            Más de 1000 clientes satisfechos. Deja esto en nuestras manos
            profesionales.
          </p>
          <div className='flex items-center'>
            <img src='/assets/people1.webp' alt='people' />{' '}
            <p className='text-xs text-gray-500'>
              <span className='flex font-bold text-black'>
                {' '}
                ⭐️⭐️⭐️⭐️⭐️ 5.0
              </span>
              <span> De 3,000+ reviews</span>
            </p>
          </div>
          <Button />
          <img src='/assets/payment.webp' alt='secure payment' />
        </div>

        <div>
          <video
            autoPlay
            muted
            loop
            controlsList='nodownload'
            className='max-w-sm aspect-video rounded-3xl'
            src='/assets/video.mp4'
          />
        </div>
      </section>
    </div>
  );
}
