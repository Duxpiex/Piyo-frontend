import React, { useState } from 'react';
const backendUrl = process.env.REACT_APP_BACKEND_URL;
const LearningRecordPage = ({ user }) => {
    const [character, setCharacter] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);

    const handleSaveLearningRecord = async (e) => {
        e.preventDefault();

        const response = await fetch(`${backendUrl}/learning-records`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                character,
                learned_at: new Date().toISOString(),
                is_successful: isSuccessful
            })
        });

        const data = await response.json();

        if (response.status === 200) {
            alert(data.message);
        } else {
            alert(data.message);
        }
    };

    return (
        <div>
            <h1>Learning Record</h1>
            <form onSubmit={handleSaveLearningRecord}>
                <input type="text" placeholder="Character" value={character} onChange={(e) => setCharacter(e.target.value)} />
                <input type="checkbox" checked={isSuccessful} onChange={(e) => setIsSuccessful(e.target.checked)} />
                <button type="submit">Save Record</button>
            </form>
        </div>
    );
};

export default LearningRecordPage;