import './globals.css';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-nightSky text-starlight">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
