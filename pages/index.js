import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Typing War Game</title>
        <meta name="description" content="Typing War Game - Increase your typing speed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>Typing War Game</code>
          </p>
          <div>
            <a
              href="https://github.com/cehsonu100/typing-war-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github URL{' '}
            </a>
          </div>
        </div>

        <div className={styles.center}>
         
         {/* Your center typing game code goes here */}

        </div>

      </main>
    </>
  )
}
