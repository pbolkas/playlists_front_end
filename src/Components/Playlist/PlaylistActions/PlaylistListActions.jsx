import React from 'react'
import EditPlaylistButton from './EditPlaylistButton';
import DeletePlaylistButton from './DeletePlaylistButton';

const PlaylistListActions = ({ playlist }) => {
  return <>
  <EditPlaylistButton title = {playlist.title} id = {playlist.id} />
  <DeletePlaylistButton id = {playlist.id}/>
  </>
}

export default PlaylistListActions;
