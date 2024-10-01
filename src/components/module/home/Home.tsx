import CosmoFamilyDetails from "../StaffDetails/CosmoFamilyDetails";
import CosmoFamilyHeader from "../StaffDetails/CosmoFamilyHeader";

const Home = () => {
    return (
        <>
            <CosmoFamilyHeader/>
            <div className="my-4">
                <CosmoFamilyDetails/>
            </div>
        </>
    );
};

export default Home;