import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import InstagramIcon from '/public/IG_Glyph_Fill.png'
import SwiperCore, {Pagination, Navigation,Autoplay} from 'swiper'
SwiperCore.use([Pagination, Navigation, Autoplay])

const images = [
  '/pic4.jpg',
  '/pic6.jpg',
  '/pic7.jpg',
  '/pic1.jpg',
  '/pic2.jpg',
  '/pic3.jpg',
  '/pic5.jpg',
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nary</title>
        <meta name="description" content="portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrap}>
        <div className={styles.side}>
          <div className={styles.sidewrap}>
            <div>
              <h1 className = {styles.sidetitle}><Link href="/">Nary</Link></h1>
            </div>
            <div>
              <p className = {styles.sidecontent}><Link href="./website"><a>Website</a></Link></p>
            </div>
            <div>
              <p className = {styles.sidecontent}><Link href="./picture"><a>Picture</a></Link></p>
            </div>
            <div className={styles.instagramIcon}>
              <p><Link href="https://www.instagram.com/y.nary/"><a target="_blank"><Image src={InstagramIcon} alt="logo" className={styles.instaicon} width="30px" height="30px"></Image></a></Link></p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <Swiper
              slidesPerView={"auto"} //一度に表示するスライドの数
              pagination={{
                clickable: true,
              }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}>
              {images.map((src: string, index: number) => {
                return (
                  <SwiperSlide key={`${index}`}>
                    <Image
                      src={src}
                      layout="responsive"
                      objectFit="cover"
                      width={700}
                      height={500}
                      alt="メインイメージ画像"
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className={styles.mobileonly}>
              <div>
                <p className = {styles.sidecontent}><Link href="./website"><a>Website</a></Link></p>
              </div>
              <div>
                <p className = {styles.sidecontent}><Link href="./picture"><a>Picture</a></Link></p>
              </div>
            </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Home
