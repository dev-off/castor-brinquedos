import style from './style.module.scss';

export const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: 'url(./playground-madeira.jpg)'
            }}
            className={style.container}
        >
            <div className={style.popUp}>
                <small>Diga Olá para a Castor Brinquedos!</small>
                <h2>Fabricação e instalação <br /> de playground de madeira.</h2>
                <button>Abrir catálogo</button>

            </div>
            <div className={style.indicateScroll}>
                    <div className={style.ico_indicateScroll}>
                        <div className={style.ico}>
                            <div className={style.animate}>

                            </div>

                        </div>

                    </div>
            </div>

        </div>
    );
}