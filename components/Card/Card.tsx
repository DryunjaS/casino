import Image from 'next/image'
import styles from '@/components/Card/card.module.scss'
import Link from 'next/link'

const Card = () => {
  return (
    <Link href="/game/roulette">
      <div className={styles.wrap}>
          <Image
              src="/jackpot.png"
              width={100}
              height={150}
              alt="Google"
          />
          <button className={styles.btn}>
            Играть
          </button>
      </div>
    </Link>
  )
}

export default Card