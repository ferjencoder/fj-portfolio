import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { About, Contact, Footer, Home, Navbar, Portfolio, Scrollbar, ThemeSwitcher } from './components';
import './index.css';
import './components/Scrollbar/Scrollbar.css';
import { Provider } from 'react-redux';
import { store } from './store';

export const FerJensApp = () => {

  return (

    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Scrollbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/service/*' element={<Service />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  );

};
