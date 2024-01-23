import Footer from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import "@/components/UI/Wrapper/wrap.scss"

export default function Wrapper({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="wrapper">
            <Header/>
            <div className="main">
              {children}
            </div>
            <Footer/>
        </div>
    )
  } 