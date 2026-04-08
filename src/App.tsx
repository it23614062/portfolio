import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      
      {/* Portfolio Background Patterns */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div 
          className="absolute inset-0 opacity-100 animate-fadeIn"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%237c6bff' stroke-width='1.5'%3E%3Canimate attributeName='stroke-opacity' values='0.05;0.25;0.05' dur='6s' repeatCount='indefinite'/%3E%3Cpath d='M28 66L0 50L0 16 28 0l28 16v34z'/%3E%3Cpath d='M28 100V66m0-66v34m28 16l-28 16-28-16'/%3E%3C/g%3E%3Ccircle cx='28' cy='66' r='2.5' fill='%237c6bff'%3E%3Canimate attributeName='fill-opacity' values='0.1;0.9;0.1' dur='3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='0' cy='50' r='2.5' fill='%237c6bff'%3E%3Canimate attributeName='fill-opacity' values='0;1;0' dur='5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='56' cy='50' r='2.5' fill='%237c6bff'%3E%3Canimate attributeName='fill-opacity' values='0.2;0.8;0.2' dur='4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='28' cy='0' r='2.5' fill='%237c6bff'%3E%3Canimate attributeName='fill-opacity' values='0;0.7;0' dur='7s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='28' cy='100' r='2.5' fill='%237c6bff'%3E%3Canimate attributeName='fill-opacity' values='0;0.7;0' dur='7s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '84px 150px',
            maskImage: 'radial-gradient(circle at center, transparent 30%, black 90%)',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 30%, black 90%)'
          }}
        />
      </div>
      <main className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
