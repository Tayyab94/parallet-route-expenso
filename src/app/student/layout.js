import "../globals.css"

export const metadata = {
    title: "Dashboard - Student",
    description: "Know the insights from the top-level dashboard",
};


export default function RootLayout({ children, studentBalance }) {

    return (
        <div className="flex flex-col h-screen">
            {children}
            <div className="flex">
                {studentBalance}
            </div>
        </div>
    );
}