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
            </p><br></br>
            <p>
            All views expressed are my own and do not reflect the views of my employer.
            </p>
          </PageLayout.Pane>
          <PageLayout.Footer divider="line" className="PageLayout.Footer">
            <h5 label="Footer" height={64}> Thank you for stopping by. </h5>
          </PageLayout.Footer>
      </PageLayout>
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;