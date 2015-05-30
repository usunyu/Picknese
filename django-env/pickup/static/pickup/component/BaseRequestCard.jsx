var BaseRequestCard = React.createClass({
    componentDidUpdate: function() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    },
    handleRequestCancel: function() {
        var feed = this.props.feed;
        this.props.onCancel(feed);
    },
    handleRequestSubmit: function() {
        var feed = this.props.feed;
        this.props.onSubmit({
            flight_pick_request : feed.id,
            picker              : current_user.id,
            description         : $("#pick-up-desc-textarea").val().trim(),
        });
    },
    getActionButton: function() {
        var feed = this.props.feed;
        {/* If it is user's own request */}
        if (current_user.id == feed.requester.id) {
            return (
                <div>
                    <button
                        type="button"
                        className="btn btn-warning"
                        style={{float: 'right'}}
                        data-toggle="modal"
                        data-target={"#feed-" + feed.id}>
                        <i className="glyphicon glyphicon-remove"></i>&nbsp;
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{float: 'right', marginRight: '10px'}} >
                        <i className="glyphicon glyphicon-edit"></i>&nbsp;
                        Update
                    </button>
                    {/* Cancel Button Modal */}
                    <div
                        id={"feed-" + feed.id}
                        className="modal fade"
                        tabIndex="-1"
                        role="dialog"
                        aria-hidden="true">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                <div className="modal-header" style={{backgroundColor: "#ff9800"}}>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        style={{color: "white"}}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h5 className="modal-title" style={{color: "white"}}>
                                        Cancel Confirmation
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure want to cancel this request?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={this.handleRequestCancel}>
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <button
                        type="button"
                        className="btn btn-success"
                        style={{float: 'right'}}
                        data-toggle="modal"
                        data-target={"#feed-" + feed.id}>
                        <i className="glyphicon glyphicon-heart"></i>&nbsp;
                        Offer Help
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{float: 'right', marginRight: '10px'}} >
                        <i className="glyphicon glyphicon-edit"></i>&nbsp;
                        Comment
                    </button>
                    {/* Offer Button Modal */}
                    <div
                        id={"feed-" + feed.id}
                        className="modal fade"
                        tabIndex="-1"
                        role="dialog"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header" style={{backgroundColor: "#4caf50"}}>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        style={{color: "white"}}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h5 className="modal-title" style={{color: "white"}}>
                                        Offer Confirmation
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <textarea
                                            id="pick-up-desc-textarea"
                                            className="form-control"
                                            rows="3"
                                            placeholder="Thanks for taking this request, anything you want to mention?">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={this.handleRequestSubmit}>
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    },
    getContentBody: function() {
        var layout = this.props.layout;
        var content = [];
        for (var key in layout.body) {
            var value = layout.body[key];
            content.push(
                <p
                    key={key}
                    className={layout.body[key].class}
                    data-toggle="tooltip"
                    data-placement="left"
                    title={layout.body[key].title} >
                    <i className={layout.body[key].icon}></i> {layout.body[key].content}
                </p>
            );
        }
        return content;
    },
    render: function() {
        var feed = this.props.feed;
        var layout = this.props.layout;
        return (
            <div className="panel clearfix fadein-effect">
                <div className="panel-heading" style={{overflow: "auto"}}>
                    <a  href="#" className="home-feed-sm-profile">
                        <img
                            className="image-circular"
                            src={
                                feed.requester.profile.avatar ? 
                                feed.requester.profile.avatar : getProfileDefaultPic()
                            }
                            style={{width: '40px', height: '40px'}} />
                    </a>
                    <b className="home-feed-title">{feed.requester.first_name} {feed.requester.last_name} {layout.heading.verb} <span className="label label-danger" style={{fontSize: "95%"}}>{layout.heading.action}</span></b>
                    <div style={{float: "right"}}>
                        <span style={{fontSize: "80%", marginRight: "15px", marginTop: "3px"}}>{moment(feed.created).format("YYYY-MM-DD HH:mm")}</span>
                        <i className={layout.heading.icon} style={{marginRight: "10px"}}></i>
                    </div>
                </div>
                <hr style={{marginTop: "0px", marginBottom: "0px"}}/>
                <div className="panel-body">
                    <div className="media">
                        <div className="media-left">
                            <a href="#" className="home-feed-md-profile">
                                <img
                                    className="image-circular"
                                    src={
                                        feed.requester.profile.avatar ? 
                                        feed.requester.profile.avatar : getProfileDefaultPic()
                                    }
                                    style={{width: '60px', height: '60px', marginTop: '-60px', marginLeft: '-7px'}} />
                            </a>
                        </div>
                        <div className="media-body">
                            <div className="row">
                                <div>
                                    {this.getContentBody()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{marginTop: '5px', marginBottom: '15px'}} />
                    {this.getActionButton()}
                </div>
            </div>
        );
    }
});