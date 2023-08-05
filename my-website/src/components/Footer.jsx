export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container container">
        <div class="social-media">
          <ul class="list">
            <li class="list-item">
              <a
                href="https://github.com/joaovitorwitt"
                target="_blank"
                class="list-link"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>

            <li class="list-item">
              <a
                href="https://www.linkedin.com/in/joaovitorwitt/"
                target="_blank"
                class="list-link"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <span>&copy; 2023 João. All rights reserved.</span>

        <a href="#home" class="scroll-top">
          <i class="fa-solid fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
}
