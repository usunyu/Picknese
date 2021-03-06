var InputConfirmationModal = React.createClass({displayName: 'InputConfirmationModal',
    render: function() {
        return (
            React.createElement("div", {
                id: this.props.id_prefix + "-" + this.props.feed.id, 
                className: "modal fade", 
                tabIndex: "-1", 
                role: "dialog", 
                'aria-hidden': "true"}, 
                React.createElement("div", {className: "modal-dialog"}, 
                    React.createElement("div", {className: "modal-content"}, 
                        React.createElement("div", {className: "modal-header " + this.props.background_color}, 
                            React.createElement("button", {
                                type: "button", 
                                className: "close", 
                                'data-dismiss': "modal", 
                                'aria-label': "Close", 
                                style: {color: "white"}}, 
                                React.createElement("span", {'aria-hidden': "true"}, "×")
                            ), 
                            React.createElement("h5", {className: "modal-title", style: {color: "white"}}, 
                                this.props.title
                            )
                        ), 
                        React.createElement("div", {className: "modal-body"}, 
                            React.createElement("div", {className: "form-group"}, 
                                React.createElement("textarea", {
                                    id: "textarea-" + this.props.id_prefix + "-" + this.props.feed.id, 
                                    className: "form-control", 
                                    rows: "3", 
                                    onChange: this.props.onInputChange, 
                                    placeholder: this.props.placeholder}
                                )
                            )
                        ), 
                        React.createElement("div", {className: "modal-footer"}, 
                            React.createElement("button", {type: "button", className: "btn btn-default", 'data-dismiss': "modal"}, "Cancel"), 
                            React.createElement("button", {
                                id: "submit-" + this.props.id_prefix + "-" + this.props.feed.id, 
                                type: "button", 
                                className: "btn btn-primary", 
                                onClick: this.props.onSubmit}, 
                                this.props.submit_text
                            )
                        )
                    )
                )
            )
        );
    }
});

var WarningConfirmationModal = React.createClass({displayName: 'WarningConfirmationModal',
    render: function() {
        return (
            React.createElement("div", {
                id: "feed-" + this.props.feed.id, 
                className: "modal fade", 
                tabIndex: "-1", 
                role: "dialog", 
                'aria-hidden': "true"}, 
                React.createElement("div", {className: "modal-dialog modal-sm"}, 
                    React.createElement("div", {className: "modal-content"}, 
                        React.createElement("div", {className: "modal-header background-color-warning"}, 
                            React.createElement("button", {
                                type: "button", 
                                className: "close", 
                                'data-dismiss': "modal", 
                                'aria-label': "Close", 
                                style: {color: "white"}}, 
                                React.createElement("span", {'aria-hidden': "true"}, "×")
                            ), 
                            React.createElement("h5", {className: "modal-title", style: {color: "white"}}, 
                                this.props.title
                            )
                        ), 
                        React.createElement("div", {className: "modal-body"}, 
                            React.createElement("p", null, this.props.text)
                        ), 
                        React.createElement("div", {className: "modal-footer"}, 
                            React.createElement("button", {type: "button", className: "btn btn-default", 'data-dismiss': "modal"}, "Cancel"), 
                            React.createElement("button", {
                                type: "button", 
                                className: "btn btn-primary", 
                                onClick: this.props.onConfirm}, 
                                "Confirm"
                            )
                        )
                    )
                )
            )
        );
    }
});