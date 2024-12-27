import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  horizontal?:boolean,
  data1: number[],
  data2: number[],
  title1: string,
  title2: string,
  bgColor1: string,
  bgColor2: string,
  labels?: string[]
}

interface DoughnutChartProps {
  title1: string,
  title2: string,
  color1: string,
  color2: string,
  value1: number,
  value2: number
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const BarChart = ({horizontal=false, data1=[], data2=[], title1, title2, bgColor1, bgColor2, labels=months}: BarChartProps) => {
  
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? 'y' : 'x',
    plugins: {
      legend: {
        display: false,
        // position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Bar Chart',
      },
    },
    scales: {
      y:{
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x:{
        grid: {
          display: false
        }
      }
    }
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor: bgColor1,
        barThickness: 'flex',
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bgColor2,
        barThickness: 'flex',
        barPercentage: 1,
        categoryPercentage: 0.4
      },
    ],
  };

  return <div
    style={{
      maxWidth: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90%',
      width: '100%',
    }}
    >
        <Bar options={options} data={data} />
    </div>
}

export const DoughnutChart = ({title1, title2, color1, color2, value1, value2}:DoughnutChartProps) => {
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Legend at the end
        labels: {
          boxWidth: 20,
          padding: 10,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  const data:ChartData<"doughnut", number[], string> = {
    labels: [title1, title2],
    datasets: [
      {
        label: 'Count',
        data: [value1, value2],
        backgroundColor: [
          color1,
          color2
        ],
        // borderRadius: 0,
        cutout: '80%',
        hoverOffset: 15,
      },
    ],
  };

  return <div
  style={{
    maxHeight: '75%'
  }}>
    <Doughnut data={data} options={options}/>
  </div>
  
}



