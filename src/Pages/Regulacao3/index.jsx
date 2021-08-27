import "./style.scss";
import Faq from "../../Components/Faq"
import Box1 from "../../Assets/Imgs/box-1.png"
import Box2 from "../../Assets/Imgs/box-2.png"
import Box3 from "../../Assets/Imgs/box-3.png"
import Video from "../../Assets/Imgs/01-pilula-egito-BH.mp4"
import ImgVideo from "../../Assets/Imgs/img-video.png"
import BannerDestaque3 from "../../Components/BannerDestaque3";

export default function Regulacao3() {
    return (
        <>
            <BannerDestaque3 />
            <div className="-mt-16 relative">
                <div className="container ">
                    <div className="md:flex">
                        <div className="md:w-1/2 md:mr-40 md:p-9 p-4 bg-white">
                            <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin
                                sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
                                mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>

                            <div className="faq-div mt-7">

                                <Faq className="faq-title color-faq" title="O que é esse tema?">
                                    Lorem ipsum dolor sit amet, consectetur adipisczing elit. Sed eu lectus tempor, vulputate
                                    leo eget, molestie leo. Vivamus congue aliquam elit, eu convallis risus semper eu. Donec
                                    nisl eros, mattis ac lectus ac, feugiat suscipit urna. Nunc vulputate eros sed turpis tincidunt
                                    posuere. Nullam a interdum nisi. Curabitur tempor aliquet ex sed commodo. In quis mauris
                                    lobortis, sollicitudin enim vitae, finibus felis.
                                </Faq></div>
                            <div className="faq-div">

                                <Faq className="faq-title color-faq" title="Porque está na Agenda Regulatória?">
                                    Lorem ipsum dolor sit amet, consectetur adipisczing elit. Sed eu lectus tempor, vulputate
                                    leo eget, molestie leo. Vivamus congue aliquam elit, eu convallis risus semper eu. Donec
                                    nisl eros, mattis ac lectus ac, feugiat suscipit urna. Nunc vulputate eros sed turpis tincidunt
                                    posuere. Nullam a interdum nisi. Curabitur tempor aliquet ex sed commodo. In quis mauris
                                    lobortis, sollicitudin enim vitae, finibus felis.
                                </Faq></div>
                            <div>

                                <Faq className="faq-title color-faq" title="Link para inserção de arquivo para download com cronograma previsto e status da execução">
                                    Lorem ipsum dolor sit amet, consectetur adipisczing elit. Sed eu lectus tempor, vulputate
                                    leo eget, molestie leo. Vivamus congue aliquam elit, eu convallis risus semper eu. Donec
                                    nisl eros, mattis ac lectus ac, feugiat suscipit urna. Nunc vulputate eros sed turpis tincidunt
                                    posuere. Nullam a interdum nisi. Curabitur tempor aliquet ex sed commodo. In quis mauris
                                    lobortis, sollicitudin enim vitae, finibus felis.
                                </Faq></div>
                        </div>
                        <div className="md:w-1/5 ">
                            <div className="md:pl-5 md:pr-0  pr-4 pl-4 faq-header pt-4 mb-9">
                                <Faq className="faq-title color-faq-black" title="Normas vigentes">
                                    Lorem ipsum dolor sit amet, consectetur adipisczing elit. Sed eu lectus tempor, vulputate
                                    leo eget, molestie leo. Vivamus congue aliquam elit, eu convallis risus semper eu. Donec
                                    nisl eros, mattis ac lectus ac, feugiat suscipit urna. Nunc vulputate eros sed turpis tincidunt
                                    posuere. Nullam a interdum nisi. Curabitur tempor aliquet ex sed commodo. In quis mauris
                                    lobortis, sollicitudin enim vitae, finibus felis.
                                </Faq>
                                <Faq className="faq-title color-faq-black" title="Relatórios de Análise de Impacto Regulatório">
                                    Lorem ipsum dolor sit amet, consectetur adipisczing elit. Sed eu lectus tempor, vulputate
                                    leo eget, molestie leo. Vivamus congue aliquam elit, eu convallis risus semper eu. Donec
                                    nisl eros, mattis ac lectus ac, feugiat suscipit urna. Nunc vulputate eros sed turpis tincidunt
                                    posuere. Nullam a interdum nisi. Curabitur tempor aliquet ex sed commodo. In quis mauris
                                    lobortis, sollicitudin enim vitae, finibus felis.
                                </Faq>
                                <Faq className="faq-title color-faq-black" title="Consultas Públicas">
                                    Lorem ipsum dolor sit amet, consectetur adipisczing elit. Sed eu lectus tempor, vulputate
                                    leo eget, molestie leo. Vivamus congue aliquam elit, eu convallis risus semper eu. Donec
                                    nisl eros, mattis ac lectus ac, feugiat suscipit urna. Nunc vulputate eros sed turpis tincidunt
                                    posuere. Nullam a interdum nisi. Curabitur tempor aliquet ex sed commodo. In quis mauris
                                    lobortis, sollicitudin enim vitae, finibus felis.
                                </Faq></div>

                            <div>
                                <h1 className="title-video pl-4 md:pl-0 md:mb-4">

                                    <b> Saiba mais sobre
                                        este tema</b></h1>
                                <div>
                                    <div>
                                        <div className="mb-4">
                                            <video width="100%" height="240" poster={ImgVideo} controls>
                                                <source src={Video} type="video/mp4" />
                                                <source src="movie.ogg" /></video></div>
                                        <div className="text-video pb-4 p-4 md:pl-0 md:pr-0 md:pt-0">
                                            <p>Descrição lorem ipsum dolor sit amet, consectetur adipisczing elit</p></div>
                                        <div className="p-4 md:p-0">
                                            <Faq className="faq-title color-faq-black" title="Lorem ipsum dolor">
                                                Lorem ipsum dolor sit amet, consectetur adipisczing elit. Sed eu lectus tempor, vulputate
                                                leo eget, molestie leo. Vivamus congue aliquam elit, eu convallis risus semper eu. Donec
                                                nisl eros, mattis ac lectus ac, feugiat suscipit urna. Nunc vulputate eros sed turpis tincidunt
                                                posuere. Nullam a interdum nisi. Curabitur tempor aliquet ex sed commodo. In quis mauris
                                                lobortis, sollicitudin enim vitae, finibus felis.
                                            </Faq>
                                            <Faq className="faq-title color-faq-black" title="Lorem ipsum dolor">
                                                Lorem ipsum dolor sit amet, consectetur adipisczing elit. Sed eu lectus tempor, vulputate
                                                leo eget, molestie leo. Vivamus congue aliquam elit, eu convallis risus semper eu. Donec
                                                nisl eros, mattis ac lectus ac, feugiat suscipit urna. Nunc vulputate eros sed turpis tincidunt
                                                posuere. Nullam a interdum nisi. Curabitur tempor aliquet ex sed commodo. In quis mauris
                                                lobortis, sollicitudin enim vitae, finibus felis.
                                            </Faq>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><h1 className="destaque-boxs-title mb-4 pl-4 md:pl-0">Em destaque</h1>

                        <div className="md:flex justify-between mb-11">
                            <div className="bg-box p-4 md:w-96">
                                <h1 className="box-title">Eixo Temático</h1>
                                <p className="box-text mb-3">Lorem ipsum dolor sit amet</p>
                                <img className="sm:w-full" src={Box1} alt="" />
                                <p className="box-title mt-2 mb-2">dd/mm/aaaa hh:mm</p>
                                <p className="text-content">Lorem ipsum dolor sit amet, consectetur adipisczing elit.
                                    Sed eu lectus tempor, vulputate leo eget, molestie leo.
                                    Vivamus congue aliquam elit, eu convallis risus semper eu. </p>

                            </div>
                            <div className="bg-box p-4 md:w-96">
                                <h1 className="box-title">Eixo Temático</h1>
                                <p className="box-text mb-3">Lorem ipsum dolor sit amet</p>
                                <img className="sm:w-full" src={Box2} alt="" />
                                <p className="box-title mt-2 mb-2">dd/mm/aaaa hh:mm</p>
                                <p className="text-content">Lorem ipsum dolor sit amet, consectetur adipisczing elit.
                                    Sed eu lectus tempor, vulputate leo eget, molestie leo.
                                    Vivamus congue aliquam elit, eu convallis risus semper eu. </p>

                            </div>
                            <div className="bg-box p-4 md:w-96">
                                <h1 className="box-title">Eixo Temático</h1>
                                <p className="box-text mb-3">Lorem ipsum dolor sit amet</p>
                                <img className="sm:w-full" src={Box3} alt="" />
                                <p className="box-title mt-2 mb-2">dd/mm/aaaa hh:mm</p>
                                <p className="text-content">Lorem ipsum dolor sit amet, consectetur adipisczing elit.
                                    Sed eu lectus tempor, vulputate leo eget, molestie leo.
                                    Vivamus congue aliquam elit, eu convallis risus semper eu. </p>

                            </div>
                        </div>
                    </div>

                </div></div>



        </>
    );
}