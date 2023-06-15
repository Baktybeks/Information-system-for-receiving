import React, {useEffect} from 'react'
import classes from "./header.module.css"
import {links} from "../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getTariffsApi} from "../../axios/tariffApi"
import {setIsAuth} from "../../store/slices/userSlice"
import {getUsers} from "../../axios/usersApi"
import logo from "../../img/Logo_group.png"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)

    const {tariffs} = useSelector(state => state.tariffReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
    }
    const admin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    useEffect(() => {
        dispatch(getTariffsApi())
        dispatch(getUsers())
    }, [dispatch])

    return (
        <header className={classes.container_head}>
            <div className={classes.head_block}>
                <div className={classes.logo_img}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={classes.menu_container}>
                    <nav className={classes.menu}>
                        <ul className={classes.menu_block}>
                            <li>
                                <a href="#">О нас</a>
                            </li>
                            <li>
                                <a href="#">Вакансии</a>
                            </li>
                            <li>
                                <a href="#">Стажировки</a>
                            </li>
                            <li>
                                <a href="#">Регистрация</a>
                            </li>
                            <li>
                                <a href="#">Войти</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>        
    )
}

export default Header