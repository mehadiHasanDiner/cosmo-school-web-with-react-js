

const CosmoFamilyHeader = () => {
    return (
        <div className="h-[calc(100vh-600px)] bg-[url('/cover.jpeg')] bg-cover bg-center opacity-90 relative">
            <div className="absolute bottom-0 right-0 p-1 ">
                <a href="https://cosmoschools.org/"><button className="btn btn-neutral text-lg ">🏠 Back to Home </button></a>
            </div>
        </div>
    );
};

export default CosmoFamilyHeader;