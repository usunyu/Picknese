var JumbotronPanel = React.createClass({
    mixins: [LoadUniversityMixin],
    render: function() {
        var university = this.state.university;
        if (!university) {
            return (<div />);
        }
        return (
            <div style={{marginTop: '10px'}}>
                <div className="box-wrapper">
                    <div className="box-blur-wrapper" >
                        <div
                            className="jumbotron box-shadow box-blur"
                            style={{background: 'url(' + getUniversityWide(university.shorthand) + ') center', minHeight: '200px'}} >
                        </div>
                        <div
                            className="jumbotron box-shadow box-blur box-blur-overlay"
                            style={{background: 'url(' + getUniversityWide(university.shorthand) + ') center', minHeight: '200px'}} >
                        </div>
                    </div>
                </div>

                <div className="container" style={{marginTop: '-140px'}} >
                    <div className="row">
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                            <img
                                src={getUniversityLogo(university.shorthand)}
                                className="img-thumbnail img-responsive img-center box-shadow-light"
                                style={{width: '150px'}} />
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-9 hidden-xs" style={{marginTop: '38px'}}>
                            <h3 className="color-white text-shadow">{university.name}</h3>
                        </div>
                        <div className="col-xs-6 visible-xs" style={{marginTop: '38px'}}>
                            <h6 className="color-white text-shadow">{university.name}</h6>
                        </div>
                        <div className="col-xs-12 col-md-10">
                            <ul className="nav nav-tabs">
                                <li role="presentation" className={checkActiveTab(getPickupBaseURL())}>
                                    <a href={getPickupURL(university.id)}>Pick Up</a>
                                </li>
                                <li role="presentation">
                                    <a href="#">Carpool</a>
                                </li>
                                <li role="presentation" className={checkActiveTab(getUniversityBaseURL())}>
                                    <a href={getUniversityURL(university.id)}>About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

React.render(
    <JumbotronPanel />,
    document.getElementById('jumbotron')
);
