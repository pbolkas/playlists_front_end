export const songsSelector = state => state.playlist.songs;

export const selectedSongSelector = state=> state.playlist.selectedSong;

export const playlistsSelector = state => state.playlist.playlists;

export const playlistsLoadingSelector = state => state.playlist.playlistsLoading;

export const playlistsErrorSelector = state => state.playlist.playlistError;

export const playlistAddErrorSelector = state => state.playlist.playlistAddError;