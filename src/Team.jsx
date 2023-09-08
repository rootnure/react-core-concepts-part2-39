import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    const handleAddPlayer = () => {
        const newTeam = team + 1;
        if(newTeam > 24 ) {
            alert('Team at maximum capacity. Cannot add new player.');
            return;
        }
        setTeam(newTeam);
    }

    const handleRemovePlayer = () => {
        const newTeam = team - 1;
        if(newTeam < 10) {
            alert('Cannot remove player. Minimum player reached.');
            return;
        }
        setTeam(newTeam);
    }

    const teamStyles = {
        border: '3px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyles}>
            <h2>Team</h2>
            <h3>Players: {team}</h3>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}