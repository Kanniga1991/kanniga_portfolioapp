import React from "react";
import "./ProjectList.css";

export default function ProjectList({ img, title, description, link }) {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="atag">
			<div className="projectlist">
				<div className="projectlist_show">
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
				<img src={img} alt={title} className="projectlist_img" />
			</div>
		</a>
	);
}
