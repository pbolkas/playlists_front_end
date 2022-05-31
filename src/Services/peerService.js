import Peer from "peerjs";
import { PEER_HOST } from "./host";
import * as uuid from "uuid";

const id = uuid.v4().slice(0,4);

export const PEER_STATUS = {
  CONNECTION_IS_ALIVE: 'CONNECTION_IS_ALIVE',
  CONNECTION_FAILED: 'CONNECTION_FAILED',
  BROADCASTING: 'BROADCASTING',
}

export const getPeerId = () => {
  return id;
}

let peerClient = new Peer(id, {
  host: PEER_HOST,
  port: process.env.REACT_APP_PEER_PORT,
  debug: 1,
  path: "/myapp"
});

let connectionIsAlive = false;

peerClient.on('open', id => {
  connectionIsAlive = true;
});

export const initAnswer = (stream) => {
  if(!connectionIsAlive) {
    connectionIsAlive = false;
    return PEER_STATUS.CONNECTION_FAILED;
  }
  peerClient.on('call', (call) => {
    call.answer(stream);
  });
  return PEER_STATUS.BROADCASTING;
}

export const peerDisconnect = () => {
  peerClient.disconnect();
  connectionIsAlive = false;
}

export const getPeerClient = () => {
  return peerClient;
}

export const joinLiveShareId = (remotePeerId, placeStreamToLocalAudio) => {

  let fakeContext = new AudioContext();
  let fakeStream = fakeContext.createMediaStreamDestination().stream;
  
  var call = peerClient.call( remotePeerId, fakeStream );

  call.on('stream', (stream) => {
    placeStreamToLocalAudio(stream);
  });
}