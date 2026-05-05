@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Noto Serif JP', serif;
  color: #333;
  background: #faf9f6;
  padding-top: 70px;
}

/* header */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.logo {
  font-size: 1.2rem;
  letter-spacing: 3px;
}

.nav {
  display: flex;
}

.nav a {
  margin-left: 28px;
  text-decoration: none;
  color: #333;
  transition: 0.3s;
}

.nav a:hover {
  opacity: 0.6;
}

/* hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 26px;
  height: 2px;
  background: #333;
  margin: 4px 0;
}

/* hero */
.hero {
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1506744038136-46273834b3fb") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  letter-spacing: 4px;
}

.hero p {
  margin-top: 16px;
  font-size: 1.1rem;
}

/* sections */
.concept {
  padding: 100px 20px;
  text-align: center;
}

.concept h2 {
  margin-bottom: 24px;
  font-size: 2rem;
}

.concept p {
  line-height: 2;
}

.image-section img {
  width: 100%;
  display: block;
}

/* mobile */
@media (max-width: 768px) {
  .nav {
    display: none;
    position: absolute;
    top: 70px;
    right: 20px;
    background: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .nav.active {
    display: flex;
  }

  .nav a {
    margin: 12px 0;
  }

  .hamburger {
    display: flex;
  }

  .hero h1 {
    font-size: 2rem;
  }
}
