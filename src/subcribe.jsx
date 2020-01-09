import React from 'react';

class Subcribe extends React.Component {
	render() {
		return (
			<div className="container py-4">
				<div className="row d-flex justify-content-center py-5">
					<div className="col-md-6">
						<h2 style={{ fontSize: 22 + 'px' }} className="mb-0">
							Subcribe to our Newsletter
						</h2>
						<span>Get e-mail updates about our latest shops and special offers</span>
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<form action="#" className="subscribe-form">
							<div className="form-group d-flex">
								<input type="text" className="form-control" placeholder="Enter email address" />
								<input type="submit" value="Subscribe" className="submit px-3" />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default Subcribe;
