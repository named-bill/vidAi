import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Character NFT template3</title>
        <meta property="og:title" content="Character NFT template3" />
      </Helmet>
      <header className="home-header">
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo">
            <span>KIIBZZ AI</span>
            <br></br>
          </span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <button type="button" className="home-button button-clean button">
                KIIBZZ AI
              </button>
              <button className="home-button01 button-clean button">
                Kiibzz Studio
              </button>
              <button className="home-button02 button-clean button">
                Help
              </button>
              <button className="home-button03 button-clean button">
                Community
              </button>
              <button className="home-button04 button-clean button">
                Price
              </button>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-container01">
              <div className="home-socials"></div>
            </div>
          </div>
          <button className="home-view button">LOGIN</button>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button05">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container02">
                <span className="home-logo1">Character</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text02">About</span>
                <span className="home-text03">Features</span>
                <span className="home-text04">Pricing</span>
                <span className="home-text05">Team</span>
                <span className="home-text06">Blog</span>
              </nav>
              <div className="home-container03">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <button type="button" className="home-button06 ai-button">
            <span className="home-text07">Sign up</span>
          </button>
        </header>
      </header>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header1">
            <span>Generate Videos FAST </span>
            <span>with</span>
            <br></br>
          </h1>
          <h1 className="home-text11 ai-word">KIIBZZ AI</h1>
          <p className="home-caption">
            Create stunning, ready-to-publish videos effortlessly. Simply enter
            any topic, and our AI will generate a complete video with script,
            visuals, subtitles, voiceover, and music—no video creation skills
            required.
          </p>
        </div>
        <div className="home-container04">
          <div className="home-buttons">
            <Link to="/vgen" className="home-navlink ai-button">
              <span className="home-text12">
                <span>TRY KIIBZZ AI</span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
        <video
          src
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay="true"
          className="home-video"
        ></video>
      </section>
      <section className="home-description">
        <div className="home-container05"></div>
      </section>
      <section className="home-cards">
        <div className="home-row"></div>
        <div className="home-heading1">
          <h1 className="home-header2">
            Transform Your Ideas into Stunning
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <h1 className="home-text15 ai-word">Videos Instantly</h1>
          <img
            alt="image"
            src="/Icons/infinite-loader-1100w.gif"
            className="home-image"
          />
        </div>
        <div className="home-heading2">
          <h1 className="home-header3">
            All the tools you need to go viral in
          </h1>
          <h1 className="home-text16 ai-word">ONE-PLACE</h1>
          <div className="home-container06">
            <button type="button" className="button">
              Button
            </button>
          </div>
          <div className="home-container07">
            <button type="button" className="button">
              Button
            </button>
          </div>
          <div className="home-container08">
            <button type="button" className="button">
              Button
            </button>
          </div>
          <div className="home-container09">
            <button type="button" className="button">
              Button
            </button>
          </div>
          <div className="home-container10">
            <button type="button" className="button">
              Button
            </button>
          </div>
          <div className="home-container11">
            <button type="button" className="button">
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
