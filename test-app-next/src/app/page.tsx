import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="margin:0 padding:0 color:#333 font-[family-name:var(--font-geist-sans)]">
      {/* test */}
      <header>
        <h1>Welcome to Your Dashboard</h1>
        <p>Track your rewards and profile information here.</p>
      </header>
      

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Navbar />

      </main>
      <Footer />
    </div>
  );
}
