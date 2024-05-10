import React from 'react';
import PropTypes from 'prop-types';
import './tailwind.scss';

function Footer({ themeConfig: { copyRight }, menu: { items } }) {
  return (
    <div className="bg-black mx-3">
      <div class="grid grid-cols-1 gap-8 sm:gap-2 sm:grid-cols-4">
        <div class="mt-2">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacts</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-1">
                    <p class="text-white">
                    <b>Email: </b><br/>
                    wheee.official@gmail.com
                    </p>
                </li>
                <li>
                    <p class="text-white">
                    <b>Mobile:</b><br/>
                      +91 987432671
                    </p>
                </li>
                <li>
                    <p class=" text-white">
                      <b>Address :</b><br/>
                      New Kalimati Road,<br/>
                      Sakchi, Jamshedpur,<br/>
                      Jharkhand - 831001.<br/>
                    </p>
                </li>
            </ul>
        </div>
        <div class="mt-2">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Menu Items</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
            {items.map((i, index) => (
                <li class="mb-1" key={index}>
                    <a href={i.url} class="hover:underline text-white">{i.name}</a>
                </li>
            ))}
            </ul>
        </div>
        <div class="mt-2">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Useful Links</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-1">
                    <a href="/page/contact-us" class="hover:underline text-white">Contact US</a>
                </li>
                <li class="mb-1">
                    <a href="/page/about-us" class="hover:underline text-white">About US</a>
                </li>
                <li class="mb-1">
                    <a href="/page/privacy-policy" class="hover:underline text-white">Privacy policy</a>
                </li>
            </ul>
        </div>
        <div class="mt-2">
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-1">
                    <a href="#" class="hover:underline text-white">Youtube</a>
                </li>
                <li class="mb-1">
                    <a href="#" class="hover:underline text-white">Instagram</a>
                </li>
                <li class="mb-1">
                    <a href="#" class="hover:underline text-white">Facebook</a>
                </li>
            </ul>
        </div>
      </div>
      <hr class="mt-3 mb-1 border-gray-200 dark:border-gray-700 lg:my-5" />
      <div className="self-center">
        <div className="copyright text-center md:text-right text-textSubdued">
          <span>{copyRight}</span>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  themeConfig: PropTypes.shape({
    copyRight: PropTypes.string
  })
};

Footer.defaultProps = {
  themeConfig: {
    copyRight: '© 2022 Evershop. All Rights Reserved.'
  }
};

export default Footer;

export const layout = {
  areaId: 'footer',
  sortOrder: 10
};

export const query = `
  query query {
    themeConfig {
      copyRight
    }
    menu {
      items {
        name
        url
      }
    }
  }
`;
