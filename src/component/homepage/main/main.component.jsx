import { Game } from "./game/game.component";
import './_main.scss';


export const Main = () => {
    return (
        <div className="color-dark main-wrapper">
            <div className="main">
                <div className="main__content">
                    <div className="main__content-top">
                        <p className="font-18 font-500">
                            hi all. i am
                        </p>
                        <span className="font-65 font-500">
                            HUYNH DOAN
                        </span>
                        <div className="font-32 text-violet font-500"> &#62; front end developer</div>
                    </div>
                    <div className="main__content-bottom font-18 font-500">
                        <div className="text-top">
                            <span className="second-color a">
                                // complete the game to continue <br/>
                            </span>
                            <span className="second-color">
                                // you can also see it on my Github page
                            </span>
                            <div className="text-github">
                                <span className="text-violet">const</span> <span className="text-green">githubLink</span> <span className="text-orange"> <a href="https://github.com/example/url" className="text-orange"> = “https://github.com/example/url”</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__game">
                    {/* <img src="./img/snake-game.png"/> */}
                </div>
            </div>
            <div className="main-img">
                <img src="./img/bg-blur.png"/>
            </div>
            <Game></Game>
        </div>
    )
}