import React from "react";
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('../../views/home/index'));
const Music = React.lazy(() => import('../../views/home/music/musicRoom'));
const MusicIndex = React.lazy(() => import('../../views/home/music/components/index'));
const MusicSinger = React.lazy(() => import('../../views/home/music/components/singer'));
const MusicNewSong = React.lazy(() => import('../../views/home/music/components/newSong'));
const Mine = React.lazy(() => import('../../views/home/mine'));
const Dev = React.lazy(() => import('../../views/home/dev'));
const Client = React.lazy(() => import('../../views/home/client'));
let routerConfig = [
  { path: '*', element: <Navigate to='/home/music/index'></Navigate> },
  { path: 'home', element: <Home></Home>,
    children: [
      { path: '*', element: <Navigate to='/home/music/index'></Navigate> },
      { path: 'music', element: <Music></Music>, children: [
        { path: '*', element: <Navigate to='/home/music/index'></Navigate> },
        { path: 'index', element: <MusicIndex></MusicIndex> },
        { path: 'singer', element: <MusicSinger></MusicSinger> },
        { path: 'newSong', element: <MusicNewSong></MusicNewSong> },
      ] },
      { path: 'mine', element: <Mine></Mine> },
      { path: 'dev', element: <Dev></Dev> },
      { path: 'client', element: <Client></Client> },
    ]
  }
];

export default routerConfig;


