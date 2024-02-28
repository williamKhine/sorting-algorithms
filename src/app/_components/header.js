import Link from 'next/link';

export default function Header() {
    return (
        <nav className={'container my-2 flex items-center justify-between'}>
            <Link href={'/'}>
                <h1 className={'text-2xl md:text-3xl font-bold text-text text-opacity-0 bg-gradient-to-l from-primary to-secondary bg-clip-text'}>
                    SORTING ALGORITHMS
                </h1>
            </Link>
            <Link href={'/about'} className={'text-lg md:text-xl hover:text-accent hover:underline'}>About</Link>
        </nav>
    );
}