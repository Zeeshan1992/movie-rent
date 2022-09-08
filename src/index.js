import React, { useState } from 'react';
import { render } from 'react-dom';
import Header from './Header.jsx';
import Movie from './Movie.jsx'
import './styles/buttons.scss'
import Modal from './Modal'
import './styles/index.scss'
import Cart from './Cart'
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'

const Index = () => {
  const [basket, updateBasket] = useState([])
  const [isBasketActive, toggleBasket] = useState(false)
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path='/'>
          <Header basket={basket} toggleBasket={toggleBasket} isBasketActive={isBasketActive} />
          <Movie updateBasket={updateBasket} basket={basket} genre={['Action', 'Horror']} />

          <Cart isBasketActive={isBasketActive} updateBasket={updateBasket} toggleBasket={toggleBasket} basket={basket} />
        </Route>
        <Route component={() => (
          <div>Page not found</div>
        )} />
      </Switch>
      {background && <Route path="/modal" children={<Modal />} />}
    </>
  );
}

render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>

  ,
  document.getElementById('root')
);

