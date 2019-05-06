<template>
  <div id="app2">
    <!-- <div id="charts" ref="chart" style="height:70vh;"></div> -->
  </div>
</template>




<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { debounce } from "@/utils";
export default {
  data() {
    return {
      myChart: null,
      option: {},
      graph: {
        nodes: [
          {
            name: "Node1",
            x: 300,
            y: 300
          },
          {
            name: "Node2",
            x: 800,
            y: 300
          },
          {
            name: "Node3",
            x: 550,
            y: 100
          },
          {
            name: "Node4",
            x: 550,
            y: 500
          }
        ],
        links: [
          {
            source: 0,
            target: 1,
            symbolSize: [5, 20],
            label: {
              normal: {
                show: true
              }
            },
            lineStyle: {
              normal: {
                width: 5,
                curveness: 0.2
              }
            }
          },
          {
            source: "Node2",
            target: "Node1",
            label: {
              normal: {
                show: true
              }
            },
            lineStyle: {
              normal: { curveness: 0.2 }
            }
          },
          {
            source: "Node1",
            target: "Node3"
          },
          {
            source: "Node2",
            target: "Node3"
          },
          {
            source: "Node2",
            target: "Node4"
          },
          {
            source: "Node1",
            target: "Node4"
          }
        ]
      }
    };
  },
  mounted() {
    this.initChart();
    this.renderChart();
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(document.getElementById("charts"));
    },
    renderChart() {
      this.myChart.showLoading();
      this.formatOption();
      this.initDrag();
    },
    formatOption() {
      this.option = {
        title: {
          text: "Graph 简单示例"
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: "scale",
            label: {
              normal: {
                show: true
              }
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            nodes: this.graph.nodes,
            links: this.graph.links,
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
            }
          }
        ]
      };
      this.myChart.hideLoading();
      this.myChart.setOption(this.option, true);
    },
    initDrag() {
      this.option.graphic = echarts.util.map(
        this.graph.nodes,
        (item, dataIndex) => {
          return {
            type: "circle",
            position: this.myChart.convertToPixel({ seriesIndex: 0 }, [
              item.x,
              item.y
            ]),
            shape: {
              r: 10
            },
            // invisible: true,
            style: {
              fill: "blue"
            },
            draggable: true,
            ondrag: echarts.util.curry(this.onPointDragging, dataIndex),
            z: 100
          };
        }
      );
      this.myChart.setOption(this.option);
      window.addEventListener("resize", this.updatePosition);
    },
    updatePosition() {
      this.myChart.setOption({
        graphic: echarts.util.map(this.graph.nodes, (item, dataIndex) => {
          return {
            position: this.myChart.convertToPixel({ seriesIndex: 0 }, [
              item.x,
              item.y
            ])
          };
        })
      });
    },
    onPointDragging(dataIndex, event) {
      let pos = this.myChart.convertFromPixel({ seriesIndex: 0 }, [
        event.offsetX,
        event.offsetY
      ]); // 将graphic的像素坐标转化为坐标系坐标
      this.graph.nodes[dataIndex].x = pos[0]; // 将新的坐标系坐标赋值给node
      this.graph.nodes[dataIndex].y = pos[1];
      this.myChart.setOption({
        series: {
          nodes: this.graph.nodes
        }
      });
      this.updatePosition();
    }
  }
};
</script>
<style scoped>
#charts {
  flex: 1;
  border: 1px solid;
  box-shadow: 0 0 20px rgba(18, 208, 253, 0.5);
}
</style>