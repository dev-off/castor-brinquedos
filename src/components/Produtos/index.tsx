import style from './style.module.scss';
import Image from 'next/image'

export const Product = () => {

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div>
                    <div>
                        <h1>Playground de eucalipto</h1>
                    </div>
                    <div className={style.containerProdutos}>
                        <div>
                            <Image 
                                width=""
                                height=""
                                src="./"
                            />
                        </div>

                    </div>

                </div>
                <div>
                    
                </div>

            </div>

        </div>


          
    );
}