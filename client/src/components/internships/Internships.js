import React from 'react'
import classes from "./internships.module.css"

function Internships() {
    return (
        <div className={classes.container_content}>
            <section className={classes.container_form_internships}>
                <div className={classes.head_form}>
                    <h2>
                        Отправьте заявку на стажировку, и мы ответим в течение двух дней
                    </h2>
                </div>
                <div className={classes.form}>
                    <div className={classes.block_form}>
                        <div className={classes.one_block}>
                            <input type="text" placeholder="ФИО"/>
                            <input type="text" placeholder="Почта"/>
                            <textarea name="text" cols="30" rows="5"></textarea>
                        </div>
                        <div className={classes.two_block}>
                            <a href="#" className={classes.btn_send}><span className={classes.title_send}>Отправить</span></a>
                            <p className={classes.text_conditions}>Нажимая на кнопку "Отправить", я принимаю <span>условия соглашения.</span>
                            </p>
                        </div>
                    </div>
                    <div className={classes.two_block}>
                        <label htmlFor="file-send">Добавть фаил для отправки:</label>
                        <input type="file"
                               id="file-send" name="file-send"
                               accept="file/pdf, file/doxs"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Internships