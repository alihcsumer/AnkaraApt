function BuildInfoCard(props) {
    return (
        <div class="buildinfocard">
        <div class="buildname"><h3>{props.buildingName}</h3></div>
    <div class="buildaddress">{props.address}</div>
    </div>
    );
}

export default BuildInfoCard;