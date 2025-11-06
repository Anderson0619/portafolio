export default function Home() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">💻 Anderson Mera</h1>
            <p className="text-lg mb-6">Desarrollador Frontend con React</p>
            <a 
            href="https://github.com/Anderson0619"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                GitHub Profile
            </a>
        </section>
    )
}