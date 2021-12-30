using System;
using System.Collections.Generic;

namespace netAngularSignalR.Models
{
    public class ChartModel
    {
        public List<int> Data { get; set; }
       // public string Label { get; set; }
        public int dataX { get; set; }
        public int dataY { get; set; }
        public int dataZ { get; set; }


        public ChartModel()
        {
            Data = new List<int>();

        }
       

    }
    
}
