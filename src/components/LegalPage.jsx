import Footer from "../Footer";
import Header from "../Header";

const LegalPage = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="lg:mt-12 text-6xl lg:text-7xl font-normal text-[#032ca6] mb-8 text-center md:tracking-wide">
                        Mentions Légales
                    </h1>
                    
                    <div className="text-[#036] leading-relaxed space-y-6 mt-24 text-lg md:text-2xl">
                        <p>
                            Les présentes mentions légales ont pour objet de définir les informations 
                            légales relatives à la société SME STRATEGITECH SAS et à l’utilisation du 
                            service MAZIA. Elles s’appliquent à l’ensemble des utilisateurs du site 
                            internet, de la landing page et de l’application associée au service MAZ. 
                            Leur consultation implique l’acceptation sans réserve des présentes mentions 
                            légales.
                        </p>
                        
                        <p>
                            La société SME STRATEGITECH SAS est une société par actions simplifiée, 
                            immatriculée au Registre du Commerce et des Sociétés sous le SIREN 985320985, 
                            dont le siège social est situé au 144 avenue Charles de ferme, 92200 
                            Neuilly-sur-Seine. La société est joignable par email à {" "}
                            <a href="mailto:contact@mazia.ai" className="text-blue-600 hover:underline">
                                contact@mazia.ai
                            </a> {" "}
                            pour toute question ou notification relative au service.
                        </p>
                        
                        <p>
                            Le directeur de la publication du site et responsable éditorial est SME 
                            STRATEGITECH SAS en tant qu’entité juridique. Toute question relative au contenu 
                            éditorial, aux services ou à la conformité des informations publiées peut être 
                            adressée directement à SME STRATEGITECH SAS via l’adresse email mentionnée 
                            ci-dessus.
                        </p>
                        
                        <p>
                            Le service MAZ proposé par SME STRATEGITECH SAS est un service automatisé de 
                            gestion d’appels téléphoniques à des fins professionnelles, permettant notamment 
                            la prise de rendez-vous, la qualification de leads ou la diffusion de messages 
                            vocaux. L’accès au service est soumis aux Conditions Générales d’Utilisation et 
                            à la Politique de Confidentialité publiées sur le site, et les utilisateurs sont 
                            invités à les consulter avant toute utilisation du service afin de connaître 
                            leurs droits et obligations.
                        </p>
                        
                        <p>
                            Le site et le service MAZ sont hébergés par Hostinger International Ltd., dont 
                            le siège social est situé au 61 Lordou Vironos Street, Agios Nicolaos, 6023 
                            Larnaca, Chypre. Hostinger est responsable de la maintenance technique des 
                            serveurs et de la continuité du service d’hébergement. SME STRATEGITECH SAS 
                            s’assure que les données hébergées sont protégées conformément aux 
                            réglementations applicables, y compris le RGPD, et qu’elles sont accessibles 
                            uniquement aux équipes autorisées.
                        </p>
                        
                        <p>
                            L’ensemble des contenus publiés sur le site et accessibles via le service MAZ, 
                            incluant le logiciel, les scripts, l’interface utilisateur, le logo, les textes, 
                            images et vidéos, demeure la propriété exclusive de SME STRATEGITECH SAS. Toute 
                            reproduction, représentation, modification, publication, transmission ou 
                            distribution, partielle ou totale, est strictement interdite sans l’autorisation 
                            préalable écrite de SME STRATEGITECH SAS. L’utilisation du service ne confère 
                            ucun droit de propriété intellectuelle aux utilisateurs et ne peut être exploitée 
                            à des fins commerciales ou non autorisées.
                        </p>
                        
                        <p>
                            Le service MAZ peut contenir des liens hypertextes vers d’autres sites ou 
                            services. SME STRATEGITECH SAS n’exerce aucun contrôle sur ces sites tiers et 
                            ne peut être tenue responsable de leur contenu, de leurs pratiques ou de leurs 
                            politiques de confidentialité. L’insertion de ces liens a pour seul but de 
                            faciliter l’accès à des informations complémentaires et ne constitue en aucun 
                            cas une approbation ou une validation des contenus par SME STRATEGITECH SAS.
                        </p>
                        
                        <p>
                            Le service MAZ peut collecter des données personnelles conformément à la 
                            Politique de Confidentialité publiée sur le site. Ces données sont utilisées 
                            pour le bon fonctionnement du service, la personnalisation des messages vocaux, 
                            la facturation et le suivi de la performance. Chaque appel automatisé inclut la 
                            mention obligatoire indiquant qu’il est effectué par un assistant automatisé pour 
                            le compte de SME STRATEGITECH SAS. Les utilisateurs sont informés que le 
                            traitement de ces données se fait dans le respect des lois en vigueur, notamment 
                            le RGPD et la législation sur les communications électroniques.
                        </p>
                        
                        <p>
                            SME STRATEGITECH SAS se réserve le droit de modifier les présentes mentions 
                            légales afin de se conformer aux évolutions légales, réglementaires ou techniques,
                            ou pour améliorer le service MAZ. Les utilisateurs seront informés de ces 
                            modifications par publication sur le site. La date de dernière mise à jour des 
                            mentions légales sera toujours indiquée en haut de la page afin de garantir la 
                            transparence et la traçabilité des informations.
                        </p>
                        
                        <p>
                            La responsabilité de SME STRATEGITECH SAS ne pourra être engagée pour tout 
                            dommage, direct ou indirect, résultant de l’accès au site, de l’utilisation du 
                            service MAZ ou de l’impossibilité d’y accéder. Cela inclut notamment les 
                            interruptions temporaires, les problèmes techniques, les pertes de données ou 
                            toute conséquence liée à l’usage du service ou aux informations publiées.
                        </p>
                        
                        <p>
                            Les utilisateurs peuvent contacter SME STRATEGITECH SAS pour toute question, 
                            réclamation ou demande d’information complémentaire via l’adresse email {" "}
                            <a href="mailto:contact@mazia.ai" className="text-blue-600 hover:underline">
                                contact@mazia.ai
                            </a> {" "}
                            ou par courrier au siège social. SME STRATEGITECH SAS s’engage à répondre aux 
                            demandes dans un délai raisonnable et à traiter les requêtes de manière diligente.
                        </p>
                        
                        <p>
                            Enfin, les présentes mentions légales, ainsi que le service MAZ, sont régis par le 
                            droit français. Tout litige relatif à l’interprétation ou à l’exécution des présentes 
                            mentions légales sera soumis aux tribunaux compétents du ressort du siège social de SME
                            STRATEGITECH SAS, sous réserve de la tentative préalable de résolution amiable.
                        </p>

                        <p>
                            Ces mentions légales constituent l’ensemble des informations légales obligatoires 
                            devant être portées à la connaissance des utilisateurs du service MAZ et du site 
                            internet de SME STRATEGITECH SAS. Leur consultation et leur acceptation sont 
                            indispensables pour accéder et utiliser le service, et elles complètent les Conditions 
                            Générales d’Utilisation ainsi que la Politique de Confidentialité.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
);
};

export default LegalPage;