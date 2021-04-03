import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import CustomTheme from './assets/CustomTheme';
import "./assets/fonts/css/fontiran.css";
import "./assets/styles.css";
import Header from './components/header_footer/Header';


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <Header />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
