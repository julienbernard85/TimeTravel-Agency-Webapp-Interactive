/* UI */
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

export default function Layout({ children }) {
    const { token, logout } = useAuth();
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4 flex justify-between">
                <h1 className="text-xl font-bold"><Link href="/">TimeTravel</Link></h1>
                <nav className="space-x-4">
                    <Link href="/catalogue">Catalogue</Link>
                    {token ? (
                        <>
                            <Link href="/bookings">Mes réservations</Link>
                            <button onClick={logout}>Déconnexion</button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">Connexion</Link>
                            <Link href="/register">Inscription</Link>
                        </>
                    )}
                </nav>
            </header>
            <main className="flex-1 p-4">{children}</main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                © 2026 TimeTravel Agency
            </footer>
        </div>
    );
}