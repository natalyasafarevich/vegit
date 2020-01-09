import React from 'react';
import Background from './bg_1.jpg';

export function Hero({ children, text, text2, text3 }) {
	return (
		<div className="hero-wrap hero-bread" style={{ backgroundImage: 'url(' + Background + ')' }}>
			{children}
			{/* <div className="container">
				<div className="row no-gutters slider-text align-items-center justify-content-center">
					<div className="col-md-9 ftco-animate text-center">
						<p className="breadcrumbs">
							<span className="mr-2">
								<a href="index.html">{text}</a>
							</span>{' '}
							<span>
								{children}
								{text2}
							</span>
						</p>
						<h1 className="mb-0 bread">{text2}Products</h1>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default Hero;
