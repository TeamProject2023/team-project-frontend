import { FC } from "react";
import { Hero } from "../../components/Hero";
import HeroImg from "../../assets/images/team/hero-img.jpg";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Doctor0 from "../../assets/images/team/doctor-0.jpg";
import Doctor1 from "../../assets/images/team/doctor-1.jpg";
import Doctor2 from "../../assets/images/team/doctor-2.jpg";
import Doctor3 from "../../assets/images/team/doctor-3.jpg";
import Doctor4 from "../../assets/images/team/doctor-4.jpg";
import Doctor5 from "../../assets/images/team/doctor-5.jpg";
import Doctor6 from "../../assets/images/team/doctor-6.jpg";
import Doctor7 from "../../assets/images/team/doctor-7.jpg";
import { Socials } from "../../components/Socials";

export const TeamPage: FC = () => {
    return (
        <div className="page page-team">
            <Header />
            <Hero title="Our team" image={HeroImg} />
            <main className="main">
                <section className="section section-team">
                    <div className="container">
                        <div className="section__inner">
                            <ul className="list-team">
                                {team.map(({ id, image, name, specialty }) => {
                                    return (
                                        <li key={id} className="list-team__item">
                                            <div className="member">
                                                <div className="member__inner">
                                                    <div className="member__img-box">
                                                        <img src={image} alt={name} className="member__img" />
                                                    </div>
                                                    <div className="member__content">
                                                        <h3 className="member__name">{name}</h3>
                                                        <h4 className="member__specialty">{specialty}</h4>
                                                        <div className="socials">
                                                            <Socials />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

const team = [
    { id: 0, name: "Dr. Fedrick Bonita", specialty: "Othopedic Surgeon", image: Doctor0 },
    { id: 1, name: "Dr. Ken Moris", specialty: "Urology Efficient", image: Doctor1 },
    { id: 2, name: "Dr. Luiz Frank", specialty: "Neurosurgery Efficient", image: Doctor2 },
    { id: 3, name: "Dr. Selina Gomez", specialty: "Surgery Efficient", image: Doctor3 },
    { id: 4, name: "Dr. Sarai Conn", specialty: "Senior Dentist", image: Doctor4 },
    { id: 5, name: "Dr. Maureen Klein", specialty: "Othopedic Surgeon", image: Doctor5 },
    { id: 6, name: "Dr.Fletcher Waelchi", specialty: "Medicine Expert", image: Doctor6 },
    { id: 7, name: "Dr.Bonita Schaden", specialty: "Neurologist", image: Doctor7 },
];
