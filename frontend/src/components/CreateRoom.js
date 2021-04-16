import React, {Component} from 'react';
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

// const theme = createMuiTheme({
//     typography: {
//         fontFamily: [
//             '-apple-system',
//             'BlinkMacSystemFont',
//             'Segoe UI',
//             'Roboto',
//             'Oxygen',
//             'Ubuntu',
//             'Cantarell',
//             'Fira Sans',
//             'Droid Sans',
//             'Helvetica Neue',
//             'sans-serif'
//         ].join(','),
//     },
// });

export default class CreateRoom extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes,
        };

        this.handleRoomCreation= this.handleRoomCreation.bind(this);
        this.handleVotesChange = this.handleVotesChange.bind(this);
        this.handlePause = this.handlePause.bind(this);
    }

    
    // const [skipVotes, setSkipVotes] = useState(defaultVotes);
    // const [guestCanPause, setPause] = useState(true);

    handleVotesChange(e) {
        this.setState({
            votesToSkip: e.target.value,
        });
    }

    handlePause(e) {
        this.setState({
            guestCanPause: e.target.value == "true" ? true : false,
        });
    }

    handleRoomCreation() {
         const requestOptions = {
             method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify({
                 // field names match serializer fields
                 votes_to_skip: this.state.votesToSkip,
                 guest_can_pause: this.state.guestCanPause,
             }),
         };
         fetch("/api/create-room", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
        // console.log(this.state);
     }

    render() {
        return (
            <Grid container spacing = {1}> 
                {/* 8 pixels spacing */}
                <Grid item xs={12} align="center">
                    <Typography component='h4' variant='h4'>
                        Settings
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div align="center">
                                Guest Control of Playback State
                            </div>
                        </FormHelperText>
                        <RadioGroup row defaultValue='true' onChange={this.handlePause}>
                            <FormControlLabel 
                                value="true" 
                                control={<Radio color="primary"/>}
                                label="Play/Pause"
                                labelPlacement="bottom"
                            />
                             <FormControlLabel
                                value="false" 
                                control={<Radio color="secondary"/>}
                                label="No Control"
                                labelPlacement="bottom"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField 
                            required={true}
                            type="number" 
                            onChange={this.handleVotesChange}
                            defaultValue={this.defaultVotes}
                            inputProps={{
                                // 2 brackets because it passes an extra js object
                                min: 1,
                                style: {textAlign: "center"}
                            }}
                        />
                        <FormHelperText>
                            <div align="center">
                                Votes Required to Skip Current Song:
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" onClick={this.handleRoomCreation}>Create a Room</Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained" to="/" component={Link}>Back</Button>
                </Grid>
            </Grid>
        )
        
    };
}
    

// export default CreateRoom;