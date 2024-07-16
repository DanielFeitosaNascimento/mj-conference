import Footer from "@/components/footer";
import Form from "@/components/form";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="container mx-auto p-4 mt-12">
          <h1 className="text-2xl font-bold mb-4">Formulário MJ - Sala profética</h1>
          <Form />
        </div>
      </main>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
