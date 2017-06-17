import * as React from 'react';
import './App.css';

interface IProfile {
    artist: any;
}

class Profile extends React.Component<IProfile, any> {
    render() {
        let artist = {
            name: '',
            followers: { total: '' },
            images: [{ url: '' }],
            genres: []
        };

        artist = this.props.artist != null ? this.props.artist : artist;

        return (
            <div className="profile">
                <img
                    alt="Profile"
                    className="profile-img"
                    src={artist.images[0].url}
                />
                <div>
                    <div className="profile-info">
                        <div className="profile-name">
                            {artist.name}
                        </div>
                        <div className="profile-followers">
                            {artist.followers.total} followers
                        </div>
                    </div>
                    <div className="profile-genres">
                        {
                            artist.genres.map((genre: string) => {
                                genre = genre != artist.genres[artist.genres.length - 1]
                                    ? ` ${genre}, `
                                    : ` & ${genre}`;
                                return (
                                    <span key={genre}>{genre}</span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
