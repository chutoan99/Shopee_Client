import ReactDOM from 'react-dom'
import './style/index.css'
import './style/animation.css'
import './style/grid.css'
import './style/config.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import App from './routes/Routes'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './redux'
const rootElement = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	rootElement
)
