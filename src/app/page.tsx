import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { GoDownload } from "react-icons/go";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="p-10 flex min-h-screen w-screen max-w-4xl flex-col items-center justify-between">
      <nav className="flex justify-end w-full py-5">
        <div className="flex space-x-4 justify-between w-full">
          <a href="/parth_manhas_resume.pdf" target="_blank" className="flex justify-center items-center space-x-1 hover:bg-blue-700/50 p-1 rounded hover:cursor-pointer">
            <p>Resume</p>
            <GoDownload />
          </a>
          <div className="flex space-x-2">
            <a href="https://github.com/parthmanhas" target="_blank">
              <FaGithub className="hover:bg-blue-700/50 p-1 rounded hover:cursor-pointer" size={30} />
            </a>
            <a href="https://www.linkedin.com/in/parthmanhas/" target="_blank">
              <FaLinkedin className="hover:bg-blue-700/50 p-1 rounded hover:cursor-pointer" size={30} />
            </a>
            <a href="https://www.frontendmentor.io/profile/parthmanhas" target="_blank">
              <SiFrontendmentor className="hover:bg-blue-700/50 p-1 rounded hover:cursor-pointer" size={30} />
            </a>
          </div>
        </div>
      </nav>
      <div className="flex">
        <p className="text-justify">Hello! I am Parth, a frontend heavy developer overall 4 years of experience working on full stack
          application in banking environment including designing, developing, and deploying software solutions using a range of modern frontend and backend
          technologies, including Angular, React, Nextjs, Prisma, TypeScript, Node.js, and SQL, Java.</p>
      </div>
      <hr className=" border-white/50 w-full my-10" />
      {/* Projects section */}
      <div className="w-full">
        <h1 className="text-center mb-3 font-semibold text-2xl underline underline-offset-4">Projects</h1>
        <div className="flex flex-wrap space-x-2 justify-evenly">
          <a href="https://marketplace.visualstudio.com/items?itemName=parthmanhas.responsive-viewer" target="_blank">
            <div className="max-w-[300px] text-center p-5 hover:bg-blue-700/20 hover:cursor-pointer">
              <Image className="w-[300px] h-[150px] object-cover" src="/responsive-viewer.png" alt="" width={300} height={300} />
              <p className="font-semibold mt-2">Repsonsive Viewer <span className="text-yellow-700">(2177 installs)</span></p>
              <small className="text-white/60">OpenSource VS Code Extension</small>
              <p>Stack: Angular, TailwindCSS, VS Code webview UI Toolkit</p>
            </div>
          </a>
          <a href="https://beautiful-fenglisu-74d90d.netlify.app/" target="_blank">
            <div className="max-w-[300px] text-center p-5 hover:bg-blue-700/20 hover:cursor-pointer">
              <Image className="w-[300px] h-[150px] object-cover" src="/kanban-task.png" alt="" width={300} height={300} />
              <p className="font-semibold mt-2">Kanban Board</p>
              <small className="text-white/60">Frontendmentor Challenge, UI Only</small>
              <p>Stack: Angular, TailwindCSS, NgRx</p>
            </div>
          </a>
          <a href="https://luxury-conkies-443a7a.netlify.app" target="_blank">
            <div className="max-w-[300px] text-center p-5 hover:bg-blue-700/20 hover:cursor-pointer">
              <Image className="w-[300px] h-[150px] object-cover" src="/invoice-app.png" alt="" width={300} height={300} />
              <p className="font-semibold mt-2">Invoices</p>
              <small className="text-white/60">Frontendmentor Challenge, UI Only</small>
              <p>Stack: Angular, RxJS, TailwindCSS</p>
            </div>
          </a>
          <a href="https://frontend-mentor-monorepo.vercel.app" target="_blank">
            <div className="max-w-[300px] text-center p-5 hover:bg-blue-700/20 hover:cursor-pointer">
              <Image className="w-[300px] h-[150px] object-cover" src="/feedback.png" alt="" width={300} height={300} />
              <p className="font-semibold mt-2">Feedback</p>
              <small className="text-white/60">Frontendmentor Challenge, Fullstack</small>
              <p>Stack: Nextjs, TailwindCSS, Prisma, PostgreSQL, Auth.js</p>
            </div>
          </a>
        </div>
      </div>
      <hr className=" border-white/50 w-full my-10" />
      <ContactForm />
    </main>
  );
}
