import React from 'react';
import Upvote from './Upvote';
import './UpvotesList.css';
import { useUpvote } from './UpvoteContext';



const UpvotesList: React.FC = () => {
    const { upvotes, toggleUpvotes, addUpvote } = useUpvote();

    return (
        <div className="upvotes-list">
            {upvotes.map((isSelected, index) => (
                <Upvote
                    key={index}
                    isSelected={isSelected}
                    onToggle={toggleUpvotes}
                />
            ))}
        <button className="add-button" onClick={addUpvote}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 5v14m-7-7h14" stroke="#343A40" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </button>
        </div>
    );
};

export default UpvotesList;
