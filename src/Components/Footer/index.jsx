import Footerlogo from "../../Assets/Imgs/logo-footer.svg"
import Seta from "../../Assets/Imgs/seta.svg"
import Facebook from "../../Assets/Imgs/facebook.svg"
import Twitter from "../../Assets/Imgs/twitter.svg"
import Instagran from "../../Assets/Imgs/instagram.svg"
import Youtube from "../../Assets/Imgs/youtube.svg"
import Linkindin from "../../Assets/Imgs/likindim.svg"
import "./style.scss";
export default function Footer() {
    return (
        <footer className="container-footer">
            <div className="container">
                <div className="mt-20 mb-16  md:flex justify-center p-4 md:p-0">
                    <div className="footer-box-1 md:w-1/5 md:mr-20 md:pr-9">
                        <div className="md:h-80 border-b">
                            <div className="mb-5">
                                <img src={Footerlogo} alt="" /></div>
                            <p className="text-sm leading-8 text-white text-footer">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Aenean
                                euismod bibendum laoreet. Proin
                                gravida  commodo. Proin sodales
                                pulvinar si.</p></div>
                        <div className="mt-5">
                            <div className="display-flex items-center">
                                <div className="mr-4">
                                    <p className="text-footer text-sm"> Visite o Portal da Ana</p></div>
                                <div>
                                    <img src={Seta} alt="" />

                                </div></div>
                        </div>

                    </div>
                    <div className="footer-box-2 md:w-1/5 md:mr-20 md:pr-9">
                        <div className="md:h-80 border-b">
                            <h4 className="title-footer mb-5"><b> Explore Temas da Agenda:</b></h4>
                            <p className="text-sm leading-8 text-white text-footer">Regulação de Usos e Operação de
                                Reservatórios
                                Regulação de Serviços
                                Saneamento
                                Planejamento e Informação
                                Segurança de Barragens
                                Fiscalização
                                Monitoramento
                                Implementação da PNRH</p></div>
                        <div className="mt-5">
                            <div className="display-flex items-center">
                                <div className="mr-4">
                                    <p className="text-footer text-sm">Veja o Estoque Regulatório</p></div>
                                <div>
                                    <img src={Seta} alt="" />

                                </div></div>
                        </div>
                        <div className="mt-5">
                            <div className="display-flex items-center">
                                <div className="mr-4">
                                    <p className="text-footer text-sm"> Conheça a Análise do Impacto Regulatório</p></div>
                                <div>
                                    <img className="max-w-max" src={Seta} alt="" />

                                </div></div>
                        </div>

                    </div>
                    <div className="footer-box-3 md:w-1/5 md:pr-9">
                        <div className="md:h-80 border-b">
                            <h4 className="title-footer mb-5"><b> Veja também</b></h4>
                            <p className="text-sm leading-8 text-white text-footer">O que é a Agenda
                                Portaria ANA
                                Manual da Agenda Regulatória
                                Folheto da Agenda Regulatória
                                Notícias
                                Consultas Públicas
                                Comunicados</p></div>
                        <div className="mt-5">
                            <div className="display-flex items-center">
                                <div className="mr-4">
                                    <img src={Facebook} alt="" />
                                </div>
                                <div className="mr-4">
                                    <img src={Twitter} alt="" />

                                </div>
                                <div className="mr-4">
                                    <img src={Instagran} alt="" />

                                </div>
                                <div className="mr-4">
                                    <img src={Youtube} alt="" />

                                </div>
                                <div>
                                    <img src={Linkindin} alt="" />

                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}