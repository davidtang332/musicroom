import React, {useState} from 'react';
import RoomJoin from './JoinRoom';

function Room(props) {
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setHost] = useState(false);

    const roomCode = props.match.params.roomCode;

    function getRoomDetails(props) {
        fetch('/api/get-room' + '?code=' + roomCode).then((response) =>
            response.json()
        ).then((data) => {
            setVotesToSkip(data.votes_to_skip);
            setGuestCanPause(data.guest_can_pause);
            setHost(data.is_host);
        });
    }

    getRoomDetails();
    return (
        <div className="center">
            <h3>Code: {roomCode}</h3>
            <p>Votes Needed To Skip: {votesToSkip}</p>
            <p>Guest Can Pause: {guestCanPause.toString()}</p>
            <p>Host: {isHost.toString()}</p>
<<<<<<< Updated upstream
=======
            <a href="test1/">i want my mommy</a>
>>>>>>> Stashed changes
        </div>
    )
}


export default Room;