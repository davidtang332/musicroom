import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {motion} from 'framer-motion';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {Link} from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function JoinRoom(props) {
    // state hooks
    const [roomCode, setRoomCode] = useState("");
    const [error, setError] = useState("");

    // function handleTextFieldChange(e) {
    //     setRoomCode({
    //         [e.target.roomCode]: e.target.value,
    //     });
    // }

    function joinRoomPressed() {
        // send POST request to backend to join existing room
        console.log("Room Code:" + roomCode)
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                code: roomCode,
            }),
        };
        fetch("/api/join-room", requestOptions)
            .then((response) => {
            if (response.ok) {
                props.history.push(`/room/${roomCode}`);
            } else {
                setError("Room not found. Try another code.");
                console.log('Error:' + error);
                // not displaying error message
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className="center">
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField
                        error={!!error}
                        label="Code"
                        placeholder="Enter a room code"
                        value={roomCode}
                        helperText={error}
                        variant="outlined"
                        onChange={e => setRoomCode(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={joinRoomPressed}
                    >
                        Enter Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                <Button variant="contained" color="secondary" to="/" component={Link}>Back</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default JoinRoom;