import "./style.scss";
import Header from "../Components/Header"
import Footer from "../Components/Footer";
export default function LayoutBase({ children }) {
    return (
        <>
            <Header />
            <div className="main">{children}</div>
            <Footer />

        </>
    );
}