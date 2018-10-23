'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.less';

class Footer extends Component {

  render() {
    return (
			<footer id="main-footer" className="main-component">
				<div className="row footer-menu">
					<div className="responsive">
						<div className="left text-left">
							<ul className="list">
								<li><Link to="/" className="underline-hover">HOME</Link></li>
								<li><Link to="/contattaci/" className="underline-hover">CONTATTACI</Link></li>
								<li><Link to="/lavora-con-noi/" className="underline-hover">LAVORA CON NOI</Link></li>
								<li><Link to="/privacy-policy/" className="underline-hover">PRIVACY POLICY</Link></li>
							</ul>
						</div>
						<div className="right text-left social">
							<ul className="list">
								<li>
									<Link to="https://www.facebook.com/hourtel.it/" target="_blank">
										<img src="/assets/images/icons/social/facebook.png" /> <span className="underline-hover">FACEBOOK</span>
									</Link>
								</li>
								<li>
									<Link to="javascript:void();">
										<img src="/assets/images/icons/social/twitter.png" /> <span className="underline-hover">TWITTER</span>
									</Link>
								</li>
								<li>
									<Link to="http://www.instagram.com/hourtel_italia/" target="_blank">
										<img src="/assets/images/icons/social/instagram.png" /> <span className="underline-hover">INSTAGRAM</span>
									</Link>
								</li>
								<li>
									<Link to="mailto:info@hourtel.it">
										<img src="/assets/images/icons/contacts/mail.png" /> <span className="underline-hover">info@hourtel.it</span>
									</Link>
								</li>
								<li>
									<Link to="tel:+39 338 99 74 305">
										<img src="/assets/images/icons/contacts/phone.png" /> <span className="underline-hover">+39 338 99 74 305</span>
									</Link>
								</li>
								<li>
									<Link to="intent://send/393389974305#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">
										<img src="/assets/images/icons/contacts/whatsapp.png" /> <span className="underline-hover">+39 338 99 74 305</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="responsive">
						<div className="left copyright">
							<span className="brand">HOURTEL</span>
							<span>&copy;</span>
							<span>2018, ALL RIGHTS RESERVED.</span>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</footer>
    );
  }
}

export default Footer;