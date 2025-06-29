import styles from './HeroSection.module.css';
import heroImage from '../../Assets/heroImage.png';

/**
 * HeroSection component renders a styled section containing 
 * a title with varying opacity levels and an image. It serves 
 * as the hero section of the portfolio page.
 */

export const HeroSection = () => {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.layerStack}>
                <div className={styles.portfolioAbove}>
                    <h1 className={styles.heroTitle}>PORTFOLIO</h1>
                    <h1 className={styles.heroTitle} style={{opacity: 0.75}}>PORTFOLIO</h1>
                </div >

                <div className={styles.portfolioBelow}>
                    <h1 className={styles.heroTitle} style={{opacity: 0.50}}>PORTFOLIO</h1>
                </div>
                
                <div className={styles.imgTextContainer}>
                    <p className={styles.heroSubtitle}>
                        <span style={{fontWeight: 300}}>Hi</span>
                        <span style={{fontWeight: 100}}>, I'm </span>
                        <span style={{fontWeight: 300, color: `var(--color-display)`}}>Megan</span>
                        <span style={{fontWeight: 100}}>. I'm a </span><br></br>
                        <span style={{fontWeight: 300, fontStyle: 'italic'}}>Software Developer</span>
                        <span style={{fontWeight: 100}}>.</span>
                    </p>
                    <img src={heroImage} type="image/png" alt="Megan and Dogs" className={styles.image}/>
                </div>

                
            </div>
        </section>
    );      
}