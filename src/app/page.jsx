import Image from "next/image";
import Header from "@/miscomponentes/header";
import Footer from "@/miscomponentes/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mt-15 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FAFAFA]">
              Information you need during on-call emergencies
            </h1>
            <p className="text-lg md:text-xl mb-10 text-[#D9D9D9] max-w-2xl">
              Quickly link new on-call tickets to similar past incidents and
              their solutions. All directly in Slack the moment an incident
              happens.
            </p>
            <div className="mt-5 mb-15">
              <button>
                <a
                  href=""
                  className="bg-white text-black px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition-colors"
                >
                  Get started
                </a>
              </button>
            </div>
            <div className="flex justify-center mt-8">
              <Image
                src="/hero_image.png"
                alt="Hero Image"
                width={900}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FAFAFA] mt-24">
              Quick solutions, less stress
            </h1>
          <div className="flex flex-col items-start justify-center mt-1 text-left px-4 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
              <div className="p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#FAFAFA]">
                  Fix emergencies fast
                </h3>
                <p className="text-[#D9D9D9]">
                  Save 20-30 minutes per on-call ticket - no <br /> more
                  searching for relevant issues and <br />
                  runbooks
                </p>
              </div>
              <div className="p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#FAFAFA]">
                  Universally compatible
                </h3>
                <p className="text-[#D9D9D9]">
                  Works with PagerDuty, Jira, or custom <br /> Slack
                  alerts—Pandem integrates with any <br /> system
                </p>
              </div>
              <div className="p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#FAFAFA]">
                  Secure for your org
                </h3>
                <p className="text-[#D9D9D9]">
                  We keep your data safe by taking top <br />
                  security measures.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
