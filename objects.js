var playlist = {yes: 'wurm'};

function updatePlaylist(playlist, name, song) {
  playlist[name] = song;
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
}