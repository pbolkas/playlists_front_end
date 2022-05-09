

const initialLiveShareState = {
  myId: null,
  liveShareEnabled: false
}

const liveShareReducer = ( state = initialLiveShareState, action) => {
  switch(action.type){
    default:{
      return state;
    }
  }
}

export default liveShareReducer;