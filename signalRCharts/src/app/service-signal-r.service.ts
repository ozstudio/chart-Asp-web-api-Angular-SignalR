import { Injectable,ViewChild } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {ChartModel} from './interfaces/chartModelI';
import { ChartDataSets,ChartConfiguration,ChartData } from 'chart.js';
import { AppComponent } from './app.component';
import { BaseChartDirective } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class ServiceSignalRService {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
public data:ChartModel[];
public t:any[];
public myDate = new Date;
public chartLabels:string[] = [];
public numb:number = 0;
public  l:any = [];
public barColor:string = "#34B6D2";





// public exampleBar:ChartConfiguration ['data'] = {
//   datasets :[
//     { 
//       data:[]
   
//     }
//   ]
// };
public exampleBar: ChartData = {
  labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  datasets: [
    { data: [], label: 'Series A',backgroundColor:this.barColor },
    { data: [], label: 'Series B',backgroundColor:this.barColor },
    { data: [], label: 'Series C',backgroundColor:this.barColor },
   
    
  ]
};



public exampleData:ChartDataSets [] = [{ 
  data: [],
   label: '',
   lineTension:0 ,
   borderColor: '#34B6D2',
   fill:'origin',
   pointBackgroundColor: '#34B6D2',
   pointBorderColor: '#34B6D2',
   backgroundColor: 'rgba(0, 0, 0, 0.0)',
  }];
private hubConnection:signalR.HubConnection;

//  public exampleDouthnut:ChartDataSets [] = [{data:[0],
//   backgroundColor: [
//      'rgb(78, 216, 218)',
    
//     'rgb(192, 77, 216)',
//     'rgb(224, 105, 80)',
    
//   ],
//   borderColor:'rgba(255, 205, 80,0)',
  
  
  
// }];

public exampleDouthnut: ChartConfiguration['data'] = { //half
  datasets: [
    {
      
      data:[0],
     
  backgroundColor: [
     'rgb(78, 216, 218)',
    
    'rgb(192, 77, 216)',
    'rgb(224, 105, 80)',
    
  ],
  borderColor:'rgba(255, 205, 80,0)',  
  
    }
  ]};

public  exampleHalf:ChartDataSets[] = [{ 
  data:[50,50],
  backgroundColor: [
    'rgb(78, 216, 218)',
    
    'rgb(192, 77, 216)',
    
  ],
  borderColor:'rgba(255, 205, 80,0)',
  
}
];


public startConnection = () => {
this.hubConnection = new signalR.HubConnectionBuilder()
//https://localhost:5001/chart
//http://www.kentico.ozstudio.co.il/chart
.withUrl("https://localhost:5001/chart",{
      
})
.build();

this.hubConnection
.start()
.then(() => console.log('connection started'))
.catch(err => console.log('error') +err);


}

public transferDataListener = () =>{
  this.hubConnection.on('trasferserverdata',(data =>{

    this.t = ([data[0]["dataX"],data[0]["dataY"],data[0]["dataZ"]]); 
    console.log(data[0]);
    var dx = data[0]["dataX"];
    this.data = data;
    this.chartLabels.push(dx);
    this.exampleData[0]["data"].push(dx);
    // this.exampleDouthnut = [{data :[dx*132,dx*43,dx*12],
    //   backgroundColor: [
    //      'rgb(78, 216, 218)',     
    //      'rgb(192, 77, 216)',
    //      'rgb(224, 105, 80)',
        
    //   ],
    //   borderColor:'rgba(255, 205, 80,0)',
    
    // }];
    this.exampleHalf.forEach(datasets =>{
       datasets.data = [this.t[1],this.t[0]];
    });

    this.exampleDouthnut.datasets.forEach(datasets =>{
     // console.log(this.t[1]*700,this.t[0]*1000,this.t[2]*400);
      datasets.data = [this.t[1],this.t[0],this.t[2]];
      
    });
    this.exampleBar.datasets[0].data = [
      this.t[0]
      ];
      this.exampleBar.datasets[1].data = [
        this.t[1]
        ];
        this.exampleBar.datasets[2].data = [
          this.t[2]
          ];
     // console.log(this.exampleBar.datasets[0]);
      
   
    
    
  }))
}


  constructor() { }
}
