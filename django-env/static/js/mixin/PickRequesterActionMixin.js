// Required: pollInterval
// Optional: myList => true indicate current user's list
var PickRequesterActionMixin = {
	loadPickRequestersFromServer: function() {
        var universityID = parseLastNumberInURLPath();
        var apiURL = getPickRequesterListAPI(universityID);
        if (this.props.myList) {
            apiURL = getMyPickRequestListAPI(universityID);
        }
        $.ajax({
            url: apiURL,
            dataType: 'json',
            success: function(data) {
                this.setState({requesters: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(apiURL, status, err.toString());
            }.bind(this)
        });
    },
    handlePickRequesterSubmit: function(form, requester, university) {
        var destination = form.destination;
        if (!destination) {
            // TODO, show error message
            alert('Please input destination');
            return;
        }
        var requesterData = {
            requester : requester.id,
            university : university.id,
            pick_type : form.pick_type,
            price : form.price,
            confirmed: false,
            flight : form.flight,
            start : form.start,
            destination : form.destination,
            description : form.description,
        }
        var pickRequester = {
            requester : requester,
            university : university,
            pick_type : form.pick_type,
            price : form.price,
            confirmed: false,
            flight : form.flight,
            destination : form.destination,
            description : form.description,
        }
        $.ajax({
            url: getPickRequesterCreateAPI(),
            dataType: 'json',
            type: 'POST',
            data: requesterData,
            success: function(data) {
                // reload data
                this.loadPickRequestersFromServer();
                popupSuccessMessage("You have successfully post your request. Please waiting for your picker to contact you!");
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(getPickRequesterCreateAPI(), status, err.toString());
                popupDangerMessage("Oops, some errors happen, please try again later.")
            }.bind(this)
        });
    },
    handlePickRequesterCancel: function(requestID, modalID) {
        $.ajax({
            url: getPickRequesterMutateAPI(requestID),
            type: 'DELETE',
            success: function(data) {
                // close dialog on success
                $('#' + modalID).modal('hide');
                // reload data
                this.loadPickRequestersFromServer();
                popupWarningMessage("You have successfully cancel your request.")
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(getPickRequesterMutateAPI(requestID), status, err.toString());
                popupDangerMessage("Oops, some errors happen, please try again later.");
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {
            requesters: [],
        };
    },
    componentDidMount: function() {
        this.loadPickRequestersFromServer();
        setInterval(this.loadPickRequestersFromServer, this.props.pollInterval);
    },
};