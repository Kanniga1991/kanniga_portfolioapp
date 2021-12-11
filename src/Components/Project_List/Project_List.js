import React , {useState} from 'react';
import "./Project_List.css";


export default function Project_List( {img, title,  description, link} ) {
    const [show , setshow] = useState(false);

    return (
        <a href = {link}>
            <div className = "projectlist"
            onMouseEnter={ () => setshow(true) }
            onMouseLeave={ () =>setshow (false) }>
                {
                    show ? (
                        <div className = "projectlist_show">
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </div>
                    ) : (
                        <img src = {img} alt = ""/>
                    )
                }

            </div>
        </a>
    )
}
