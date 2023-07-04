import '../styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
    title : "Test nextJs project",
    description : "lorem ipsum sir dot emet"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Navbar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;