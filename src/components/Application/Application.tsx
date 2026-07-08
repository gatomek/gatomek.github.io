import styles from './Application.module.css';
import netlifyLogo from "../../assets/netlify.svg";
import reactLogo from '../../assets/react.svg';
import githubLogo from '../../assets/github.svg';
import type {ApplicationProps} from "./Application.types.ts";

const originToLogo = (origin: string) => {
    if (origin === 'github') {
        return githubLogo;
    }

    if (origin === 'netlify') {
        return netlifyLogo;
    }

    return reactLogo;
}

export function Application(props: Readonly<ApplicationProps>) {
    return (
        <div className={styles.root}>
            <div>
                {
                    props.origins.map(o =>
                        <a key={o.name} href={o.url} title={o.name} target={"_blank"} referrerPolicy={"no-referrer"}>
                            <img className={styles.icon} src={originToLogo(o.name)} width="40" height="40"
                                 alt={o.name}/>
                        </a>
                    )
                }
            </div>
            <div className={styles.label}>{props.children}</div>
        </div>
    )
}
