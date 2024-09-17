import { LuImport } from "react-icons/lu"
import benson from "../assets/benson.webp"
import banish from "../assets/banishh.png"

const Hero = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-16 overflow-hidden text-[12vw] leading-none font-semibold uppercase">Banish </h1>
            <div className="mt-8">
                <a href="/Benson-Langford.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-300 "
                >
                    <span>Resume.pdf</span>
                    <LuImport className="ml-2"/>
                </a>
            </div>
            <div className="w-full">
                {/* <img src={banish} alt="" className="mt-8 h-96 w-full object-cover" /> */}
                <h1 className="mt-16 overflow-hidden text-[8vw] leading-none uppercase text-center">FRONT-END DEVELOPER <br />UI / UX DESIGNER</h1>
            </div>
        </div>
    </section>
  )
}

export default Hero
