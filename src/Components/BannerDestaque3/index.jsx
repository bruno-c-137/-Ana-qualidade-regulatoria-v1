import "./style.scss";
import Banner3 from "../../Assets/Imgs/Banner-destaque-3.png"
export default function BannerDestaque3() {
    return (
        <>
            <div className="relative flex items-center  height-banner ">
                <img className="w-full h-full object-cover absolute  top-0" src={Banner3} alt="" />
                <div className="container relative p-4 md:p-0">
                    <p className="banner-title text-xl md:text-2xl">Agenda Regulatória ANA 2020-2021</p>
                    <p className="banner-text text-2xl md:text-4xl lg:w-2/5">Regulação de usos e operação de reservatórios</p>
                </div>
            </div>
        </>
    );
}