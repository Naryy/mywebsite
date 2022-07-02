import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Pagination, Navigation,Autoplay} from 'swiper'
SwiperCore.use([Pagination, Navigation, Autoplay])

const images = [
  '/pic4.JPG',
  '/pic6.JPG',
  '/pic7.JPG',
  '/pic1.JPG',
  '/pic2.jpg',
  '/pic3.jpg',
  '/pic5.JPG',
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrap}>
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
                      width={640}
                      height={400}
                      alt="main-image"
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className={styles.side}>
            <ul>
              <li className = {styles.listtitle}>Nary</li>
              <li className = {styles.listcontent}><Link href="./website"><a>Website</a></Link></li>
              <li className = {styles.listcontent}><Link href="./picture"><a>Picture</a></Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
