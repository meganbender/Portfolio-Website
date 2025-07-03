import styles from './ProjContent.module.css';

export function ProjContent() {
    return (
        <div className={styles.projectOuterWrapper}>
            <div className={styles.container}>
                {/* iOS Applications */}
                <p className={styles.sectionHeader}>iOS Apps</p>
                
                <div className={styles.contentWrapper}>
                    {/* Project Title */}
                    <p className={styles.projHeader}>MCDC Visitors Guide</p>
                    <div className={styles.projectRow}>
                        {/* Project Content */}
                        <div className={styles.body}>
                            <p className={styles.projSubheader}>Overview</p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This app was created for a local children's museum, the Magic City Discovery Center (MCDC), to improve the visitor experience through interactive navigation, exhibit/gallery information,
                                and real-time updates. I designed and developed the app using SwiftUI and MVC architecture, incorporating dynamic floor maps, announcement popups,
                                and gallery detail pages. One of the key features is a chatbot powered by OpenAI API (ChatGPT), which allows users to ask questions about the museum
                                during their visit. I managed the project using Agile Scrum methods with a modified Kanban board and Git version control to stay organized and simulate
                                a professional development environment. 
                            </p>
                            <br></br>
                            <p className={styles.projSubheader}>What I Learned</p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was my first time building an iOS applicaiton and working with Swift, so I had to quickly get familiar wtih SwiftUI, Xcode,
                                and iOS development patterns. Before writing any code, I created a functional prototype in Figma that mapped out core screens and user flows. THis helped guide development
                                and made it easier to stay focused on user experience. The final product closely mathced the original desing, which made the process feel both structured and rewarding.
                                I also gained hands-on experience integrating APIs (like OpenAIs), planning sprints, and managing scope as the project evolved.
                            </p>
                        </div>
                        <div className={styles.rightCol}>
                            <p className={styles.projSubheader}>Tech Stack</p>
                            <p className={styles.body}>
                                <span style={{fontWeight: 'bold'}}>Languages/FrameWorks</span>: Swift, SwiftUI, Xcode<br></br>
                                <span style={{fontWeight: 'bold'}}>Architecture</span>: MVC (Model-View-Controller)<br></br>
                                <span style={{fontWeight: 'bold'}}>Design Tools</span>: Figma (interactive prototype)<br></br>
                                <span style={{fontWeight: 'bold'}}>Workflow</span>: Agile Scrum, modified Kanban, Git<br></br>
                                <span style={{fontWeight: 'bold'}}>APIs</span>: OpenAI API (ChatGPT)
                            </p>
                            <br></br>
                            <p className={styles.projSubheader}>Links</p>
                            <p className={styles.body}>
                                <a href="https://github.com/meganbender/Capstone">Github Repository</a><br></br>
                                <a href="https://www.youtube.com/watch?v=YZmKtPvCQmQ&t=171s">Walkthrough Video</a><br></br>
                                <a href="https://www.figma.com/design/G8UzmspnZsCpsew9LsKWNI/MCDC_VisGuide_Prototype_v1?node-id=0-1&t=GYzF1gfSzpAEEgMB-1">Figma Prototype</a><br></br>
                            </p>
                            <br></br>
                            <p className={styles.projSubheader}>Status: <span style={{color: 'OliveDrab'}}>Completed</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* What I do */}
            <div className={styles.container}>
                <p className={styles.sectionHeader}>Web Apps</p>
                <div className={styles.contentWrapper}>
                    {/* Project Title */}
                    <p className={styles.projHeader}>Personal Portfolio (Front-end)</p>
                    <div className={styles.projectRow}>
                        {/* Project Content */}
                        <div className={styles.body}>
                            <p className={styles.projSubheader}>Overview</p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This portfolio was designed and built entirely from teh ground up as my first full web project.
                                I created it using Vite with React and scoped CSS modules, focusing on modularity, clean design, and responsiveness (still a work in progress though)
                                across screen sizes. Before writing any code, I spent time exploring high-quality references; stufyinh award-winning sites on Awwwards,
                                collecting visual inspiration on Pintrest, and assembling a detailed mood board to define the aesthetic direction. From there, I curated a color
                                palette, selected custom font pairings, and designed a prototype in Figma that mapped out the design layout (which is not fully done but this is using
                                CI/CD... so yeah we are getting there ^_^).<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The final site includes modular sections like the Hero banner, About page, and Projects grid, all built as reusable React
                                components. I used plain CSS modules (instead of utility frameworks) to practice managing styling scope and avoid global conflicts. For deployment,
                                I set up a CI/CD pipeline using Github and AWS Amplify, connected to a custom domain through Route 53. With every push to main, the site automatically
                                builds and deploys, making continuous iteration easy and smooth.
                            </p>
                            <br></br>
                            <p className={styles.projSubheader}>What I Learned</p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this project gave me experience across the full web development cycle, from mood boarding and prototyping, to component
                                design, styling, and deployment. I learned how to turn visual inspiration into a real product while strengthening my grasp of React fundamentals, custom
                                CSS architecture, and version-controlled CI/CD workflows. It also helped me build a process I now use across other projects: research, prototype, develop, refine.
                            </p>
                        </div>
                        <div className={styles.rightCol}>
                            <p className={styles.projSubheader}>Tech Stack</p>
                            <p className={styles.body}>
                                <span style={{fontWeight: 'bold'}}>Languages/FrameWorks</span>: Javascript, React (via Vite)<br></br>
                                <span style={{fontWeight: 'bold'}}>Styling</span>: Plain CSS Modules (scoped, custom)<br></br>
                                <span style={{fontWeight: 'bold'}}>Design Tools</span>: Figma (wireframes & prototype), mood board via Pintrest & Awwwards<br></br>
                                <span style={{fontWeight: 'bold'}}>Hosting/Deployment</span>: AWS Amplify & Route 53<br></br>
                                <span style={{fontWeight: 'bold'}}>Version Control & CI/CD</span>: Github auto-deploy pipeline & Git
                            </p>
                            <br></br>
                            <p className={styles.projSubheader}>Links</p>
                            <p className={styles.body}>
                                <a href="https://github.com/meganbender/Portfolio-Website">Github Repository</a><br></br>
                                <a href="https://www.figma.com/design/cz9nWgMtNxkA6xDbTvn6z8/Portfolio-Website?node-id=5-50&t=xXXjikRWW9kBbvoK-1">Figma Prototype</a><br></br>
                            </p>
                            <br></br>
                            <p className={styles.projSubheader}>Status: <span style={{color: '#574E4D'}}>In Progress</span></p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    {/* Project Title */}
                    <p className={styles.projHeader}>Rating Radar (Back-end)</p>
                    <div className={styles.projectRow}>
                        {/* Project Content */}
                        <div className={styles.body}>
                            <p className={styles.projSubheader}>Overview</p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating Radar is a collaborative full-stack project that aggregates product reviews from multiple sources and displays sentiment-based
                                summaries. While the overall platform includes a user-facing front-end, my main responsibility has been on the back-end systems. I've been building the server-side logic using
                                Java Spring Boot, designing RESTful endpoints to support search, product CRUD operations, and user account management.<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On the data side, I created and optimized MySQL schemas for user and review storage, focusing on efficient querying to support large-scale
                                review scraping and filtering. I'm currently writing unit tests to validate endpoint functionality and integrating Swagger to generate clear API documentation for the front-end
                                team. The project is ongoing and evolving as we continue developing both the architecture and user experience together.
                            </p>
                            <br></br>
                            <p className={styles.projSubheader}>What I Learned</p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project has deepend my understanding of back-end architecture and how to build scalable, testable systems in a team environment. It's
                                strengthened my knowledge of Spring Boot, RESTful design, SQL performance tuning, and how to collaborate effectively across front-end/back-end teams. I've also gained experience with project
                                scoping, Git-based team collaboration, and documenting APIs clearly for handoff.
                            </p>
                        </div>
                        <div className={styles.rightCol}>
                            <p className={styles.projSubheader}>Tech Stack</p>
                            <p className={styles.body}>
                                <span style={{fontWeight: 'bold'}}>Languages/FrameWorks</span>: Java, Spring Boot<br></br>
                                <span style={{fontWeight: 'bold'}}>Architecture</span>: RESTful APIs<br></br>
                                <span style={{fontWeight: 'bold'}}>Database</span>: MySQL<br></br>
                                <span style={{fontWeight: 'bold'}}>Testing/Docs</span>: JUnit, Swagger<br></br>
                                <span style={{fontWeight: 'bold'}}>Tools</span>: Git, Github, Postman
                            </p>
                            <br></br>
                            <p className={styles.projSubheader}>Status: <span style={{color: '#574E4D'}}>In Progress</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}