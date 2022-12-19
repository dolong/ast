import Head from 'next/head';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>Asteroids</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <canvas id="gameCanvas" width="800" height="600"></canvas>

      <style jsx>{`
        /* Style the canvas and game elements */
        canvas {
          border: 1px solid black;
        }

        .bullet {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
        }
      `}</style>

      <script src="/game.js"></script>
    </div>
  );
};

export default Home;
