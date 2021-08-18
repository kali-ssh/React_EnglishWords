// import dummy from '../db/data.json';
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

export default function Day() {
    const {day} = useParams();// useParams로 주소창에있는 문자열이 들어옴 
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}