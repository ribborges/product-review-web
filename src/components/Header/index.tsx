import { BagHeartFill } from 'react-bootstrap-icons';

function Header() {
    return (
        <header className="p-3 flex items-stretch gap-2">
            <BagHeartFill size={32} className="hover:text-red-500 transition duration-200" />
            <div className="border-r border-r-zinc-800" />
            <h1 className="md:text-lg font-bold flex items-center">Product Review</h1>
        </header>
    );
}

export { Header };