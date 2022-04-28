import Head from 'next/head'
import NavigationBar from '../Components/navbar'
import Footer from '../Components/footer'
import DateFormFill from '../Components/date_formfill'
import Button from '../Components/button'
import Card from '../Components/card'






export default function Home() {
  return (

    //Navbar
   

    <>
      
    {/* <!-- Bootstrap CSS --> */}
       {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link> */}
        {/* <!-- Tailwind CSS --> */}
       <script src="https://cdn.tailwindcss.com"></script>
      
      <Head> 
        <title>MB-Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
       

      </Head>
      
      <NavigationBar/>
      <body className='bg-slate-50'>
      
      </body>
      <DateFormFill/>
      <main>
    
       
     
      {/* BUTTON section*/}


      { Button('Today') }
      { Button('Yesterday') }
      { Button('Last 7 days') }
      { Button('Last 30 days') }
      { Button('Last 30 days') }
      { Button('Last month') }
      { Button('This month') }
      { Button('All time') }
      { Button('Schedule') }

      {/*THE END OF BUTTON SECTION*/}

    {/* CARD SECTION */}
    {/* ROW 1 */}
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4" >
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    </div>
    {/* ROW 2 */}
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    </div>
     {/*THE END OF CARD SECTION*/}
  


    </main> 
    {/* footer */}
      <Footer/>
       
    

     
    </>
  )
}

 {/* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style> */}

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}