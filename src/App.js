import React from 'react';
// import Aos from './aos';
// import Bootstrapmin from './bootstrap.min.js';
// import BootstrapDatepicker from './bootstrap-datepicker.js';
// import BootstrapDatepicker from './bootstrap-datepicker';

import Style from './style.css';
import { Header } from './header';
import NavBar from './navbar';
import Hero from './hero-wrap';
import Nav from './container.jsx';
import SrcImg from './SrcImg';
import ImgComponent from './ImgComponent';
import Pages from './pages';
import Subcribe from './subcribe';
import Mouse from './mouse';
import RowMb from './row-mb5';
import Column from './column1';
import Menu1 from './menu1';
import Help from './help';
import Question from './quest';
import Copy from './copy';
import Text from './text-wr';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<NavBar />
				<Hero>
					<Text />
				</Hero>
				<section className="ftco-section">
					<div className="container">
						<Nav />
						<div className="row">
							<ImgComponent
								url={require('./product-1.jpg')}
								name="Bell Pepper"
								alt="Colorlib Template"
								price="$120.00"
								price2="$80.00"
							/>
							<SrcImg url={require('./product-2.jpg')} name="Strawberry" alt="Colorlib Template" />
							<SrcImg url={require('./product-3.jpg')} name="GREEN BEANS" alt="Colorlib Template" />
							<SrcImg url={require('./product-4.jpg')} name="PURPLE CABBAGE" alt="Colorlib Template" />
							<ImgComponent
								url={require('./product-5.jpg')}
								name="TOMATOE"
								price="$120.00"
								price2="$80.00"
								alt="Colorlib Template"
							/>
							<SrcImg url={require('./product-6.jpg')} name="BROCOLLI" alt="Colorlib Template" />
							<SrcImg url={require('./product-7.jpg')} name="CARROTS" alt="Colorlib Template" />
							<SrcImg url={require('./product-8.jpg')} name="FRUIT JUICE" alt="Colorlib Template" />
							<ImgComponent
								url={require('./product-9.jpg')}
								name="ONION"
								price="$120.00"
								price2="$80.00"
								alt="Colorlib Template"
							/>
							<SrcImg url={require('./product-10.jpg')} name="APPLE" alt="Colorlib Template" />
							<SrcImg url={require('./product-11.jpg')} name="GARLIC" alt="Colorlib Template" />
							<SrcImg url={require('./product-12.jpg')} name="CHILLI" alt="Colorlib Template" />
						</div>
					</div>
					<Pages />
				</section>
				<section class="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
					<Subcribe />
				</section>
				<footer class="ftco-footer ftco-section">
					<div className="container">
						<div className="row">
							<Mouse />
						</div>
						<RowMb>
							<Column />
							<Menu1 />
							<Help />
							<Question />
						</RowMb>
						<Copy />
					</div>
				</footer>
			</div>
		);
	}
}
export default App;
