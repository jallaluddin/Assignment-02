import Header from './components/Header.';
import About from './components/About';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <main style={{ padding: '1rem' }}>
        <p>Welcome to my post! Diving into Next.js 15—can't wait to unlock the next level of web development with its powerful new features!.</p>
      </main>
    </div>
  );
}
