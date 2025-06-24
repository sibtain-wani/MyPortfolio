import Header from "@/components/Header";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Profile />
      </main>
      <footer className="">
        Footer
      </footer>
    </div>
  );
}
