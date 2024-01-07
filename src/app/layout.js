// RootLayout.js

import './globals.css';

export const metadata = {
  title: 'Triox',
  description: 'We Design & Develop Remarkable Websites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
