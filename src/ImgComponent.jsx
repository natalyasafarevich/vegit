import React from 'react';
export function ImgComponent({ children, url, alt, name, price, price2 }) {
	return (
		<div className="col-md-6 col-lg-3 ">
			<div className="product">
				{' '}
				<a href="#" className="img-prod  fadeInUp ">
					<img className="img-fluid fadeInUp " src={`${url}`} alt={`${alt}`} />

					{/* <span className="status">30%</span> */}
					<div className="overlay" />
				</a>
				<div className="text py-3 pb-4 px-3 text-center">
					<h3>
						<a href="#">
							{/* {children} */}
							{`${name}`}
						</a>
					</h3>
					<div className="d-flex">
						<div className="pricing">
							<p className="price">
								<span className="mr-2 price-dc">
									{/* {children} */}
									{`${price}`}
								</span>
								<span className="price-sale">
									{children}
									{`${price2}`}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ImgComponent;
