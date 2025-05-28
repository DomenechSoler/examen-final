import Image from "next/image";
import Header from "@/miscomponentes/header";
import Footer from "@/miscomponentes/footer";
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mt-15 text-center px-4">
            <h1 className="mt-30 text-4xl md:text-5xl font-bold mb-6 text-[#FAFAFA]">
              Information you need during on-call emergencies
            </h1>
            <p className="text-lg md:text-xl mb-10 text-[#D9D9D9] max-w-2xl">
              Quickly link new on-call tickets to similar past incidents and
              their solutions. All directly in Slack the moment an incident
              happens.
            </p>
            <div className="mt-5 mb-15">
              <Button variant="outline" size="lg" className="px-7 py-3 text-xl flex items-center font-semibold gap-2 bg-white text-black border-black hover:bg-gray-200 transition-colors">
                Get started <ChevronRight className="text-black" />
              </Button>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FAFAFA] mt-35">
            Quick solutions, less stress
          </h1>
          <div className="flex flex-col items-start justify-center mt-1 text-left px-4 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
              <div className="p-6 rounded-lg shadow-lg">
                <div className="flex justify-start">
                  <div className="inline-block border-2 border-[#18181b] p-3 rounded-lg mb-4">
                    <img src="/Frame.png" alt="" className="rounded-full" />
                  </div>
                </div>
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
                <div className="flex justify-start">
                  <div className="inline-block border-2 border-[#18181b] p-3 rounded-lg mb-4">
                    <img src="/Frame1.png" alt="" className="rounded-full" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#FAFAFA]">
                  Universally compatible
                </h3>
                <p className="text-[#D9D9D9]">
                  Works with PagerDuty, Jira, or custom <br /> Slack
                  alerts—Pandem integrates with any <br /> system
                </p>
              </div>
              <div className="p-6 rounded-lg shadow-lg">
                <div className="flex justify-start">
                  <div className="inline-block border-2 border-[#18181b] p-3 rounded-lg mb-4">
                    <img src="/Frame2.png" alt="" className="rounded-full" />
                  </div>
                </div>
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

          <div className="flex flex-col items-center justify-center mt-35 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FAFAFA]">
              Instant setup, no custom <br />code
            </h1>
            <p className="text-lg md:text-xl mb-10 text-[#D9D9D9] max-w-2xl">
              Invite the bot, pick a channel, and you're set—no custom code needed, and no vendor lock-in.
            </p>
            <div className="flex justify-center mt-8">
              <Image
                src="/hero_image.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>



          <div className="flex flex-col items-center justify-center mt-35 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FAFAFA]">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl mb-10 text-[#D9D9D9] max-w-2xl">
              Request a demo, or hop on a call.
            </p>
            <div className="mb-15">
              <Button variant="outline" size="lg" className="px-7 py-3 text-xl flex items-center font-semibold gap-2 bg-white text-black border-black hover:bg-gray-200 transition-colors">
                Get started <ChevronRight className="text-black" />
              </Button>
            </div>
          </div>

        </main>
      </div>
      <Footer />
    </>
  );
}
