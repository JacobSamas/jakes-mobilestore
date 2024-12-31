"use client";

export default function Footer() {
  return (
    <footer className="bg-deepBlue text-starlight py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="/about" className="hover:text-goldenStar transition-all">
              About Us
            </a>
            <a href="/contact" className="hover:text-goldenStar transition-all">
              Contact Us
            </a>
            <a href="/privacy-policy" className="hover:text-goldenStar transition-all">
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-goldenStar transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56v14.91c0 2.52-2.07 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.47V4.56C0 2.04 2.04 0 4.56 0h14.91C21.96 0 24 2.04 24 4.56zM7.2 19.2h3.6V9.6H7.2v9.6zm2.4-11.4c1.12 0 2.04-.91 2.04-2.04S10.72 3.6 9.6 3.6 7.56 4.52 7.56 5.76c0 1.13.92 2.04 2.04 2.04zm12 11.4h3.6v-5.04c0-3.42-4.32-3.16-4.32 0v5.04zm-1.92-9.6h3.6V9.6h-3.6v9.6h-3.6v-9.6h3.6z" />
              </svg>
            </a>
            <a href="#" className="hover:text-goldenStar transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69A4.21 4.21 0 0021.86 4c-.81.48-1.72.83-2.68 1.02a4.21 4.21 0 00-7.17 3.83 11.98 11.98 0 01-8.69-4.41 4.21 4.21 0 001.3 5.63 4.17 4.17 0 01-1.91-.53v.05c0 2.06 1.46 3.78 3.4 4.17a4.21 4.21 0 01-1.9.07 4.22 4.22 0 003.93 2.92 8.45 8.45 0 01-5.24 1.8c-.34 0-.68-.02-1.02-.06a11.95 11.95 0 006.49 1.9c7.79 0 12.06-6.46 12.06-12.06l-.01-.55A8.58 8.58 0 0024 5.34a8.3 8.3 0 01-2.4.65 4.2 4.2 0 001.85-2.3z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-starryGlow text-center md:text-right">
            &copy; {new Date().getFullYear()} Jake's Mobile Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
