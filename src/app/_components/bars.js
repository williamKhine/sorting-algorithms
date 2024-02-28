'use client';
import Bar from "@/app/_components/bar";

import {useEffect, useState} from "react";

export default function Bars() {
    return (
        <div className={'container my-8 flex items-end'}>
            <Bar height={10}/>
            <Bar height={24}/>
            <Bar height={32}/>
            <Bar height={62}/>
            <Bar height={10}/>
            <Bar height={24}/>
            <Bar height={32}/>
            <Bar height={62}/>
        </div>
    );
}
