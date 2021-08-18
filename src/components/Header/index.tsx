import { Facebook, Instagram, Cart } from '../icons';
import style from './style.module.scss';

interface IconProps {
    width: string,
    fill: string,
}

export const Header = () => {
    return (
        <header className={style.container}>
            <div className={style.content}>
                <div className={style.content_top}>
                    <div className={style.row}>
                        <div className={style.contact}>
                            <span>Fone: 19 989422018</span>
                            <span>E-mail: <a>contato@castorbrinquedos.com.br</a></span>
                        </div>
                        <div className={style.social_icons}>
                            <Facebook width="10" fill="#fff" />
                            <Instagram width="10" fill="#fff" />
                           
                        </div>
                    </div>
                </div>
                <div className={style.content_booton}>
                    <div className={style.row}>
                        <div className={style.contentLeft}>
                            <div className={style.logo}>
                                <h1>Castor Brinquedos</h1>
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        <a>Catálogo</a>
                                    </li>
                                    <li>
                                        <a>Entrega</a>
                                    </li>
                                    <li>
                                        <a>Sobre nós</a>
                                    </li>
                                    <li>
                                        <a>Contato</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={style.contentRight}>
                            <Cart fill="#333333" width="20" />
                            <div className={style.itemsCart}>
                                {0}
                            </div>
                            <div className={style.openMenuMobile}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                       

                    </div>

                </div>
            </div>
        </header>
    );
}