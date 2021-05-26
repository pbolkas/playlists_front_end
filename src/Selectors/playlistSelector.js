export const songsSelector = state => state.playlist.songs;

export const selectedSongSelector = state => state.playlist.selectedSong;

export const selectedPlaylistSelector = state => state.playlist.selectedPlaylist;

export const playlistsSelector = state => state.playlist.playlists;

export const playlistsLoadingSelector = state => state.playlist.playlistsLoading;

export const playlistsErrorSelector = state => state.playlist.playlistError;

export const playlistAddErrorSelector = state => state.playlist.playlistAddError;

export const playlistEditErrorSelector = state => state.playlist.playlistEditError;

export const playlistAlertSelector = state => state.playlist.playlistAlertContent;

export const songIsLoadingSelector = state => state.playlist.songIsLoading;

export const nextSongSelector = state => state.playlist.nextSong;

export const previousSongSelector = state => state.playlist.previousSong;