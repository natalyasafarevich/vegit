import React from 'react';

class Text extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row no-gutters slider-text align-items-center justify-content-center">
					<div className="col-md-9 ftco-animate text-center">
						<p className="breadcrumbs">
							<span className="mr-2">
								<a href="index.html">Home</a>
							</span>{' '}
							<span>
								Products
								{/* {text2} */}
							</span>
						</p>
						<h1 className="mb-0 bread">Products</h1>
					</div>
				</div>
			</div>
		);
	}
}
export default Text;
