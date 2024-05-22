import './App.css';
import {ThemeProvider, BaseStyles} from '@primer/react';
import {PageLayout} from '@primer/react';
import BlogPosts from './BlogPosts';

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <div className="App">
          <PageLayout className="PageLayout">
            {/* <PageLayout.Header>
              <h1 label="Header" height={64}> Yasir Alibrahem </h1>
            </PageLayout.Header> */}
            <PageLayout.Content className="PageLayout.Content">
              <BlogPosts />
            </PageLayout.Content>
            <PageLayout.Pane sticky divider="line" hidden={{narrow: true}}>
              <img src={process.env.PUBLIC_URL + '/chrome-512x512.png'} alt="Profile" style={{borderRadius: '50%', width: '100px', height: '100px'}} />
              <h1 label="Header" height={64}> Yasir Alibrahem </h1>
              <p>
                Musings on productivity, technology, communication, sustainability, and intentionality from a generalist engineer and a lens of economics. 
              </p>
              <p>All views expressed are my own and do not reflect the views of my employer.</p>
              <a href="mailto:alibrahem.yasir@gmail.com">
                <img src={process.env.PUBLIC_URL + '/mail.svg'} alt="alibrahem.yasir@gmail.com" style={{width: '20px', height: '20px'}} />
              </a>{' '}
              <a href="https://github.com/yasiralibrahem">
                <img src={process.env.PUBLIC_URL + '/github.svg'} alt="GitHub logo" style={{width: '20px', height: '20px'}} />
              </a>
            </PageLayout.Pane>
            <PageLayout.Footer divider="line" className="PageLayout.Footer">
              <h5 label="Footer" height={64}> © 2024 Yasir Alibrahem </h5>
            </PageLayout.Footer>
          </PageLayout>
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;