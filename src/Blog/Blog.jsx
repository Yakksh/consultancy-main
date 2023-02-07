import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import './Blog.css'

function Blog() {
  return (
    <div className='blog'>
        <div className="container">
            <h1 className="page-title">We're coming soon</h1>
            <p className="page-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur
            </p>
            <p>Stay connected</p>
            <nav className="social-links">
            <ul className="footer__socials">
            <li>
              <a href="#">
                <Icon.Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon.Instagram />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon.Twitter />
              </a>
            </li>
          </ul>
            </nav>
        </div>    </div>
  )
}

export default Blog