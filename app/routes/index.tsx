import ContactForm from '~/components/ContactForm';
import Hero from '~/components/Hero';
import NavBar from '~/components/NavBar';
import Pros from '~/components/Pros';

export default function Index() {
  return (
    <main className='pb-12'>
      <NavBar />
      <Hero />
      <Pros />
      <ContactForm />
    </main>
  );
}
