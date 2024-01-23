import '@/app/main.scss'
import Card from '@/components/Card/Card'
import Maney from '@/components/UI/Maney/Maney'
import Wrapper from '@/components/UI/Wrapper/Wrapper'

export default function Home() {
  return (
      <Wrapper>
        <div className="main">
          <div className="main__wrapp">
            <Maney/>
            <Card/>
          </div>
        </div>
      </Wrapper>
  )
}
