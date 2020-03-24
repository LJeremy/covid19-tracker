import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CircularProgress from "@material-ui/core/CircularProgress";

// helpers
import { mapLocationToChartSeries } from "../../helpers/chart";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    console.log("CHART MOUNT", this.props.data);

    let options = {};
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      let options = {
        chart: {
          height: 400,
          type: "line",
          zoomType: "x",
          backgroundColor: "#303030"
        },
        title: {
          text: `Coronavirus confirmed cases in ${this.props.country}`,
          style: {
            color: "#fff"
          }
        },
        xAxis: {
          type: "datetime"
        },
        yAxis: {
          title: {
            text: "Confirmed cases"
          }
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              formatter: function() {
                if (this.y > 0) {
                  return this.y;
                } else {
                  return null;
                }
              }
            }
          }
        },
        series: [
          mapLocationToChartSeries(
            this.props.data.confirmed.locations.find(location =>
              this.props.province
                ? this.props.province &&
                  location.province === this.props.province
                : location.country === this.props.country &&
                  (location.province === "" ||
                    location.province === this.props.country)
            )
          )
          // mapLocationToChartSeries(
          //   nextProps.data.confirmed.locations.find(_ => _.country === "Spain")
          // )
        ]
      };
      this.setState({ options });
      this.setState({ loading: false });
    } else {
      let options = {
        chart: {
          height: 400,
          type: "line",
          zoomType: "x"
        },
        title: {
          text: `Coronavirus confirmed cases in ${this.props.country}`
        },
        xAxis: {
          type: "datetime"
        },
        yAxis: {
          title: {
            text: "Confirmed cases"
          }
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              formatter: function() {
                if (this.y > 0) {
                  return this.y;
                } else {
                  return null;
                }
              }
            }
          }
        },
        series: [
          mapLocationToChartSeries(
            this.props.data.confirmed.locations.find(location =>
              this.props.province
                ? this.props.province &&
                  location.province === this.props.province
                : location.country === this.props.country &&
                  (location.province === "" ||
                    location.province === this.props.country)
            )
          )
          // mapLocationToChartSeries(
          //   nextProps.data.confirmed.locations.find(_ => _.country === "Spain")
          // )
        ]
      };
      this.setState({ options });
      this.setState({ loading: false });
    }
  };

  componentWillReceiveProps(nextProps, prevProps) {
    if (nextProps !== prevProps) {
      this.setState({ loading: false });
    }
    console.log("CHART NEW PROPS", nextProps);
  }

  render() {
    const { loading, options } = this.state;
    return (
      <React.Fragment>
        {!loading ? (
          <div style={{ marginTop: "32px" }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        ) : (
          <CircularProgress />
        )}
      </React.Fragment>
    );
  }
}

export default Chart;
