import * as React from 'react';

interface IGallery {
    tracks: any;
}

interface IState {
    playingUrl: string;
    audio: any;
    isPlaying: boolean;
}

class Gallery extends React.Component<IGallery, IState> {
    constructor(props: IGallery) {
        super(props);
        this.state = {
            playingUrl: '',
            audio: null,
            isPlaying: false
        }
    }

    playAudio(previewUrl: string) {
        let audio = new Audio(previewUrl);
        if (!this.state.isPlaying) {
            audio.play();
            this.setState({
                isPlaying: true,
                playingUrl: previewUrl,
                audio: audio
            });
        } else {
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause();
                this.setState({
                    isPlaying: false
                })
            } else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    isPlaying: true,
                    playingUrl: previewUrl,
                    audio: audio
                });
            }
        }
    }

    render() {
        const { tracks } = this.props.tracks;

        return (
            <div>
                {tracks.map((track: any, index: number) => {
                    const trackImg = track.album.images[0].url;
                    return (
                        <div
                            key={index}
                            className="track"
                            onClick={() => this.playAudio(track.preview_url)}
                        >
                            <img
                                src={trackImg}
                                className="track-img"
                                alt="track"
                            />
                            <div className="track-play">
                                <div className="track-play-inner">
                                    {
                                        this.state.playingUrl === track.preview_url
                                            ? <span>| |</span>
                                            : <span> &#9654;</span>
                                    }
                                </div>
                            </div>
                            <p className="track-text">
                                {track.name}
                            </p>
                        </div>)


                })}
            </div>
        )
    }
}

export default Gallery;