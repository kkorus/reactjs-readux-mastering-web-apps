import * as React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';
import searchResponse from './search-response';
import topTracksResponse from './top-tracks-response';
import './App.css';

class App extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: null
    };
  }

  onQueryChange = (target: EventTarget): void => {
    var input = target as HTMLInputElement;
    this.setState({
      query: input.value
    });
  }

  onQueryKeyPress = (key: string): void => {
    if (key === 'Enter') {
      this.search();
    }
  };

  search = (): void => {
    this.setState({ artist: searchResponse.artists.items[0] });
    this.setState({ tracks: topTracksResponse });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange={event => this.onQueryChange(event.target)}
              onKeyPress={event => this.onQueryKeyPress(event.key)}
            />
            <InputGroup.Addon onClick={this.search}>
              <Glyphicon
                glyph="search">
              </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
            ?
            <div>
              <Profile
                artist={this.state.artist}
              />
              <Gallery
                tracks={this.state.tracks}
              />
            </div>
            : <div></div>
        }
      </div>
    );
  }
}

export default App;
