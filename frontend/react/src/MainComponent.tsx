import './MainComponent.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import chatbotIcon from '/chatbot-icon.jpg'
import cserkesztabor from '/cserkesztabor.jpg'
import drcode from '/drcode.jpg'
import forestSummerCamp from '/forest-summer-camp.jpg'
import childrenLyingInGrass from '/group_of_children_lying_in_the_grass_in_a_circle.jpg'
import islandCamp from '/island_camp.jpg'
import nyariTabor from '/nyari_tabor.jpg'
import szentMargit from '/szent_margit.jpg'
import szinjatszotabor from '/szinjatszotabor.jpg'
import tabortuzJatekok from '/tabortuz-jatekok.jpg'
import zankaiElmenytabor from '/Zankai_Elmenytabor.jpg'
import campLogo from '/app-logo-icons/favicon-96.png'

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export function MainComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <main>
        

        <nav>
          <ul>
            {isLoggedIn && (
              <li><Link to="/profile">Profil</Link></li>
            )}

            {!isLoggedIn && (
              <>
                <li><Link to="/signup">Regisztráció</Link></li>
                <li><Link to="/login">Bejelentkezés</Link></li>
              </>
            )}

            {isLoggedIn && (
              <>
                <li>
                  <Link to="/logout">Kijelentkezés</Link>
                </li>
                <li><Link to="/addcamp">Új tábor</Link></li>
                <li><Link to="/addlocation">Új táborhelyszín</Link></li>
                <li><Link to="/applications">Jelentkezéseim</Link></li>
              </>
            )}
          </ul>
        </nav>
        <div>

          <h1>Üdvözlünk a Nyári Tábor Foglaló honlapján!</h1>

          <h2>Itt böngészhetsz táborokat, vagy regisztrálhatsz, bejelentkezhetsz, hogy kezelhesd a profilod.</h2>
          <div className='images'>

            <div>
              <h2>👇Beszélgess AI Tábor Foglalóval👇</h2>
              <img src={chatbotIcon} className="forog logo" alt="AI tábor foglaló Chatbot asszisztens" style={{ width: "20%", height: "auto" }}  />
                <p className="arrow-text">Görgess Lejjebb a Galériához</p>
                <div className="arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className='gallery'>
              <h2>Tábori galéria🖼🎨👇</h2>
              <div>
                <div>

                  <img src={cserkesztabor} className="logo" alt="Cserkésztábor" style={{ width: '50%', height: '50%' }} />
                  <h3>Cserkésztábor</h3>
                  <p>Kalandok és természetfelfedezés kerületi cserkésztáborainkban!</p>
                </div>
                <div>
                  <img src={tabortuzJatekok} className="logo" alt="Tábortűz játékok" style={{ width: '50%', height: '50%' }} />

                  <h3>Tábor Erdély egzotikus hegyeiben</h3>
                  <p>Meghitt esték közös énekléssel és tábortűzzel a csillagos ég alatt.</p>
                </div>
                <div>

                  <img src={drcode} className="logo" alt="Dr. Code Tábor" style={{ width: '50%', height: '50%' }} />

                  <h3>Programozás és robotika táborok</h3>
                  <p>Modern technológiai kalandok a Dr. Code szervezésével! - Tanulás játékosan.</p>
                </div>
                <div>

                  <img src={forestSummerCamp} className="logo" alt="Forest Summer Camp" style={{ width: '50%', height: '50%' }} />

                  <h3>Erdei vándortábor</h3>
                  <p>A múlt évi nyári erdei vándortáborok legjobb pillanatai :D . Hátizsákkal, barátokkal lenyűgöző természeti
                    tájakon át vezetett az út! :O</p>
                </div>
                <div>
                  <img src={childrenLyingInGrass} className="logo" alt="Gyerekek a fűben" style={{ width: '50%', height: '50%' }} />
                  <h3>Közösségi programok</h3>
                  <p>Kreatív és közösségépítő foglalkozások, ahol mindenki megtalálja a helyét.</p>
                </div>
                <div>

                  <img src={islandCamp} className="logo" alt="Szigeti tábor" style={{ width: '50%', height: '50%' }} />
                  <h3>Cserkésztábor Izlandon</h3>
                  <p>Ez egy egyedülálló kép az izlandi cserkésztáborokról! Gejzírek, lenyűgöző tájak és különleges programok
                    izland szigetén.</p>
                </div>
                <div>
                  <img src={nyariTabor} className="logo" alt="Nyári tábor" style={{ width: '50%', height: '50%' }} />

                  <h3>Fonyódligeti Erzsébet-táborok</h3>
                  <p>Minden évben egész nyáron várjuk a gyermekeket, most már 3 helyszínen!</p>
                </div>
                <div>
                  <img src={szentMargit} className="logo" alt="Szent Margit Tábor" style={{ width: '50%', height: '50%' }} />

                  <h3>Szent Margit cserkésztábor</h3>
                  <p>Egy cserkészcsapat, ahol a hagyományok, tanulás, közösség és a játék kéz a kézben járnak.</p>
                </div>
                <div>
                  <img src={szinjatszotabor} className="logo" alt="Színjátszó tábor" style={{ width: '50%', height: '50%' }} />

                  <h3>Színjátszótábor</h3>
                  <p>Fedezd fel a benned rejlő színészt! Előadások, szerepjátékok, improvizációk.</p>
                </div>
                <div>

                  <img src={zankaiElmenytabor} className="logo" alt="Zánkai Élménytábor" style={{ width: '50%', height: '50%' }} />
                  <h3>Zánkai élménytábor</h3>
                  <p>Vidám és változatos programok Magyarország legnagyobb táborában, a Balaton partján &#45; számíthahsz ránk,
                    számítunk rád!</p></div>
              </div>
            </div>
          </div>
          </main >
        
      <footer className="footer site-footer">
        <div className="footer-column footer-logo">
        <h3>Nyári Tábor Foglaló</h3>
        <p>© {} Minden jog fenntartva</p>
        <p>Kapcsolat: info@nyaritabor.hu<br />+36 30 123 4567</p>
      </div>

      <div className="footer-column social-media">
         <ul>
          <li><a className="a" href="https://github.com/Fabbernat">GitHub</a></li>
          <li><a className="a" href="mailto:job.fabbernat@gmail.com">Email</a></li>
          <li><a className="a" href="https://www.facebook.com/profile.php?id=100012511780116">Facebook</a></li>
          <li><a className="a" href="https://www.instagram.com/Fabbernat/">Instagram</a></li>
          <li><a className="a" href="https://www.linkedin.com/in/bern%C3%A1t-f%C3%A1bi%C3%A1n-7a1bb7299/">Linkedin</a></li>
          <li><a className="a" href="https://x.com/Uni_Szeged">X (Twitter)</a></li>
          <li><a className="a" href="https://discord.com/users/621387699126796318">Discord</a></li>
        </ul>
      </div>

      <div className="footer-column watermark">
        <p className="name">Fábián Bernát</p>
        <p className="link"><a className="a" href="https://fabbernat.github.io" target="_blank">Honlapom</a></p>
      </div>

      <div className="footer-column footer-links">
        <ul>
          <li><a className="a" href="/about">Rólunk</a></li>
          <li><a className="a" href="/privacy">Adatvédelem</a></li>
          <li><a className="a" href="/terms">Felhasználási feltételek</a></li>
        </ul>
      </div>

      </footer>
    </>
  )
}

export default MainComponent
