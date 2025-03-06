import GroupImage from '../../lib/Group 19.png';


const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              src={GroupImage}
              alt="Devscribe Logo"
              className="h-8 w-auto filter brightness-100"
            />
            <p className="text-muted-foreground text-base">
              Instantly generate, test, and perfect your API docs with Devscribe
            </p>
            <div className="flex space-x-6">
              <button  className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                <span className="sr-only">X</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.095479,10.316482 L22.4009769,1 L20.4355904,1 L12.8271732,9.34823806 L6.76638225,1 L1,1 L9.74776309,13.1586555 L1,23 L2.96541042,23 L10.9688527,14.2936236 L17.3430416,23 L23.1089533,23 L14.095479,10.316482 Z M11.5772051,13.0111044 L10.5556659,11.4286752 L3.05729317,2.48797914 L5.46014122,2.48797914 L11.4203375,10.0128189 L12.4418768,11.5952481 L20.4404872,21.5577309 L18.0376392,21.5577309 L11.5772051,13.0111044 Z"/>
                </svg>
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Product
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#features" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Security
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Updates
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Help Center
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      API Documentation
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Community
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Careers
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Press
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Privacy
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Terms
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Cookie Policy
                    </button>
                  </li>
                  <li>
                    <button className="text-base text-muted-foreground hover:text-foreground transition-colors">
                      Licenses
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base text-muted-foreground xl:text-center">
            &copy; 2024 Devscribe, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 