import Image from 'next/image'
import styles from '@/components/Card/card.module.scss'
import Link from 'next/link'

const Card = () => {
  return (
    <Link href="/game/roulette">
      <div className={styles.wrap}>
          <Image
              className={styles.img}
              src="/roulette-wheel.png"
              width={200}
              height={200}
              alt="Google"
          />
          <div className={styles.btn}>Играть</div>
      </div>
    </Link>
  )
}

export default Card