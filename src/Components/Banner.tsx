import Link from "next/link";

// components/Banner.tsx
const Banner = () => {
    return (
        <div className="bg-deeppurple text-white p-4 py-32 text-center">
            <h2 className="text-3xl font-bold">🎉 Let's Make 
                <span className="text-gold">
                    {" "}House Parties {" "}
                </span>
                Great Again 🎉
            </h2>
            <Link href="/plan-your-party">
            
            <button className="mt-4 px-6 py-2 bg-gold text-deeppurple font-semibold rounded-lg shadow-md hover:bg-accentyellow focus:outline-none">
                Plan Your Party
            </button>
            </Link>
        </div>
    );
};

export default Banner;
