import logoWhite from '../../assets/images/logo_transparent.png';

const Home = () => (
  <div className="text-center text-2xl">
    <div className="flex justify-center">
      <img className="object-cover h-48 w-96" src={logoWhite} alt="logo" />
    </div>
    <h1>
      <b>OPEN-DOC</b> it&apos;s a open source service for you documentation
    </h1>
  </div>
);

export default Home;
