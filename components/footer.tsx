'use client'

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-bold mb-4">Get Hyped</h4>
            <p className="text-muted-foreground">
              Social-first content agency making content that stands out.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/expertises" className="hover:text-accent transition-colors">
                  Social Strategy
                </a>
              </li>
              <li>
                <a href="/expertises" className="hover:text-accent transition-colors">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="/expertises" className="hover:text-accent transition-colors">
                  Activation
                </a>
              </li>
              <li>
                <a href="/expertises" className="hover:text-accent transition-colors">
                  Data & Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/work" className="hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/gethypednl/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="https://www.tiktok.com/@gethyped.nl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                TikTok
              </a>
              <a href="https://www.instagram.com/gethyped.nl/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                Instagram
              </a>
              <a href="https://www.youtube.com/@gethypednl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; 2025 Get Hyped. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
