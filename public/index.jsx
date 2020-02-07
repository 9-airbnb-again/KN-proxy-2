import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import * as theme from '../../Related-Homes/client/src/config/theme.js';
import AdrianApp from '../../scheduling/client/src/components/App.js';
import GalApp from '../../reviews/client/src/components/App.jsx';
import KevinApp from '../../air-carousel/client/src/components/App.jsx';
import KyleApp from '../../Related-Homes/client/src/components/App.jsx';

ReactDOM.render(<AdrianApp />, document.getElementById('adrianComponent'));

ReactDOM.render(<GalApp />, document.getElementById('galComponent')
);

ReactDOM.render(<KevinApp />, document.getElementById('kevinComponent'));

ReactDOM.render(<ThemeProvider theme={theme}><KyleApp /></ThemeProvider>, document.getElementById('kyleComponent'));
