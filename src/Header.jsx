import React from 'react';
import './styles/header.scss';

const Header = ({ basket, toggleBasket, isBasketActive }) => (
  <header className="header">
    <h2 className='header__title'>Rent a movie</h2>
    <img src="data:image/png;base64,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" alt='logo of a cinema theater'></img>
    <nav>
      <ul>
        <li><button aria-label='cart icon' type='button' onClick={() => toggleBasket(!isBasketActive)} to='/checkout'>
          <svg className='header__cart-icon' viewBox="0 0 40 40">
            <g fill="none" fillRule="evenodd" stroke="currentColor"><circle cx="24.039" cy="26.442" r="1.346" fill="#fff" strokeWidth="1.5" />
              <circle cx="17.27" cy="26.442" r="1.346" fill="currentColor" strokeWidth="1.5" />
              <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.578 15.98h-7.385v5.603c0 .68.551 1.23 1.23 1.23h10.98c.506 0 .96-.309 1.146-.78v-4.791a1.23 1.23 0 00-1.223-1.23l-4.748-.032h0z" />
              <path strokeLinecap="round" strokeWidth="1.5" d="M14.203 16.019v-2.827L11.8 12.5" /><circle cx="20" cy="20" r="16" strokeLinecap="square" strokeWidth="2" /></g></svg>
          <span className='header__basket-items'>{basket.length}</span></button></li>
      </ul>
    </nav>
  </header>
);

export default Header;
