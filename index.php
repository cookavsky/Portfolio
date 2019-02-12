<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Portfolio - cookavsky</title>
    <meta name="description" content="Portfolio create by Marcin Kukawski">
	<meta name="keywords" content="cookavsky, Polska Panda">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/@media.css" />
</head>

<body>
    <header>
        <h1>Marcin kukawski</h1>
        <ul class="Menu">
            <li>Intro</li>
            <li>Portfolio</li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>
    </header>
    <div class="Tree">
        <img class="ImgTree" src="img/tree.jpg" title="Reflection of a Tree in Water" />
        <img class="White" src="img/WhiteBlock.png" title="White Elipse" />
    </div>
    <div class="Star Star-1"></div>
    <div class="Star Star-2"></div>
    <div class="Star Star-3"></div>
    <div class="Star Star-4"></div>
    <div class="Star Star-5"></div>
    <div class="Star Star-6"></div>
    <main>
        <article>
            <div class="Intro">
                <div class="SelfPhoto Hide"></div>
                <div class="Introduction Hide">
                    <h2>Witam Wszystkich</h2>
                    <p>Chciałbym wam przedstawić moje portfolio. Znajdują się tutaj wszystkie moje ukończone projekty. Front-endem i Back-endem interesowałem się od bardzo dawna, ale tylko na tym poprzestałem. Zmieniło się to w tym roku, kiedy postanowiłem wybrać nową ścieżkę kariery. Wybrałem Front-end z paru powodów.<span class="Hide"> Lubię się uczyć, a tego zawodu uczyć się trzeba całe życie. Najważniejsza jest twoja wiedza i umiejętności, których możesz się nauczyć samemu, bo źródeł wiedzy jest niezliczona ilość. Najważniejszym powodem okazało się jednak przekonanie, że chce się tego nauczyć, chce w tym pracować i poprawiać swoje umiejętności. Poświęcam temu swój czas, bo chce, a nie muszę.</span></p>
                    <div class="More">More</div>
                </div>
            </div>
        </article>
        <article class="Art">
            <div class="Header">
                <p>Mojego autorstwa</p>
            </div>
            <div class="Gallery">
                <div id="Portfolio-1" class="PortfolioA">
                    <a href="https://fifa.cookavsky.com/" target=_blank>
                        <div class="Live">
                            <p>Live</p>
                        </div>
                    </a>
                </div>
                <div id="Portfolio-2" class="PortfolioA">
                    <a href="https://schools.cookavsky.com/" target=_blank>
                        <div class="Live">
                            <p>Live</p>
                        </div>
                    </a>
                </div>
                <div id="Portfolio-3" class="PortfolioA">
                    <a href="https://angulartable.cookavsky.com/" target=_blank>
                        <div class="Live">
                            <p>Live</p>
                        </div>
                    </a>
                </div>
                <div id="Portfolio-4" class="PortfolioA"></div>
                <div id="Portfolio-5" class="PortfolioA"></div>
                <div id="Portfolio-6" class="PortfolioA"></div>
                <div id="Portfolio-7" class="PortfolioA"></div>
                <div id="Portfolio-8" class="PortfolioA"></div>
                <div id="Portfolio-9" class="PortfolioA"></div>
                <div id="Portfolio-10" class="PortfolioA"></div>
            </div>
            <div class="Header">
                <p>Weekly webdev challenge</p>
            </div>
            <div class="Gallery">
                <div id="Portfolio-11" class="PortfolioB">
                    <a href="https://weeklyone.cookavsky.com/" target=_blank>
                        <div class="Live">
                            <p>Live</p>
                        </div>
                    </a>
                </div>
                <div id="Portfolio-12" class="PortfolioB">
                    <a href="https://weeklytwo.cookavsky.com/" target=_blank>
                        <div class="Live">
                            <p>Live</p>
                        </div>
                    </a>
                </div>
                <div id="Portfolio-13" class="PortfolioB">
                    <a href="https://weeklythree.cookavsky.com/" target=_blank>
                        <div class="Live">
                            <p>Live</p>
                        </div>
                    </a>
                </div>
                <div id="Portfolio-14" class="PortfolioB">
                    <a href="https://weeklyfour.cookavsky.com/" target=_blank>
                        <div class="Live">
                            <p>Live</p>
                        </div>
                    </a>
                </div>
                <div id="Portfolio-15" class="PortfolioB">
                    <a href="https://weeklyeleven.cookavsky.com/" target=_blank>
                        <div class="Live">
                            <p>Live</p>
                        </div>
                    </a>
                </div>
                <div id="Portfolio-16" class="PortfolioB"></div>
                <div id="Portfolio-17" class="PortfolioB"></div>
                <div id="Portfolio-18" class="PortfolioB"></div>
                <div id="Portfolio-19" class="PortfolioB"></div>
                <div id="Portfolio-20" class="PortfolioB"></div>
            </div>
        </article>
        <article class="Skills">
            <h2>Technologie</h2>
            <div class="SkillsPhoto">
                <img src="img/html.png" />
                <img src="img/css.png" />
                <img src="img/js.png" />
                <img src="img/php.png" />
            </div>
        </article>
    </main>
    <footer>
        <form class="Contact" action="contactform.php" method="post">
            <input type="text" name="name" placeholder="Imię i Nazwisko">
            <input type="text" name="mail" placeholder="Twój e-mail">
            <input type="text" name="subject" placeholder="Temat">
            <textarea name="message" placeholder="Wiadomość"></textarea>
            <button type="submit" name="submit">Send me</button>
        </form>
        <div class="Social">
            <div>
                <img src="img/facebook.png" />
                <p><a href="https://www.facebook.com/cookavsky">Marcin Panda Kukawski</a></p>
            </div>
            <div>
                <img src="img/git.png" />
                <p><a href="https://github.com/cookavsky">cookavsky</a></p>
            </div>
            <div>
                <img src="img/Linkedin.png" />
                <p><a href="https://www.linkedin.com/in/cookavsky/">Marcin Kukawski</a></p>
            </div>
            <div>
                <img src="img/mail.png" />
                <p>cookavsky@gmail.com</p>
            </div>
        </div>
    </footer>
    <script src="js/script.js"></script>
</body>

</html>