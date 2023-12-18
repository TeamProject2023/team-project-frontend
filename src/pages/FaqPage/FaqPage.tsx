import { FC } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import HeroImg from "../../assets/images/faq/hero-img.jpg";
import FaqImg1 from "../../assets/images/faq/faq-1.jpg";
import FaqImg2 from "../../assets/images/faq/faq-2.jpg";

export const FaqPage: FC = () => {
    return (
        <div className="page page-faq">
            <Header />
            <Hero title="Frequently Asked Questions" image={HeroImg} />
            <main className="main">
                <section className="section section-faq">
                    <div className="container">
                        <div className="section__inner">
                            <div className="section__content">
                                <div className="col col-left">
                                    <div className="circle" />
                                    <div className="img-set">
                                        <img src={FaqImg2} alt="" className="img img-bottom" />
                                        <img src={FaqImg1} alt="" className="img img-top" />
                                    </div>
                                </div>
                                <div className="col col-right">
                                    <div className="col__inner">
                                        <h3 className="section__subtitle">FAQ</h3>
                                        <h2 className="section__title">Frequently Asked Questions</h2>
                                        <div className="faq-list">
                                            <Accordion className="faq-accordion" transition={true} transitionTimeout={250}>
                                                {faqList.map(({ id, answer, question }) => {
                                                    return (
                                                        <AccordionItem
                                                            key={id}
                                                            header={(
                                                                <>
                                                                    <span className="chevron-box">
                                                                        <div className="chevron-icon-box" />
                                                                    </span>
                                                                    {question}
                                                                </>
                                                            )}
                                                            buttonProps={{
                                                                className: ({ isEnter }) =>
                                                                    `itemBtn ${isEnter && "itemBtnExpanded"}`,
                                                            }}

                                                        >
                                                            {answer}
                                                        </AccordionItem>
                                                    );
                                                })}
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

const faqList = [
    { id: 0, question: "How does the AI predictor work?", answer: "Analyzes health data for precise predictions, aiding proactive care." },
    { id: 1, question: "Is my information secure?", answer: "Yes, we prioritize strict data security measures for confidentiality." },
    { id: 2, question: "Can I access real-time updates?", answer: "Absolutely, our system provides continuous, up-to-date health insights." },
    { id: 3, question: "How accurate are the predictions?", answer: "Our AI-driven model ensures high accuracy in health risk assessments." },
];
