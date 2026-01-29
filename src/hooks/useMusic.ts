import {useState} from "react";

interface SongType {
    id: number;
    title: string;
    artist: string;
    url: string;
    duration: string;
}
type SongTypeOrNull = SongType | null;
type SongListType = SongType[];

const songs:SongListType = [
    {
        id: 1,
        title: "Lofi fitst song",
        artist: "Lorem",
        url: '../assets/songs/lofi1.mp3',
        duration: '1:26'
    },
    {
        id: 2,
        title: "Lofi second song",
        artist: "Lorem",
        url: '../assets/songs/lofi2.mp3',
        duration: '2:38'
    },
    {
        id: 3,
        title: "Lofi third song",
        artist: "Lorem",
        url: '../assets/songs/lofi3.mp3',
        duration: '1:09'
    },
    {
        id: 4,
        title: "Lofi fourth song",
        artist: "Lorem",
        url: '../assets/songs/lofi4.mp3',
        duration: '3:18'
    },
    {
        id: 5,
        title: "Lofi fifth song",
        artist: "Lorem",
        url: '../assets/songs/lofi5.mp3',
        duration: '1:31'
    },
    {
        id: 6,
        title: "Lofi sixth song",
        artist: "Lorem",
        url: '../assets/songs/lofi6.mp3',
        duration: '2:12'
    },
    {
        id: 7,
        title: "Lofi seventh song",
        artist: "Lorem",
        url: '../assets/songs/lofi7.mp3',
        duration: '1:30'
    },
    {
        id: 8,
        title: "Lofi eighth song",
        artist: "Lorem",
        url: '../assets/songs/lofi8.mp3',
        duration: '1:45'
    },
    {
        id: 9,
        title: "Lofi ninth song",
        artist: "Lorem",
        url: '../assets/songs/lofi9.mp3',
        duration: '3:06'
    },
    {
        id: 10,
        title: "Lofi tenth song",
        artist: "Lorem",
        url: '../assets/songs/lofi10.mp3',
        duration: '1:06'
    },
]

const UseMusic = () => {
    const [allSongs, setAllSongs] = useState<SongListType>(songs);
    const [currentTrack, setCurrentTrack] = useState<SongTypeOrNull>(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>();

    const handlePlaySong = (song:SongType, index:number) => {
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
    }

    return {allSongs, handlePlaySong, currentTrackIndex};
};

export default UseMusic;