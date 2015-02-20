// Not used
var NavbarPanel = React.createClass({
    getInitialState: function() {
        return {
            currentUniversity: [],
            currentUser: null,
        };
    },
    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"><b>Picknese</b></a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            {/* if user is logged in */}
                            {/* if user is not logged in */}
                            <li><a href="/accounts/login/">Log In</a></li>
                            <li><a href="/accounts/signup/">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

React.render(
    <NavbarPanel />,
    document.getElementById('fixed-navbar')
);