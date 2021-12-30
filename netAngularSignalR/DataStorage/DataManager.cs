using System;
using System.Collections.Generic;
using netAngularSignalR.Models;

namespace netAngularSignalR.DataStorage
{
    public class DataManager
    {

        public static List<ChartModel> GetData()
        {
            var r = new Random();

            return new List<ChartModel>
            {
                new ChartModel {dataX = r.Next(1,40),dataY = r.Next(1,40),dataZ =r.Next(1,40)}
               // new ChartModel {Data = {r.Next(1,40),r.Next(1,40),r.Next(1,40)}}
               // new ChartModel {Data = new List<int> {r.Next(1,40),r.Next(1,40),r.Next(1,40)}}
               // new ChartModel {Data = new List<int> {r.Next(1,40)},Label ="label2"},
               // new ChartModel {Data = new List<int> {r.Next(1,40)},Label ="label3"},
               // new ChartModel {Data = new List<int> {r.Next(1,40)},Label ="label4"}
            };


        }


    }
}
