import classes from './App.module.scss'
import {BrowserRouter, Route, Routes} from "react-router";
import AllSongs from "./components/AllSongs.tsx";
import Playlists from "./components/Playlists.tsx";


const App = () => {
    return (
        <BrowserRouter>
            <div className={classes.app}>
                <main className={classes.appMain}>
                    <section className={classes.appPlayerSection}>

                    </section>
                    <section className={classes.appPlaylistSection}>
                        <Routes>
                            <Route path="/" element={<AllSongs/>}/>
                            <Route path="/playlists" element={<Playlists/>}/>
                        </Routes>
                    </section>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;