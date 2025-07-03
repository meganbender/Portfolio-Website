import styles from './Contact.module.css'

export function Contact() {
    return (
        <div id="contact" className={styles.contact}>
            <h1 className={styles.header}>Get in Touch with Me!</h1>
            <p className={styles.subheader}> <span style={{fontStyle: 'italic'}}>email:</span> <a href="mailto:meg.bender@outlook.com">meg.bender@outlook.com</a></p>
            <p className={styles.subheader}><span style={{fontStyle: 'italic'}}>socials <span style={{fontSize: '0.8em'}}>(adding icons next, just need it here as a placeholder):</span></span>
                <a href="https://github.com/meganbender" target="_blank" rel="noopener noreferrer"> Github </a>
                <a href="https://www.linkedin.com/in/megan-bender-8400322b2/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
            </p>
        </div>   
    );
}