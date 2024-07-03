import React from "react";
import styles from './Footer.module.css';
import { Logo } from "../Logo/Logo";
import { Link,useNavigate } from "react-router-dom";

function Footer() {

    return (
        <div className={styles.main_div}>
            <div className={styles.sub_div}>
                <Logo />
                <p className={styles.text}>
                    © 2023 Bundle Technologies Pvt. Ltd
                </p>
            </div>

            <div className={styles.sub_div}>
                <h4>Company</h4>
                <Link to={"https://careers.swiggy.com/#/"} target="_blank">
                    <p className={styles.text} >About</p>
                </Link>
                <Link to={"https://careers.swiggy.com/#/"} target="_blank">
                    <p className={styles.text}>Career</p>
                </Link>
                <Link to={"https://careers.swiggy.com/#/"} target="_blank">
                    <p className={styles.text}>Team</p>
                </Link>
            </div>

            <div className={styles.sub_div}>
                <h4>Contact us</h4>
                <Link to={"https://www.swiggy.com/support"} target="_blank">
                    <p className={styles.text}>Help & Support</p>
                </Link>
                <Link to={"https://partner.swiggy.com/login#/swiggy"} target="_blank">
                <p className={styles.text}>Partner with us</p>
                </Link>
                <Link to={"https://ride.swiggy.com/"} target="_blank">
                <p className={styles.text}>Ride with us</p>
                </Link>
            </div>

            <div className={styles.sub_div}>
                <h4>Legal</h4>
                <Link to={'https://www.swiggy.com/terms-and-cond</Link>itions'} target="_blank">
                    <p className={styles.text}>Terms & Conditions</p>
                    </Link>

                <Link to={"https://www.swiggy.com/cookie-policy"} target="_blank">
                    <p className={styles.text}>Cookie Policy</p>
                </Link>
                <Link to={"https://www.swiggy.com/privacy-policy"} target="_blank">
                    <p className={styles.text}>Privacy Policy</p></Link>
            </div>
        </div>
    )
}

export default Footer;
