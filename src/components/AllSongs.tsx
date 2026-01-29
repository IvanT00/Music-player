import UseMusic from "../hooks/useMusic.ts";
import classes from './AllSongs.module.css'
import Song from "./Song.tsx";

const AllSongs = () => {
    const {allSongs, handlePlaySong, currentTrackIndex} = UseMusic();
    return (
        <div className={classes.allSongs}>
            <div className={classes.allSongs__scrollContainer}>
                <div className={classes.allSongs__scrollContent}>
                    <h2 className={classes.allSongs__listTitle}>All songs({allSongs.length})</h2>
                    <div className={classes.allSongs__songsList}>
                        {allSongs.map((song, index) => (
                            <div
                                key={index}
                                onClick={() => handlePlaySong(song, index)}
                            >
                                <Song duration={song.duration} title={song.title} artist={song.artist} index={index} currentTrackIndex={currentTrackIndex}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSongs;