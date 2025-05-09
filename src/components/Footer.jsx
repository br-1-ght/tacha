import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name">
      Akinsola Abisola Tobiloba
      </div>
      <div className="footer-links">
        <a href="mailto:Avisualsaav@gmail.com" className="footer-icon">
            <i class="bi bi-envelope-fill"></i>
        </a>
        <a href="https://www.tiktok.com/@abisola_shotit?_t=ZM-8wC0o7VuilZ&_r=1" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <i class="bi bi-tiktok"></i>
        </a>
        <a href="tel:+2348101379235" className="footer-icon">
            <i class="bi bi-telephone-fill"></i>
        </a>
        <a href="https://www.instagram.com/abisola_shotit?igsh=MWRwMHFuaWttd2QwZg==" className="footer-icon">
            <i class="bi bi-snapchat"></i>
        </a>
      </div>
      <div className="footer-copyright">
        <p>Akinsola Abisola Tobiloba</p>
        <p className="report-page">Report page<i class="bi bi-flag-fill"></i></p>
      </div>
    </footer>
  );
}