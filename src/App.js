import Header from './views/header/Header';
import Main from './views/main/Main';
import Footer from "./views/footer/Footer";


import './App.scss';

function App() {
  return (
    <>
      <Header nav/>
      <Main />
      <Footer whatsapp/>
    </>
  );
}

export default App;
