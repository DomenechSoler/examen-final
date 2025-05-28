import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-between px-8 py-4 bg-black">
            <a href="/" className="hover:text-gray-300 ms-10">
                <img src="/Logo.png" alt="Pandem Logo" className="h-10 w-auto" />
            </a>
            <div className="flex gap-6">
                <Link href="/contact" className="hover:underline">
                    Contact Us
                </Link>
                <Link href="/terms" className="hover:underline">
                    Terms of Service
                </Link>
            </div>
        </footer>
    );
}