import React from 'react'
import Image from 'next/image'

export default function Main() {
    return(
    <main>
         <h1>Welcome to Biv</h1>
        <Image src="/mainImage.jpg" alt="main-image" width="550" height="450"/>
    </main>
    );
}