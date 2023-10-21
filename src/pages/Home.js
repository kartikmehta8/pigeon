import CardStrip from "../components/CardStrip";

const Home = () => {
    return (
        <div className="w-full h-screen overflow-hidden bg-blac">
            <div
                style={{
                    perspective: `100000px`,
                    transformStyle: "preserve-3d",
                }}
                className="relative pt-64 h-[400px]"
            >
                <CardStrip />
            </div>
        </div>
    );
};

export default Home;
