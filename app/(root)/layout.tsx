import MobileNav from '@/components/shared/MobileNav'
import Header from '@/components/shared/Header'
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

      <Header />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>

      <Toaster />
      <div className="absolute inset-0 -z-20 bg-orange-20 " aria-hidden="true"></div> 

      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-transparent to-[#ffd4bc] opacity-80 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: clipPath1,
          }}
        />
        <div
          className="relative left-[calc(50%+3rem)] w-[200vw] h-[50vh] -translate-x-1/2 bg-gradient-to-tr from-[#ffd4bc] to-transparent opacity-100 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: clipPath2,
          }}
        />
      </div>
    </main>
  )
}

export default Layout 