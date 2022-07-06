import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
/*import pic4 from '/public/pic4.jpg'
import pic6 from '/public/pic6.jpg'
import pic7 from '/public/pic7.jpg'
import pic1 from '/public/pic1.jpg'*/
import pic2 from '/public/pic2.jpg'
import pic3 from '/public/pic3.jpg'
//import pic5 from '/public/pic5.jpg'
import pic8 from '/public/pic8.jpg'
import pic9 from '/public/pic9.jpg'
import pic10 from '/public/pic10.jpg'
import pic11 from '/public/pic11.jpg'
import pic12 from '/public/pic12.jpg'
import pic13 from '/public/pic13.jpg'
import pic14 from '/public/pic14.jpg'
import pic15 from '/public/pic15.jpg'
import pic16 from '/public/pic16.jpg'
import pic17 from '/public/pic17.jpg'
import pic18 from '/public/pic18.jpg'
import InstagramIcon from '/public/IG_Glyph_Fill.png'
const picture : NextPage = () => {
    return (
      <div className={styles.picturePage}>
        <Head>
          <title>Nary - Picture</title>
          <meta name="description" content="portfolio site" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.picside}>
          <div className={styles.picsidewrap}>
            <div>
              <h1 className = {styles.picsidetitle}><Link href="/">Nary</Link></h1>
            </div>
            <div>
              <p className = {styles.picsidecontent}><Link href="./website"><a>Website</a></Link></p>
            </div>
            <div>
              <p className = {styles.picsidecontent}><Link href="./picture"><a>Picture</a></Link></p>
            </div>
            <div className={styles.picinstagramIcon}>
              <p><Link href="https://www.instagram.com/y.nary/"><a target="_blank"><Image src={InstagramIcon} alt="logo" className={styles.instaicon} width="30px" height="30px"></Image></a></Link></p>
            </div>
          </div>
        </div>

        <div className={styles.piccont}>
          <div className={styles.picwrap}>
            {/* <Image src={pic1} alt="aa" objectFit="contain" className={styles.img}/> */}
            <div className={styles.imgtitle}>
              <p className={styles.imgtitle}>pic1</p>
            </div>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic2} alt="aa" objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic3} alt="aa" objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          {/* <div className={styles.picwrap}>
            <Image src={pic4} alt="aa" objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic5} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic6} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic7} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div> */}
          <div className={styles.picwrap}>
            <Image src={pic8} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic9} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic10} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic11} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic12} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic13} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic14} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic15} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic16} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic17} alt="aa"   objectFit="contain" className={styles.img}/>
          <p>pic1</p>
          </div>
          <div className={styles.picwrap}>
            <Image src={pic18} alt="aa"   objectFit="contain" className={styles.img}/>
            <p>pic1</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default picture