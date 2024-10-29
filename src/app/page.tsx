import Image from "next/image";
import { Fragment } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Website',
  'name': 'The Adaire Solutions',
  'alternateName': 'A Burgeon Adaire Company',
  'url': 'https://adairesolutions.com'
}

export default function Home() {
  return (
    <Fragment>
      <div className="adairesolutions-whole-container container mx-auto">
        <div className="adairesolutions-content grow">
          <div className="flex flex-col h-full">
            <div className="adairesolutions-navbar pt-12 pb-6 sm:pb-12 px-6">
              <div className="flex flex-col sm:flex-row justify-between">
                <span className="text-white text-2xl font-normal antialiased text-center sm:text-left">The Adaire <span className="font-semibold">Solutions</span></span>
                <div className="flex pt-3 sm:pt-0 justify-center sm:justify-end">
                  <a href="/portfolio" className="text-gray-500 hover:text-white transition-colors font-medium antialiased self-center mx-3">Portfolio</a>
                  <a href="/about" className="text-gray-500 hover:text-white transition-colors font-medium antialiased self-center mx-3">About</a>
                  <a href="/contact" className="text-gray-500 hover:text-white transition-colors font-medium antialiased self-center mx-3">Contact</a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h1 className="text-white text-xl sm:text-3xl antialiased text-center sm:text-left font-medium">Elevate your business with The Adaire Solutions, offering cloud-based services that drive innovation and streamline your day-to-day operations.</h1>
            </div>
            <div className="grow flex justify-center items-center py-6 sm:py-0">
              <Image
                priority
                alt="The Adaire Solutions"
                height="0"
                width="0"
                className="adairesolutions-logo"
                src="https://images.burgeonadaire.com/adairesolutions/adairesolutions-logo.webp"
              />
            </div>
          </div>
        </div>
        <div className="adairesolutions-footer pb-12 pt-6 sm:pt-12 px-6">
          <div className="flex flex-col sm:flex-row justify-between items-end">
            <div className="self-center py-12 sm:py-0">
              <a href="https://burgeonadaire.com" target="_blank" rel="noopener">
                <Image
                  priority
                  alt="PT. Burgeon Adaire International"
                  height="0"
                  width="0"
                  className="burgeonadaire-logo"
                  src="https://images.burgeonadaire.com/adairesolutions/bai-logo.webp"
                />
              </a>
            </div>
            <div className="self-center sm:self-end">
              <div className="flex flex-row justify-end py-3 sm:py-0">
                <a href="https://burgeonadaire.com/terms-and-conditions" target="_blank" rel="noopener" className="px-3 text-gray-500 hover:text-white transition-colors w-full sm:w-auto text-center sm:text-right self-center antialiased">
                  Terms and Conditions
                </a>
                <a href="https://burgeonadaire.com/privacy-policy" target="_blank" rel="noopener" className="px-3 text-gray-500 hover:text-white transition-colors w-full sm:w-auto text-center sm:text-right self-center antialiased">
                  Privacy Policy
                </a>
                <a href="https://burgeonadaire.com/cookie-policy" target="_blank" rel="noopener" className="pl-3 pr-3 sm:pr-0 text-gray-500 hover:text-white transition-colors w-full sm:w-auto text-center sm:text-right self-center antialiased">
                  Cookie Policy
                </a>
              </div>
              <p className="text-white antialiased py-3 text-center sm:text-end">© 2024 <span className="font-medium">PT. Burgeon Adaire International</span>. All rights reserved</p>
              <div className="flex flex-row justify-center sm:justify-end py-3 sm:py-0">
                <a href="https://github.com/adairesolutions" target="_blank" rel="noopener" className="text-gray-500 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faGithub} className="fa-fw px-2" size="xl" />
                </a>
                <a href="https://linkedin.com/company/adairesolutions" target="_blank" rel="noopener" className="text-gray-500 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faLinkedinIn} className="fa-fw px-2" size="xl" />
                </a>
                <a href="https://x.com/burgeonadaire" target="_blank" rel="noopener" className="text-gray-500 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faXTwitter} className="fa-fw px-2" size="xl" />
                </a>
                <a href="https://www.instagram.com/burgeonadaire" target="_blank" rel="noopener" className="text-gray-500 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faInstagram} className="fa-fw pl-2" size="xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Fragment>
  );
}
