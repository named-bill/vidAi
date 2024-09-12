import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './navbar8.css'

const Navbar8 = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <header className={`navbar8-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <img
          alt={props.logoAlt}
          src="/Icons/infinite-loader-200h.gif"
          className="navbar8-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links">
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar8-link4-dropdown-trigger"
            >
              <div className="navbar8-icon-container">
                {link5DropdownVisible && (
                  <div className="navbar8-container1">
                    <svg viewBox="0 0 1024 1024" className="navbar8-icon">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                )}
                {!link5DropdownVisible && (
                  <div className="navbar8-container2"></div>
                )}
              </div>
            </div>
          </nav>
          <div className="navbar8-buttons">
            <button type="button" className="navbar8-button ai-button">
              <span className="navbar8-text">
                {props.text ?? (
                  <fragment>
                    <span className="navbar8-text18">Account</span>
                  </fragment>
                )}
              </span>
            </button>
            <button className="navbar8-view button">
              <span>
                {props.view ?? (
                  <fragment>
                    <span className="navbar8-text10">+ NEW </span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links1">
              <a href={props.link1Url}>
                {props.link1 ?? (
                  <fragment>
                    <span className="navbar8-text16 thq-link thq-body-small">
                      Link 1
                    </span>
                  </fragment>
                )}
              </a>
              <a href={props.link2Url}>
                {props.link2 ?? (
                  <fragment>
                    <span className="navbar8-text13 thq-link thq-body-small">
                      Link 2
                    </span>
                  </fragment>
                )}
              </a>
              <a href={props.link3Url}>
                {props.link3 ?? (
                  <fragment>
                    <span className="navbar8-text17 thq-link thq-body-small">
                      Link 3
                    </span>
                  </fragment>
                )}
              </a>
              <div className="navbar8-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar8-trigger"
                >
                  <span>
                    {props.link4 ?? (
                      <fragment>
                        <span className="navbar8-text07 thq-link thq-body-small">
                          Link 4
                        </span>
                      </fragment>
                    )}
                  </span>
                  <div className="navbar8-icon-container1">
                    {link5AccordionOpen && (
                      <div className="navbar8-container3">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon06">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar8-container4">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon08">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar8-container5">
                    <a href={props.linkUrlPage1}>
                      <div className="navbar8-menu-item">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="navbar8-page1-image"
                        />
                        <div className="navbar8-content">
                          <span>
                            {props.page1 ?? (
                              <fragment>
                                <span className="navbar8-text04 thq-body-large">
                                  Page One
                                </span>
                              </fragment>
                            )}
                          </span>
                          <span>
                            {props.page1Description ?? (
                              <fragment>
                                <span className="navbar8-text14 thq-body-small">
                                  Page One Description
                                </span>
                              </fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage2}>
                      <div className="navbar8-menu-item1">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="navbar8-page2-image"
                        />
                        <div className="navbar8-content1">
                          <span>
                            {props.page2 ?? (
                              <fragment>
                                <span className="navbar8-text08 thq-body-large">
                                  Page Two
                                </span>
                              </fragment>
                            )}
                          </span>
                          <span>
                            {props.page2Description ?? (
                              <fragment>
                                <span className="navbar8-text05 thq-body-small">
                                  Page Two Description
                                </span>
                              </fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage3}>
                      <div className="navbar8-menu-item2">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="navbar8-page3-image"
                        />
                        <div className="navbar8-content2">
                          <span>
                            {props.page3 ?? (
                              <fragment>
                                <span className="navbar8-text12 thq-body-large">
                                  Page Three
                                </span>
                              </fragment>
                            )}
                          </span>
                          <span>
                            {props.page3Description ?? (
                              <fragment>
                                <span className="navbar8-text11 thq-body-small">
                                  Page Three Description
                                </span>
                              </fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage4}>
                      <div className="navbar8-menu-item3">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="navbar8-page4-image"
                        />
                        <div className="navbar8-content3">
                          <span>
                            {props.page4 ?? (
                              <fragment>
                                <span className="navbar8-text09 thq-body-large">
                                  Page Four
                                </span>
                              </fragment>
                            )}
                          </span>
                          <span>
                            {props.page4Description ?? (
                              <fragment>
                                <span className="navbar8-text15 thq-body-small">
                                  Page Four Description
                                </span>
                              </fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </nav>
            <div className="navbar8-buttons1">
              <button className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <fragment>
                      <span className="navbar8-text19">Main Action</span>
                    </fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <fragment>
                      <span className="navbar8-text06">Secondary Action</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="navbar8-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        {link5DropdownVisible && (
          <div className="navbar8-container6 thq-box-shadow">
            <div className="navbar8-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="navbar8-menu-item4">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="navbar8-page1-image1 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content4">
                    <span>
                      {props.page1 ?? (
                        <fragment>
                          <span className="navbar8-text04 thq-body-large">
                            Page One
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      {props.page1Description ?? (
                        <fragment>
                          <span className="navbar8-text14 thq-body-small">
                            Page One Description
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="navbar8-menu-item5">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="navbar8-page2-image1 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content5">
                    <span>
                      {props.page2 ?? (
                        <fragment>
                          <span className="navbar8-text08 thq-body-large">
                            Page Two
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      {props.page2Description ?? (
                        <fragment>
                          <span className="navbar8-text05 thq-body-small">
                            Page Two Description
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="navbar8-menu-item6">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="navbar8-page3-image1 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content6">
                    <span>
                      {props.page3 ?? (
                        <fragment>
                          <span className="navbar8-text12 thq-body-large">
                            Page Three
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      {props.page3Description ?? (
                        <fragment>
                          <span className="navbar8-text11 thq-body-small">
                            Page Three Description
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage4}>
                <div className="navbar8-menu-item7">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="navbar8-page4-image1 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content7">
                    <span>
                      {props.page4 ?? (
                        <fragment>
                          <span className="navbar8-text09 thq-body-large">
                            Page Four
                          </span>
                        </fragment>
                      )}
                    </span>
                    <span>
                      {props.page4Description ?? (
                        <fragment>
                          <span className="navbar8-text15 thq-body-small">
                            Page Four Description
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar8-container7"
        ></div>
      )}
    </header>
  )
}

Navbar8.defaultProps = {
  page1: undefined,
  page2Description: undefined,
  action2: undefined,
  link4: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  page2: undefined,
  rootClassName: '',
  page4: undefined,
  page4ImageSrc:
    'https://images.unsplash.com/photo-1605745141160-8892dc674e94?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=200',
  linkUrlPage1: 'https://www.teleporthq.io',
  page1ImageSrc:
    'https://images.unsplash.com/photo-1514285490982-4130e9aefedb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=200',
  link2Url: 'https://www.teleporthq.io',
  linkUrlPage3: 'https://www.teleporthq.io',
  linkUrlPage4: 'https://www.teleporthq.io',
  view: undefined,
  page3ImageAlt: 'image',
  page3Description: undefined,
  page3: undefined,
  link2: undefined,
  link1Url: 'https://www.teleporthq.io',
  link3Url: 'https://www.teleporthq.io',
  page1Description: undefined,
  page4ImageAlt: 'image',
  page4Description: undefined,
  linkUrlPage2: 'https://www.teleporthq.io',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=200',
  page1ImageAlt: 'image',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1524448789231-1bb0771e7d45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=200',
  page2ImageAlt: 'image',
  link1: undefined,
  link3: undefined,
  text: undefined,
  action1: undefined,
  logoAlt: 'logo',
}

Navbar8.propTypes = {
  page1: PropTypes.element,
  page2Description: PropTypes.element,
  action2: PropTypes.element,
  link4: PropTypes.element,
  logoSrc: PropTypes.string,
  page2: PropTypes.element,
  rootClassName: PropTypes.string,
  page4: PropTypes.element,
  page4ImageSrc: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  link2Url: PropTypes.string,
  linkUrlPage3: PropTypes.string,
  linkUrlPage4: PropTypes.string,
  view: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  page3Description: PropTypes.element,
  page3: PropTypes.element,
  link2: PropTypes.element,
  link1Url: PropTypes.string,
  link3Url: PropTypes.string,
  page1Description: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  page4Description: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  link1: PropTypes.element,
  link3: PropTypes.element,
  text: PropTypes.element,
  action1: PropTypes.element,
  logoAlt: PropTypes.string,
}

export default Navbar8
