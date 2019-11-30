import React from "react";

class Upcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: undefined,
      campaign: undefined,
      view: undefined,
      action: undefined
    };
  }

  async componentDidMount() {
    const url = "https://rohitchaudhary701.github.io/bluestack/events.json";
    const api_call = await fetch(url);

    const data = await api_call.json();
    //this.setState({ eventData: data.data });
    console.log(data.data);
    this.setState({
      date: data.data[0].createdOn,
      campaign: data.data[0].name,
      view: data.data[0].csv,
      action: data.data[0].image_url
    });
  }

  render() {
    return (
      <div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="upcoming"
            role="tabpanel"
            aria-labelledby="upcoming-tab"
            onClick={this.changeData}
          >
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>DATE</th>
                  <th>CAMPAIGN</th>
                  <th>VIEW</th>
                  <th>ACTIONS</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.date.map(function(date, i) {
                    return <td>date[i]</td>;
                  })}

                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Upcoming;
