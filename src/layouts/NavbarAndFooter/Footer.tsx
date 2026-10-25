import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="main-color py-4 mt-5">
            <div className="container">
                <div className="row g-3">
                    {/* Colonne 1 : Marque */}
                    <div className="col-md-3 mb-3">
                        <h5 className="text-white">Niit Library</h5>
                        <p className="text-white-50 small">
                            Plateforme de gestion de bibliothèque en ligne.
                            Accédez à des milliers de livres, gérez vos emprunts
                            et suivez vos lectures.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white-50" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white-50" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-white-50" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="text-white-50" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>

                    {/* Colonne 2 : Liens utiles */}
                    <div className="col-md-2 mb-3">
                        <h6 className="text-white">Partenaires</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#" className="text-white-50 text-decoration-none">MESRI</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">ANAQ-Sup</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">Maire de Dakar</a></li>
                            <li><a href="#" className="text-white-50 text-decoration-none">3FPT</a></li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Contact (Dakar) */}
                    <div className="col-md-3 mb-3">
                        <h6 className="text-white">Contact</h6>
                        <ul className="list-unstyled small text-white-50">
                            <li className="mb-1"><i className="bi bi-geo-alt"></i> SICAP Mermoz, VDN, Dakar</li>
                            <li className="mb-1"><i className="bi bi-telephone"></i> +221 33 824 1160</li>
                            <li><i className="bi bi-envelope"></i> niitsenegal@gmail.com</li>
                        </ul>
                    </div>

                    {/* Colonne 4 : Siège social NIIT (India) */}
                    <div className="col-md-4 mb-3">
                        <h6 className="text-white">Siège social NIIT</h6>
                        <ul className="list-unstyled small text-white-50">
                            <li className="mb-1"><i className="bi bi-geo-alt"></i> 85, Sector 32, Gurugram, India-122001</li>
                            <li className="mb-1"><i className="bi bi-telephone"></i> +91-124-4293170</li>
                            <li><i className="bi bi-envelope"></i> ils_row@niit.com</li>
                        </ul>
                    </div>
                </div>

                <hr className="bg-light opacity-25" />

                <div className="text-center">
                    <p className="text-white-50 small mb-0">
                        &copy; {new Date().getFullYear()} Niit Library App, Dakar. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};