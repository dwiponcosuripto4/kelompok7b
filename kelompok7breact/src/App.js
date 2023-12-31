import './App.css';

function App() {
  return (
    <>
      <noscript>You need to enable JavaScript to run this app.</noscript>
    
          {/* Header */}
      <div id="header">
        <div class="top">

          {/* Logo */}
          <div id="logo">
            <span class="image avatar48"><img src="images/31.png" alt="" /></span>
            <h1 id="title">Planet E-Sport</h1>
            <p>Planet E-Sport Organization</p>
          </div>

          {/* Nav */}
          <nav id="nav">
            <ul>
              <li><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>
              <li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>
              <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a>
              </li>
              <li><a href="#genre" id="about-link"><span class="icon solid fa-gamepad">Genre</span></a></li>
              <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Register</span></a>
              </li>
              <li><a href="login.html" id="logout-link"><span class="icon solid fa-sign-out-alt">Logout</span></a>
              </li>
            </ul>
          </nav>

        </div>

        <div class="bottom">
          {/* Social Icons */}
          <ul class="icons">
            <li><a class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a class="icon brands fa-github"><span class="label">Github</span></a></li>
            <li><a class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
            <li><a class="icon solid fa-envelope"><span class="label">Email</span></a></li>
          </ul>
        </div>
      </div>

      {/* Main */}
      <div id="main">

        {/* Intro */}
        <section id="top" class="one dark cover">
          <div class="container">

            <header>
              <h2 class="alt">Hi! Selamat Datang</h2>
              <p>Daftarlah sekarang untuk turnamen esport! <br />
                Tunjukkan keahlian Anda dan menangkan hadiah besar.</p>
            </header>
            <footer>
              <a href="#about" class="button scrolly">Selengkapnya</a>
            </footer>

          </div>
        </section>
        {/* About Me */}
        <section id="about" class="three">
          <div class="container">
            <header>
              <h2>About Me</h2>
            </header>
            <video autoplay class="featured" controls width="840" height="360">
              <source src="video.mp4" type="video/mp4"/>
            </video>
            <p>Halo! Sobat Gamers, kami sangat senang menyambut Anda di situs web turnamen esports kami.
              Kami fokus pada turnamen yang profesional, adil, dan menyenangkan. Dengan aturan yang jelas dan
              pengalaman bermain yang memuaskan, kami berusaha menjadi yang terbaik di industri ini.
              Bergabunglah dengan kami dan jadilah bagian dari komunitas esports yang berkembang. Apakah Anda
              seorang pemain berbakat, penggemar setia, atau mitra potensial, kami ingin memberikan pengalaman
              esports yang luar biasa bagi Anda.
              Terima kasih telah mengunjungi situs kami. Nikmati turnamen kami dan dukung perkembangan esports di
              masa depan. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau saran.</p>
            <p>Salam,</p>
            <p>[Planet E-Sport Organization]</p>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" class="two">
          <div class="container">

            <header>
              <h2>Portfolio</h2>
            </header>

            <p>Kami dengan bangga mempersembahkan berbagai turnamen esport yang telah kami selenggarakan.
              Dari kompetisi-kompetisi yang bersemangat, kami telah menciptakan pengalaman yang menarik bagi para
              pemain dan penggemar esport.
              Lihatlah beberapa momen yang tak terlupakan dari turnamen-turnamen kami.</p>

            <div class="row">
              <div class="col-4 col-12-mobile">
                <article class="item">
                  <a class="image fit"><img
                      src="https://i0.wp.com/esportsnesia.com/wp-content/uploads/2020/07/Turnamen-Esports-Di-Indonesia-696x464.jpg"
                      alt="" /></a>
                  <header>
                    <h3>Dokumentasi 1</h3>
                  </header>
                </article>
                <article class="item">
                  <a class="image fit"><img
                      src="https://cms.dailysocial.id/wp-content/uploads/2021/12/8e872887192700fcb9b390ea9e6a8b5c_ifel.jpg"
                      alt="" /></a>
                  <header>
                    <h3>Dokumentasi 2</h3>
                  </header>
                </article>
              </div>
              <div class="col-4 col-12-mobile">
                <article class="item">
                  <a class="image fit"><img
                      src="https://api.duniagames.co.id/api/content/upload/file/5951414001608115333.jpg"
                      alt="" /></a>
                  <header>
                    <h3>Dokumentasi 3</h3>
                  </header>
                </article>
                <article class="item">
                  <a class="image fit"><img
                      src="https://foto.kontan.co.id/mBJiyJk2JsSynuSLwpJvHlbcQfI=/smart/2019/12/09/386445770p.jpg"
                      alt="" /></a>
                  <header>
                    <h3>Dokumentasi 4</h3>
                  </header>
                </article>
              </div>
              <div class="col-4 col-12-mobile">
                <article class="item">
                  <a class="image fit"><img
                      src="https://cdn.idntimes.com/content-images/community/2019/04/6-daftar-game-esport-nomor-1-populer-di-asia-tenggara-aetsncmnax-405d80d16ba8e5688450c35aced38c67_600x400.jpg"
                      alt="" /></a>
                  <header>
                    <h3>Dokumentasi 5</h3>
                  </header>
                </article>
                <article class="item">
                  <a class="image fit"><img
                      src="https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2020/01/turnamen-esports-indonesia-1-1-640x360.jpg"
                      alt="" /></a>
                  <header>
                    <h3>Dokumentasi 6</h3>
                  </header>
                </article>
              </div>
            </div>

          </div>
          <p>Kami dengan bangga mempersembahkan berbagai turnamen esport yang telah kami selenggarakan.
            Dari kompetisi-kompetisi yang bersemangat, kami telah menciptakan pengalaman yang menarik bagi para
            pemain dan penggemar esport.
            Lihatlah beberapa momen yang tak terlupakan dari turnamen-turnamen kami.</p>
        </section>
        {/* Genre */}
        <section id="genre" class="three">
          <div class="container">
            <header>
              <h2>Genre</h2>
            </header>
            <p>Di bawah ini adalah beberapa genre game yang kami sediakan untuk turnamen esports kami.</p>

            <div class="row">
              <div class="col-4 col-12-mobile">
                <article class="item">
                  <a>
                    <img src="images/pubgm.png" alt="PUBGM" />
                    <header>
                      <h3>PUBGM</h3>
                    </header>
                  </a>
                </article>
              </div>
              <div class="col-4 col-12-mobile">
                <article class="item">
                  <a>
                    <img src="images/ml.png" alt="MLBB" />
                    <header>
                      <h3>MLBB</h3>
                    </header>
                  </a>
                </article>
              </div>
              <div class="col-4 col-12-mobile">
                <article class="item">
                  <a>
                    <img src="https://a-static.besthdwallpaper.com/valorant-logo-wallpaper-2400x1350-55226_50.jpg"
                      alt="Valorant" />
                    <header>
                      <h3>Valorant</h3>
                    </header>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" class="four">
          <div class="container">

            <header>
              <h2>Registrasi</h2>
            </header>

            <p>Siapkan tim game Anda dan daftarkan diri sekarang juga! Isi formulir di bawah ini dengan informasi
              lengkap.
              Pastikan Anda mengisi semua bidang dengan cermat. Setelah selesai, tekan tombol "Send Message" dan
              kami akan menantikan kehadiran tim Anda di turnamen mendatang.
              Jangan lewatkan kesempatan untuk bermain dengan para pemain hebat lainnya dan jadilah juara di dunia
              game!
            </p>

            <form method="post" action="#">
              <div class="row">
                <div class="col-6 col-12-mobile">
                  <input type="text" name="player_name" placeholder="Nama Tim" required />
                </div>
                <div class="col-6 col-12-mobile">
                  <input type="text" name="team_name" placeholder="Nama Kapten" required />
                </div>
                <div class="col-12">
                  <h3>Daftar Anggota</h3>
                </div>
                <div class="col-6 col-12-mobile">
                  <input type="text" name="captain_name" placeholder="Player 1 " required />
                </div>
                <div class="col-6 col-12-mobile">
                  <input type="text" name="captain_name" placeholder="Player 2 " required />
                </div>
                <div class="col-6 col-12-mobile">
                  <input type="text" name="email" placeholder="Player 3" required />
                </div>
                <div class="col-6 col-12-mobile">
                  <input type="text" name="email" placeholder="Player 4" required />
                </div>
                <div class="col-6 col-12-mobile">
                  <input type="text" name="email" placeholder="Player 5" required />
                </div>
                <div class="col-6 col-12-mobile">
                  <input type="text" name="email" placeholder="Player 6" required />
                </div>
                <div class="col-6 col-12-mobile">
                  <select name="game_genre" required>
                    <option value="">Pilih Genre</option>
                    <option value="RPG">Mobile Legends</option>
                    <option value="FPS">PUBG</option>
                    <option value="Adventure">Valorant</option>
                  </select>
                </div>
                <div class="col-6 col-12-mobile"> <label for="logo" class="file-label">Logo <input type="file"
                      name="logo" id="logo" accept="image/*" required /></label></div>

                <div class="col-12">
                  <input type="submit" value="Send Message" id="submitButton" />
                </div>
              </div>
            </form>

          </div>
        </section>

      </div>

      {/* Footer */}
      <div id="footer">

        {/* Copyright */}
        <ul class="copyright">
          <li>&copy; Planet E-Sport Organization.</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>

      </div>
      
    </>
  );
}

export default App;
