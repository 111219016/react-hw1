import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="navbar">
            <a href="#" className="logo">
                <img src="../images/logo 1.png" alt="logo main" />
            </a>
            <ul className="nav">
                <li className="nav-item">
                    <a href="#" className="nav-text">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-text">Menu</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-text">Reservation</a>
                </li>
                <li className="nav-item"><a href="#" className="nav-text">Info</a>
                </li>
            </ul>
        </div>
    </header>
    
    <div className="first">
        <h1 className="main-title">MENU</h1>
    </div>
        
    
    
    <div className="dessert">
        
        <h2>Dessert</h2>
        <img src="../images/star_brown.svg" className="star_white" alt="star_white" /> 
        <div className="products">
            <div className="product-intro">
                <img src="../images/menu_lemon-v2.jpg" width="360px" height="360px" />
                <div>
                    <h3>◆晨曦檸檬塔</h3>
                    <h5>這款檸檬塔象徵著清晨的第一縷陽光，酸甜的檸檬餡與酥脆的餅皮搭配得恰到好處，
                        讓人感受到早晨的清新與活力。每一口都像是喚醒你的感官，
                        適合與一杯熱咖啡一同享用，迎接美好的一天。</h5>
                </div>
            </div>
            <div className="product-intro">
                <img src="../images/menu_raspberry-v2.png" width="360px" height="360px" />
                <div>
                    <h3>◆日光覆盆子千層酥</h3>
                    <h5>輕盈酥脆的千層酥夾著鮮嫩的覆盆子醬，宛如被早晨陽光照耀的果園般甜美。
                        每層薄酥如日光般輕柔，帶來清新的甜美口感，讓早晨變得愉悅且充滿色彩。</h5>
                </div>
            </div>
            <div className="product-intro">
                <img src="../images/menu_peach-v2.jpg" width="360px" height="360px" />
                <div>
                    <h3>◆晨光蜜桃蛋糕</h3>
                    <h5>鬆軟的海綿蛋糕與蜜桃餡搭配，如同日出時的溫暖光芒，充滿清新與香甜。
                        蛋糕的輕盈與蜜桃的自然甜味相得益彰，適合在早晨時刻帶來溫暖的甜蜜時光。</h5>
                </div>
            </div>
        </div>
    </div>
    
    <div className="coffee">
        
        <h2>Coffee</h2>
        <img src="../images/star_white.svg" className="star_white" alt="star_white" />    
        <div className="products">
            <div className="product-intro">
                <img src="../images/menu_latte-v2.jpg" width="360px" height="360px" />
                <div>
                    <h3>★月光拿鐵</h3>
                    <h5>以絲滑的牛奶為基底，加入微苦的咖啡，
                        並在最後淋上淡淡的香草奶油，猶如月光灑落在夜晚的街道，
                        溫柔而不過於甜膩。適合在夜晚想要一點安慰的顧客，
                        品嚐這杯彷彿擁抱月光的飲品。</h5>
                </div>
            </div>
            <div className="product-intro">
                <img src="../images/menu_cocoa-v2.jpg" width="360px" height="360px" />
                <div>
                    <h3>★星夜可可</h3>
                    <h5>濃郁的熱可可融合了一抹濃厚的黑巧克力，宛如夜空中閃爍的星光。
                        這款飲品既溫暖又充滿深度，給人一種夜晚沉靜的感覺，
                        完美伴隨長夜裡的放鬆時光。</h5>
                </div>
            </div>
            <div className="product-intro">
                <img src="../images/menu_pour-v2.jpg" width="360px" height="360px"/>
                <div>
                    <h3>★暮色手沖咖啡</h3>
                    <h5>選用深烘焙的咖啡豆手沖而成，口感層次豐富，宛如暮色降臨時的深藍天空。
                        這款手沖咖啡保有微微的苦味和深沉的香氣，
                        適合喜歡品味夜晚靜謐氛圍的咖啡愛好者。</h5>
                </div>
            </div>
        </div>
    </div>        
    
    <footer>
        <h2 className="footer-small">眠貓咖啡屋</h2>

        <p id="copyright">copyright © 2024</p>
        
        <ul className="footer-small footer-small-ul">
            <li className="footer-small-item">
                <a href="#" className="small-nav-text">Home</a>
            </li>
            <li className="footer-small-item">
                <a href="#" className="small-nav-text">Reservation</a>
            </li>
            <li className="footer-small-item"><a href="#" className="small-nav-text">Info</a>
            </li>
        </ul>
        
        <div className="icons">
            <a href="https://www.facebook.com/">
                <img className="icon-item" src="../images/fb.svg" alt="fb" width="56px" height="56px"/>
            </a>
            <a href="https://www.instagram.com/">
            <img className="icon-item" src="../images/ins.svg" alt="ig" width="56px" height="56px"/>
            </a>
            <a href="#">
            <img className="icon-item mail" src="../images/mail.svg" alt="mail" width="56px" height="56px" />
            </a>
        </div>
    </footer>
    </>
  )
}

export default App
