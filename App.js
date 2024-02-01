import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.ecelliitr.org/edc/team", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log(error));
  }, []);
  window.onerror = function (message, source, lineno, colno, error) {
    // Handle the error here
    console.error(message, source, lineno, colno, error);
    return true; // Prevent the default browser error handling
  };

  return (
    <>
      {/* NAVBAR START */}
      <header id="header-main">
        <div className="my-head" role="banner">
          <div className="container">
            <div id="branding">
              <h1 id="site-title">
                <a href="https://ecelliitr.org" rel="home" />
              </h1>
            </div>
            <nav id="nav-main" role="navigation">
              <div className="navCol" role="navigation">
                <ol>
                  <li className="menu-item menu-item-27">
                    <a href="https://ecelliitr.org/aboutus">ABOUT US</a>
                  </li>
                  <li className="menu-item menu-item-92">
                    <a href="https://ecelliitr.org/initiatives">INITIATIVES</a>
                  </li>
                  <li className="menu-item menu-item-29">
                    <a href="https://ecelliitr.org/getinvolved">GET INVOLVED</a>
                  </li>
                  <li className="menu-item menu-item-454">
                    <a href="https://ecelliitr.org/resources">RESOURCES</a>
                  </li>
                  <li className="menu-item menu-item-26">
                    <a href="https://ecelliitr.org/community">COMMUNITY</a>
                  </li>
                  <li className="menu-item menu-item-25">
                    <a href="https://ecelliitr.org/contact">CONTACT</a>
                  </li>
                </ol>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* NAVBAR END */}
      <div
        id="page"
        className="page-template page-template-team page-template-team-php page page-id-22 single-author"
      >
        <div id="main">
          <div id="primary">
            <div id="content" role="main">
              <section id="hero">
                <div
                  style={{ height: 700 }}
                  className="bgi parallax pbgi"
                  data-768="https://ecelliitr.org/static/media/aboutusb.8bbe6074bb28b237b113.png"
                  data-1200="https://ecelliitr.org/static/media/aboutusb.8bbe6074bb28b237b113.png"
                >
                  <p className="">
                    A team is above all a spirit.
                    <span>
                      The Globule spirit is the cement that brings us together,
                      pushing us towards new challenges and victories.
                    </span>
                  </p>
                </div>
              </section>
              <section id="team">
                <div className="title">
                  <span>Hey, you know</span>
                  <h2>Our team?</h2>
                  <i className="icon team" />
                </div>{" "}
                {/* /.title */} 
                {data && (
                  <div id="main-container">
                    {data.map((item) =>
                item.position!="Heads" && (<div className="container1">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="our-team">
                        <div className="team-image">
                          <img src={item.members[0].image} alt="Not-Head"/>

                          <p className="description">
                           {item.members[0].quote}
                          </p>

                          <ul className="social">
                            <li>
                              <a href={item.members[0].linkedin}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#FFD43B" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                              </a>
                            </li>

                            <li>
                              <a href={item.members[0].fblink}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#f6d32d" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="team-info">
                          <h3 className="title">{item.members[0].name}</h3>

                          <span id="post">{item.members[0].position}</span>
                          <span className="post"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#813d9c" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> : {item.members[0].email}</span>
                          <span className="post"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#813d9c" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> : {item.members[0].mobile}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> ))}
                  </div>
                )}
                {/* Top-Box */}
                <div id="heads">HEADS</div>
                {data && (
                  <div
                    id="full-team"
                    style={{
                      "background-position": "9vw 1vw",
                      "background-size": "25vw"
                    }}>
                    <div className="close">
                      <a href="#">
                        <i className="icon closei">x</i>
                        <span>Close</span>
                      </a>
                    </div>
                    <div className="mask-team">
                      {data[2].members.map(
                        (item) =>
                          item.id !== 23 && (
                            <article className="member">
                              <a href="javascript:;" className={item.id}>
                                <span className="fname">{item.name}</span>
                                <span className="position">
                                  {item.position}
                                </span>
                                <figure className="thumbnail">
                                  <img
                                    src={item.image}
                                    data-768={item.image}
                                    data-1200={item.image}
                                    alt={item.name}
                                  />
                                </figure>{" "}
                              </a>
                            </article>
                          )
                      )}
                    </div>
                    {/* /.mask-team */}
                    <div className="info-team">
                      {data[2].members.map((item) => (
                        <div className="profile" id={item.id}>
                          <ul>
                            <li>{item.name}</li>
                            <li style={{ width: "100vw" }}>
                              Head of
                              <span className="yellow">
                                {item.position.replaceAll("Head of", "")}
                              </span>
                            </li>
                            {/* <li>Web Designer</li> */}
                            <li>
                              <i />
                            </li>
                          </ul>
                          <blockquote>{item.quote}</blockquote>
                          <span className="post2"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#FFD43B" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> : {item.email}</span>
                          <span className="post2"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#FFD43B" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> : {item.mobile}</span><br></br>
                          <span className="post2"><a href={item.fblink}><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#613583" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
                          <a href={item.linkedin}><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#613583" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                          </span>
                          <span className="posture" data-768={item.image} />
                        </div>
                      ))}
                    </div>
                    {/* /.info-team */}
                  </div>
                )}
                {/* /#full-team */}
              </section>{" "}
              {/* /#team */}
            </div>
          </div>
        </div>
        {/* #main */}
      </div>
      {/* #page */}
      <footer id="footer-main" role="contentinfo">
        <div id="colophon">
          <p className="credit">
            E-Summit 2024 | Proud member of E-Cell |{" "}
            <a href="https://www.iitr.ac.in">IIT Roorkee</a> | Terms &amp;
            Conditions | Privacy Policy
          </p>
        </div>
      </footer>
      {/* footer-main */}
    </>
  );
}

export default App;
