import React from 'react';
export function Help() {
	return (
		<div className="col-md-4">
			<div className="ftco-footer-widget mb-4">
				<h2 className="ftco-heading-2">Help</h2>
				<div className="d-flex">
					<ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
						<li>
							<a href="#" className="py-2 d-block">
								Shipping Information
							</a>
						</li>
						<li>
							<a href="#" className="py-2 d-block">
								Returns &amp; Exchange
							</a>
						</li>
						<li>
							<a href="#" className="py-2 d-block">
								Terms &amp; Conditions
							</a>
						</li>
						<li>
							<a href="#" className="py-2 d-block">
								Privacy Policy
							</a>
						</li>
					</ul>
					<ul className="list-unstyled">
						<li>
							<a href="#" className="py-2 d-block">
								FAQs
							</a>
						</li>
						<li>
							<a href="#" className="py-2 d-block">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Help;
