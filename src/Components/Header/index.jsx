import "./style.scss";
import Faq from "../Faq"
import Facebook from "../../Assets/Imgs/facebook.svg"
import Instagram from "../../Assets/Imgs/instagram.svg"
import Twitter from "../../Assets/Imgs/twitter.svg"
import Youtube from "../../Assets/Imgs/youtube.svg"
import Likindin from "../../Assets/Imgs/likindim.svg"
import { useState } from "react";
export default function Header() {
    const [openBot, setOpenBot] = useState(false);
    return (
        <header className="header-container container  ">
            <div className="md:flex header-component pl-4 pr-4 pt-4 md:p-0">
                <div className="div-img-logo"></div>
                <div className="mt-4 md:mt-0">
                    <ul className="display-flex sm:justify-around">
                        <li className=" md:pr-7 li-1 h-8 list-style-none display-flex">
                            <a href="#"><b>Agenda Regulatória</b></a>
                        </li>
                        <li className=" md:px-7 li-2 h-8 list-style-none display-flex">
                            <a href="#"><b>Análise de Impacto Regulatório</b></a>
                        </li>
                        <li className=" md:pl-7 li-3 h-8 list-style-none display-flex">
                            <a href="#"><b> Gestão de Normas Vigentes</b></a>
                        </li></ul>
                </div>
            </div>
            <div className="relative">
                <div className={`md:mb-4 mt-4 ${openBot && 'ativado'}`}  >
                    <div className="flex  p-4 md:p-0">
                        <button className="mr-5" onClick={() => setOpenBot(!openBot)}>
                            <span className="hamburguer" ></span>
                        </button>
                        <h1 className="title-menu"> Regulação da ANA</h1>
                    </div>
                </div>
                <div className={` mt-10 absolute z-10 md:w-1/2 ${openBot ? "block" : "hidden"}`}>
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="menu-box1">

                                <div className="bg-menu pl-4 md:pl-6 md:pr-3">
                                    <Faq className="faq-title text-white" title='Agenda Regulatória ANA '>
                                        <div className="text-white">
                                            aijsajsi</div>
                                    </Faq>
                                </div>
                                <div className="md:pl-6 pl-4 md:pr-3">
                                    <div className="border-b">
                                        <Faq className="faq-title text-white" title='Gestão de Normas Vigentes'>
                                            <div className="text-white">
                                                aijsajsi</div>
                                        </Faq>
                                        <Faq className="faq-title text-white" title='Análise de Impacto Regulatório'>
                                            <div className="text-white">
                                                aijsajsi</div>
                                        </Faq>
                                    </div>
                                </div>
                                <div className="md:pl-6 pl-4">
                                    <div className="mt-5 link-menu">
                                        <a href="#">
                                            Consultas Públicas
                                        </a>
                                    </div>

                                    <div className="mt-5 link-menu">
                                        <a href="#">
                                            Públicas Notícias
                                        </a>
                                    </div>
                                    <div className="mt-5 mb-5 link-menu">
                                        <a href="#">
                                            Downloads
                                        </a>
                                    </div>

                                </div>
                                <div className="md:pl-6 pl-4 mt-11">
                                    <h1 className="title-rede mb-4">Redes sociais</h1>

                                    <div className="flex mb-8 items-center">
                                        <div className="mr-4">
                                            <img src={Facebook} alt="" />
                                        </div>
                                        <div className="mr-4">
                                            <img src={Twitter} alt="" />
                                        </div>
                                        <div className="mr-4">
                                            <img src={Instagram} alt="" />
                                        </div>
                                        <div className="mr-4">
                                            <img src={Youtube} alt="" />
                                        </div>
                                        <div className="mr-4">
                                            <img src={Likindin} alt="" />
                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="w-1/2 bg-white menu-box2 md:pl-6 pl-4 md:pr-3">
                            <div className="mt-5 mb-2 link-menu-r">
                                <a href="#">
                                    O que é a Agenda Regulatória
                                </a>
                            </div>
                            <Faq className="faq-title color-faq-azul" title='Eixos temáticos da Agenda Regulatória'>
                                <div className="text-black">
                                    aijsajsi</div>
                            </Faq>
                            <div className=" link-menu-r">
                                <a href="#">
                                    Agendas Anteriores
                                </a>
                            </div>
                            <div className="mt-6 link-menu-r">
                                <a href="#">
                                    Normas relacionadas
                                </a>
                            </div>
                            <div className="mt-6 link-menu-r">
                                <a href="#">
                                    Destaques
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}