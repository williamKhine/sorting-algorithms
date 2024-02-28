'use client';
import { useState, useEffect } from "react";

export default function ControlBar() {
    const [algorithm, setAlgorithm] = useState('Bubble');
    const [algorithmOptions, setAlgorithmOptions] = useState(['Bubble', 'Selection']);
    return (
        <div className={'bg-background'}>
            <div className={'container my-4'}>
                <select className={'bg-secondary rounded text-text p-1'}>
                    {algorithmOptions.map((algorithm, index) => (
                        <option key={index}>{algorithm}</option>
                    ))}
                </select>
                <button className={'border border-secondary rounded'}>Sort</button>
            </div>
        </div>
    );
}
