import React, { createContext, useContext, useState,useEffect, ReactNode } from 'react';

// Define upvote context state
interface UpvoteContextType {
    upvotes: boolean[];
    toggleUpvotes: () => void;
    addUpvote: () => void;
}

// Create the context with default values, default undefined because it whould throw error if no context
const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined);

// See if context already exsist in localstorage, if not, default value
const loadUpvotesFromLocalStorage = (key: string, defaultValue: boolean[]): boolean[] => {
    const savedUpvotes = localStorage.getItem(key);
    return savedUpvotes ? JSON.parse(savedUpvotes) : defaultValue;
};
interface UpvoteProviderProps {
    children: ReactNode;
    storageKey: string;
    initialState?: boolean[];
}

// Provider component
export const UpvoteProvider: React.FC<UpvoteProviderProps> = ({
    children, // whatever components get passed inside Provider
    storageKey, //the keys in localstorage
    initialState = [false], //localstorage
}) => {
    const [upvotes, setUpvotes] = useState<boolean[]>(() => loadUpvotesFromLocalStorage(storageKey, initialState));

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(upvotes));
    }, [upvotes, storageKey]); //update localstorage upon any changes 

    const toggleUpvotes = () => {
        const newIsSelected = !upvotes[0]; // Toggle the current state
        setUpvotes(upvotes.map(() => newIsSelected)); // Apply the new state to all upvotes
    };

    const addUpvote = () => {
        setUpvotes((prevUpvotes) => [...prevUpvotes, prevUpvotes[0]]);// include all previous and add 1 more, index[0] always exsists 
    };

    return (
        <UpvoteContext.Provider value={{ upvotes, toggleUpvotes, addUpvote }}>
            {children}
        </UpvoteContext.Provider>
    );
};

// Custom hook to use the Upvote context, could potentially be an individual file
export const useUpvote = () => {
    const context = useContext(UpvoteContext);
    if (!context) {
        throw new Error('useUpvote must be used within an UpvoteProvider');//the no context logic why we declare default as undefined
    }
    return context;
};
