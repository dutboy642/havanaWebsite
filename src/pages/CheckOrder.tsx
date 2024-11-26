import CheckOrder from "../components/CheckOrder";
import FloatingButtons from "../components/FloatingButtons";
const CheckOrderPage: React.FC = () => {

    return (
        <div className="mb-10 bg-[#F6F6F6] py-4">
            <CheckOrder />
            <FloatingButtons></FloatingButtons>
        </div>
    )
}

export default CheckOrderPage;
