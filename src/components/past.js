import React from "react";

class Past extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: ""
    };
  }

  async componentDidMount() {
    const url = "https://rohitchaudhary701.github.io/bluestack/events.json";
    const api_call = await fetch(url);
    const apidata = await api_call.json();
    this.setState({ allData: apidata.data });
  }

  renderTableData() {
    let tableData = this.state.allData;
    let tr = [];
    Object.keys(tableData).map(function (value, i) {
      tr.push(tableData[value]);
    });
    var currentDate = new Date();
    var timestmp = Date.parse(currentDate);
    var todate = new Date(timestmp).getDate();
    var tomonth = new Date(timestmp).getMonth() + 1;
    var toyear = new Date(timestmp).getFullYear();
    var currentDate = tomonth + '/' + todate + '/' + toyear;
    var timestmp = Date.parse(currentDate);

    return tr.map((value, index) => {
      if (value.createdOn < timestmp) {
        var difference = timestmp - value.createdOn;
        var days = Math.ceil(difference / 1000 / 60 / 60 / 24);
        var todate = new Date(value.createdOn).getDate();
        var tomonth = new Date(value.createdOn).getMonth() + 1;
        var toyear = new Date(value.createdOn).getFullYear();
        var createdDate = tomonth + '/' + todate + '/' + toyear;

        return (
          <tr key={index}>
            <td>{createdDate} ({days} ago )</td>
            <td>{value.name}</td>
            <td>{value.region}</td>
            <td>{value.price}</td>
            <td>{value.csv}</td>
          </tr>
        )
      }
    })
  }


  render() {
    return (
      <div
        className="tab-pane fade "
        id="past"
        role="tabpanel"
        aria-labelledby="upcoming-tab"
        onClick={this.changeData}
      >
        Past
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>DATE</th>
              <th>CAMPAIGN</th>
              <th>VIEW</th>
              <th>ACTIONS</th>
              <th>CSV</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Past;
