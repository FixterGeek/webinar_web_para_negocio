export default function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='shadow-md shadow-blue-200 px-6 py-2 rounded-full font-bold text-white bg-blue-500 mb-2 hover:bg-blue-600 active:scale-95 transition-all'
    >
      ¡Agenda una llamada!
    </button>
  );
}
