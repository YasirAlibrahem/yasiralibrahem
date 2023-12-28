import logo from './logo.svg';
import './App.css';
import {ThemeProvider, BaseStyles} from '@primer/react';
import {TabNav} from '@primer/react';
import {Blankslate} from '@primer/react/drafts';
import {BookIcon} from '@primer/styled-octicons';

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <div className="App">
        <TabNav aria-label="Main">
          <TabNav.Link href="#" selected>
            Home
          </TabNav.Link>
          <TabNav.Link href="#">Posts</TabNav.Link>
          <TabNav.Link href="#">Contact</TabNav.Link>
        </TabNav> 
        <Blankslate>
          <Blankslate.Visual>
            <BookIcon size="medium" />
          </Blankslate.Visual>
          <Blankslate.Heading>work in progress</Blankslate.Heading>
          <Blankslate.Description>
            designed with love. 
          </Blankslate.Description>
        </Blankslate>
        {/* <header className="App-header">
        </header> */}
      </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
