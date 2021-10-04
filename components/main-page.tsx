import Image from 'next/image';
import styles from '../styles/MainPage.module.css'

const goTo = ()=>{
    console.log('res:goTo', );
}
export const MainPage = () => (
    <div className={styles.MainPage}>
        <Image
            src="/home-page.png" alt="MainPage" width={850} height={1190}
            useMap="#workmap"
        />
        <map name="workmap">
            <area className={styles.link} shape="rect" coords="570,52,850,82" alt="Computer" onClick={goTo} />
            <area className={styles.link} shape="rect" coords="50,340,260,440" alt="Computer" onClick={goTo} />
            <area className={styles.link} shape="rect" coords="50,470,260,630" alt="Computer" onClick={goTo} />
            <area className={styles.link} shape="rect" coords="570,320,740,443" alt="Computer" onClick={goTo} />
            <area className={styles.link} shape="rect" coords="540,762,786,800" alt="Computer" onClick={goTo} />
            {/*<area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />*/}
            {/*<area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm" />*/}
        </map>
    </div>
);
