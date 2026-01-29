import classes from './Song.module.scss'


interface SongTitle {
    title: string;
    artist: string;
    duration: string;
    index?: number;
    currentTrackIndex?: number;
}



const Song = ({duration, title, artist, index, currentTrackIndex}:SongTitle) => {
    return (
            <div
                className={
                    currentTrackIndex === index
                        ? classes.songInfo__active
                        : classes.songInfo
                }
            >
                <div className={classes.songInfo__container}>
                    <h3 className={classes.songInfo__songTitle}>{title}</h3>
                    <p className={classes.songInfo__songArtist}>{artist}</p>
                    <span className={classes.songInfo__songDuration}>{duration}</span>
                </div>
                    <div className={classes.songInfo__playSongContainer}>
                        {currentTrackIndex === index ?
                            <img className={classes.songInfo__pauseSong} src="src/assets/images/pauseIcon.png" alt="Play song" width={25} height={25} /> :
                            <img className={classes.songInfo__playSong} src="src/assets/images/playIcon.png" alt="Play song" width={50} height={50} />
                        }

                    </div>

            </div>
    );
};

export default Song;