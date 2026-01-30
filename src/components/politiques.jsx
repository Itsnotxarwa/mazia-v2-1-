import Footer from "../Footer";
import Header from "../Header";

const Politiques = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="lg:mt-12 text-6xl lg:text-7xl font-normal text-[#032ca6] mb-8 text-center md:tracking-wide">
                        Politique de Confidentialité
                    </h1>
                    
                    <div className="text-[#036] leading-relaxed space-y-6 mt-24 text-lg md:text-2xl">
                        <p>
                            Chez SME STRATEGITECH SAS, nous attachons une importance particulière à la protection des données personnelles de nos utilisateurs et des personnes contactées par notre bot vocal. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons les informations, ainsi que les droits des utilisateurs conformément aux lois en vigueur, notamment le RGPD et la loi Informatique et Libertés. Elle s’applique à toutes les interactions réalisées via notre service, accessible sur notre site web, notre landing page et notre API.
                        </p>
                        
                        <p>
                            Le responsable du traitement des données est SME STRATEGITECH SAS, situé au 144 avenue Charles de ferme, 92200 Neuilly-sur-Seine. Vous pouvez nous contacter à l’adresse email contact@mazia.ai pour toute question relative à vos données personnelles.
                        </p>
                        
                        <p>
                            Nous collectons des informations personnelles des utilisateurs, telles que le nom, le prénom, l’adresse email, le numéro de téléphone, ainsi que les informations de paiement lorsque nécessaire. Nous enregistrons également les données liées à l’usage du service, comme l’historique des appels, les logs et le statut des appels. Par ailleurs, lors des appels réalisés par le bot, nous pouvons collecter certaines données sur les personnes appelées, telles que le nom, le prénom et le numéro de téléphone, ainsi que les échanges vocaux et les transcriptions si cette fonctionnalité est activée. La collecte de ces données se fait toujours dans le cadre légal et avec le consentement implicite ou explicite selon la réglementation applicable.
                        </p>
                        
                        <p>
                            Les données personnelles sont utilisées pour permettre le fonctionnement du service, personnaliser les messages vocaux et scripts d’appels, gérer les comptes utilisateurs, assurer le suivi et la facturation, ainsi que pour analyser les performances et détecter toute anomalie. Les informations peuvent également servir à améliorer notre produit à travers la collecte de feedbacks et de statistiques anonymisées. Le traitement des données repose sur plusieurs bases légales : le consentement explicite de l’utilisateur, l’exécution d’un contrat lié à l’utilisation du service, le respect des obligations légales et les intérêts légitimes de SME STRATEGITECH SAS pour améliorer et sécuriser le service.
                        </p>
                        
                        <p>
                            Nous ne vendons jamais vos données personnelles. Certaines informations peuvent être partagées avec des prestataires techniques tels que les fournisseurs d’hébergement, de téléphonie ou de services cloud, avec les prestataires de paiement, ou encore avec les autorités compétentes lorsque la loi l’exige. Nous nous assurons que tous nos prestataires respectent strictement la confidentialité et la sécurité des données.
                        </p>
                        
                        <p>
                            Les informations collectées sont conservées le temps nécessaire à l’utilisation du 
                            service et pour une durée supplémentaire de trois ans après la fermeture du compte 
                            utilisateur. Les données vocales et les transcriptions sont conservées au maximum 
                            six mois, sauf consentement spécifique pour des analyses ou statistiques. Les 
                            informations financières sont conservées selon les obligations légales, soit 
                            généralement pendant dix ans. Conformément au RGPD, les utilisateurs disposent du 
                            droit d’accéder à leurs données, de les rectifier, de demander leur effacement 
                            ou la limitation du traitement, de s’opposer à certains traitements, de demander 
                            la portabilité de leurs informations et de retirer leur consentement à tout moment.
                            Ils peuvent également déposer une plainte auprès de la CNIL. Toutes ces demandes 
                            peuvent être adressées à {" "}
                            <a href="mailto:contact@mazia.ai" className="text-blue-600 hover:underline">
                                contact@mazia.ai.
                            </a>
                        </p>
                        
                        <p>
                            Pour assurer la sécurité de vos données, nous utilisons des mesures techniques et 
                            organisationnelles robustes, notamment le chiffrement des communications via HTTPS, 
                            le stockage sécurisé des données vocales et des transcriptions, l’accès limité aux 
                            équipes autorisées et la mise en place de sauvegardes régulières ainsi que d’audits 
                            de sécurité.
                        </p>
                        
                        <p>
                            Chaque appel automatisé réalisé par notre bot inclut obligatoirement la mention 
                            suivante : « Cet appel est effectué par un assistant automatisé pour le compte de 
                            SME STRATEGITECH SAS. » Les utilisateurs et les personnes appelées ont la possibilité
                            de se désinscrire des communications automatisées, et nous respectons strictement les 
                            listes d’opposition au démarchage téléphonique, telles que Bloctel.
                        </p>
                        
                        <p>
                            Nous utilisons des cookies et autres traceurs pour mesurer l’usage du service, 
                            personnaliser l’expérience utilisateur et analyser les performances de notre landing 
                            page et de nos campagnes marketing. Ces cookies ne sont déposés qu’après obtention du
                            consentement explicite de l’utilisateur, à l’exception des cookies strictement nécessaires 
                            au fonctionnement du service.
                        </p>
                        
                        <p>
                            Pour améliorer notre produit et nos services, nous recueillons les feedbacks de nos 
                            utilisateurs via des formulaires sécurisés ou, lorsque l’utilisateur y consent, par des 
                            retours vocaux. Ces feedbacks sont analysés de manière anonymisée pour identifier les bugs, 
                            améliorer les scripts d’appels et optimiser l’expérience globale. Tous les feedbacks sont 
                            traités rapidement, catégorisés et suivis par les membres responsables de l’équipe afin de 
                            garantir une amélioration continue du service.
                        </p>
                        
                        <p>
                            Cette politique de confidentialité peut être amenée à évoluer afin de se conformer aux 
                            obligations légales ou pour améliorer nos services. Les utilisateurs seront informés des 
                            modifications par email ou notification sur notre site. La date de dernière mise à jour 
                            est 22/11/2025.
                        </p>
                        
                        <p>
                            Pour toute question relative à la protection de vos données ou pour exercer vos droits, 
                            vous pouvez nous contacter à l’adresse email {" "}
                            <a href="mailto:contact@mazia.ai" className="text-blue-600 hover:underline">
                            contact@mazia.ai 
                            </a> {" "}
                            ou à notre siège social 
                            situé au 144 avenue Charles de ferme, 92200 Neuilly-sur-Seine.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
);
};

export default Politiques;