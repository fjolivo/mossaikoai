import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Header'
import { Toaster } from '@/components/ui/toaster'

const generateRandomPolygon = () => {
  const now = new Date();
  const seed = now.getMilliseconds();
  const points = [];
  for (let i = 0; i < 20; i++) {
    points.push(`${(Math.random() * seed) % 100}% ${(Math.random() * seed) % 100}%`);
  }
  return `polygon(${points.join(', ')})`;
};


const Layout = ({ children }: { children: React.ReactNode }) => {
  const clipPath1 = generateRandomPolygon();
  const clipPath2 = generateRandomPolygon();

  return (
    <main className="root">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ffd3bb] opacity-80 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: clipPath1,
          }}
        />
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fff9f4] via-purple-500 to-pink-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: clipPath2,
          }}
        />
      </div>
      

      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      
      <Toaster />
    </main>
  )
}

export default Layout 