import ReactDOM from 'react-dom';
import './index.css';
import './style/MAIN.css';
import './style/index.css';
import './style/animation.css';
import './style/responsive.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './routes/Routes';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
