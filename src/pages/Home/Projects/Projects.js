import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
		super(props);
    }

  render() {
    return (
	<div id="projects" ref={this.projectsRef}>
		<div className="container">
			<h2>My projects</h2>
			<div className="projects">
				<div className="project">
					<div className="card">
						<img src="https://images.24ur.com/media/images/900x500/Nov2018/8e095e550d_62166697.jpg?v=d41d" alt="" />
						<div className="cover">
							<h3>Dominvrt.si</h3>
							<p>Web design and front-end</p>
						</div>
					</div>
				</div>
				<div className="project">
					<div className="card">
						<img src="https://images.24ur.com/media/images/900x500/Mar2019/1cc825e4c1_62222125.jpg?v=1579633129" alt="" />
						<div className="cover">
							<h3>Bibaleze.si</h3>
							<p>Web design and front-end</p>
						</div>
					</div>
				</div>
				<div className="project">
					<div className="card">
						<img src="https://images.24ur.com/media/images/900x500/Nov2018/8e095e550d_62166697.jpg?v=d41d" alt="" />
						<div className="cover">
							<h3>Dominvrt.si</h3>
							<p>Web design and front-end</p>
						</div>
					</div>
				</div>
				<div className="project">
					<div className="card">
						<img src="https://images.24ur.com/media/images/900x500/Nov2018/8e095e550d_62166697.jpg?v=d41d" alt="" />
						<div className="cover">
							<h3>Dominvrt.si</h3>
							<p>Web design and front-end</p>
						</div>
					</div>
				</div>
				<div className="project">
					<div className="card">
						<img src="https://images.24ur.com/media/images/900x500/Nov2018/8e095e550d_62166697.jpg?v=d41d" alt="" />
						<div className="cover">
							<h3>Dominvrt.si</h3>
							<p>Web design and front-end</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    );
  }
}

export default Projects;
