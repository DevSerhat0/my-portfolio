import React from "react";
import styles from './SocialMedia.module.css';
import { userData } from "./Data";

function SocialMedia () {
    return (
        <div className={styles['social-media']}>
            <a
            href={userData.social.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            >
                <i className="fa-brands fa-github"></i>
            </a>

            <a
            href={userData.social.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            >
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
            href={userData.social.instagram}
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            >
                <i className="fa-brands fa-instagram"></i>
            </a>
        </div>
    );
}

export default SocialMedia;