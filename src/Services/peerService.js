import Peer from "peerjs";
import { PEER_HOST } from "./host";
import * as uuid from "uuid";

const id = uuid.v4().slice(0,4);

export const getPeerId = () => {
  return id;
}

const callerAudio = new MediaStream();

let peerClient = new Peer(id, {
  host: PEER_HOST,
  port: process.env.REACT_APP_PEER_PORT,
  debug: 1,
  path: "/myapp"
});

peerClient.on('open', id => {
  // TODO: on peer client open, just save the id to the state
  console.log(`opened | id => ${id}`);
});

export const initAnswer = (stream) => {
  peerClient.on('call', (call) => {
    call.answer(stream);
  });
}

export const getPeerClient = () => {
  return peerClient;
}

export const joinLiveShareId = (remotePeerId, placeStreamToLocalAudio) => {

  let fakeStream = callerAudio;
  // TODO: fakeStream is just the stream that the listener needs to send to the broadcaster
  var call = peerClient.call( remotePeerId, fakeStream );

  call.on('stream', (stream) => {
    placeStreamToLocalAudio(stream);
  });
}