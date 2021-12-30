import { Component,OnInit,ViewChild  } from '@angular/core';
import { ServiceSignalRService } from './service-signal-r.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataSets,ChartConfiguration } from 'chart.js';
import { Label,BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //@ViewChild (BaseChartDirective) chart?: BaseChartDirective;

  public lineChartData: ChartConfiguration['data'] = { //half
    datasets: [
      {
        
        data:[50,50],
       
    backgroundColor: [
       'rgb(78, 216, 218)',
      
      'rgb(192, 77, 216)',
      'rgb(224, 105, 80)',
      
    ],
    borderColor:'rgba(255, 205, 80,0)',  
    
      }
    ]};

 public barColor:string = '0%';
 intervalId: any;
 intervalHalf:any;
 public numb:number =30;
 public exampleHalf:any;
 public newN:any;
 
  
 
 


// public exampleDouthnut:ChartDataSets [] = [{data:[60,60,33],
 // backgroundColor: [
  //  'rgb(78, 216, 218)',
    
  //  'rgb(192, 77, 216)',
  //  'rgb(224, 105, 80)',
    
 // ],
 // borderColor:'rgba(255, 205, 80,0)',
  
  
  
//}];



public chartHalf:any={
  rotation: 1 * Math.PI,
  circumference: 1 * Math.PI, 
  cutoutPercentage: 70
}
 
public chartDoptions:any ={
  cutoutPercentage: 70,
  maintainAspectRatio: false
}
public chartBarOptions:any = {
  legend:{
    display:true
  },
  maintainAspectRatio: false,
  

  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}


  public chartOptions:any = { 
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responive:true,
    borderColor: 'rgb(75, 19, 10)',
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
           // fontSize: 10,
            
          },
          
        }
      ]
    }


  };

 public chartType = 'line';
 public chartDType = 'doughnut';
 public chartBType = 'bar';
 public chartLegend:boolean = true;
 



  constructor (public serv:ServiceSignalRService,private http:HttpClient){
    
  }
 public ale(dx:number,dz:number){
  
  this.lineChartData.datasets.forEach(datasets =>{
   
   datasets.data = [dx,100-dz];
  });
  //this.chart?.update();
 
  }

  ngOnInit(){
    
    this.serv.startConnection();
    this.serv.transferDataListener();
    this.startHttpRequest();
    var t:number = 0;
    var old:number=0;

    
   // this.newN = this.serv.t[0];
   // console.log(this.newN);
   // this.barColor = this.newN.toString() +'%';
    // this.intervalId = setInterval(() =>
    //   { 
       
    //     this.newN = this.serv.t[0];
       
        
    //     if(t == this.newN){
    //       old = t;
    //       this.newN = this.retNewN();
      
        
    //     this.intervalId;
         
        
    //     }
    //     else{
    //       if(old > this.newN){
    //         t--;
    //         this.barColor = t.toString() +'%';

    //       }
    //       if(old < this.newN){
    //        t++;
    //         this.barColor = t.toString() +'%';
    //       } 
    //     }
        
    //   }
    //   , 40);
  
  }
  onResize($event){
    console.log(document.body.scrollHeight);
    this.chartBarOptions = {
      
      maintainAspectRatio: false,
    
    }
    
  }

   retNewN() {
    //return this.newN = Math.floor((Math.random() * 100) + 1);
  }
  
  private startHttpRequest = () => {
    //https://localhost:5001/api/chart
    //http://www.kentico.ozstudio.co.il/api/chart
    this.http.get("https://localhost:5001/api/chart")
    .subscribe(res =>{
      
      console.log(res);
     
    
    });

  }
  

 
}
