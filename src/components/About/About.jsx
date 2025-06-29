import styles from './About.module.css'

export const About = () => {
    return (
        <div id='about'className={styles.aboutcontainer}>
            <p className={styles.mainHeader}>ABOUT ME</p>

            {/* Who I am section */}
            <div className={styles.whoWhatOutsideCont}>
                <p className={styles.secondaryHeader}>Who I Am</p>
                <div className={styles.body}>
                    <p>
                        I am an early-career Software Developer, who recently graduated with a B.S. in Computer Science with a focus
                        in Software Engineering and a B.A. dual major in Mathematics and Psychology. The conglomeration of these degrees 
                        have allowed me to bring a unique perspective when approaching software development. Allowing me to think more 
                        critically about how people interact with technology.
                    </p>
                    <br></br>
                    <p>
                        Tuthfully, I was slightly terrified of the computer world when I started. If you would have told me 10 years ago 
                        that I became a Software Developer I would have laughed, but then I would have said that makes a lot of sense. I 
                        have always been interested in how do things work, why do they work, and how could they be better. With that said
                        once I found the world of tech, there was no going back. I absolutely love seeing a concept or mock up come to life;
                        something that is made to genuinely help or bring joy to the users.
                    </p>
                    <br></br>
                    <p>
                        I am a detailed-oriented, curious, and collaborative individual. I thrive in roles that challenge me to grow and 
                        push the boundaries of what I know. I am committed to supporting accessibility an inclusivity in our tech, the 
                        beauty in simplicity, and to creating open-source softwawre and I am dedicated to lifelong learning.
                    </p>
                </div>
            </div>

            {/* What I do */}
            <div className={styles.whoWhatOutsideCont}>
                <p className={styles.secondaryHeader}>What I Do</p>
                <div className={styles.body}>
                    <p>
                        At the moment, I am focused on front-end and iOS development, with a growing experience in full-stack web applications
                        and collaborative API design. My approach is grounded in process; I always begin with research, understanding user needs,
                        wire-framing in Figma, and mapping out thoughtful interactions before writing a single line of code.
                    </p>
                    <br></br>
                    <p>
                        I bring ideas tyo life usding tools like React, Swift, and Node.js. You cna find mroe information on my Projects Page!
                        I care deeply about clean, accessible UI and building digital experiences that feel  intuitive, and well crafted from start to finish.
            
                    </p>
                </div>
            </div>

            {/* Outside of Tech */}
            <div className={styles.whoWhatOutsideCont}>
                <p className={styles.secondaryHeader}>Outside Tech</p>
                <div className={styles.body}>
                    <p>
                        In my spare time I love to explore creastive outlets, the most recent being crocheting. I feel as though I am truly entering my
                        adulting era ^_^ Beyond that I love to get lost in a great book and I am currently obsessed with sci-fi and fantasy! I also
                        really enjoy getting to explore the world and getting to experience what else lays beyond the world I've grown up knowing. Getting 
                        to experience the differences in cultures and learning how others grew to experience the world is so fascinating. Also, when I am
                        afforded the ability I love to travel with my dogs, and let them experience the world, I ahve two dogs pictureds on my landing page,
                        the black lab, Axl, and the golden retriever X great pyrenesse, Bailey, are thw sweetest and most gentle beings! Other than that I
                        am always chasing self growth and striving to be better than I was previously.
                    </p>
                    <br></br>
                    <div>
                        <p style={{textAlign: 'center'}}>My Current Realization's in my 20s:</p>
                        <ol>
                            <li>I'm always learning, alwasy becoming, so take time to rest because growth needs rest just as much as effort.</li>
                            <li>Not every battle is worth fighting. Peace is often found where you place your energy thus one should always let go ofwhat's outside your control.</li>
                            <li>Romanticize your life, you only get the one. When you give yourself permission to just be whom you are, to enjoy the people around you, and to not carry wh isn't your, life becomes softer and much more beautiful than before &lt; 3</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}